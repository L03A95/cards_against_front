import { useState } from "react"
import { useParams } from "react-router"
import axios, { Axios } from "axios"


export default function Lobby () {
    const [lobby, setLobby] = useState({
        id: 0,
        players: []
    })

    let {id} = useParams() 

    axios.get('http://localhost:3001')



    return (
        <>
            <h1>This lobby is: {lobby.id}</h1>
            <h2>Players:</h2>
            <ul>

            </ul>
        </>
    )
}