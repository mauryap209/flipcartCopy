import React from 'react';
import '../Page/Some.css';
// import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';
const Audio1=(props)=>{
  return(
    <>
      <div class="card bg bg-light audio1" style={{marginTop:"75px"}}>
        <img src={props.img} class="card-img-top img15" />
        <div class="card-body">
          <p class="card-text">{props.text}</p>
          {/* <ShakaPlayer autoPlay src="./music/mai.mp3" />; */}
          <button onClick="play" class=" btn3" >{props.play}</button>
        </div>
      </div>
    </>
  )
}

const Audio = () => {
  return (
    <>
    <Audio1 img="./music/v4.gif" name="Mai chali mai chali" text="Best Song" play="Play"/>
    <Audio1 img="./music/v4.gif" name="Mai chali mai chali" text="Best Song" play="Play"/>
    <Audio1 img="./music/v4.gif" name="Mai chali mai chali" text="Best Song" play="Play"/>
    <Audio1 img="./music/v4.gif" name="Mai chali mai chali" text="Best Song" play="Play"/>
    <Audio1 img="./music/v4.gif" name="Mai chali mai chali" text="Best Song" play="Play"/>
      


       




   {
    function play(){
      alert('Hello Audio');
    }
   
   }
    </>
  )
}

export default Audio