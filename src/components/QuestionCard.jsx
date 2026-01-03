import React from 'react';
import './QuestionCard.css';

const QuestionCard = ({ question, answer, onAnswer, onNext, onBack, isFirst, isLast }) => {
    return (
        <div className="card question-card fade-in">
            <div className="question-header">
                <span className="domain-tag">{question.domain}</span>
                <h2 className="question-text">{question.text}</h2>
            </div>

            <div className="options-container">
                {[1, 2, 3, 4, 5].map((value) => (
                    <button
                        key={value}
                        className={`option-btn ${answer === value ? 'selected' : ''}`}
                        onClick={() => onAnswer(value)}
                    >
                        <span className="option-value">{value}</span>
                        <span className="option-label">
                            {value === 1 ? 'No / Never' : value === 5 ? 'Yes / Always' : value === 3 ? 'Some' : ''}
                        </span>
                    </button>
                ))}
            </div>

            <div className="navigation">
                <button className="btn btn-ghost" onClick={onBack} disabled={isFirst}>
                    Back
                </button>
                <button
                    className="btn btn-primary"
                    onClick={onNext}
                    disabled={!answer}
                >
                    {isLast ? 'Finish' : 'Next'}
                </button>
            </div>
        </div>
    );
};

export default QuestionCard;
