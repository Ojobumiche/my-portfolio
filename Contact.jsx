import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c6644b1a-d772-4c84-ab34-aa1b716eb7be");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          alert("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.error("Error", data);
          setResult(data.message);
        }
    };
    
    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>

            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I am currently available to take on new projects and would love to hear from you. 
                        Whether you have a question or just want to say hi, I'll try my best to get back to you</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <h3> 📧 </h3><p>bumiche@mail.com</p>
                        </div>
                        <div className="contact-detail">
                            <h4> 📞 </h4><p>+2349097228224</p>
                        </div>
                        <div className="contact-detail">
                            <h3> 🌏 </h3><p>Abuja, Nigeria</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor='name'>Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name'/>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' placeholder='Enter your email' name='email'/>
                    <label htmlFor='message'>Write your Message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Send now</button>
                    {result && <p>{result}</p>}
                </form>
            </div>
        </div>
    );
}

export default Contact;
