import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainApp from './components/MainApp';
import NoteApp from './lifecycleapp/NoteApp';

function App() {
  return (
    <div className="App">
       {/* <MainApp/> */}
       <NoteApp/>
    </div>
  );
}

export default App;
