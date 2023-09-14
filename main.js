/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/aside.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/aside.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Lato-Regular.ttf */ "./src/fonts/Lato-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Poppins-Regular.ttf */ "./src/fonts/Poppins-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Lato";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Poppins";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
  font-weight: normal;
  font-style: normal;
}
/* --- CSS Reset --- */
*, *::before, *::after {
  box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}

/* --- Custom CSS --- */
body {
  font-family: "Poppins", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  min-height: 100vh;
}
body #content {
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: 100px 1fr;
}

body #content aside {
  height: 100vh;
  background-color: #37363e;
  border-right: 1px solid #474747;
  grid-row: 1/3;
  display: grid;
  grid-template-rows: 1.5fr 1fr;
  justify-content: center;
}
body #content aside div:first-child .title {
  color: #f0f0f0;
  font-weight: bold;
  margin: 20px 0px;
  display: flex;
  align-items: center;
  gap: 10px;
}
body #content aside div:first-child .title img {
  height: 28px;
  width: 28px;
}
body #content aside div:first-child .title h1 {
  font-size: 1.5rem;
}
body #content aside div:first-child .due li {
  list-style: none;
  padding: 10px 0px;
  display: flex;
  align-items: center;
  gap: 10px;
}
body #content aside div:first-child .due li img {
  height: 20px;
  width: 20px;
}
body #content aside div:first-child .due li button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #f0f0f0;
  padding: 0;
}
body #content aside div:first-child .boards-list h3 {
  color: #9e9e9e;
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 3px;
  margin: 30px 0px 10px 0px;
}
body #content aside div:first-child .boards-list ul li {
  padding: 10px 0px;
  list-style: none;
}
body #content aside div:first-child .boards-list ul li button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 10px;
}
body #content aside div:first-child .boards-list ul li button p {
  color: #f0f0f0;
}
body #content aside div:first-child .boards-list .button-open-create-board {
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: 5px 8px;
  padding: 10px 0px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s;
}
body #content aside div:first-child .boards-list .button-open-create-board:hover {
  background-color: #29292e;
}
body #content aside div:first-child .boards-list .button-open-create-board img {
  height: 18px;
  width: 18px;
}
body #content aside div:first-child .boards-list .button-open-create-board p {
  font-size: 0.8rem;
  letter-spacing: 1px;
  color: #8570fc;
}
body #content aside div:last-child {
  align-self: end;
  display: grid;
}
body #content aside div:last-child .night-mode {
  display: grid;
  grid-template-columns: 25px 55px 25px;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 10px;
}
body #content aside div:last-child .night-mode img {
  height: 25px;
  width: 25px;
}
body #content aside div:last-child .night-mode input {
  position: relative;
  width: 45px;
  height: 22px;
  -webkit-appearance: none;
  appearance: none;
  background: #9e9e9e;
  outline: none;
  border-radius: 2rem;
  cursor: pointer;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
}
body #content aside div:last-child .night-mode input::before {
  content: "";
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s;
}
body #content aside div:last-child .night-mode input:checked::before {
  transform: translateX(100%);
  background: #fff;
}
body #content aside div:last-child .night-mode input:checked {
  background: #8570fc;
}
body #content aside div:last-child .hide {
  border: none;
  background-color: transparent;
  cursor: pointer;
  background-color: #414146;
  border-radius: 8px;
  padding: 10px 20px;
  margin: 25px 0px;
  display: flex;
  align-items: center;
}
body #content aside div:last-child .hide:hover img {
  transform: translateX(-5px);
}
body #content aside div:last-child .hide img {
  transition: all 0.2s;
  height: 25px;
  width: 25px;
}
body #content aside div:last-child .hide p {
  transition: all 0.4s;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: #f0f0f0;
  margin-left: 5px;
}
body #content aside div:last-child .github {
  margin-bottom: 40px;
}
body #content aside div:last-child .github a {
  font-weight: bold;
  font-size: 0.65rem;
  color: #f0f0f0;
  text-decoration: none;
  padding: 5px;
  display: grid;
  grid-template-columns: 20px 120px;
  align-items: center;
  gap: 10px;
}
body #content aside div:last-child .github a img {
  padding: 0;
  height: 20px;
  width: 20px;
}
body #content aside div:last-child .github a:hover p {
  display: none;
}
body #content aside div:last-child .github a:hover:after {
  content: "Click to see code";
}`, "",{"version":3,"sources":["webpack://./src/styles/index.scss","webpack://./src/styles/aside.scss"],"names":[],"mappings":"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","sourcesContent":["$theme-dark: #37363e;\n$theme-darker: #29292e;\n$theme-purple: #8570fc;\n$theme-gray: #414146;\n$font-white: #f0f0f0;\n$font-gray: #9e9e9e;\n$border-dark: #474747;\n$card-shadow: #1a1a1a;\n\n\n@mixin icon-size($pixel) {\n  height: $pixel;\n  width: $pixel;\n}\n\n@mixin button-styling {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@font-face {\n  font-family: 'Lato';\n  src: url('../fonts/Lato-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Poppins';\n  src: url('../fonts/Poppins-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/* --- CSS Reset --- */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\nmargin: 0;\npadding: 0;\nborder: 0;\nfont-size: 100%;\nfont: inherit;\nvertical-align: baseline;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\nfont-family: inherit;\nfont-size: 100%;\n}\n\n/* --- Custom CSS --- */\n\nbody {\n  font-family: 'Poppins', system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  min-height: 100vh;\n  #content {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  grid-template-rows: 100px 1fr;\n  }\n}","@use 'index';\n\nbody {\n  #content {\n    aside {\n      height: 100vh;\n      background-color: index.$theme-dark;\n      border-right: 1px solid index.$border-dark;\n  \n      grid-row: 1 / 3;\n      display: grid;\n      grid-template-rows: 1.5fr 1fr;\n      justify-content: center;\n      div:first-child {\n        .title {\n          color: index.$font-white;\n          font-weight: bold;\n          margin: 20px 0px;\n\n          display: flex;\n          align-items: center;\n          gap: 10px;\n          img {\n            @include index.icon-size(28px);\n          }\n          h1 {\n            font-size: 1.5rem;\n          }\n        }\n        .due {\n          li {\n            list-style: none;\n            padding: 10px 0px;\n\n            display: flex;\n            align-items: center;\n            gap: 10px;\n            img {\n              @include index.icon-size(20px);\n            }\n            button {\n              @include index.button-styling();\n              color: index.$font-white;\n              padding: 0;\n            }\n          }\n        }\n        .boards-list {\n          h3 {\n            color: index.$font-gray;\n            font-size: 0.7rem;\n            font-weight: bold;\n            letter-spacing: 3px;\n            margin: 30px 0px 10px 0px;\n          }\n          ul {\n            li {\n              padding: 10px 0px;\n              list-style: none;\n              button {\n                @include index.button-styling();\n                padding: 0;\n\n                display: flex;\n                align-items: center;;\n                gap: 10px;\n                p {\n                  color: index.$font-white;\n                }\n              }\n            }\n          }\n          .button-open-create-board {\n            @include index.button-styling();\n            margin: 5px 8px;\n            padding: 10px 0px;\n            border-radius: 10px;;\n\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            gap: 10px;\n\n            transition: all 0.3s;\n            &:hover {\n              background-color: index.$theme-darker;\n            }\n            img {\n              @include index.icon-size(18px);\n            }\n            p {\n              font-size: 0.8rem;\n              letter-spacing: 1px;\n              color: index.$theme-purple;\n            }\n          }\n        }\n      }\n      div:last-child {\n        align-self: end;\n\n        display: grid;\n        .night-mode {\n          display: grid;\n          grid-template-columns: 25px 55px 25px;\n          justify-content: center;\n          align-content: center;\n          align-items: center;\n          gap: 10px;\n          img {\n            @include index.icon-size(25px);\n          }\n          input {\n            position: relative;\n            width: 45px;\n            height: 22px;\n            -webkit-appearance: none;\n            appearance: none;\n            background: index.$font-gray;\n            outline: none;\n            border-radius: 2rem;\n            cursor: pointer;\n            box-shadow: inset 0 0 5px rgb(0 0 0 / 50%);\n            &::before {\n              content: \"\";\n              width: 22px;\n              height: 22px;\n              border-radius: 50%;\n              background: #fff;\n              position: absolute;\n              top: 0;\n              left: 0;\n              transition: 0.5s;\n            }\n            &:checked::before {\n              transform: translateX(100%);\n              background: #fff;\n            }\n            &:checked {\n              background: index.$theme-purple;\n            }\n          }\n        }\n        .hide {\n          @include index.button-styling();\n          background-color: index.$theme-gray;\n          border-radius: 8px;\n          padding: 10px 20px;\n          margin: 25px 0px;\n\n\n          display: flex;\n          align-items: center;\n          &:hover img{\n            transform: translateX(-5px)\n          }\n          img {\n            transition: all 0.2s;\n            @include index.icon-size(25px);\n\n          }\n          p {\n            transition: all 0.4s;\n            font-size: 0.8rem;\n            font-weight: bold;\n            letter-spacing: 1px;\n            color: index.$font-white;\n            margin-left: 5px;\n          }\n        }\n        .github {\n          margin-bottom: 40px;\n          a {\n            font-weight: bold;\n            font-size: 0.65rem;\n            color: index.$font-white;\n            text-decoration: none;\n            padding: 5px;\n    \n            display: grid;\n            grid-template-columns: 20px 120px;\n            align-items: center;\n            gap: 10px;\n            img {\n                padding: 0;\n                @include index.icon-size(20px)\n            }\n            &:hover p {\n                display: none;\n            }\n            &:hover:after {\n                content: \"Click to see code\";\n            }\n          }\n        }\n      }\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/breakpoints.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/breakpoints.scss ***!
  \******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media all and (max-width: 480px) {
  body {
    min-height: 100vh;
    background-color: blanchedalmond;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/breakpoints.scss"],"names":[],"mappings":"AAMA;EAEA;IACE,iBAAA;IACA,gCAAA;EANA;AACF","sourcesContent":["// @media all and (min-width: 1024px) and (max-width: 1280px) { }\n \n// @media all and (min-width: 768px) and (max-width: 1024px) { }\n \n// @media all and (min-width: 480px) and (max-width: 768px) { }\n \n@media all and (max-width: 480px) {\n\nbody {\n  min-height: 100vh;\n  background-color: blanchedalmond;\n}\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/dialog.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/dialog.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Lato-Regular.ttf */ "./src/fonts/Lato-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Poppins-Regular.ttf */ "./src/fonts/Poppins-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Lato";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Poppins";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
  font-weight: normal;
  font-style: normal;
}
/* --- CSS Reset --- */
*, *::before, *::after {
  box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}

/* --- Custom CSS --- */
body {
  font-family: "Poppins", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  min-height: 100vh;
}
body #content {
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: 100px 1fr;
}

body #content .dialog-create-board,
body #content .dialog-edit-board {
  background-color: #37363e;
  border: none;
  border-radius: 10px;
  padding: 10px 25px;
}
body #content .dialog-create-board::backdrop,
body #content .dialog-edit-board::backdrop {
  background-color: black;
  opacity: 0.6;
}
body #content .dialog-create-board div,
body #content .dialog-edit-board div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
body #content .dialog-create-board div h6,
body #content .dialog-edit-board div h6 {
  color: #f0f0f0;
  font-weight: bold;
  padding: 10px 0px;
}
body #content .dialog-create-board div div,
body #content .dialog-edit-board div div {
  display: flex;
  gap: 15px;
}
body #content .dialog-create-board div div button,
body #content .dialog-edit-board div div button {
  background-color: transparent;
  border: none;
  background-color: #414146;
  border-radius: 50px;
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s;
}
body #content .dialog-create-board div div button:hover,
body #content .dialog-edit-board div div button:hover {
  filter: brightness(120%);
}
body #content .dialog-create-board div div button img,
body #content .dialog-edit-board div div button img {
  height: 20px;
  width: 20px;
}
body #content .dialog-create-board form,
body #content .dialog-edit-board form {
  display: grid;
}
body #content .dialog-create-board form div label,
body #content .dialog-edit-board form div label {
  color: #f0f0f0;
  font-size: 0.8rem;
  margin: 4px;
}
body #content .dialog-create-board form div span,
body #content .dialog-edit-board form div span {
  color: #ff5c5c;
  font-size: 0.8rem;
  margin: 4px;
}
body #content .dialog-create-board form input,
body #content .dialog-edit-board form input {
  color: #f0f0f0;
  background-color: #37363e;
  border: 1px solid #414146;
  border-radius: 5px;
  caret-color: #f0f0f0;
  height: 35px;
  padding: 10px;
}
body #content .dialog-create-board form input::placeholder,
body #content .dialog-edit-board form input::placeholder {
  font-size: 0.8rem;
  padding: 5px;
}
body #content .dialog-create-board form input:focus,
body #content .dialog-edit-board form input:focus {
  outline: none;
}
body #content .dialog-create-board form button,
body #content .dialog-edit-board form button {
  color: #f0f0f0;
  font-weight: bold;
  background-color: #8570fc;
  border: none;
  border-radius: 50px;
  padding: 5px 0px;
  margin: 20px 0px;
  cursor: pointer;
  transition: all 0.2s;
}
body #content .dialog-create-board form button:hover,
body #content .dialog-edit-board form button:hover {
  filter: brightness(120%);
}
body #content .dialog-add-task {
  background-color: #37363e;
  border: none;
  border-radius: 10px;
  padding: 10px 25px;
}
body #content .dialog-add-task::backdrop {
  background-color: black;
  opacity: 0.6;
}
body #content .dialog-add-task div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
body #content .dialog-add-task div h6 {
  color: #f0f0f0;
  font-weight: bold;
  padding: 10px 0px;
}
body #content .dialog-add-task div div {
  display: flex;
  gap: 15px;
}
body #content .dialog-add-task div div button {
  background-color: transparent;
  border: none;
  background-color: #414146;
  border-radius: 50px;
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s;
}
body #content .dialog-add-task div div button:hover {
  filter: brightness(120%);
}
body #content .dialog-add-task div div button img {
  height: 20px;
  width: 20px;
}
body #content .dialog-add-task form ul {
  display: grid;
  gap: 10px;
}
body #content .dialog-add-task form ul li {
  list-style: none;
}
body #content .dialog-add-task form ul li div label {
  color: #f0f0f0;
  font-size: 0.8rem;
  margin: 4px;
}
body #content .dialog-add-task form ul li div span {
  color: #ff5c5c;
  font-size: 0.8rem;
  margin: 4px;
}
body #content .dialog-add-task form ul li input {
  color: #f0f0f0;
  background-color: #37363e;
  border: 1px solid #414146;
  border-radius: 5px;
  caret-color: #f0f0f0;
  height: 35px;
  padding: 10px;
}
body #content .dialog-add-task form ul li input::placeholder {
  font-size: 0.8rem;
  padding: 5px;
}
body #content .dialog-add-task form ul li input:focus {
  outline: none;
}
body #content .dialog-add-task form ul li textarea {
  font-size: 0.9rem;
  color: #f0f0f0;
  background-color: #37363e;
  border: 1px solid #414146;
  border-radius: 5px;
  caret-color: #f0f0f0;
  padding: 10px;
  resize: vertical;
  width: 100%;
}
body #content .dialog-add-task form ul li textarea::placeholder {
  font-size: 0.8rem;
  padding: 5px;
}
body #content .dialog-add-task form ul li textarea:focus {
  outline: none;
}
body #content .dialog-add-task form ul li select {
  font-size: 0.8rem;
  color: #f0f0f0;
  background-color: #37363e;
  border: 1px solid #414146;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
}
body #content .dialog-add-task form ul li select:focus {
  outline: none;
}
body #content .dialog-add-task form ul li button {
  color: #f0f0f0;
  font-weight: bold;
  background-color: #8570fc;
  border: none;
  border-radius: 50px;
  padding: 5px 0px;
  margin: 20px 0px;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s;
}
body #content .dialog-add-task form ul li button:hover {
  filter: brightness(120%);
}`, "",{"version":3,"sources":["webpack://./src/styles/index.scss","webpack://./src/styles/dialog.scss"],"names":[],"mappings":"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","sourcesContent":["$theme-dark: #37363e;\n$theme-darker: #29292e;\n$theme-purple: #8570fc;\n$theme-gray: #414146;\n$font-white: #f0f0f0;\n$font-gray: #9e9e9e;\n$border-dark: #474747;\n$card-shadow: #1a1a1a;\n\n\n@mixin icon-size($pixel) {\n  height: $pixel;\n  width: $pixel;\n}\n\n@mixin button-styling {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@font-face {\n  font-family: 'Lato';\n  src: url('../fonts/Lato-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Poppins';\n  src: url('../fonts/Poppins-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/* --- CSS Reset --- */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\nmargin: 0;\npadding: 0;\nborder: 0;\nfont-size: 100%;\nfont: inherit;\nvertical-align: baseline;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\nfont-family: inherit;\nfont-size: 100%;\n}\n\n/* --- Custom CSS --- */\n\nbody {\n  font-family: 'Poppins', system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  min-height: 100vh;\n  #content {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  grid-template-rows: 100px 1fr;\n  }\n}","@use 'index';\n\nbody {\n  #content {\n    .dialog-create-board,\n    .dialog-edit-board {\n      background-color: index.$theme-dark;\n      border: none;\n      border-radius: 10px;;\n      padding: 10px 25px;\n\n      &::backdrop {\n        background-color: black;\n        opacity: 0.6;\n      }\n      div {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        h6 {\n          color: index.$font-white;\n          font-weight: bold;\n          padding: 10px 0px;\n        }\n        div {\n          display: flex;\n          gap: 15px;\n          button {\n            background-color: transparent;\n            border: none;\n            background-color: index.$theme-gray;\n            border-radius: 50px;\n            padding: 5px;\n            cursor: pointer;\n  \n            display: flex;\n            align-items: center;\n  \n            transition: all 0.2s;\n            &:hover {\n              filter: brightness(120%);\n            }\n            img {\n              @include index.icon-size(20px);\n            }\n          }\n        }\n      }\n      form {\n        display: grid;\n        div {\n          label {\n            color: index.$font-white;\n            font-size: 0.8rem;\n            margin: 4px;\n          }\n          span {\n            color: #ff5c5c;\n            font-size: 0.8rem;\n            margin: 4px;\n          }\n        }\n\n        input {\n          color: index.$font-white;\n          background-color: index.$theme-dark;\n          border: 1px solid index.$theme-gray;\n          border-radius: 5px;\n          caret-color: index.$font-white;\n          height: 35px;\n          padding: 10px;\n          &::placeholder {\n            font-size: 0.8rem;\n            padding: 5px;\n          }\n          &:focus {\n            outline: none;\n          }\n        }\n        button {\n          color: index.$font-white;\n          font-weight: bold;\n          background-color: index.$theme-purple;\n          border: none;\n          border-radius: 50px;\n          padding: 5px 0px;\n          margin: 20px 0px;\n          cursor: pointer;\n\n          transition: all 0.2s;\n          &:hover {\n            filter: brightness(120%);\n          }\n        }\n      }\n    }\n    .dialog-add-task {\n      background-color: index.$theme-dark;\n      border: none;\n      border-radius: 10px;;\n      padding: 10px 25px;\n\n      &::backdrop {\n        background-color: black;\n        opacity: 0.6;\n      }\n      div {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        h6 {\n          color: index.$font-white;\n          font-weight: bold;\n          padding: 10px 0px;\n        }\n        div {\n          display: flex;\n          gap: 15px;\n          button {\n            background-color: transparent;\n            border: none;\n            background-color: index.$theme-gray;\n            border-radius: 50px;\n            padding: 5px;\n            cursor: pointer;\n  \n            display: flex;\n            align-items: center;\n  \n            transition: all 0.2s;\n            &:hover {\n              filter: brightness(120%);\n            }\n            img {\n              @include index.icon-size(20px);\n            }\n          }\n        }\n      }\n      form {\n        ul {\n          display: grid;\n          gap: 10px;\n          li {\n            list-style: none;\n            div {\n              label {\n                color: index.$font-white;\n                font-size: 0.8rem;\n                margin: 4px;\n              }\n              span {\n                color: #ff5c5c;\n                font-size: 0.8rem;\n                margin: 4px;\n              }\n            }\n            input {\n              color: index.$font-white;\n              background-color: index.$theme-dark;\n              border: 1px solid index.$theme-gray;\n              border-radius: 5px;\n              caret-color: index.$font-white;\n              height: 35px;\n              padding: 10px;\n              &::placeholder {\n                font-size: 0.8rem;\n                padding: 5px;\n              }\n              &:focus {\n                outline: none;\n              }\n            }\n            textarea {\n              font-size: 0.9rem;\n              color: index.$font-white;\n              background-color: index.$theme-dark;\n              border: 1px solid index.$theme-gray;\n              border-radius: 5px;\n              caret-color: index.$font-white;\n              padding: 10px;\n              resize: vertical;\n              width: 100%;\n              &::placeholder {\n                font-size: 0.8rem;\n                padding: 5px;\n              }\n              &:focus {\n                outline: none;\n              }\n            }\n            select {\n              font-size: 0.8rem;\n              color: index.$font-white;\n              background-color: index.$theme-dark;\n              border: 1px solid index.$theme-gray;\n              border-radius: 5px;\n              padding: 10px;\n              width: 100%;\n              cursor: pointer;\n              &:focus {\n                outline: none;\n              }\n            }\n            button {\n              color: index.$font-white;\n              font-weight: bold;\n              background-color: index.$theme-purple;\n              border: none;\n              border-radius: 50px;\n              padding: 5px 0px;\n              margin: 20px 0px;\n              width: 100%;\n              cursor: pointer;\n    \n              transition: all 0.2s;\n              &:hover {\n                filter: brightness(120%);\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/header.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/header.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Lato-Regular.ttf */ "./src/fonts/Lato-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Poppins-Regular.ttf */ "./src/fonts/Poppins-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Lato";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Poppins";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
  font-weight: normal;
  font-style: normal;
}
/* --- CSS Reset --- */
*, *::before, *::after {
  box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}

/* --- Custom CSS --- */
body {
  font-family: "Poppins", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  min-height: 100vh;
}
body #content {
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: 100px 1fr;
}

