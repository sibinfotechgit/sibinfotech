(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"6Cl6":function(e,t,n){},"9a8T":function(e,t,n){e.exports=function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=(o(n(1)),n(6)),r=o(a),c=o(n(7)),s=o(n(8)),u=o(n(9)),l=o(n(10)),d=o(n(11)),f=o(n(14)),p=[],m=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(m=!0),m)return p=(0,d.default)(p,b),(0,l.default)(p,b.once),p},h=function(){p=(0,f.default)(),v()},g=function(){p.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},y=function(e){return!0===e||"mobile"===e&&u.default.mobile()||"phone"===e&&u.default.phone()||"tablet"===e&&u.default.tablet()||"function"==typeof e&&!0===e()},j=function(e){b=i(b,e),p=(0,f.default)();var t=document.all&&!window.atob;return y(b.disable)||t?g():(b.disableMutationObserver||s.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),"DOMContentLoaded"===b.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===b.startEvent?window.addEventListener(b.startEvent,(function(){v(!0)})):document.addEventListener(b.startEvent,(function(){v(!0)})),window.addEventListener("resize",(0,c.default)(v,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(v,b.debounceDelay,!0)),window.addEventListener("scroll",(0,r.default)((function(){(0,l.default)(p,b.once)}),b.throttleDelay)),b.disableMutationObserver||s.default.ready("[data-aos]",h),p)};e.exports={init:j,refresh:v,refreshHard:h}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function a(e){return k=e,y=setTimeout(l,t),N?o(e):g}function r(e){var n=t-(e-j);return S?O(n,h-(e-k)):n}function s(e){var n=e-j;return void 0===j||n>=t||n<0||S&&e-k>=h}function l(){var e=x();return s(e)?d(e):void(y=setTimeout(l,r(e)))}function d(e){return y=void 0,M&&b?o(e):(b=v=void 0,g)}function f(){void 0!==y&&clearTimeout(y),k=0,b=j=v=y=void 0}function p(){return void 0===y?g:d(x())}function m(){var e=x(),n=s(e);if(b=arguments,v=this,j=e,n){if(void 0===y)return a(j);if(S)return y=setTimeout(l,t),o(j)}return void 0===y&&(y=setTimeout(l,t)),g}var b,v,h,g,y,j,k=0,N=!1,S=!1,M=!0;if("function"!=typeof e)throw new TypeError(u);return t=c(t)||0,i(n)&&(N=!!n.leading,h=(S="maxWait"in n)?w(c(n.maxWait)||0,t):h,M="trailing"in n?!!n.trailing:M),m.cancel=f,m.flush=p,m}function o(e,t,o){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError(u);return i(o)&&(a="leading"in o?!!o.leading:a,r="trailing"in o?!!o.trailing:r),n(e,t,{leading:a,maxWait:t,trailing:r})}function i(e){var t="undefined"==typeof e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==("undefined"==typeof e?"undefined":s(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":s(e))||a(e)&&j.call(e)==d}function c(e){if("number"==typeof e)return e;if(r(e))return l;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?l:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u="Expected a function",l=NaN,d="[object Symbol]",f=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,h="object"==("undefined"==typeof t?"undefined":s(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,y=h||g||Function("return this")(),j=Object.prototype.toString,w=Math.max,O=Math.min,x=function(){return y.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function a(e){return k=e,y=setTimeout(l,t),N?i(e):g}function c(e){var n=t-(e-x);return S?w(n,h-(e-k)):n}function u(e){var n=e-x;return void 0===x||n>=t||n<0||S&&e-k>=h}function l(){var e=O();return u(e)?d(e):void(y=setTimeout(l,c(e)))}function d(e){return y=void 0,M&&b?i(e):(b=v=void 0,g)}function f(){void 0!==y&&clearTimeout(y),k=0,b=x=v=y=void 0}function p(){return void 0===y?g:d(O())}function m(){var e=O(),n=u(e);if(b=arguments,v=this,x=e,n){if(void 0===y)return a(x);if(S)return y=setTimeout(l,t),i(x)}return void 0===y&&(y=setTimeout(l,t)),g}var b,v,h,g,y,x,k=0,N=!1,S=!1,M=!0;if("function"!=typeof e)throw new TypeError(s);return t=r(t)||0,o(n)&&(N=!!n.leading,h=(S="maxWait"in n)?j(r(n.maxWait)||0,t):h,M="trailing"in n?!!n.trailing:M),m.cancel=f,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||i(e)&&y.call(e)==l}function r(e){if("number"==typeof e)return e;if(a(e))return u;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):f.test(e)?u:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",u=NaN,l="[object Symbol]",d=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,h="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,g=v||h||Function("return this")(),y=Object.prototype.toString,j=Math.max,w=Math.min,O=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0;for(t=0;t<e.length;t+=1){if((o=e[t]).dataset&&o.dataset.aos)return!0;if(o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function a(e,t){var n=window.document,i=new(o())(r);c=t,i.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function r(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(o)))return c()}))}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){};t.default={isSupported:i,ready:a}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!a.test(e)&&!r.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!c.test(e)&&!s.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new u},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach((function(e,a){n(e,i+o,t)}))};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(12)),a=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,i.default)(e.node,t.offset)})),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(n(13)),a=function(e,t){var n=0,o=0,a=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(o=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),n=(0,i.default)(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=a/2;break;case"bottom-center":n+=a/2+e.offsetHeight;break;case"center-center":n+=a/2+e.offsetHeight/2;break;case"top-top":n+=a;break;case"bottom-top":n+=e.offsetHeight+a;break;case"center-top":n+=e.offsetHeight/2+a}return r.anchorPlacement||r.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=n}])},sTxE:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var o=n("o0o1"),i=n.n(o),a=n("HaE+"),r=n("rePB"),c=n("nKUr"),s=n("q1tI"),u=(n("YFqc"),n("zuR4")),l=n("rxnA"),d=n("9uY5");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(){var e={"Content-Type":"multipart/form-data",Authorization:l.a},t=Object(s.useState)(),n=t[0],o=t[1],f=Object(s.useState)({name:"",cname:"",email:"",phone:"",details:"",service:"",website:"",cpatchaText:""}),m=f[0],b=f[1],v=function(e){b((function(t){return p(p({},t),{},Object(r.a)({},e.target.name,e.target.value))}))},h=function(){var t=Object(a.a)(i.a.mark((function t(){var n,o,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("name",m.name),n.append("cname",m.cname),n.append("email",m.email),n.append("phone",m.phone),n.append("details",m.details),n.append("service",m.service),n.append("website",m.website),n.append("page_url",window.location.pathname),t.next=11,u.a.post("".concat(l.b,"home/submit_banner_enquiry"),n,{headers:e}).catch((function(e){return console.log(e)}));case 11:return o=t.sent,t.next=14,o.data;case 14:return a=t.sent,t.abrupt("return",a);case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(e){var t=d.a();o(t)};return Object(s.useEffect)((function(){g()}),[]),Object(c.jsx)("div",{children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n==m.cpatchaText?h().then((function(e){e.error||b({name:"",cname:"",email:"",phone:"",details:"",service:"",website:"",cpatchaText:""})})):(alert("Invalid Captcha. try Again"),g())},method:"post",action:"#",children:[Object(c.jsx)("div",{className:"bannerFormItem",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-6 pe-lg-1",children:Object(c.jsx)("input",{type:"text",name:"name",onChange:v,value:m.name,placeholder:"Name*",required:!0})}),Object(c.jsx)("div",{className:"col-lg-6",children:Object(c.jsx)("input",{type:"text",name:"cname",onChange:v,value:m.cname,placeholder:"Company Name"})})]})}),Object(c.jsx)("div",{className:"bannerFormItem",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-6 pe-lg-1",children:Object(c.jsx)("input",{type:"text",name:"website",onChange:v,value:m.website,placeholder:"Website URL"})}),Object(c.jsx)("div",{className:"col-lg-6",children:Object(c.jsx)("input",{type:"email",name:"email",onChange:v,value:m.email,placeholder:"E-mail Address*",required:!0})})]})}),Object(c.jsx)("div",{className:"bannerFormItem",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-lg-6 pe-lg-1",children:Object(c.jsx)("input",{type:"tel",name:"phone",onChange:v,value:m.phone,placeholder:"Phone Number*",required:!0})}),Object(c.jsx)("div",{className:"col-lg-6",children:Object(c.jsxs)("select",{name:"service",onChange:v,value:m.service,required:!0,children:[Object(c.jsx)("option",{value:"Website Design",children:"Website Design"}),Object(c.jsx)("option",{value:"Website Development",children:"Website Development"}),Object(c.jsx)("option",{value:"Digital Marketing",children:"Digital Marketing"}),Object(c.jsx)("option",{value:"PPC",children:"PPC"}),Object(c.jsx)("option",{value:"SEO",children:"SEO"}),Object(c.jsx)("option",{value:"SMO",children:"SMO"}),Object(c.jsx)("option",{value:"Software Development",children:"Software Development"}),Object(c.jsx)("option",{value:"Graphic Design",children:"Graphic Design"}),Object(c.jsx)("option",{value:"Mobile App Development",children:"Mobile App Development"}),Object(c.jsx)("option",{value:"Offshore Outsourcing",children:"Offshore Outsourcing"})]})})]})}),Object(c.jsx)("div",{className:"bannerFormItem",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-lg-12",children:Object(c.jsx)("textarea",{placeholder:"Message",name:"details",onChange:v,value:m.details})})})}),Object(c.jsx)("div",{className:"bannerFormItem mt-0 d-lg-block d-none",children:Object(c.jsxs)("div",{className:"row align-items-center",children:[Object(c.jsx)("div",{className:"col-3",children:Object(c.jsx)("div",{className:"captcha",id:"captcha"})}),Object(c.jsx)("div",{className:"col-1",children:Object(c.jsx)("div",{id:"refresh_captcha",onClick:g,children:Object(c.jsx)("i",{className:"bi bi-arrow-clockwise"})})}),Object(c.jsx)("div",{className:"col-8",children:Object(c.jsx)("input",{type:"text",className:"capIn",placeholder:"Type the text",name:"cpatchaText",id:"cpatchaTextBox",onChange:v,value:m.cpatchaText,required:!0})})]})}),Object(c.jsx)("div",{className:"bannerFormItem mt-2",children:Object(c.jsx)("button",{name:"submit",type:"submit",className:"btnTheme w-100 fontWeight700 rounded",children:"Get in Touch"})})]})})}}}]);