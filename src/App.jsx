import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HiddenAudio from './components/HiddenAudio/HiddenAudio';
import TreeTemplates from './components/Tree/TreeTemplates';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>hi</div>} />
        {/* test route -> tree 구현 후 병합 예정 */}
        <Route path='/audio' element={<HiddenAudio />} />
        <Route path='/tree' element={<TreeTemplates />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
