import React from "react";
import './Card.css'
import Proptypes from 'prop-types'

/**
 * A component which render a Card for specified type, unit and content
 * @param {*} props 
 */
const Card = (props) => {

    return (
        <div className="CardContent">
            <div className="CardIcon">
                <img src={props.icon} alt="icon" />
            </div>
            <div className="CardInfos">
                <div className="CardData">{props.content}{props.unit}</div>
                <div className="CardTitle">{props.type}</div>
            </div>

        </div>
    )
}

export default Card

Card.propTypes = {
    icon: Proptypes.string,
    content: Proptypes.number,
    unit: Proptypes.string,
    type: Proptypes.string
}