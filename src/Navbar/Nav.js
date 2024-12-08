import React from 'react';

import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-secondary ">
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand active" > Home <i className="bi bi-house-heart-fill"></i></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/login" className="nav-link active text-light">Login <i className="bi bi-door-open-fill"></i></Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-light"> About <i className="bi bi-person-lines-fill"></i></Link>
              </li>
              <li className="nav-item">
                <Link to="/newsitem" className="nav-link text-light"> News Item <i className="bi bi-person-lines-fill"></i></Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-dark" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {/* <section>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src=".//laptop/l4.jpg" className="d-block w-100 h-10"  alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div className="carousel-item">
              <img src=".//laptop/l9.jpg" className="d-block w-100 h-10" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div className="carousel-item">
              <img src=".//laptop/l8.jpg" className="d-block w-100 h-10" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </section> */}
    </>
  )
}

export default Nav;