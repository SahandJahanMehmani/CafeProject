import React from 'react'
import './Header.css';
import logo from "./images/logo.webp"

export default function Header (){
    const [isMenuOpen , setIsMenuOpen] = React.useState (false)

    const toggleMenu = () => {
        setIsMenuOpen (!isMenuOpen)
    }

    const scrollToFooter = () => {
        const footer = document.getElementById('footer');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
        }
        toggleMenu()
    };

    const scrollToAbout = () => {
        const about = document.getElementById('about');
        if (about) {
            about.scrollIntoView({ behavior: 'smooth' });
        }
        toggleMenu()
    };

    const scrollToMenu = () => {
        const menu = document.getElementById('menu');
        if (menu) {
            menu.scrollIntoView({ behavior: 'smooth' });
        }
        toggleMenu()
    };

    return (
        <>
        <nav>
            <button className="hamburger-button" onClick ={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <h1 className='nav-text'>Cafe 300 Mil</h1>
            <img className="nav-logo" src={logo}/>
        </nav>
        {isMenuOpen && (
                <div className="menu-window">
                    <ul>
                        <li onClick={scrollToMenu}>منو</li>
                        <li onClick={scrollToAbout}>درباره ما</li>
                        <li onClick={scrollToFooter}>ارتباط با ما</li>
                    </ul>
                </div>
            )}
        </>
    )
}