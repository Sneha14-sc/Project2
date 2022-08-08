import React from 'react';
import './../App.css';
import {} from 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
   return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <h1 class="navbar-brand">Sneha Choudhari</h1>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
    <div class=" navbar-nav ">
      <Link class="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
      <Link class="nav-item nav-link" to="/about">About</Link>
      <Link class="nav-item nav-link" to="/project">Project</Link>
    </div>
  </div>
</nav>
      </div>
    );
  }

  export default NavBar;