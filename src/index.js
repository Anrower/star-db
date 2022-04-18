import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app'

// New sintax React 17^ import ReactDOM from react-dom/client
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

// Old sintax React 16 && <
// ReactDOM.render(<App />, document.getElementById('root'));