body #content header {
  padding: 0px 35px;
  background-color: #37363e;
  border-bottom: 1px solid #474747;
  grid-column: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
body #content header h2 {
  font-size: 1.8rem;
  color: #f0f0f0;
}
body #content header div {
  display: flex;
  gap: 20px;
}
body #content header div button {
  transition: all 0.2s;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
body #content header div button:hover {
  filter: brightness(120%);
}
body #content header div button:active {
  transform: scale(90%);
}
body #content header div .button-open-add-task {
  padding: 0px 22px;
  border-radius: 25px;
  background-color: #8570fc;
  display: flex;
  align-items: center;
  gap: 5px;
}
body #content header div .button-open-add-task p {
  color: #f0f0f0;
  font-weight: bold;
  font-size: 1rem;
}
body #content header div .button-open-add-task img {
  height: 20px;
  width: 20px;
}
body #content header div .button-open-edit-board {
  padding: 12px;
  background-color: #414146;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
body #content header div .button-open-edit-board img {
  height: 20px;
  width: 20px;
}
body #content header div .button-unhide {
  padding: 12px;
  background-color: #414146;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
body #content header div .button-unhide img {
  height: 20px;
  width: 20px;
  transform: scale(120%);
}`, "",{"version":3,"sources":["webpack://./src/styles/index.scss","webpack://./src/styles/header.scss"],"names":[],"mappings":"AA2BA;EACE,mBAAA;EACA,+DAAA;EACA,mBAAA;EACA,kBAAA;AC1BF;AD6BA;EACE,sBAAA;EACA,+DAAA;EACA,mBAAA;EACA,kBAAA;AC3BF;AD8BA,sBAAA;AACA;EACE,sBAAA;AC5BF;;AD+BA;;;;;;;;;;;;;EAaA,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;AC5BA;;AD+BA;;;;EAIA,oBAAA;EACA,eAAA;AC5BA;;AD+BA,uBAAA;AAEA;EACE,6IAAA;EACA,iBAAA;AC7BF;AD8BE;EACA,aAAA;EACA,gCAAA;EACA,6BAAA;AC5BF;;AAnDI;EACE,iBAAA;EACA,yBDNO;ECOP,gCAAA;EAEA,cAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AAqDN;AApDM;EACE,iBAAA;EACA,cDXK;ACiEb;AApDM;EACE,aAAA;EACA,SAAA;AAsDR;AArDQ;EACE,oBAAA;EDLR,YAAA;EACA,6BAAA;EACA,eAAA;AC6DF;AAzDU;EACE,wBAAA;AA2DZ;AAzDU;EACE,qBAAA;AA2DZ;AAvDQ;EACE,iBAAA;EACA,mBAAA;EACA,yBD/BK;ECiCL,aAAA;EACA,mBAAA;EACA,QAAA;AAwDV;AAvDU;EACE,cDnCC;ECoCD,iBAAA;EACA,eAAA;AAyDZ;AAvDU;EDhCR,YCiCmC;EDhCnC,WCgCmC;AA0DrC;AAvDQ;EACE,aAAA;EACA,yBD9CG;EC+CH,mBAAA;ED5BR,aAAA;EACA,uBAAA;EACA,mBAAA;ACsFF;AAzDU;ED1CR,YC2CmC;ED1CnC,WC0CmC;AA4DrC;AAzDQ;EACE,aAAA;EACA,yBDxDG;ECyDH,mBAAA;EDtCR,aAAA;EACA,uBAAA;EACA,mBAAA;ACkGF;AA5DU;EDnDR,YCoDmC;EDnDnC,WCmDmC;EACzB,sBAAA;AA+DZ","sourcesContent":["$theme-dark: #37363e;\n$theme-darker: #29292e;\n$theme-purple: #8570fc;\n$theme-gray: #414146;\n$font-white: #f0f0f0;\n$font-gray: #9e9e9e;\n$border-dark: #474747;\n$card-shadow: #1a1a1a;\n\n\n@mixin icon-size($pixel) {\n  height: $pixel;\n  width: $pixel;\n}\n\n@mixin button-styling {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@font-face {\n  font-family: 'Lato';\n  src: url('../fonts/Lato-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Poppins';\n  src: url('../fonts/Poppins-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/* --- CSS Reset --- */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\nmargin: 0;\npadding: 0;\nborder: 0;\nfont-size: 100%;\nfont: inherit;\nvertical-align: baseline;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\nfont-family: inherit;\nfont-size: 100%;\n}\n\n/* --- Custom CSS --- */\n\nbody {\n  font-family: 'Poppins', system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  min-height: 100vh;\n  #content {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  grid-template-rows: 100px 1fr;\n  }\n}","@use 'index';\n\nbody {\n  #content {\n    header {\n      padding: 0px 35px;\n      background-color: index.$theme-dark;\n      border-bottom: 1px solid index.$border-dark;\n\n      grid-column: 2;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      h2 {\n        font-size: 1.8rem;\n        color: index.$font-white;\n      }\n      div {\n        display: flex;\n        gap: 20px;\n        button {\n          transition: all 0.2s;\n          &:hover {\n            filter: brightness(120%);\n          }\n          &:active {\n            transform: scale(90%);\n          }\n          @include index.button-styling();\n        }\n        .button-open-add-task {\n          padding: 0px 22px;\n          border-radius: 25px;\n          background-color: index.$theme-purple;\n\n          display: flex;\n          align-items: center;\n          gap: 5px;\n          p {\n            color: index.$font-white;\n            font-weight: bold;\n            font-size: 1rem;\n          }\n          img {\n            @include index.icon-size(20px);\n          }\n        }\n        .button-open-edit-board {\n          padding: 12px;\n          background-color: index.$theme-gray;\n          border-radius: 50px;\n\n          @include index.flex-center();\n          img {\n            @include index.icon-size(20px);\n          }\n        }\n        .button-unhide {\n          padding: 12px;\n          background-color: index.$theme-gray;\n          border-radius: 50px;\n          @include index.flex-center();\n          img {\n            @include index.icon-size(20px);\n            transform: scale(120%);\n          }\n        }\n      }\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Lato-Regular.ttf */ "./src/fonts/Lato-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Poppins-Regular.ttf */ "./src/fonts/Poppins-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Lato";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Poppins";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
  font-weight: normal;
  font-style: normal;
}
/* --- CSS Reset --- */
*, *::before, *::after {
  box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}

/* --- Custom CSS --- */
body {
  font-family: "Poppins", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  min-height: 100vh;
}
body #content {
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: 100px 1fr;
}`, "",{"version":3,"sources":["webpack://./src/styles/index.scss"],"names":[],"mappings":"AA2BA;EACE,mBAAA;EACA,+DAAA;EACA,mBAAA;EACA,kBAAA;AA1BF;AA6BA;EACE,sBAAA;EACA,+DAAA;EACA,mBAAA;EACA,kBAAA;AA3BF;AA8BA,sBAAA;AACA;EACE,sBAAA;AA5BF;;AA+BA;;;;;;;;;;;;;EAaA,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;AA5BA;;AA+BA;;;;EAIA,oBAAA;EACA,eAAA;AA5BA;;AA+BA,uBAAA;AAEA;EACE,6IAAA;EACA,iBAAA;AA7BF;AA8BE;EACA,aAAA;EACA,gCAAA;EACA,6BAAA;AA5BF","sourcesContent":["$theme-dark: #37363e;\n$theme-darker: #29292e;\n$theme-purple: #8570fc;\n$theme-gray: #414146;\n$font-white: #f0f0f0;\n$font-gray: #9e9e9e;\n$border-dark: #474747;\n$card-shadow: #1a1a1a;\n\n\n@mixin icon-size($pixel) {\n  height: $pixel;\n  width: $pixel;\n}\n\n@mixin button-styling {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@font-face {\n  font-family: 'Lato';\n  src: url('../fonts/Lato-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Poppins';\n  src: url('../fonts/Poppins-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/* --- CSS Reset --- */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\nmargin: 0;\npadding: 0;\nborder: 0;\nfont-size: 100%;\nfont: inherit;\nvertical-align: baseline;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\nfont-family: inherit;\nfont-size: 100%;\n}\n\n/* --- Custom CSS --- */\n\nbody {\n  font-family: 'Poppins', system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  min-height: 100vh;\n  #content {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  grid-template-rows: 100px 1fr;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Lato-Regular.ttf */ "./src/fonts/Lato-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Poppins-Regular.ttf */ "./src/fonts/Poppins-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Lato";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Poppins";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("truetype");
  font-weight: normal;
  font-style: normal;
}
/* --- CSS Reset --- */
*, *::before, *::after {
  box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}

/* --- Custom CSS --- */
body {
  font-family: "Poppins", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  min-height: 100vh;
}
body #content {
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: 100px 1fr;
}

body #content main {
  background-color: #29292e;
  grid-column: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
