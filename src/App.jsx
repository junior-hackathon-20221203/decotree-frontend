import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>hi</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
