// src/ListWithReadMore.js

import React, { useState } from 'react';
import './ListWithReadMore.css';

const ListWithReadMore = () => {
  const [expanded, setExpanded] = useState(false);

  const elements = [
    'Element 1',
    'Element 2',
    'Element 3',
    'Element 4',
    'Element 5',
    'Element 6',
    'Element 7',
    'Element 8',
    'Element 9',
    'Element 10',
  ];

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <ul>
        {elements.slice(0, expanded ? elements.length : 5).map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
      <button 
        className={`toggle-button ${expanded ? 'read-less' : 'read-more'}`} 
        onClick={toggleExpanded}
      >
        {expanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default ListWithReadMore;
