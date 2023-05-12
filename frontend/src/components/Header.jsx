import React,{useState} from "react";
import "./header.css";
import {AiOutlineMenu} from 'react-icons/ai'
const Header = () => {
  const [showMenu, setShowMenu] = useState(true)
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <h2>Muhammad <br/>Fahad Khan</h2>
      </div>
      <div className={showMenu?"navbar_pages":"navbar_hidden"}>
        <div><a href="#Home">Home</a></div>
        <div><a href="#Contact">Contact</a></div>
        <div><a href="#Skills">Skills</a></div>
        <div><a href="#Experience">Experience</a></div>
      </div>
      <div onClick={()=>setShowMenu(!showMenu)} className="navbar_menu"><AiOutlineMenu/></div>
    </nav>
  );
};
export default Header;
