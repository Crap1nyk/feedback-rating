import React from 'react';
import './Rating.css';

const RatingSelector = ({ ratings, onRatingChange }) => {
  return (
    <div>
      {['correctness', 'accuracy', 'clarity', 'completeness', 'relevance'].map((param) => (
        <div key={param}>
          <label>{param.charAt(0).toUpperCase() + param.slice(1)}:</label>
          <select value={ratings[param] || 0} onChange={(e) => onRatingChange(param, e.target.value)}>
            <option value="0">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default RatingSelector;
