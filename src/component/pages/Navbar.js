import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
     
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-5">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">ABOUT US</NavLink>
        </li>
        <li className='nav-item'>
        <li className="nav-item right-menu dropdown">
          <NavLink className="nav-link dropdown-toggle" to="/services" id="navbarDropdownMenuLink" role="button"   aria-expanded="false">
            SERVICES
          </NavLink>
          <ul class="dropdown-menu dr-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><NavLink className="dropdown-item" to="/hotelbooking">Hotel Bookings</NavLink></li>
            <li><NavLink className="dropdown-item" to="/mice">MICE</NavLink></li>
            <li><NavLink className="dropdown-item" to="/traveldesk">Travel Desk</NavLink></li>
          </ul>
        </li>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar