import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { redirect, useNavigate } from "react-router-dom";


export default function Home ({socket} : {socket : any}) {
    const [name, setName] = useState('')
    const [flag, setFlag] = useState(false)

    const navigate = useNavigate();

    const inputRef = useRef(null);

    useEffect(() => {
        
    }, [])

    function handleInputChange (name : string) {
        setName(name)
        if (name.length > 4) {
            setFlag(true)
        }
    }

    function createLobby () {
        if (flag) {
            axios.post('http://localhost:3001/newLobby', {
                user: name, admin: true
            }).then(res => navigate("/lobby/" + res.data.id))
        }
    }

    function searchLobbys () {
        if (flag) {
            axios.post('http://localhost:3001/searchLobby/' + inputRef.current.value, {
                user: name
            })
            .then(res => navigate("/lobby/" + res.data.id)) // Joan es hermoso uwu
        }
    }

    return (
        <main>
            <input placeholder="Ingrese su nombre" onChange={(e) => handleInputChange(e.target.value)}></input>
            <button onClick={() => createLobby()}>Crear sala</button>
            <input placeholder="Id de la sala" ref={inputRef}/>
            <button onClick={() => searchLobbys()}>Unirse a sala</button>
        </main>
    )
}