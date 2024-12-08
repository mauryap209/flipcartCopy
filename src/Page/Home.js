
import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';

const Group = (props) => {
  return (
    <>
      <div className="card bg bg-light lap10">
        <img src={props.img} className="card-img-top img10" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.text}</p>
          <Link to={props.link} className="btn btn-primary">{props.btn}</Link>
        </div>
      </div>
    </>
  )
}
const Home = () => {
  return (
    <>
      <img style={{marginTop:"55px"}} src="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/9a98ec819d2dfacb.jpg?q=50" class="img-fluid w-100" alt="..." />

      {/* <div className="container-fluid ">

      <div id="carouselExampleCaptions" className="carousel slide w-100" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner container-fluid" >
          <div className="carousel-item active">
            <img src="./Image2/c3.jpg" className="d-block w-100 slider" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./Image2/c2.jpg" className="d-block w-100 slider" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item ">
            <img src="./Image2/c1.jpg" className="d-block w-100 slider" />
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
</div> */}
      <h2>Home</h2>
      <Group img="./laptop/l5.jpg" name="Laptop" text="Some quick example" btn="Choose Best Laptops" link="/laptop" />

      <Group img="./mobile/m9.webp" name="Mobile" text="Some quick example" btn="Choose Best Mobiles" link="/mobile" />

      <Group img="./shoose/s6.jpg" name="Shoose" text="Some quick example" btn="Choose Best Shoose" link="/shoose" />

      <Group img="./tv/t9.jpg" name="TV" text="Some quick example" btn="Choose Best TV" link="/tv" />

      <Group img="./music/gif1.gif" name="Music , Video" text="Enjoy Audio and Video" btn="Audio and Video" link="/music" />


      <button className='btn btn-dark w-100 b1 a1'><Link to='/card'>Team Members</Link></button>

    </>

  )
}

export default Home;