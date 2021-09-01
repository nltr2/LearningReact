import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainApp from './components/MainApp';
import NoteApp from './lifecycleapp/NoteApp';
import RestApp from './lifecycleapp/RestApp';

function App() {
  return (
    <div className="App">
       {/* <MainApp/> */}
      {/*  <NoteApp/> */}
      <RestApp/>
    </div>
  );
}

export default App;
