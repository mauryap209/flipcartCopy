import React from 'react';
import { Link } from 'react-router-dom';
import '../Page/Some.css';

const Mobi = (props) => {
    return (
        <>
            <div class="card bg bg-light div1" style={{marginTop:"75px"}}>
                <img src={props.img} class="card-img-top img11" />
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-text">{props.text}</p>
                    <input type='button' value={props.btn1} class="btn1  " />
                    <input type='button' value={props.btn2} class="btn2 btn1 " />
                </div>
            </div>
        </>
    )
}

const Mobile = () => {
    return (
        <>
        {/* <h1>Mobiles</h1> */}
           <Mobi img="./mobile/m1.jpeg" name="Mobile" text="Best Mobile for you" btn1="Add to Cart" btn2="Buy Now"/>
           <Mobi img="./mobile/m2.jpg" name="Mobile" text="Best Mobile for you" btn1="Add to Cart" btn2="Buy Now"/>
           <Mobi img="./mobile/m3.jpg" name="Mobile" text="Best Mobile for you" btn1="Add to Cart" btn2="Buy Now"/>
           <Mobi img="./mobile/m4.png" name="Mobile" text="Best Mobile for you" btn1="Add to Cart" btn2="Buy Now"/>
           <Mobi img="./mobile/m5.jpg" name="Mobile" text="Best Mobile for you" btn1="Add to Cart" btn2="Buy Now"/>
           <Mobi img="./mobile/m6.jpg" name="Mobile" text="Best Mobile for you" btn1="Add to Cart" btn2="Buy Now"/>
           <Mobi img="./mobile/m7.jpg" name="Mobile" text="Best Mobile for you" btn1="Add to Cart" btn2="Buy Now"/>
           <Mobi img="./mobile/m8.png" name="Mobile" text="Best Mobile for you" btn1="Add to Cart" btn2="Buy Now"/>
           <Mobi img="./mobile/m9.webp" name="Mobile" text="Best Mobile for you" btn1="Add to Cart" btn2="Buy Now"/>
           <Mobi img="./mobile/m7.jpg" name="Mobile" text="Best Mobile for you" btn1="Add to Cart" btn2="Buy Now"/>
           
          

        </>
    )
}

export default Mobile;