
import React from 'react';
import ss from './images/ss.png'
import crypto from './images/crypto-site.png'
import admin from './images/admin.png'
import reddit from './images//reddit.png'
import color from './images/color.png'
import kkvid from './images/kkvid.mp4'
import cryptoVid from './images/cryptoVid.mov'
import adocVid from './images/adocVid.mov'
import redditVid from './images/redditVid.mov'
import colorVid from './images/colorVid.mov'
import trinityVid from './images/trinityVid.mov'
import stockVid from './images/stockVid.mov' 



import kkVid from './images/kkVid.mov'

import { useEffect } from 'react';
import './Project.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

function Work() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
      }, [])
    
  return (
    <div data-aos='fade-in'>

<h1 id="work"className='project-header'>SOME OF MY WORK</h1>
        <a href='https://github.com/sicklerjordan' target="_blank" id="sub"><p className='project-sub'>GITHUB</p></a>
        <div className='project-container'>
        <div className='card'>
            <a href="">
                <video muted autoStart autoPlay loop>
                <source autoStart autoPlay  type="video/mp4" src={cryptoVid}/>
                </video>
                </a>
            </div> 
            <div className='card'>
                <a>
                <video muted autoStart autoPlay loop>
                <source autoStart autoPlay  type="video/mp4" src={adocVid}/>
                </video>
                </a>
            </div> 
            <div className='card'>
                <a>
            <video muted autoStart autoPlay loop>
                <source autoStart autoPlay  type="video/mp4" src={colorVid}/>
                </video>
                </a>
            </div>
            <div className='card'>
                <a href="https://github.com/sicklerjordan/crypto-app">
                <video muted autoStart autoPlay loop>
                <source autoStart autoPlay  type="video/mp4" src={stockVid}/>
                </video>
                </a>
            </div> 
            <div className='card'>
                <a href="">
                <video muted autoStart autoPlay loop>
                <source autoStart autoPlay  type="video/mp4" src={trinityVid}/>
                </video>
                </a>
            </div> 
            
            <div className='card'>
                <a href="">
            <video muted autoStart autoPlay loop>
                <source autoStart autoPlay  type="video/mp4" src={colorVid}/>
                </video>
                </a>
            </div>
            <div className='card'>
                <a href="https://github.com/sicklerjordan/subreddit">
            <video muted autoStart autoPlay loop>
                <source autoStart autoPlay  type="video/mp4" src={redditVid}></source>
                </video>
                </a>
            </div> 
            <div className='card'>
                <a href="">
                    <video muted autoStart autoPlay loop>
                <source autoStart autoPlay  type="video/mp4" src={kkVid}/>
                </video>
                </a>
            </div> 
        </div>
    </div>
    );
}

export default Work;
