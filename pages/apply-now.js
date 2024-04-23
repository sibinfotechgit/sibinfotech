import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { toast } from 'react-toastify';
import axios from "axios";

import * as CONSTANTS from "../constants/constants";
import * as functions from "../functions/functions";

const basicSkillsOptions = [
  { label: "HTML", value: "HTML" },
  { label: "CSS", value: "CSS" },
  { label: "JavaScript", value: "JavaScript" },
];

const jobSkillsOptions = [
  { label: "PHP", value: "PHP" },
  { label: "Laravel", value: "Laravel" },
];

const otherSkillsOptions = [
  { label: "Photoshop", value: "Photoshop" },
  { label: "Microsoft Excel", value: "Microsoft Excel" },
];

const headers = {
  'Content-Type': 'multipart/form-data',
  'Authorization': CONSTANTS.API_TOKEN
}

export default function ApplyNow() {

    // new code starts

    const router = useRouter();

    const [code, setCode] = useState();

    const [basicSkillsSelected, basicSkillsSetSelected] = useState([]);
    const [jobSkillsSelected, jobSkillsSetSelected] = useState([]);
    const [otherSkillsSelected, otherSkillsSetSelected] = useState([]);
    const [selectedFile, setSelectedFile] = useState();

    const [experienceFields, setExperienceFields] = useState([
        {
          acomp_name_exp: '',
          acomp_level_exp: '',
          acomp_ind_exp: '',
          acomp_jtitle_exp: '',
          acomp_fyear_exp: '',
          acomp_fmonth_exp: '',
          acomp_tyear_exp: '',
          acomp_tmonth_exp: '',
          acomp_jdesc_exp: '',
        },
    ]);

    const handleExperienceChange = (index, event) => {
       let data = [...experienceFields];
       data[index][event.target.name] = event.target.value;
       setExperienceFields(data);
    }

    const addExperienceField = () => {
        let newExperienceField = {
          acomp_name_exp: '',
          acomp_level_exp: '',
          acomp_ind_exp: '',
          acomp_jtitle_exp: '',
          acomp_fyear_exp: '',
          acomp_fmonth_exp: '',
          acomp_tyear_exp: '',
          acomp_tmonth_exp: '',
          acomp_jdesc_exp: '',
        };
        setExperienceFields([...experienceFields, newExperienceField])
    }

    const removeExperienceField = (index) => {
        let data = [...experienceFields];
        data.splice(index, 1)
        setExperienceFields(data)
    }

    const [inputs, setInputs] = useState({
          jobtype: "",
          postapplied: "",
          job_location: "",
          fname: "",
          lname: "",
          email: "",
          phone: "",
          pre_add: "",
          pre_city: "",
          pre_state: "",
          pre_pincode: "",
          gender: "",
          dob: "",
          category: "",
          marital: "",
          mobile: "",
          fax: "",
          perm_add: "",
          perm_city: "",
          perm_state: "",
          perm_pincode: "",
          same_address: "",
          qualification: "",
          total_ye: "",
          total_me: "",
          it_ye: "",
          it_me: "",
          expect_salary: "",
          current_salary: "",
          notice_period: "",
          join_date: "",
          cur_jobsts: "",
          anyOtherskills: "",
          remarks: "",
          from_source: "",
          cpatchaText: ""
        }
    );

    const handleInputChange = (e) => {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: (e.target.type == 'checkbox') ? (e.target.checked) ? e.target.value : '' : e.target.value,
      }));
    };

    const handleFileChange = (event) => {
  		setSelectedFile(event.target.files[0]);
  	};


    const addCareer = async () => {

      const formData = new FormData();

      // file
      formData.append('resume', selectedFile);

      // form data
      formData.append('inputs', JSON.stringify(inputs));
      // formData.append('basicSkills', JSON.stringify(basicSkillsSelected));
      // formData.append('jobSkills', JSON.stringify(jobSkillsSelected));
      // formData.append('otherSkills', JSON.stringify(otherSkillsSelected));
      formData.append('experienceFields', JSON.stringify(experienceFields));

      const res = await axios
        .post(`${CONSTANTS.API_URL}home/career_enquiry`, formData, {
            headers: headers
          })
        .catch((err) => console.log(err));
      const data = await res.data;
      return data;
    };


    const handleSubmit = (e) => {
      e.preventDefault();

      if(code == inputs.cpatchaText) {
        addCareer()
          .then((data) => {
            if(!data.error) {
              // toast.success(data.message);
              router.push('/');
            } else {
              // toast.error(data.message);
            }
          });
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

    // newt code ends

    const [divElements, setDivElements] = useState([]);

    const handleButtonClick = () => {
    const newDivElement = <div key={divElements.length}><div className="expmore_content">
    <div className="row">
         <div className="form-group col-md-4  col-xs-12">
            <label for="">Company</label>
            <input name="acomp_name[]" type="text"/>
         </div>
         <div className="form-group col-md-4  col-xs-12">
            <label for="">Level</label>
            <input type="text" name="acomp_level[]"/>
         </div>
         <div className="form-group col-md-4  col-xs-12">
            <label for="">Industry</label>
            <select name="acomp_ind[]">
               <option defaultValue="">Select</option>
               <option value="Telecommunication industry">Telecommunication industry</option>
               <option value="Computer Industry">Computer Industry</option>
               <option value="Computer Industry">Computer Industry</option>
            </select>
         </div>
      </div>
      <div className="row">
         <div className="form-group col-md-4  col-xs-12">
            <label for="">Job Title</label>
            <input name="acomp_jtitle[]" type="text"/>
         </div>
         <div className="form-group col-md-2  col-xs-12">
            <label for="">From</label>
            <select name="acomp_fyear[]" id="">
               <option defaultValue="">Year</option>
               <option value="2022">2022</option>
               <option value="2020">2020</option>
               <option value="2019">2019</option>
               <option value="2018">2018</option>
               <option value="2017">2017</option>
               <option value="2016">2016</option>
               <option value="2015">2015</option>
               <option value="2014">2014</option>
               <option value="2013">2013</option>
               <option value="2012">2012</option>
               <option value="2011">2011</option>
               <option value="2010">2010</option>
            </select>
         </div>
         <div className="form-group col-md-2  col-xs-12">
            <label for="">&nbsp;</label>
            <select name="acomp_fmonth[]" id="">
               <option defaultValue="">Months</option>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
               <option value="7">7</option>
               <option value="8">8</option>
               <option value="9">9</option>
               <option value="10">10</option>
               <option value="11">11</option>
               <option value="12">12</option>
            </select>
         </div>
         <div className="form-group col-md-2  col-xs-12">
            <label for="">To</label>
            <select name="acomp_tyear[]" id="">
               <option defaultValue="">Year</option>
               <option value="2022">2022</option>
               <option value="2020">2020</option>
               <option value="2019">2019</option>
               <option value="2018">2018</option>
               <option value="2017">2017</option>
               <option value="2016">2016</option>
               <option value="2015">2015</option>
               <option value="2014">2014</option>
               <option value="2013">2013</option>
               <option value="2012">2012</option>
               <option value="2011">2011</option>
               <option value="2010">2010</option>
            </select>
         </div>
         <div className="form-group col-md-2  col-xs-12">
            <label for="">&nbsp;</label>
            <select name="acomp_tmonth[]" id="">
               <option defaultValue="">Months</option>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
               <option value="7">7</option>
               <option value="8">8</option>
               <option value="9">9</option>
               <option value="10">10</option>
               <option value="11">11</option>
               <option value="12">12</option>
            </select>
         </div>
         <div className="form-group col-md-12  col-xs-12">
            <label for="">Job Description</label>
            <textarea name="acomp_jdesc[]"></textarea>
         </div>
         {/* <div className="d-flex justify-content-end">
            <Link>
              <a className="removeMore"><i className="fa fa-trash-alt"></i> Remove</a>
            </Link>
         </div> */}
      </div>
  </div></div>;
    setDivElements([...divElements, newDivElement]);
};
  return (
    <div>
        <Head>
            <title>SIB Infotech | Job Application</title>
            <meta name="keywords" content="contact"/>
            <meta name="description" content="contact"/>
        </Head>
        <div className="innerWebDesign">
            <div className="container-fluid">
                 <div className="row">
			        <div className="col-lg-12">
    					<div className="innerBannerTitle venter">
    						<h3 className="heading fontWeight700 text-center text-white">Job Application</h3>
                            <p class="small_heading mt-3 text-center text-white">We’re a team of lifelong learners. We’re equal parts left and right brained. Join Us!</p>
                            <p class="title mt-2 text-white text-center">Connect with our HR Department </p>
                            <div class="mt-4 text-center">
                                <Link href="tel:+91-9873477401">
                                  <a class="btnThemeRed me-3"><i class="fa fa-phone"></i> +91-9873477401</a>
                                </Link>
                                <Link href="/apply-now">
                                  <a class="btnThemewhiteBorder"><i class="fa-solid fa-paper-plane"></i> Apply Now</a>
                                </Link>
                            </div>
    					</div>
        			</div>
                </div>
            </div>
        </div>
        <section id="custom-page-content">
           <div className="containerFull">
              <div className="row">
                 <div className="col-md-12">
                    <div id="contact-us-page">
                       <div className="inner-container">
                          <div className="row clearfix">
                             <div className="form-column col-md-12 col-sm-12 col-xs-12">
                                <div className="inner-column">
                                   <div className="contact-form">
                                      <form onSubmit={handleSubmit} method="POST" action="" id="contact-form" enctype="multipart/form-data">
                                         <div className="apply_form_box">
                                            <p className="title">Job <span className="text_red">details</span></p>
                                            <div className="row">
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Job type*</label>
                                                  <select name="jobtype" id="" onChange={handleInputChange} value={inputs.jobtype} required>
                                                     <option defaultValue="">Select</option>
                                                     <option value="Full Time">Full Time</option>
                                                     <option value="Part Time">Part Time</option>
                                                     <option value="Freelance">Freelance</option>
                                                     <option value="Contract Service">Contract Service</option>
                                                     <option value="Intern">Intern</option>
                                                  </select>
                                               </div>
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Post applied for*</label>
                                                  <select name="postapplied" id="postapplied" onChange={handleInputChange} value={inputs.postapplied} required>
                                           <option defaultValue="">Select</option>
                                           <option value="Wordpress Developer - Senior">Wordpress Developer - Senior</option>
                                           <option value="Accounts Cum Admin Executive">Accounts Cum Admin Executive</option>
                                           <option value="Accounts Executive">Accounts Executive</option>
                                           <option value="Business Development Executive">Business Development Executive</option>
                                           <option value="Business Development Executive Website Sales">Business Development Executive Website Sales</option>
                                           <option value="Client Servicing Executive">Client Servicing Executive</option>
                                           <option value="Content Writer">Content Writer</option>
                                           <option value="Data Entry operator">Data Entry operator</option>
                                           <option value="Digital Marketing Executive">Digital Marketing Executive</option>
                                           <option value="Digital Marketing Head">Digital Marketing Head</option>
                                           <option value="E-Commerce Listing Executive - Cataloger">E-Commerce Listing Executive - Cataloger</option>
                                           <option value="Executive Assistant to Director">Executive Assistant to Director</option>
                                           <option value="Front End Developer - Executive">Front End Developer - Executive</option>
                                           <option value="Front end Developer - Junior">Front end Developer - Junior</option>
                                           <option value="Front End Developer - Manager">Front End Developer - Manager</option>
                                           <option value="Front End Developer- Intern">Front End Developer- Intern</option>
                                           <option value="Front End Developer- Senior">Front End Developer- Senior</option>
                                           <option value="Google Adwords Specialist">Google Adwords Specialist</option>
                                           <option value="Graphic Designer">Graphic Designer</option>
                                           <option value="Graphic Designer - Junior">Graphic Designer - Junior</option>
                                           <option value="Graphic Designer - Senior">Graphic Designer - Senior</option>
                                           <option value="Graphic Designer - Social Media">Graphic Designer - Social Media</option>
                                           <option value="HR Cum Admin Executive">HR Cum Admin Executive</option>
                                           <option value="Manager Operations">Manager Operations</option>
                                           <option value="MEAN Stack Developer  ">MEAN Stack Developer  </option>
                                           <option value="MEAN Stack Developer - Executive">MEAN Stack Developer - Executive</option>
                                           <option value="MEAN Stack Developer - Junior">MEAN Stack Developer - Junior</option>
                                           <option value="MEAN Stack Developer - Senior">MEAN Stack Developer - Senior</option>
                                           <option value="Mobile App Developer">Mobile App Developer</option>
                                           <option value="Mobile App Developer - Junior">Mobile App Developer - Junior</option>
                                           <option value="Mobile App Developer- Intern">Mobile App Developer- Intern</option>
                                           <option value="Mobile App Developer-Unity">Mobile App Developer-Unity</option>
                                           <option value="PHP Developer">PHP Developer</option>
                                           <option value="PPC Executive - Junior">PPC Executive - Junior</option>
                                           <option value="PPC Executive - Senior">PPC Executive - Senior</option>
                                           <option value="PPC Manager">PPC Manager</option>
                                           <option value="SEO EXECUTIVE ">SEO EXECUTIVE </option>
                                           <option value="SEO Executive - Junior">SEO Executive - Junior</option>
                                           <option value="SEO Executive - Senior">SEO Executive - Senior</option>
                                           <option value="SEO Junior">SEO Junior</option>
                                           <option value="SEO Manager">SEO Manager</option>
                                           <option value="Social Media Executive">Social Media Executive</option>
                                           <option value="Social Media Executive - Junior">Social Media Executive - Junior</option>
                                           <option value="Social Media Executive - Senior">Social Media Executive - Senior</option>
                                           <option value="UI/UX Designer">UI/UX Designer</option>
                                           <option value="UI/UX Designer - Executive">UI/UX Designer - Executive</option>
                                           <option value="UI/UX Designer - Manager">UI/UX Designer - Manager</option>
                                           <option value="UI/UX Designer - Senior">UI/UX Designer - Senior</option>
                                           <option value="UI/UX Designer -Junior">UI/UX Designer -Junior</option>
                                           <option value="UI/UX Designer- Intern">UI/UX Designer- Intern</option>
                                           <option value="Web Developer -  Manager">Web Developer -  Manager</option>
                                           <option value="Web Developer - Executive">Web Developer - Executive</option>
                                           <option value="Web Developer - Intern">Web Developer - Intern</option>
                                           <option value="Web Developer - Junior">Web Developer - Junior</option>
                                           <option value="Web Developer - Senior">Web Developer - Senior</option>
                                           <option value="Website Designer">Website Designer</option>
                                           <option value="Website Designer -Senior">Website Designer -Senior</option>
                                           <option value="Website Designer- Executive ">Website Designer- Executive </option>
                                           <option value="Website Designer- Intern">Website Designer- Intern</option>
                                           <option value="Website Designer- Junior">Website Designer- Junior</option>
                                           <option value="Website Designer- Manager">Website Designer- Manager</option>
                                           <option value="Word Press Developer -Junior">Word Press Developer -Junior</option>
                                           <option value="Wordpress Developer">Wordpress Developer</option>
                                           <option value="Wordpress Developer- Executive">Wordpress Developer- Executive</option>
                                           <option value="Wordpress Developer- Intern">Wordpress Developer- Intern</option>
                                           <option value="Wordpress Developer- Manager">Wordpress Developer- Manager</option>
                                        </select>
                                               </div>
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Job location*</label>
                                                  <select name="job_location" id="job_location" onChange={handleInputChange} value={inputs.job_location} required>
                                                     <option defaultValue="">Select</option>
                                                     <option value="Delhi">Delhi</option>
                                                     <option value="Mumbai">Mumbai</option>
                                                     <option value="Delhi / Mumbai">Delhi / Mumbai</option>
                                                     <option value="Work from Home">Work from Home</option>
                                                  </select>
                                               </div>
                                            </div>
                                         </div>
                                         <div className="apply_form_box">
                                            <p className="title">Personal <span className="text_red">details</span></p>
                                            <div className="row">
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">First Name*</label>
                                                  <input type="text" name="fname" onChange={handleInputChange} value={inputs.fname} pattern="^[( )a-zA-Z]+$" title="Please enter alphabets" required/>
                                               </div>
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Last Name*</label>
                                                  <input type="text" name="lname" onChange={handleInputChange} value={inputs.lname} pattern="^[( )a-zA-Z]+$" title="Please enter alphabets" required/>
                                               </div>
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Gender</label>
                                                  <select name="gender" id="" onChange={handleInputChange} value={inputs.gender}>
                                                     <option defaultValue="">Select</option>
                                                     <option value="Female">Female</option>
                                                     <option value="Male">Male</option>
                                                  </select>
                                               </div>
                                            </div>
                                            <div className="row">
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Date of Birth</label>
                                                  <input type="date" name="dob" onChange={handleInputChange} value={inputs.dob}/>
                                               </div>
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Category</label>
                                                  <select name="category" id="" onChange={handleInputChange} value={inputs.category}>
                                                     <option defaultValue="">Select</option>
                                                     <option value="General">General</option>
                                                     <option value="SC">SC</option>
                                                     <option value="ST">ST</option>
                                                     <option value="OBC">OBC</option>
                                                     <option value="Others">Others</option>
                                                  </select>
                                               </div>
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Marital Status</label>
                                                  <select name="marital" id="marital" onChange={handleInputChange} value={inputs.marital}>
                                                     <option defaultValue="">Select</option>
                                                     <option value="Single">Single</option>
                                                     <option value="Married">Married</option>
                                                     <option value="Divorced">Divorced</option>
                                                  </select>
                                               </div>
                                            </div>
                                         </div>
                                         <div className="apply_form_box">
                                            <p className="title">Communication <span className="text_red">details</span></p>
                                            <div className="row">
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Email*</label>
                                                  <input type="email" name="email" onChange={handleInputChange} value={inputs.email} required/>
                                               </div>
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Phone</label>
                                                  <input type="number" name="phone" title="Please enter digits" onChange={handleInputChange} value={inputs.phone}/>
                                               </div>
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Mobile</label>
                                                  <input type="number" name="mobile" inputmode="tel" title="Please enter digits"  onChange={handleInputChange} value={inputs.mobile} />
                                               </div>
                                            </div>
                                            <div className="form_fax" style={{display:'none'}}>
                                               <input type="text" className="form-control" placeholder="Please enter fax" title="Please enter fax"/>
                                            </div>
                                            <div className="row" style={{display:'none'}}>
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Address</label>
                                                  <input type="text" name="address" onChange={handleInputChange} value={inputs.address}/>
                                               </div>
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">City*</label>
                                                  <input type="text" name="city" onChange={handleInputChange} value={inputs.city}/>
                                               </div>
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">State*</label>
                                                  <input type="text" name="state" onChange={handleInputChange} value={inputs.state}/>
                                               </div>
                                            </div>
                                            <div className="row" style={{display:'none'}}>
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Country</label>
                                                  <input type="text" name="country" onChange={handleInputChange} value={inputs.country} />
                                               </div>
                                            </div>
                                            <div className="row">
                                               <div className="col-md-6 dividerLine">
                                                  <div className="row">
                                                     <div className="form-group col-md-12  col-xs-12">
                                                        <label for="">Present Address</label>
                                                        <textarea name="pre_add" id="pre_add" onChange={handleInputChange} value={inputs.pre_add}></textarea>
                                                     </div>
                                                     <div className="form-group col-md-6  col-xs-12">
                                                        <label for="">City*</label>
                                                        <input type="text" name="pre_city" id="pre_city" onChange={handleInputChange} value={inputs.pre_city} required/>
                                                     </div>
                                                     <div className="form-group col-md-6  col-xs-12">
                                                        <label for="">State*</label>
                                                        <select name="pre_state" id="pre_state" onChange={handleInputChange} value={inputs.pre_state}>
                                                           <option defaultValue="">Select</option>
                                                           <option value="Andra Pradesh">Andra Pradesh</option>
                                                           <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                           <option value="Assam">Assam</option>
                                                           <option value="Bihar">Bihar</option>
                                                           <option value="Chandigarh">Chandigarh</option>
                                                           <option value="Chhattisgarh">Chhattisgarh</option>
                                                           <option value="Delhi">Delhi</option>
                                                           <option value="Goa">Goa</option>
                                                           <option value="Gujarat">Gujarat</option>
                                                           <option value="Haryana">Haryana</option>
                                                           <option value="Jammu and Kashmir">Jammu and Kashmir </option>
                                                           <option value="Jharkhand">Jharkhand </option>
                                                           <option value="Karnataka">Karnataka </option>
                                                           <option value="Kerala">Kerala   </option>
                                                           <option value="Ladak">Ladak </option>
                                                           <option value="Lakshadweep">Lakshadweep </option>
                                                           <option value="Madhya Pradesh">Madhya Pradesh   </option>
                                                           <option value="Maharashtra">Maharashtra</option>
                                                           <option value="Manipur">Manipur</option>
                                                           <option value="Meghalaya">Meghalaya</option>
                                                           <option value="Mizoram">Mizoram</option>
                                                           <option value="Nagaland">Nagaland</option>
                                                           <option value="Odisha">Odisha</option>
                                                           <option value="Puducherry">Puducherry</option>
                                                           <option value="Punjab">Punjab</option>
                                                           <option value="Rajasthan">Rajasthan</option>
                                                           <option value="Sikkim">Sikkim</option>
                                                           <option value="Tamil Nadu">Tamil Nadu</option>
                                                           <option value="Telangana">Telangana</option>
                                                           <option value="Tripura">Tripura</option>
                                                           <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                           <option value="Uttarakhand">Uttarakhand</option>
                                                           <option value="West Bengal">West Bengal</option>
                                                        </select>
                                                     </div>
                                                     <div className="form-group col-md-6  col-xs-12">
                                                        <label for="">Pincode</label>
                                                        <input type="text" name="pre_pincode" id="pre_pincode" onChange={handleInputChange} value={inputs.pre_pincode}/>
                                                     </div>
                                                  </div>
                                               </div>
                                               <div className="col-md-6">
                                                  <div className="row">
                                                     <div className="form-group col-md-12  col-xs-12">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <label for="">Permanent Address</label>
                                                            <div className="form-group perm_add  text-right positionAb">
                                                            <label for="same_address">
                                                            <input type="checkbox" name="same_address" className="pe-lg-2" id="same_address" onChange={handleInputChange} value="Yes"/>
                                                            Same as Present Address
                                                            </label>
                                                            </div>
                                                        </div>
                                                        <textarea name="perm_add" id="perm_add" onChange={handleInputChange} value={inputs.perm_add}></textarea>
                                                     </div>
                                                     <div className="form-group col-md-6  col-xs-12">
                                                        <label for="">City</label>
                                                        <input type="text" name="perm_city" id="perm_city" onChange={handleInputChange} value={inputs.perm_city}/>
                                                     </div>
                                                     <div className="form-group col-md-6  col-xs-12">
                                                        <label for="">State</label>
                                                        <select name="perm_state" id="perm_state" onChange={handleInputChange} value={inputs.perm_state}>
                                                           <option defaultValue="">Select</option>
                                                           <option value="Andra Pradesh">Andra Pradesh</option>
                                                           <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                           <option value="Assam">Assam</option>
                                                           <option value="Bihar">Bihar</option>
                                                           <option value="Chandigarh">Chandigarh</option>
                                                           <option value="Chhattisgarh">Chhattisgarh</option>
                                                           <option value="Delhi">Delhi</option>
                                                           <option value="Goa">Goa</option>
                                                           <option value="Gujarat">Gujarat</option>
                                                           <option value="Haryana">Haryana</option>
                                                           <option value="Jammu and Kashmir">Jammu and Kashmir </option>
                                                           <option value="Jharkhand">Jharkhand </option>
                                                           <option value="Karnataka">Karnataka </option>
                                                           <option value="Kerala">Kerala   </option>
                                                           <option value="Ladak">Ladak </option>
                                                           <option value="Lakshadweep">Lakshadweep </option>
                                                           <option value="Madhya Pradesh">Madhya Pradesh   </option>
                                                           <option value="Maharashtra">Maharashtra</option>
                                                           <option value="Manipur">Manipur</option>
                                                           <option value="Meghalaya">Meghalaya</option>
                                                           <option value="Mizoram">Mizoram</option>
                                                           <option value="Nagaland">Nagaland</option>
                                                           <option value="Odisha">Odisha</option>
                                                           <option value="Puducherry">Puducherry</option>
                                                           <option value="Punjab">Punjab</option>
                                                           <option value="Rajasthan">Rajasthan</option>
                                                           <option value="Sikkim">Sikkim</option>
                                                           <option value="Tamil Nadu">Tamil Nadu</option>
                                                           <option value="Telangana">Telangana</option>
                                                           <option value="Tripura">Tripura</option>
                                                           <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                           <option value="Uttarakhand">Uttarakhand</option>
                                                           <option value="West Bengal">West Bengal</option>
                                                        </select>
                                                     </div>
                                                     <div className="form-group col-md-6  col-xs-12">
                                                        <label for="">Pincode</label>
                                                        <input type="text" name="perm_pincode" id="perm_pincode" onChange={handleInputChange} value={inputs.perm_pincode}/>
                                                     </div>
                                                  </div>
                                               </div>
                                            </div>
                                         </div>
                                         <div className="apply_form_box">
                                            <p className="title">Professional <span className="text_red">details</span></p>
                                            <div className="row">
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Qualification</label>
                                                  <select name="qualification" id="" onChange={handleInputChange} value={inputs.qualification}>
                                                     <option defaultValue="">Select</option>
                                                     <option value="Aviation">Aviation</option>
                                                     <option value="B.A">B.A</option>
                                                     <option value="B.Arch">B.Arch</option>
                                                     <option value="B.B.A">B.B.A</option>
                                                     <option value="BCA">BCA</option>
                                                     <option value="B.Com">B.Com</option>
                                                     <option value="BDS">BDS</option>
                                                     <option value="B.E/B.Tech">B.E/B.Tech</option>
                                                     <option value="B.Ed">B.Ed</option>
                                                     <option value="BHM">BHM</option>
                                                     <option value="BL/LLB">BL/LLB</option>
                                                     <option value="B.Pharm">B.Pharm</option>
                                                     <option value="B.Sc">B.Sc</option>
                                                     <option value="CA">CA</option>
                                                     <option value="className 12">className 12</option>
                                                     <option value="CS">CS</option>
                                                     <option value="Diploma">Diploma</option>
                                                     <option value="ICWA">ICWA</option>
                                                     <option value="M.A">M.A</option>
                                                     <option value="M.Arch">M.Arch</option>
                                                     <option value="MBA">MBA</option>
                                                     <option value="MBBS">MBBS</option>
                                                     <option value="MCA">MCA</option>
                                                     <option value="M.Com">M.Com</option>
                                                     <option value="MD/MS">MD/MS</option>
                                                     <option value="M.Ed">M.Ed</option>
                                                     <option value="M.E/M.Tech/MS">M.E/M.Tech/MS</option>
                                                     <option value="ML/LLM">ML/LLM</option>
                                                     <option value="M.Pharm">M.Pharm</option>
                                                     <option value="Mphil">Mphil</option>
                                                     <option value="M.Sc">M.Sc</option>
                                                     <option value="PGDCA">PGDCA</option>
                                                     <option value="PG Diploma">PG Diploma</option>
                                                     <option value="PGDM">PGDM</option>
                                                     <option value="Phd">Phd</option>
                                                     <option value="Other">Other</option>
                                                  </select>
                                               </div>
                                               <div className="form-group col-md-4  col-xs-12" style={{display:'none'}}>
                                                  <label for="">Current Location</label>
                                                  <input type="text" name="current_location" onChange={handleInputChange} value={inputs.current_location}/>
                                               </div>
                                            </div>
                                            <div className="row">
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Total Experience</label>
                                                  <select name="total_ye" id="" onChange={handleInputChange} value={inputs.total_ye}>
                                                     <option defaultValue="">Years</option>
                                                     <option value="0">0</option>
                                                     <option value="1">1</option>
                                                     <option value="2">2</option>
                                                     <option value="3">3</option>
                                                     <option value="4">4</option>
                                                     <option value="5">5</option>
                                                     <option value="6">6</option>
                                                     <option value="7">7</option>
                                                     <option value="8">8</option>
                                                     <option value="9">9</option>
                                                     <option value="10">10</option>
                                                     <option value="11">11</option>
                                                     <option value="12">12</option>
                                                     <option value="13">13</option>
                                                     <option value="14">14</option>
                                                     <option value="15">15</option>
                                                     <option value="16">16</option>
                                                     <option value="17">17</option>
                                                     <option value="18">18</option>
                                                     <option value="19">19</option>
                                                     <option value="20">20</option>
                                                     <option value="21">21</option>
                                                     <option value="22">22</option>
                                                     <option value="23">23</option>
                                                     <option value="24">24</option>
                                                     <option value="25">25</option>
                                                     <option value="26">26</option>
                                                     <option value="27">27</option>
                                                     <option value="28">28</option>
                                                     <option value="29">29</option>
                                                     <option value="30">30</option>
                                                     <option value="31">31</option>
                                                     <option value="32">32</option>
                                                     <option value="33">33</option>
                                                     <option value="34">34</option>
                                                     <option value="35">35</option>
                                                     <option value="36">36</option>
                                                     <option value="37">37</option>
                                                     <option value="38">38</option>
                                                     <option value="39">39</option>
                                                     <option value="40">40</option>
                                                  </select>
                                               </div>
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">&nbsp;</label>
                                                  <select name="total_me" id="" onChange={handleInputChange} value={inputs.total_me}>
                                                     <option defaultValue="">Months</option>
                                                     <option value="1">1</option>
                                                     <option value="2">2</option>
                                                     <option value="3">3</option>
                                                     <option value="4">4</option>
                                                     <option value="5">5</option>
                                                     <option value="6">6</option>
                                                     <option value="7">7</option>
                                                     <option value="8">8</option>
                                                     <option value="9">9</option>
                                                     <option value="10">10</option>
                                                     <option value="11">11</option>
                                                     <option value="12">12</option>
                                                  </select>
                                               </div>
                                            </div>
                                            <div className="row">
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">IT Experience</label>
                                                  <select name="it_ye" id="" onChange={handleInputChange} value={inputs.it_ye}>
                                                     <option defaultValue="">Years</option>
                                                     <option value="0">0</option>
                                                     <option value="1">1</option>
                                                     <option value="2">2</option>
                                                     <option value="3">3</option>
                                                     <option value="4">4</option>
                                                     <option value="5">5</option>
                                                     <option value="6">6</option>
                                                     <option value="7">7</option>
                                                     <option value="8">8</option>
                                                     <option value="9">9</option>
                                                     <option value="10">10</option>
                                                     <option value="11">11</option>
                                                     <option value="12">12</option>
                                                     <option value="13">13</option>
                                                     <option value="14">14</option>
                                                     <option value="15">15</option>
                                                     <option value="16">16</option>
                                                     <option value="17">17</option>
                                                     <option value="18">18</option>
                                                     <option value="19">19</option>
                                                     <option value="20">20</option>
                                                     <option value="21">21</option>
                                                     <option value="22">22</option>
                                                     <option value="23">23</option>
                                                     <option value="24">24</option>
                                                     <option value="25">25</option>
                                                     <option value="26">26</option>
                                                     <option value="27">27</option>
                                                     <option value="28">28</option>
                                                     <option value="29">29</option>
                                                     <option value="30">30</option>
                                                     <option value="31">31</option>
                                                     <option value="32">32</option>
                                                     <option value="33">33</option>
                                                     <option value="34">34</option>
                                                     <option value="35">35</option>
                                                     <option value="36">36</option>
                                                     <option value="37">37</option>
                                                     <option value="38">38</option>
                                                     <option value="39">39</option>
                                                     <option value="40">40</option>
                                                  </select>
                                               </div>
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">&nbsp;</label>
                                                  <select name="it_me" id="" onChange={handleInputChange} value={inputs.it_me}>
                                                     <option defaultValue="">Months</option>
                                                     <option value="1">1</option>
                                                     <option value="2">2</option>
                                                     <option value="3">3</option>
                                                     <option value="4">4</option>
                                                     <option value="5">5</option>
                                                     <option value="6">6</option>
                                                     <option value="7">7</option>
                                                     <option value="8">8</option>
                                                     <option value="9">9</option>
                                                     <option value="10">10</option>
                                                     <option value="11">11</option>
                                                     <option value="12">12</option>
                                                  </select>
                                               </div>
                                            </div>
                                         </div>
                                         <div className="apply_form_box">
                                            <p className="title">Employment <span className="text_red">Details</span></p>
                                            <div className="row">
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Current Salary</label>
                                                  <input name="current_salary" type="number" onChange={handleInputChange} value={inputs.current_salary} placeholder="Per Month Salary"/>
                                               </div>
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Expected Salary</label>
                                                  <input name="expect_salary" type="number" onChange={handleInputChange} value={inputs.expect_salary} placeholder="Per Month Salary"/>
                                               </div>
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Notice Period</label>
                                                  <input name="notice_period" type="number" onChange={handleInputChange} value={inputs.notice_period} maxlength="3" placeholder="In Days"/>
                                               </div>
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Earliest Joining Date</label>
                                                  <input name="join_date" onChange={handleInputChange} value={inputs.join_date} type="date"/>
                                               </div>
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Current Job Status</label>
                                                  <select name="cur_jobsts" id="cur_jobsts" onChange={handleInputChange} value={inputs.cur_jobsts}>
                                                    <option defaultValue="">Select</option>
                                                     <option value="Working">Working</option>
                                                     <option value="Not Working">Not Working</option>
                                                     <option value="Maternity Break">Maternity Break</option>
                                                     <option value="On Notice">On Notice</option>
                                                  </select>
                                               </div>
                                            </div>
                                         </div>

                                         <div className="apply_form_box expdiv">
                                             <p className="title">Current/Previous Experience</p>
                                             {experienceFields.map((input, index) => {
                                             return (
                                               <div key={index}>
                                               <div className="row">
                                                       <div className="form-group col-md-4  col-xs-12">
                                                           <label >Company</label>
                                                           <input name="acomp_name_exp" type="text" value={input.acomp_name_exp} onChange={event => handleExperienceChange(index, event)} />
                                                       </div>
                                                       <div className="form-group col-md-4  col-xs-12">
                                                           <label >Level</label>
                                                           <input type="text" name="acomp_level_exp" value={input.acomp_level_exp} onChange={event => handleExperienceChange(index, event)} />
                                                       </div>
                                                       <div className="form-group col-md-4  col-xs-12">
                                                           <label >Industry</label>
                                                           <select name="acomp_ind_exp" value={input.acomp_ind_exp} onChange={event => handleExperienceChange(index, event)}>
                                                               <option defaultValue="">Select</option>
                                                               <option value="Telecommunication industry">Telecommunication industry</option>
                                                               <option value="Computer Industry">Computer Industry</option>
                                                               <option value="Computer Industry">Computer Industry</option>
                                                           </select>
                                                       </div>
                                                       </div>
                                                       <div className="row">
                                                       <div className="form-group col-md-4  col-xs-12">
                                                           <label >Job Title</label>
                                                           <input name="acomp_jtitle_exp" type="text" value={input.acomp_jtitle_exp} onChange={event => handleExperienceChange(index, event)} />
                                                       </div>
                                                       <div className="form-group col-md-2  col-xs-12">
                                                           <label >From</label>
                                                           <select name="acomp_fyear_exp" value={input.acomp_fyear_exp} onChange={event => handleExperienceChange(index, event)} id="">
                                                               <option defaultValue="">Year</option>
                                                               <option value="2021">2021</option>
                                                               <option value="2020">2020</option>
                                                               <option value="2019">2019</option>
                                                               <option value="2018">2018</option>
                                                               <option value="2017">2017</option>
                                                               <option value="2016">2016</option>
                                                               <option value="2015">2015</option>
                                                               <option value="2014">2014</option>
                                                               <option value="2013">2013</option>
                                                               <option value="2012">2012</option>
                                                               <option value="2011">2011</option>
                                                               <option value="2010">2010</option>
                                                           </select>
                                                       </div>
                                                       <div className="form-group col-md-2  col-xs-12">
                                                           <label >&nbsp;</label>
                                                           <select name="acomp_fmonth_exp" value={input.acomp_fmonth_exp} onChange={event => handleExperienceChange(index, event)} id="">
                                                               <option defaultValue="">Months</option>
                                                               <option value="1">1</option>
                                                               <option value="2">2</option>
                                                               <option value="3">3</option>
                                                               <option value="4">4</option>
                                                               <option value="5">5</option>
                                                               <option value="6">6</option>
                                                               <option value="7">7</option>
                                                               <option value="8">8</option>
                                                               <option value="9">9</option>
                                                               <option value="10">10</option>
                                                               <option value="11">11</option>
                                                               <option value="12">12</option>
                                                           </select>
                                                       </div>
                                                        <div className="form-group col-md-2  col-xs-12">
                                                           <label >To</label>
                                                           <select name="acomp_tyear_exp" value={input.acomp_tyear_exp} onChange={event => handleExperienceChange(index, event)} id="">
                                                               <option defaultValue="">Year</option>
                                                               <option value="2021">2021</option>
                                                               <option value="2020">2020</option>
                                                               <option value="2019">2019</option>
                                                               <option value="2018">2018</option>
                                                               <option value="2017">2017</option>
                                                               <option value="2016">2016</option>
                                                               <option value="2015">2015</option>
                                                               <option value="2014">2014</option>
                                                               <option value="2013">2013</option>
                                                               <option value="2012">2012</option>
                                                               <option value="2011">2011</option>
                                                               <option value="2010">2010</option>
                                                           </select>
                                                       </div>
                                                       <div className="form-group col-md-2  col-xs-12">
                                                           <label >&nbsp;</label>
                                                           <select name="acomp_tmonth_exp" value={input.acomp_tmonth_exp} onChange={event => handleExperienceChange(index, event)} id="">
                                                               <option defaultValue="">Months</option>
                                                               <option value="1">1</option>
                                                               <option value="2">2</option>
                                                               <option value="3">3</option>
                                                               <option value="4">4</option>
                                                               <option value="5">5</option>
                                                               <option value="6">6</option>
                                                               <option value="7">7</option>
                                                               <option value="8">8</option>
                                                               <option value="9">9</option>
                                                               <option value="10">10</option>
                                                               <option value="11">11</option>
                                                               <option value="12">12</option>
                                                           </select>
                                                       </div>
                                                       <div className="form-group col-md-12  col-xs-12">
                                                           <label >Job Description</label>
                                                           <textarea name="acomp_jdesc_exp" value={input.acomp_jdesc_exp} onChange={event => handleExperienceChange(index, event)}></textarea>
                                                       </div>

                                                       {(index == 0) ? (
                                                       <div className="col-md-12">
                                                           <a className="addMore web_btn btnAdd" onClick={addExperienceField}><i className="fa fa-plus"></i> Add more</a>
                                                       </div>
                                                     ) : (
                                                       <div className="col-md-12">
                                                           <a className="web_btn removeBtn" onClick={() => removeExperienceField(index)}><i className="fa fa-times"></i> Remove</a>
                                                       </div>
                                                     ) }

                                                   </div>
                                               </div>
                                             ) } ) }
                                         </div>

                                         <div className="apply_form_box">
                                            <div className="row">
                                               <div className="form-group col-md-6 col-sm-12 col-xs-12">
                                                  <label for="">How Did You Hear About this Job Position?</label>
                                                  <select name="from_source" onChange={handleInputChange} value={inputs.from_source} id="from_source" required>
                                                     <option defaultValue="">Select</option>
                                                     <option value="Google Search">Google Search</option>
                                                     <option value="Email">Email</option>
                                                     <option value="Facebook">Facebook</option>
                                                     <option value="LinkedIn">LinkedIn</option>
                                                     <option value="Instagram">Instagram</option>
                                                     <option value="Naukri.com">Naukri.com</option>
                                                     <option value="Indeed.com">Indeed.com</option>
                                                     <option value="Instahyer.com">Instahyer.com</option>
                                                     <option value="SIB Infotech Employee">SIB Infotech Employee</option>
                                                     <option value="Friends">Friends</option>
                                                     <option value="Consultant">Consultant</option>
                                                     <option value="Others">Others</option>
                                                  </select>
                                               </div>
                                               <div className="form-group col-md-6 col-sm-12 col-xs-12" style={{display:'none'}}>
                                               </div>
                                            </div>
                                         </div>
                                         <div className="apply_form_box" style={{display:'none'}}>
                                            <p className="title">Web <span className="text_red">development</span></p>
                                            <div className="row">
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Languages</label>
                                                  <select id="languages" className="form-control" multiple="" style={{display:'none'}}>
                                                     <option value="Python">Python</option>
                                                     <option value="PHP">PHP</option>
                                                     <option value="Java">Java</option>
                                                     <option value="C">C</option>
                                                     <option value="C++">C++</option>
                                                     <option value="R">R</option>
                                                     <option value="JavaScript">JavaScript</option>
                                                     <option value="C#">C#</option>
                                                     <option value="HTML,CSS">HTML,CSS</option>
                                                     <option value="Ruby">Ruby</option>
                                                     <option value="SQL">SQL</option>
                                                     <option value="TypeScript">TypeScript</option>
                                                     <option value="Pascal">Pascal</option>
                                                     <option value="Matlab">Matlab</option>
                                                     <option value="Swift">Swift</option>
                                                     <option value="Go">Go</option>
                                                     <option value="Arduino">Arduino</option>
                                                     <option value="Assembly">Assembly</option>
                                                     <option value="Dart">Dart</option>
                                                     <option value="Rust">Rust</option>
                                                     <option value="Scala">Scala</option>
                                                     <option value="Visual Basic">Visual Basic</option>
                                                     <option value="SAS">SAS</option>
                                                     <option value="Shell">Shell</option>
                                                     <option value="Julia">Julia</option>
                                                     <option value="Kotlin">Kotlin</option>
                                                     <option value="Processing">Processing</option>
                                                     <option value="Objective-C">Objective-C</option>
                                                     <option value="Perl">Perl</option>
                                                     <option value="LabView">LabView</option>
                                                     <option value="Haskell">Haskell</option>
                                                     <option value="Lua">Lua</option>
                                                     <option value="Cuda">Cuda</option>
                                                     <option value="VHDL">VHDL</option>
                                                     <option value="Verilog">Verilog</option>
                                                     <option value="ABAP">ABAP</option>
                                                     <option value="Delphi">Delphi</option>
                                                     <option value="Fortran">Fortran</option>
                                                     <option value="Clojure">Clojure</option>
                                                     <option value="Apache Groovy">Apache Groovy</option>
                                                     <option value="Scheme">Scheme</option>
                                                     <option value="TCL">TCL</option>
                                                     <option value="Lisp">Lisp</option>
                                                     <option value="D">D</option>
                                                     <option value="Ada">Ada</option>
                                                     <option value="Cobol">Cobol</option>
                                                     <option value="Erlang">Erlang</option>
                                                     <option value="Prolog">Prolog</option>
                                                     <option value="Forth">Forth</option>
                                                     <option value="Ocaml">Ocaml</option>
                                                     <option value="J">J</option>
                                                     <option value="Ladder Logic">Ladder Logic</option>
                                                     <option value="CoffeeScript">CoffeeScript</option>
                                                     <option value="Racket">Racket</option>
                                                  </select>
                                                  <div className="ms-parent form-control" style={{width:'100%'}}>
                                                     <button type="button" className="ms-choice">
                                                        <span className="placeholder">Select</span>
                                                        <div></div>
                                                     </button>
                                                     <div className="ms-drop bottom">
                                                        <div className="ms-search"><input type="text" autocomplete="off" autocorrect="off" autocapitilize="off" spellcheck="false"/></div>
                                                        <ul style={{maxHeight:'150px'}}>
                                                           <li className="ms-select-all"><label><input type="checkbox" data-name="selectAlllanguages[]"/> [Select all]</label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Python"/><span>Python</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="PHP"/><span>PHP</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Java"/><span>Java</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="C"/><span>C</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="C++"/><span>C++</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="R"/><span>R</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="JavaScript"/><span>JavaScript</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="C#"/><span>C#</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="HTML,CSS"/><span>HTML,CSS</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Ruby"/><span>Ruby</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="SQL"/><span>SQL</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="TypeScript"/><span>TypeScript</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Pascal"/><span>Pascal</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Matlab"/><span>Matlab</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Swift"/><span>Swift</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Go"/><span>Go</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Arduino"/><span>Arduino</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Assembly"/><span>Assembly</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Dart"/><span>Dart</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Rust"/><span>Rust</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Scala"/><span>Scala</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Visual Basic"/><span>Visual Basic</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="SAS"/><span>SAS</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Shell"/><span>Shell</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Julia"/><span>Julia</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Kotlin"/><span>Kotlin</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Processing"/><span>Processing</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Objective-C"/><span>Objective-C</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Perl"/><span>Perl</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="LabView"/><span>LabView</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Haskell"/><span>Haskell</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Lua"/><span>Lua</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Cuda"/><span>Cuda</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="VHDL"/><span>VHDL</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Verilog"/><span>Verilog</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="ABAP"/><span>ABAP</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Delphi"/><span>Delphi</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Fortran"/><span>Fortran</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Clojure"/><span>Clojure</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Apache Groovy"/><span>Apache Groovy</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Scheme"/><span>Scheme</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="TCL"/><span>TCL</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Lisp"/><span>Lisp</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="D"/><span>D</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Ada"/><span>Ada</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Cobol"/><span>Cobol</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Erlang"/><span>Erlang</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Prolog"/><span>Prolog</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Forth"/><span>Forth</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Ocaml"/><span>Ocaml</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="J"/><span>J</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Ladder Logic"/><span>Ladder Logic</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="CoffeeScript"/><span>CoffeeScript</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemlanguages[]" value="Racket"/><span>Racket</span></label></li>
                                                           <li className="ms-no-results">No matches found</li>
                                                        </ul>
                                                     </div>
                                                  </div>
                                               </div>
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Frameworks</label>
                                                  <select id="frameworks" className="form-control" multiple="" style={{display:'none'}}>
                                                     <option value="Angular JS">Angular JS</option>
                                                     <option value="Spring">Spring</option>
                                                     <option value="React JS">React JS</option>
                                                     <option value="Express JS">Express JS</option>
                                                     <option value="ASP">ASP</option>
                                                     <option value="Django">Django</option>
                                                     <option value=".NETCore">.NETCore</option>
                                                     <option value="Ruby on Rail">Ruby on Rail</option>
                                                     <option value="Vue.js">Vue.js</option>
                                                     <option value="Struts">Struts</option>
                                                     <option value="JSF">JSF</option>
                                                     <option value="Backbone.js">Backbone.js</option>
                                                     <option value="Spark">Spark</option>
                                                     <option value="Cocoa">Cocoa</option>
                                                     <option value="Meteor">Meteor</option>
                                                     <option value="Ember">Ember</option>
                                                     <option value="Pyramid">Pyramid</option>
                                                     <option value="Padrino">Padrino</option>
                                                     <option value="Laravel">Laravel</option>
                                                     <option value="SymFony">SymFony</option>
                                                     <option value="Polymer">Polymer</option>
                                                     <option value="Aurelia">Aurelia</option>
                                                     <option value="Zend">Zend</option>
                                                     <option value="CodeIgniter">CodeIgniter</option>
                                                     <option value="FuelPHP">FuelPHP</option>
                                                     <option value="Phalcon">Phalcon</option>
                                                  </select>
                                                  <div className="ms-parent form-control" style={{width:'100%'}}>
                                                     <button type="button" className="ms-choice">
                                                        <span className="placeholder">Select</span>
                                                        <div></div>
                                                     </button>
                                                     <div className="ms-drop bottom">
                                                        <div className="ms-search"><input type="text" autocomplete="off" autocorrect="off" autocapitilize="off" spellcheck="false"/></div>
                                                        <ul style={{maxHeight:'150px'}}>
                                                           <li className="ms-select-all"><label><input type="checkbox" data-name="selectAllframeworks[]"/> [Select all]</label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="Angular JS"/><span>Angular JS</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="Spring"/><span>Spring</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="React JS"/><span>React JS</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="Express JS"/><span>Express JS</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="ASP"/><span>ASP</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="Django"/><span>Django</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value=".NETCore"/><span>.NETCore</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="Ruby on Rail"/><span>Ruby on Rail</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="Vue.js"/><span>Vue.js</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="Struts"/><span>Struts</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="JSF"/><span>JSF</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="Backbone.js"/><span>Backbone.js</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="Spark"/><span>Spark</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="Cocoa"/><span>Cocoa</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="Meteor"/><span>Meteor</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="Ember"/><span>Ember</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="Pyramid"/><span>Pyramid</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="Padrino"/><span>Padrino</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="Laravel"/><span>Laravel</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="SymFony"/><span>SymFony</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="Polymer"/><span>Polymer</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="Aurelia"/><span>Aurelia</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="Zend"/><span>Zend</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="CodeIgniter"/><span>CodeIgniter</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="FuelPHP"/><span>FuelPHP</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemframeworks[]" value="Phalcon"/><span>Phalcon</span></label></li>
                                                           <li className="ms-no-results">No matches found</li>
                                                        </ul>
                                                     </div>
                                                  </div>
                                               </div>
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Software Development</label>
                                                  <select id="development" className="form-control" multiple="" style={{display:'none'}}>
                                                     <option value="Custom Software">Custom Software</option>
                                                     <option value="Vtiger CRM">Vtiger CRM</option>
                                                     <option value="Sugar CRM">Sugar CRM</option>
                                                     <option value="Microsoft CRM">Microsoft CRM</option>
                                                     <option value="ERP Development">ERP Development</option>
                                                  </select>
                                                  <div className="ms-parent form-control" style={{width:'100%'}}>
                                                     <button type="button" className="ms-choice">
                                                        <span className="placeholder">Select</span>
                                                        <div></div>
                                                     </button>
                                                     <div className="ms-drop bottom">
                                                        <div className="ms-search"><input type="text" autocomplete="off" autocorrect="off" autocapitilize="off" spellcheck="false"/></div>
                                                        <ul style={{maxHeight:'150px'}}>
                                                           <li className="ms-select-all"><label><input type="checkbox" data-name="selectAlldevelopment[]"/> [Select all]</label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemdevelopment[]" value="Custom Software"/><span>Custom Software</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemdevelopment[]" value="Vtiger CRM"/><span>Vtiger CRM</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemdevelopment[]" value="Sugar CRM"/><span>Sugar CRM</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemdevelopment[]" value="Microsoft CRM"/><span>Microsoft CRM</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemdevelopment[]" value="ERP Development"/><span>ERP Development</span></label></li>
                                                           <li className="ms-no-results">No matches found</li>
                                                        </ul>
                                                     </div>
                                                  </div>
                                               </div>
                                            </div>
                                            <div className="row">
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Mobile Apps</label>
                                                  <select id="apps" className="form-control" multiple="" style={{display:'none'}}>
                                                     <option value="IOS Development">IOS Development</option>
                                                     <option value="Windows Development">Windows Development</option>
                                                     <option value="Android Development">Android Development</option>
                                                     <option value="Blackberry Applications">Blackberry Applications</option>
                                                  </select>
                                                  <div className="ms-parent form-control" style={{width:'100%'}}>
                                                     <button type="button" className="ms-choice">
                                                        <span className="placeholder">Select</span>
                                                        <div></div>
                                                     </button>
                                                     <div className="ms-drop bottom">
                                                        <div className="ms-search"><input type="text" autocomplete="off" autocorrect="off" autocapitilize="off" spellcheck="false"/></div>
                                                        <ul style={{maxHeight:'150px'}}>
                                                           <li className="ms-select-all"><label><input type="checkbox" data-name="selectAllapps[]"/> [Select all]</label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemapps[]" value="IOS Development"/><span>IOS Development</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemapps[]" value="Windows Development"/><span>Windows Development</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemapps[]" value="Android Development"/><span>Android Development</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemapps[]" value="Blackberry Applications"/><span>Blackberry Applications</span></label></li>
                                                           <li className="ms-no-results">No matches found</li>
                                                        </ul>
                                                     </div>
                                                  </div>
                                               </div>
                                            </div>
                                         </div>
                                         <div className="apply_form_box" style={{display:'none'}}>
                                            <p className="title">Digital <span className="text_red">Marketing</span></p>
                                            <div className="row">
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">SEO - Search Engine Marketing</label>
                                                  <select id="seo" className="form-control" multiple="" style={{display:'none'}}>
                                                     <option value="On Page Optimization">On Page Optimization</option>
                                                     <option value="Off Page Optimization">Off Page Optimization</option>
                                                     <option value="Directory Submission">Directory Submission</option>
                                                     <option value="Artcile Submission">Artcile Submission</option>
                                                     <option value="Social Book Marking">Social Book Marking</option>
                                                     <option value="Infographics">Infographics</option>
                                                     <option value="You Tube Ads">You Tube Ads</option>
                                                  </select>
                                                  <div className="ms-parent form-control" style={{width:'100%'}}>
                                                     <button type="button" className="ms-choice">
                                                        <span className="placeholder">Select</span>
                                                        <div></div>
                                                     </button>
                                                     <div className="ms-drop bottom">
                                                        <div className="ms-search"><input type="text" autocomplete="off" autocorrect="off" autocapitilize="off" spellcheck="false"/></div>
                                                        <ul style={{maxHeight:'150px'}}>
                                                           <li className="ms-select-all"><label><input type="checkbox" data-name="selectAllseo[]"/> [Select all]</label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemseo[]" value="On Page Optimization"/><span>On Page Optimization</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemseo[]" value="Off Page Optimization"/><span>Off Page Optimization</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemseo[]" value="Directory Submission"/><span>Directory Submission</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemseo[]" value="Artcile Submission"/><span>Artcile Submission</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemseo[]" value="Social Book Marking"/><span>Social Book Marking</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemseo[]" value="Infographics"/><span>Infographics</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemseo[]" value="You Tube Ads"/><span>You Tube Ads</span></label></li>
                                                           <li className="ms-no-results">No matches found</li>
                                                        </ul>
                                                     </div>
                                                  </div>
                                               </div>
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">Pay Per Click Management </label>
                                                  <select id="pay" className="form-control" multiple="" style={{display:'none'}}>
                                                     <option value="Google Adwords">Google Adwords</option>
                                                     <option value="Bing Ads">Bing Ads</option>
                                                     <option value="Facebook Advertsiing">Facebook Advertsiing</option>
                                                     <option value="Instagram Ads">Instagram Ads</option>
                                                     <option value="LinkedIn Ads">LinkedIn Ads</option>
                                                     <option value="Twitter Ads">Twitter Ads</option>
                                                     <option value="Pin Intrest">Pin Intrest</option>
                                                     <option value="Snap Chat Marketing">Snap Chat Marketing</option>
                                                     <option value="You Tube Marketing">You Tube Marketing</option>
                                                     <option value="Video Editing ">Video Editing </option>
                                                  </select>
                                                  <div className="ms-parent form-control" style={{width:'100%'}}>
                                                     <button type="button" className="ms-choice">
                                                        <span className="placeholder">Select</span>
                                                        <div></div>
                                                     </button>
                                                     <div className="ms-drop bottom">
                                                        <div className="ms-search"><input type="text" autocomplete="off" autocorrect="off" autocapitilize="off" spellcheck="false"/></div>
                                                        <ul style={{maxHeight:'150px'}}>
                                                           <li className="ms-select-all"><label><input type="checkbox" data-name="selectAllpay[]"/> [Select all]</label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItempay[]" value="Google Adwords"/><span>Google Adwords</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItempay[]" value="Bing Ads"/><span>Bing Ads</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItempay[]" value="Facebook Advertsiing"/><span>Facebook Advertsiing</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItempay[]" value="Instagram Ads"/><span>Instagram Ads</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItempay[]" value="LinkedIn Ads"/><span>LinkedIn Ads</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItempay[]" value="Twitter Ads"/><span>Twitter Ads</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItempay[]" value="Pin Intrest"/><span>Pin Intrest</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItempay[]" value="Snap Chat Marketing"/><span>Snap Chat Marketing</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItempay[]" value="You Tube Marketing"/><span>You Tube Marketing</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItempay[]" value="Video Editing "/><span>Video Editing </span></label></li>
                                                           <li className="ms-no-results">No matches found</li>
                                                        </ul>
                                                     </div>
                                                  </div>
                                               </div>
                                               <div className="form-group col-md-4  col-xs-12">
                                                  <label for="">SMO - Social Media Marketing </label>
                                                  <select id="smo" className="form-control" multiple="" style={{display: 'none'}}>
                                                     <option value="Content Writing">Content Writing</option>
                                                     <option value="Blog Writing">Blog Writing</option>
                                                     <option value="Facebook Marketing">Facebook Marketing</option>
                                                     <option value="Twitter Marketing">Twitter Marketing</option>
                                                     <option value="Linkedin Marketing">Linkedin Marketing</option>
                                                     <option value="Instagram Marketing">Instagram Marketing</option>
                                                  </select>
                                                  <div className="ms-parent form-control" style={{width: '100%'}}>
                                                     <button type="button" className="ms-choice">
                                                        <span className="placeholder">Select</span>
                                                        <div></div>
                                                     </button>
                                                     <div className="ms-drop bottom">
                                                        <div className="ms-search"><input type="text" autocomplete="off" autocorrect="off" autocapitilize="off" spellcheck="false"/></div>
                                                        <ul style={{maxHeight:'150px'}}>
                                                           <li className="ms-select-all"><label><input type="checkbox" data-name="selectAllsmo[]"/> [Select all]</label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemsmo[]" value="Content Writing"/><span>Content Writing</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemsmo[]" value="Blog Writing"/><span>Blog Writing</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemsmo[]" value="Facebook Marketing"/><span>Facebook Marketing</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemsmo[]" value="Twitter Marketing"/><span>Twitter Marketing</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemsmo[]" value="Linkedin Marketing"/><span>Linkedin Marketing</span></label></li>
                                                           <li className=""><label className=""><input type="checkbox" data-name="selectItemsmo[]" value="Instagram Marketing"/><span>Instagram Marketing</span></label></li>
                                                           <li className="ms-no-results">No matches found</li>
                                                        </ul>
                                                     </div>
                                                  </div>
                                               </div>
                                            </div>
                                         </div>
                                         <div className="row">
                                             <div className="col-md-4 col-sm-12 col-xs-12">
                                                <div className="form-group inline_input">
                                                   <label for="">Upload CV*</label>
                                                   <input type="file" name="resume" value="" accept=".doc,.docx,application/pdf,.jpg,.jpeg,.png,.gif" onChange={handleFileChange}/>
                                                </div>
                                             </div>
                                         </div>
                                         <div className="row">
                                          <div className="col-md-6 col-sm-12 col-xs-12">
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
                                         </div>
                                         <div className="row">
                                            <div className="form-group col-md-12 col-sm-12 col-xs-12 text-center">
                                               <button type="submit" id="careersubmit" name="submit" className="theme-btn btn-style-one">Apply Now</button>
                                            </div>
                                         </div>
                                      </form>
                                   </div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>
    </div>
  )
}
