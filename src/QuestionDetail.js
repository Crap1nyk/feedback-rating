import React from 'react';
import ReactMarkdown from 'react-markdown';
import RatingSelector from './RatingSelector';
import './Question.css';

const QuestionDetail = ({ selectedQuestion, selectedAnswerKey, ratings, onRatingChange, onSaveToExcel }) => {
  return (
    <div className="question-details">
      <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '1rem' }}>
        {selectedQuestion.question}
      </h3>

      <div
        className="answer-container"
        style={{
          maxHeight: '300px',
          overflowY: 'auto',
          backgroundColor: '#ffffff',
          padding: '1em',
          borderRadius: '10px',
          marginTop: '1em',
          border: '1px solid #ddd',
          boxShadow: '0px 2px 6px rgba(0,0,0,0.1)',
          color: '#333',
          marginLeft: '20px', // left margin
          marginRight: '20px'
        }}
      >
        <div className="answer-content">
          <ReactMarkdown
            components={{
              h2: ({ node, ...props }) => (
                <h2
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    marginTop: '1.2rem',
                    marginBottom: '0.8rem',
                    color: '#2a2a2a',
                    borderBottom: '1px solid #eee',
                    paddingBottom: '0.4rem',
                    marginLeft: '20px', // left margin
                    marginRight: '20px'
                  }}
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    marginTop: '1rem',
                    marginBottom: '0.5rem',
                    color: '#444',
                    marginLeft: '20px', // left margin
                    marginRight: '20px'
                  }}
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <p
                  style={{
                    marginBottom: '0.8rem',
                    lineHeight: '1.6',
                    color: '#555'
                  }}
                  {...props}
                />
              ),
              ul: ({ node, ...props }) => (
                <ul
                  style={{
                    paddingLeft: '1.5rem',
                    marginBottom: '1rem',
                    marginLeft: '20px', // left margin
                    marginRight: '20px'
                  }}
                  {...props}
                />
              ),
              li: ({ node, ...props }) => (
                <li
                  style={{
                    marginBottom: '0.5rem',
                    color: '#333',
                    marginLeft: '20px', // left margin
                    marginRight: '20px'
                  }}
                  {...props}
                />
              ),
              strong: ({ node, ...props }) => (
                <strong
                  style={{
                    color: '#000',
                    fontWeight: '700'
                  }}
                  {...props}
                />
              )
            }}
          >
            {selectedQuestion.answers[selectedAnswerKey]}
          </ReactMarkdown>
        </div>
      </div>

      <RatingSelector ratings={ratings} onRatingChange={onRatingChange} />
    </div>
  );
};

export default QuestionDetail;
