import React from 'react';
import { useState } from 'react';
import './Navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaTimes} from 'react-icons/fa'
import { CgShapeHexagon } from 'react-icons/cg';
import gsap from 'gsap'
import image1 from './images/image.png'
import { AiOutlinePlus } from 'react-icons/ai'
import {FaGithubSquare, FaLinkedin, FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa'

function Navbar() {
    const [togg, setTogg] = useState(true)

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(click === false ? true : false)
    }

    gsap.fromTo('.head-icon', { duration: 1, opacity: 1, rotation: 0}, {duration: 60, delay: 1, opacity: 1, scale: 1, rotate: 2000})
    
   

  return (
    <div>
        <div className='container'>
            <div className='colone'>
            <CgShapeHexagon className='head-icon' />
                <p>Jordans <span>Portfolio</span></p>
            </div>
            {/*<
            <div className='coltwo'>
               <a href='#about'><p>About</p></a>
            </div>
            <div className='colthree'>
                <a href='#work'><p>Work</p></a>
            </div>
            <div className='colfour'>
                <a href='#contact'><p>Contact</p></a>
  </div> 
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <a href='#about'>About </a>
                </li>
                <li>
                    <a href='#work'>Work </a>
                </li>
                <li>
                    <a href='#contact'>Contact </a>
                </li>
                <FaLinkedin /> 
                <FaTwitterSquare />
                <FaFacebookSquare />
            </ul>
            */}
            <div className='sideBar-container'>
                <img className="profile-pic" src={image1} />
                <p className='current-job'>Currently working at Trinity Insight as a UX Engineer</p>
                <div className='sideContainer'>
                <div class="icon-flex"><FaGithubSquare class="side-icon"/></div>
                <div class="icon-flex"><FaTwitterSquare class="side-icon"/></div>
                <div class="icon-flex"><FaLinkedin class="side-icon"/></div>
                <div class="icon-flex"><FaFacebookSquare class="side-icon"/></div>
                </div>
                <p  class="side-bio"> Hello! My name is Jordan and I enjoy creating things that live on the internet. I have a passion for web development. I like to code things from scratch, and enjoy bringing ideas to life in the browser.<br/><br/>
        I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript. I'm very good with <span>REACT</span>, <span>JAVASCRIPT</span>, <span>HTML</span>, <span>CSS</span>, and anything E-commerce among other things. I build websites that delight and inform. Creating and maintaining functional, attractive and responsive websites.<br/><br/>
        I have great Shopify skill and can manipulate a site anyway the clients wants. I'm quietly confident, naturally curious, and perpetually working on improving my chops every single day.</p>
            </div>
            {/*<div className='colfive' onClick={handleClick}>
                {click === false ? <GiHamburgerMenu /> : <FaTimes />}
           </div>}*/}
        </div>
    </div>
    );
}

export default Navbar;
