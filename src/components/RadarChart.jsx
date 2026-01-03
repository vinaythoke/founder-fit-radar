import React, { forwardRef } from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const RadarChart = forwardRef(({ data }, ref) => {
    // data is { vision: 3, market: 4... }

    const labels = [
        'Vision',
        'Market',
        'Execution',
        'Team',
        'Finance',
        'Founder'
    ];

    const keys = ['vision', 'market', 'execution', 'team', 'financial', 'founder'];
    const values = keys.map(k => data[k] || 0);

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Founder Fit',
                data: values,
                backgroundColor: 'rgba(59, 130, 246, 0.2)', // Blue with opacity
                borderColor: '#3b82f6', // Blue 500
                borderWidth: 2,
                pointBackgroundColor: '#3b82f6',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#3b82f6',
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                angleLines: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
                pointLabels: {
                    color: '#94a3b8',
                    font: {
                        size: 12,
                        family: 'Inter',
                        weight: '600'
                    }
                },
                ticks: {
                    display: false,
                    stepSize: 1,
                    max: 5,
                    min: 0,
                },
                suggestedMin: 0,
                suggestedMax: 5,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: '#1e293b',
                titleColor: '#fff',
                bodyColor: '#cbd5e1',
                callbacks: {
                    label: function (context) {
                        return 'Score: ' + context.raw;
                    }
                }
            }
        },
    };

    return <Radar ref={ref} data={chartData} options={options} />;
});

RadarChart.displayName = 'RadarChart';

export default RadarChart;
