import React, { useEffect, useState } from 'react';
import './nav.css'
import ToggleTheme from './ToggleTheme';
function Nav(props) {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        })
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])
    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <img className='nav_logo' src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg' alt='logo' />
            <ToggleTheme />
        </div>
    );
}

export default Nav;