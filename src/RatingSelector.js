import React from 'react';
import './Rating.css';

const RatingSelector = ({ ratings, onRatingChange, onSubmit }) => {
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
    <div className="rating-table-container">
      <table className="rating-table">
        <thead>
          <tr>
            {parameters.map((param) => (
              <th key={param}>{param.charAt(0).toUpperCase() + param.slice(1)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {parameters.map((param) => (
              <td key={param}>{renderStars(param)}</td>
            ))}
          </tr>
        </tbody>
      </table>

      <button className="submit-button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default RatingSelector;
