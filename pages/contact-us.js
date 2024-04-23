import React, { useContext, useEffect, useState } from "react";
import Head from 'next/head';
import Link from 'next/link';
import axios from "axios";

// import { toast } from 'react-toastify';

import * as CONSTANTS from "../constants/constants";
import * as functions from "../functions/functions";

export default function Contact() {

  const headers = {
    'Content-Type': 'multipart/form-data',
    'Authorization': CONSTANTS.API_TOKEN
  }

  const [code, setCode] = useState();

  const [inputs, setInputs] = useState({
    name: "",
    cname: "",
    email: "",
    phone: "",
    details: "",
    cpatchaText: ""
  });

  const handleInputChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitEnquiry = async () => {

    const formData = new FormData();
    formData.append('name', inputs.name);
    formData.append('cname', inputs.cname);
    formData.append('email', inputs.email);
    formData.append('phone', inputs.phone);
    formData.append('details', inputs.details);

    const res = await axios
      .post(`${CONSTANTS.API_URL}home/submit_enquiry`, formData, {
          headers: headers
        })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(code == inputs.cpatchaText) {
        submitEnquiry()
          .then((data) => {
            if(!data.error) {
              // toast.success(data.message);
              setInputs({
                name: "",
                cname: "",
                email: "",
                phone: "",
                details: "",
                cpatchaText: ""
              });
            } else {
              // toast.error(data.message);
            }
          })
      } else {
        alert("Invalid Captcha. try Again");
        createCaptcha();
      }
  };

  const createCaptcha = (e) => {
      let returnCode = functions.createCaptcha();
      setCode(returnCode);
    };

    useEffect(() => {
      createCaptcha();
    }, []);

  return (
    <div>
        <Head>
            <title>SIB Infotech | Contact Us</title>
            <meta name="keywords" content="contact"/>
            <meta name="description" content="contact"/>
        </Head>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-12">
    					<div className="innerBannerTitle venter">
    						<h3 className="heading fontWeight700 text-center text-white">Get in Touch</h3>
    					</div>
        			</div>
                </div>
            </div>
        </div>
        <section className="contactPage">
            <div className="containerFull">
                <div className="row">
                    <div className="col-md-3">
                        <div className="contactItem">
                            <h4>Business Hours</h4>
                            <p><i className="far fa-clock" aria-hidden="true"></i> Monday to Saturday : 09:00 – 18:00</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="contactItem">
                            <h4>Call Today</h4>
                            <p><i className="fa fa-phone"></i> <Link href="tel:+91-9222260000">
                              <a>+91-92222-60000</a>
                            </Link></p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="contactItem">
                            <h4>Enquiry/Support</h4>
                            <p><i className="fa fa-envelope"></i> <Link href="mailto:contact@sibinfotech.com">
                              <a>contact@sibinfotech.com</a>
                            </Link></p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="contactItem">
                            <h4>Career</h4>
                            <p><i className="fa fa-envelope text_primary"></i> <Link href="#">
                              <a>career@sibinfotech.com</a>
                            </Link></p>
                        </div>
                    </div>
                </div>
                <div id="contact_form_section">
                    <div className="contact_form_box">
                        <p className="main_contact_title redText">Drop Us <span className="blueText fw-bold text-uppercase">A Line</span></p>
                        <div className="contact-form">
                            <form onSubmit={handleSubmit} method="post" action="#">
                                <div className="row clearfix">
                                    <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                        <label htmlFor="">Name*</label>
                                        <input type="text" name="name" onChange={handleInputChange} value={inputs.name} pattern="^[( )a-zA-Z]+$" title="Please enter alphabets" required/>
                                    </div>
                                    <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                        <label htmlFor="">Company Name</label>
                                        <input type="text" name="cname" onChange={handleInputChange} value={inputs.cname}/>
                                    </div>
                                    <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                        <label htmlFor="">Email*</label>
                                        <input type="email" name="email" onChange={handleInputChange} value={inputs.email} required/>
                                    </div>
                                    <div className="form-group col-md-6 col-sm-6 co-xs-12">
                                        <label htmlFor="">Mobile*</label>
                                        <input type="number" name="phone" inputMode="tel" onChange={handleInputChange} value={inputs.phone} title="Please enter digits" required/>
                                    </div>
                                    <div className="form-group col-md-12 col-sm-12 co-xs-12">
                                        <label htmlFor="">Details</label>
                                        <textarea name="details" onChange={handleInputChange} value={inputs.details}></textarea>
                                    </div>
                                    <div className="form-group col-md-12 col-sm-12 co-xs-12">
                                        <div className="row align-items-center">
                                            <div className="col-3">
                                                <div className="captcha" id="captcha"></div>
                                            </div>
                                            <div className="col-1">
                                                <div id="refresh_captcha" onClick={createCaptcha}><i className="bi bi-arrow-clockwise"></i></div>
                                            </div>
                                            <div className="col-8">
                                                <input type="text" className="capIn" placeholder="Type the text" name="cpatchaText" id="cpatchaTextBox" onChange={handleInputChange} value={inputs.cpatchaText} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group col-md-12 text-center col-sm-12 co-xs-12">
                                        <button type="submit" name="submit" className="theme-btn btn-style-one">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="mapRight">
                        <div className="mapItemContact">
                            <h4 className="small_heading2 fontWeight700">Mumbai</h4>
                            <iframe title="Mumbai Office Address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.411526446748!2d72.83122837433645!3d19.17721994878878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce92f56b4ccd%3A0x965180085bc69862!2sSIB%20Infotech!5e0!3m2!1sen!2sin!4v1701172662132!5m2!1sen!2sin" width="100%" height="200" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="mapItemContact">
                            <h4 className="small_heading2 fontWeight700">New Delhi</h4>
                            <iframe title="Delhi Office Address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.990420950181!2d77.07941511455955!3d28.630049190945325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05e1990aeceb%3A0x7e39edabda3510f5!2sSIB%20Infotech!5e0!3m2!1sen!2sin!4v1678532823519!5m2!1sen!2sin" width="100%" height="200" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
