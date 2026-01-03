import React from 'react';

const ProgressBar = ({ current, total }) => {
    const percent = ((current + 1) / total) * 100;

    return (
        <div style={{ width: '100%', maxWidth: '600px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                <span>Question {current + 1} of {total}</span>
                <span>{Math.round(percent)}%</span>
            </div>
            <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '99px', overflow: 'hidden' }}>
                <div
                    style={{
                        width: `${percent}%`,
                        height: '100%',
                        background: 'var(--accent-primary)',
                        transition: 'width 0.5s ease',
                        boxShadow: '0 0 10px var(--accent-glow)'
                    }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
