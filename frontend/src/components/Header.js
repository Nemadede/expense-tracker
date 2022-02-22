import React from 'react'
import '../css/header.css'

function Header() {
    return (
        <header className="main-header">
            <ul className="main-head-container">
                <li className="header-logo"><span>Xpense </span>Track</li>
                <li>
                    <ul className="left-header">
                        <li className="menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </li>
                        <li>
                            <span className="header-image">
                                {/* <img src="../images/picA1.png" alt="avatar" /> */}
                                <span></span>
                            </span>
                        </li>
                    </ul>
                </li>
            </ul>
        </header>
    )
}

export default Header
