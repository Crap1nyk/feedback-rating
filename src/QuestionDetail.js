import React from 'react';
import RatingSelector from './RatingSelector';
import './Question.css';

const QuestionDetail = ({ selectedQuestion, selectedAnswerKey, ratings, onRatingChange, onSaveToExcel }) => {
  return (
    <div className="question-details">
      {/* Question Title */}
      <h3>{selectedQuestion.question}</h3>

      {/* Answer Content inside a <pre> tag */}
      <pre
        className="answer-content"
        style={{
          whiteSpace: 'pre-wrap',      // Ensures long lines wrap nicely
          backgroundColor: '#f8f8f8',  // Light background
          padding: '1em',              // Padding for spacing
          borderRadius: '5px',         // Rounded corners
          fontFamily: 'serif',     // Monospaced font for code-like appearance
          lineHeight: '1.5',           // Better readability
          marginTop: '1em'
        }}
      >
        {selectedQuestion.answers[selectedAnswerKey]}
      </pre>

      {/* Rating Selector */}
      <RatingSelector ratings={ratings} onRatingChange={onRatingChange} />

      {/* Save to Excel Button */}
      <button
        onClick={onSaveToExcel}
        className="save-button"
      >
        💾 Save Ratings to Excel
      </button>
    </div>
  );
};

export default QuestionDetail;
