module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6mnf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.compileNonPath = compileNonPath;
exports.default = prepareDestination;

var _querystring = __webpack_require__("3WeD");

var _parseRelativeUrl = __webpack_require__("hS4m");

var pathToRegexp = _interopRequireWildcard(__webpack_require__("zOyy"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (const key of Object.keys(params)) {
    if (value.includes(`:${key}`)) {
      value = value.replace(new RegExp(`:${key}\\*`, 'g'), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, 'g'), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, 'g'), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, 'g'), `--ESCAPED_PARAM_COLON${key}`);
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile(`/${value}`, {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery) {
  let parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  const hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  let paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(name => name !== 'nextInternalLocale');
  }

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  try {
    newUrl = destinationCompiler(params);
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("CH2o");


/***/ }),

/***/ "9uY5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createCaptcha; });
var createCaptcha = () => {
  let code; //clear the contents of captcha div first

  document.getElementById('captcha').innerHTML = "";
  var charsArray = "0123456789";
  var lengthOtp = 6;
  var captcha = [];

  for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array

    if (captcha.indexOf(charsArray[index]) == -1) captcha.push(charsArray[index]);else i--;
  }

  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 120;
  canv.height = 35;
  var ctx = canv.getContext("2d");
  ctx.font = "25px Arial";
  ctx.strokeText(captcha.join(""), 0, 30); //storing captcha so that can validate you can save it somewhere else according to your specific requirements

  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element

  return code;
};

/***/ }),

/***/ "CH2o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Home; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./comps/BannerForm.js
var BannerForm = __webpack_require__("sTxE");

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// CONCATENATED MODULE: ./comps/BannerTextSlider.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function BannerTextSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    vertical: true,
    verticalScrolling: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_slick_default.a, _objectSpread(_objectSpread({
      className: "vertcalSlider"
    }, settings), {}, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemTextSlider",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          className: "title",
          children: "Leads"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemTextSlider",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          className: "title",
          children: "Brand Awareness"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemTextSlider",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          className: "title",
          children: "Through our Digital Marketing Services"
        })
      })]
    }))
  });
}
// EXTERNAL MODULE: ./constants/constants.js
var constants = __webpack_require__("rxnA");

// CONCATENATED MODULE: ./comps/BlogCard.js



 // import { compareAsc, format } from 'date-fns'

function BlogCard(props) {
  const {
    blog
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
    href: "/blogs/" + blog.slug,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "blogItems",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "blogImg",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: `${constants["c" /* BACKEND_URL */] + blog.image}`,
            className: "img-fluid",
            alt: blog.image_alt
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "dividerBlog"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "blogTitle",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
            className: "small_heading fontHeading fontWeight600",
            children: blog.name
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "dateTime",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: blog.bdate
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              className: "blogIcon",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                className: "fa fa-chevron-right"
              })
            })]
          })]
        })]
      })
    })
  });
}

/* harmony default export */ var comps_BlogCard = (BlogCard);
// CONCATENATED MODULE: ./comps/DigitalMarketingTab.js




function DigitalMarketingTab() {
  const {
    0: tabDats,
    1: setTabData
  } = Object(external_react_["useState"])({
    tabnumbers: 1,
    title: "Search Engine Optimization",
    title2: "SIB Infotech <span class='text_red'>SEO Services In India</span> - Trusted By Over 1000+ Companies",
    image: "assets/images/seo-tab.jpg",
    content: "<p class='mt-3'>SEO is the most efficient and effective method increase your search engine visibility and drive traffic to your website. With our SEO services we can help you get top ranking on major search engines (Google, yahoo, Bing) using our propertiory techniques developed with years of experience using white hat SEO practices and bringing an increase in organic search engine ranking.</p>",
    url: "/search-engine-optimization-seo-services"
  });
  const tabsData = [{
    tabnumbers: 2,
    title: "Search Engine Optimization",
    title2: "SIB Infotech <span class='text_red'>SEO Services In India</span> - Trusted By Over 1000+ Companies",
    image: "assets/images/seo-tab.jpg",
    content: "<p class='mt-3'>SEO is the most efficient and effective method increase your search engine visibility and drive traffic to your website. With our SEO services we can help you get top ranking on major search engines (Google, yahoo, Bing) using our propertiory techniques developed with years of experience using white hat SEO practices and bringing an increase in organic search engine ranking.</p>",
    url: "/search-engine-optimization-seo-services"
  }, {
    tabnumbers: 3,
    title: "Social Media Optimization",
    title2: "Top Rated <span class='text_red'>SEO Company in India</span>",
    image: "assets/images/smo-tab.jpg",
    content: "<p class='mt-3'>Affiliate Marketing is the term used to describe a form of online advertising which consists of rewarding an affiliate for referring a visitor or rewarding a customer for performing a desired action, such as making a purchase or subscribing to a newsletter. In a way, Affiliate Marketing can be regarded as free publicity for your page—a network of related websites directing customers to purchase from yours</p> <p class='mt-2'>Affiliate campaigns have the best results when they are combined with Search Engine Optimization (SEO), Pay Per Click (PPC) campaigns, email marketing support and are well-suited for travel, retail, and service industries due to their timely research process/large-volume sales.</p>",
    url: "/social-media-optimization-services"
  }, {
    tabnumbers: 4,
    title: "Content Marketing",
    title2: "Tell your <span class='text_red'>Brand Story</span> Better, <span class='text_red'>Engage better</span> with your Audience",
    image: "assets/images/content-tab.jpg",
    content: "<p class='mt-3'>Affiliate Marketing is the term used to describe a form of online advertising which consists of rewarding an affiliate for referring a visitor or rewarding a customer for performing a desired action, such as making a purchase or subscribing to a newsletter. In a way, Affiliate Marketing can be regarded as free publicity for your page—a network of related websites directing customers to purchase from yours</p> <p class='mt-2'>Affiliate campaigns have the best results when they are combined with Search Engine Optimization (SEO), Pay Per Click (PPC) campaigns, email marketing support and are well-suited for travel, retail, and service industries due to their timely research process/large-volume sales.</p>",
    url: "/content-marketing-services"
  }, {
    tabnumbers: 5,
    title: "PPC Management Services",
    title2: "SIB Infotech is an innovative  <span class='text_red'>PPC management company</span>",
    image: "assets/images/ppc-tab.jpg",
    content: "<p class='mt-3'>SIB Infotech is an innovative digital marketing, AdWords management, remarketing and PPC management company with proven track record to take your PPC campaigns to the next level and provide you with integrated, adverting and marketing solution.</p><p class='mt-2'>Pay-per-click(PPC) advertising allows you to reach your target customers searching for your products and services online by using target keywords.</p><p class='mt-2'>Pay per click represent a model of internet marketing where an advertiser run an ad and he will get charged if there will be a click on his ad. Advertiser pay a fees every time on his ad whenever he will get clicked. The most popular type of pay per click ad is search engine advertisement.</p>",
    url: "/pay-per-click-ppc-management-services"
  }];
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "row",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-lg-3 pe-lg-0",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "marketingTabs",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
            children: tabsData.map((val, id) => {
              return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
                onClick: () => {
                  setTabData({
                    title: val.title,
                    title2: val.title2,
                    image: val.image,
                    content: val.content,
                    url: val.url
                  });
                },
                children: [" ", val.title]
              }, id);
            })
          })
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "col-lg-9 ps-lg-0",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "rightTab",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "itemTabHome",
            id: "seo",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "col-lg-5",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "tabImg",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: tabDats.image,
                    alt: "SEO"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "col-lg-7 ps-lg-4",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                  className: "sub_heading2 fontWeight700",
                  children: tabDats.title
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  className: "small_heading fontWeight500 mt-2",
                  dangerouslySetInnerHTML: {
                    __html: tabDats.title2
                  }
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  dangerouslySetInnerHTML: {
                    __html: tabDats.content
                  }
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: tabDats.url,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                    className: "btnLink",
                    children: ["Learn More ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                      className: "bi bi-arrow-right"
                    })]
                  })
                })]
              })]
            })
          })
        })
      })]
    })
  });
}
// CONCATENATED MODULE: ./comps/Faqs.js



