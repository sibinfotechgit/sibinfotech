_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{GvIb:function(e,c,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact-us",function(){return t("taXs")}])},taXs:function(e,c,t){"use strict";t.r(c),t.d(c,"default",(function(){return u}));var a=t("o0o1"),s=t.n(a),n=t("HaE+"),r=t("rePB"),i=t("nKUr"),l=t("q1tI"),o=t("g4pe"),d=t.n(o),j=t("YFqc"),m=t.n(j),h=t("zuR4"),b=t("rxnA"),x=t("9uY5");function p(e,c){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);c&&(a=a.filter((function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable}))),t.push.apply(t,a)}return t}function O(e){for(var c=1;c<arguments.length;c++){var t=null!=arguments[c]?arguments[c]:{};c%2?p(Object(t),!0).forEach((function(c){Object(r.a)(e,c,t[c])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(t,c))}))}return e}function u(){var e={"Content-Type":"multipart/form-data",Authorization:b.a},c=Object(l.useState)(),t=c[0],a=c[1],o=Object(l.useState)({name:"",cname:"",email:"",phone:"",details:"",cpatchaText:""}),j=o[0],p=o[1],u=function(e){p((function(c){return O(O({},c),{},Object(r.a)({},e.target.name,e.target.value))}))},f=function(){var c=Object(n.a)(s.a.mark((function c(){var t,a,n;return s.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return(t=new FormData).append("name",j.name),t.append("cname",j.cname),t.append("email",j.email),t.append("phone",j.phone),t.append("details",j.details),c.next=8,h.a.post("".concat(b.b,"home/submit_enquiry"),t,{headers:e}).catch((function(e){return console.log(e)}));case 8:return a=c.sent,c.next=11,a.data;case 11:return n=c.sent,c.abrupt("return",n);case 13:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}(),v=function(e){var c=x.a();a(c)};return Object(l.useEffect)((function(){v()}),[]),Object(i.jsxs)("div",{children:[Object(i.jsxs)(d.a,{children:[Object(i.jsx)("title",{children:"SIB Infotech | Contact Us"}),Object(i.jsx)("meta",{name:"keywords",content:"contact"}),Object(i.jsx)("meta",{name:"description",content:"contact"})]}),Object(i.jsx)("div",{className:"innerWebDesign",children:Object(i.jsx)("div",{className:"container-fluid",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-lg-12",children:Object(i.jsx)("div",{className:"innerBannerTitle venter",children:Object(i.jsx)("h3",{className:"heading fontWeight700 text-center text-white",children:"Get in Touch"})})})})})}),Object(i.jsx)("section",{className:"contactPage",children:Object(i.jsxs)("div",{className:"containerFull",children:[Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-md-3",children:Object(i.jsxs)("div",{className:"contactItem",children:[Object(i.jsx)("h4",{children:"Business Hours"}),Object(i.jsxs)("p",{children:[Object(i.jsx)("i",{className:"far fa-clock","aria-hidden":"true"})," Monday to Saturday : 09:00 \u2013 18:00"]})]})}),Object(i.jsx)("div",{className:"col-md-3",children:Object(i.jsxs)("div",{className:"contactItem",children:[Object(i.jsx)("h4",{children:"Call Today"}),Object(i.jsxs)("p",{children:[Object(i.jsx)("i",{className:"fa fa-phone"})," ",Object(i.jsx)(m.a,{href:"tel:+91-9222260000",children:Object(i.jsx)("a",{children:"+91-92222-60000"})})]})]})}),Object(i.jsx)("div",{className:"col-md-3",children:Object(i.jsxs)("div",{className:"contactItem",children:[Object(i.jsx)("h4",{children:"Enquiry/Support"}),Object(i.jsxs)("p",{children:[Object(i.jsx)("i",{className:"fa fa-envelope"})," ",Object(i.jsx)(m.a,{href:"mailto:contact@sibinfotech.com",children:Object(i.jsx)("a",{children:"contact@sibinfotech.com"})})]})]})}),Object(i.jsx)("div",{className:"col-md-3",children:Object(i.jsxs)("div",{className:"contactItem",children:[Object(i.jsx)("h4",{children:"Career"}),Object(i.jsxs)("p",{children:[Object(i.jsx)("i",{className:"fa fa-envelope text_primary"})," ",Object(i.jsx)(m.a,{href:"#",children:Object(i.jsx)("a",{children:"career@sibinfotech.com"})})]})]})})]}),Object(i.jsxs)("div",{id:"contact_form_section",children:[Object(i.jsxs)("div",{className:"contact_form_box",children:[Object(i.jsxs)("p",{className:"main_contact_title redText",children:["Drop Us ",Object(i.jsx)("span",{className:"blueText fw-bold text-uppercase",children:"A Line"})]}),Object(i.jsx)("div",{className:"contact-form",children:Object(i.jsx)("form",{onSubmit:function(e){e.preventDefault(),t==j.cpatchaText?f().then((function(e){e.error||p({name:"",cname:"",email:"",phone:"",details:"",cpatchaText:""})})):(alert("Invalid Captcha. try Again"),v())},method:"post",action:"#",children:Object(i.jsxs)("div",{className:"row clearfix",children:[Object(i.jsxs)("div",{className:"form-group col-md-6 col-sm-6 co-xs-12",children:[Object(i.jsx)("label",{htmlFor:"",children:"Name*"}),Object(i.jsx)("input",{type:"text",name:"name",onChange:u,value:j.name,pattern:"^[( )a-zA-Z]+$",title:"Please enter alphabets",required:!0})]}),Object(i.jsxs)("div",{className:"form-group col-md-6 col-sm-6 co-xs-12",children:[Object(i.jsx)("label",{htmlFor:"",children:"Company Name"}),Object(i.jsx)("input",{type:"text",name:"cname",onChange:u,value:j.cname})]}),Object(i.jsxs)("div",{className:"form-group col-md-6 col-sm-6 co-xs-12",children:[Object(i.jsx)("label",{htmlFor:"",children:"Email*"}),Object(i.jsx)("input",{type:"email",name:"email",onChange:u,value:j.email,required:!0})]}),Object(i.jsxs)("div",{className:"form-group col-md-6 col-sm-6 co-xs-12",children:[Object(i.jsx)("label",{htmlFor:"",children:"Mobile*"}),Object(i.jsx)("input",{type:"number",name:"phone",inputMode:"tel",onChange:u,value:j.phone,title:"Please enter digits",required:!0})]}),Object(i.jsxs)("div",{className:"form-group col-md-12 col-sm-12 co-xs-12",children:[Object(i.jsx)("label",{htmlFor:"",children:"Details"}),Object(i.jsx)("textarea",{name:"details",onChange:u,value:j.details})]}),Object(i.jsx)("div",{className:"form-group col-md-12 col-sm-12 co-xs-12",children:Object(i.jsxs)("div",{className:"row align-items-center",children:[Object(i.jsx)("div",{className:"col-3",children:Object(i.jsx)("div",{className:"captcha",id:"captcha"})}),Object(i.jsx)("div",{className:"col-1",children:Object(i.jsx)("div",{id:"refresh_captcha",onClick:v,children:Object(i.jsx)("i",{className:"bi bi-arrow-clockwise"})})}),Object(i.jsx)("div",{className:"col-8",children:Object(i.jsx)("input",{type:"text",className:"capIn",placeholder:"Type the text",name:"cpatchaText",id:"cpatchaTextBox",onChange:u,value:j.cpatchaText,required:!0})})]})}),Object(i.jsx)("div",{className:"form-group col-md-12 text-center col-sm-12 co-xs-12",children:Object(i.jsx)("button",{type:"submit",name:"submit",className:"theme-btn btn-style-one",children:"Submit"})})]})})})]}),Object(i.jsxs)("div",{className:"mapRight",children:[Object(i.jsxs)("div",{className:"mapItemContact",children:[Object(i.jsx)("h4",{className:"small_heading2 fontWeight700",children:"Mumbai"}),Object(i.jsx)("iframe",{title:"Mumbai Office Address",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.411526446748!2d72.83122837433645!3d19.17721994878878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce92f56b4ccd%3A0x965180085bc69862!2sSIB%20Infotech!5e0!3m2!1sen!2sin!4v1701172662132!5m2!1sen!2sin",width:"100%",height:"200",style:{border:"0"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})]}),Object(i.jsxs)("div",{className:"mapItemContact",children:[Object(i.jsx)("h4",{className:"small_heading2 fontWeight700",children:"New Delhi"}),Object(i.jsx)("iframe",{title:"Delhi Office Address",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.990420950181!2d77.07941511455955!3d28.630049190945325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05e1990aeceb%3A0x7e39edabda3510f5!2sSIB%20Infotech!5e0!3m2!1sen!2sin!4v1678532823519!5m2!1sen!2sin",width:"100%",height:"200",style:{border:"0"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})]})]})]})]})})]})}}},[["GvIb",0,2,1,3,4]]]);