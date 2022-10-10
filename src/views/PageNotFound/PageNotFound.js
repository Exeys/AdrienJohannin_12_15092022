import React from "react";
import './PageNotFound.css'
import { Link } from 'react-router-dom'

/**
 * A component which render an Error page
 */
const PageNotFound = () => {
    return (
        <div className='PageNotFoundContent'>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <p className='Redirection'>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </p>
        </div>
    )
}

export default PageNotFound