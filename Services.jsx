import React from 'react';
import './Service.css';
import arrow_icon from '../../Assets/arrow-icon.png';
const Service_Data = [
  { s_no: 1, s_name: 'Web Development', s_description: ' building and maintenance of websites and web applications' },
  { s_no: 2, s_name: 'Backend Development', s_description: 'Business logic and API development' },
  { s_no: 3, s_name: 'Frontend Development', s_description: 'Design and development of user interfaces' },
  { s_no: 4, s_name: 'App Development', s_description: 'Building and maintenance of mobile applications' },
  { s_no: 5, s_name: 'Database Management', s_description: 'Managing and maintaining databases' },
  // Add more service objects as needed
];

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
      </div>

      <div className="service-container">
        {Service_Data.map((service, index) => {
          return (
            <div key={index} className='services-format'>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_description}</p>
              <div className='services-readmore'>
                <p>Read More</p>
                <img src={arrow_icon} alt=''/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
