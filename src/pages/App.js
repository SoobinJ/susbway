import React, { useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Start from './Start';



import './App.css';
import InfoItem from './InfoItem';

function App() {

  return (

    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Start/>}></Route>
          <Route path='info' element={<InfoItem/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
