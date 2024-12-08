
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './Page/Home';
import About from './Page/About';
import Nav from './Navbar/Nav';
import Login from './Page/Login';
import Ragister from './Page/Ragister';
import Card from './Page/Card';
import Student from './Components/Card/Student';
import Laptop from './Page/Laptop';
import Mobile from './Page/Mobile';
import Shoose from './Page/Shoose';
import Tv from './Page/Tv';
import Music from './Page/Music';
import Audio from './Page/Audio';
import Video from './Page/Video';
import NewsItem from './News/NewsItem';
import Bussiness from './News/Bussiness';
import Cricket from './News/Cricket';
import Actress from './News/Actress';
import Sports from './News/Sports';
import Footer from './Page/Footer';



const Main = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/ragister" element={<Ragister />} />
        <Route path="/card" element={<Card />} />
        <Route path="/student" element={<Student />} />
        <Route path="/laptop" element={<Laptop/> } />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/shoose" element={<Shoose />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/music" element={<Music />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/video" element={<Video />} />
        {/* <div className="container"> */}
        <Route path="/newsitem" element={<NewsItem btn="Click Me"/>} />
        <Route path="/bussiness" element={<Bussiness/>} />
        <Route path="/cricket" element={<Cricket/>} />
        <Route path="/sports" element={<Sports/>} />
        <Route path="/actress" element={<Actress/>} />
        {/* </div> */}
        

        
      
        
        

      </Routes>
      <Footer/>
    </>
  )
}

export default Main;