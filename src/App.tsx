import { useState } from 'react'
import './App.css'
import BlackCard from './components/BlackCard'
import WhiteCard from './components/WhiteCard'

function App() {

  return (
    <>
      <WhiteCard text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quam dicta dolorem, cumque similique'/>
      <BlackCard text='¿Por que no puedo dormir por las noches?'/>
    </>
  )
}



export default App
