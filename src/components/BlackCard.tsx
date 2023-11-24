import "../styles/cards.css"
import logo from "../assets/images/logo_cards.png"

export default function BlackCard ({text} : {text: string}) {


    return (
        <div  className="card black">
            <p className="card__text">{text}</p>
            <img src={logo}/>
        </div>
    )
}