body #content main .column {
  padding: 20px;
  display: flex;
  flex-direction: column;
}
body #content main .column__header {
  margin-bottom: 20px;
}
body #content main .column__header h3 {
  color: #9e9e9e;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 3px;
}
body #content main .column__header-todo {
  display: flex;
  align-items: center;
  gap: 7px;
}
body #content main .column__header-todo div {
  height: 10px;
  width: 10px;
  background-color: aqua;
  border-radius: 10px;
}
body #content main .column__header-doing {
  display: flex;
  align-items: center;
  gap: 7px;
}
body #content main .column__header-doing div {
  height: 10px;
  width: 10px;
  background-color: #8570fc;
  border-radius: 10px;
}
body #content main .column__header-done {
  display: flex;
  align-items: center;
  gap: 7px;
}
body #content main .column__header-done div {
  height: 10px;
  width: 10px;
  background-color: lightgreen;
  border-radius: 10px;
}
body #content main .column ul {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
body #content main .column ul li {
  color: #f0f0f0;
  list-style: none;
  background-color: #37363e;
  border-radius: 7px;
  padding: 15px 20px 15px 20px;
  box-shadow: 1px 1px 10px #1a1a1a;
  cursor: pointer;
  transition: all 0.3s;
}
body #content main .column ul li:hover {
  transform: translateY(-4px);
}
body #content main .column ul li h4 {
  font-size: 1rem;
  margin-bottom: 10px;
}
body #content main .column ul li p {
  font-size: 0.9rem;
  margin: 10px 0px;
}
body #content main .column ul li .task-footer {
  display: flex;
  justify-content: space-between;
}
body #content main .column ul li .task-footer__container {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #414146;
  padding: 4px 15px;
  border-radius: 70px;
}
body #content main .column ul li .task-footer__container img {
  height: 15px;
  width: 15px;
  fill: red;
}
body #content main .column ul li .task-footer__container span {
  font-size: 0.8rem;
  letter-spacing: 0px;
}
body #content main .column ul li h5 {
  display: flex;
  align-items: center;
  color: #9e9e9e;
  font-size: 0.8rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/index.scss","webpack://./src/styles/main.scss"],"names":[],"mappings":"AA2BA;EACE,mBAAA;EACA,+DAAA;EACA,mBAAA;EACA,kBAAA;AC1BF;AD6BA;EACE,sBAAA;EACA,+DAAA;EACA,mBAAA;EACA,kBAAA;AC3BF;AD8BA,sBAAA;AACA;EACE,sBAAA;AC5BF;;AD+BA;;;;;;;;;;;;;EAaA,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;AC5BA;;AD+BA;;;;EAIA,oBAAA;EACA,eAAA;AC5BA;;AD+BA,uBAAA;AAEA;EACE,6IAAA;EACA,iBAAA;AC7BF;AD8BE;EACA,aAAA;EACA,gCAAA;EACA,6BAAA;AC5BF;;AAnDI;EACE,yBDJS;ECMT,cAAA;EACA,aAAA;EACA,qCAAA;AAqDN;AApDM;EACE,aAAA;EAEA,aAAA;EACA,sBAAA;AAqDR;AApDQ;EACE,mBAAA;AAsDV;AArDU;EACE,cDbA;ECcA,iBAAA;EACA,iBAAA;EACA,mBAAA;AAuDZ;AArDU;EACE,aAAA;EACA,mBAAA;EACA,QAAA;AAuDZ;AAtDY;EDhBV,YCiBqC;EDhBrC,WCgBqC;EACzB,sBAAA;EACA,mBAAA;AAyDd;AAtDU;EACE,aAAA;EACA,mBAAA;EACA,QAAA;AAwDZ;AAvDY;ED1BV,YC2BqC;ED1BrC,WC0BqC;EACzB,yBDrCC;ECsCD,mBAAA;AA0Dd;AAvDU;EACE,aAAA;EACA,mBAAA;EACA,QAAA;AAyDZ;AAxDY;EDpCV,YCqCqC;EDpCrC,WCoCqC;EACzB,4BAAA;EACA,mBAAA;AA2Dd;AAvDQ;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAyDV;AAxDU;EACE,cDvDC;ECwDD,gBAAA;EACA,yBD7DC;EC8DD,kBAAA;EACA,4BAAA;EACA,gCAAA;EACA,eAAA;EAEA,oBAAA;AAyDZ;AAxDY;EACE,2BAAA;AA0Dd;AAxDY;EACE,eAAA;EACA,mBAAA;AA0Dd;AAxDY;EACE,iBAAA;EACA,gBAAA;AA0Dd;AAxDY;EACE,aAAA;EACA,8BAAA;AA0Dd;AAzDc;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,yBDnFH;ECoFG,iBAAA;EACA,mBAAA;AA2DhB;AA1DgB;ED9Ed,YC+EyC;ED9EzC,WC8EyC;EACzB,SAAA;AA6DlB;AA3DgB;EACE,iBAAA;EACA,mBAAA;AA6DlB;AAzDY;EACE,aAAA;EACA,mBAAA;EACA,cDjGF;ECkGE,iBAAA;AA2Dd","sourcesContent":["$theme-dark: #37363e;\n$theme-darker: #29292e;\n$theme-purple: #8570fc;\n$theme-gray: #414146;\n$font-white: #f0f0f0;\n$font-gray: #9e9e9e;\n$border-dark: #474747;\n$card-shadow: #1a1a1a;\n\n\n@mixin icon-size($pixel) {\n  height: $pixel;\n  width: $pixel;\n}\n\n@mixin button-styling {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@font-face {\n  font-family: 'Lato';\n  src: url('../fonts/Lato-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Poppins';\n  src: url('../fonts/Poppins-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/* --- CSS Reset --- */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\nmargin: 0;\npadding: 0;\nborder: 0;\nfont-size: 100%;\nfont: inherit;\nvertical-align: baseline;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\nfont-family: inherit;\nfont-size: 100%;\n}\n\n/* --- Custom CSS --- */\n\nbody {\n  font-family: 'Poppins', system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  min-height: 100vh;\n  #content {\n  display: grid;\n  grid-template-columns: 280px 1fr;\n  grid-template-rows: 100px 1fr;\n  }\n}","@use 'index';\n\nbody {\n  #content {\n    main {\n      background-color: index.$theme-darker;\n\n      grid-column: 2;\n      display: grid;\n      grid-template-columns: repeat(3, 1fr);\n      .column {\n        padding: 20px;\n\n        display: flex;\n        flex-direction: column;\n        &__header {\n          margin-bottom: 20px;\n          h3 {\n            color: index.$font-gray;\n            font-size: 0.8rem;\n            font-weight: bold;\n            letter-spacing: 3px;\n          }\n          &-todo {\n            display: flex;\n            align-items: center;\n            gap: 7px;\n            div {\n              @include index.icon-size(10px);\n              background-color: aqua;\n              border-radius: 10px;;\n            }\n          }\n          &-doing {\n            display: flex;\n            align-items: center;\n            gap: 7px;\n            div {\n              @include index.icon-size(10px);\n              background-color: index.$theme-purple;\n              border-radius: 10px;;\n            }\n          }\n          &-done {\n            display: flex;\n            align-items: center;\n            gap: 7px;\n            div {\n              @include index.icon-size(10px);\n              background-color: lightgreen;\n              border-radius: 10px;;\n            }\n          }\n        }\n        ul {\n          display: flex;\n          flex-direction: column;\n          gap: 25px;\n          li {\n            color: index.$font-white;\n            list-style: none;\n            background-color: index.$theme-dark;\n            border-radius: 7px;\n            padding: 15px 20px 15px 20px;\n            box-shadow: 1px 1px 10px index.$card-shadow;\n            cursor: pointer;\n\n            transition: all 0.3s;\n            &:hover {\n              transform: translateY(-4px);\n            }\n            h4 {\n              font-size: 1rem;\n              margin-bottom: 10px;\n            }\n            p {\n              font-size: 0.9rem;\n              margin: 10px 0px;\n            }\n            .task-footer {\n              display: flex;\n              justify-content: space-between;\n              &__container {\n                display: flex;\n                align-items: center;\n                gap: 10px;\n                background-color: index.$theme-gray;\n                padding: 4px 15px;\n                border-radius: 70px;\n                img {\n                  @include index.icon-size(15px);\n                  fill: red;\n                }\n                span  {\n                  font-size: 0.8rem;\n                  letter-spacing: 0px;\n                }\n              }\n            }\n            h5 {\n              display: flex;\n              align-items: center;\n              color: index.$font-gray;\n              font-size: 0.8rem;\n            }\n          };\n        }\n      }\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/aside.scss":
/*!*******************************!*\
  !*** ./src/styles/aside.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_aside_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./aside.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/aside.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_aside_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_aside_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_aside_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_aside_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/breakpoints.scss":
/*!*************************************!*\
  !*** ./src/styles/breakpoints.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./breakpoints.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/breakpoints.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/dialog.scss":
/*!********************************!*\
  !*** ./src/styles/dialog.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dialog_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./dialog.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/dialog.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dialog_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dialog_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dialog_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_dialog_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/header.scss":
/*!********************************!*\
  !*** ./src/styles/header.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/header.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/data-handler.js":
/*!*****************************!*\
  !*** ./src/data-handler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewBoard: () => (/* binding */ addNewBoard),
/* harmony export */   deleteBoard: () => (/* binding */ deleteBoard),
/* harmony export */   editBoard: () => (/* binding */ editBoard),
/* harmony export */   getActiveBoard: () => (/* binding */ getActiveBoard),
/* harmony export */   getBoards: () => (/* binding */ getBoards),
/* harmony export */   getBoardsTotal: () => (/* binding */ getBoardsTotal),
/* harmony export */   setActiveBoard: () => (/* binding */ setActiveBoard)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");


let activeBoard = null;

const boards = [
  {
    title: 'Kanban Project',
    tasks: [
      {
        title: 'Build UI for Project',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
        dueDate: 'This Week',
        priority: 'low',
        status: 'todo',
      },
      {
        title: 'Restructure Code into Modules',
        description: 'Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
        dueDate: 'Today',
        priority: 'medium',
        status: 'todo',
      },
      {
        title: 'Make project responsive to all devices',
        description: 'Possimus natus qui nemo nihil laudantium dolore doloremque sapiente minima vero optio quam architecto maiores magni molestias nam, cupiditate praesentium et. Voluptatibus!',
        dueDate: 'Today',
        priority: 'high',
        status: 'doing',
      },
    ]
  },
  {
    title: 'Restaurant Project',
    tasks: [
      {
        title: 'Create Figma prototype',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
        dueDate: 'This Week',
        priority: 'high',
        status: 'todo',
      },
      {
        title: 'Make environments for development and production',
        description: 'Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
        dueDate: 'Today',
        priority: 'low',
        status: 'done',
      },
    ]
  },
]

function getBoards() {
  return boards.map((board) => {
    return board.title;
  })
}

function getBoardsTotal() {
  return boards.length;
}

function getActiveBoard() {
  return activeBoard;
}

function addNewBoard() {
  const input = document.querySelector('#input-create-board-title');  
  const newBoard = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryBoard)(input.value);

  boards.unshift(newBoard);
  console.log(boards);
}

function editBoard() {
  const indexOfActiveBoard = boards.findIndex((board) => board === getActiveBoard());
  const input = document.querySelector('#input-edit-board-title');
  const newBoard = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryBoard)(input.value);

  activeBoard = newBoard; // to display updated board after editing

  boards.splice(indexOfActiveBoard, 1, newBoard);
  console.log(boards[indexOfActiveBoard]);
  console.log(boards);
}

function deleteBoard() {
  const indexOfActiveBoard = boards.findIndex((board) => board === getActiveBoard());
  
  activeBoard = null;

  boards.splice(indexOfActiveBoard, 1);
  console.log(boards);
}

function setActiveBoard(e) {
  const index = e.target.closest('li').getAttribute('data-index');

  activeBoard = boards[index];
}




/***/ }),

/***/ "./src/display-module.js":
/*!*******************************!*\
  !*** ./src/display-module.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearInputFields: () => (/* binding */ clearInputFields),
/* harmony export */   displayActiveBoard: () => (/* binding */ displayActiveBoard),
/* harmony export */   displayBoardEditValues: () => (/* binding */ displayBoardEditValues),
/* harmony export */   displayBoards: () => (/* binding */ displayBoards),
/* harmony export */   displayBoardsTotal: () => (/* binding */ displayBoardsTotal),
/* harmony export */   removeBoards: () => (/* binding */ removeBoards)
/* harmony export */ });
/* harmony import */ var _data_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-handler */ "./src/data-handler.js");


function displayBoards() {
  const ul = document.querySelector('.boards-list > ul');

  (0,_data_handler__WEBPACK_IMPORTED_MODULE_0__.getBoards)().forEach((board, index) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const p = document.createElement('p');
    const img = document.createElement('img');

    li.setAttribute('data-index', `${index}`);

    img.setAttribute('src', 'assets/images/feather.svg');
    img.setAttribute('alt', 'Feather Icon');
    p.textContent = board;

    ul.appendChild(li);
    li.appendChild(button);
    button.appendChild(img)
    button.appendChild(p)

    li.addEventListener('click', (e) => {
      ;(0,_data_handler__WEBPACK_IMPORTED_MODULE_0__.setActiveBoard)(e);
      displayActiveBoard();
    })
  })
}

function displayActiveBoard() {
  const boardHeader = document.querySelector('header > h2');

  const board = (0,_data_handler__WEBPACK_IMPORTED_MODULE_0__.getActiveBoard)();

  if (board === null) {
    boardHeader.textContent = '';
  } else {
    boardHeader.textContent = board.title;
  }
}

function displayBoardsTotal() {
  const span = document.querySelector('.board-total');

  span.textContent = (0,_data_handler__WEBPACK_IMPORTED_MODULE_0__.getBoardsTotal)();
}

function removeBoards() {
  const ul = document.querySelector('.boards-list > ul');
  
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

function clearInputFields() {
  const inputFields = document.querySelectorAll('input');

  inputFields.forEach((input) => {
    input.value = '';
  })
}

function displayBoardEditValues() {
  const input = document.querySelector('.dialog-edit-board input')

  input.value = (0,_data_handler__WEBPACK_IMPORTED_MODULE_0__.getActiveBoard)().title;
}



/***/ }),

/***/ "./src/factory.js":
/*!************************!*\
  !*** ./src/factory.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   factoryBoard: () => (/* binding */ factoryBoard)
/* harmony export */ });
function factoryBoard(title) { 
  return {
    title,
    tasks: []
  }
}



/***/ }),

/***/ "./src/form-handler.js":
/*!*****************************!*\
  !*** ./src/form-handler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formCheck: () => (/* binding */ formCheck),
/* harmony export */   formCheckTasks: () => (/* binding */ formCheckTasks)
/* harmony export */ });
function formCheck(str) {
  const input = document.querySelector(`.dialog-${str} input`);
  const span = document.querySelector(`.dialog-${str} span`)

  if (input.validity.valueMissing) {
    span.textContent = 'This field is required';
    return false;
  } else if (input.validity.tooShort) {
    span.textContent = 'Input is too short';
    return false;
  } else {
    span.textContent = '';
    return true;
  }
}

function formCheckTasks(str) {
  const input = document.querySelector(`.container-input-${str}-title input`);
  const spanInput = document.querySelector(`.container-input-${str}-title span`);
  const textArea = document.querySelector(`.container-input-${str}-description textarea`)
  const spanTextArea = document.querySelector(`.container-input-${str}-description span`)

  console.log(spanTextArea)
  function checkInput() {
    if (input.validity.valueMissing) {
      spanInput.textContent = 'This field is required';
      return false;
    } else if (input.validity.tooShort) {
      spanInput.textContent = 'Input is too short';
      return false;
    } else {
      spanInput.textContent = '';
      return true;
    }
  }

  function checkTextArea() {
    if (textArea.validity.valueMissing) {
      spanTextArea.textContent = 'This field is required';
      return false;
    } else if (textArea.validity.tooShort) {
      spanTextArea.textContent = 'Input is too short';
      return false;
    } else {
      spanTextArea.textContent = '';
      return true;
    }
  }

  console.log(checkInput());
  console.log(checkTextArea());

  if (checkInput() && checkTextArea()) {
    return true;
  } else 
    return false;
}



/***/ }),

/***/ "./src/ui-module.js":
/*!**************************!*\
  !*** ./src/ui-module.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeDialog: () => (/* binding */ closeDialog),
/* harmony export */   exitDialog: () => (/* binding */ exitDialog),
/* harmony export */   showDialog: () => (/* binding */ showDialog)
/* harmony export */ });
function showDialog(str) {
  const dialog = document.querySelector(`.dialog-${str}`);

  dialog.showModal();
}

function closeDialog(str) {
  const dialog = document.querySelector(`.dialog-${str}`);

  dialog.close();
}

function exitDialog(e) {
  const dialog = e.target.closest('dialog');

  dialog.close();
}



/***/ }),

/***/ "./src/fonts/Lato-Regular.ttf":
/*!************************************!*\
  !*** ./src/fonts/Lato-Regular.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d883d540ee2b4de8024.ttf";

/***/ }),

/***/ "./src/fonts/Poppins-Regular.ttf":
/*!***************************************!*\
  !*** ./src/fonts/Poppins-Regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35d26b781dc5fda684cc.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_aside_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/aside.scss */ "./src/styles/aside.scss");
