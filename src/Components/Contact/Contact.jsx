import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './Contact.css'


const Contact = () => {
    return (
      <div className="contact" id="contact">
        <div className="text-center section-padding">
          <h1 className="main-title-font">Contact</h1>
          <p>For Collaboration or any queries contact us or reach out to us</p>
          <hr className="m-auto line-padding" />
        </div>
        <div className="contactContent section-padding">
          <div className="contact-row">
            <div className="colCard">
              <div className="logo">
                <FaPhoneAlt />
              </div>
              <h4>Team Ecell</h4>
              <p className="card-text">
                {" "}
                <b>Vidit :</b> <i> +91 8805787962</i>
              </p>
              <p className="card-text">
                {" "}
                <b>Atul : </b> <i> +91 8805787962</i>
              </p>
              <p className="card-text">
                {" "}
                <b>Nidhi :</b> <i> +91 8805787962</i>
              </p>
              <p className="card-text">
                {" "}
                <b>Kaustubh :</b> <i> +91 8805787962</i>
              </p>
            </div>
            <div className="colCard">
              <div className="logo">
                <a href="#reach_here">
                    <FaMapMarkerAlt />
                </a>
              </div>
              <h4>Address</h4>
              <p className="card-text">
                Vidyavardhini College of Engineering and Technology, K.T. Marg,
                Vasai Road, Vasai-Virar, Maharashtra 401202
              </p>
            </div>
            <div className="colCard">
              <div className="logo">
                <FaEnvelope />
              </div>
              <h4>Email</h4>
              <p className="card-text">
                {" "}
                <a href="mailto: abc@example.com"><b>ecell@vcet.edu.in</b></a>
                {" "}
              </p>
            </div>
          </div>
                <div className="map">
                    <div className="section-padding" id='reach_here'>
                        <h1 className='contact_reach'>Reach us</h1>
                    </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.6598743525196!2d72.82654491531592!3d19.3838746472589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aec0a4b41bef%3A0xbd1a4ca919d6a613!2sVidyavardhini&#39;s%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1676316549934!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    );
}

export default Contact 