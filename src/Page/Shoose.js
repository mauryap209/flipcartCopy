import React from 'react';
import { Link } from 'react-router-dom';
import '../Page/Some.css';

const Shoose1 = (props) => {
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
    )}
const Shoose = () => {
    return (
        <>
           <Shoose1 img="./shoose/s1.jpg" name="Shoose" text="Best Shoose for you" btn1="Add to Cart" btn2="Buy Now"/>  
           <Shoose1 img="./shoose/s2.webp" name="Shoose" text="Best Shoose for you" btn1="Add to Cart" btn2="Buy Now"/>
           <Shoose1 img="./shoose/s3.jpeg" name="Shoose" text="Best Shoose for you" btn1="Add to Cart" btn2="Buy Now"/>
           <Shoose1 img="./shoose/s4.jpg" name="Shoose" text="Best Shoose for you" btn1="Add to Cart" btn2="Buy Now"/> 
           <Shoose1 img="./shoose/s5.jpg" name="Shoose" text="Best Shoose for you" btn1="Add to Cart" btn2="Buy Now"/>
           <Shoose1 img="./shoose/s6.jpg" name="Shoose" text="Best Shoose for you" btn1="Add to Cart" btn2="Buy Now"/>
           <Shoose1 img="./shoose/s7.jpeg" name="Shoose" text="Best Shoose for you" btn1="Add to Cart" btn2="Buy Now"/> 
           <Shoose1 img="./shoose/s8.jpeg" name="Shoose" text="Best Shoose for you" btn1="Add to Cart" btn2="Buy Now"/>
           <Shoose1 img="./shoose/s9.jpg" name="Shoose" text="Best Shoose for you" btn1="Add to Cart" btn2="Buy Now"/>  
           <Shoose1 img="./shoose/s7.jpeg" name="Shoose" text="Best Shoose for you" btn1="Add to Cart" btn2="Buy Now"/>    
           

        </>
    )
}

export default Shoose