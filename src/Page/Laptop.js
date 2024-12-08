import React from 'react';
import { Link } from 'react-router-dom';
import '../Page/Some.css';
// import '../Style.css'

const Lapi = (props) => {
    return (
        <>
            <div class="card bg bg-light div1" style={{marginTop:"45px"}}>
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

const Laptop = (props) => {
    return (
        <>
        <h1>Laptops</h1>
        <Lapi img="./laptop/l1.png" name="Laptop" text="Best Laptop for you" btn1="Add to Cart" btn2="Buy Now"/>
        <Lapi img="./laptop/l2.jpg" name="Laptop" text="Best Laptop for you" btn1="Add to Cart" btn2="Buy Now"/>
        <Lapi img="./laptop/l3.webp" name="Laptop" text="Best Laptop for you" btn1="Add to Cart" btn2="Buy Now"/>
        <Lapi img="./laptop/l4.jpg" name="Laptop" text="Best Laptop for you" btn1="Add to Cart" btn2="Buy Now"/>
        <Lapi img="./laptop/l5.jpg" name="Laptop" text="Best Laptop for you" btn1="Add to Cart" btn2="Buy Now"/>
        <Lapi img="./laptop/l6.jpg" name="Laptop" text="Best Laptop for you" btn1="Add to Cart" btn2="Buy Now"/>
        <Lapi img="./laptop/l7.jpg" name="Laptop" text="Best Laptop for you" btn1="Add to Cart" btn2="Buy Now"/>
        <Lapi img="./laptop/l8.jpg" name="Laptop" text="Best Laptop for you" btn1="Add to Cart" btn2="Buy Now"/>
        <Lapi img="./laptop/l9.jpg" name="Laptop" text="Best Laptop for you" btn1="Add to Cart" btn2="Buy Now"/>
        <Lapi img="./laptop/l1.png" name="Laptop" text="Best Laptop for you" btn1="Add to Cart" btn2="Buy Now"/>
          
        </>
    )
}

export default Laptop