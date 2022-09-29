import React from "react";
import './Card.css'
import kcal from '../../assets/kcal.svg'

const Card = (props) => {
    return (
        <div className="CardContent">
            <div className="CardIcon">
                <img src={props.icon} alt="icon"/>
            </div>
            <div className="CardInfos">
                <div className="CardData">{props.content}</div>
                <div className="CardTitle">{props.type}</div>
            </div>

        </div>
    )
}

export default Card