import React from 'react'
import { Link } from 'react-router-dom';
const News = (props) => {
  //   <img src={props.img} className="img" />
  //   <h3 className='id'> Id : {props.eid}</h3>
  //   <h3> Name : {props.ename}</h3>
  //   <h3> City : {props.ecity}</h3>
  //   <h3> Age : {props.eage}</h3>
  // </div>
  return (
    <>
      {/* <h1>Hello news</h1> */}
      <div className="card bg bg-light lap10"  style={{marginTop:"40px"}}>
        <img src={props.img} className="card-img-top img10" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.text} </p>
          <Link to={props.link} className="btn btn-primary">{props.btn}</Link>
        </div>

      </div>
    </>
  )

}
const NewsItem = (props) => {
  return (
    <div>
      <h1>Hello News</h1>
      <News img=".//laptop/l5.jpg" name="Bussiness" text="Some quick example" btn="Click Me" link="/bussiness" />

      <News img="./mobile/m9.webp" name="Sports" text="Some quick example" btn="Click Me" link="/sports" />

      <News img=".//laptop/l5.jpg" name="Cricket" text="Some quick example" btn="Click Me" link="/cricket" />

      <News img="./mobile/m9.webp" name="Actress" text="Some quick example" btn="Click Me" link="/actress" />


    </div>
  )
}

export default NewsItem
