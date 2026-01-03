import React, { useRef } from 'react';
import RadarChart from './RadarChart';
import { INSIGHTS } from '../data/insights';
import jsPDF from 'jspdf';
import './ResultsView.css';

const ResultsView = ({ results, onReset }) => {
    const chartRef = useRef(null);
    const { score100, band, lowestDomain, domainAverages } = results;
    const insight = INSIGHTS[lowestDomain] || INSIGHTS.vision; // Fallback

    const generatePDF = () => {
        const doc = new jsPDF();

        // Header
        doc.setFontSize(20);
        doc.text("Founder Fit Radar Report", 20, 20);

        // Score
        doc.setFontSize(14);
        doc.text(`Score: ${score100} / 100`, 20, 30);
        doc.text(`Band: ${band.label}`, 20, 40);

        // Blunt Insight
        doc.setFontSize(12);
        doc.setTextColor(239, 68, 68); // Red color for bluntness? Or just black.
        doc.text(`" ${insight.blunt} "`, 20, 50);
        doc.setTextColor(0, 0, 0);

        // Chart
        if (chartRef.current) {
            try {
                const chartImage = chartRef.current.toBase64Image();
                const imgProps = doc.getImageProperties(chartImage);
                const pdfWidth = doc.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * (pdfWidth - 40)) / imgProps.width;
                doc.addImage(chartImage, 'PNG', 20, 60, pdfWidth - 40, pdfHeight);

                // Actions (below chart)
                let yPos = 60 + pdfHeight + 10;

                doc.setFontSize(14);
                doc.text("Prioritized Actions:", 20, yPos);
                yPos += 10;

                doc.setFontSize(10);
                insight.actions.forEach((action, i) => {
                    doc.text(`${i + 1}. ${action}`, 25, yPos);
                    yPos += 7;
                });

                yPos += 5;
                doc.setFontSize(14);
                doc.text("Quick Wins (<2 Weeks):", 20, yPos);
                yPos += 10;

                doc.setFontSize(10);
                insight.quickWins.forEach((win, i) => {
                    doc.text(`- ${win}`, 25, yPos);
                    yPos += 7;
                });

            } catch (e) {
                console.error("Chart image capture failed", e);
            }
        }

        doc.save("founder-fit-radar-report.pdf");
    };

    const generateCSV = () => {
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Domain,Score\n";
        Object.entries(domainAverages).forEach(([k, v]) => {
            csvContent += `${k},${v}\n`;
        });
        csvContent += `\nTotal Score,${score100}\nBand,${band.label}`;

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "founder_fit_data.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="results-container fade-in">
            <div className="score-header text-center">
                <h1 className="score-title" style={{ color: band.color }}>{score100}</h1>
                <h2 className="score-subtitle" style={{ color: band.color }}>{band.label}</h2>
                <p className="text-secondary" style={{ marginTop: '0.5rem' }}>Readiness Score</p>
            </div>

            <div className="chart-container">
                <RadarChart ref={chartRef} data={domainAverages} />
            </div>

            <div className="insight-card">
                <h3 className="insight-title">The Blunt Truth</h3>
                <p className="insight-text">"{insight.blunt}"</p>
            </div>

            <div className="actions-grid">
                <div className="action-column">
                    <h3>Top 3 Priorities</h3>
                    <ol className="action-list">
                        {insight.actions.map((act, i) => (
                            <li key={i}>{act}</li>
                        ))}
                    </ol>
                </div>
                <div className="action-column">
                    <h3>Quick Wins</h3>
                    <ul className="quick-list">
                        {insight.quickWins.map((win, i) => (
                            <li key={i}>{win}</li>
                        ))}
                    </ul>
                </div>
                <div className="action-column stop-column">
                    <h3>Stop Doing This</h3>
                    <p className="stop-text">{insight.stop}</p>
                </div>
            </div>

            <div className="export-actions">
                <button className="btn btn-ghost" onClick={generateCSV}>Download CSV</button>
                <button className="btn btn-primary" onClick={generatePDF}>Download PDF Report</button>
            </div>

            <div className="restart-action text-center" style={{ marginTop: '2rem' }}>
                <button className="btn btn-ghost" onClick={onReset}>Start Over</button>
            </div>
        </div>
    );
};

export default ResultsView;
