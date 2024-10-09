import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import styles from '../../App.css'

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg mb-4">
        <div className="container">
            <Link to="/" className="fs-3 ubuntu navbar-brand">Rick & Morty <span className="text-primary">Explorer</span></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <style jsx>
                {`button[aria-expanded="false"] > .close {
                    display: none;
                    color:"white"
                }
                button[aria-expanded="true"] > .open {
                    display: none;
                    color:"white"
                }`}</style>
            <i class="fas fa-bars open"></i>
            <i class="fas fa-times close"></i>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav fs-5">
                <li className="nav-item">
                <NavLink to="/characters" activeClassName="active" className="nav-link" >Characters</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/episodes" className="nav-link" >Episodes</NavLink>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
