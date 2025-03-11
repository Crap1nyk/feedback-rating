import React from 'react';
import './sidebar.css';

const sections = ['A', 'B', 'C', 'D', 'E'];

const Sidebar = ({ questions, onSelectQuestion, reviewStatus }) => {
  return (
    <div className="sidebar">
      <h2>Questions</h2>

      {questions.map((q) => (
        <div key={q.id} className="question-block">
          <h4>{q.question}</h4>

          <div className="section-buttons">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => onSelectQuestion(q, section)}
                className={reviewStatus[q.id] && reviewStatus[q.id][section] ? 'reviewed' : ''}
              >
                {section} {reviewStatus[q.id] && reviewStatus[q.id][section] && <span className="reviewed-indicator">✔️</span>}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