function Faqs() {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = Object(external_react_["useState"])(null);

  const handleItemClick = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [{
    question: "What are the different types of SEO Services we offer?",
    answer: "<div class='innerContentFaq'><h4 class='small_heading fontWeight700'>There are six primary types of SEO</h4><p class='mt-4'><strong>Technical SEO: </strong> This ensures that a search engine can crawl, explore and read your website with no issues. This requires setting up a robot.txt file, creating an XML sitemap, and fixing crawl issues. Website speed and mobile responsiveness are also key factors in technical SEO.</p></div><div class='innerContentFaq'><p><strong>On-Page SEO: </strong> It is mandatory to optimize every separate page as search engines rank individual pages. A well-structured page, titles, and heading tags optimized with targeted keywords, descriptive URLs aid good on-page optimization.</p></div><div class='innerContentFaq'><p><strong>Content SEO: </strong> While most people consider content optimization and On-Page SEO the same, there is a slight difference in its relevance as a ranking factor. Content on a website should be optimized to aid a visitor's journey to conversion.</p></div><div class='innerContentFaq'><p><strong>Off-Page SEO: </strong> It is mandatory to optimize every separate page as search engines rank individual pages. A well-structured page, titles, and heading tags optimized with targeted keywords, descriptive URLs aid good on-page optimization.</p></div><div class='innerContentFaq'><p><strong>Mobile SEO: </strong> As per research, 50% of Internet users make searches and surf websites on mobile devices. We are already familiar with the usefulness of search engine optimization for website ranking and Mobile SEO means search engine optimization with hassle-free surfing on mobile devices. For serving a better experience to its users, Google is already favoring mobile-friendly sites.</p></div><div className='class'><p><strong>E-Commerce SEO: </strong> The range or amount of traffic on your online store depends on the ranks on the Search Engine Results Page (SERPs). Hence, your approach is constantly to rank high as possible. You can get traffic from paid search but E-Commerce SEO is a cost-effective technique.</p></div>"
  }, {
    question: "What makes SIB Infotech a Top-Rated SEO Agency?",
    answer: "<p>SIB Infotech is a Top SEO Company in India offering unmatched SEO services at an economical cost. We are savvy in the art of Search Engine Optimisation (SEO) from years of practice and can meet your Internet Marketing and SEO objectives within time and with our cost-effective approaches. Our SEO Services in India is tailored to meet client needs. You can choose from several SEO Packages depending upon your requirements or contact us for a custom quote.</p>"
  }, {
    question: "Why SEO is important?",
    answer: "<div class='innerContentFaq'><p>The majority spend most of their time on SERPs searching for some of their inquires. They are most likely to click on one of the leading 5 suggestions on the search engine results page. Apart from this, there are numerous reasons every business needs to invest in SEO. We have discussed some reasons below:</p><p>SEO helps businesses connect with users actively seeking them. These users that visit your website through Google search results are the most valuable kind of website visitors since they have a high intent to purchase from you.</p><ol><li>SEO aids increase in the quantity of relevant traffic.</li><li>Organic SEO builds trust and credibility in your brand.</li><li>SEO Services are a lot less expensive than paid advertising.</li><li>SEO is low maintenance i.e. once you achieve organic ranking for your target keywords it's simple to manage them and pull in consistent traffic every month.</li><li>SEO Marketing, if done right, delivers a high ROI compared to all diverse forms of Digital Marketing.</li></ol></div>"
  }, {
    question: "Does Digital Marketing increase sales?",
    answer: "<div class='innerContetnFaq'><p>Yes, online sales can be doubled with the proper Digital Marketing programs. From the right Digital Marketing strategies, we mean Paid Advertising, Content Marketing, Branding, Website Optimization, and Local SEO.</p></div>"
  }, {
    question: "Can you help to recover Websites from Google Penalties?",
    answer: "<div class='innerContetnFaq'><p>Recovering from Google Penalties is a long and laborious process. However, we have acquired an approach to analyze and overcome the numerous penalties Google may commit to a website. We adopt the freshest information while retaining the brand messaging in the content.</p></div>"
  }];
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: faqData.map((faq, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "faq-item",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: `faq-question ${activeIndex === index ? 'active' : ''}`,
        onClick: () => handleItemClick(index),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
          children: faq.question
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "iconPlusHome",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            className: "fa fa-plus"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            className: "fa fa-minus"
          })]
        })]
      }), activeIndex === index && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "contentFaq",
        dangerouslySetInnerHTML: {
          __html: faq.answer
        }
      })]
    }, index))
  });
}
// CONCATENATED MODULE: ./comps/SliderTestimonials.js



