import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Home = () => {
const {theme, toggleTheme} = useContext(ThemeContext)


  return (
    <div>
      <h1>Página inicial</h1>
      <button onClick={toggleTheme}>Mudar tema</button>
      <p>o tema atual é: {theme}</p>
      </div>
  )
}

export default Home