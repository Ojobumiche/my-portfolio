import React, { useState } from "react";
import developer_img from '../../Assets/Developer.jpg.jpg';
import './profile.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Profile2() {
    const [menu, setMenu] = useState(""); // Define state for menu

    return (
        <div id="home" className="pic">
            <img id="img" className="img" src={developer_img} alt=" " />
            <h1><span>Hi I'm Joshua</span>Full stack developer based in Nigeria.</h1>
            <p>I am a full stack developer from Nigeria for 2 years.</p>
            <div className="action"></div>
            <div className="connect">
                <li>
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                        <p onClick={() => setMenu("contact")}>Connect with me</p>
                    </AnchorLink>
                    {menu === 'contact' ? <h4>▶️</h4> : ''}
                </li>
            </div>
            <div className="resume">My resume</div>
        </div>
    )
}

export default Profile2;
