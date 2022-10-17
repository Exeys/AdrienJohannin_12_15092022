import React from "react";
import './Header.css'
import logo from '../../assets/logo.png'
import logoText from '../../assets/logoText.png'


/**
 * A component which render a Header for Profile page
 */
const Header = () => {
    return (
        <nav className="HeaderContainer">
            <a className="HeaderItem" href=".">
                <img src={logo} alt="logo" />
                <img src={logoText} alt="logo" height={17} width={76}/>
            </a>
            <a className="HeaderItem" href="/">Accueil</a>
            <a className="HeaderItem" href=".">Profil</a>
            <a className="HeaderItem" href=".">Réglage</a>
            <a className="HeaderItem" href=".">Communauté</a>
        </nav>
    )
}

export default Header;