/* harmony import */ var _styles_header_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/header.scss */ "./src/styles/header.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_dialog_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/dialog.scss */ "./src/styles/dialog.scss");
/* harmony import */ var _styles_breakpoints_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/breakpoints.scss */ "./src/styles/breakpoints.scss");
/* harmony import */ var _display_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./display-module */ "./src/display-module.js");
/* harmony import */ var _ui_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui-module */ "./src/ui-module.js");
/* harmony import */ var _data_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data-handler */ "./src/data-handler.js");
/* harmony import */ var _form_handler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-handler */ "./src/form-handler.js");












const buttonsDialogClose = document.querySelectorAll('.button-close-dialog');
const buttonOpenDialogCreateBoard = document.querySelector('.button-open-create-board');
const buttonCreateBoard = document.querySelector('#button-create-board');
const buttonOpenDialogEditBoard = document.querySelector('.button-open-edit-board');
const buttonEditBoard = document.querySelector('#button-edit-board');
const buttonDeleteBoard = document.querySelector('.button-delete-board');
const buttonOpenDialogAddTask = document.querySelector('.button-open-add-task');
const buttonAddTask = document.querySelector('#button-add-task');

buttonAddTask.addEventListener('click', () => {
  (0,_form_handler__WEBPACK_IMPORTED_MODULE_9__.formCheckTasks)('add-task');
})

buttonDeleteBoard.addEventListener('click', () => {
  ;(0,_data_handler__WEBPACK_IMPORTED_MODULE_8__.deleteBoard)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_6__.removeBoards)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_6__.displayBoards)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_6__.displayBoardsTotal)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_6__.clearInputFields)();
  (0,_ui_module__WEBPACK_IMPORTED_MODULE_7__.closeDialog)('edit-board');
  (0,_display_module__WEBPACK_IMPORTED_MODULE_6__.displayActiveBoard)();
})

buttonEditBoard.addEventListener('click', () => {
  if (!(0,_form_handler__WEBPACK_IMPORTED_MODULE_9__.formCheck)('edit-board')) {
    return;
  }
  (0,_data_handler__WEBPACK_IMPORTED_MODULE_8__.editBoard)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_6__.removeBoards)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_6__.displayBoards)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_6__.displayBoardsTotal)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_6__.clearInputFields)();
  (0,_ui_module__WEBPACK_IMPORTED_MODULE_7__.closeDialog)('edit-board');
  (0,_display_module__WEBPACK_IMPORTED_MODULE_6__.displayActiveBoard)();
})

buttonOpenDialogCreateBoard.addEventListener('click', () => {
  ;(0,_ui_module__WEBPACK_IMPORTED_MODULE_7__.showDialog)('create-board');
})

buttonOpenDialogEditBoard.addEventListener('click', () => {
  ;(0,_ui_module__WEBPACK_IMPORTED_MODULE_7__.showDialog)('edit-board');
  (0,_display_module__WEBPACK_IMPORTED_MODULE_6__.displayBoardEditValues)();
})

buttonOpenDialogAddTask.addEventListener('click', () => {
  ;(0,_ui_module__WEBPACK_IMPORTED_MODULE_7__.showDialog)('add-task');
})

buttonsDialogClose.forEach((button) => {
  button.addEventListener('click', (e) => { ;(0,_ui_module__WEBPACK_IMPORTED_MODULE_7__.exitDialog)(e) })
})

buttonCreateBoard.addEventListener('click', (e) => {
  if (!(0,_form_handler__WEBPACK_IMPORTED_MODULE_9__.formCheck)('create-board')) {
    return;
  }
  (0,_display_module__WEBPACK_IMPORTED_MODULE_6__.removeBoards)();
  (0,_data_handler__WEBPACK_IMPORTED_MODULE_8__.addNewBoard)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_6__.displayBoards)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_6__.displayBoardsTotal)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_6__.clearInputFields)();
  (0,_ui_module__WEBPACK_IMPORTED_MODULE_7__.closeDialog)('create-board');
})

;(0,_display_module__WEBPACK_IMPORTED_MODULE_6__.displayBoards)();
(0,_display_module__WEBPACK_IMPORTED_MODULE_6__.displayBoardsTotal)();

