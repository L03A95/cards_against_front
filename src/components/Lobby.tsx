import { useState } from "react"
import { useParams } from "react-router"
import axios from "axios"


export default function Lobby () {
    const [lobby, setLobby] = useState({
        id: 0,
        players: []
    })

    let {id} = useParams() 

    axios.post('http://localhost:3001/searchLobby/' + id)
    .then((res) => setLobby(res.data))



    return (
        <>
            <h1>This lobby is: {lobby.id}</h1>
            <h2>Players:</h2>
            <ul>
                {lobby.players.map((e) => {
                    return <li>{e.user}</li>
                })}
            </ul>
        </>
    )
}