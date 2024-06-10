import React from 'react'
import './Footer.css';
import developer from '../../Assets/developer_2.jpg';


const Footer = () => {
  return (
    <div id="footer" className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={developer} alt=''/>
                <p>I am a full-stack developer from, Nigeria with 2 years of experienced</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <image>📧</image>
                    <input type='email' placeholder='Enter your e-mail'/>

                </div>
                <div className="footer-subcribe">Subcribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bootom-left">&copy;2024 Joshua. All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Term of services</p>
                <p>Privacy policy</p>
                <p>Connect with me</p>
            </div>
        </div>

      
    </div>
  )
}

export default Footer;
