import React from 'react';
import '.'
const Sidebar = ({ questions, onSelectQuestion }) => {
  return (
    <div className="sidebar">
      <h2>Questions</h2>
      {questions.map((q) => (
        <button key={q.id} onClick={() => onSelectQuestion(q)}>
          {q.question}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
