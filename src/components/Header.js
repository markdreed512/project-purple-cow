import React from 'react'
import './styles/Header.css'
function Header() {
  return (
    <header >
        <div className="logo">
            <a href="https://fearless.tech/">PPC</a>
        </div>
        <nav className="primary-nav">
            <ul>
                <li><a href="https://fearless.tech/identity">core</a></li>
                <li><a href="https://fearless.tech/people">crew</a></li>
                <li><a href="https://fearless.tech/purplecow">cow</a></li>
            </ul>     
        </nav>     
    </header>
  )
}

export default Header