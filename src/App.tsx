import './App.css'
import { io } from "socket.io-client"
import Home from './components/home';

const socket = io("http://localhost:3001");

function App() {

  return (
    <>
      <Home socket={socket}></Home>
    </>
  )
}



export default App
