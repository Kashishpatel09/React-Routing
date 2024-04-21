import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid"> 
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" href="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" href="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" href="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" href="/newbrabds">New Brands</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" href="/profile">Profile</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" href="/contact">Contact</NavLink>
        </li>
        </ul>
        <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>




    </div>
  )
}

export default Navbar