function SliderTestimonials_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SliderTestimonials_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SliderTestimonials_ownKeys(Object(source), true).forEach(function (key) { SliderTestimonials_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SliderTestimonials_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SliderTestimonials_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function SliderTestimonials() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_slick_default.a, SliderTestimonials_objectSpread(SliderTestimonials_objectSpread({
      className: "testimonialSlider"
    }, settings), {}, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemTestimonial",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "inneritemTestimonial positive-relative shadow",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "testimonialItemHeader",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              className: "meduim_heading fontWeight700",
              children: "Platform Development for Ed-Tech Marketplace"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "The platform has just launched. but some of the company's old clients have already expressed their positive feedback on the new website. The company appreciates how the SIB Infotech team showed they cared for the project through their open and honest communication especially when suggesting ideas."
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "testimonialFooter",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "d-flex flex-wrap justify-content-between",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "usertestimonial d-flex justify-content-between align-items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "userIcon me-3",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: "assets/images/icons/user.png",
                    alt: "User Icon"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "nameUser",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                    className: "title fontWeight500",
                    children: "Timothy Scafaria"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    children: "Founder, remoteUprep, LLC"
                  })]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "reviewSource mt-2",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  className: "fontWeight500 text_red text-lg-end text-uppercase",
                  children: "Reviewed From"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: "assets/images/clutch-logo.png",
                  alt: "Clutch Logo"
                })]
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "qouteIcon",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "assets/images/icons/left-quote.png",
              alt: "Quote Icon"
            })
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemTestimonial",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "inneritemTestimonial positive-relative shadow",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "testimonialItemHeader",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              className: "meduim_heading fontWeight700",
              children: "Website Development Agency Services Mumbai"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "SIB Infotech is well managed company who treats each employee very politely. Its great being part of it. Never makes anybody feel burdened and provides friendly atmosphere. Highly professional company to work in. It is one of the best website development company. It is pleasure to work and write content for them."
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "testimonialFooter",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "d-flex flex-wrap justify-content-between",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "usertestimonial d-flex justify-content-between align-items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "userIcon me-3",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: "assets/images/icons/user.png",
                    alt: "User Icon"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "nameUser",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                    className: "title fontWeight500",
                    children: "Chetna Goel"
                  })
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "reviewSource mt-2",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  className: "fontWeight500 text_red text-lg-end text-uppercase",
                  children: "Reviewed From"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: "assets/images/google-logo.png",
                  alt: "Google Logo"
                })]
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "qouteIcon",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "assets/images/icons/left-quote.png",
              alt: "Quote"
            })
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemTestimonial",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "inneritemTestimonial positive-relative shadow",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "testimonialItemHeader",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              className: "meduim_heading fontWeight700",
              children: "Website Development for Media & Consulting Company"
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "The client loved the platform that the SIB Infotech team developed for them, especially the calculator function that was included. The company appreciated the team's high level of professionalism, communication, and care on the project. They are happy and willing to work with the team again."
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "testimonialFooter",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "d-flex flex-wrap justify-content-between",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "usertestimonial d-flex justify-content-between align-items-center",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "userIcon me-3",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: "assets/images/icons/user.png",
                    alt: "User Icon"
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "nameUser",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                    className: "title fontWeight500",
                    children: "Tima Elhajj"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    children: "CEO & Founder, Tima Media"
                  })]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "reviewSource mt-2",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  className: "fontWeight500 text_red text-lg-end text-uppercase",
                  children: "Reviewed From"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: "assets/images/clutch-logo.png",
                  alt: "Clutch Logo"
                })]
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "qouteIcon",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "assets/images/icons/left-quote.png",
              alt: "Quote"
            })
          })]
        })
      })]
    }))
  });
}
// EXTERNAL MODULE: ./comps/WorkWebdesign.js + 1 modules
var WorkWebdesign = __webpack_require__("aC+T");

// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__("tyWD");

// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__("K7k0");

// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__("NHP8");
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./pages/home.js

















