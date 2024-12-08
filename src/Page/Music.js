import React from 'react';
import { Link } from 'react-router-dom';
import '../Page/Some.css';

const Elc = () => {
  return (
    <>
       <section>
            <div class="card bg bg-light music" style={{marginTop:"75px"}}>
                    <img src="./music/music1.webp" class="card-img-top img12" />
                    <div class="card-body">
                        <h5 class="card-title">Audio</h5>
                        <p class="card-text">Some quick example</p>
                        <Link to="/audio" class="btn btn-primary">Audio Player</Link>
                    </div>
                </div>

                <div class="card bg bg-light music">
                    <img src="./music/v3.gif" class="card-img-top img12" />
                    <div class="card-body">
                        <h5 class="card-title">Video</h5>
                        <p class="card-text">Some quick example text to.</p>
                        <Link to="/video" class="btn btn-primary">Video Player</Link>
                    </div>
                </div>

               

            </section>
    </>
  )
}

export default Elc