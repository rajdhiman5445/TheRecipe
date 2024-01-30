import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css'

const TopHeader = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  }
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <NavLink to="/"><h1>TheRecipe</h1></NavLink>
          </div>
          <div className='menu-icon' onClick={toggleNav}>Menu</div>
          <div className={`nav-elements  ${showNav && 'active'}`}>
            <ul>
              <li>
                <NavLink to="/search">Search</NavLink>
              </li>
              <li>
                <NavLink to="/">Featured Recipes</NavLink>
              </li>
              <li>
                <NavLink to="/popular">Popular Recipes</NavLink>
              </li>
              <li>
                <NavLink to="/all">All Recipes</NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </>

  )
}

export default TopHeader