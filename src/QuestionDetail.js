import React from 'react';
import RatingSelector from './RatingSelector';
import './Question.css'

const QuestionDetail = ({ selectedQuestion, selectedAnswerKey, ratings, onRatingChange, onSaveToExcel }) => {
  return (
    <div className="question-details">
      <h3>{selectedQuestion.question}</h3>
      <h4>{selectedQuestion.answers[selectedAnswerKey]}</h4>
      <RatingSelector ratings={ratings} onRatingChange={onRatingChange} />
      <button onClick={onSaveToExcel}>Save Ratings to Excel</button>
    </div>
  );
};

export default QuestionDetail;
