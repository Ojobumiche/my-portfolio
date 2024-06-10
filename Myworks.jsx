import React from 'react'
import './Myworks.css';
import './WorkDetails.jsx';
import WorkDetail from './WorkDetails.jsx';



const Myworks = () => {
  return (
    <div id='myworks' className='myworks'>
        <div className="mywork-title">
            <h1>My latest work</h1>
        </div>
        <div className="mywork-container">
            {WorkDetail.map((work, index) => {
                return (
                    <img key={index} src={work.w_image} alt="" />
                );
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show more</p>
            {<h2>➡️</h2>} 
        </div>
    </div>
  )
}

export default Myworks;
