/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.get('/', (request, response) => {\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      return response.status(500).send('Unable to load index.html!');\n    }\n\n    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(`https://api.spacexdata.com/v3/launches?limit=10`).then(res => {\n      const app = react_dom_server__WEBPACK_IMPORTED_MODULE_6___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__[\"StaticRouter\"], {\n        location: request.url,\n        context: {}\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        initialData: res.data\n      })));\n      return response.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`));\n    }).catch(function (error) {\n      console.log(\"api error==\", error);\n      response.send('Data not Loaded');\n    });\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('./build'));\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ \"query-string\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _spaceXLaunch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spaceXLaunch */ \"./src/spaceXLaunch.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (props => {\n  const {\n    location,\n    location: {\n      search\n    } = {},\n    history,\n    initialData = []\n  } = props;\n  const [launchData, setLaunchData] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(initialData);\n\n  const applyFilter = (filterType, filterVal) => {\n    const query = query_string__WEBPACK_IMPORTED_MODULE_1___default.a.parse(location.search);\n    const modifiedQuery = { ...query,\n      [filterType]: filterVal\n    };\n    history.replace({\n      pathname: location.pathname,\n      search: query_string__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(modifiedQuery)\n    });\n  };\n\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {\n    const filters = query_string__WEBPACK_IMPORTED_MODULE_1___default.a.parse(location.search);\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`https://api.spacexdata.com/v3/launches?limit=100&${query_string__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(filters)}`).then(res => {\n      setLaunchData(res.data);\n    }).catch(function (error) {});\n  }, [location]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_spaceXLaunch__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    launchData: launchData,\n    applyFilter: applyFilter\n  });\n});\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/spaceXLaunch.js":
/*!*****************************!*\
  !*** ./src/spaceXLaunch.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst YEAR_FILTER = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];\n\nconst SpaceXLaunch = props => {\n  const {\n    applyFilter,\n    launchData\n  } = props;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"body\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \" SpaceX Launch Programs\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"py-5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Launch Year\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), YEAR_FILTER.map(val => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    onClick: () => {\n      applyFilter('launch_year', val);\n    },\n    className: \"filterColor col-md-6 col-xs-12 col-sm-12\"\n  }, val))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, \"Successful Launch\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    onClick: () => {\n      applyFilter('launch_success', true);\n    },\n    className: \"filterColor col-md-6 col-xs-12 col-sm-12\"\n  }, \"True\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    onClick: () => {\n      applyFilter('launch_success', false);\n    },\n    className: \"filterColor col-md-6 col-xs-12 col-sm-12\"\n  }, \"False\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, \"Successful Landing\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    onClick: () => {\n      applyFilter('land_success', true);\n    },\n    className: \"filterColor col-md-6 col-xs-12 col-sm-12\"\n  }, \"True\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    onClick: () => {\n      applyFilter('land_success', false);\n    },\n    className: \"filterColor col-md-6 col-xs-12 col-sm-12\"\n  }, \"False\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-md-10\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row hidden-md-up\"\n  }, launchData && launchData.length > 0 && launchData.map((dataObj, idx) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"paddingTop10 col-md-4 col-xs-12 col-sm-6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    height: \"200\",\n    className: \"card-img-top\",\n    src: dataObj.links.mission_patch,\n    alt: \"Card image\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-block\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n    className: \"card-title\"\n  }, dataObj.mission_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"card-text p-y-1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"Mission Ids : \"), dataObj.mission_id.join(\",\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"card-text p-y-1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"Launch Year : \"), dataObj.launch_year), dataObj.launch_success && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"card-text p-y-1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"Successful Launch : \"), dataObj.launch_success.toString()))))))))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpaceXLaunch);\n\n//# sourceURL=webpack:///./src/spaceXLaunch.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"query-string\");\n\n//# sourceURL=webpack:///external_%22query-string%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ })

/******/ });