console.log('Hello world')
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLDhIQUE0QztBQUN4Riw0Q0FBNEMsb0lBQStDO0FBQzNGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDZIQUE2SCxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sWUFBWSxLQUFLLFdBQVcsT0FBTyxrQkFBa0IsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxTQUFTLFdBQVcsVUFBVSxPQUFPLFlBQVksS0FBSyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFN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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sOEhBQThILFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxZQUFZLEtBQUssV0FBVyxPQUFPLGtCQUFrQixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLFNBQVMsV0FBVyxVQUFVLE9BQU8sWUFBWSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsVUFBVSxNQUFNLE9BQU8sVUFBVSxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsWUFBWSxXQUFXLE1BQU0sT0FBTyxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxZQUFZLFlBQVksVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLE1BQU0sT0FBTyxhQUFhLGNBQWMsT0FBTyxPQUFPLFVBQVUsTUFBTSxPQUFPLFdBQVcsWUFBWSxVQUFVLE1BQU0sT0FBTyxVQUFVLFdBQVcsVUFBVSxNQUFNLE9BQU8sV0FBVyxhQUFhLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLE1BQU0sT0FBTyxVQUFVLE1BQU0sT0FBTyxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE9BQU8sV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFlBQVksWUFBWSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLGFBQWEsY0FBYyxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsYUFBYSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLGFBQWEsWUFBWSxXQUFXLFlBQVksV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLGFBQWEsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcs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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNEhBQTRILFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxZQUFZLEtBQUssV0FBVyxPQUFPLGtCQUFrQixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLFNBQVMsV0FBVyxVQUFVLE9BQU8sWUFBWSxLQUFLLFdBQVcs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LEVBQUUsNkRBQVk7QUFDZCxFQUFFLDhEQUFhO0FBQ2YsRUFBRSxtRUFBa0I7QUFDcEIsRUFBRSxpRUFBZ0I7QUFDbEIsRUFBRSx1REFBVztBQUNiLEVBQUUsbUVBQWtCO0FBQ3BCLENBQUM7O0FBRUQ7QUFDQSxFQUFFLHVEQUFVO0FBQ1osQ0FBQzs7QUFFRDtBQUNBLEVBQUUsdURBQVU7QUFDWixFQUFFLHVFQUFzQjtBQUN4QixDQUFDOztBQUVEO0FBQ0EsRUFBRSx1REFBVTtBQUNaLENBQUM7O0FBRUQ7QUFDQSw0Q0FBNEMsdURBQVUsS0FBSztBQUMzRCxDQUFDOztBQUVEO0FBQ0EsT0FBTyx3REFBUztBQUNoQjtBQUNBO0FBQ0EsRUFBRSw2REFBWTtBQUNkLEVBQUUsMERBQVc7QUFDYixFQUFFLDhEQUFhO0FBQ2YsRUFBRSxtRUFBa0I7QUFDcEIsRUFBRSxpRUFBZ0I7QUFDbEIsRUFBRSx1REFBVztBQUNiLENBQUM7O0FBRUQsK0RBQWE7QUFDYixtRUFBa0I7O0FBRWxCLDBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMvYXNpZGUuc2NzcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy9icmVha3BvaW50cy5zY3NzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzL2RpYWxvZy5zY3NzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzL2hlYWRlci5zY3NzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy9hc2lkZS5zY3NzPzI1MTAiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMvYnJlYWtwb2ludHMuc2Nzcz84NjRmIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzL2RpYWxvZy5zY3NzPzM3NjAiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMvaGVhZGVyLnNjc3M/MzI5MCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzPzRjMzciLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RhdGEtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Rpc3BsYXktbW9kdWxlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Zvcm0taGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0xhdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4vKiAtLS0gQ1NTIFJlc2V0IC0tLSAqL1xuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbmJ1dHRvbixcbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuXG4vKiAtLS0gQ3VzdG9tIENTUyAtLS0gKi9cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbmJvZHkgI2NvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4MHB4IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XG59XG5cbmJvZHkgI2NvbnRlbnQgYXNpZGUge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczNjNlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNDc0NzQ3O1xuICBncmlkLXJvdzogMS8zO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEuNWZyIDFmcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5ib2R5ICNjb250ZW50IGFzaWRlIGRpdjpmaXJzdC1jaGlsZCAudGl0bGUge1xuICBjb2xvcjogI2YwZjBmMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMjBweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgZGl2OmZpcnN0LWNoaWxkIC50aXRsZSBpbWcge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xufVxuYm9keSAjY29udGVudCBhc2lkZSBkaXY6Zmlyc3QtY2hpbGQgLnRpdGxlIGgxIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5ib2R5ICNjb250ZW50IGFzaWRlIGRpdjpmaXJzdC1jaGlsZCAuZHVlIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgZGl2OmZpcnN0LWNoaWxkIC5kdWUgbGkgaW1nIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgZGl2OmZpcnN0LWNoaWxkIC5kdWUgbGkgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2YwZjBmMDtcbiAgcGFkZGluZzogMDtcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgZGl2OmZpcnN0LWNoaWxkIC5ib2FyZHMtbGlzdCBoMyB7XG4gIGNvbG9yOiAjOWU5ZTllO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIG1hcmdpbjogMzBweCAwcHggMTBweCAwcHg7XG59XG5ib2R5ICNjb250ZW50IGFzaWRlIGRpdjpmaXJzdC1jaGlsZCAuYm9hcmRzLWxpc3QgdWwgbGkge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgZGl2OmZpcnN0LWNoaWxkIC5ib2FyZHMtbGlzdCB1bCBsaSBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgZGl2OmZpcnN0LWNoaWxkIC5ib2FyZHMtbGlzdCB1bCBsaSBidXR0b24gcCB7XG4gIGNvbG9yOiAjZjBmMGYwO1xufVxuYm9keSAjY29udGVudCBhc2lkZSBkaXY6Zmlyc3QtY2hpbGQgLmJvYXJkcy1saXN0IC5idXR0b24tb3Blbi1jcmVhdGUtYm9hcmQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogNXB4IDhweDtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuYm9keSAjY29udGVudCBhc2lkZSBkaXY6Zmlyc3QtY2hpbGQgLmJvYXJkcy1saXN0IC5idXR0b24tb3Blbi1jcmVhdGUtYm9hcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTJlO1xufVxuYm9keSAjY29udGVudCBhc2lkZSBkaXY6Zmlyc3QtY2hpbGQgLmJvYXJkcy1saXN0IC5idXR0b24tb3Blbi1jcmVhdGUtYm9hcmQgaW1nIHtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgZGl2OmZpcnN0LWNoaWxkIC5ib2FyZHMtbGlzdCAuYnV0dG9uLW9wZW4tY3JlYXRlLWJvYXJkIHAge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgY29sb3I6ICM4NTcwZmM7XG59XG5ib2R5ICNjb250ZW50IGFzaWRlIGRpdjpsYXN0LWNoaWxkIHtcbiAgYWxpZ24tc2VsZjogZW5kO1xuICBkaXNwbGF5OiBncmlkO1xufVxuYm9keSAjY29udGVudCBhc2lkZSBkaXY6bGFzdC1jaGlsZCAubmlnaHQtbW9kZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCA1NXB4IDI1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgZGl2Omxhc3QtY2hpbGQgLm5pZ2h0LW1vZGUgaW1nIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgZGl2Omxhc3QtY2hpbGQgLm5pZ2h0LW1vZGUgaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogIzllOWU5ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgZGl2Omxhc3QtY2hpbGQgLm5pZ2h0LW1vZGUgaW5wdXQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5ib2R5ICNjb250ZW50IGFzaWRlIGRpdjpsYXN0LWNoaWxkIC5uaWdodC1tb2RlIGlucHV0OmNoZWNrZWQ6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgZGl2Omxhc3QtY2hpbGQgLm5pZ2h0LW1vZGUgaW5wdXQ6Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQ6ICM4NTcwZmM7XG59XG5ib2R5ICNjb250ZW50IGFzaWRlIGRpdjpsYXN0LWNoaWxkIC5oaWRlIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQ2O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiAyNXB4IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgZGl2Omxhc3QtY2hpbGQgLmhpZGU6aG92ZXIgaW1nIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xufVxuYm9keSAjY29udGVudCBhc2lkZSBkaXY6bGFzdC1jaGlsZCAuaGlkZSBpbWcge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgZGl2Omxhc3QtY2hpbGQgLmhpZGUgcCB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiAjZjBmMGYwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuYm9keSAjY29udGVudCBhc2lkZSBkaXY6bGFzdC1jaGlsZCAuZ2l0aHViIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgZGl2Omxhc3QtY2hpbGQgLmdpdGh1YiBhIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMC42NXJlbTtcbiAgY29sb3I6ICNmMGYwZjA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggMTIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgZGl2Omxhc3QtY2hpbGQgLmdpdGh1YiBhIGltZyB7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5ib2R5ICNjb250ZW50IGFzaWRlIGRpdjpsYXN0LWNoaWxkIC5naXRodWIgYTpob3ZlciBwIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgZGl2Omxhc3QtY2hpbGQgLmdpdGh1YiBhOmhvdmVyOmFmdGVyIHtcbiAgY29udGVudDogXCJDbGljayB0byBzZWUgY29kZVwiO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2FzaWRlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBMkJBO0VBQ0UsbUJBQUE7RUFDQSwrREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUMxQkY7QUQ2QkE7RUFDRSxzQkFBQTtFQUNBLCtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQzNCRjtBRDhCQSxzQkFBQTtBQUNBO0VBQ0Usc0JBQUE7QUM1QkY7O0FEK0JBOzs7Ozs7Ozs7Ozs7O0VBYUEsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQzVCQTs7QUQrQkE7Ozs7RUFJQSxvQkFBQTtFQUNBLGVBQUE7QUM1QkE7O0FEK0JBLHVCQUFBO0FBRUE7RUFDRSw2SUFBQTtFQUNBLGlCQUFBO0FDN0JGO0FEOEJFO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUM1QkY7O0FBbkRJO0VBQ0UsYUFBQTtFQUNBLHlCRE5PO0VDT1AsK0JBQUE7RUFFQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7QUFxRE47QUFuRFE7RUFDRSxjRFhHO0VDWUgsaUJBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFvRFY7QUFuRFU7RURYUixZQ1ltQztFRFhuQyxXQ1dtQztBQXNEckM7QUFwRFU7RUFDRSxpQkFBQTtBQXNEWjtBQWxEVTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBbURaO0FBbERZO0VEMUJWLFlDMkJxQztFRDFCckMsV0MwQnFDO0FBcUR2QztBQW5EWTtFRHhCVixZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VDd0JZLGNEdENEO0VDdUNDLFVBQUE7QUF1RGQ7QUFsRFU7RUFDRSxjRDVDQTtFQzZDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQW9EWjtBQWpEWTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFtRGQ7QUFsRGM7RUQzQ1osWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQzJDYyxVQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQXFEaEI7QUFwRGdCO0VBQ0UsY0QvREw7QUNxSGI7QUFqRFU7RUR4RFIsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQ3dEVSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUVBLG9CQUFBO0FBbURaO0FBbERZO0VBQ0UseUJEcEZDO0FDd0lmO0FBbERZO0VENUVWLFlDNkVxQztFRDVFckMsV0M0RXFDO0FBcUR2QztBQW5EWTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRDNGQztBQ2dKZjtBQWhETTtFQUNFLGVBQUE7RUFFQSxhQUFBO0FBaURSO0FBaERRO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQWtEVjtBQWpEVTtFRGxHUixZQ21HbUM7RURsR25DLFdDa0dtQztBQW9EckM7QUFsRFU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CRGpIQTtFQ2tIQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7QUFvRFo7QUFuRFk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FBcURkO0FBbkRZO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtBQXFEZDtBQW5EWTtFQUNFLG1CRHpJQztBQzhMZjtBQWpEUTtFRC9ITixZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VDK0hRLHlCRDlJRztFQytJSCxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFHQSxhQUFBO0VBQ0EsbUJBQUE7QUFtRFY7QUFsRFU7RUFDRSwyQkFBQTtBQW9EWjtBQWxEVTtFQUNFLG9CQUFBO0VEbEpWLFlDbUptQztFRGxKbkMsV0NrSm1DO0FBcURyQztBQWxEVTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0RsS0M7RUNtS0QsZ0JBQUE7QUFvRFo7QUFqRFE7RUFDRSxtQkFBQTtBQW1EVjtBQWxEVTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRDNLQztFQzRLRCxxQkFBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFtRFo7QUFsRFk7RUFDSSxVQUFBO0VEN0tkLFlDOEt1QztFRDdLdkMsV0M2S3VDO0FBcUR6QztBQW5EWTtFQUNJLGFBQUE7QUFxRGhCO0FBbkRZO0VBQ0ksNEJBQUE7QUFxRGhCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiR0aGVtZS1kYXJrOiAjMzczNjNlO1xcbiR0aGVtZS1kYXJrZXI6ICMyOTI5MmU7XFxuJHRoZW1lLXB1cnBsZTogIzg1NzBmYztcXG4kdGhlbWUtZ3JheTogIzQxNDE0NjtcXG4kZm9udC13aGl0ZTogI2YwZjBmMDtcXG4kZm9udC1ncmF5OiAjOWU5ZTllO1xcbiRib3JkZXItZGFyazogIzQ3NDc0NztcXG4kY2FyZC1zaGFkb3c6ICMxYTFhMWE7XFxuXFxuXFxuQG1peGluIGljb24tc2l6ZSgkcGl4ZWwpIHtcXG4gIGhlaWdodDogJHBpeGVsO1xcbiAgd2lkdGg6ICRwaXhlbDtcXG59XFxuXFxuQG1peGluIGJ1dHRvbi1zdHlsaW5nIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWl4aW4gZmxleC1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0xhdG8nO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL0xhdG8tUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICBzcmM6IHVybCgnLi4vZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi8qIC0tLSBDU1MgUmVzZXQgLS0tICovXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbm1hcmdpbjogMDtcXG5wYWRkaW5nOiAwO1xcbmJvcmRlcjogMDtcXG5mb250LXNpemU6IDEwMCU7XFxuZm9udDogaW5oZXJpdDtcXG52ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbmZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbmZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLyogLS0tIEN1c3RvbSBDU1MgLS0tICovXFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4MHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyO1xcbiAgfVxcbn1cIixcIkB1c2UgJ2luZGV4JztcXG5cXG5ib2R5IHtcXG4gICNjb250ZW50IHtcXG4gICAgYXNpZGUge1xcbiAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5kZXguJHRoZW1lLWRhcms7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgaW5kZXguJGJvcmRlci1kYXJrO1xcbiAgXFxuICAgICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVmciAxZnI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgZGl2OmZpcnN0LWNoaWxkIHtcXG4gICAgICAgIC50aXRsZSB7XFxuICAgICAgICAgIGNvbG9yOiBpbmRleC4kZm9udC13aGl0ZTtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgIG1hcmdpbjogMjBweCAwcHg7XFxuXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBpbmRleC5pY29uLXNpemUoMjhweCk7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgaDEge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuZHVlIHtcXG4gICAgICAgICAgbGkge1xcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XFxuXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgQGluY2x1ZGUgaW5kZXguaWNvbi1zaXplKDIwcHgpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgICAgQGluY2x1ZGUgaW5kZXguYnV0dG9uLXN0eWxpbmcoKTtcXG4gICAgICAgICAgICAgIGNvbG9yOiBpbmRleC4kZm9udC13aGl0ZTtcXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuYm9hcmRzLWxpc3Qge1xcbiAgICAgICAgICBoMyB7XFxuICAgICAgICAgICAgY29sb3I6IGluZGV4LiRmb250LWdyYXk7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG4gICAgICAgICAgICBtYXJnaW46IDMwcHggMHB4IDEwcHggMHB4O1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIHVsIHtcXG4gICAgICAgICAgICBsaSB7XFxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcXG4gICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBpbmRleC5idXR0b24tc3R5bGluZygpO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcblxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOztcXG4gICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBwIHtcXG4gICAgICAgICAgICAgICAgICBjb2xvcjogaW5kZXguJGZvbnQtd2hpdGU7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgLmJ1dHRvbi1vcGVuLWNyZWF0ZS1ib2FyZCB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgaW5kZXguYnV0dG9uLXN0eWxpbmcoKTtcXG4gICAgICAgICAgICBtYXJnaW46IDVweCA4cHg7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDs7XFxuXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogMTBweDtcXG5cXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluZGV4LiR0aGVtZS1kYXJrZXI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICBAaW5jbHVkZSBpbmRleC5pY29uLXNpemUoMThweCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHAge1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICAgICAgICAgICAgY29sb3I6IGluZGV4LiR0aGVtZS1wdXJwbGU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICAgIGRpdjpsYXN0LWNoaWxkIHtcXG4gICAgICAgIGFsaWduLXNlbGY6IGVuZDtcXG5cXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAubmlnaHQtbW9kZSB7XFxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCA1NXB4IDI1cHg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBpbmRleC5pY29uLXNpemUoMjVweCk7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgaW5wdXQge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICB3aWR0aDogNDVweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XFxuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogaW5kZXguJGZvbnQtZ3JheTtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiKDAgMCAwIC8gNTAlKTtcXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICAgICAgICB3aWR0aDogMjJweDtcXG4gICAgICAgICAgICAgIGhlaWdodDogMjJweDtcXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgJjpjaGVja2VkOjpiZWZvcmUge1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgJjpjaGVja2VkIHtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGluZGV4LiR0aGVtZS1wdXJwbGU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuaGlkZSB7XFxuICAgICAgICAgIEBpbmNsdWRlIGluZGV4LmJ1dHRvbi1zdHlsaW5nKCk7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluZGV4LiR0aGVtZS1ncmF5O1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgICAgICAgbWFyZ2luOiAyNXB4IDBweDtcXG5cXG5cXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgJjpob3ZlciBpbWd7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpXFxuICAgICAgICAgIH1cXG4gICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gICAgICAgICAgICBAaW5jbHVkZSBpbmRleC5pY29uLXNpemUoMjVweCk7XFxuXFxuICAgICAgICAgIH1cXG4gICAgICAgICAgcCB7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgICAgICAgICBjb2xvcjogaW5kZXguJGZvbnQtd2hpdGU7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmdpdGh1YiB7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgICAgICAgIGEge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcXG4gICAgICAgICAgICBjb2xvcjogaW5kZXguJGZvbnQtd2hpdGU7XFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgXFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggMTIwcHg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgaW5kZXguaWNvbi1zaXplKDIwcHgpXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICY6aG92ZXIgcCB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICY6aG92ZXI6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcXFwiQ2xpY2sgdG8gc2VlIGNvZGVcXFwiO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIGJvZHkge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2JyZWFrcG9pbnRzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBTUE7RUFFQTtJQUNFLGlCQUFBO0lBQ0EsZ0NBQUE7RUFOQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCkgeyB9XFxuIFxcbi8vIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7IH1cXG4gXFxuLy8gQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNDgwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkgeyB9XFxuIFxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbn1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9MYXRvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLyogLS0tIENTUyBSZXNldCAtLS0gKi9cbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5idXR0b24sXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLyogLS0tIEN1c3RvbSBDU1MgLS0tICovXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5ib2R5ICNjb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyODBweCAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyO1xufVxuXG5ib2R5ICNjb250ZW50IC5kaWFsb2ctY3JlYXRlLWJvYXJkLFxuYm9keSAjY29udGVudCAuZGlhbG9nLWVkaXQtYm9hcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczNjNlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjVweDtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1jcmVhdGUtYm9hcmQ6OmJhY2tkcm9wLFxuYm9keSAjY29udGVudCAuZGlhbG9nLWVkaXQtYm9hcmQ6OmJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1jcmVhdGUtYm9hcmQgZGl2LFxuYm9keSAjY29udGVudCAuZGlhbG9nLWVkaXQtYm9hcmQgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWNyZWF0ZS1ib2FyZCBkaXYgaDYsXG5ib2R5ICNjb250ZW50IC5kaWFsb2ctZWRpdC1ib2FyZCBkaXYgaDYge1xuICBjb2xvcjogI2YwZjBmMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWNyZWF0ZS1ib2FyZCBkaXYgZGl2LFxuYm9keSAjY29udGVudCAuZGlhbG9nLWVkaXQtYm9hcmQgZGl2IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTVweDtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1jcmVhdGUtYm9hcmQgZGl2IGRpdiBidXR0b24sXG5ib2R5ICNjb250ZW50IC5kaWFsb2ctZWRpdC1ib2FyZCBkaXYgZGl2IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTQxNDY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1jcmVhdGUtYm9hcmQgZGl2IGRpdiBidXR0b246aG92ZXIsXG5ib2R5ICNjb250ZW50IC5kaWFsb2ctZWRpdC1ib2FyZCBkaXYgZGl2IGJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxMjAlKTtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1jcmVhdGUtYm9hcmQgZGl2IGRpdiBidXR0b24gaW1nLFxuYm9keSAjY29udGVudCAuZGlhbG9nLWVkaXQtYm9hcmQgZGl2IGRpdiBidXR0b24gaW1nIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1jcmVhdGUtYm9hcmQgZm9ybSxcbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1lZGl0LWJvYXJkIGZvcm0ge1xuICBkaXNwbGF5OiBncmlkO1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWNyZWF0ZS1ib2FyZCBmb3JtIGRpdiBsYWJlbCxcbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1lZGl0LWJvYXJkIGZvcm0gZGl2IGxhYmVsIHtcbiAgY29sb3I6ICNmMGYwZjA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW46IDRweDtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1jcmVhdGUtYm9hcmQgZm9ybSBkaXYgc3BhbixcbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1lZGl0LWJvYXJkIGZvcm0gZGl2IHNwYW4ge1xuICBjb2xvcjogI2ZmNWM1YztcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG1hcmdpbjogNHB4O1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWNyZWF0ZS1ib2FyZCBmb3JtIGlucHV0LFxuYm9keSAjY29udGVudCAuZGlhbG9nLWVkaXQtYm9hcmQgZm9ybSBpbnB1dCB7XG4gIGNvbG9yOiAjZjBmMGYwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczNjNlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDE0MTQ2O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNhcmV0LWNvbG9yOiAjZjBmMGYwO1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctY3JlYXRlLWJvYXJkIGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxuYm9keSAjY29udGVudCAuZGlhbG9nLWVkaXQtYm9hcmQgZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgcGFkZGluZzogNXB4O1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWNyZWF0ZS1ib2FyZCBmb3JtIGlucHV0OmZvY3VzLFxuYm9keSAjY29udGVudCAuZGlhbG9nLWVkaXQtYm9hcmQgZm9ybSBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctY3JlYXRlLWJvYXJkIGZvcm0gYnV0dG9uLFxuYm9keSAjY29udGVudCAuZGlhbG9nLWVkaXQtYm9hcmQgZm9ybSBidXR0b24ge1xuICBjb2xvcjogI2YwZjBmMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NTcwZmM7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1jcmVhdGUtYm9hcmQgZm9ybSBidXR0b246aG92ZXIsXG5ib2R5ICNjb250ZW50IC5kaWFsb2ctZWRpdC1ib2FyZCBmb3JtIGJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxMjAlKTtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1hZGQtdGFzayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzM2M2U7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWFkZC10YXNrOjpiYWNrZHJvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjY7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctYWRkLXRhc2sgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWFkZC10YXNrIGRpdiBoNiB7XG4gIGNvbG9yOiAjZjBmMGYwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctYWRkLXRhc2sgZGl2IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTVweDtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1hZGQtdGFzayBkaXYgZGl2IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTQxNDY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1hZGQtdGFzayBkaXYgZGl2IGJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxMjAlKTtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1hZGQtdGFzayBkaXYgZGl2IGJ1dHRvbiBpbWcge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWFkZC10YXNrIGZvcm0gdWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDEwcHg7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctYWRkLXRhc2sgZm9ybSB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctYWRkLXRhc2sgZm9ybSB1bCBsaSBkaXYgbGFiZWwge1xuICBjb2xvcjogI2YwZjBmMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG1hcmdpbjogNHB4O1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWFkZC10YXNrIGZvcm0gdWwgbGkgZGl2IHNwYW4ge1xuICBjb2xvcjogI2ZmNWM1YztcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG1hcmdpbjogNHB4O1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWFkZC10YXNrIGZvcm0gdWwgbGkgaW5wdXQge1xuICBjb2xvcjogI2YwZjBmMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3MzYzZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQxNDE0NjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjYXJldC1jb2xvcjogI2YwZjBmMDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWFkZC10YXNrIGZvcm0gdWwgbGkgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHBhZGRpbmc6IDVweDtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1hZGQtdGFzayBmb3JtIHVsIGxpIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1hZGQtdGFzayBmb3JtIHVsIGxpIHRleHRhcmVhIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiAjZjBmMGYwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczNjNlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDE0MTQ2O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNhcmV0LWNvbG9yOiAjZjBmMGYwO1xuICBwYWRkaW5nOiAxMHB4O1xuICByZXNpemU6IHZlcnRpY2FsO1xuICB3aWR0aDogMTAwJTtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1hZGQtdGFzayBmb3JtIHVsIGxpIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwYWRkaW5nOiA1cHg7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctYWRkLXRhc2sgZm9ybSB1bCBsaSB0ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctYWRkLXRhc2sgZm9ybSB1bCBsaSBzZWxlY3Qge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6ICNmMGYwZjA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzM2M2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0MTQxNDY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1hZGQtdGFzayBmb3JtIHVsIGxpIHNlbGVjdDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctYWRkLXRhc2sgZm9ybSB1bCBsaSBidXR0b24ge1xuICBjb2xvcjogI2YwZjBmMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NTcwZmM7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctYWRkLXRhc2sgZm9ybSB1bCBsaSBidXR0b246aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTIwJSk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZGlhbG9nLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBMkJBO0VBQ0UsbUJBQUE7RUFDQSwrREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUMxQkY7QUQ2QkE7RUFDRSxzQkFBQTtFQUNBLCtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQzNCRjtBRDhCQSxzQkFBQTtBQUNBO0VBQ0Usc0JBQUE7QUM1QkY7O0FEK0JBOzs7Ozs7Ozs7Ozs7O0VBYUEsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQzVCQTs7QUQrQkE7Ozs7RUFJQSxvQkFBQTtFQUNBLGVBQUE7QUM1QkE7O0FEK0JBLHVCQUFBO0FBRUE7RUFDRSw2SUFBQTtFQUNBLGlCQUFBO0FDN0JGO0FEOEJFO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUM1QkY7O0FBbkRJOztFQUVFLHlCRE5PO0VDT1AsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFzRE47QUFwRE07O0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FBdURSO0FBckRNOztFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBd0RSO0FBdkRROztFQUNFLGNEaEJHO0VDaUJILGlCQUFBO0VBQ0EsaUJBQUE7QUEwRFY7QUF4RFE7O0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUEyRFY7QUExRFU7O0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0VBQ0EseUJEM0JDO0VDNEJELG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxvQkFBQTtBQTJEWjtBQTFEWTs7RUFDRSx3QkFBQTtBQTZEZDtBQTNEWTs7RUQvQlYsWUNnQ3FDO0VEL0JyQyxXQytCcUM7QUErRHZDO0FBMURNOztFQUNFLGFBQUE7QUE2RFI7QUEzRFU7O0VBQ0UsY0RoREM7RUNpREQsaUJBQUE7RUFDQSxXQUFBO0FBOERaO0FBNURVOztFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUErRFo7QUEzRFE7O0VBQ0UsY0Q1REc7RUM2REgseUJEakVHO0VDa0VILHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkRoRUc7RUNpRUgsWUFBQTtFQUNBLGFBQUE7QUE4RFY7QUE3RFU7O0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBZ0VaO0FBOURVOztFQUNFLGFBQUE7QUFpRVo7QUE5RFE7O0VBQ0UsY0Q1RUc7RUM2RUgsaUJBQUE7RUFDQSx5QkRoRks7RUNpRkwsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxvQkFBQTtBQWdFVjtBQS9EVTs7RUFDRSx3QkFBQTtBQWtFWjtBQTdESTtFQUNFLHlCRGpHTztFQ2tHUCxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQStETjtBQTdETTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQStEUjtBQTdETTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBK0RSO0FBOURRO0VBQ0UsY0QzR0c7RUM0R0gsaUJBQUE7RUFDQSxpQkFBQTtBQWdFVjtBQTlEUTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBZ0VWO0FBL0RVO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0VBQ0EseUJEdEhDO0VDdUhELG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxvQkFBQTtBQStEWjtBQTlEWTtFQUNFLHdCQUFBO0FBZ0VkO0FBOURZO0VEMUhWLFlDMkhxQztFRDFIckMsV0MwSHFDO0FBaUV2QztBQTNEUTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBNkRWO0FBNURVO0VBQ0UsZ0JBQUE7QUE4RFo7QUE1RGM7RUFDRSxjRC9JSDtFQ2dKRyxpQkFBQTtFQUNBLFdBQUE7QUE4RGhCO0FBNURjO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQThEaEI7QUEzRFk7RUFDRSxjRDFKRDtFQzJKQyx5QkQvSkQ7RUNnS0MseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CRDlKRDtFQytKQyxZQUFBO0VBQ0EsYUFBQTtBQTZEZDtBQTVEYztFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQThEaEI7QUE1RGM7RUFDRSxhQUFBO0FBOERoQjtBQTNEWTtFQUNFLGlCQUFBO0VBQ0EsY0QzS0Q7RUM0S0MseUJEaExEO0VDaUxDLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkQvS0Q7RUNnTEMsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQTZEZDtBQTVEYztFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQThEaEI7QUE1RGM7RUFDRSxhQUFBO0FBOERoQjtBQTNEWTtFQUNFLGlCQUFBO0VBQ0EsY0Q3TEQ7RUM4TEMseUJEbE1EO0VDbU1DLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUE2RGQ7QUE1RGM7RUFDRSxhQUFBO0FBOERoQjtBQTNEWTtFQUNFLGNEek1EO0VDME1DLGlCQUFBO0VBQ0EseUJEN01DO0VDOE1ELFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLG9CQUFBO0FBNERkO0FBM0RjO0VBQ0Usd0JBQUE7QUE2RGhCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiR0aGVtZS1kYXJrOiAjMzczNjNlO1xcbiR0aGVtZS1kYXJrZXI6ICMyOTI5MmU7XFxuJHRoZW1lLXB1cnBsZTogIzg1NzBmYztcXG4kdGhlbWUtZ3JheTogIzQxNDE0NjtcXG4kZm9udC13aGl0ZTogI2YwZjBmMDtcXG4kZm9udC1ncmF5OiAjOWU5ZTllO1xcbiRib3JkZXItZGFyazogIzQ3NDc0NztcXG4kY2FyZC1zaGFkb3c6ICMxYTFhMWE7XFxuXFxuXFxuQG1peGluIGljb24tc2l6ZSgkcGl4ZWwpIHtcXG4gIGhlaWdodDogJHBpeGVsO1xcbiAgd2lkdGg6ICRwaXhlbDtcXG59XFxuXFxuQG1peGluIGJ1dHRvbi1zdHlsaW5nIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWl4aW4gZmxleC1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0xhdG8nO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL0xhdG8tUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICBzcmM6IHVybCgnLi4vZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi8qIC0tLSBDU1MgUmVzZXQgLS0tICovXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbm1hcmdpbjogMDtcXG5wYWRkaW5nOiAwO1xcbmJvcmRlcjogMDtcXG5mb250LXNpemU6IDEwMCU7XFxuZm9udDogaW5oZXJpdDtcXG52ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbmZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbmZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLyogLS0tIEN1c3RvbSBDU1MgLS0tICovXFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4MHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyO1xcbiAgfVxcbn1cIixcIkB1c2UgJ2luZGV4JztcXG5cXG5ib2R5IHtcXG4gICNjb250ZW50IHtcXG4gICAgLmRpYWxvZy1jcmVhdGUtYm9hcmQsXFxuICAgIC5kaWFsb2ctZWRpdC1ib2FyZCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5kZXguJHRoZW1lLWRhcms7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7O1xcbiAgICAgIHBhZGRpbmc6IDEwcHggMjVweDtcXG5cXG4gICAgICAmOjpiYWNrZHJvcCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgICB9XFxuICAgICAgZGl2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgaDYge1xcbiAgICAgICAgICBjb2xvcjogaW5kZXguJGZvbnQtd2hpdGU7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIGRpdiB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGdhcDogMTVweDtcXG4gICAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5kZXguJHRoZW1lLWdyYXk7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTIwJSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICBAaW5jbHVkZSBpbmRleC5pY29uLXNpemUoMjBweCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICAgIGZvcm0ge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGRpdiB7XFxuICAgICAgICAgIGxhYmVsIHtcXG4gICAgICAgICAgICBjb2xvcjogaW5kZXguJGZvbnQtd2hpdGU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgICAgICAgbWFyZ2luOiA0cHg7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgY29sb3I6ICNmZjVjNWM7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgICAgICAgbWFyZ2luOiA0cHg7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGlucHV0IHtcXG4gICAgICAgICAgY29sb3I6IGluZGV4LiRmb250LXdoaXRlO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRleC4kdGhlbWUtZGFyaztcXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgaW5kZXguJHRoZW1lLWdyYXk7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgY2FyZXQtY29sb3I6IGluZGV4LiRmb250LXdoaXRlO1xcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgJjpmb2N1cyB7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgY29sb3I6IGluZGV4LiRmb250LXdoaXRlO1xcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5kZXguJHRoZW1lLXB1cnBsZTtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbiAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTIwJSk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmRpYWxvZy1hZGQtdGFzayB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5kZXguJHRoZW1lLWRhcms7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7O1xcbiAgICAgIHBhZGRpbmc6IDEwcHggMjVweDtcXG5cXG4gICAgICAmOjpiYWNrZHJvcCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgICB9XFxuICAgICAgZGl2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgaDYge1xcbiAgICAgICAgICBjb2xvcjogaW5kZXguJGZvbnQtd2hpdGU7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIGRpdiB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGdhcDogMTVweDtcXG4gICAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5kZXguJHRoZW1lLWdyYXk7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTIwJSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICBAaW5jbHVkZSBpbmRleC5pY29uLXNpemUoMjBweCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICAgIGZvcm0ge1xcbiAgICAgICAgdWwge1xcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgIGxpIHtcXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgICAgIGRpdiB7XFxuICAgICAgICAgICAgICBsYWJlbCB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBpbmRleC4kZm9udC13aGl0ZTtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgICAgICAgICAgIG1hcmdpbjogNHB4O1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY1YzVjO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA0cHg7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGlucHV0IHtcXG4gICAgICAgICAgICAgIGNvbG9yOiBpbmRleC4kZm9udC13aGl0ZTtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluZGV4LiR0aGVtZS1kYXJrO1xcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgaW5kZXguJHRoZW1lLWdyYXk7XFxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICBjYXJldC1jb2xvcjogaW5kZXguJGZvbnQtd2hpdGU7XFxuICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgJjpmb2N1cyB7XFxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIHRleHRhcmVhIHtcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICAgICAgICAgICAgY29sb3I6IGluZGV4LiRmb250LXdoaXRlO1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5kZXguJHRoZW1lLWRhcms7XFxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBpbmRleC4kdGhlbWUtZ3JheTtcXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgIGNhcmV0LWNvbG9yOiBpbmRleC4kZm9udC13aGl0ZTtcXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAgICAgICByZXNpemU6IHZlcnRpY2FsO1xcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAmOmZvY3VzIHtcXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgc2VsZWN0IHtcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgICAgICAgICAgY29sb3I6IGluZGV4LiRmb250LXdoaXRlO1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5kZXguJHRoZW1lLWRhcms7XFxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBpbmRleC4kdGhlbWUtZ3JheTtcXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICY6Zm9jdXMge1xcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgICAgY29sb3I6IGluZGV4LiRmb250LXdoaXRlO1xcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRleC4kdGhlbWUtcHVycGxlO1xcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XFxuICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIFxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICAgICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyMCUpO1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0xhdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4vKiAtLS0gQ1NTIFJlc2V0IC0tLSAqL1xuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbmJ1dHRvbixcbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuXG4vKiAtLS0gQ3VzdG9tIENTUyAtLS0gKi9cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbmJvZHkgI2NvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4MHB4IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XG59XG5cbmJvZHkgI2NvbnRlbnQgaGVhZGVyIHtcbiAgcGFkZGluZzogMHB4IDM1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzM2M2U7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDc0NzQ3O1xuICBncmlkLWNvbHVtbjogMjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuYm9keSAjY29udGVudCBoZWFkZXIgaDIge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgY29sb3I6ICNmMGYwZjA7XG59XG5ib2R5ICNjb250ZW50IGhlYWRlciBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG59XG5ib2R5ICNjb250ZW50IGhlYWRlciBkaXYgYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJvZHkgI2NvbnRlbnQgaGVhZGVyIGRpdiBidXR0b246aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTIwJSk7XG59XG5ib2R5ICNjb250ZW50IGhlYWRlciBkaXYgYnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoOTAlKTtcbn1cbmJvZHkgI2NvbnRlbnQgaGVhZGVyIGRpdiAuYnV0dG9uLW9wZW4tYWRkLXRhc2sge1xuICBwYWRkaW5nOiAwcHggMjJweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg1NzBmYztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG59XG5ib2R5ICNjb250ZW50IGhlYWRlciBkaXYgLmJ1dHRvbi1vcGVuLWFkZC10YXNrIHAge1xuICBjb2xvcjogI2YwZjBmMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbmJvZHkgI2NvbnRlbnQgaGVhZGVyIGRpdiAuYnV0dG9uLW9wZW4tYWRkLXRhc2sgaW1nIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cbmJvZHkgI2NvbnRlbnQgaGVhZGVyIGRpdiAuYnV0dG9uLW9wZW4tZWRpdC1ib2FyZCB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTQxNDY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuYm9keSAjY29udGVudCBoZWFkZXIgZGl2IC5idXR0b24tb3Blbi1lZGl0LWJvYXJkIGltZyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5ib2R5ICNjb250ZW50IGhlYWRlciBkaXYgLmJ1dHRvbi11bmhpZGUge1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQ2O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmJvZHkgI2NvbnRlbnQgaGVhZGVyIGRpdiAuYnV0dG9uLXVuaGlkZSBpbWcge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDEyMCUpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hlYWRlci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQTJCQTtFQUNFLG1CQUFBO0VBQ0EsK0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDMUJGO0FENkJBO0VBQ0Usc0JBQUE7RUFDQSwrREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUMzQkY7QUQ4QkEsc0JBQUE7QUFDQTtFQUNFLHNCQUFBO0FDNUJGOztBRCtCQTs7Ozs7Ozs7Ozs7OztFQWFBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUM1QkE7O0FEK0JBOzs7O0VBSUEsb0JBQUE7RUFDQSxlQUFBO0FDNUJBOztBRCtCQSx1QkFBQTtBQUVBO0VBQ0UsNklBQUE7RUFDQSxpQkFBQTtBQzdCRjtBRDhCRTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FDNUJGOztBQW5ESTtFQUNFLGlCQUFBO0VBQ0EseUJETk87RUNPUCxnQ0FBQTtFQUVBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQXFETjtBQXBETTtFQUNFLGlCQUFBO0VBQ0EsY0RYSztBQ2lFYjtBQXBETTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBc0RSO0FBckRRO0VBQ0Usb0JBQUE7RURMUixZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDNkRGO0FBekRVO0VBQ0Usd0JBQUE7QUEyRFo7QUF6RFU7RUFDRSxxQkFBQTtBQTJEWjtBQXZEUTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkQvQks7RUNpQ0wsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQXdEVjtBQXZEVTtFQUNFLGNEbkNDO0VDb0NELGlCQUFBO0VBQ0EsZUFBQTtBQXlEWjtBQXZEVTtFRGhDUixZQ2lDbUM7RURoQ25DLFdDZ0NtQztBQTBEckM7QUF2RFE7RUFDRSxhQUFBO0VBQ0EseUJEOUNHO0VDK0NILG1CQUFBO0VENUJSLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDc0ZGO0FBekRVO0VEMUNSLFlDMkNtQztFRDFDbkMsV0MwQ21DO0FBNERyQztBQXpEUTtFQUNFLGFBQUE7RUFDQSx5QkR4REc7RUN5REgsbUJBQUE7RUR0Q1IsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNrR0Y7QUE1RFU7RURuRFIsWUNvRG1DO0VEbkRuQyxXQ21EbUM7RUFDekIsc0JBQUE7QUErRFpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJHRoZW1lLWRhcms6ICMzNzM2M2U7XFxuJHRoZW1lLWRhcmtlcjogIzI5MjkyZTtcXG4kdGhlbWUtcHVycGxlOiAjODU3MGZjO1xcbiR0aGVtZS1ncmF5OiAjNDE0MTQ2O1xcbiRmb250LXdoaXRlOiAjZjBmMGYwO1xcbiRmb250LWdyYXk6ICM5ZTllOWU7XFxuJGJvcmRlci1kYXJrOiAjNDc0NzQ3O1xcbiRjYXJkLXNoYWRvdzogIzFhMWExYTtcXG5cXG5cXG5AbWl4aW4gaWNvbi1zaXplKCRwaXhlbCkge1xcbiAgaGVpZ2h0OiAkcGl4ZWw7XFxuICB3aWR0aDogJHBpeGVsO1xcbn1cXG5cXG5AbWl4aW4gYnV0dG9uLXN0eWxpbmcge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtaXhpbiBmbGV4LWNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTGF0byc7XFxuICBzcmM6IHVybCgnLi4vZm9udHMvTGF0by1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gIHNyYzogdXJsKCcuLi9mb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLyogLS0tIENTUyBSZXNldCAtLS0gKi9cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxubWFyZ2luOiAwO1xcbnBhZGRpbmc6IDA7XFxuYm9yZGVyOiAwO1xcbmZvbnQtc2l6ZTogMTAwJTtcXG5mb250OiBpbmhlcml0O1xcbnZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuZm9udC1zaXplOiAxMDAlO1xcbn1cXG5cXG4vKiAtLS0gQ3VzdG9tIENTUyAtLS0gKi9cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjgwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxuICB9XFxufVwiLFwiQHVzZSAnaW5kZXgnO1xcblxcbmJvZHkge1xcbiAgI2NvbnRlbnQge1xcbiAgICBoZWFkZXIge1xcbiAgICAgIHBhZGRpbmc6IDBweCAzNXB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGluZGV4LiR0aGVtZS1kYXJrO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBpbmRleC4kYm9yZGVyLWRhcms7XFxuXFxuICAgICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBoMiB7XFxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICAgIGNvbG9yOiBpbmRleC4kZm9udC13aGl0ZTtcXG4gICAgICB9XFxuICAgICAgZGl2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDIwcHg7XFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyMCUpO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDkwJSk7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgQGluY2x1ZGUgaW5kZXguYnV0dG9uLXN0eWxpbmcoKTtcXG4gICAgICAgIH1cXG4gICAgICAgIC5idXR0b24tb3Blbi1hZGQtdGFzayB7XFxuICAgICAgICAgIHBhZGRpbmc6IDBweCAyMnB4O1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRleC4kdGhlbWUtcHVycGxlO1xcblxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBnYXA6IDVweDtcXG4gICAgICAgICAgcCB7XFxuICAgICAgICAgICAgY29sb3I6IGluZGV4LiRmb250LXdoaXRlO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIGluZGV4Lmljb24tc2l6ZSgyMHB4KTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmJ1dHRvbi1vcGVuLWVkaXQtYm9hcmQge1xcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRleC4kdGhlbWUtZ3JheTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG5cXG4gICAgICAgICAgQGluY2x1ZGUgaW5kZXguZmxleC1jZW50ZXIoKTtcXG4gICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBpbmRleC5pY29uLXNpemUoMjBweCk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5idXR0b24tdW5oaWRlIHtcXG4gICAgICAgICAgcGFkZGluZzogMTJweDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5kZXguJHRoZW1lLWdyYXk7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgICAgICAgIEBpbmNsdWRlIGluZGV4LmZsZXgtY2VudGVyKCk7XFxuICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgaW5kZXguaWNvbi1zaXplKDIwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMTIwJSk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9MYXRvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLyogLS0tIENTUyBSZXNldCAtLS0gKi9cbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5idXR0b24sXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLyogLS0tIEN1c3RvbSBDU1MgLS0tICovXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5ib2R5ICNjb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyODBweCAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQTJCQTtFQUNFLG1CQUFBO0VBQ0EsK0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBMUJGO0FBNkJBO0VBQ0Usc0JBQUE7RUFDQSwrREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUEzQkY7QUE4QkEsc0JBQUE7QUFDQTtFQUNFLHNCQUFBO0FBNUJGOztBQStCQTs7Ozs7Ozs7Ozs7OztFQWFBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUE1QkE7O0FBK0JBOzs7O0VBSUEsb0JBQUE7RUFDQSxlQUFBO0FBNUJBOztBQStCQSx1QkFBQTtBQUVBO0VBQ0UsNklBQUE7RUFDQSxpQkFBQTtBQTdCRjtBQThCRTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FBNUJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiR0aGVtZS1kYXJrOiAjMzczNjNlO1xcbiR0aGVtZS1kYXJrZXI6ICMyOTI5MmU7XFxuJHRoZW1lLXB1cnBsZTogIzg1NzBmYztcXG4kdGhlbWUtZ3JheTogIzQxNDE0NjtcXG4kZm9udC13aGl0ZTogI2YwZjBmMDtcXG4kZm9udC1ncmF5OiAjOWU5ZTllO1xcbiRib3JkZXItZGFyazogIzQ3NDc0NztcXG4kY2FyZC1zaGFkb3c6ICMxYTFhMWE7XFxuXFxuXFxuQG1peGluIGljb24tc2l6ZSgkcGl4ZWwpIHtcXG4gIGhlaWdodDogJHBpeGVsO1xcbiAgd2lkdGg6ICRwaXhlbDtcXG59XFxuXFxuQG1peGluIGJ1dHRvbi1zdHlsaW5nIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWl4aW4gZmxleC1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0xhdG8nO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL0xhdG8tUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICBzcmM6IHVybCgnLi4vZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi8qIC0tLSBDU1MgUmVzZXQgLS0tICovXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbm1hcmdpbjogMDtcXG5wYWRkaW5nOiAwO1xcbmJvcmRlcjogMDtcXG5mb250LXNpemU6IDEwMCU7XFxuZm9udDogaW5oZXJpdDtcXG52ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbmZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbmZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLyogLS0tIEN1c3RvbSBDU1MgLS0tICovXFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzeXN0ZW0tdWksIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4MHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0xhdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4vKiAtLS0gQ1NTIFJlc2V0IC0tLSAqL1xuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbmJ1dHRvbixcbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuXG4vKiAtLS0gQ3VzdG9tIENTUyAtLS0gKi9cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbmJvZHkgI2NvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4MHB4IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XG59XG5cbmJvZHkgI2NvbnRlbnQgbWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI5MmU7XG4gIGdyaWQtY29sdW1uOiAyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xufVxuYm9keSAjY29udGVudCBtYWluIC5jb2x1bW4ge1xuICBwYWRkaW5nOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuYm9keSAjY29udGVudCBtYWluIC5jb2x1bW5fX2hlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5ib2R5ICNjb250ZW50IG1haW4gLmNvbHVtbl9faGVhZGVyIGgzIHtcbiAgY29sb3I6ICM5ZTllOWU7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbn1cbmJvZHkgI2NvbnRlbnQgbWFpbiAuY29sdW1uX19oZWFkZXItdG9kbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogN3B4O1xufVxuYm9keSAjY29udGVudCBtYWluIC5jb2x1bW5fX2hlYWRlci10b2RvIGRpdiB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5ib2R5ICNjb250ZW50IG1haW4gLmNvbHVtbl9faGVhZGVyLWRvaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA3cHg7XG59XG5ib2R5ICNjb250ZW50IG1haW4gLmNvbHVtbl9faGVhZGVyLWRvaW5nIGRpdiB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NTcwZmM7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5ib2R5ICNjb250ZW50IG1haW4gLmNvbHVtbl9faGVhZGVyLWRvbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDdweDtcbn1cbmJvZHkgI2NvbnRlbnQgbWFpbiAuY29sdW1uX19oZWFkZXItZG9uZSBkaXYge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuYm9keSAjY29udGVudCBtYWluIC5jb2x1bW4gdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI1cHg7XG59XG5ib2R5ICNjb250ZW50IG1haW4gLmNvbHVtbiB1bCBsaSB7XG4gIGNvbG9yOiAjZjBmMGYwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczNjNlO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmc6IDE1cHggMjBweCAxNXB4IDIwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAjMWExYTFhO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuYm9keSAjY29udGVudCBtYWluIC5jb2x1bW4gdWwgbGk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG59XG5ib2R5ICNjb250ZW50IG1haW4gLmNvbHVtbiB1bCBsaSBoNCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbmJvZHkgI2NvbnRlbnQgbWFpbiAuY29sdW1uIHVsIGxpIHAge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cbmJvZHkgI2NvbnRlbnQgbWFpbiAuY29sdW1uIHVsIGxpIC50YXNrLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmJvZHkgI2NvbnRlbnQgbWFpbiAuY29sdW1uIHVsIGxpIC50YXNrLWZvb3Rlcl9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQ2O1xuICBwYWRkaW5nOiA0cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNzBweDtcbn1cbmJvZHkgI2NvbnRlbnQgbWFpbiAuY29sdW1uIHVsIGxpIC50YXNrLWZvb3Rlcl9fY29udGFpbmVyIGltZyB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGZpbGw6IHJlZDtcbn1cbmJvZHkgI2NvbnRlbnQgbWFpbiAuY29sdW1uIHVsIGxpIC50YXNrLWZvb3Rlcl9fY29udGFpbmVyIHNwYW4ge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbn1cbmJvZHkgI2NvbnRlbnQgbWFpbiAuY29sdW1uIHVsIGxpIGg1IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM5ZTllOWU7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUEyQkE7RUFDRSxtQkFBQTtFQUNBLCtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQzFCRjtBRDZCQTtFQUNFLHNCQUFBO0VBQ0EsK0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDM0JGO0FEOEJBLHNCQUFBO0FBQ0E7RUFDRSxzQkFBQTtBQzVCRjs7QUQrQkE7Ozs7Ozs7Ozs7Ozs7RUFhQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDNUJBOztBRCtCQTs7OztFQUlBLG9CQUFBO0VBQ0EsZUFBQTtBQzVCQTs7QUQrQkEsdUJBQUE7QUFFQTtFQUNFLDZJQUFBO0VBQ0EsaUJBQUE7QUM3QkY7QUQ4QkU7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQzVCRjs7QUFuREk7RUFDRSx5QkRKUztFQ01ULGNBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7QUFxRE47QUFwRE07RUFDRSxhQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0FBcURSO0FBcERRO0VBQ0UsbUJBQUE7QUFzRFY7QUFyRFU7RUFDRSxjRGJBO0VDY0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBdURaO0FBckRVO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQXVEWjtBQXREWTtFRGhCVixZQ2lCcUM7RURoQnJDLFdDZ0JxQztFQUN6QixzQkFBQTtFQUNBLG1CQUFBO0FBeURkO0FBdERVO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQXdEWjtBQXZEWTtFRDFCVixZQzJCcUM7RUQxQnJDLFdDMEJxQztFQUN6Qix5QkRyQ0M7RUNzQ0QsbUJBQUE7QUEwRGQ7QUF2RFU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBeURaO0FBeERZO0VEcENWLFlDcUNxQztFRHBDckMsV0NvQ3FDO0VBQ3pCLDRCQUFBO0VBQ0EsbUJBQUE7QUEyRGQ7QUF2RFE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBeURWO0FBeERVO0VBQ0UsY0R2REM7RUN3REQsZ0JBQUE7RUFDQSx5QkQ3REM7RUM4REQsa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUVBLG9CQUFBO0FBeURaO0FBeERZO0VBQ0UsMkJBQUE7QUEwRGQ7QUF4RFk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUEwRGQ7QUF4RFk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBMERkO0FBeERZO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBMERkO0FBekRjO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHlCRG5GSDtFQ29GRyxpQkFBQTtFQUNBLG1CQUFBO0FBMkRoQjtBQTFEZ0I7RUQ5RWQsWUMrRXlDO0VEOUV6QyxXQzhFeUM7RUFDekIsU0FBQTtBQTZEbEI7QUEzRGdCO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQTZEbEI7QUF6RFk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRGpHRjtFQ2tHRSxpQkFBQTtBQTJEZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkdGhlbWUtZGFyazogIzM3MzYzZTtcXG4kdGhlbWUtZGFya2VyOiAjMjkyOTJlO1xcbiR0aGVtZS1wdXJwbGU6ICM4NTcwZmM7XFxuJHRoZW1lLWdyYXk6ICM0MTQxNDY7XFxuJGZvbnQtd2hpdGU6ICNmMGYwZjA7XFxuJGZvbnQtZ3JheTogIzllOWU5ZTtcXG4kYm9yZGVyLWRhcms6ICM0NzQ3NDc7XFxuJGNhcmQtc2hhZG93OiAjMWExYTFhO1xcblxcblxcbkBtaXhpbiBpY29uLXNpemUoJHBpeGVsKSB7XFxuICBoZWlnaHQ6ICRwaXhlbDtcXG4gIHdpZHRoOiAkcGl4ZWw7XFxufVxcblxcbkBtaXhpbiBidXR0b24tc3R5bGluZyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1peGluIGZsZXgtY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdMYXRvJztcXG4gIHNyYzogdXJsKCcuLi9mb250cy9MYXRvLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL1BvcHBpbnMtUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4vKiAtLS0gQ1NTIFJlc2V0IC0tLSAqL1xcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5tYXJnaW46IDA7XFxucGFkZGluZzogMDtcXG5ib3JkZXI6IDA7XFxuZm9udC1zaXplOiAxMDAlO1xcbmZvbnQ6IGluaGVyaXQ7XFxudmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG5mb250LWZhbWlseTogaW5oZXJpdDtcXG5mb250LXNpemU6IDEwMCU7XFxufVxcblxcbi8qIC0tLSBDdXN0b20gQ1NTIC0tLSAqL1xcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICAjY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyODBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcXG4gIH1cXG59XCIsXCJAdXNlICdpbmRleCc7XFxuXFxuYm9keSB7XFxuICAjY29udGVudCB7XFxuICAgIG1haW4ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGluZGV4LiR0aGVtZS1kYXJrZXI7XFxuXFxuICAgICAgZ3JpZC1jb2x1bW46IDI7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICAgIC5jb2x1bW4ge1xcbiAgICAgICAgcGFkZGluZzogMjBweDtcXG5cXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgJl9faGVhZGVyIHtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgICAgICAgaDMge1xcbiAgICAgICAgICAgIGNvbG9yOiBpbmRleC4kZm9udC1ncmF5O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgJi10b2RvIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiA3cHg7XFxuICAgICAgICAgICAgZGl2IHtcXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGluZGV4Lmljb24tc2l6ZSgxMHB4KTtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4OztcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgJi1kb2luZyB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogN3B4O1xcbiAgICAgICAgICAgIGRpdiB7XFxuICAgICAgICAgICAgICBAaW5jbHVkZSBpbmRleC5pY29uLXNpemUoMTBweCk7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRleC4kdGhlbWUtcHVycGxlO1xcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDs7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICAgICYtZG9uZSB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogN3B4O1xcbiAgICAgICAgICAgIGRpdiB7XFxuICAgICAgICAgICAgICBAaW5jbHVkZSBpbmRleC5pY29uLXNpemUoMTBweCk7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDs7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICB1bCB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGdhcDogMjVweDtcXG4gICAgICAgICAgbGkge1xcbiAgICAgICAgICAgIGNvbG9yOiBpbmRleC4kZm9udC13aGl0ZTtcXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluZGV4LiR0aGVtZS1kYXJrO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHggMTVweCAyMHB4O1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCBpbmRleC4kY2FyZC1zaGFkb3c7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBoNCB7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBwIHtcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnRhc2stZm9vdGVyIHtcXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgICAmX19jb250YWluZXIge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluZGV4LiR0aGVtZS1ncmF5O1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMTVweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNzBweDtcXG4gICAgICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgICBAaW5jbHVkZSBpbmRleC5pY29uLXNpemUoMTVweCk7XFxuICAgICAgICAgICAgICAgICAgZmlsbDogcmVkO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIHNwYW4gIHtcXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGg1IHtcXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgY29sb3I6IGluZGV4LiRmb250LWdyYXk7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH07XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXNpZGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FzaWRlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JyZWFrcG9pbnRzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9icmVha3BvaW50cy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kaWFsb2cuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RpYWxvZy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBmYWN0b3J5Qm9hcmQgfSBmcm9tIFwiLi9mYWN0b3J5XCI7XG5cbmxldCBhY3RpdmVCb2FyZCA9IG51bGw7XG5cbmNvbnN0IGJvYXJkcyA9IFtcbiAge1xuICAgIHRpdGxlOiAnS2FuYmFuIFByb2plY3QnLFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnQnVpbGQgVUkgZm9yIFByb2plY3QnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSZXByZWhlbmRlcml0IG5vc3RydW0gZmFjaWxpcyB0ZW5ldHVyIGxhYm9ydW0gdm9sdXB0YXRpYnVzIGRlc2VydW50IGV4ZXJjaXRhdGlvbmVtLicsXG4gICAgICAgIGR1ZURhdGU6ICdUaGlzIFdlZWsnLFxuICAgICAgICBwcmlvcml0eTogJ2xvdycsXG4gICAgICAgIHN0YXR1czogJ3RvZG8nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdSZXN0cnVjdHVyZSBDb2RlIGludG8gTW9kdWxlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUmVwcmVoZW5kZXJpdCBub3N0cnVtIGZhY2lsaXMgdGVuZXR1ciBsYWJvcnVtIHZvbHVwdGF0aWJ1cyBkZXNlcnVudCBleGVyY2l0YXRpb25lbS4nLFxuICAgICAgICBkdWVEYXRlOiAnVG9kYXknLFxuICAgICAgICBwcmlvcml0eTogJ21lZGl1bScsXG4gICAgICAgIHN0YXR1czogJ3RvZG8nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdNYWtlIHByb2plY3QgcmVzcG9uc2l2ZSB0byBhbGwgZGV2aWNlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUG9zc2ltdXMgbmF0dXMgcXVpIG5lbW8gbmloaWwgbGF1ZGFudGl1bSBkb2xvcmUgZG9sb3JlbXF1ZSBzYXBpZW50ZSBtaW5pbWEgdmVybyBvcHRpbyBxdWFtIGFyY2hpdGVjdG8gbWFpb3JlcyBtYWduaSBtb2xlc3RpYXMgbmFtLCBjdXBpZGl0YXRlIHByYWVzZW50aXVtIGV0LiBWb2x1cHRhdGlidXMhJyxcbiAgICAgICAgZHVlRGF0ZTogJ1RvZGF5JyxcbiAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgc3RhdHVzOiAnZG9pbmcnLFxuICAgICAgfSxcbiAgICBdXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1Jlc3RhdXJhbnQgUHJvamVjdCcsXG4gICAgdGFza3M6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdDcmVhdGUgRmlnbWEgcHJvdG90eXBlJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmVwcmVoZW5kZXJpdCBub3N0cnVtIGZhY2lsaXMgdGVuZXR1ciBsYWJvcnVtIHZvbHVwdGF0aWJ1cyBkZXNlcnVudCBleGVyY2l0YXRpb25lbS4nLFxuICAgICAgICBkdWVEYXRlOiAnVGhpcyBXZWVrJyxcbiAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgc3RhdHVzOiAndG9kbycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ01ha2UgZW52aXJvbm1lbnRzIGZvciBkZXZlbG9wbWVudCBhbmQgcHJvZHVjdGlvbicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUmVwcmVoZW5kZXJpdCBub3N0cnVtIGZhY2lsaXMgdGVuZXR1ciBsYWJvcnVtIHZvbHVwdGF0aWJ1cyBkZXNlcnVudCBleGVyY2l0YXRpb25lbS4nLFxuICAgICAgICBkdWVEYXRlOiAnVG9kYXknLFxuICAgICAgICBwcmlvcml0eTogJ2xvdycsXG4gICAgICAgIHN0YXR1czogJ2RvbmUnLFxuICAgICAgfSxcbiAgICBdXG4gIH0sXG5dXG5cbmZ1bmN0aW9uIGdldEJvYXJkcygpIHtcbiAgcmV0dXJuIGJvYXJkcy5tYXAoKGJvYXJkKSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkLnRpdGxlO1xuICB9KVxufVxuXG5mdW5jdGlvbiBnZXRCb2FyZHNUb3RhbCgpIHtcbiAgcmV0dXJuIGJvYXJkcy5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZUJvYXJkKCkge1xuICByZXR1cm4gYWN0aXZlQm9hcmQ7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld0JvYXJkKCkge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC1jcmVhdGUtYm9hcmQtdGl0bGUnKTsgIFxuICBjb25zdCBuZXdCb2FyZCA9IGZhY3RvcnlCb2FyZChpbnB1dC52YWx1ZSk7XG5cbiAgYm9hcmRzLnVuc2hpZnQobmV3Qm9hcmQpO1xuICBjb25zb2xlLmxvZyhib2FyZHMpO1xufVxuXG5mdW5jdGlvbiBlZGl0Qm9hcmQoKSB7XG4gIGNvbnN0IGluZGV4T2ZBY3RpdmVCb2FyZCA9IGJvYXJkcy5maW5kSW5kZXgoKGJvYXJkKSA9PiBib2FyZCA9PT0gZ2V0QWN0aXZlQm9hcmQoKSk7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LWVkaXQtYm9hcmQtdGl0bGUnKTtcbiAgY29uc3QgbmV3Qm9hcmQgPSBmYWN0b3J5Qm9hcmQoaW5wdXQudmFsdWUpO1xuXG4gIGFjdGl2ZUJvYXJkID0gbmV3Qm9hcmQ7IC8vIHRvIGRpc3BsYXkgdXBkYXRlZCBib2FyZCBhZnRlciBlZGl0aW5nXG5cbiAgYm9hcmRzLnNwbGljZShpbmRleE9mQWN0aXZlQm9hcmQsIDEsIG5ld0JvYXJkKTtcbiAgY29uc29sZS5sb2coYm9hcmRzW2luZGV4T2ZBY3RpdmVCb2FyZF0pO1xuICBjb25zb2xlLmxvZyhib2FyZHMpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVCb2FyZCgpIHtcbiAgY29uc3QgaW5kZXhPZkFjdGl2ZUJvYXJkID0gYm9hcmRzLmZpbmRJbmRleCgoYm9hcmQpID0+IGJvYXJkID09PSBnZXRBY3RpdmVCb2FyZCgpKTtcbiAgXG4gIGFjdGl2ZUJvYXJkID0gbnVsbDtcblxuICBib2FyZHMuc3BsaWNlKGluZGV4T2ZBY3RpdmVCb2FyZCwgMSk7XG4gIGNvbnNvbGUubG9nKGJvYXJkcyk7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZUJvYXJkKGUpIHtcbiAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5jbG9zZXN0KCdsaScpLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xuXG4gIGFjdGl2ZUJvYXJkID0gYm9hcmRzW2luZGV4XTtcbn1cblxuXG5leHBvcnQgeyBcbiAgZ2V0Qm9hcmRzLCBcbiAgZ2V0Qm9hcmRzVG90YWwsIFxuICBhZGROZXdCb2FyZCwgXG4gIHNldEFjdGl2ZUJvYXJkLCBcbiAgZ2V0QWN0aXZlQm9hcmQsIFxuICBlZGl0Qm9hcmQsIFxuICBkZWxldGVCb2FyZCB9OyIsImltcG9ydCB7IGdldEJvYXJkcywgZ2V0Qm9hcmRzVG90YWwsIHNldEFjdGl2ZUJvYXJkLCBnZXRBY3RpdmVCb2FyZCB9IGZyb20gXCIuL2RhdGEtaGFuZGxlclwiO1xuXG5mdW5jdGlvbiBkaXNwbGF5Qm9hcmRzKCkge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMtbGlzdCA+IHVsJyk7XG5cbiAgZ2V0Qm9hcmRzKCkuZm9yRWFjaCgoYm9hcmQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBsaS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBgJHtpbmRleH1gKTtcblxuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICdhc3NldHMvaW1hZ2VzL2ZlYXRoZXIuc3ZnJyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0JywgJ0ZlYXRoZXIgSWNvbicpO1xuICAgIHAudGV4dENvbnRlbnQgPSBib2FyZDtcblxuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICBsaS5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpbWcpXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHApXG5cbiAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBzZXRBY3RpdmVCb2FyZChlKTtcbiAgICAgIGRpc3BsYXlBY3RpdmVCb2FyZCgpO1xuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlBY3RpdmVCb2FyZCgpIHtcbiAgY29uc3QgYm9hcmRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgPiBoMicpO1xuXG4gIGNvbnN0IGJvYXJkID0gZ2V0QWN0aXZlQm9hcmQoKTtcblxuICBpZiAoYm9hcmQgPT09IG51bGwpIHtcbiAgICBib2FyZEhlYWRlci50ZXh0Q29udGVudCA9ICcnO1xuICB9IGVsc2Uge1xuICAgIGJvYXJkSGVhZGVyLnRleHRDb250ZW50ID0gYm9hcmQudGl0bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUJvYXJkc1RvdGFsKCkge1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkLXRvdGFsJyk7XG5cbiAgc3Bhbi50ZXh0Q29udGVudCA9IGdldEJvYXJkc1RvdGFsKCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUJvYXJkcygpIHtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmRzLWxpc3QgPiB1bCcpO1xuICBcbiAgd2hpbGUgKHVsLmZpcnN0Q2hpbGQpIHtcbiAgICB1bC5yZW1vdmVDaGlsZCh1bC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhcklucHV0RmllbGRzKCkge1xuICBjb25zdCBpbnB1dEZpZWxkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5cbiAgaW5wdXRGaWVsZHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICB9KVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5Qm9hcmRFZGl0VmFsdWVzKCkge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctZWRpdC1ib2FyZCBpbnB1dCcpXG5cbiAgaW5wdXQudmFsdWUgPSBnZXRBY3RpdmVCb2FyZCgpLnRpdGxlO1xufVxuXG5leHBvcnQgeyBcbiAgZGlzcGxheUJvYXJkcyxcbiAgZGlzcGxheUJvYXJkc1RvdGFsLFxuICByZW1vdmVCb2FyZHMsXG4gIGNsZWFySW5wdXRGaWVsZHMsXG4gIGRpc3BsYXlCb2FyZEVkaXRWYWx1ZXMsXG4gIGRpc3BsYXlBY3RpdmVCb2FyZFxuIH07IiwiZnVuY3Rpb24gZmFjdG9yeUJvYXJkKHRpdGxlKSB7IFxuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIHRhc2tzOiBbXVxuICB9XG59XG5cbmV4cG9ydCB7IGZhY3RvcnlCb2FyZCB9OyIsImZ1bmN0aW9uIGZvcm1DaGVjayhzdHIpIHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZGlhbG9nLSR7c3RyfSBpbnB1dGApO1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmRpYWxvZy0ke3N0cn0gc3BhbmApXG5cbiAgaWYgKGlucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgIHNwYW4udGV4dENvbnRlbnQgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2UgaWYgKGlucHV0LnZhbGlkaXR5LnRvb1Nob3J0KSB7XG4gICAgc3Bhbi50ZXh0Q29udGVudCA9ICdJbnB1dCBpcyB0b28gc2hvcnQnO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBzcGFuLnRleHRDb250ZW50ID0gJyc7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybUNoZWNrVGFza3Moc3RyKSB7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbnRhaW5lci1pbnB1dC0ke3N0cn0tdGl0bGUgaW5wdXRgKTtcbiAgY29uc3Qgc3BhbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbnRhaW5lci1pbnB1dC0ke3N0cn0tdGl0bGUgc3BhbmApO1xuICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jb250YWluZXItaW5wdXQtJHtzdHJ9LWRlc2NyaXB0aW9uIHRleHRhcmVhYClcbiAgY29uc3Qgc3BhblRleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbnRhaW5lci1pbnB1dC0ke3N0cn0tZGVzY3JpcHRpb24gc3BhbmApXG5cbiAgY29uc29sZS5sb2coc3BhblRleHRBcmVhKVxuICBmdW5jdGlvbiBjaGVja0lucHV0KCkge1xuICAgIGlmIChpbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgIHNwYW5JbnB1dC50ZXh0Q29udGVudCA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGlucHV0LnZhbGlkaXR5LnRvb1Nob3J0KSB7XG4gICAgICBzcGFuSW5wdXQudGV4dENvbnRlbnQgPSAnSW5wdXQgaXMgdG9vIHNob3J0JztcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3BhbklucHV0LnRleHRDb250ZW50ID0gJyc7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjaGVja1RleHRBcmVhKCkge1xuICAgIGlmICh0ZXh0QXJlYS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgIHNwYW5UZXh0QXJlYS50ZXh0Q29udGVudCA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRleHRBcmVhLnZhbGlkaXR5LnRvb1Nob3J0KSB7XG4gICAgICBzcGFuVGV4dEFyZWEudGV4dENvbnRlbnQgPSAnSW5wdXQgaXMgdG9vIHNob3J0JztcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3BhblRleHRBcmVhLnRleHRDb250ZW50ID0gJyc7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjb25zb2xlLmxvZyhjaGVja0lucHV0KCkpO1xuICBjb25zb2xlLmxvZyhjaGVja1RleHRBcmVhKCkpO1xuXG4gIGlmIChjaGVja0lucHV0KCkgJiYgY2hlY2tUZXh0QXJlYSgpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBcbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCB7IGZvcm1DaGVjaywgZm9ybUNoZWNrVGFza3MgfTsiLCJmdW5jdGlvbiBzaG93RGlhbG9nKHN0cikge1xuICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZGlhbG9nLSR7c3RyfWApO1xuXG4gIGRpYWxvZy5zaG93TW9kYWwoKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VEaWFsb2coc3RyKSB7XG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kaWFsb2ctJHtzdHJ9YCk7XG5cbiAgZGlhbG9nLmNsb3NlKCk7XG59XG5cbmZ1bmN0aW9uIGV4aXREaWFsb2coZSkge1xuICBjb25zdCBkaWFsb2cgPSBlLnRhcmdldC5jbG9zZXN0KCdkaWFsb2cnKTtcblxuICBkaWFsb2cuY2xvc2UoKTtcbn1cblxuZXhwb3J0IHsgc2hvd0RpYWxvZywgY2xvc2VEaWFsb2csIGV4aXREaWFsb2cgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJhcHBcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvYXNpZGUuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2hlYWRlci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZGlhbG9nLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9icmVha3BvaW50cy5zY3NzJztcblxuaW1wb3J0IHsgXG4gIGRpc3BsYXlCb2FyZHMsIFxuICBkaXNwbGF5Qm9hcmRzVG90YWwsIFxuICByZW1vdmVCb2FyZHMsIFxuICBjbGVhcklucHV0RmllbGRzLCBcbiAgZGlzcGxheUJvYXJkRWRpdFZhbHVlcywgXG4gIGRpc3BsYXlBY3RpdmVCb2FyZCBcbn0gZnJvbSAnLi9kaXNwbGF5LW1vZHVsZSc7XG5pbXBvcnQgeyBzaG93RGlhbG9nLCBjbG9zZURpYWxvZywgZXhpdERpYWxvZyB9IGZyb20gJy4vdWktbW9kdWxlJztcbmltcG9ydCB7IGFkZE5ld0JvYXJkLCBlZGl0Qm9hcmQsIGRlbGV0ZUJvYXJkIH0gZnJvbSAnLi9kYXRhLWhhbmRsZXInO1xuaW1wb3J0IHsgZm9ybUNoZWNrLCBmb3JtQ2hlY2tUYXNrcyB9IGZyb20gJy4vZm9ybS1oYW5kbGVyJztcblxuY29uc3QgYnV0dG9uc0RpYWxvZ0Nsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi1jbG9zZS1kaWFsb2cnKTtcbmNvbnN0IGJ1dHRvbk9wZW5EaWFsb2dDcmVhdGVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tb3Blbi1jcmVhdGUtYm9hcmQnKTtcbmNvbnN0IGJ1dHRvbkNyZWF0ZUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbi1jcmVhdGUtYm9hcmQnKTtcbmNvbnN0IGJ1dHRvbk9wZW5EaWFsb2dFZGl0Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLW9wZW4tZWRpdC1ib2FyZCcpO1xuY29uc3QgYnV0dG9uRWRpdEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbi1lZGl0LWJvYXJkJyk7XG5jb25zdCBidXR0b25EZWxldGVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tZGVsZXRlLWJvYXJkJyk7XG5jb25zdCBidXR0b25PcGVuRGlhbG9nQWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tb3Blbi1hZGQtdGFzaycpO1xuY29uc3QgYnV0dG9uQWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b24tYWRkLXRhc2snKTtcblxuYnV0dG9uQWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZm9ybUNoZWNrVGFza3MoJ2FkZC10YXNrJyk7XG59KVxuXG5idXR0b25EZWxldGVCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZGVsZXRlQm9hcmQoKTtcbiAgcmVtb3ZlQm9hcmRzKCk7XG4gIGRpc3BsYXlCb2FyZHMoKTtcbiAgZGlzcGxheUJvYXJkc1RvdGFsKCk7XG4gIGNsZWFySW5wdXRGaWVsZHMoKTtcbiAgY2xvc2VEaWFsb2coJ2VkaXQtYm9hcmQnKTtcbiAgZGlzcGxheUFjdGl2ZUJvYXJkKCk7XG59KVxuXG5idXR0b25FZGl0Qm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmICghZm9ybUNoZWNrKCdlZGl0LWJvYXJkJykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZWRpdEJvYXJkKCk7XG4gIHJlbW92ZUJvYXJkcygpO1xuICBkaXNwbGF5Qm9hcmRzKCk7XG4gIGRpc3BsYXlCb2FyZHNUb3RhbCgpO1xuICBjbGVhcklucHV0RmllbGRzKCk7XG4gIGNsb3NlRGlhbG9nKCdlZGl0LWJvYXJkJyk7XG4gIGRpc3BsYXlBY3RpdmVCb2FyZCgpO1xufSlcblxuYnV0dG9uT3BlbkRpYWxvZ0NyZWF0ZUJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBzaG93RGlhbG9nKCdjcmVhdGUtYm9hcmQnKTtcbn0pXG5cbmJ1dHRvbk9wZW5EaWFsb2dFZGl0Qm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHNob3dEaWFsb2coJ2VkaXQtYm9hcmQnKTtcbiAgZGlzcGxheUJvYXJkRWRpdFZhbHVlcygpO1xufSlcblxuYnV0dG9uT3BlbkRpYWxvZ0FkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHNob3dEaWFsb2coJ2FkZC10YXNrJyk7XG59KVxuXG5idXR0b25zRGlhbG9nQ2xvc2UuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7IGV4aXREaWFsb2coZSkgfSlcbn0pXG5cbmJ1dHRvbkNyZWF0ZUJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKCFmb3JtQ2hlY2soJ2NyZWF0ZS1ib2FyZCcpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJlbW92ZUJvYXJkcygpO1xuICBhZGROZXdCb2FyZCgpO1xuICBkaXNwbGF5Qm9hcmRzKCk7XG4gIGRpc3BsYXlCb2FyZHNUb3RhbCgpO1xuICBjbGVhcklucHV0RmllbGRzKCk7XG4gIGNsb3NlRGlhbG9nKCdjcmVhdGUtYm9hcmQnKTtcbn0pXG5cbmRpc3BsYXlCb2FyZHMoKTtcbmRpc3BsYXlCb2FyZHNUb3RhbCgpO1xuXG5jb25zb2xlLmxvZygnSGVsbG8gd29ybGQnKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==