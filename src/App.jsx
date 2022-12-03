import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HiddenAudio from './components/HiddenAudio/HiddenAudio';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>hi</div>} />
        {/* test route -> tree 구현 후 병합 예정 */}
        <Route path='/audio' element={<HiddenAudio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
