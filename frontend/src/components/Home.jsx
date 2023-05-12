import React from 'react'
import "./pages.css";
import CV from '../assets/FahadCV.pdf';
const Home = () => {
  return (
    <>
    <div id='Home' className='page'>
      <h3>Hello I am Fahad Khan</h3>
      <h1>Front end React Developer</h1>
      <p>I am an Experienced front-end React developer proficient in building interactive and responsive user interfaces. Strong understanding of JavaScript, HTML, and CSS. Skilled in component-based development and integrating APIs. Passionate about creating seamless and visually appealing web applications.Feel free to know about me thorugh the cv down below</p>
      <div className='home_cv_download'>
        <a href={CV} download="Fahad CV.pdf" className='icon-conatiner'><p >CV Download</p></a>    
      </div>
    </div>
    </>
  )
}

export default Home