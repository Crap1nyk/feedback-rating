import React from 'react';
import RatingSelector from './RatingSelector';
import './Question.css';

const QuestionDetail = ({ selectedQuestion, selectedAnswerKey, ratings, onRatingChange, onSaveToExcel }) => {
  return (
    <div className="question-details">
      {/* Question Title */}
      <h3>{selectedQuestion.question}</h3>

      {/* Scrollable Answer Content */}
      <div
        className="answer-container"
        style={{
          maxHeight: '300px',          // Adjust height as needed
          overflowY: 'auto',           // Enables vertical scrolling
          backgroundColor: '#f8f8f8',
          padding: '1em',
          borderRadius: '5px',
          marginTop: '1em',
          border: '1px solid #ddd'
        }}
      >
        <pre
          className="answer-content"
          style={{
            whiteSpace: 'pre-wrap',
            fontFamily: 'serif',
            lineHeight: '1.5',
            margin: 0                 // Remove margin to fit the container nicely
          }}
        >
          {selectedQuestion.answers[selectedAnswerKey]}
        </pre>
      </div>

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
