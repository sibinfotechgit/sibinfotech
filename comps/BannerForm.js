import React, { useContext, useEffect, useState } from "react";
import Link from 'next/link'
import axios from "axios";

// import { toast } from 'react-toastify';
import * as CONSTANTS from "../constants/constants";
import * as functions from "../functions/functions";

export default function BannerForm() {

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
    service: "",
    website: "",
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
    formData.append('service', inputs.service);
    formData.append('website', inputs.website);
    formData.append('page_url', window.location.pathname);

    const res = await axios
      .post(`${CONSTANTS.API_URL}home/submit_banner_enquiry`, formData, {
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
              service: "",
              website: "",
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
      <form onSubmit={handleSubmit} method="post" action="#">
        <div className="bannerFormItem">
            <div className="row">
                <div className="col-lg-6 pe-lg-1">
                    <input type="text" name="name" onChange={handleInputChange} value={inputs.name} placeholder="Name*" required/>
                </div>
                <div className="col-lg-6">
                    <input type="text" name="cname" onChange={handleInputChange} value={inputs.cname} placeholder="Company Name"/>
                </div>
            </div>
        </div>
        <div className="bannerFormItem">
            <div className="row">
                <div className="col-lg-6 pe-lg-1">
                    <input type="text" name="website" onChange={handleInputChange} value={inputs.website} placeholder="Website URL"/>
                </div>
                <div className="col-lg-6">
                    <input type="email" name="email" onChange={handleInputChange} value={inputs.email} placeholder="E-mail Address*" required/>
                </div>
            </div>
        </div>
        <div className="bannerFormItem">
            <div className="row">
                <div className="col-lg-6 pe-lg-1">
                    <input type="tel" name="phone" onChange={handleInputChange} value={inputs.phone} placeholder="Phone Number*" required/>
                </div>
                <div className="col-lg-6">
                    <select name="service" onChange={handleInputChange} value={inputs.service} required>
                        <option value="Website Design">Website Design</option>
                        <option value="Website Development">Website Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="PPC">PPC</option>
                        <option value="SEO">SEO</option>
                        <option value="SMO">SMO</option>
                        <option value="Software Development">Software Development</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Offshore Outsourcing">Offshore Outsourcing</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="bannerFormItem">
            <div className="row">
                <div className="col-lg-12">
                    <textarea placeholder="Message" name="details" onChange={handleInputChange} value={inputs.details}></textarea>
                </div>
            </div>
        </div>
        <div className="bannerFormItem mt-0 d-lg-block d-none">
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
        <div className="bannerFormItem mt-2">
            <button name="submit" type="submit" className="btnTheme w-100 fontWeight700 rounded">Get in Touch</button>
        </div>
      </form>
    </div>
  )
}
