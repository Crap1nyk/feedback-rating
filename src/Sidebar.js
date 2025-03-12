import React, { useState } from 'react';
import './sidebar.css';

const Sidebar = ({ questions, onSelectQuestion }) => {
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  const handleQuestionClick = (question) => {
    setSelectedQuestionId(prevId => (prevId === question.id ? null : question.id));
    
    // Call the parent function with the full question object
    if (onSelectQuestion) {
      onSelectQuestion(question);
    }
  };

  return (
    <div className="sidebar">
      <h2>Questions</h2>

      {questions.map((q) => (
        <div
          key={q.id}
          className={`question-item ${selectedQuestionId === q.id ? 'selected' : ''}`}
          onClick={() => handleQuestionClick(q)}
        >
          {q.question}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
