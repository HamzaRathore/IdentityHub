import React, { useState } from 'react'
import Home from './pages/Home'
import { themeContext } from './context/context';

function App() {

  const [theme,setTheme]=useState('dark');

  return (
    <>
    <themeContext.Provider value={{theme,setTheme}}>
      <div className={theme}>
      <Home/>
      </div>
      </themeContext.Provider>
    </>
  )
}

export default App
