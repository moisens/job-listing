import { useState } from 'react'
import './App.scss'
import { data } from './data/data'


function App() {
  {data.map(item => {
    const { id, company } = item;
    return (
      console.log(id, company)
    )
  })}
  return (
    <h2>Hello!!!</h2>
  )
}

export default App
