import React from 'react'
import react from '../images/react.png'

export const NavBar = () => {
    return (
        <div className='container'>
            <header>
                <nav className='navbar'>
                    <h1><img src={react} alt='react' />ReactFacts</h1>
                    <h2>React Course - Project 1</h2>
                </nav>
            </header>
        </div>
    )
}
