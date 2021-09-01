import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainApp from './components/MainApp';
import NoteApp from './lifecycleapp/NoteApp';
import RestApp from './lifecycleapp/RestApp';
import { InfoPanel, StatusKey } from './components/conditionalDemo/panel-demo';

function App() {
  return (
    <div className="App">
       {/* <MainApp/> */}
      {/*  <NoteApp/> */}
      {/* <RestApp/> */}
      
      <InfoPanel statusKey = {StatusKey.SUCCESS} info="Great job"/>
      <InfoPanel statusKey = {StatusKey.WARNING} info="Warning"/>
      <InfoPanel statusKey = {StatusKey.ERROR} info="Problem"/>

    </div>
  );
}

export default App;
