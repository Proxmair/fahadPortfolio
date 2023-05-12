import React from 'react'
import "./pages.css";
import HTMLIcon from '../assets/HTMLIcon.png'
import CSSIcon from '../assets/CSSIcon.png'
import BootstrapIcon from '../assets/BootstrapIcon.png'
import JavaScriptIcon from '../assets/JavaScriptIcon.png'
import TypescriptIcon from '../assets/TypescriptIcon.png'
const Skills = () => {
  return (
    <div id='Skills' className='page'>
      <h3>Things i do well</h3>
      <h1>Skills</h1>
      <p>I have a strong command over the following technologies, showcasing my expertises</p>
      <div className='skills_icons'>
        <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'><img src={HTMLIcon} alt="HTMLIcon"/></a>
        <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'><img src={CSSIcon} alt="CSSIcon"/></a>
        <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'><img src={BootstrapIcon} alt="BootstrapIcon"/></a>
        <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'><img src={JavaScriptIcon} alt="JavaScriptIcon"/></a>
        <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'><img src={TypescriptIcon} alt="TypescriptIcon"/></a>
      </div>
    </div>
  )
}

export default Skills