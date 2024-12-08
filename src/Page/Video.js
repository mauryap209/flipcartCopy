import React from 'react';
import '../Page/Some.css';
import ShakaPlayer from 'shaka-player-react';
import 'shaka-player/dist/controls.css';
const Video1=(props)=>{
  return(
    <>
     <div className='div12' style={{marginTop:"55px"}}>
        <ShakaPlayer class='vi1'  src={props.name} />;
      </div>
    </>
  )
}
const Video = () => {
  return (
    <>
     <Video1 name="./music/mai.mp4"/>
     <Video1 name="./music/mai.mp4"/>

    </>
  )
}

export default Video