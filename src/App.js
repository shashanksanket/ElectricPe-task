import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Resume from './Pages/resume';

function App() {
  return (
    <Router>
      <div className="App m-12">
        <Routes>
          <Route path="/" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;