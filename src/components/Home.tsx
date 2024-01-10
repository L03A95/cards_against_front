import { useEffect, useState } from "react"


export default function Home ({socket} : {socket : any}) {
    const [name, setName] = useState('')
    const [flag, setFlag] = useState(false)

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
            socket.emit('newLobby', 'Sala nueva creada de ' + name)
        }
    }

    function searchLobbys () {
        if (flag) {
            socket.emit('searchLobby', '')
        }
    }

    return (
        <main>
        
            <input placeholder="Ingrese su nombre" onChange={(e) => handleInputChange(e.target.value)}></input>
            <button onClick={() => createLobby()}>Crear sala</button>
            <button>Unirse a sala</button>
        </main>
    )
}