const headers = {
  'Content-Type': 'multipart/form-data',
  'Authorization': constants["a" /* API_TOKEN */]
};
const getStaticProps = async () => {
  const res = await external_axios_default.a.get(`${constants["b" /* API_URL */]}blog/all?publish=1&limit=6`, {
    headers: headers
  }).catch(err => console.log(err));
  const data = await res.data;
  return {
    props: {
      blogs: data.blogs
    }
  };
};
function Home({
  blogs
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "Website Designing, Development & Digital Marketing SEO Company Agency in Mumbai India"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "keywords",
        content: "best website designing company in Mumbai, website designing in Mumbai, web designing company in Mumbai, re-website designing agency in Mumbai, web design Mumbai, website designing company in Mumbai, website designing services in Mumbai, Website Designing "
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: "SIB is Google Partner Agency & Top Company in Mumbai for Digital Marketing, Website Designing, Mobile App Development, SEO, Google AdWords PPC Management, Web Development, Custom CRM & ERP, E-Commerce Design, Website Redesign services & a complete web solution firm in Navi Mumbai, Thane, Pune, Delhi NCR, Noida, Gurgaon, India"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:title",
        content: "Best Website Designing Development & Digital Marketing SEO Company in Mumbai, Delhi, India"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:description",
        content: "SIB Infotech is a leading website designing and development and digital marketing company in Mumbai, Delhi, India offers complete end to end web solutions for designing development and digital marketing services that will help to improve user experience."
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:image",
        content: "https://www.sibinfotech.com/assets/images/logo.webp"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        property: "og:url",
        content: "https://www.sibinfotech.com"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "twitter:title",
        content: "Best Website Designing Development & Digital Marketing SEO Company in Mumbai, Delhi, India"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "twitter:description",
        content: "SIB Infotech is a leading website designing and development and digital marketing company in Mumbai, Delhi, India offers complete end to end web solutions for designing development and digital marketing services that will help to improve user experience."
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "twitter:image",
        content: "https://www.sibinfotech.com/assets/images/logo.webp"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "twitter:url",
        content: " https://www.sibinfotech.com"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "canonical",
        href: "https://www.sibinfotech.com/"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "bannerBlock",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("video", {
        loop: true,
        playsInline: true,
        autoPlay: true,
        muted: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("source", {
          src: "assets/images/banner/banner-video.mp4",
          type: "video/mp4"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "videoText",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "containerFull",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "row",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-lg-7",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "videoLeft",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
                  className: "large_heading fontWeight800 text-white",
                  children: "TOP RATED"
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h2", {
                  className: "heading fontWeight700 my-2",
                  children: ["WEB DESIGN AND ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    children: "DIGITAL MARKETING AGENCY"
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                  className: "sub_heading text-white",
                  children: "We Help you get"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "centerVideo",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(BannerTextSlider, {})
                })]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-lg-5 d-none d-md-block",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "bannerForm",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                  className: "small_heading  fontWeight700",
                  children: "Accelerate Your Business Growth"
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                  children: ["with ", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("strong", {
                    className: "fontWeight600 text_red",
                    children: ["Best ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      className: "textChange",
                      children: "Digital Marketing"
                    }), " Company in India"]
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BannerForm["a" /* default */], {})]
              })
            })]
          })
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "col-lg-5 d-block d-md-none",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "bannerForm",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
          className: "small_heading  fontWeight700",
          children: "Accelerate Your Business Growth"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
          children: ["with ", /*#__PURE__*/Object(jsx_runtime_["jsxs"])("strong", {
            className: "fontWeight600 text_red",
            children: ["Best ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "textChange",
              children: "Digital Marketing"
            }), " Company in India"]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BannerForm["a" /* default */], {})]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "bannerBottomLogo",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "containerFull",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row align-items-center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-lg-5",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "inlineClutch",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "itemReviews",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: "assets/images/best-website-deigning-ana-development-company-in-india.svg",
                  alt: "Best website desining and development company in India"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "itemReviews",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: "assets/images/best-design-comapnies-in-india.svg",
                  alt: "Best Designing Company in India"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "itemReviews",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: "assets/images/facebook-reviews.svg",
                  alt: "Facebook Reviews"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "itemReviews",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: "assets/images/search-engine-optimization-firm-in-delhi.svg",
                  alt: "Search engine optimization firm in delhi"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "itemReviews",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: "assets/images/top-advertising-and-marketing-company.png",
                  alt: "Top adverstising and marketing company"
                })
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-lg-7",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "tagLine",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
                className: "small_heading fontWeight500",
                children: ["An Award Winning ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  className: "text_red",
                  children: "Best Website Design & Digital Growth Agency"
                }), " in India that Designs, Develops & Delivers"]
              })
            })
          })]
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      className: "counter",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "containerFull",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-lg-7 pe-lg-4",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "drivenLeft",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                className: "title",
                children: "DIGITAL MARKETING & WEB AGENCY MUMBAI, DELHI"
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
                className: "sub_heading fontWeight700 mt-3",
                children: ["We are as ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  className: "titleHighlight",
                  children: "STRONG"
                }), " as YOU ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "Make us"]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: "mt-3 title",
                children: "Among Best Website Designing, Web Development & Digital marketing Company in India Since 2005"
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "row mt-4",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-lg-3 col-6 px-2",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "itemCounter shadow",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                      className: "fontNumber",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                        className: "counter-value",
                        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_countup_default.a, {
                          end: 18
                        }), "+"]
                      })
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                      className: "title fontWeight500 mt-2",
                      children: "Years in Business"
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-lg-3 col-6 px-2",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "itemCounter shadow",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
                      className: "fontNumber",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "counter-value",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_countup_default.a, {
                          end: 1350
                        })
                      }), "+"]
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                      className: "title fontWeight500 mt-2",
                      children: "Projects delivered"
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-lg-3 col-6 px-2",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "itemCounter shadow",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
                      className: "fontNumber",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "counter-value",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_countup_default.a, {
                          end: 750
                        })
                      }), "+"]
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                      className: "title fontWeight500 mt-2",
                      children: "Active clients/users"
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "col-lg-3 col-6 px-2",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                    className: "itemCounter shadow",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
                      className: "fontNumber",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                        className: "counter-value",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_countup_default.a, {
                          end: 30
                        })
                      }), "+"]
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                      className: "title fontWeight500 mt-2",
                      children: "Team Members"
                    })]
                  })
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                    href: "/digital-marketing-services",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      children: "Digital Marketing"
                    })
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                    href: "/pay-per-click-ppc-management-services",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      children: "PPC Management"
                    })
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                    href: "/search-engine-optimization-seo-services",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      children: "Search Engine Optimization"
                    })
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                    href: "/social-media-marketing-services",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      children: "Social Media Marketing"
                    })
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                    href: "/social-media-optimization-services",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      children: "Social Media Optimization"
                    })
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                    href: "/influencer-marketing-services",
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                      children: "Influencer Marketing"
                    })
                  })
                })]
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-lg-5",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "rightServices",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                className: "sub_heading text-center fontWeight700",
                children: "Website design and development getting real results"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: "title mt-4 text-center",
                children: "If you\u2019re serious about business and want to see real returns from your website and digital marketing initiatives, talk to us. All digital marketing is 100% measurable, we know we get results."
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      className: "bgGrey overflowHidden position-relative",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(WorkWebdesign["a" /* default */], {})
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "containerFull",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "col-lg-10 offset-lg-1",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              className: "heading text-center fontWeight700",
              children: "Areas of Expertise"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h5", {
              className: "small_heading mt-3 text-center fontWeight500",
              children: ["#1 Affordable ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "text_red",
                children: "Digital Marketing Agency In India"
              }), " - An Extended Team"]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "text-center mt-3",
              children: "SIB Infotech is a professionally managed full service web design & development company in mumbai, india. Since 2005 we have been helping business in India, UK, Canada, Australia and world over to adapt and grow in an ever changing inline world by offering fully functional mobile friendly responsive, cheap Website Designing, Web Development"
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "space"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "servicesWeb",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "inlineService",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "itemServiceLine",
              "data-background": "url(assets/images/bg/web-design.jpg)",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                className: "meduim_heading",
                children: "Website Designing"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "serviceText",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  children: "Your website is your home on the internet (web). The Website Design is the first and the foremost area which must be concentrated as it is the virtual face of a company."
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/website-designing-services",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "linkService",
                  children: "Read More"
                })
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "itemServiceLine",
              "data-background": "url(assets/images/bg/seo.jpg)",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                className: "meduim_heading",
                children: "Search Engine Optimization"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "serviceText",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  children: "Search Engine Optimization is the most efficient and effective method increase your search engine visibility and drive traffic to your website. With our SEO services in India ."
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/search-engine-optimization-seo-services",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "linkService",
                  children: "Read More"
                })
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "itemServiceLine",
              "data-background": "url(assets/images/bg/offshore.jpg)",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                className: "meduim_heading",
                children: "Offshore Outsourcing"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "serviceText",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  children: "Sit back relax! Hire top notch thinkers, web developers, web designers, and search engineers and quickly scale your delivery capacity. We are a global offshore outsourcing..."
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/search-engine-optimization-outsourcing-seo-services",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "linkService",
                  children: "Read More"
                })
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "itemServiceLine borderTop",
              "data-background": "url(assets/images/bg/web-development.jpg)",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                className: "meduim_heading",
                children: "Website Development"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "serviceText",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  children: "We offer customized web development services using latest frameworks and platforms to build bespoke web applications for websites or Mobile Apps, E-commerce Portals, API links and much more"
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/website-development-services",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "linkService",
                  children: "Read More"
                })
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "itemServiceLine borderTop",
              "data-background": "url(assets/images/bg/mobile-app.jpg)",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                className: "meduim_heading",
                children: "Mobile App Development"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "serviceText",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  children: "In a quest for staying ahead of the technology it is a necessity for any business looking to leverage the power of smartphones to develop mobile apps. Being an experienced..."
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/mobile-application-development-services",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "linkService",
                  children: "Read More"
                })
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "itemServiceLine borderTop",
              "data-background": "url(assets/images/bg/software-development.jpg)",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                className: "meduim_heading",
                children: "Software Development"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "serviceText",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                  children: "We build custom software solutions that will help your business optimise operations, unlock a new level of efficiency and transform your ideas into an innovative service or anengaging..."
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/software-development-services",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "linkService",
                  children: "Read More"
                })
              })]
            })]
          })
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      className: "contentTab",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "containerFull",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row align-items-center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-lg-9",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "titleLeft",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h5", {
                className: "heading fontWeight700",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  className: "titleHighlight",
                  children: "Digital Marketing"
                }), " Services"]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: "mt-4",
                children: "We understand that no two businesses can be the same and so is there website usage and therefore they will need a different CMS solution. We do Your business in your way."
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-lg-3 text-end",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "buttonRight",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                href: "/contact-us",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: "btnThemeRed",
                  children: "Get a Quote"
                })
              })
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "space"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DigitalMarketingTab, {})]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      className: "bg1",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "containerFull",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "aboutCenter",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
            className: "heading fontHeading fontWeight600 text-center",
            children: "About Us"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
            className: "bgTitle",
            children: "ABOUT Us"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "space"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-lg-6",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "aboutLeftHome",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                className: "sub_heading fontWeight600 text_light_blue",
                children: "What We Do Is"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: "mt-3",
                children: "SIB Infotech is a professionally managed full service web design & development company in mumbai, india. Since 2005 we have been helping business in India, UK, Canada, Australia and worldwide."
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "leftAboutHomeItem mt-lg-4 mt-3",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "iconLeft",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    className: "default",
                    src: "assets/images/icons/seo.png",
                    alt: "icon"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    className: "blue",
                    src: "assets/images/icons/seo-blue.png",
                    alt: "icon"
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "iconRightAbout",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                    className: "small_heading fontWeight600",
                    children: "Digital Marketing Services"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "mt-2",
                    children: "We build custom software solutions that will help your business optimise operations,"
                  })]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "leftAboutHomeItem mt-3",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "iconLeft",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    className: "default",
                    src: "assets/images/icons/web-programming.png",
                    alt: "icon"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    className: "blue",
                    src: "assets/images/icons/web-programming-blue.png",
                    alt: "icon"
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "iconRightAbout",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                    className: "small_heading fontWeight600",
                    children: "Web Designing Services"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "mt-2",
                    children: "We build custom software solutions that will help your business optimise operations,"
                  })]
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: "leftAboutHomeItem mt-3",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "iconLeft",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    className: "default",
                    src: "assets/images/icons/coding.png",
                    alt: "icon"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    className: "blue",
                    src: "assets/images/icons/coding-blue.png",
                    alt: "icon"
                  })]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "iconRightAbout",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                    className: "small_heading fontWeight600",
                    children: "Web Development Services"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "mt-2",
                    children: "We build custom software solutions that will help your business optimise operations,"
                  })]
                })]
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-lg-6",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "aboutHomeRight",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("picture", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("source", {
                  srcSet: "assets/images/about2.webp",
                  type: "image/webp"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: "assets/images/about2.png",
                  alt: "SIB Infotech about us"
                })]
              })
            })
          })]
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
      className: "marBlock overflowHidden",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "marqBlock",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h2", {
          className: "large_heading maqrquee fw-bold text-uppercase",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "stroke",
            children: "DIGITAL MARKETING"
          }), " & WEB AGENCY"]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h2", {
          className: "large_heading mt-4 maqrqueeReverse fw-bold text-uppercase",
          children: ["DIGITAL MARKETING & ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "stroke",
            children: "WEB AGENCY"
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "containerFull",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "technicalExpertise",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "itemTechnicalExpertise",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "assets/images/php.png",
              alt: "PHP"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              className: "small_heading",
              children: "PHP"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "itemTechnicalExpertise",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "assets/images/wordpress-logo.png",
              alt: "WordPress"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              className: "small_heading",
              children: "WordPress"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "itemTechnicalExpertise",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "assets/images/asp.png",
              alt: "ASP.net"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              className: "small_heading",
              children: "ASP .net"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "itemTechnicalExpertise",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "assets/images/mysql.png",
              alt: "MySQL"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              className: "small_heading",
              children: "MySQL"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "itemTechnicalExpertise",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "assets/images/html-5.png",
              alt: "HTML"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              className: "small_heading",
              children: "HTML"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "itemTechnicalExpertise",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "assets/images/drupal.png",
              alt: "Drupal"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              className: "small_heading",
              children: "Drupal"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "itemTechnicalExpertise",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "assets/images/js.png",
              alt: "JavaScript"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              className: "small_heading",
              children: "JavaScript"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "itemTechnicalExpertise",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "assets/images/ci.png",
              alt: "Codeigniter"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              className: "small_heading",
              children: "Codeigniter"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "itemTechnicalExpertise",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "assets/images/laravel.png",
              alt: "Laravel"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              className: "small_heading",
              children: "Laravel"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "itemTechnicalExpertise",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "assets/images/magento.png",
              alt: "Magento"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              className: "small_heading",
              children: "Magento"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "itemTechnicalExpertise",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "assets/images/angular.png",
              alt: "Angular"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              className: "small_heading",
              children: "Angular"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "itemTechnicalExpertise",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "assets/images/css-3.png",
              alt: "CSS"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              className: "small_heading",
              children: "CSS"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "itemTechnicalExpertise",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "assets/images/photoshop.png",
              alt: "Photoshop"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              className: "small_heading",
              children: "Photoshop"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "itemTechnicalExpertise",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "assets/images/illustrator.png",
              alt: "Illustrator"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              className: "small_heading",
              children: "Illustrator"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "itemTechnicalExpertise",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "assets/images/figma.png",
              alt: "Figma"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              className: "small_heading",
              children: "Figma"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "itemTechnicalExpertise",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: "assets/images/bootstrap.png",
              alt: "Bootstrap"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
              className: "small_heading",
              children: "Bootstrap"
            })]
          })]
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      className: "lightBg dots curve1",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "containerFull",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-lg-10 offset-lg-1",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
              className: "heading text-center fontWeight700",
              children: ["#1 Affordable ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: "text_light_blue fontWeight900",
                children: "Digital Marketing Agency in India"
              }), " - An Extended Team"]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "space"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "freeText",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "title",
            children: "We are a young creative web development and digital marketing agency for any business - anywhere to promote their business online and engage users with brands and convert them to customers and experience an overall improvement in client base."
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "title",
            children: "In comparison to other SEO companies in India, we are not only an affordable SEO Agency, we are a results-focused and driven company, So if you're looking for a great looking website and a team that can follow through by delivering top rankings and brining in tremendous traffic to your website, you've found the right organization."
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "title",
            children: "We help you drive your digital strategies & meet your business objectives in the way you want to promote your website on web with our creative and innovative ideas. We ensure that our affordable seo packages help your website attains top rankings in various search engines like Google, Yahoo, Bing, Baidu, etc. by strictly following only white hat SEO techniques to generate the right website traffic and results by increasing your ROI."
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
            className: "title",
            children: ["We are an ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("strong", {
              children: "ISO 9001:2015"
            }), " certified company with professional team of 35+ seasoned experts operating from Mumbai & New Delhi with 750+ satisfied clients in our portfolio."]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: "title",
            children: "If your business deserves no less, call on SIB Infotech The Best Website Designing, Development & SEO Agency in Mumbai for all your internet marketing & website development needs."
          })]
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      className: "bgGrey",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "containerFull",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-lg-8",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "col-lg-6 translate50",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "#",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "webDesignItem",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: "iconWe",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          src: "assets/images/icons/web-design.png",
                          alt: "Web Design"
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                        className: "small_heading fontWeight700",
                        children: "Website Designing"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                        children: "Your website is your home on the internet (web). The Website Design is the first..."
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                          className: "fa fa-chevron-right"
                        })
                      })]
                    })
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "col-lg-6",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "#",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "webDesignItem",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: "iconWe",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          src: "assets/images/icons/settings.png",
                          alt: "Setting Icon"
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                        className: "small_heading fontWeight700",
                        children: "Custom Website Designing"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                        children: "Using this one can start from just one simple page with an Email link, building..."
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                          className: "fa fa-chevron-right"
                        })
                      })]
                    })
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "col-lg-6 translate50",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "#",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "webDesignItem",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: "iconWe",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          src: "assets/images/icons/responsive-website.png",
                          alt: "responsive Website Icon"
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                        className: "small_heading fontWeight700",
                        children: "Responsive Website Designing"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                        children: "Our web design uses the latest technology to look great on any screen sizes..."
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                          className: "fa fa-chevron-right"
                        })
                      })]
                    })
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "col-lg-6",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "#",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                      className: "webDesignItem",
                      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                        className: "iconWe",
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                          src: "assets/images/icons/ecommerce-website.png",
                          alt: "E-commerce Icon"
                        })
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                        className: "small_heading fontWeight700",
                        children: "E-commerce Website"
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                        children: "We develop affordable e-commerce website design for businesses in India, UK, USA, Australia .."
                      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                          className: "fa fa-chevron-right"
                        })
                      })]
                    })
                  })
                })
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-lg-4 ps-lg-4",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "rightServicesWeb",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("picture", {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("source", {
                  srcSet: "assets/images/programming-amico.webp",
                  type: "image/webp"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: "assets/images/programming-amico.png",
                  className: "img-fluid",
                  alt: "Writng Programme"
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
                className: "small_head text_red mt-4",
                children: "We're offering"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                className: "regular_heading fontWeight700 mt-2",
                children: "Website Design Services"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: "mt-3",
                children: "We use latest technology and design innovations to develop creative, smart & user friendly websites to successfully connect users with brands. Empower yourself with the best website design company in India."
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      className: "bgTestimonial",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "containerFull",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "testimonialHeader",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
            className: "small_heading text-center text_red fontWeight700",
            children: "DIGITAL MARKETING TESTIMONIALS"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
            className: "heading text-center mt-2 fontWeight700",
            children: "Clients say about our SEO Services"
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SliderTestimonials, {})]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      className: "bgAction",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "containerFull",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "d-flex align-items-center justify-content-between home_cta",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
            className: "sub_heading letterSpacing1 text-white fontWeight700",
            children: ["Want to know how you can grow your business,", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "speak to our expert strategists now."]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "tel: +91-9222260000",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
              className: "btnAction",
              children: ["Let's Talk Growth ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                className: "bi bi-arrow-right"
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      className: "dots",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "containerFull",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-lg-5",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "leftFAQ",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
                className: "heading fontWeight700",
                children: ["Frequently Asked ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  className: "text_red",
                  children: "Questions"
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: "mt-2 fontWeight700",
                children: "Our in-house team of recruitment specialists will nurture your leads all the way through to completed application. "
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                className: "mt-3 fontWeight700",
                children: "We as a full service leading digital marketing firm, offers customized story-based digital marketing services to build, promote & scale your brand so it can clearly & easily attract your ideal clients."
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
                className: "small_heading fontWeight700 mt-4",
                children: "We're ready to help you"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "tel: +91-9222260000",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                    className: "btnTheme mt-4",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                      className: "fa fa-phone"
                    }), "  +91-9222260000"]
                  })
                })
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "col-lg-7",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "faqRight ps-lg-4",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Faqs, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "text-end",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "#",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                    className: "link mt-2",
                    children: ["See All ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                      className: "fa fa-caret-right"
                    })]
                  })
                })
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "containerFull",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
          className: "heading text-center mb-3 fontWeight700",
          children: "From Our Blogs"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "row mt-lg-3",
          children: blogs && blogs.map((blog, index) => {
            if (index % 2 === 0) {
              return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "col-lg-4",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(comps_BlogCard, {
                  blog: blog
                })
              }, blog.id);
            }

            return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "col-lg-4",
              id: "requestQuote",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(comps_BlogCard, {
                blog: blog
              })
            }, blog.id);
          })
        })]
      })
    })]
  });
}

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "K7k0":
/***/ (function(module, exports) {



/***/ }),

