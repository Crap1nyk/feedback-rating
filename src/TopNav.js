import React from 'react';
import './TopNav.css'; // Make sure your styles are linked!

const TopNav = ({
  selectedAnswerKey,
  onSelectAnswer,
  reviewStatus = {},
  currentQuestionId,
}) => {
  return (
    <div className="topnav">
      {['A', 'B', 'C', 'D', 'E'].map((answerKey) => {
        const isReviewed =
          reviewStatus?.[currentQuestionId]?.[answerKey] || false;
        const isSelected = selectedAnswerKey === answerKey;

        return (
          <button
            key={answerKey}
            className={`answer-button ${isSelected ? 'active' : ''} ${
              isReviewed ? 'reviewed' : ''
            }`}
            onClick={() => onSelectAnswer(answerKey)}
          >
            {answerKey}
            {isReviewed && (
              <span className="reviewed-indicator" title="Reviewed">
                ✓
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default TopNav;
