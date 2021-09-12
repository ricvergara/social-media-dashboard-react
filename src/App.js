import React, { useState, useEffect } from 'react';
import './globals.css';
import Header from './header';
import Overview from './overview';
import TopCardList from './top-card-list';
import Switch from './switch'

function App() {
  const [darkMode, setDarkMode]=useState(false)
    const [checked, setChecked]=useState(false)

  const mainClass=darkMode ? 'is-dark-mode' : 'is-light-mode'

  function changeMaedia(mq) {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  
  }
  

  useEffect(() => {
    const mq=window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(changeMaedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }, [])


  return <main className={mainClass}>
    <Header>
      <Switch setDarkMode={setDarkMode} checked={checked} setChecked={setChecked} />
    </Header>
    <TopCardList />
    <Overview />
  </main>;
}

export default App;
