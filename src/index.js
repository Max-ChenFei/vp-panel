import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import VPPanel from './VPPanel';
import reportWebVitals from './reportWebVitals';
import {
  nodes as initialNodes,
  edges as initialEdges,
} from './dummyDataForTest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<VPPanel nodesConfig={initialNodes} edgesConfig={initialEdges} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