/***/ "N6Fi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__("zOyy"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "NHP8":
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "P7gm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__("N6Fi"));

var _prepareDestination = _interopRequireDefault(__webpack_require__("6mnf"));

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _normalizeLocalePath = __webpack_require__("3wub");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, rewrites, query, resolveHref, locales) {
  if (!pages.includes((0, _normalizeLocalePath.normalizeLocalePath)(asPath, locales).pathname)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        const fsPathname = (0, _normalizeLocalePath.normalizeLocalePath)((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath), locales).pathname;

        if (pages.includes(fsPathname)) {
          asPath = fsPathname; // check if we now match a page as this means we are done
          // resolving the rewrites

          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(fsPathname);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          asPath = fsPathname;
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "aC+T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ WorkWebdesign; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// CONCATENATED MODULE: ./comps/LogoSlider.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function LogoSlider() {
  var sliderSettings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    pauseOnHover: false,
    cssEase: 'linear',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    }]
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_slick_default.a, _objectSpread(_objectSpread({
      className: "logoSlider"
    }, sliderSettings), {}, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemSlider shadow",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "assets/images/clients/3solutions.svg",
          alt: "3solutions"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemSlider shadow",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "assets/images/clients/amisuzi.svg",
          alt: "Amisuzi"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemSlider shadow",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "assets/images/clients/axis-y.svg",
          alt: "Axis Y"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemSlider shadow",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "assets/images/clients/clients-anybody-can-help-website.svg",
          alt: "Anybody can help"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemSlider shadow",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "assets/images/clients/clients-athena-website.svg",
          alt: "Athena"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemSlider shadow",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "assets/images/clients/clients-bharat-petroleum-website.svg",
          alt: "Bharat Petroleum"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemSlider shadow",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "assets/images/clients/clients-elder-website.svg",
          alt: "Elder"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemSlider shadow",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "assets/images/clients/clients-finolex-website.svg",
          alt: "Finolex"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemSlider shadow",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "assets/images/clients/clients-hindustan-petroleum-website.svg",
          alt: "Hindustan Petroleum"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemSlider shadow",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "assets/images/clients/clients-hindustan-times-website.svg",
          alt: "Hindustan Times"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemSlider shadow",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "assets/images/clients/clients-infertility-search-website.svg",
          alt: "Infertility Search"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemSlider shadow",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "assets/images/clients/clients-mangorange-productions-website.svg",
          alt: "Mangorange Productions"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemSlider shadow",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "assets/images/clients/clients-msg-website.svg",
          alt: "MSG"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemSlider shadow",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "assets/images/clients/clients-narain-website-logo.svg",
          alt: "Narain"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemSlider shadow",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "assets/images/clients/clients-nets-n-screens-website.svg",
          alt: "Nets-n-screen"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemSlider shadow",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "assets/images/clients/clients-nsa-architects-website.svg",
          alt: "NSA Architects"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemSlider shadow",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "assets/images/clients/clients-pravaasah-holiday-website.svg",
          alt: "Pravash Holiday"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemSlider shadow",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "assets/images/clients/clients-red-cart-films-website.png",
          alt: "Red Cart Films"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemSlider shadow",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "assets/images/clients/clients-tripplanners-world-website.svg",
          alt: "Tripplanners"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemSlider shadow",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "assets/images/clients/competekaro.svg",
          alt: "Competekaro"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "itemSlider shadow",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: "assets/images/clients/dudley.svg",
          alt: "Dudley"
        })
      })]
    }))
  });
}
// CONCATENATED MODULE: ./comps/WorkWebdesign.js



