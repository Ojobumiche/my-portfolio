import React from 'react'
import './About.css'
import Joshua_img from '../../Assets/Joshua.jpg';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
      <h1>About Me</h1>
        </div>
        <div className="about-section">
          <div className="about-left">
          <img src={Joshua_img} alt="engrj" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p> Hi there! I'm a full-stack software developer with a passion for building beautiful, 
                  performant, user-friendly, and scalable web applications that solve real-world problems. 
                  I have experience working with a variety of technologies, including JavaScript,
                  React, Next.js, python, Flask API, Django, Express, MongoDB, and PostgreSQL.
                  I'm always eager to learn new things and take on new challenges. 
                  Let's build something amazing together!
            </p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML + CSS</p><hr style={{width:"90%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"75%"}} /></div>
                <div className="about-skill"><p>Python</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Django</p><hr style={{width:"75%"}} /></div>
                <div className="about-skill"><p>MySQL</p><hr style={{width:"70%"}} /></div>
                
              <div className="achievement">
                <div className="about-achievement">
                  <h1>2+</h1>
                  <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr/>
                <div className="about-achievement">
                <h1>70+</h1>
                  <p>PROJECT COMPLETED</p>
              </div>
              <hr/>
              <div className="about-achievement">
              <h1>10+</h1>
                  <p>HAPPY CLIENTS</p>
                  </div>
              </div>

       </div>
    </div>

    </div>
       </div>
  
  )
}

export default About;
