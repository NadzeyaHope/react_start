import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import LeftBar from './components/LeftBar/LeftBar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className='Content-wrapper'>
      {Navigation()}
      <div className='Profile-main'>
      {LeftBar()}
      {Profile()}
      </div>
    </div>
  )
}


export default App;