function WorkWebdesign_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function WorkWebdesign_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { WorkWebdesign_ownKeys(Object(source), true).forEach(function (key) { WorkWebdesign_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { WorkWebdesign_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function WorkWebdesign_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function WorkWebdesign() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "circleIcon",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: "assets/images/icons/circle.svg",
        alt: "Circle Icon"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "containerFull",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h3", {
        className: "text-center centerTitle heading fontHeading fontWeight600",
        children: ["Made by ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: "SIB Infotech"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "space"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "portfolioHome",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          className: "sub_heading fontWeight600",
          children: "Our Portfolio"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "title mt-2",
          children: "Website Design you'll want to tell all your friends about"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_slick_default.a, WorkWebdesign_objectSpread(WorkWebdesign_objectSpread({
        className: "workSlider"
      }, settings), {}, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "innerSlider",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "itemSliderWork",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "col-lg-6",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "imgWork",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: "assets/images/works/omee.png",
                    alt: "OMEE - Alkem Generic"
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "col-lg-6",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "workHomeRight",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                    className: "text_dark_blue fontWeight700",
                    children: "OMEE - Alkem Generic"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "mt-3",
                    children: "Omee is India\u2019s favourite antacid and an iconic brand by Alkem Generic. The unique formulation of Omee dissolves quickly and neutralizes stomach acid to provide effective relief from acidity and gas."
                  })]
                })
              })]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "innerSlider",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "itemSliderWork",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "col-lg-6",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "imgWork",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("picture", {
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("source", {
                      srcSet: "assets/images/works/roswalt.webp",
                      type: "image/webp"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      src: "assets/images/works/roswalt.png",
                      alt: "Roswalt - Roswalt Realty: Residential commercial Projects Mumbai"
                    })]
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "col-lg-6",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "workHomeRight",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                    className: "meduim_heading text_dark_blue fontWeight700",
                    children: "Roswalt Realty"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "mt-3",
                    children: "Roswalt realty believes in creating spaces that are an extension of one\u2019s self and this philosophy is infused in every project undertaken by us. The company boasts of a proud lineage and finds its roots in the prestigious red brick group known for providing..."
                  })]
                })
              })]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "innerSlider",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "itemSliderWork",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "col-lg-6",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "imgWork",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("picture", {
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("source", {
                      srcSet: "assets/images/works/netsys.webp",
                      type: "image/webp"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      src: "assets/images/works/netsys.png",
                      alt: "Online Netsys"
                    })]
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "col-lg-6",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "workHomeRight",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                    className: "meduim_heading text_dark_blue fontWeight700",
                    children: "Online Netsys"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "mt-3",
                    children: "OnLine Netsys is inspired by the objective of empowering enterprises with leading global IT Infrastructure, Networking and AV Technology."
                  })]
                })
              })]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "innerSlider",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "itemSliderWork",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "col-lg-6",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "imgWork",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("picture", {
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("source", {
                      srcSet: "assets/images/works/shaurya.webp",
                      type: "image/webp"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      src: "assets/images/works/shaurya.png",
                      alt: "Shaurya Dedhia"
                    })]
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "col-lg-6",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "workHomeRight",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                    className: "meduim_heading text_dark_blue fontWeight700",
                    children: "Shaurya Dedhia"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "mt-3",
                    children: "Shaurya Dedhia - The studio practices architecture, interior and product designing, specializing in bespoke, end-to-end design solutions."
                  })]
                })
              })]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "innerSlider",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "itemSliderWork",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: "row",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "col-lg-6",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                  className: "imgWork",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("picture", {
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("source", {
                      srcSet: "assets/images/works/alarm-avenue.webp",
                      type: "image/webp"
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      src: "assets/images/works/alarm-avenue.png",
                      alt: "Alar Avenue"
                    })]
                  })
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: "col-lg-6",
                children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                  className: "workHomeRight",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                    className: "meduim_heading text_dark_blue fontWeight700",
                    children: "Alarm Avenue"
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                    className: "mt-3",
                    children: "Alarm Avenue is a team of highly trained Technicians and Installers. We are specialized in Commercial & Home Security. We are fully licensed, insured, and covered by WorkSafe BC."
                  })]
                })
              })]
            })
          })
        })]
      })), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "bottomTextSlider",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h4", {
          className: "small_heading fontWeight600",
          children: ["Some of the ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "text_red",
            children: "Best Companies in India"
          }), " & Worldover, We\u2019re working with"]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "logoMarqueeHome",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LogoSlider, {})
      })]
    })]
  });
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("P7gm"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)(addBasePath(addLocale(delBasePath((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname), this.locale)), pages, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname, this.locales);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: (0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(resolvedAs) ? delBasePath(resolvedAs) : resolvedAs, this.locales).pathname
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "rxnA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BACKEND_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_TOKEN; });
/* unused harmony export BASE_URL */
const BACKEND_URL = 'https://www.sibinfotech.com/live-node-api/';
const API_URL = 'https://www.sibinfotech.com/live-node-api/api/';
const API_TOKEN = 'FgRCHG4OVv8Z1BcrjExKJcqspvTsUTCe'; // export const BASE_URL = 'https://www.sibinfotech.com/';

const BASE_URL = 'https://www.sibinfotech.com/';

/***/ }),

