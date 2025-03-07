import React from 'react';

const TopNav = ({ selectedAnswerKey, onSelectAnswer }) => {
  return (
    <div className="topnav">
      {['A', 'B', 'C', 'D', 'E'].map((answerKey) => (
        <button
          key={answerKey}
          className={selectedAnswerKey === answerKey ? 'active' : ''}
          onClick={() => onSelectAnswer(answerKey)}
        >
           {answerKey}
        </button>
      ))}
    </div>
  );
};

export default TopNav;
