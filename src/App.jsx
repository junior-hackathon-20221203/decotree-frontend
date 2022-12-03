import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TreeTemplates from './pages/TreePage';
import Survey from './components/Survey/Survey';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* test route -> tree 구현 후 병합 예정 */}
        <Route path='/' element={<Survey />} />
        <Route path='/tree' element={<TreeTemplates />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
