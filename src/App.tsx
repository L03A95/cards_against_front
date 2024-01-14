import './App.css'
import { io } from "socket.io-client"
import Home from './components/home';
import { Route, Routes } from 'react-router';
import Lobby from './components/Lobby';

const socket = io("http://localhost:3001");

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home socket={socket}/>}/>
      <Route path='/lobby/:id' element={<Lobby/>}/>
    </Routes>
  
  )
}



export default App
