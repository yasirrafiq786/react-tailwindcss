import React from 'react';
import ReactDOM from 'react-dom';

const Hello = function() {
    return <div> Hello World</div>;
};

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);