import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { NavLink } from 'react-router-dom'
import "./Navbars.css"
import logo from "../../../Asset/logo.png"
const Navbars = () => {
  return (
    <>
      <div className='navs-wrap'> 
        <nav className="navbar navbar-expand-xl navbar-dark fixed-top" style={{ background: "#434655" }}>
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Mukesh Tiwary</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Web Devlopment</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Digital Marketing
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item" to="/">Action</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/">Another action</NavLink></li>

                    <li><NavLink className="dropdown-item" to="/">Something else here</NavLink></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/">UX/UI Desgin</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">App Devlopment</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/">IOT</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/">About Us</NavLink>
                </li>

                <li className="nav-item letsTalk" >
                  <a className="nav-link" href="#letsTalk">Let's Talk</a>
                </li>

              </ul>

            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbars