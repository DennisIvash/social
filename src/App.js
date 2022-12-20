import React from 'react';
import './App.css';
import Header from './components/header/Header.js';
import NavBar from './components/navbar/NavBar.js';
import Profile from './components/profile/Profile.js';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <NavBar />
      <Profile name={'Elon Musk'}/>
    </div>
  );
}

export default App;


