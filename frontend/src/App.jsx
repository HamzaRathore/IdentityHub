import React, { useState,useEffect } from 'react'
import Home from './pages/Home'
import { themeContext } from './context/context';

function App() {

  const [theme,setTheme]=useState('dark');

   useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#000000" : "#FFFDF6";
    
  }, [theme]);


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
