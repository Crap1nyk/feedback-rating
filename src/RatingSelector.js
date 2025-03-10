import React from 'react';
import './Rating.css';

const RatingSelector = ({ ratings, onRatingChange }) => {
  const parameters = ['correctness', 'accuracy', 'clarity', 'completeness', 'relevance'];

  const renderStars = (param) => {
    const currentRating = ratings[param] || 0;

    return (
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= currentRating ? 'filled' : ''}`}
            onClick={() => onRatingChange(param, star)}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="rating-container">
      {parameters.map((param) => (
        <div key={param} className="rating-item">
          <label>{param.charAt(0).toUpperCase() + param.slice(1)}:</label>
          {renderStars(param)}
        </div>
      ))}
    </div>
  );
};

export default RatingSelector;
