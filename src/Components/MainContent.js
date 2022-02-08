import React from 'react';
import "../Styles/MainContent.css"
import YouTube from '@mui/icons-material/YouTube';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';

function MainContent() {

  return <div className='main-content-container'> 

                <div className='content-container'>
                            <div className='content-description'>
                                    <h4>Hello</h4>
                                    <h1>I'm Warren</h1>
                                    <div>
                                    <p>Im a front end developer from canada.</p>
                                    <p>Im a front end developer from canada.</p>
                                    <p>Im a front end developer from canada.</p>
                                    </div>
                                    <button>Hire Me</button>
                            </div>
                            <div className='content-image'>
                                
                                    <div className='img-container'>
                                        <img src="https://wallpaperaccess.com/full/2977159.jpg" alt='my image'/>
                                    </div>

                                    <div className="content-icons">
                                         <div><YouTube/></div>
                                          <div><Facebook/></div>
                                       <div> <Instagram/></div>
                                    </div>
                            </div>

                          
                </div>

                  <div className='svg'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,128L80,128C160,128,320,128,480,106.7C640,85,800,43,960,37.3C1120,32,1280,64,1360,80L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            
            
             </div>
              
  </div>
}

export default MainContent;
