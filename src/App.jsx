import React from 'react';
import './App.scss';
import NoteContainer from './components/NoteContainer';

import SideBar from './components/SideBar';


function App() {
  return (
    <div className="App">
      <div id='main-container'>
        <SideBar />
        <NoteContainer />
      </div>
   </div>
  );
}

export default App;