/***/ "sTxE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerForm; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("rxnA");
/* harmony import */ var _functions_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("9uY5");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import { toast } from 'react-toastify';



function BannerForm() {
  const headers = {
    'Content-Type': 'multipart/form-data',
    'Authorization': _constants_constants__WEBPACK_IMPORTED_MODULE_4__[/* API_TOKEN */ "a"]
  };
  const {
    0: code,
    1: setCode
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: inputs,
    1: setInputs
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: "",
    cname: "",
    email: "",
    phone: "",
    details: "",
    service: "",
    website: "",
    cpatchaText: ""
  });

  const handleInputChange = e => {
    setInputs(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      [e.target.name]: e.target.value
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
    const res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${_constants_constants__WEBPACK_IMPORTED_MODULE_4__[/* API_URL */ "b"]}home/submit_banner_enquiry`, formData, {
      headers: headers
    }).catch(err => console.log(err));
    const data = await res.data;
    return data;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (code == inputs.cpatchaText) {
      submitEnquiry().then(data => {
        if (!data.error) {
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
        } else {// toast.error(data.message);
        }
      });
    } else {
      alert("Invalid Captcha. try Again");
      createCaptcha();
    }
  };

  const createCaptcha = e => {
    let returnCode = _functions_functions__WEBPACK_IMPORTED_MODULE_5__[/* createCaptcha */ "a"]();
    setCode(returnCode);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    createCaptcha();
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("form", {
      onSubmit: handleSubmit,
      method: "post",
      action: "#",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "bannerFormItem",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "col-lg-6 pe-lg-1",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
              type: "text",
              name: "name",
              onChange: handleInputChange,
              value: inputs.name,
              placeholder: "Name*",
              required: true
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "col-lg-6",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
              type: "text",
              name: "cname",
              onChange: handleInputChange,
              value: inputs.cname,
              placeholder: "Company Name"
            })
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "bannerFormItem",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "col-lg-6 pe-lg-1",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
              type: "text",
              name: "website",
              onChange: handleInputChange,
              value: inputs.website,
              placeholder: "Website URL"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "col-lg-6",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
              type: "email",
              name: "email",
              onChange: handleInputChange,
              value: inputs.email,
              placeholder: "E-mail Address*",
              required: true
            })
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "bannerFormItem",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "row",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "col-lg-6 pe-lg-1",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
              type: "tel",
              name: "phone",
              onChange: handleInputChange,
              value: inputs.phone,
              placeholder: "Phone Number*",
              required: true
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "col-lg-6",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("select", {
              name: "service",
              onChange: handleInputChange,
              value: inputs.service,
              required: true,
              children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
                value: "Website Design",
                children: "Website Design"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
                value: "Website Development",
                children: "Website Development"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
                value: "Digital Marketing",
                children: "Digital Marketing"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
                value: "PPC",
                children: "PPC"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
                value: "SEO",
                children: "SEO"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
                value: "SMO",
                children: "SMO"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
                value: "Software Development",
                children: "Software Development"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
                value: "Graphic Design",
                children: "Graphic Design"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
                value: "Mobile App Development",
                children: "Mobile App Development"
              }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
                value: "Offshore Outsourcing",
                children: "Offshore Outsourcing"
              })]
            })
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "bannerFormItem",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
          className: "row",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "col-lg-12",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("textarea", {
              placeholder: "Message",
              name: "details",
              onChange: handleInputChange,
              value: inputs.details
            })
          })
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "bannerFormItem mt-0 d-lg-block d-none",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: "row align-items-center",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "col-3",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              className: "captcha",
              id: "captcha"
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "col-1",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              id: "refresh_captcha",
              onClick: createCaptcha,
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("i", {
                className: "bi bi-arrow-clockwise"
              })
            })
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "col-8",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("input", {
              type: "text",
              className: "capIn",
              placeholder: "Type the text",
              name: "cpatchaText",
              id: "cpatchaTextBox",
              onChange: handleInputChange,
              value: inputs.cpatchaText,
              required: true
            })
          })]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        className: "bannerFormItem mt-2",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("button", {
          name: "submit",
          type: "submit",
          className: "btnTheme w-100 fontWeight700 rounded",
          children: "Get in Touch"
        })
      })]
    })
  });
}

/***/ }),

/***/ "tyWD":
/***/ (function(module, exports) {



/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zOyy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });