/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var PigLatin = __webpack_require__(1);
	var Cat = __webpack_require__(2);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {

	    var _getVowels = function _getVowels() {
	        return ['a', 'e', 'i', 'o', 'u', 'y'];
	    };

	    var pigLatinizer = function pigLatinizer() {
	        var sentence = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	        return sentence.toLowerCase().split(' ').map(function (w) {
	            return (_getVowels().indexOf(w.split('')[0]) > -1 || _getVowels().indexOf(w.split('')[1]) > -1 ? w.slice(1) + w.slice(0, 1) : w.slice(2) + w.slice(0, 2)) + 'ay';
	        }).join(' ');
	    };

	    return {
	        pigLatinizer: pigLatinizer
	    };
	}();

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function () {
	  var get = function get() {
	    var ascii_kitteh = "\n            \n                      ,.                 .,\n                     ,: ':.    .,.    .:' :,\n                     ,',   '.:'   ':.'   ,',\n                     : '.  '         '  .' :\n                     ', : '           ' : ,'\n                     '.' .,:,.   .,:,. '.'\n                      ,:    V '. .' V    :,\n                     ,:        / '        :,\n                     ,:                   :,\n                      ,:       =:=       :,\n                       ,: ,     :     , :,\n                        :' ',.,' ',.,:' ':\n                       :'      ':WW::'   '.\n                      .:'       '::::'   ':\n                      ,:        '::::'    :,\n                      :'         ':::'    ':\n                     ,:           ':''     :.\n                    .:'             '.     ',.\n                   ,:'               ''     '.\n                   .:'               .',    ':\n                  .:'               .'.,     :\n                  .:                .,''     :\n                  ::                .,''    ,:\n                  ::              .,'','   .:'\n                .,::'.           .,','     ::::.\n              .:'     ',.       ,:,       ,WWWWW,\n              :'        :       :W:'     :WWWWWWW,          .,.\n              :         ',      WWW      WWWWWWWWW          '::,\n              '.         ',     WWW     :WWWWWWWWW            '::,\n               '.         :     WWW     :WWWWWWWW'             :::\n                '.       ,:     WWW     :WWWWWWW'             .:::\n                 '.     .W:     WWW     :WWWWWW'           .,:::'\n                  '.   :WW:     WWW     :WWWWW'      .,,:::::''\n                 .,'   ''::     :W:     :WWWWW.  .,::::''\n              ,'        ''','',',','','''WWWWW::::''\n               ':,,,,,,,':  :  : : :  :  :WWWW'''\n\n            ";

	    return ascii_kitteh;
	  };

	  return {
	    get: get
	  };
	}();

/***/ }
/******/ ]);