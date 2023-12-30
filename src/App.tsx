import { useEffect, useState } from 'react'
import './App.css'
import BlackCard from './components/BlackCard'
import WhiteCard from './components/WhiteCard'
import { io } from "socket.io-client"

const socket = io("http://localhost:3001");

function App() {

  useEffect(() => {
    
    socket.on('mensaje', (data) => {
      console.log(data)

    })
    
      return () => {
        socket.off('mensaje')
      }
  },[])


  return (
    <>
      <WhiteCard text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quam dicta dolorem, cumque similique'/>
      <BlackCard text='¿Por que no puedo dormir por las noches?'/>
      <button onClick={() => socket.emit("mensaje", "hola")}>press</button>
    </>
  )
}



export default App
