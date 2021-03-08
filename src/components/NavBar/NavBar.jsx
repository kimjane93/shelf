import React from 'react';
import { Link } from "react-router-dom";

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
      {user ?
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Shelf</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a className="nav-item nav-link" href="/addresource">Add Resource</a>
              <a className="nav-item nav-link" href="/addcollection">Add Collection</a>
              <a className="nav-item nav-link" href="/search">Search</a>
              <a className="nav-item nav-link" href="/chat">Chat</a>
              <a className="nav-item nav-link" href="/users">Other Shelfers</a>
              <a className="nav-item nav-link" href="/myprofile"  aria-disabled="true">My Profile</a>
              <a className="nav-item nav-link" href=" " onClick={handleLogout}>Log Out</a>
            </div>
          </div>
      </nav>
      :
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Shelf</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a className="nav-item nav-link" href="/login">Log In</a>
              <a className="nav-item nav-link" href="/signup">Sign Up</a>
            </div>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar;
