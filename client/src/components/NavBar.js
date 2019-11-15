import React from 'react';

function NavBar() {
    return (
        <div id="menu">
            <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
                <a className="navbar-brand" href="/">Clinic Center </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
  }
  
  export default NavBar;

