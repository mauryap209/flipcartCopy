import React from 'react'
import { Link } from 'react-router-dom';
import '../Page/Some.css';
const Tv1 = (props) => {
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
const Tv = () => {
    return (
        <>
             <Tv1 img="./tv/t1.jpg" name="TV" text="Best TV for you" btn1="Add to Cart" btn2="Buy Now"/> 
             <Tv1 img="./tv/t2.jpg" name="TV" text="Best TV for you" btn1="Add to Cart" btn2="Buy Now"/> 
             <Tv1 img="./tv/t3.jpg" name="TV" text="Best TV for you" btn1="Add to Cart" btn2="Buy Now"/> 
             <Tv1 img="./tv/t4.jpg" name="TV" text="Best TV for you" btn1="Add to Cart" btn2="Buy Now"/> 
             <Tv1 img="./tv/t5.jpg" name="TV" text="Best TV for you" btn1="Add to Cart" btn2="Buy Now"/> 
             <Tv1 img="./tv/t6.jpg" name="TV" text="Best TV for you" btn1="Add to Cart" btn2="Buy Now"/> 
             <Tv1 img="./tv/t7.jpg" name="TV" text="Best TV for you" btn1="Add to Cart" btn2="Buy Now"/> 
             <Tv1 img="./tv/t8.jpg" name="TV" text="Best TV for you" btn1="Add to Cart" btn2="Buy Now"/> 
             <Tv1 img="./tv/t9.jpg" name="TV" text="Best TV for you" btn1="Add to Cart" btn2="Buy Now"/> 
             <Tv1 img="./tv/t8.jpg" name="TV" text="Best TV for you" btn1="Add to Cart" btn2="Buy Now"/> 
        </>
    )
}

export default Tv