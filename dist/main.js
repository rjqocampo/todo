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
:root.dark {
  --theme-almond: tomato;
}
:root.light {
  --theme-almond: blanchedalmond;
}
:root body {
  font-family: "Poppins", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  min-height: 100vh;
  background-color: #29292e;
}
:root body #content {
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-template-rows: 100px 1fr;
}

body #content #aside--sidebar-hide {
  display: none;
}
body #content aside {
  height: max(100%, 100vh);
  background-color: #37363e;
  border-right: 1px solid #474747;
  grid-column: 1/2;
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
}
body #content aside .aside-top {
  margin-bottom: 100px;
  flex: 0;
  display: grid;
  justify-content: center;
}
body #content aside .aside-top .title {
  color: #f0f0f0;
  font-weight: bold;
  margin: 35px 0px 35px;
  display: flex;
  align-items: center;
  gap: 10px;
}
body #content aside .aside-top .title svg {
  height: 28px;
  width: 28px;
  stroke: #8570fc;
}
body #content aside .aside-top .title h1 {
  font-size: 1.5rem;
}
body #content aside .aside-top .due h3 {
  color: #9e9e9e;
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 3px;
  margin-bottom: 10px;
}
body #content aside .aside-top .due li {
  list-style: none;
  padding: 10px 0px;
  transition: all 0.5s;
}
body #content aside .aside-top .due li:hover {
  transform: translateX(6px);
}
body #content aside .aside-top .due li button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 10px;
}
body #content aside .aside-top .due li button svg {
  height: 20px;
  width: 20px;
  transform: translateY(-1px);
  stroke: #8570fc;
}
body #content aside .aside-top .due li button p {
  color: #f0f0f0;
}
body #content aside .aside-top .due li .button-render--focus::after {
  display: inline-block;
  position: relative;
  top: -2px;
  left: 10px;
  content: "";
  height: 6px;
  width: 6px;
  background-color: aqua;
  animation-duration: 2s;
  animation-name: glow;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  border-radius: 50px;
}
@keyframes glow {
  from {
    transform: scale(100%);
    opacity: 0.4;
  }
  to {
    transform: scale(120%);
    opacity: 1;
  }
}
body #content aside .aside-top .boards-list {
  display: grid;
}
body #content aside .aside-top .boards-list h3 {
  color: #9e9e9e;
  font-size: 0.7rem;
  font-weight: bold;
  letter-spacing: 3px;
  margin: 30px 0px 10px 0px;
}
body #content aside .aside-top .boards-list ul li {
  padding: 10px 0px;
  list-style: none;
  transition: all 0.5s;
}
body #content aside .aside-top .boards-list ul li:hover {
  transform: translateX(6px);
}
body #content aside .aside-top .boards-list ul li svg {
  height: 22px;
  width: 22px;
  transform: translateY(-2px);
}
body #content aside .aside-top .boards-list ul li button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  width: 240px;
  display: flex;
  align-items: center;
  gap: 10px;
}
body #content aside .aside-top .boards-list ul li button p {
  color: #f0f0f0;
}
body #content aside .aside-top .boards-list ul li .button-render--focus::after {
  display: inline-block;
  position: relative;
  top: 0px;
  left: 2px;
  content: "";
  height: 6px;
  width: 6px;
  background-color: aqua;
  animation-duration: 2s;
  animation-name: glow;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  border-radius: 50px;
}
@keyframes glow {
  from {
    transform: scale(100%);
    opacity: 0.4;
  }
  to {
    transform: scale(120%);
    opacity: 1;
  }
}
body #content aside .aside-top .boards-list .button-open-create-board {
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
body #content aside .aside-top .boards-list .button-open-create-board:hover {
  background-color: #29292e;
}
body #content aside .aside-top .boards-list .button-open-create-board img {
  height: 18px;
  width: 18px;
}
body #content aside .aside-top .boards-list .button-open-create-board p {
  font-size: 0.8rem;
  letter-spacing: 1px;
  color: #8570fc;
}
body #content aside .aside-bottom {
  justify-content: center;
  flex: 1;
  display: grid;
  align-content: start;
}
body #content aside .aside-bottom .night-mode {
  display: grid;
  grid-template-columns: 25px 55px 25px;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 10px;
}
body #content aside .aside-bottom .night-mode img {
  height: 25px;
  width: 25px;
}
body #content aside .aside-bottom .night-mode input {
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
body #content aside .aside-bottom .night-mode input::before {
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
body #content aside .aside-bottom .night-mode input:checked::before {
  transform: translateX(100%);
  background: #fff;
}
body #content aside .aside-bottom .night-mode input:checked {
  background: #8570fc;
}
body #content aside .aside-bottom .button-sidebar {
  border: none;
  background-color: transparent;
  cursor: pointer;
  background-color: #414146;
  border-radius: 8px;
  padding: 10px 20px;
  margin: 25px 0px;
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s;
}
body #content aside .aside-bottom .button-sidebar:hover {
  filter: brightness(125%);
}
body #content aside .aside-bottom .button-sidebar img {
  height: 17px;
  width: 17px;
  transform: translateY(-1px);
}
body #content aside .aside-bottom .button-sidebar p {
  transition: all 0.4s;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: #f0f0f0;
  margin-left: 5px;
}
body #content aside .aside-bottom .github {
  margin-bottom: 40px;
}
body #content aside .aside-bottom .github a {
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
body #content aside .aside-bottom .github a img {
  padding: 0;
  height: 20px;
  width: 20px;
}
body #content aside .aside-bottom .github a:hover p {
  display: none;
}
body #content aside .aside-bottom .github a:hover:after {
  content: "Click to see code";
}`, "",{"version":3,"sources":["webpack://./src/styles/index.scss","webpack://./src/styles/aside.scss"],"names":[],"mappings":"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","sourcesContent":["$theme-dark: #37363e;\n$theme-darker: #29292e;\n$theme-purple: #8570fc;\n$theme-gray: #414146;\n$font-white: #f0f0f0;\n$font-gray: #9e9e9e;\n$border-dark: #474747;\n$card-shadow: #1a1a1a;\n$theme-red: #ff5c5c;\n\n@mixin button-focus($top, $left) {\n  &::after {\n    display: inline-block;\n    position: relative;\n    top: $top;\n    left: $left;\n    content: '';\n    height: 6px;\n    width: 6px;\n    background-color: aqua;\n\n    animation-duration: 2s;\n    animation-name: glow;\n    animation-iteration-count: infinite;\n    animation-direction: alternate;\n\n    border-radius: 50px;\n  }\n  @keyframes glow {\n    from {\n      transform: scale(100%);\n      opacity: 0.4;\n    }\n\n    to {\n      transform: scale(120%);\n      opacity: 1;\n    }\n  }\n}\n\n@mixin icon-size($pixel) {\n  height: $pixel;\n  width: $pixel;\n}\n\n@mixin button-styling {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@font-face {\n  font-family: 'Lato';\n  src: url('../fonts/Lato-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Poppins';\n  src: url('../fonts/Poppins-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/* --- CSS Reset --- */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\nmargin: 0;\npadding: 0;\nborder: 0;\nfont-size: 100%;\nfont: inherit;\nvertical-align: baseline;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\nfont-family: inherit;\nfont-size: 100%;\n}\n\n/* --- Custom CSS --- */\n:root {\n  &.dark {\n    --theme-almond: tomato;\n  }\n  &.light {\n    --theme-almond: blanchedalmond;\n  }\n  body {\n    font-family: 'Poppins', system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    min-height: 100vh;\n    background-color: $theme-darker;\n    #content {\n    display: grid;\n    grid-template-columns: 320px 1fr;\n    grid-template-rows: 100px 1fr;\n    }\n  }\n}\n\n\n","@use 'index';\n\nbody {\n  #content {\n    #aside--sidebar-hide {\n      display: none;\n    }\n    aside {\n      height: max(100%, 100vh);\n      background-color: index.$theme-dark;\n      border-right: 1px solid index.$border-dark;\n      \n      grid-column: 1 / 2;\n      grid-row: 1 / 3;\n\n      display: flex;\n      flex-direction: column;\n      .aside-top {\n        margin-bottom: 100px;\n        flex: 0;\n\n        display: grid;\n        justify-content: center;\n        \n        .title {\n          color: index.$font-white;\n          font-weight: bold;\n          margin: 35px 0px 35px;\n\n          display: flex;\n          align-items: center;\n          gap: 10px;\n          svg {\n            @include index.icon-size(28px);\n            stroke: index.$theme-purple;\n          }\n          h1 {\n            font-size: 1.5rem;\n          }\n        }\n        .due {\n          h3 {\n            color: index.$font-gray;\n            font-size: 0.7rem;\n            font-weight: bold;\n            letter-spacing: 3px;\n            margin-bottom: 10px;\n          }\n          li {\n            list-style: none;\n            padding: 10px 0px;\n\n            transition: all 0.5s;\n            &:hover {\n              transform: translateX(6px);\n            }\n            button {\n              @include index.button-styling();\n              padding: 0;\n\n              display: flex;\n              align-items: center;\n              gap: 10px;\n              svg {\n                @include index.icon-size(20px);\n                transform: translateY(-1px);\n                stroke: index.$theme-purple;\n              }\n              p {\n                color: index.$font-white;\n              }\n            }\n            .button-render--focus {\n              @include index.button-focus(-2px, 10px);\n            }\n          }\n        }\n        .boards-list {\n          display: grid;\n          h3 {\n            color: index.$font-gray;\n            font-size: 0.7rem;\n            font-weight: bold;\n            letter-spacing: 3px;\n            margin: 30px 0px 10px 0px;\n          }\n          ul {\n            li {\n              padding: 10px 0px;\n              list-style: none;\n\n              transition: all 0.5s;\n              &:hover {\n                transform: translateX(6px);\n              }\n              svg {\n                @include index.icon-size(22px);\n                transform: translateY(-2px);\n              }\n              button {\n                @include index.button-styling();\n                padding: 0;\n                width: 240px;\n\n                display: flex;\n                align-items: center;;\n                gap: 10px;\n                p {\n                  color: index.$font-white;\n                }\n              }\n              .button-render--focus {\n                @include index.button-focus(0px, 2px);\n              }\n            }\n          }\n          .button-open-create-board {\n            @include index.button-styling();\n            margin: 5px 8px;\n            padding: 10px 0px;\n            border-radius: 10px;\n\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            gap: 10px;\n\n            transition: all 0.3s;\n            &:hover {\n              background-color: index.$theme-darker;\n            }\n            img {\n              @include index.icon-size(18px);\n            }\n            p {\n              font-size: 0.8rem;\n              letter-spacing: 1px;\n              color: index.$theme-purple;\n            }\n          }\n        }\n      }\n      .aside-bottom {\n        justify-content: center;\n        flex: 1;\n\n        display: grid;\n        align-content: start;\n        .night-mode {\n          display: grid;\n          grid-template-columns: 25px 55px 25px;\n          justify-content: center;\n          align-content: center;\n          align-items: center;\n          gap: 10px;\n          img {\n            @include index.icon-size(25px);\n          }\n          input {\n            position: relative;\n            width: 45px;\n            height: 22px;\n            -webkit-appearance: none;\n            appearance: none;\n            background: index.$font-gray;\n            outline: none;\n            border-radius: 2rem;\n            cursor: pointer;\n            box-shadow: inset 0 0 5px rgb(0 0 0 / 50%);\n            &::before {\n              content: \"\";\n              width: 22px;\n              height: 22px;\n              border-radius: 50%;\n              background: #fff;\n              position: absolute;\n              top: 0;\n              left: 0;\n              transition: 0.5s;\n            }\n            &:checked::before {\n              transform: translateX(100%);\n              background: #fff;\n            }\n            &:checked {\n              background: index.$theme-purple;\n            }\n          }\n        }\n        .button-sidebar {\n          @include index.button-styling();\n          background-color: index.$theme-gray;\n          border-radius: 8px;\n          padding: 10px 20px;\n          margin: 25px 0px;\n          width: max-content;\n          \n          display: flex;\n          justify-content: center;\n          align-items: center;\n\n          transition: all 0.4s;\n          &:hover  {\n            filter: brightness(125%);\n          }\n          img {\n            @include index.icon-size(17px);\n            transform: translateY(-1px);\n          }\n          p {\n            transition: all 0.4s;\n            font-size: 0.8rem;\n            font-weight: bold;\n            letter-spacing: 1px;\n            color: index.$font-white;\n            margin-left: 5px;\n          }\n        }\n        .github {\n          margin-bottom: 40px;\n          a {\n            font-weight: bold;\n            font-size: 0.65rem;\n            color: index.$font-white;\n            text-decoration: none;\n            padding: 5px;\n    \n            display: grid;\n            grid-template-columns: 20px 120px;\n            align-items: center;\n            gap: 10px;\n            img {\n                padding: 0;\n                @include index.icon-size(20px)\n            }\n            &:hover p {\n                display: none;\n            }\n            &:hover:after {\n                content: \"Click to see code\";\n            }\n          }\n        }\n      }\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/breakpoints-aside.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/breakpoints-aside.scss ***!
  \************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `@media all and (max-width: 768px) {
  body #content #aside--sidebar-hide {
    display: none;
  }
  body #content aside {
    grid-column: 1;
    justify-content: center;
  }
  body #content aside .aside-top {
    margin-bottom: 50px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/breakpoints-aside.scss"],"names":[],"mappings":"AAAA;EAII;IACE,aAAA;EAFJ;EAIE;IACE,cAAA;IAEA,uBAAA;EAHJ;EAII;IACE,mBAAA;EAFN;AACF","sourcesContent":["@media all and (max-width: 768px) {\n\nbody {\n  #content {\n    #aside--sidebar-hide {\n      display: none;\n    }\n    aside {\n      grid-column: 1;\n\n      justify-content: center;\n      .aside-top {\n        margin-bottom: 50px;\n      }\n    }\n  }\n}\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/breakpoints-header.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/breakpoints-header.scss ***!
  \*************************************************************************************************************************/
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
:root.dark {
  --theme-almond: tomato;
}
:root.light {
  --theme-almond: blanchedalmond;
}
:root body {
  font-family: "Poppins", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  min-height: 100vh;
  background-color: #29292e;
}
:root body #content {
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-template-rows: 100px 1fr;
}

@media all and (max-width: 768px) {
  body #content #header--sidebar-hide {
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    grid-column: 1;
  }
  body #content header {
    display: none;
  }
  body #content header h2 {
    font-size: 1.4rem;
  }
  body #content header div .button-open-add-task {
    padding: 12px;
  }
  body #content header div .button-open-add-task p {
    display: none;
  }
  body #content header div .button-open-add-task img {
    height: 15px;
    width: 15px;
  }
  body #content header div .button-open-edit-board {
    padding: 12px;
  }
  body #content header div .button-open-edit-board img {
    height: 15px;
    width: 15px;
  }
  body #content header div .button-sidebar {
    padding: 12px;
  }
  body #content header div .button-sidebar img {
    height: 15px;
    width: 15px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/index.scss","webpack://./src/styles/breakpoints-header.scss"],"names":[],"mappings":"AA0DA;EACE,mBAAA;EACA,+DAAA;EACA,mBAAA;EACA,kBAAA;ACzDF;AD4DA;EACE,sBAAA;EACA,+DAAA;EACA,mBAAA;EACA,kBAAA;AC1DF;AD6DA,sBAAA;AACA;EACE,sBAAA;AC3DF;;AD8DA;;;;;;;;;;;;;EAaA,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;AC3DA;;AD8DA;;;;EAIA,oBAAA;EACA,eAAA;AC3DA;;AD8DA,uBAAA;AAEE;EACE,sBAAA;AC5DJ;AD8DE;EACE,8BAAA;AC5DJ;AD8DE;EACE,6IAAA;EACA,iBAAA;EACA,yBApHW;ACwDf;AD6DI;EACA,aAAA;EACA,gCAAA;EACA,6BAAA;AC3DJ;;AA5DA;EAII;IACE,aAAA;IAEA,aAAA;IACA,sBAAA;IACA,uBAAA;IACA,QAAA;IACA,cAAA;EA2DJ;EAzDE;IACE,aAAA;EA2DJ;EA1DI;IACE,iBAAA;EA4DN;EAzDM;IACE,aAAA;EA2DR;EA1DQ;IACE,aAAA;EA4DV;EA1DQ;IDgBR,YCfmC;IDgBnC,WChBmC;EA6DnC;EA1DM;IACE,aAAA;EA4DR;EA3DQ;IDUR,YCTmC;IDUnC,WCVmC;EA8DnC;EA1DM;IACE,aAAA;EA4DR;EA3DQ;IDGR,YCFmC;IDGnC,WCHmC;EA8DnC;AACF","sourcesContent":["$theme-dark: #37363e;\n$theme-darker: #29292e;\n$theme-purple: #8570fc;\n$theme-gray: #414146;\n$font-white: #f0f0f0;\n$font-gray: #9e9e9e;\n$border-dark: #474747;\n$card-shadow: #1a1a1a;\n$theme-red: #ff5c5c;\n\n@mixin button-focus($top, $left) {\n  &::after {\n    display: inline-block;\n    position: relative;\n    top: $top;\n    left: $left;\n    content: '';\n    height: 6px;\n    width: 6px;\n    background-color: aqua;\n\n    animation-duration: 2s;\n    animation-name: glow;\n    animation-iteration-count: infinite;\n    animation-direction: alternate;\n\n    border-radius: 50px;\n  }\n  @keyframes glow {\n    from {\n      transform: scale(100%);\n      opacity: 0.4;\n    }\n\n    to {\n      transform: scale(120%);\n      opacity: 1;\n    }\n  }\n}\n\n@mixin icon-size($pixel) {\n  height: $pixel;\n  width: $pixel;\n}\n\n@mixin button-styling {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@font-face {\n  font-family: 'Lato';\n  src: url('../fonts/Lato-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Poppins';\n  src: url('../fonts/Poppins-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/* --- CSS Reset --- */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\nmargin: 0;\npadding: 0;\nborder: 0;\nfont-size: 100%;\nfont: inherit;\nvertical-align: baseline;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\nfont-family: inherit;\nfont-size: 100%;\n}\n\n/* --- Custom CSS --- */\n:root {\n  &.dark {\n    --theme-almond: tomato;\n  }\n  &.light {\n    --theme-almond: blanchedalmond;\n  }\n  body {\n    font-family: 'Poppins', system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    min-height: 100vh;\n    background-color: $theme-darker;\n    #content {\n    display: grid;\n    grid-template-columns: 320px 1fr;\n    grid-template-rows: 100px 1fr;\n    }\n  }\n}\n\n\n","@use 'index';\n\n@media all and (max-width: 768px) {\n\nbody {\n  #content {\n    #header--sidebar-hide {\n      padding: 25px;\n\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      gap: 5px;\n      grid-column: 1;\n    }\n    header {\n      display: none;\n      h2 {\n        font-size: 1.4rem;\n      }\n      div {\n        .button-open-add-task {\n          padding: 12px;\n          p {\n            display: none;\n          }\n          img {\n            @include index.icon-size(15px);\n          }\n        }\n        .button-open-edit-board {\n          padding: 12px;\n          img {\n            @include index.icon-size(15px);\n\n          }\n        }\n        .button-sidebar {\n          padding: 12px;\n          img {\n            @include index.icon-size(15px);\n          }\n        }\n      }\n    }\n  }\n}\n  \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/breakpoints-index.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/breakpoints-index.scss ***!
  \************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `@media all and (max-width: 768px) {
  body #content {
    grid-template-columns: 1fr;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/breakpoints-index.scss"],"names":[],"mappings":"AAAA;EAGE;IACA,0BAAA;EADA;AACF","sourcesContent":["@media all and (max-width: 768px) {\n\nbody {\n  #content {\n  grid-template-columns: 1fr;\n  }\n}\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/breakpoints-main.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/breakpoints-main.scss ***!
  \***********************************************************************************************************************/
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
:root.dark {
  --theme-almond: tomato;
}
:root.light {
  --theme-almond: blanchedalmond;
}
:root body {
  font-family: "Poppins", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  min-height: 100vh;
  background-color: #29292e;
}
:root body #content {
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-template-rows: 100px 1fr;
}

@media all and (max-width: 768px) {
  body #content #main--sidebar-hide {
    display: grid;
    grid-column: 1;
  }
  body #content main {
    display: none;
  }
  body #content main .due-board__header {
    padding: 10px 20px 10px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  body #content main .due-board__header div h2 {
    font-size: 0.6rem;
    line-height: 0.5rem;
  }
  body #content main .due-board__header div h3 {
    font-size: 1.1rem;
    white-space: wrap;
  }
  body #content main .due-board__header .hr {
    display: none;
  }
  body #content main .due-board__header button {
    padding: 5px;
  }
  body #content main .due-board__header button p {
    display: none;
  }
  body #content main .due-board__header button img {
    height: 25px;
    width: 25px;
  }
  body #content main .due-board ul {
    padding: 10px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/index.scss","webpack://./src/styles/breakpoints-main.scss"],"names":[],"mappings":"AA0DA;EACE,mBAAA;EACA,+DAAA;EACA,mBAAA;EACA,kBAAA;ACzDF;AD4DA;EACE,sBAAA;EACA,+DAAA;EACA,mBAAA;EACA,kBAAA;AC1DF;AD6DA,sBAAA;AACA;EACE,sBAAA;AC3DF;;AD8DA;;;;;;;;;;;;;EAaA,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;AC3DA;;AD8DA;;;;EAIA,oBAAA;EACA,eAAA;AC3DA;;AD8DA,uBAAA;AAEE;EACE,sBAAA;AC5DJ;AD8DE;EACE,8BAAA;AC5DJ;AD8DE;EACE,6IAAA;EACA,iBAAA;EACA,yBApHW;ACwDf;AD6DI;EACA,aAAA;EACA,gCAAA;EACA,6BAAA;AC3DJ;;AA5DA;EAII;IACE,aAAA;IAEA,cAAA;EA2DJ;EAzDE;IACE,aAAA;EA2DJ;EAzDM;IACE,4BAAA;IAEA,aAAA;IACA,mBAAA;IACA,SAAA;EA0DR;EAxDU;IACE,iBAAA;IACA,mBAAA;EA0DZ;EAxDU;IACE,iBAAA;IACA,iBAAA;EA0DZ;EAvDQ;IACE,aAAA;EAyDV;EAvDQ;IACE,YAAA;EAyDV;EAxDU;IACE,aAAA;EA0DZ;EAxDU;IDIV,YCHqC;IDIrC,WCJqC;EA2DrC;EAvDM;IACE,aAAA;EAyDR;AACF","sourcesContent":["$theme-dark: #37363e;\n$theme-darker: #29292e;\n$theme-purple: #8570fc;\n$theme-gray: #414146;\n$font-white: #f0f0f0;\n$font-gray: #9e9e9e;\n$border-dark: #474747;\n$card-shadow: #1a1a1a;\n$theme-red: #ff5c5c;\n\n@mixin button-focus($top, $left) {\n  &::after {\n    display: inline-block;\n    position: relative;\n    top: $top;\n    left: $left;\n    content: '';\n    height: 6px;\n    width: 6px;\n    background-color: aqua;\n\n    animation-duration: 2s;\n    animation-name: glow;\n    animation-iteration-count: infinite;\n    animation-direction: alternate;\n\n    border-radius: 50px;\n  }\n  @keyframes glow {\n    from {\n      transform: scale(100%);\n      opacity: 0.4;\n    }\n\n    to {\n      transform: scale(120%);\n      opacity: 1;\n    }\n  }\n}\n\n@mixin icon-size($pixel) {\n  height: $pixel;\n  width: $pixel;\n}\n\n@mixin button-styling {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@font-face {\n  font-family: 'Lato';\n  src: url('../fonts/Lato-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Poppins';\n  src: url('../fonts/Poppins-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/* --- CSS Reset --- */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\nmargin: 0;\npadding: 0;\nborder: 0;\nfont-size: 100%;\nfont: inherit;\nvertical-align: baseline;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\nfont-family: inherit;\nfont-size: 100%;\n}\n\n/* --- Custom CSS --- */\n:root {\n  &.dark {\n    --theme-almond: tomato;\n  }\n  &.light {\n    --theme-almond: blanchedalmond;\n  }\n  body {\n    font-family: 'Poppins', system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    min-height: 100vh;\n    background-color: $theme-darker;\n    #content {\n    display: grid;\n    grid-template-columns: 320px 1fr;\n    grid-template-rows: 100px 1fr;\n    }\n  }\n}\n\n\n","@use 'index';\n\n@media all and (max-width: 768px) {\n\nbody {\n  #content {\n    #main--sidebar-hide {\n      display: grid;\n\n      grid-column: 1;\n    }\n    main {\n      display: none;\n      .due-board {\n        &__header {\n          padding: 10px 20px 10px 20px;\n\n          display: flex;\n          align-items: center;\n          gap: 10px;\n          div {\n            h2 {\n              font-size: 0.6rem;\n              line-height: 0.5rem;\n            }\n            h3 {\n              font-size: 1.1rem;\n              white-space: wrap;\n            }\n          }\n          .hr {\n            display: none;\n          }\n          button {\n            padding: 5px;\n            p {\n              display: none;\n            }\n            img {\n              @include index.icon-size(25px);\n            }\n          }\n        }\n        ul {\n          padding: 10px;\n        }\n      }\n    }\n  }\n}\n  \n}"],"sourceRoot":""}]);
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
:root.dark {
  --theme-almond: tomato;
}
:root.light {
  --theme-almond: blanchedalmond;
}
:root body {
  font-family: "Poppins", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  min-height: 100vh;
  background-color: #29292e;
}
:root body #content {
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-template-rows: 100px 1fr;
}

body #content .dialog-create-board,
body #content .dialog-edit-board {
  width: min(380px, 100%);
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
  width: 100%;
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
body #content .dialog-add-task,
body #content .dialog-edit-task {
  width: min(380px, 100%);
  background-color: #37363e;
  border: none;
  border-radius: 10px;
  padding: 10px 25px;
}
body #content .dialog-add-task::backdrop,
body #content .dialog-edit-task::backdrop {
  background-color: black;
  opacity: 0.6;
}
body #content .dialog-add-task div,
body #content .dialog-edit-task div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
body #content .dialog-add-task div h6,
body #content .dialog-edit-task div h6 {
  color: #f0f0f0;
  font-weight: bold;
  padding: 10px 0px;
}
body #content .dialog-add-task div div,
body #content .dialog-edit-task div div {
  display: flex;
  gap: 15px;
}
body #content .dialog-add-task div div button,
body #content .dialog-edit-task div div button {
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
body #content .dialog-add-task div div button:hover,
body #content .dialog-edit-task div div button:hover {
  filter: brightness(120%);
}
body #content .dialog-add-task div div button img,
body #content .dialog-edit-task div div button img {
  height: 20px;
  width: 20px;
}
body #content .dialog-add-task form ul,
body #content .dialog-edit-task form ul {
  display: grid;
  gap: 10px;
}
body #content .dialog-add-task form ul li,
body #content .dialog-edit-task form ul li {
  list-style: none;
}
body #content .dialog-add-task form ul li div label,
body #content .dialog-edit-task form ul li div label {
  color: #f0f0f0;
  font-size: 0.8rem;
  margin: 4px;
}
body #content .dialog-add-task form ul li div span,
body #content .dialog-edit-task form ul li div span {
  color: #ff5c5c;
  font-size: 0.8rem;
  margin: 4px;
}
body #content .dialog-add-task form ul li input,
body #content .dialog-edit-task form ul li input {
  color: #f0f0f0;
  background-color: #37363e;
  border: 1px solid #414146;
  border-radius: 5px;
  caret-color: #f0f0f0;
  height: 35px;
  padding: 10px;
  width: 100%;
}
body #content .dialog-add-task form ul li input::placeholder,
body #content .dialog-edit-task form ul li input::placeholder {
  font-size: 0.8rem;
  padding: 5px;
}
body #content .dialog-add-task form ul li input:focus,
body #content .dialog-edit-task form ul li input:focus {
  outline: none;
}
body #content .dialog-add-task form ul li textarea,
body #content .dialog-edit-task form ul li textarea {
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
body #content .dialog-add-task form ul li textarea::placeholder,
body #content .dialog-edit-task form ul li textarea::placeholder {
  font-size: 0.8rem;
  padding: 5px;
}
body #content .dialog-add-task form ul li textarea:focus,
body #content .dialog-edit-task form ul li textarea:focus {
  outline: none;
}
body #content .dialog-add-task form ul li input[type=date],
body #content .dialog-edit-task form ul li input[type=date] {
  font-size: 0.8rem;
  width: 100%;
  cursor: pointer;
}
body #content .dialog-add-task form ul li input[type=date]::-webkit-calendar-picker-indicator,
body #content .dialog-edit-task form ul li input[type=date]::-webkit-calendar-picker-indicator {
  filter: invert(1);
}
body #content .dialog-add-task form ul li select,
body #content .dialog-edit-task form ul li select {
  font-size: 0.8rem;
  color: #f0f0f0;
  background-color: #37363e;
  border: 1px solid #414146;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  cursor: pointer;
}
body #content .dialog-add-task form ul li select:focus,
body #content .dialog-edit-task form ul li select:focus {
  outline: none;
}
body #content .dialog-add-task form ul li button,
body #content .dialog-edit-task form ul li button {
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
body #content .dialog-add-task form ul li button:hover,
body #content .dialog-edit-task form ul li button:hover {
  filter: brightness(120%);
}
body #content .dialog-read-task {
  width: min(380px, 100%);
  background-color: #37363e;
  border: none;
  border-radius: 10px;
  padding: 10px 25px;
}
body #content .dialog-read-task[open] {
  display: grid;
}
body #content .dialog-read-task::backdrop {
  background-color: black;
  opacity: 0.6;
}
body #content .dialog-read-task h5 {
  color: #f0f0f0;
  font-weight: bold;
  margin: 20px 0px 5px 0px;
}
body #content .dialog-read-task p {
  color: #9e9e9e;
  font-size: 0.8rem;
  line-height: 25px;
  margin: 12px 0px;
}
body #content .dialog-read-task__info {
  margin: 15px 0px 10px 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
body #content .dialog-read-task__info h6 {
  color: #f0f0f0;
  font-size: 0.8rem;
  width: max-content;
  background-color: #414146;
  padding: 4px 15px;
  border-radius: 70px;
  display: flex;
  align-items: center;
}
body #content .dialog-read-task__info div {
  width: min-content;
  background-color: #414146;
  padding: 4px 15px;
  border-radius: 70px;
  display: flex;
  align-items: center;
  gap: 10px;
}
body #content .dialog-read-task__info div img {
  height: 15px;
  width: 15px;
}
body #content .dialog-read-task__info div span {
  color: #f0f0f0;
  font-size: 0.8rem;
}
body #content .dialog-read-task__buttons {
  margin: 20px 0px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 90px;
  gap: 10px;
}
body #content .dialog-read-task__buttons button {
  color: #f0f0f0;
  font-weight: bold;
  background-color: #8570fc;
  border: none;
  border-radius: 50px;
  height: 40px;
  cursor: pointer;
  transition: filter 0.2s;
}
body #content .dialog-read-task__buttons button:hover {
  filter: brightness(120%);
}
body #content .dialog-read-task__buttons button:focus {
  outline: none;
}
body #content .dialog-read-task__buttons .button-proceed-task--delete {
  background-color: rgb(202, 54, 54);
}
body #content .dialog-read-task__buttons div {
  display: flex;
  align-items: center;
  gap: 10px;
}
body #content .dialog-read-task__buttons div button {
  display: flex;
  align-items: center;
  padding: 10px;
}
body #content .dialog-read-task__buttons div button img {
  height: 20px;
  width: 20px;
}
body #content .dialog-read-task__buttons div button:last-child img {
  scale: 120%;
}`, "",{"version":3,"sources":["webpack://./src/styles/index.scss","webpack://./src/styles/dialog.scss"],"names":[],"mappings":"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","sourcesContent":["$theme-dark: #37363e;\n$theme-darker: #29292e;\n$theme-purple: #8570fc;\n$theme-gray: #414146;\n$font-white: #f0f0f0;\n$font-gray: #9e9e9e;\n$border-dark: #474747;\n$card-shadow: #1a1a1a;\n$theme-red: #ff5c5c;\n\n@mixin button-focus($top, $left) {\n  &::after {\n    display: inline-block;\n    position: relative;\n    top: $top;\n    left: $left;\n    content: '';\n    height: 6px;\n    width: 6px;\n    background-color: aqua;\n\n    animation-duration: 2s;\n    animation-name: glow;\n    animation-iteration-count: infinite;\n    animation-direction: alternate;\n\n    border-radius: 50px;\n  }\n  @keyframes glow {\n    from {\n      transform: scale(100%);\n      opacity: 0.4;\n    }\n\n    to {\n      transform: scale(120%);\n      opacity: 1;\n    }\n  }\n}\n\n@mixin icon-size($pixel) {\n  height: $pixel;\n  width: $pixel;\n}\n\n@mixin button-styling {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@font-face {\n  font-family: 'Lato';\n  src: url('../fonts/Lato-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Poppins';\n  src: url('../fonts/Poppins-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/* --- CSS Reset --- */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\nmargin: 0;\npadding: 0;\nborder: 0;\nfont-size: 100%;\nfont: inherit;\nvertical-align: baseline;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\nfont-family: inherit;\nfont-size: 100%;\n}\n\n/* --- Custom CSS --- */\n:root {\n  &.dark {\n    --theme-almond: tomato;\n  }\n  &.light {\n    --theme-almond: blanchedalmond;\n  }\n  body {\n    font-family: 'Poppins', system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    min-height: 100vh;\n    background-color: $theme-darker;\n    #content {\n    display: grid;\n    grid-template-columns: 320px 1fr;\n    grid-template-rows: 100px 1fr;\n    }\n  }\n}\n\n\n","@use 'index';\n\nbody {\n  #content {\n    .dialog-create-board,\n    .dialog-edit-board {\n      width: min(380px, 100%);\n      background-color: index.$theme-dark;\n      border: none;\n      border-radius: 10px;;\n      padding: 10px 25px;\n\n      &::backdrop {\n        background-color: black;\n        opacity: 0.6;\n      }\n      div {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        h6 {\n          color: index.$font-white;\n          font-weight: bold;\n          padding: 10px 0px;\n        }\n        div {\n          display: flex;\n          gap: 15px;\n          button {\n            background-color: transparent;\n            border: none;\n            background-color: index.$theme-gray;\n            border-radius: 50px;\n            padding: 5px;\n            cursor: pointer;\n  \n            display: flex;\n            align-items: center;\n  \n            transition: all 0.2s;\n            &:hover {\n              filter: brightness(120%);\n            }\n            img {\n              @include index.icon-size(20px);\n            }\n          }\n        }\n      }\n      form {\n        display: grid;\n        div {\n          label {\n            color: index.$font-white;\n            font-size: 0.8rem;\n            margin: 4px;\n          }\n          span {\n            color: #ff5c5c;\n            font-size: 0.8rem;\n            margin: 4px;\n          }\n        }\n\n        input {\n          color: index.$font-white;\n          background-color: index.$theme-dark;\n          border: 1px solid index.$theme-gray;\n          border-radius: 5px;\n          caret-color: index.$font-white;\n          height: 35px;\n          padding: 10px;\n          width: 100%;\n          &::placeholder {\n            font-size: 0.8rem;\n            padding: 5px;\n          }\n          &:focus {\n            outline: none;\n          }\n        }\n        button {\n          color: index.$font-white;\n          font-weight: bold;\n          background-color: index.$theme-purple;\n          border: none;\n          border-radius: 50px;\n          padding: 5px 0px;\n          margin: 20px 0px;\n          cursor: pointer;\n\n          transition: all 0.2s;\n          &:hover {\n            filter: brightness(120%);\n          }\n        }\n      }\n    }\n    .dialog-add-task,\n    .dialog-edit-task {\n      width: min(380px, 100%);\n      background-color: index.$theme-dark;\n      border: none;\n      border-radius: 10px;;\n      padding: 10px 25px;\n\n      &::backdrop {\n        background-color: black;\n        opacity: 0.6;\n      }\n      div {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        h6 {\n          color: index.$font-white;\n          font-weight: bold;\n          padding: 10px 0px;\n        }\n        div {\n          display: flex;\n          gap: 15px;\n          button {\n            background-color: transparent;\n            border: none;\n            background-color: index.$theme-gray;\n            border-radius: 50px;\n            padding: 5px;\n            cursor: pointer;\n  \n            display: flex;\n            align-items: center;\n  \n            transition: all 0.2s;\n            &:hover {\n              filter: brightness(120%);\n            }\n            img {\n              @include index.icon-size(20px);\n            }\n          }\n        }\n      }\n      form {\n        ul {\n          display: grid;\n          gap: 10px;\n          li {\n            list-style: none;\n            div {\n              label {\n                color: index.$font-white;\n                font-size: 0.8rem;\n                margin: 4px;\n              }\n              span {\n                color: index.$theme-red;\n                font-size: 0.8rem;\n                margin: 4px;\n              }\n            }\n            input {\n              color: index.$font-white;\n              background-color: index.$theme-dark;\n              border: 1px solid index.$theme-gray;\n              border-radius: 5px;\n              caret-color: index.$font-white;\n              height: 35px;\n              padding: 10px;\n              width: 100%;\n              &::placeholder {\n                font-size: 0.8rem;\n                padding: 5px;\n              }\n              &:focus {\n                outline: none;\n              }\n            }\n            textarea {\n              font-size: 0.9rem;\n              color: index.$font-white;\n              background-color: index.$theme-dark;\n              border: 1px solid index.$theme-gray;\n              border-radius: 5px;\n              caret-color: index.$font-white;\n              padding: 10px;\n              resize: vertical;\n              width: 100%;\n              &::placeholder {\n                font-size: 0.8rem;\n                padding: 5px;\n              }\n              &:focus {\n                outline: none;\n              }\n            }\n            input[type=\"date\"] {\n              font-size: 0.8rem;\n              width: 100%;\n              cursor: pointer;\n              &::-webkit-calendar-picker-indicator {\n                filter: invert(1);\n              }\n            }\n            select {\n              font-size: 0.8rem;\n              color: index.$font-white;\n              background-color: index.$theme-dark;\n              border: 1px solid index.$theme-gray;\n              border-radius: 5px;\n              padding: 10px;\n              width: 100%;\n              cursor: pointer;\n              &:focus {\n                outline: none;\n              }\n            }\n            button {\n              color: index.$font-white;\n              font-weight: bold;\n              background-color: index.$theme-purple;\n              border: none;\n              border-radius: 50px;\n              padding: 5px 0px;\n              margin: 20px 0px;\n              width: 100%;\n              cursor: pointer;\n    \n              transition: all 0.2s;\n              &:hover {\n                filter: brightness(120%);\n              }\n            }\n          }\n        }\n      }\n    }\n    .dialog-read-task {\n      width: min(380px, 100%);\n      background-color: index.$theme-dark;\n      border: none;\n      border-radius: 10px;;\n      padding: 10px 25px;\n      &[open] {\n        display: grid;\n      }\n      &::backdrop {\n        background-color: black;\n        opacity: 0.6;\n      }\n      h5 {\n        color: index.$font-white;\n        font-weight: bold;\n        // width: 350px;\n        margin: 20px 0px 5px 0px;\n      }\n\n      p {\n        color: index.$font-gray;\n        font-size: 0.8rem;\n        // width: 350px;\n        line-height: 25px;\n        margin: 12px 0px;\n      }\n      &__info {\n        margin: 15px 0px 10px 0px;\n\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n        h6 {\n          color: index.$font-white;\n          font-size: 0.8rem;\n          width: max-content;\n          background-color: index.$theme-gray;\n          padding: 4px 15px;\n          border-radius: 70px;\n  \n          display: flex;\n          align-items: center;\n        }\n        div {\n          width: min-content;\n          background-color: index.$theme-gray;\n          padding: 4px 15px;\n          border-radius: 70px;\n  \n          display: flex;\n          align-items: center;\n          gap: 10px;\n          img {\n            @include index.icon-size(15px);\n          }\n          span {\n            color: index.$font-white;\n            font-size: 0.8rem;\n          }\n        }\n      }\n      &__buttons {\n        margin: 20px 0px;\n\n        display: grid;\n        align-items: center;\n        grid-template-columns: 1fr 90px;\n        gap: 10px;\n\n        button {\n          color: index.$font-white;\n          font-weight: bold;\n          background-color: index.$theme-purple;\n          border: none;\n          border-radius: 50px;\n          height: 40px;\n          cursor: pointer;\n\n          transition: filter 0.2s;\n          &:hover {\n            filter: brightness(120%);\n          }\n          &:focus {\n            outline: none;\n          }\n        }\n        .button-proceed-task--delete {\n          background-color: rgb(202, 54, 54);\n        }\n        div {\n          display: flex;\n          align-items: center;\n          gap: 10px;\n\n          button {\n            display: flex;\n            align-items: center;\n            padding: 10px;\n            img {\n              @include index.icon-size(20px);\n            }\n          }\n          button:last-child {\n            img {\n              scale: 120%;\n            }\n          }\n        }\n      }\n    }\n  }\n}"],"sourceRoot":""}]);
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
:root.dark {
  --theme-almond: tomato;
}
:root.light {
  --theme-almond: blanchedalmond;
}
:root body {
  font-family: "Poppins", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  min-height: 100vh;
  background-color: #29292e;
}
:root body #content {
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-template-rows: 100px 1fr;
}

body #content #header--sidebar-hide {
  grid-column: 1/3;
}
body #content header {
  padding: 0px 35px;
  background-color: #37363e;
  border-bottom: 1px solid #474747;
  grid-column: 2/3;
  grid-row: 1/2;
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
body #content header div button[disabled] {
  display: none;
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
body #content header div .button-sidebar {
  display: none;
  padding: 12px;
  background-color: #414146;
  border-radius: 50px;
}
body #content header div .button-sidebar img {
  height: 20px;
  width: 20px;
  transform: scale(105%);
}
body #content header div #button--sidebar-hide {
  display: flex;
  justify-content: center;
  align-items: center;
}`, "",{"version":3,"sources":["webpack://./src/styles/index.scss","webpack://./src/styles/header.scss"],"names":[],"mappings":"AA0DA;EACE,mBAAA;EACA,+DAAA;EACA,mBAAA;EACA,kBAAA;ACzDF;AD4DA;EACE,sBAAA;EACA,+DAAA;EACA,mBAAA;EACA,kBAAA;AC1DF;AD6DA,sBAAA;AACA;EACE,sBAAA;AC3DF;;AD8DA;;;;;;;;;;;;;EAaA,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;AC3DA;;AD8DA;;;;EAIA,oBAAA;EACA,eAAA;AC3DA;;AD8DA,uBAAA;AAEE;EACE,sBAAA;AC5DJ;AD8DE;EACE,8BAAA;AC5DJ;AD8DE;EACE,6IAAA;EACA,iBAAA;EACA,yBApHW;ACwDf;AD6DI;EACA,aAAA;EACA,gCAAA;EACA,6BAAA;AC3DJ;;AA1DI;EACE,gBAAA;AA6DN;AA3DI;EACE,iBAAA;EACA,yBDTO;ECUP,gCAAA;EAEA,gBAAA;EAEA,aAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AA2DN;AA1DM;EACE,iBAAA;EACA,cDhBK;AC4Eb;AA1DM;EACE,aAAA;EACA,SAAA;AA4DR;AA3DQ;EACE,oBAAA;EDqBR,YAAA;EACA,6BAAA;EACA,eAAA;ACyCF;AA/DU;EACE,aAAA;AAiEZ;AA/DU;EACE,wBAAA;AAiEZ;AA/DU;EACE,qBAAA;AAiEZ;AA7DQ;EACE,iBAAA;EACA,mBAAA;EACA,yBDvCK;ECyCL,aAAA;EACA,mBAAA;EACA,QAAA;AA8DV;AA7DU;EACE,cD3CC;EC4CD,iBAAA;EACA,eAAA;AA+DZ;AA7DU;EDTR,YCUmC;EDTnC,WCSmC;AAgErC;AA7DQ;EACE,aAAA;EACA,yBDtDG;ECuDH,mBAAA;EDLR,aAAA;EACA,uBAAA;EACA,mBAAA;ACqEF;AA/DU;EDnBR,YCoBmC;EDnBnC,WCmBmC;AAkErC;AA/DQ;EACE,aAAA;EACA,aAAA;EACA,yBDjEG;ECkEH,mBAAA;AAiEV;AAhEU;ED5BR,YC6BmC;ED5BnC,WC4BmC;EACzB,sBAAA;AAmEZ;AAhEQ;EDtBN,aAAA;EACA,uBAAA;EACA,mBAAA;ACyFF","sourcesContent":["$theme-dark: #37363e;\n$theme-darker: #29292e;\n$theme-purple: #8570fc;\n$theme-gray: #414146;\n$font-white: #f0f0f0;\n$font-gray: #9e9e9e;\n$border-dark: #474747;\n$card-shadow: #1a1a1a;\n$theme-red: #ff5c5c;\n\n@mixin button-focus($top, $left) {\n  &::after {\n    display: inline-block;\n    position: relative;\n    top: $top;\n    left: $left;\n    content: '';\n    height: 6px;\n    width: 6px;\n    background-color: aqua;\n\n    animation-duration: 2s;\n    animation-name: glow;\n    animation-iteration-count: infinite;\n    animation-direction: alternate;\n\n    border-radius: 50px;\n  }\n  @keyframes glow {\n    from {\n      transform: scale(100%);\n      opacity: 0.4;\n    }\n\n    to {\n      transform: scale(120%);\n      opacity: 1;\n    }\n  }\n}\n\n@mixin icon-size($pixel) {\n  height: $pixel;\n  width: $pixel;\n}\n\n@mixin button-styling {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@font-face {\n  font-family: 'Lato';\n  src: url('../fonts/Lato-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Poppins';\n  src: url('../fonts/Poppins-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/* --- CSS Reset --- */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\nmargin: 0;\npadding: 0;\nborder: 0;\nfont-size: 100%;\nfont: inherit;\nvertical-align: baseline;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\nfont-family: inherit;\nfont-size: 100%;\n}\n\n/* --- Custom CSS --- */\n:root {\n  &.dark {\n    --theme-almond: tomato;\n  }\n  &.light {\n    --theme-almond: blanchedalmond;\n  }\n  body {\n    font-family: 'Poppins', system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    min-height: 100vh;\n    background-color: $theme-darker;\n    #content {\n    display: grid;\n    grid-template-columns: 320px 1fr;\n    grid-template-rows: 100px 1fr;\n    }\n  }\n}\n\n\n","@use 'index';\n\nbody {\n  #content {\n    #header--sidebar-hide {\n      grid-column: 1 / 3;\n    }\n    header {\n      padding: 0px 35px;\n      background-color: index.$theme-dark;\n      border-bottom: 1px solid index.$border-dark;\n\n      grid-column: 2 / 3;\n      // grid-column: 1 / 3;\n      grid-row: 1 / 2;  \n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      h2 {\n        font-size: 1.8rem;\n        color: index.$font-white;\n      }\n      div {\n        display: flex;\n        gap: 20px;\n        button {\n          transition: all 0.2s;\n          &[disabled] {\n            display: none;\n          }\n          &:hover {\n            filter: brightness(120%);\n          }\n          &:active {\n            transform: scale(90%);\n          }\n          @include index.button-styling();\n        }\n        .button-open-add-task {\n          padding: 0px 22px;\n          border-radius: 25px;\n          background-color: index.$theme-purple;\n\n          display: flex;\n          align-items: center;\n          gap: 5px;\n          p {\n            color: index.$font-white;\n            font-weight: bold;\n            font-size: 1rem;\n          }\n          img {\n            @include index.icon-size(20px);\n          }\n        }\n        .button-open-edit-board {\n          padding: 12px;\n          background-color: index.$theme-gray;\n          border-radius: 50px;\n\n          @include index.flex-center();\n          img {\n            @include index.icon-size(20px);\n          }\n        }\n        .button-sidebar {\n          display: none;\n          padding: 12px;\n          background-color: index.$theme-gray;\n          border-radius: 50px;\n          img {\n            @include index.icon-size(20px);\n            transform: scale(105%);\n          }\n        }\n        #button--sidebar-hide {\n          @include index.flex-center();\n        \n        }\n      }\n    }\n  }\n}"],"sourceRoot":""}]);
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
:root.dark {
  --theme-almond: tomato;
}
:root.light {
  --theme-almond: blanchedalmond;
}
:root body {
  font-family: "Poppins", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  min-height: 100vh;
  background-color: #29292e;
}
:root body #content {
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-template-rows: 100px 1fr;
}`, "",{"version":3,"sources":["webpack://./src/styles/index.scss"],"names":[],"mappings":"AA0DA;EACE,mBAAA;EACA,+DAAA;EACA,mBAAA;EACA,kBAAA;AAzDF;AA4DA;EACE,sBAAA;EACA,+DAAA;EACA,mBAAA;EACA,kBAAA;AA1DF;AA6DA,sBAAA;AACA;EACE,sBAAA;AA3DF;;AA8DA;;;;;;;;;;;;;EAaA,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;AA3DA;;AA8DA;;;;EAIA,oBAAA;EACA,eAAA;AA3DA;;AA8DA,uBAAA;AAEE;EACE,sBAAA;AA5DJ;AA8DE;EACE,8BAAA;AA5DJ;AA8DE;EACE,6IAAA;EACA,iBAAA;EACA,yBApHW;AAwDf;AA6DI;EACA,aAAA;EACA,gCAAA;EACA,6BAAA;AA3DJ","sourcesContent":["$theme-dark: #37363e;\n$theme-darker: #29292e;\n$theme-purple: #8570fc;\n$theme-gray: #414146;\n$font-white: #f0f0f0;\n$font-gray: #9e9e9e;\n$border-dark: #474747;\n$card-shadow: #1a1a1a;\n$theme-red: #ff5c5c;\n\n@mixin button-focus($top, $left) {\n  &::after {\n    display: inline-block;\n    position: relative;\n    top: $top;\n    left: $left;\n    content: '';\n    height: 6px;\n    width: 6px;\n    background-color: aqua;\n\n    animation-duration: 2s;\n    animation-name: glow;\n    animation-iteration-count: infinite;\n    animation-direction: alternate;\n\n    border-radius: 50px;\n  }\n  @keyframes glow {\n    from {\n      transform: scale(100%);\n      opacity: 0.4;\n    }\n\n    to {\n      transform: scale(120%);\n      opacity: 1;\n    }\n  }\n}\n\n@mixin icon-size($pixel) {\n  height: $pixel;\n  width: $pixel;\n}\n\n@mixin button-styling {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@font-face {\n  font-family: 'Lato';\n  src: url('../fonts/Lato-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Poppins';\n  src: url('../fonts/Poppins-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/* --- CSS Reset --- */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\nmargin: 0;\npadding: 0;\nborder: 0;\nfont-size: 100%;\nfont: inherit;\nvertical-align: baseline;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\nfont-family: inherit;\nfont-size: 100%;\n}\n\n/* --- Custom CSS --- */\n:root {\n  &.dark {\n    --theme-almond: tomato;\n  }\n  &.light {\n    --theme-almond: blanchedalmond;\n  }\n  body {\n    font-family: 'Poppins', system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    min-height: 100vh;\n    background-color: $theme-darker;\n    #content {\n    display: grid;\n    grid-template-columns: 320px 1fr;\n    grid-template-rows: 100px 1fr;\n    }\n  }\n}\n\n\n"],"sourceRoot":""}]);
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
:root.dark {
  --theme-almond: tomato;
}
:root.light {
  --theme-almond: blanchedalmond;
}
:root body {
  font-family: "Poppins", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  min-height: 100vh;
  background-color: #29292e;
}
:root body #content {
  display: grid;
  grid-template-columns: 320px 1fr;
  grid-template-rows: 100px 1fr;
}

body #content #main--sidebar-hide {
  grid-column: 1/3;
}
body #content main {
  background-color: #29292e;
  height: 100%;
  padding: 20px;
  grid-column: 2/3;
  grid-row: 2/3;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
body #content main .column {
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
}
body #content main .due-board {
  display: flex;
  flex-direction: column;
  grid-column: 1/span 3;
}
body #content main .due-board__header {
  padding: 30px 40px 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: end;
}
body #content main .due-board__header div h2 {
  color: #9e9e9e;
  font-size: 0.7rem;
  letter-spacing: 2px;
  font-weight: bold;
  line-height: 0.5rem;
}
body #content main .due-board__header div h3 {
  color: #f0f0f0;
  font-size: 1.3rem;
  white-space: nowrap;
}
body #content main .due-board__header .hr {
  border-bottom: 2px solid #414146;
  width: 100%;
  margin: 0px 50px;
  transform: translateY(-13px);
  justify-self: center;
}
body #content main .due-board__header button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  background-color: #8570fc;
  border-radius: 50px;
  padding: 4px 12px 3px 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s;
}
body #content main .due-board__header button:hover {
  filter: brightness(125%);
}
body #content main .due-board__header button p {
  color: #f0f0f0;
  font-size: 0.8rem;
  white-space: nowrap;
}
body #content main .due-board__header button img {
  height: 20px;
  width: 20px;
}
body #content main .due-board ul {
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
}
body #content main .due-board ul li {
  color: #f0f0f0;
  list-style: none;
  background-color: #37363e;
  border-radius: 7px;
  padding: 15px 20px 15px 20px;
  box-shadow: 1px 1px 10px #1a1a1a;
  height: min-content;
}
body #content main .due-board ul li h4 {
  font-size: 1rem;
  margin-bottom: 10px;
}
body #content main .due-board ul li p {
  font-size: 0.9rem;
  margin: 10px 0px;
}
body #content main .due-board ul li .task-footer {
  display: flex;
  justify-content: space-between;
}
body #content main .due-board ul li .task-footer__container {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #414146;
  padding: 4px 15px;
  border-radius: 70px;
}
body #content main .due-board ul li .task-footer__container img {
  height: 15px;
  width: 15px;
}
body #content main .due-board ul li .task-footer__container span {
  font-size: 0.8rem;
  letter-spacing: 0px;
}
body #content main .due-board ul li h5 {
  display: flex;
  align-items: center;
  color: #9e9e9e;
  font-size: 0.8rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/index.scss","webpack://./src/styles/main.scss"],"names":[],"mappings":"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","sourcesContent":["$theme-dark: #37363e;\n$theme-darker: #29292e;\n$theme-purple: #8570fc;\n$theme-gray: #414146;\n$font-white: #f0f0f0;\n$font-gray: #9e9e9e;\n$border-dark: #474747;\n$card-shadow: #1a1a1a;\n$theme-red: #ff5c5c;\n\n@mixin button-focus($top, $left) {\n  &::after {\n    display: inline-block;\n    position: relative;\n    top: $top;\n    left: $left;\n    content: '';\n    height: 6px;\n    width: 6px;\n    background-color: aqua;\n\n    animation-duration: 2s;\n    animation-name: glow;\n    animation-iteration-count: infinite;\n    animation-direction: alternate;\n\n    border-radius: 50px;\n  }\n  @keyframes glow {\n    from {\n      transform: scale(100%);\n      opacity: 0.4;\n    }\n\n    to {\n      transform: scale(120%);\n      opacity: 1;\n    }\n  }\n}\n\n@mixin icon-size($pixel) {\n  height: $pixel;\n  width: $pixel;\n}\n\n@mixin button-styling {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@font-face {\n  font-family: 'Lato';\n  src: url('../fonts/Lato-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Poppins';\n  src: url('../fonts/Poppins-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n/* --- CSS Reset --- */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\nmargin: 0;\npadding: 0;\nborder: 0;\nfont-size: 100%;\nfont: inherit;\nvertical-align: baseline;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\nfont-family: inherit;\nfont-size: 100%;\n}\n\n/* --- Custom CSS --- */\n:root {\n  &.dark {\n    --theme-almond: tomato;\n  }\n  &.light {\n    --theme-almond: blanchedalmond;\n  }\n  body {\n    font-family: 'Poppins', system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    min-height: 100vh;\n    background-color: $theme-darker;\n    #content {\n    display: grid;\n    grid-template-columns: 320px 1fr;\n    grid-template-rows: 100px 1fr;\n    }\n  }\n}\n\n\n","@use 'index';\n\nbody {\n  #content {\n    #main--sidebar-hide {\n      grid-column: 1 / 3;\n    }\n    main {\n      background-color: index.$theme-darker;\n      height: 100%;\n      padding: 20px;\n\n      grid-column: 2 / 3;\n      grid-row: 2 / 3;\n      display: grid;\n      gap: 20px;\n\n      // grid-template-columns: repeat(3, 1fr);\n      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n\n      .column {\n        display: flex;\n        flex-direction: column;\n        &__header {\n          margin-bottom: 20px;\n          h3 {\n            color: index.$font-gray;\n            font-size: 0.8rem;\n            font-weight: bold;\n            letter-spacing: 3px;\n          }\n          &-todo {\n            display: flex;\n            align-items: center;\n            gap: 7px;\n            div {\n              @include index.icon-size(10px);\n              background-color: aqua;\n              border-radius: 10px;;\n            }\n          }\n          &-doing {\n            display: flex;\n            align-items: center;\n            gap: 7px;\n            div {\n              @include index.icon-size(10px);\n              background-color: index.$theme-purple;\n              border-radius: 10px;;\n            }\n          }\n          &-done {\n            display: flex;\n            align-items: center;\n            gap: 7px;\n            div {\n              @include index.icon-size(10px);\n              background-color: lightgreen;\n              border-radius: 10px;;\n            }\n          }\n        }\n        ul {\n          display: flex;\n          flex-direction: column;\n          gap: 25px;\n          li {\n            color: index.$font-white;\n            list-style: none;\n            background-color: index.$theme-dark;\n            border-radius: 7px;\n            padding: 15px 20px 15px 20px;\n            box-shadow: 1px 1px 10px index.$card-shadow;\n            cursor: pointer;\n\n            transition: all 0.3s;\n            &:hover {\n              transform: translateY(-4px);\n            }\n            h4 {\n              font-size: 1rem;\n              margin-bottom: 10px;\n            }\n            p {\n              font-size: 0.9rem;\n              margin: 10px 0px;\n            }\n            .task-footer {\n              display: flex;\n              justify-content: space-between;\n              &__container {\n                display: flex;\n                align-items: center;\n                gap: 10px;\n                background-color: index.$theme-gray;\n                padding: 4px 15px;\n                border-radius: 70px;\n                img {\n                  @include index.icon-size(15px);\n                }\n                span  {\n                  font-size: 0.8rem;\n                  letter-spacing: 0px;\n                }\n              }\n            }\n            h5 {\n              display: flex;\n              align-items: center;\n              color: index.$font-gray;\n              font-size: 0.8rem;\n            }\n          };\n        }\n      }\n      \n      .due-board {\n        display: flex;\n        flex-direction: column;\n\n        grid-column: 1 / span 3;\n        &__header {\n          padding: 30px 40px 0px 40px;\n\n          display: flex;\n          justify-content: space-between;\n          align-items: end;\n          div {\n            h2 {\n              color: index.$font-gray;\n              font-size: 0.7rem;\n              letter-spacing: 2px;\n              font-weight: bold;\n              line-height: 0.5rem;\n            }\n            h3 {\n              color: index.$font-white;\n              font-size: 1.3rem;\n              white-space: nowrap;\n            }\n          }\n          .hr {\n            border-bottom: 2px solid index.$theme-gray;\n            width: 100%;\n            margin: 0px 50px;\n            transform: translateY(-13px);\n\n            justify-self: center;\n          }\n          button {\n            @include index.button-styling();\n            background-color: index.$theme-purple;\n            border-radius: 50px;\n            padding: 4px 12px 3px 20px;\n\n            display: flex;\n            align-items: center;\n            gap: 5px;\n\n            transition: all 0.3s;\n            &:hover {\n              filter: brightness(125%);\n            }\n            p {\n              color: index.$font-white;\n              font-size: 0.8rem;\n              white-space: nowrap;\n            }\n            img {\n              @include index.icon-size(20px);\n            }\n          }\n        }\n        ul {\n          padding: 40px;\n\n          display: grid;\n          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n          gap: 25px;\n          li {\n            color: index.$font-white;\n            list-style: none;\n            background-color: index.$theme-dark;\n            border-radius: 7px;\n            padding: 15px 20px 15px 20px;\n            box-shadow: 1px 1px 10px index.$card-shadow;\n            height: min-content;\n\n            h4 {\n              font-size: 1rem;\n              margin-bottom: 10px;\n            }\n            p {\n              font-size: 0.9rem;\n              margin: 10px 0px;\n            }\n            .task-footer {\n              display: flex;\n              justify-content: space-between;\n              &__container {\n                display: flex;\n                align-items: center;\n                gap: 10px;\n                background-color: index.$theme-gray;\n                padding: 4px 15px;\n                border-radius: 70px;\n                img {\n                  @include index.icon-size(15px);\n                }\n                span  {\n                  font-size: 0.8rem;\n                  letter-spacing: 0px;\n                }\n              }\n            }\n            h5 {\n              display: flex;\n              align-items: center;\n              color: index.$font-gray;\n              font-size: 0.8rem;\n            }\n          };\n        }\n      }\n    }\n  }\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */

function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

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

/***/ "./src/styles/breakpoints-aside.scss":
/*!*******************************************!*\
  !*** ./src/styles/breakpoints-aside.scss ***!
  \*******************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_aside_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./breakpoints-aside.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/breakpoints-aside.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_aside_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_aside_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_aside_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_aside_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/breakpoints-header.scss":
/*!********************************************!*\
  !*** ./src/styles/breakpoints-header.scss ***!
  \********************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./breakpoints-header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/breakpoints-header.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/breakpoints-index.scss":
/*!*******************************************!*\
  !*** ./src/styles/breakpoints-index.scss ***!
  \*******************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./breakpoints-index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/breakpoints-index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/breakpoints-main.scss":
/*!******************************************!*\
  !*** ./src/styles/breakpoints-main.scss ***!
  \******************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./breakpoints-main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/breakpoints-main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_breakpoints_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony export */   addNewTask: () => (/* binding */ addNewTask),
/* harmony export */   deleteBoard: () => (/* binding */ deleteBoard),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   editBoard: () => (/* binding */ editBoard),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   getActiveBoard: () => (/* binding */ getActiveBoard),
/* harmony export */   getBoards: () => (/* binding */ getBoards),
/* harmony export */   getBoardsTotal: () => (/* binding */ getBoardsTotal),
/* harmony export */   getDueTasks: () => (/* binding */ getDueTasks),
/* harmony export */   getSidebar: () => (/* binding */ getSidebar),
/* harmony export */   getTasks: () => (/* binding */ getTasks),
/* harmony export */   getTasksTotal: () => (/* binding */ getTasksTotal),
/* harmony export */   proceedTask: () => (/* binding */ proceedTask),
/* harmony export */   setActiveBoard: () => (/* binding */ setActiveBoard),
/* harmony export */   setActiveBoardToNull: () => (/* binding */ setActiveBoardToNull),
/* harmony export */   storeIndex: () => (/* binding */ storeIndex),
/* harmony export */   toggleSidebar: () => (/* binding */ toggleSidebar)
/* harmony export */ });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/factory.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");



let activeBoard = null;
let sidebar = true;

const boards = [
  {
    title: 'Kanban Project',
    tasks: [
      {
        title: 'Build UI for Project',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
        dueDate: '2023-09-20',
        priority: 'low',
        status: 'todo',
      },
      {
        title: 'Restructure Code into Modules',
        description: 'Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
        dueDate: '2023-09-21',
        priority: 'medium',
        status: 'todo',
      },
      {
        title: 'Make project responsive to all devices',
        description: 'Possimus natus qui nemo nihil laudantium dolore doloremque sapiente minima vero optio quam architecto maiores magni molestias nam, cupiditate praesentium et. Voluptatibus!',
        dueDate: '2023-09-23',
        priority: 'high',
        status: 'doing',
      },
      {
        title: 'Build UI for Project',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
        dueDate: '2023-09-20',
        priority: 'low',
        status: 'todo',
      },
      {
        title: 'Restructure Code into Modules',
        description: 'Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
        dueDate: '2023-09-21',
        priority: 'medium',
        status: 'todo',
      },
      {
        title: 'Make project responsive to all devices',
        description: 'Possimus natus qui nemo nihil laudantium dolore doloremque sapiente minima vero optio quam architecto maiores magni molestias nam, cupiditate praesentium et. Voluptatibus!',
        dueDate: '2023-09-23',
        priority: 'high',
        status: 'doing',
      },
      {
        title: 'Build UI for Project',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
        dueDate: '2023-09-20',
        priority: 'low',
        status: 'todo',
      },
      {
        title: 'Restructure Code into Modules',
        description: 'Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
        dueDate: '2023-09-21',
        priority: 'medium',
        status: 'todo',
      },
      {
        title: 'Make project responsive to all devices',
        description: 'Possimus natus qui nemo nihil laudantium dolore doloremque sapiente minima vero optio quam architecto maiores magni molestias nam, cupiditate praesentium et. Voluptatibus!',
        dueDate: '2023-09-23',
        priority: 'high',
        status: 'doing',
      },
      {
        title: 'Build UI for Project',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
        dueDate: '2023-09-20',
        priority: 'low',
        status: 'todo',
      },
      {
        title: 'Restructure Code into Modules',
        description: 'Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
        dueDate: '2023-09-21',
        priority: 'medium',
        status: 'todo',
      },
      {
        title: 'Make project responsive to all devices',
        description: 'Possimus natus qui nemo nihil laudantium dolore doloremque sapiente minima vero optio quam architecto maiores magni molestias nam, cupiditate praesentium et. Voluptatibus!',
        dueDate: '2023-09-23',
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
        dueDate: '2023-09-21',
        priority: 'high',
        status: 'todo',
      },
      {
        title: 'Make environments for development and production',
        description: 'Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
        dueDate: '2023-09-22',
        priority: 'low',
        status: 'done',
      },
    ]
  },
  {
    title: 'Etch-a-Sketch Project',
    tasks: [
      {
        title: 'Create Wireframe',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
        dueDate: '2023-09-21',
        priority: 'high',
        status: 'todo',
      },
      {
        title: 'Add animation',
        description: 'Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
        dueDate: '2023-09-29',
        priority: 'low',
        status: 'done',
      },
    ]
  },
  {
    title: 'Tic tac toe Project',
    tasks: [
      {
        title: 'Create Wireframe',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
        dueDate: '2023-09-21',
        priority: 'high',
        status: 'todo',
      },
      {
        title: 'Add animation',
        description: 'Reprehenderit nostrum facilis tenetur laborum voluptatibus deserunt exercitationem.',
        dueDate: '2023-09-29',
        priority: 'low',
        status: 'done',
      },
    ]
  },
]

function toggleSidebar() {
  sidebar = sidebar ? false : true;
  console.log(sidebar);
}

function getSidebar() {
  return sidebar;
}

function getDueTasks(dueWhen) {
  const copyOfBoards = boards.slice();

  const arr = [];

  copyOfBoards.forEach((board, index) => {
    const dueTasks = board.tasks.filter((task) => {
      if (dueWhen === 'today') {
        return task.status !== 'done' && (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(task.dueDate));
      } else if (dueWhen === 'this week') {
        return task.status !== 'done' && (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(task.dueDate));
      }
    })

    if (dueTasks.length !== 0) {
      arr.push({
        title: board.title,
        tasks: [...dueTasks],
        index: index
      });
    }
  })

  console.log(arr);
  console.log(boards);
  return arr;
}

function getTasks() {
  const indexOfActiveBoard = boards.findIndex((board) => board === getActiveBoard());

  return boards[indexOfActiveBoard].tasks;
}

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

function getTasksTotal() {
  const tasks = getTasks();

  const todo = tasks.filter((task) => task.status === 'todo').length;
  const doing = tasks.filter((task) => task.status === 'doing').length;
  const done = tasks.filter((task) => task.status === 'done').length;

  return { todo, doing, done };
}

function addNewTask() {
  const indexOfActiveBoard = boards.findIndex((board) => board === getActiveBoard());

  const inputTitle = document.querySelector('#input-add-task-title');
  const inputDescription = document.querySelector('#input-add-task-description');
  const inputDate = document.querySelector('#input-add-task-due-date');
  const inputPriority = document.querySelector('#input-add-task-priority');

  const newTask = (0,_factory__WEBPACK_IMPORTED_MODULE_0__.factoryTask)(
    inputTitle.value,
    inputDescription.value,
    inputDate.value,
    inputPriority.value
  );
  
  boards[indexOfActiveBoard].tasks.unshift(newTask);

  console.log(boards);
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
  const newBoard = getActiveBoard();

  newBoard.title = input.value;

  activeBoard = newBoard; // to display updated board after editing

  boards.splice(indexOfActiveBoard, 1, newBoard);
  console.log(boards[indexOfActiveBoard]);
  console.log(boards);
}

function editTask(e) {
  const indexOfActiveBoard = boards.findIndex((board) => board === getActiveBoard());
  const indexOfTask = e.target.closest('dialog').getAttribute('data-index');
  const newTask = boards[indexOfActiveBoard].tasks[indexOfTask];

  const inputTitle = document.querySelector('#input-edit-task-title');
  const inputDescription = document.querySelector('#input-edit-task-description');
  const inputDate = document.querySelector('#input-edit-task-due-date');
  const inputPriority = document.querySelector('#input-edit-task-priority');
  const inputStatus = document.querySelector('#input-edit-task-status');

  newTask.title = inputTitle.value;
  newTask.description = inputDescription.value;
  newTask.dueDate = inputDate.value;
  newTask.priority = inputPriority.value;
  newTask.status = inputStatus.value;

  console.log(indexOfActiveBoard);
  console.log(indexOfTask);
  console.log(newTask);

  boards[indexOfActiveBoard].tasks.splice(indexOfTask, 1, newTask);
  console.log(boards[indexOfActiveBoard]);
}

function deleteBoard() {
  const indexOfActiveBoard = boards.findIndex((board) => board === getActiveBoard());
  
  activeBoard = null; // to display no board after deleting

  boards.splice(indexOfActiveBoard, 1);
  console.log(boards);
}

function setActiveBoard(e, dataIndexHolder) {
  const index = e.target.closest(dataIndexHolder).getAttribute('data-index');
  // console.log(index);
  activeBoard = boards[index];
}

function setActiveBoardToNull() {
  activeBoard = null;
}

function proceedTask(e) {
  const indexOfActiveBoard = boards.findIndex((board) => board === getActiveBoard());
  const indexOfTask = e.target.closest('dialog').getAttribute('data-index');
  const task = boards[indexOfActiveBoard].tasks[indexOfTask];
  const statusOfTask = boards[indexOfActiveBoard].tasks[indexOfTask].status;

  if (statusOfTask === 'todo') {
    task.status = 'doing';
  } else if (statusOfTask === 'doing') {
    task.status = 'done';
  } else if (statusOfTask === 'done') {
    deleteTask(e);
  }
}

function deleteTask(e) {
  const indexOfActiveBoard = boards.findIndex((board) => board === getActiveBoard());
  const indexOfTask = e.target.closest('dialog').getAttribute('data-index');

  boards[indexOfActiveBoard].tasks.splice(indexOfTask, 1);
}

function storeIndex(e) {
  const dialog = document.querySelector('.dialog-edit-task');
  const indexOfTask = e.target.closest('dialog').getAttribute('data-index');

  dialog.setAttribute('data-index', indexOfTask);
}



/***/ }),

/***/ "./src/display-module.js":
/*!*******************************!*\
  !*** ./src/display-module.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayActiveBoard: () => (/* binding */ displayActiveBoard),
/* harmony export */   displayBoards: () => (/* binding */ displayBoards),
/* harmony export */   displayBoardsTotal: () => (/* binding */ displayBoardsTotal),
/* harmony export */   displayDueHeader: () => (/* binding */ displayDueHeader),
/* harmony export */   displayEditBoardValues: () => (/* binding */ displayEditBoardValues),
/* harmony export */   displayEditTaskValues: () => (/* binding */ displayEditTaskValues),
/* harmony export */   displayReadTaskValues: () => (/* binding */ displayReadTaskValues),
/* harmony export */   displayTasks: () => (/* binding */ displayTasks),
/* harmony export */   displayTasksTotal: () => (/* binding */ displayTasksTotal),
/* harmony export */   removeBoards: () => (/* binding */ removeBoards),
/* harmony export */   removeColumn: () => (/* binding */ removeColumn),
/* harmony export */   removeTasks: () => (/* binding */ removeTasks)
/* harmony export */ });
/* harmony import */ var _assets_calendar_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/calendar.svg */ "./src/assets/calendar.svg");
/* harmony import */ var _data_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-handler */ "./src/data-handler.js");
/* harmony import */ var _ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-module */ "./src/ui-module.js");

// let svgCalendar = require('svg-inline-loader?classPrefix!./assets/calendar.svg');





function displayBoards() {
  const ul = document.querySelector('.boards-list > ul');

  (0,_data_handler__WEBPACK_IMPORTED_MODULE_1__.getBoards)().forEach((board, index) => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const p = document.createElement('p');
    const svg = document.createElement('svg');

    li.setAttribute('data-index', `${index}`);
    button.classList.add('button-render');
    console.log(_assets_calendar_svg__WEBPACK_IMPORTED_MODULE_0__);
    svg.innerHTML = _assets_calendar_svg__WEBPACK_IMPORTED_MODULE_0__;
    p.textContent = board;

    ul.appendChild(li);
    li.appendChild(button);
    button.appendChild(svg)
    button.appendChild(p)

    li.addEventListener('click', (e) => {
      ;(0,_data_handler__WEBPACK_IMPORTED_MODULE_1__.setActiveBoard)(e, 'li');
      displayActiveBoard();
      removeColumn();
      (0,_ui_module__WEBPACK_IMPORTED_MODULE_2__.showBoardMain)();
      displayTasksTotal();
      removeTasks();
      displayTasks();
      (0,_ui_module__WEBPACK_IMPORTED_MODULE_2__.toggleFocus)(e);
    })
  })
}

function displayActiveBoard() {
  const boardHeader = document.querySelector('header > h2');
  const board = (0,_data_handler__WEBPACK_IMPORTED_MODULE_1__.getActiveBoard)();

  if (board === null) {
    boardHeader.textContent = '';
  } else {
    boardHeader.textContent = board.title;
  }

  (0,_ui_module__WEBPACK_IMPORTED_MODULE_2__.toggleHeaderButtons)();
}

function displayDueHeader(dueWhen) {
  const dueHeader = document.querySelector('header > h2');
 
  if (dueWhen === 'today') {
    dueHeader.textContent = 'Today';
  } else if (dueWhen === 'this week') {
    dueHeader.textContent = 'This Week';
  }

  console.log('click');
}

function displayTasks() {
  const tasks = (0,_data_handler__WEBPACK_IMPORTED_MODULE_1__.getTasks)();

  (0,_ui_module__WEBPACK_IMPORTED_MODULE_2__.createCards)(tasks);
}

function displayBoardsTotal() {
  const span = document.querySelector('.board-total');

  span.textContent = (0,_data_handler__WEBPACK_IMPORTED_MODULE_1__.getBoardsTotal)();
}

function displayTasksTotal() {
  const { todo, doing, done } = (0,_data_handler__WEBPACK_IMPORTED_MODULE_1__.getTasksTotal)();
  
  const columnTodo = document.querySelector('.column__header-todo h3');
  const columnDoing = document.querySelector('.column__header-doing h3');
  const columnDone = document.querySelector('.column__header-done h3');

  columnTodo.textContent = `TODO (${todo})`;
  columnDoing.textContent = `DOING (${doing})`;
  columnDone.textContent=  `DONE (${done})`;
}

function removeBoards() {
  const ul = document.querySelector('.boards-list > ul');
  
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

function removeColumn() {
  const main = document.querySelector('main');

  while (main.firstChild) {
    main.removeChild(main.firstChild)
  }
}

function removeTasks() {
  const ulTodo = document.querySelector('.list-todo');
  const ulDoing = document.querySelector('.list-doing');
  const ulDone = document.querySelector('.list-done');

  while (ulTodo.firstChild) {
    ulTodo.removeChild(ulTodo.firstChild);
  }

  while (ulDoing.firstChild) {
    ulDoing.removeChild(ulDoing.firstChild);
  }

  while (ulDone.firstChild) {
    ulDone.removeChild(ulDone.firstChild);
  }
}

function displayEditBoardValues() {
  const input = document.querySelector('.dialog-edit-board input')

  input.value = (0,_data_handler__WEBPACK_IMPORTED_MODULE_1__.getActiveBoard)().title;
}

function displayReadTaskValues(e, indexHolder) {
  const tasks = (0,_data_handler__WEBPACK_IMPORTED_MODULE_1__.getTasks)();
  const index = e.target.closest(indexHolder).getAttribute('data-index');

  const dialog = document.querySelector('.dialog-read-task');
  const h5 = document.querySelector('.dialog-read-task h5');
  const p = document.querySelector('.dialog-read-task p');
  const h6 = document.querySelector('.dialog-read-task h6');
  const img = document.querySelector('.dialog-read-task__info img');
  const span = document.querySelector('.dialog-read-task span');
  const button = document.querySelector('.dialog-read-task__buttons > button');
  
  dialog.setAttribute('data-index', index);
  h5.textContent = tasks[index].title;
  p.textContent = tasks[index].description;
  h6.textContent = tasks[index].dueDate;
  span.textContent = tasks[index].priority;

  if (tasks[index].status === 'todo') {
    button.textContent = 'Start Task';
    button.classList.remove('button-proceed-task--delete');
  } else if (tasks[index].status === 'doing') {
    button.textContent = 'Complete Task';
    button.classList.remove('button-proceed-task--delete');
  } else {
    button.textContent = 'Delete Task';
    button.classList.add('button-proceed-task--delete');
  }

  if (tasks[index].priority === 'low') {
    img.setAttribute('src', 'assets/images/flag.svg')
  } else if (tasks[index].priority === 'medium') {
    img.setAttribute('src', 'assets/images/flag-purple.svg')
  } else if (tasks[index].priority === 'high') {
    img.setAttribute('src', 'assets/images/flag-orange.svg')
  }
}

function displayEditTaskValues(e) {
  const index = e.target.closest('dialog').getAttribute('data-index');
  const tasks = (0,_data_handler__WEBPACK_IMPORTED_MODULE_1__.getTasks)();

  const inputTitle = document.querySelector('#input-edit-task-title');
  const inputDescription = document.querySelector('#input-edit-task-description');
  const inputDate = document.querySelector('#input-edit-task-due-date');
  const inputPriority = document.querySelector('#input-edit-task-priority');
  const inputStatus = document.querySelector('#input-edit-task-status');

  inputTitle.value = tasks[index].title;
  inputDescription.value = tasks[index].description;
  inputDate.value = tasks[index].dueDate;
  inputPriority.value = tasks[index].priority;
  inputStatus.value = tasks[index].status;
}

displayBoards();
displayBoardsTotal();



/***/ }),

/***/ "./src/factory.js":
/*!************************!*\
  !*** ./src/factory.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   factoryBoard: () => (/* binding */ factoryBoard),
/* harmony export */   factoryTask: () => (/* binding */ factoryTask)
/* harmony export */ });
function factoryBoard(title) { 
  return {
    title,
    tasks: []
  }
}

function factoryTask(title, description, dueDate, priority) {
  return {
    title,
    description,
    dueDate,
    priority,
    status: 'todo'
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
/* harmony export */   clearInputFields: () => (/* binding */ clearInputFields),
/* harmony export */   formCheckBoards: () => (/* binding */ formCheckBoards),
/* harmony export */   formCheckTasks: () => (/* binding */ formCheckTasks)
/* harmony export */ });
function formCheckBoards(str) {
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
  const textArea = document.querySelector(`.container-input-${str}-description textarea`);
  const spanTextArea = document.querySelector(`.container-input-${str}-description span`);
  const inputDate = document.querySelector(`.container-input-${str}-due-date input`);
  const spanInputDate = document.querySelector(`.container-input-${str}-due-date span`);

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
    console.log('description')
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

  function checkInputDate() {
    console.log('date')

    if (inputDate.validity.valueMissing) {
      spanInputDate.textContent = 'This field is required';
      return false;
    } else {
      spanInputDate.textContent = '';
      return true;
    }
  };

  function checkAll() {
    const inputIsValid = checkInput();
    const textAreaIsValid = checkTextArea();
    const dateIsValid = checkInputDate();

    if (inputIsValid && textAreaIsValid && dateIsValid) {
      return true;
    } else {
      return false;
    }
  }

  if (checkAll()) {
    return true;
  } else {
    return false;
  }
}

function clearInputFields() {
  const inputFields = document.querySelectorAll('input');
  const inputTextArea = document.querySelector('#input-add-task-description');
  const inputDate = document.querySelector('option[value="low"');

  console.log(inputDate);

  inputFields.forEach((input) => {
    input.value = '';
  })

  inputTextArea.value = '';

  inputDate.selected = 'true';
}

function preventEnterKey() {
  const forms =  document.querySelectorAll('form');

  forms.forEach((form) => {
    form.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    })
  })
}

preventEnterKey();



/***/ }),

/***/ "./src/ui-module.js":
/*!**************************!*\
  !*** ./src/ui-module.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeDialog: () => (/* binding */ closeDialog),
/* harmony export */   closeMain: () => (/* binding */ closeMain),
/* harmony export */   createCards: () => (/* binding */ createCards),
/* harmony export */   exitDialog: () => (/* binding */ exitDialog),
/* harmony export */   showBoardMain: () => (/* binding */ showBoardMain),
/* harmony export */   showDialog: () => (/* binding */ showDialog),
/* harmony export */   showDueMain: () => (/* binding */ showDueMain),
/* harmony export */   showSidebar: () => (/* binding */ showSidebar),
/* harmony export */   toggleDarkMode: () => (/* binding */ toggleDarkMode),
/* harmony export */   toggleFocus: () => (/* binding */ toggleFocus),
/* harmony export */   toggleHeaderButtons: () => (/* binding */ toggleHeaderButtons)
/* harmony export */ });
/* harmony import */ var _data_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-handler */ "./src/data-handler.js");
/* harmony import */ var _display_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-module */ "./src/display-module.js");



function createCards(arrList) {
  const ulTodo = document.querySelector('.list-todo');
  const ulDoing = document.querySelector('.list-doing');
  const ulDone = document.querySelector('.list-done');

  arrList.forEach((item, index) => {
    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    const divFooter = document.createElement('div');
    const divFooterContainer = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');
    const h5 = document.createElement('h5');

    li.setAttribute('data-index', index);

    h4.textContent = item.title;
    divFooter.classList.add('task-footer');
    divFooterContainer.classList.add('task-footer__container');
    h5.textContent = item.dueDate;

    if (item.priority === 'low') {
      img.setAttribute('src', 'assets/images/flag.svg');
      span.classList.add('task-footer__prio--low');
      span.textContent = 'low';
    } else if (item.priority === 'medium') {
      img.setAttribute('src', 'assets/images/flag-purple.svg');
      span.classList.add('task-footer__prio--medium');
      span.textContent = 'medium';
    } else if (item.priority === 'high') {
      img.setAttribute('src', 'assets/images/flag-orange.svg');
      span.classList.add('task-footer__prio--high');
      span.textContent = 'high';
    }

    li.appendChild(h4);
    li.appendChild(divFooter);
    divFooter.appendChild(divFooterContainer);
    divFooterContainer.appendChild(img);
    divFooterContainer.appendChild(span);
    divFooter.appendChild(h5);

    if (item.status === 'todo') {
      li.classList.add('todo');
      ulTodo.appendChild(li);
    } else if (item.status === 'doing') {
      li.classList.add('doing');
      ulDoing.appendChild(li);
    } else if (item.status === 'done') {
      li.classList.add('done');
      ulDone.appendChild(li);
    }

    li.addEventListener('click', (e) => {
      showDialog('read-task');
      (0,_display_module__WEBPACK_IMPORTED_MODULE_1__.displayReadTaskValues)(e, 'li');
    })
  })
}

function createBoardColumn(columnName) {
  const main = document.querySelector('main');
  const divColumn =  document.createElement('div');
  const divHeader = document.createElement('div');
  const divColor = document.createElement('div');
  const h3 = document.createElement('h3');
  const ul = document.createElement('ul');
  
  divColumn.classList.add('column');
  divHeader.setAttribute('class', `column__header column__header-${columnName}`);
  h3.textContent = columnName;
  ul.classList.add(`list-${columnName}`);

  main.appendChild(divColumn);
  divColumn.appendChild(divHeader);
  divHeader.appendChild(divColor);
  divHeader.appendChild(h3);
  divColumn.appendChild(ul);
}

function showDueMain(dueWhen) {
  let boards = null;

  if (dueWhen === 'today') {
    boards = (0,_data_handler__WEBPACK_IMPORTED_MODULE_0__.getDueTasks)('today');
  } else if (dueWhen === 'this week') {
    boards = (0,_data_handler__WEBPACK_IMPORTED_MODULE_0__.getDueTasks)('this week');
  }
  const main = document.querySelector('main');

  boards.forEach((board) => {
    const divPage = document.createElement('div');
    const divHeader = document.createElement('div');
    const divContainer = document.createElement('div');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const divHr = document.createElement('div');
    const button = document.createElement('button');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const ul = document.createElement('ul');

    divHeader.setAttribute('data-index', board.index);
    divPage.classList.add('due-board');
    divHeader.classList.add('due-board__header');
    h2.textContent = 'BOARD';
    h3.textContent = board.title;
    divHr.classList.add('hr');
    p.textContent = 'SEE BOARD';
    img.setAttribute('src', 'assets/images/arrow-right.svg');
    img.setAttribute('alt', 'Right arrow icon');

    main.appendChild(divPage);
    divPage.appendChild(divHeader);
    divHeader.appendChild(divContainer);
    divContainer.appendChild(h2);
    divContainer.appendChild(h3);
    divHeader.appendChild(divHr);
    divHeader.appendChild(button);
    button.appendChild(p);
    button.appendChild(img);
    divPage.appendChild(ul);

    button.addEventListener('click', (e) => {
      console.log('click');

      (0,_data_handler__WEBPACK_IMPORTED_MODULE_0__.setActiveBoard)(e, 'div');
      (0,_display_module__WEBPACK_IMPORTED_MODULE_1__.displayActiveBoard)();
      (0,_display_module__WEBPACK_IMPORTED_MODULE_1__.removeColumn)();
      showBoardMain();
      (0,_display_module__WEBPACK_IMPORTED_MODULE_1__.displayTasksTotal)();
      (0,_display_module__WEBPACK_IMPORTED_MODULE_1__.removeTasks)();
      (0,_display_module__WEBPACK_IMPORTED_MODULE_1__.displayTasks)();
    })

    createDueCards(board.tasks, ul);
  })
}

function createDueCards(tasks, ul) {
  tasks.forEach((task) => {
    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    const divFooter = document.createElement('div');
    const divFooterContainer = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');
    const h5 = document.createElement('h5');

    h4.textContent = task.title;
    divFooter.classList.add('task-footer');
    divFooterContainer.classList.add('task-footer__container');
    h5.textContent = task.dueDate;

    if (task.priority === 'low') {
      img.setAttribute('src', 'assets/images/flag.svg');
      span.classList.add('task-footer__prio--low');
      span.textContent = 'low';
    } else if (task.priority === 'medium') {
      img.setAttribute('src', 'assets/images/flag-purple.svg');
      span.classList.add('task-footer__prio--medium');
      span.textContent = 'medium';
    } else if (task.priority === 'high') {
      img.setAttribute('src', 'assets/images/flag-orange.svg');
      span.classList.add('task-footer__prio--high');
      span.textContent = 'high';
    }

    li.appendChild(h4);
    li.appendChild(divFooter);
    divFooter.appendChild(divFooterContainer);
    divFooterContainer.appendChild(img);
    divFooterContainer.appendChild(span);
    divFooter.appendChild(h5);

    if (task.status === 'todo') {
      li.classList.add('todo');
    } else if (task.status === 'doing') {
      li.classList.add('doing');
    } else if (task.status === 'done') {
      li.classList.add('done');
    }

    ul.appendChild(li);
  })
}

function showBoardMain() {
  createBoardColumn('todo');
  createBoardColumn('doing');
  createBoardColumn('done');
}

function showSidebar() {
  const aside = document.querySelector('aside');
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const buttonSidebarHeader = document.querySelector('.button-sidebar-header');

  if ((0,_data_handler__WEBPACK_IMPORTED_MODULE_0__.getSidebar)()) {
    console.log('sidebar on');
    aside.removeAttribute('id', 'aside--sidebar-hide');
    header.removeAttribute('id', 'header--sidebar-hide');
    main.removeAttribute('id', 'main--sidebar-hide');
    buttonSidebarHeader.removeAttribute('id', 'button--sidebar-hide')
  } else {
    console.log('sidebar off');
    aside.setAttribute('id', 'aside--sidebar-hide')
    header.setAttribute('id', 'header--sidebar-hide')
    main.setAttribute('id', 'main--sidebar-hide')
    buttonSidebarHeader.setAttribute('id', 'button--sidebar-hide')
  }
}

function closeMain() {
  const main = document.querySelector('main');

  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
}

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

function toggleHeaderButtons() {
  const buttons = document.querySelectorAll('.header-buttons');

  buttons.forEach((button) => {
    if ((0,_data_handler__WEBPACK_IMPORTED_MODULE_0__.getActiveBoard)() === null) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  })
}

function toggleFocus(e) {
  const buttons = document.querySelectorAll('.button-render');
  const button = e.target.closest('li').children[0];

  buttons.forEach((button) => {
    button.classList.remove('button-render--focus');
  })

  button.classList.add('button-render--focus');
}

function toggleDarkMode() {
  console.log('dark mode');

  const root = document.documentElement;

  root.className = root.className === 'dark' ? 'light' : 'dark';
  console.log(root);
}

function setDarkMode() {
  const root = document.documentElement;
  root.className = 'dark';
}

function spanDatePicker() {
  const inputFieldsDate = document.querySelectorAll('input[type="date"]');

  inputFieldsDate.forEach((input) => {
    input.addEventListener('click', () => {
      input.showPicker();
    })
  })
}

spanDatePicker();
setDarkMode();




/***/ }),

/***/ "./src/assets/calendar.svg":
/*!*********************************!*\
  !*** ./src/assets/calendar.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "504d3008ba47058fa454.svg";

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

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
/* harmony import */ var _styles_breakpoints_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/breakpoints-main.scss */ "./src/styles/breakpoints-main.scss");
/* harmony import */ var _styles_breakpoints_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/breakpoints-header.scss */ "./src/styles/breakpoints-header.scss");
/* harmony import */ var _styles_breakpoints_aside_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/breakpoints-aside.scss */ "./src/styles/breakpoints-aside.scss");
/* harmony import */ var _styles_breakpoints_index_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/breakpoints-index.scss */ "./src/styles/breakpoints-index.scss");
/* harmony import */ var _display_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./display-module */ "./src/display-module.js");
/* harmony import */ var _data_handler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data-handler */ "./src/data-handler.js");
/* harmony import */ var _ui_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui-module */ "./src/ui-module.js");
/* harmony import */ var _form_handler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./form-handler */ "./src/form-handler.js");















const buttonsDialogClose = document.querySelectorAll('.button-close-dialog');
const buttonOpenDialogCreateBoard = document.querySelector('.button-open-create-board');
const buttonCreateBoard = document.querySelector('#button-create-board');
const buttonOpenDialogEditBoard = document.querySelector('.button-open-edit-board');
const buttonEditBoard = document.querySelector('#button-edit-board');
const buttonDeleteBoard = document.querySelector('.button-delete-board');
const buttonOpenDialogAddTask = document.querySelector('.button-open-add-task');
const buttonAddTask = document.querySelector('#button-add-task');
const buttonProceedTask = document.querySelector('#button-proceed-task');
const buttonOpenDialogEditTask = document.querySelector('#button-open-edit-task');
const buttonEditTask = document.querySelector('#button-edit-task');
const buttonDeleteTask = document.querySelector('.button-delete-task');
const buttonDueToday = document.querySelector('.due-buttons__today');
const buttonDueThisWeek = document.querySelector('.due-buttons__this-week');
const buttonsSidebar = document.querySelectorAll('.button-sidebar');
const buttonDarkMode = document.querySelector('.night-mode input');

buttonDarkMode.addEventListener('click', () => {
  (0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.toggleDarkMode)();
})

buttonsSidebar.forEach((button) => {
  button.addEventListener('click', () => {
    ;(0,_data_handler__WEBPACK_IMPORTED_MODULE_10__.toggleSidebar)();
    (0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.showSidebar)();
  })
})

buttonDueToday.addEventListener('click', (e) => {
  ;(0,_data_handler__WEBPACK_IMPORTED_MODULE_10__.setActiveBoardToNull)();
  (0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.toggleHeaderButtons)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.displayDueHeader)('today');
  (0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.closeMain)();
  (0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.showDueMain)('today');
  (0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.toggleFocus)(e);
})

buttonDueThisWeek.addEventListener('click', (e) => {
  ;(0,_data_handler__WEBPACK_IMPORTED_MODULE_10__.setActiveBoardToNull)();
  (0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.toggleHeaderButtons)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.displayDueHeader)('this week');
  (0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.closeMain)();
  (0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.showDueMain)('this week');
  (0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.toggleFocus)(e);
})

buttonDeleteTask.addEventListener('click', (e) => {
  ;(0,_data_handler__WEBPACK_IMPORTED_MODULE_10__.deleteTask)(e);
  (0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.closeDialog)('edit-task');
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.removeTasks)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.displayTasksTotal)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.displayTasks)();
})

buttonEditTask.addEventListener('click', (e) => {
  if (!(0,_form_handler__WEBPACK_IMPORTED_MODULE_12__.formCheckTasks)('edit-task')) {
    console.log('Invalid form');
    return;
  }
  (0,_data_handler__WEBPACK_IMPORTED_MODULE_10__.editTask)(e);
  (0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.closeDialog)('edit-task');
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.removeTasks)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.displayTasksTotal)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.displayTasks)();
  (0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.showDialog)('read-task');
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.displayReadTaskValues)(e, 'dialog');
})

buttonOpenDialogEditTask.addEventListener('click', (e) => {
  ;(0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.closeDialog)('read-task');
  (0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.showDialog)('edit-task');
  (0,_data_handler__WEBPACK_IMPORTED_MODULE_10__.storeIndex)(e);
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.displayEditTaskValues)(e);
})

buttonProceedTask.addEventListener('click', (e) => {
  ;(0,_data_handler__WEBPACK_IMPORTED_MODULE_10__.proceedTask)(e);
  (0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.closeDialog)('read-task');
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.removeTasks)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.displayTasksTotal)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.displayTasks)();
})

buttonAddTask.addEventListener('click', () => {
  if (!(0,_form_handler__WEBPACK_IMPORTED_MODULE_12__.formCheckTasks)('add-task')) {
    console.log('Invalid form');
    return;
  }
  (0,_data_handler__WEBPACK_IMPORTED_MODULE_10__.addNewTask)();
  (0,_form_handler__WEBPACK_IMPORTED_MODULE_12__.clearInputFields)();
  (0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.closeDialog)('add-task');
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.removeTasks)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.displayTasksTotal)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.displayTasks)();
})

buttonDeleteBoard.addEventListener('click', () => {
  ;(0,_data_handler__WEBPACK_IMPORTED_MODULE_10__.deleteBoard)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.removeBoards)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.displayBoards)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.displayBoardsTotal)();
  (0,_form_handler__WEBPACK_IMPORTED_MODULE_12__.clearInputFields)();
  (0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.closeDialog)('edit-board');
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.displayActiveBoard)();
  (0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.closeMain)();
})

buttonEditBoard.addEventListener('click', () => {
  if (!(0,_form_handler__WEBPACK_IMPORTED_MODULE_12__.formCheckBoards)('edit-board')) {
    return;
  }
  (0,_data_handler__WEBPACK_IMPORTED_MODULE_10__.editBoard)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.removeBoards)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.displayBoards)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.displayBoardsTotal)();
  (0,_form_handler__WEBPACK_IMPORTED_MODULE_12__.clearInputFields)();
  (0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.closeDialog)('edit-board');
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.displayActiveBoard)();
})

buttonCreateBoard.addEventListener('click', (e) => {
  if (!(0,_form_handler__WEBPACK_IMPORTED_MODULE_12__.formCheckBoards)('create-board')) {
    return;
  }
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.removeBoards)();
  (0,_data_handler__WEBPACK_IMPORTED_MODULE_10__.addNewBoard)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.displayBoards)();
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.displayBoardsTotal)();
  (0,_form_handler__WEBPACK_IMPORTED_MODULE_12__.clearInputFields)();
  (0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.closeDialog)('create-board');
})

buttonOpenDialogCreateBoard.addEventListener('click', () => {
  ;(0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.showDialog)('create-board');
})

buttonOpenDialogEditBoard.addEventListener('click', () => {
  ;(0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.showDialog)('edit-board');
  (0,_display_module__WEBPACK_IMPORTED_MODULE_9__.displayEditBoardValues)();
})

buttonOpenDialogAddTask.addEventListener('click', () => {
  ;(0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.showDialog)('add-task');
})

buttonsDialogClose.forEach((button) => {
  button.addEventListener('click', (e) => { ;(0,_ui_module__WEBPACK_IMPORTED_MODULE_11__.exitDialog)(e) })
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLDhIQUE0QztBQUN4Riw0Q0FBNEMsb0lBQStDO0FBQzNGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNkhBQTZILFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxZQUFZLEtBQUssV0FBVyxPQUFPLGtCQUFrQixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLFNBQVMsV0FBVyxVQUFVLE9BQU8sWUFBWSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxhQUFhLGNBQWMsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxjQUFjLFlBQVksVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLGFBQWEsY0FBYyxZQUFZLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxZQUFZLGNBQWMsWUFBWSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxhQUFhLGNBQWMsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sYUFBYSxjQUFjLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxhQUFhLFlBQVksV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sYUFBYSxjQUFjLFlBQVksTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxhQUFhLGNBQWMsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsZ0RBQWdELHlCQUF5Qix5QkFBeUIsdUJB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDhIQUE4SCxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sWUFBWSxLQUFLLFdBQVcsT0FBTyxrQkFBa0IsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxTQUFTLFdBQVcsVUFBVSxPQUFPLFlBQVksS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxVQUFVLE1BQU0sT0FBTyxVQUFVLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxZQUFZLFdBQVcsTUFBTSxPQUFPLFVBQVUsVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFlBQVksWUFBWSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxPQUFPLFdBQVcsWUFBWSxPQUFPLE9BQU8sVUFBVSxNQUFNLE9BQU8sV0FBVyxZQUFZLFVBQVUsTUFBTSxPQUFPLFVBQVUsV0FBVyxVQUFVLE1BQU0sT0FBTyxXQUFXLGFBQWEsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxNQUFNLE9BQU8sVUFBVSxNQUFNLE9BQU8sV0FBVyxZQUFZLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxPQUFPLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxVQUFVLE1BQU0sT0FBTyxVQUFVLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxZQUFZLFdBQVcsTUFBTSxPQUFPLFVBQVUsVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFlBQVksWUFBWSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxPQUFPLGFBQWEsY0FBYyxPQUFPLE9BQU8sVUFBVSxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sT0FBTyxXQUFXLFlBQVksVUFBVSxPQUFPLE9BQU8sV0FBVyxZQUFZLFVBQVUsT0FBTyxPQUFPLFdBQVcsYUFBYSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFdBQVcsYUFBYSxZQUFZLFdBQVcsWUFBWSxXQUFXLFdBQVcsVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLGFBQWEsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxVQUFVLE9BQU8sT0FBTyxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sT0FBTyxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsWUFBWSxXQUFXLFlBQVksWUFBWSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFlBQVksV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sYUFBYSxjQUFjLE9BQU8sTUFBTSxXQUFXLFlBQVksTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFV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QztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDRIQUE0SCxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sWUFBWSxLQUFLLFdBQVcsT0FBTyxrQkFBa0IsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxTQUFTLFdBQVcsVUFBVSxPQUFPLFlBQVksS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsWUFBWSxhQUFh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YjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JzRDtBQUNDOztBQUV2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ1osRUFBRSxnRUFBZ0I7QUFDbEIsRUFBRSx3REFBVztBQUNiLEVBQUUsNERBQVc7QUFDYixFQUFFLGtFQUFpQjtBQUNuQixFQUFFLDZEQUFZO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBLEVBQUUsNERBQVc7QUFDYixFQUFFLDZEQUFZO0FBQ2QsRUFBRSw4REFBYTtBQUNmLEVBQUUsbUVBQWtCO0FBQ3BCLEVBQUUsZ0VBQWdCO0FBQ2xCLEVBQUUsd0RBQVc7QUFDYixFQUFFLG1FQUFrQjtBQUNwQixFQUFFLHNEQUFTO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBLE9BQU8sK0RBQWU7QUFDdEI7QUFDQTtBQUNBLEVBQUUseURBQVM7QUFDWCxFQUFFLDZEQUFZO0FBQ2QsRUFBRSw4REFBYTtBQUNmLEVBQUUsbUVBQWtCO0FBQ3BCLEVBQUUsZ0VBQWdCO0FBQ2xCLEVBQUUsd0RBQVc7QUFDYixFQUFFLG1FQUFrQjtBQUNwQixDQUFDOztBQUVEO0FBQ0EsT0FBTywrREFBZTtBQUN0QjtBQUNBO0FBQ0EsRUFBRSw2REFBWTtBQUNkLEVBQUUsMkRBQVc7QUFDYixFQUFFLDhEQUFhO0FBQ2YsRUFBRSxtRUFBa0I7QUFDcEIsRUFBRSxnRUFBZ0I7QUFDbEIsRUFBRSx3REFBVztBQUNiLENBQUM7O0FBRUQ7QUFDQSxFQUFFLHdEQUFVO0FBQ1osQ0FBQzs7QUFFRDtBQUNBLEVBQUUsd0RBQVU7QUFDWixFQUFFLHVFQUFzQjtBQUN4QixDQUFDOztBQUVEO0FBQ0EsRUFBRSx3REFBVTtBQUNaLENBQUM7O0FBRUQ7QUFDQSw0Q0FBNEMsd0RBQVUsS0FBSztBQUMzRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMvYXNpZGUuc2NzcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy9icmVha3BvaW50cy1hc2lkZS5zY3NzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzL2JyZWFrcG9pbnRzLWhlYWRlci5zY3NzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzL2JyZWFrcG9pbnRzLWluZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMvYnJlYWtwb2ludHMtbWFpbi5zY3NzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzL2RpYWxvZy5zY3NzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzL2hlYWRlci5zY3NzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy9hc2lkZS5zY3NzPzI1MTAiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMvYnJlYWtwb2ludHMtYXNpZGUuc2Nzcz9lMjc1Iiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzL2JyZWFrcG9pbnRzLWhlYWRlci5zY3NzP2JiNzMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMvYnJlYWtwb2ludHMtaW5kZXguc2Nzcz9iMWYwIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzL2JyZWFrcG9pbnRzLW1haW4uc2Nzcz84OGExIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGVzL2RpYWxvZy5zY3NzPzM3NjAiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMvaGVhZGVyLnNjc3M/MzI5MCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzPzRjMzciLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RhdGEtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Rpc3BsYXktbW9kdWxlLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2Zvcm0taGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3VpLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0xhdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4vKiAtLS0gQ1NTIFJlc2V0IC0tLSAqL1xuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbmJ1dHRvbixcbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuXG4vKiAtLS0gQ3VzdG9tIENTUyAtLS0gKi9cbjpyb290LmRhcmsge1xuICAtLXRoZW1lLWFsbW9uZDogdG9tYXRvO1xufVxuOnJvb3QubGlnaHQge1xuICAtLXRoZW1lLWFsbW9uZDogYmxhbmNoZWRhbG1vbmQ7XG59XG46cm9vdCBib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI5MmU7XG59XG46cm9vdCBib2R5ICNjb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMjBweCAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyO1xufVxuXG5ib2R5ICNjb250ZW50ICNhc2lkZS0tc2lkZWJhci1oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUge1xuICBoZWlnaHQ6IG1heCgxMDAlLCAxMDB2aCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzM2M2U7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0NzQ3NDc7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIGdyaWQtcm93OiAxLzM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5ib2R5ICNjb250ZW50IGFzaWRlIC5hc2lkZS10b3Age1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgZmxleDogMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5ib2R5ICNjb250ZW50IGFzaWRlIC5hc2lkZS10b3AgLnRpdGxlIHtcbiAgY29sb3I6ICNmMGYwZjA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDM1cHggMHB4IDM1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgLmFzaWRlLXRvcCAudGl0bGUgc3ZnIHtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbiAgc3Ryb2tlOiAjODU3MGZjO1xufVxuYm9keSAjY29udGVudCBhc2lkZSAuYXNpZGUtdG9wIC50aXRsZSBoMSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuYm9keSAjY29udGVudCBhc2lkZSAuYXNpZGUtdG9wIC5kdWUgaDMge1xuICBjb2xvcjogIzllOWU5ZTtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuYm9keSAjY29udGVudCBhc2lkZSAuYXNpZGUtdG9wIC5kdWUgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5ib2R5ICNjb250ZW50IGFzaWRlIC5hc2lkZS10b3AgLmR1ZSBsaTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg2cHgpO1xufVxuYm9keSAjY29udGVudCBhc2lkZSAuYXNpZGUtdG9wIC5kdWUgbGkgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5ib2R5ICNjb250ZW50IGFzaWRlIC5hc2lkZS10b3AgLmR1ZSBsaSBidXR0b24gc3ZnIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICBzdHJva2U6ICM4NTcwZmM7XG59XG5ib2R5ICNjb250ZW50IGFzaWRlIC5hc2lkZS10b3AgLmR1ZSBsaSBidXR0b24gcCB7XG4gIGNvbG9yOiAjZjBmMGYwO1xufVxuYm9keSAjY29udGVudCBhc2lkZSAuYXNpZGUtdG9wIC5kdWUgbGkgLmJ1dHRvbi1yZW5kZXItLWZvY3VzOjphZnRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG4gIGxlZnQ6IDEwcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogNnB4O1xuICB3aWR0aDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICBhbmltYXRpb24tbmFtZTogZ2xvdztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbkBrZXlmcmFtZXMgZ2xvdyB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMTAwJSk7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEyMCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgLmFzaWRlLXRvcCAuYm9hcmRzLWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xufVxuYm9keSAjY29udGVudCBhc2lkZSAuYXNpZGUtdG9wIC5ib2FyZHMtbGlzdCBoMyB7XG4gIGNvbG9yOiAjOWU5ZTllO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIG1hcmdpbjogMzBweCAwcHggMTBweCAwcHg7XG59XG5ib2R5ICNjb250ZW50IGFzaWRlIC5hc2lkZS10b3AgLmJvYXJkcy1saXN0IHVsIGxpIHtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuYm9keSAjY29udGVudCBhc2lkZSAuYXNpZGUtdG9wIC5ib2FyZHMtbGlzdCB1bCBsaTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg2cHgpO1xufVxuYm9keSAjY29udGVudCBhc2lkZSAuYXNpZGUtdG9wIC5ib2FyZHMtbGlzdCB1bCBsaSBzdmcge1xuICBoZWlnaHQ6IDIycHg7XG4gIHdpZHRoOiAyMnB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG59XG5ib2R5ICNjb250ZW50IGFzaWRlIC5hc2lkZS10b3AgLmJvYXJkcy1saXN0IHVsIGxpIGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDI0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5ib2R5ICNjb250ZW50IGFzaWRlIC5hc2lkZS10b3AgLmJvYXJkcy1saXN0IHVsIGxpIGJ1dHRvbiBwIHtcbiAgY29sb3I6ICNmMGYwZjA7XG59XG5ib2R5ICNjb250ZW50IGFzaWRlIC5hc2lkZS10b3AgLmJvYXJkcy1saXN0IHVsIGxpIC5idXR0b24tcmVuZGVyLS1mb2N1czo6YWZ0ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDJweDtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiA2cHg7XG4gIHdpZHRoOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIGFuaW1hdGlvbi1uYW1lOiBnbG93O1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuQGtleWZyYW1lcyBnbG93IHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMDAlKTtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMTIwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuYm9keSAjY29udGVudCBhc2lkZSAuYXNpZGUtdG9wIC5ib2FyZHMtbGlzdCAuYnV0dG9uLW9wZW4tY3JlYXRlLWJvYXJkIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDVweCA4cHg7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgLmFzaWRlLXRvcCAuYm9hcmRzLWxpc3QgLmJ1dHRvbi1vcGVuLWNyZWF0ZS1ib2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI5MmU7XG59XG5ib2R5ICNjb250ZW50IGFzaWRlIC5hc2lkZS10b3AgLmJvYXJkcy1saXN0IC5idXR0b24tb3Blbi1jcmVhdGUtYm9hcmQgaW1nIHtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgLmFzaWRlLXRvcCAuYm9hcmRzLWxpc3QgLmJ1dHRvbi1vcGVuLWNyZWF0ZS1ib2FyZCBwIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiAjODU3MGZjO1xufVxuYm9keSAjY29udGVudCBhc2lkZSAuYXNpZGUtYm90dG9tIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xufVxuYm9keSAjY29udGVudCBhc2lkZSAuYXNpZGUtYm90dG9tIC5uaWdodC1tb2RlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IDU1cHggMjVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuYm9keSAjY29udGVudCBhc2lkZSAuYXNpZGUtYm90dG9tIC5uaWdodC1tb2RlIGltZyB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG59XG5ib2R5ICNjb250ZW50IGFzaWRlIC5hc2lkZS1ib3R0b20gLm5pZ2h0LW1vZGUgaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogIzllOWU5ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgLmFzaWRlLWJvdHRvbSAubmlnaHQtbW9kZSBpbnB1dDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgLmFzaWRlLWJvdHRvbSAubmlnaHQtbW9kZSBpbnB1dDpjaGVja2VkOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5ib2R5ICNjb250ZW50IGFzaWRlIC5hc2lkZS1ib3R0b20gLm5pZ2h0LW1vZGUgaW5wdXQ6Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQ6ICM4NTcwZmM7XG59XG5ib2R5ICNjb250ZW50IGFzaWRlIC5hc2lkZS1ib3R0b20gLmJ1dHRvbi1zaWRlYmFyIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQ2O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiAyNXB4IDBweDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG5ib2R5ICNjb250ZW50IGFzaWRlIC5hc2lkZS1ib3R0b20gLmJ1dHRvbi1zaWRlYmFyOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEyNSUpO1xufVxuYm9keSAjY29udGVudCBhc2lkZSAuYXNpZGUtYm90dG9tIC5idXR0b24tc2lkZWJhciBpbWcge1xuICBoZWlnaHQ6IDE3cHg7XG4gIHdpZHRoOiAxN3B4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5ib2R5ICNjb250ZW50IGFzaWRlIC5hc2lkZS1ib3R0b20gLmJ1dHRvbi1zaWRlYmFyIHAge1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogI2YwZjBmMDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgLmFzaWRlLWJvdHRvbSAuZ2l0aHViIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgLmFzaWRlLWJvdHRvbSAuZ2l0aHViIGEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwLjY1cmVtO1xuICBjb2xvcjogI2YwZjBmMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAxMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuYm9keSAjY29udGVudCBhc2lkZSAuYXNpZGUtYm90dG9tIC5naXRodWIgYSBpbWcge1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuYm9keSAjY29udGVudCBhc2lkZSAuYXNpZGUtYm90dG9tIC5naXRodWIgYTpob3ZlciBwIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmJvZHkgI2NvbnRlbnQgYXNpZGUgLmFzaWRlLWJvdHRvbSAuZ2l0aHViIGE6aG92ZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIkNsaWNrIHRvIHNlZSBjb2RlXCI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYXNpZGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUEwREE7RUFDRSxtQkFBQTtFQUNBLCtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ3pERjtBRDREQTtFQUNFLHNCQUFBO0VBQ0EsK0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDMURGO0FENkRBLHNCQUFBO0FBQ0E7RUFDRSxzQkFBQTtBQzNERjs7QUQ4REE7Ozs7Ozs7Ozs7Ozs7RUFhQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDM0RBOztBRDhEQTs7OztFQUlBLG9CQUFBO0VBQ0EsZUFBQTtBQzNEQTs7QUQ4REEsdUJBQUE7QUFFRTtFQUNFLHNCQUFBO0FDNURKO0FEOERFO0VBQ0UsOEJBQUE7QUM1REo7QUQ4REU7RUFDRSw2SUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBcEhXO0FDd0RmO0FENkRJO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUMzREo7O0FBMURJO0VBQ0UsYUFBQTtBQTZETjtBQTNESTtFQUNFLHdCQUFBO0VBQ0EseUJEVE87RUNVUCwrQkFBQTtFQUVBLGdCQUFBO0VBQ0EsYUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtBQTJETjtBQTFETTtFQUNFLG9CQUFBO0VBQ0EsT0FBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtBQTJEUjtB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LFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQXdHZDtBQXRHWTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7QUF3R2Q7QUF0R1k7RUFDRSxtQkR2TEM7QUMrUmY7QUFwR1E7RUQ5SU4sWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQzhJUSx5QkQ1TEc7RUM2TEgsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLG9CQUFBO0FBc0dWO0FBckdVO0VBQ0Usd0JBQUE7QUF1R1o7QUFyR1U7RURuS1IsWUNvS21DO0VEbktuQyxXQ21LbUM7RUFDekIsMkJBQUE7QUF3R1o7QUF0R1U7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNEbE5DO0VDbU5ELGdCQUFBO0FBd0daO0FBckdRO0VBQ0UsbUJBQUE7QUF1R1Y7QUF0R1U7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0QzTkM7RUM0TkQscUJBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBdUdaO0FBdEdZO0VBQ0ksVUFBQTtFRDlMZCxZQytMdUM7RUQ5THZDLFdDOEx1QztBQXlHekM7QUF2R1k7RUFDSSxhQUFBO0FBeUdoQjtBQXZHWTtFQUNJLDRCQUFBO0FBeUdoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkdGhlbWUtZGFyazogIzM3MzYzZTtcXG4kdGhlbWUtZGFya2VyOiAjMjkyOTJlO1xcbiR0aGVtZS1wdXJwbGU6ICM4NTcwZmM7XFxuJHRoZW1lLWdyYXk6ICM0MTQxNDY7XFxuJGZvbnQtd2hpdGU6ICNmMGYwZjA7XFxuJGZvbnQtZ3JheTogIzllOWU5ZTtcXG4kYm9yZGVyLWRhcms6ICM0NzQ3NDc7XFxuJGNhcmQtc2hhZG93OiAjMWExYTFhO1xcbiR0aGVtZS1yZWQ6ICNmZjVjNWM7XFxuXFxuQG1peGluIGJ1dHRvbi1mb2N1cygkdG9wLCAkbGVmdCkge1xcbiAgJjo6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAkdG9wO1xcbiAgICBsZWZ0OiAkbGVmdDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGhlaWdodDogNnB4O1xcbiAgICB3aWR0aDogNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcblxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcbiAgICBhbmltYXRpb24tbmFtZTogZ2xvdztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIH1cXG4gIEBrZXlmcmFtZXMgZ2xvdyB7XFxuICAgIGZyb20ge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMTAwJSk7XFxuICAgICAgb3BhY2l0eTogMC40O1xcbiAgICB9XFxuXFxuICAgIHRvIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEyMCUpO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1peGluIGljb24tc2l6ZSgkcGl4ZWwpIHtcXG4gIGhlaWdodDogJHBpeGVsO1xcbiAgd2lkdGg6ICRwaXhlbDtcXG59XFxuXFxuQG1peGluIGJ1dHRvbi1zdHlsaW5nIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWl4aW4gZmxleC1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0xhdG8nO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL0xhdG8tUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICBzcmM6IHVybCgnLi4vZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi8qIC0tLSBDU1MgUmVzZXQgLS0tICovXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbm1hcmdpbjogMDtcXG5wYWRkaW5nOiAwO1xcbmJvcmRlcjogMDtcXG5mb250LXNpemU6IDEwMCU7XFxuZm9udDogaW5oZXJpdDtcXG52ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbmZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbmZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLyogLS0tIEN1c3RvbSBDU1MgLS0tICovXFxuOnJvb3Qge1xcbiAgJi5kYXJrIHtcXG4gICAgLS10aGVtZS1hbG1vbmQ6IHRvbWF0bztcXG4gIH1cXG4gICYubGlnaHQge1xcbiAgICAtLXRoZW1lLWFsbW9uZDogYmxhbmNoZWRhbG1vbmQ7XFxuICB9XFxuICBib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWRhcmtlcjtcXG4gICAgI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMyMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuXFxuXCIsXCJAdXNlICdpbmRleCc7XFxuXFxuYm9keSB7XFxuICAjY29udGVudCB7XFxuICAgICNhc2lkZS0tc2lkZWJhci1oaWRlIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIGFzaWRlIHtcXG4gICAgICBoZWlnaHQ6IG1heCgxMDAlLCAxMDB2aCk7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5kZXguJHRoZW1lLWRhcms7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgaW5kZXguJGJvcmRlci1kYXJrO1xcbiAgICAgIFxcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgICBncmlkLXJvdzogMSAvIDM7XFxuXFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIC5hc2lkZS10b3Age1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxuICAgICAgICBmbGV4OiAwO1xcblxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgXFxuICAgICAgICAudGl0bGUge1xcbiAgICAgICAgICBjb2xvcjogaW5kZXguJGZvbnQtd2hpdGU7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICBtYXJnaW46IDM1cHggMHB4IDM1cHg7XFxuXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBpbmRleC5pY29uLXNpemUoMjhweCk7XFxuICAgICAgICAgICAgc3Ryb2tlOiBpbmRleC4kdGhlbWUtcHVycGxlO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIGgxIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmR1ZSB7XFxuICAgICAgICAgIGgzIHtcXG4gICAgICAgICAgICBjb2xvcjogaW5kZXguJGZvbnQtZ3JheTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgbGkge1xcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XFxuXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNnB4KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGluZGV4LmJ1dHRvbi1zdHlsaW5nKCk7XFxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcblxcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgICBzdmcge1xcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBpbmRleC5pY29uLXNpemUoMjBweCk7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiBpbmRleC4kdGhlbWUtcHVycGxlO1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgcCB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBpbmRleC4kZm9udC13aGl0ZTtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLmJ1dHRvbi1yZW5kZXItLWZvY3VzIHtcXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGluZGV4LmJ1dHRvbi1mb2N1cygtMnB4LCAxMHB4KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5ib2FyZHMtbGlzdCB7XFxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgIGgzIHtcXG4gICAgICAgICAgICBjb2xvcjogaW5kZXguJGZvbnQtZ3JheTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwcHggMTBweCAwcHg7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgdWwge1xcbiAgICAgICAgICAgIGxpIHtcXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG5cXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg2cHgpO1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgc3ZnIHtcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgaW5kZXguaWNvbi1zaXplKDIycHgpO1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBpbmRleC5idXR0b24tc3R5bGluZygpO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMjQwcHg7XFxuXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7O1xcbiAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgICAgIHAge1xcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmRleC4kZm9udC13aGl0ZTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgLmJ1dHRvbi1yZW5kZXItLWZvY3VzIHtcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgaW5kZXguYnV0dG9uLWZvY3VzKDBweCwgMnB4KTtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgLmJ1dHRvbi1vcGVuLWNyZWF0ZS1ib2FyZCB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgaW5kZXguYnV0dG9uLXN0eWxpbmcoKTtcXG4gICAgICAgICAgICBtYXJnaW46IDVweCA4cHg7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG5cXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xcblxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5kZXguJHRoZW1lLWRhcmtlcjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGluZGV4Lmljb24tc2l6ZSgxOHB4KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgcCB7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgICAgICAgICAgICBjb2xvcjogaW5kZXguJHRoZW1lLXB1cnBsZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgLmFzaWRlLWJvdHRvbSB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGZsZXg6IDE7XFxuXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxuICAgICAgICAubmlnaHQtbW9kZSB7XFxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCA1NXB4IDI1cHg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBpbmRleC5pY29uLXNpemUoMjVweCk7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgaW5wdXQge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICB3aWR0aDogNDVweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDIycHg7XFxuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogaW5kZXguJGZvbnQtZ3JheTtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggcmdiKDAgMCAwIC8gNTAlKTtcXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICAgICAgICB3aWR0aDogMjJweDtcXG4gICAgICAgICAgICAgIGhlaWdodDogMjJweDtcXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgJjpjaGVja2VkOjpiZWZvcmUge1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgJjpjaGVja2VkIHtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGluZGV4LiR0aGVtZS1wdXJwbGU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuYnV0dG9uLXNpZGViYXIge1xcbiAgICAgICAgICBAaW5jbHVkZSBpbmRleC5idXR0b24tc3R5bGluZygpO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRleC4kdGhlbWUtZ3JheTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgICAgICAgIG1hcmdpbjogMjVweCAwcHg7XFxuICAgICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgICAgICAgXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXG4gICAgICAgICAgJjpob3ZlciAge1xcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMjUlKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIGluZGV4Lmljb24tc2l6ZSgxN3B4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgcCB7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgICAgICAgICBjb2xvcjogaW5kZXguJGZvbnQtd2hpdGU7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmdpdGh1YiB7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgICAgICAgIGEge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcXG4gICAgICAgICAgICBjb2xvcjogaW5kZXguJGZvbnQtd2hpdGU7XFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgXFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggMTIwcHg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgaW5kZXguaWNvbi1zaXplKDIwcHgpXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICY6aG92ZXIgcCB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICY6aG92ZXI6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcXFwiQ2xpY2sgdG8gc2VlIGNvZGVcXFwiO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGJvZHkgI2NvbnRlbnQgI2FzaWRlLS1zaWRlYmFyLWhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgYm9keSAjY29udGVudCBhc2lkZSB7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgYm9keSAjY29udGVudCBhc2lkZSAuYXNpZGUtdG9wIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2JyZWFrcG9pbnRzLWFzaWRlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFJSTtJQUNFLGFBQUE7RUFGSjtFQUlFO0lBQ0UsY0FBQTtJQUVBLHVCQUFBO0VBSEo7RUFJSTtJQUNFLG1CQUFBO0VBRk47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcblxcbmJvZHkge1xcbiAgI2NvbnRlbnQge1xcbiAgICAjYXNpZGUtLXNpZGViYXItaGlkZSB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICBhc2lkZSB7XFxuICAgICAgZ3JpZC1jb2x1bW46IDE7XFxuXFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgLmFzaWRlLXRvcCB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9MYXRvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLyogLS0tIENTUyBSZXNldCAtLS0gKi9cbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5idXR0b24sXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLyogLS0tIEN1c3RvbSBDU1MgLS0tICovXG46cm9vdC5kYXJrIHtcbiAgLS10aGVtZS1hbG1vbmQ6IHRvbWF0bztcbn1cbjpyb290LmxpZ2h0IHtcbiAgLS10aGVtZS1hbG1vbmQ6IGJsYW5jaGVkYWxtb25kO1xufVxuOnJvb3QgYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTJlO1xufVxuOnJvb3QgYm9keSAjY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzIwcHggMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgYm9keSAjY29udGVudCAjaGVhZGVyLS1zaWRlYmFyLWhpZGUge1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIGdyaWQtY29sdW1uOiAxO1xuICB9XG4gIGJvZHkgI2NvbnRlbnQgaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGJvZHkgI2NvbnRlbnQgaGVhZGVyIGgyIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxuICBib2R5ICNjb250ZW50IGhlYWRlciBkaXYgLmJ1dHRvbi1vcGVuLWFkZC10YXNrIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICB9XG4gIGJvZHkgI2NvbnRlbnQgaGVhZGVyIGRpdiAuYnV0dG9uLW9wZW4tYWRkLXRhc2sgcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBib2R5ICNjb250ZW50IGhlYWRlciBkaXYgLmJ1dHRvbi1vcGVuLWFkZC10YXNrIGltZyB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICB9XG4gIGJvZHkgI2NvbnRlbnQgaGVhZGVyIGRpdiAuYnV0dG9uLW9wZW4tZWRpdC1ib2FyZCB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgfVxuICBib2R5ICNjb250ZW50IGhlYWRlciBkaXYgLmJ1dHRvbi1vcGVuLWVkaXQtYm9hcmQgaW1nIHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gIH1cbiAgYm9keSAjY29udGVudCBoZWFkZXIgZGl2IC5idXR0b24tc2lkZWJhciB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgfVxuICBib2R5ICNjb250ZW50IGhlYWRlciBkaXYgLmJ1dHRvbi1zaWRlYmFyIGltZyB7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYnJlYWtwb2ludHMtaGVhZGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBMERBO0VBQ0UsbUJBQUE7RUFDQSwrREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUN6REY7QUQ0REE7RUFDRSxzQkFBQTtFQUNBLCtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQzFERjtBRDZEQSxzQkFBQTtBQUNBO0VBQ0Usc0JBQUE7QUMzREY7O0FEOERBOzs7Ozs7Ozs7Ozs7O0VBYUEsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQzNEQTs7QUQ4REE7Ozs7RUFJQSxvQkFBQTtFQUNBLGVBQUE7QUMzREE7O0FEOERBLHVCQUFBO0FBRUU7RUFDRSxzQkFBQTtBQzVESjtBRDhERTtFQUNFLDhCQUFBO0FDNURKO0FEOERFO0VBQ0UsNklBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQXBIVztBQ3dEZjtBRDZESTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FDM0RKOztBQTVEQTtFQUlJO0lBQ0UsYUFBQTtJQUVBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsUUFBQTtJQUNBLGNBQUE7RUEyREo7RUF6REU7SUFDRSxhQUFBO0VBMkRKO0VBMURJO0lBQ0UsaUJBQUE7RUE0RE47RUF6RE07SUFDRSxhQUFBO0VBMkRSO0VBMURRO0lBQ0UsYUFBQTtFQTREVjtFQTFEUTtJRGdCUixZQ2ZtQztJRGdCbkMsV0NoQm1DO0VBNkRuQztFQTFETTtJQUNFLGFBQUE7RUE0RFI7RUEzRFE7SURVUixZQ1RtQztJRFVuQyxXQ1ZtQztFQThEbkM7RUExRE07SUFDRSxhQUFBO0VBNERSO0VBM0RRO0lER1IsWUNGbUM7SURHbkMsV0NIbUM7RUE4RG5DO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJHRoZW1lLWRhcms6ICMzNzM2M2U7XFxuJHRoZW1lLWRhcmtlcjogIzI5MjkyZTtcXG4kdGhlbWUtcHVycGxlOiAjODU3MGZjO1xcbiR0aGVtZS1ncmF5OiAjNDE0MTQ2O1xcbiRmb250LXdoaXRlOiAjZjBmMGYwO1xcbiRmb250LWdyYXk6ICM5ZTllOWU7XFxuJGJvcmRlci1kYXJrOiAjNDc0NzQ3O1xcbiRjYXJkLXNoYWRvdzogIzFhMWExYTtcXG4kdGhlbWUtcmVkOiAjZmY1YzVjO1xcblxcbkBtaXhpbiBidXR0b24tZm9jdXMoJHRvcCwgJGxlZnQpIHtcXG4gICY6OmFmdGVyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogJHRvcDtcXG4gICAgbGVmdDogJGxlZnQ7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBoZWlnaHQ6IDZweDtcXG4gICAgd2lkdGg6IDZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG5cXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGdsb3c7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICB9XFxuICBAa2V5ZnJhbWVzIGdsb3cge1xcbiAgICBmcm9tIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEwMCUpO1xcbiAgICAgIG9wYWNpdHk6IDAuNDtcXG4gICAgfVxcblxcbiAgICB0byB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxMjAlKTtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtaXhpbiBpY29uLXNpemUoJHBpeGVsKSB7XFxuICBoZWlnaHQ6ICRwaXhlbDtcXG4gIHdpZHRoOiAkcGl4ZWw7XFxufVxcblxcbkBtaXhpbiBidXR0b24tc3R5bGluZyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1peGluIGZsZXgtY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdMYXRvJztcXG4gIHNyYzogdXJsKCcuLi9mb250cy9MYXRvLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL1BvcHBpbnMtUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4vKiAtLS0gQ1NTIFJlc2V0IC0tLSAqL1xcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5tYXJnaW46IDA7XFxucGFkZGluZzogMDtcXG5ib3JkZXI6IDA7XFxuZm9udC1zaXplOiAxMDAlO1xcbmZvbnQ6IGluaGVyaXQ7XFxudmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG5mb250LWZhbWlseTogaW5oZXJpdDtcXG5mb250LXNpemU6IDEwMCU7XFxufVxcblxcbi8qIC0tLSBDdXN0b20gQ1NTIC0tLSAqL1xcbjpyb290IHtcXG4gICYuZGFyayB7XFxuICAgIC0tdGhlbWUtYWxtb25kOiB0b21hdG87XFxuICB9XFxuICAmLmxpZ2h0IHtcXG4gICAgLS10aGVtZS1hbG1vbmQ6IGJsYW5jaGVkYWxtb25kO1xcbiAgfVxcbiAgYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1kYXJrZXI7XFxuICAgICNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMjBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyO1xcbiAgICB9XFxuICB9XFxufVxcblxcblxcblwiLFwiQHVzZSAnaW5kZXgnO1xcblxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuXFxuYm9keSB7XFxuICAjY29udGVudCB7XFxuICAgICNoZWFkZXItLXNpZGViYXItaGlkZSB7XFxuICAgICAgcGFkZGluZzogMjVweDtcXG5cXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgZ2FwOiA1cHg7XFxuICAgICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgIH1cXG4gICAgaGVhZGVyIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIGgyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICAgIH1cXG4gICAgICBkaXYge1xcbiAgICAgICAgLmJ1dHRvbi1vcGVuLWFkZC10YXNrIHtcXG4gICAgICAgICAgcGFkZGluZzogMTJweDtcXG4gICAgICAgICAgcCB7XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIGluZGV4Lmljb24tc2l6ZSgxNXB4KTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmJ1dHRvbi1vcGVuLWVkaXQtYm9hcmQge1xcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIGluZGV4Lmljb24tc2l6ZSgxNXB4KTtcXG5cXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgLmJ1dHRvbi1zaWRlYmFyIHtcXG4gICAgICAgICAgcGFkZGluZzogMTJweDtcXG4gICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBpbmRleC5pY29uLXNpemUoMTVweCk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuICBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBib2R5ICNjb250ZW50IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9icmVha3BvaW50cy1pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBR0U7SUFDQSwwQkFBQTtFQURBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG5cXG5ib2R5IHtcXG4gICNjb250ZW50IHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbn1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9MYXRvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLyogLS0tIENTUyBSZXNldCAtLS0gKi9cbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5idXR0b24sXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLyogLS0tIEN1c3RvbSBDU1MgLS0tICovXG46cm9vdC5kYXJrIHtcbiAgLS10aGVtZS1hbG1vbmQ6IHRvbWF0bztcbn1cbjpyb290LmxpZ2h0IHtcbiAgLS10aGVtZS1hbG1vbmQ6IGJsYW5jaGVkYWxtb25kO1xufVxuOnJvb3QgYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTJlO1xufVxuOnJvb3QgYm9keSAjY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzIwcHggMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgYm9keSAjY29udGVudCAjbWFpbi0tc2lkZWJhci1oaWRlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtY29sdW1uOiAxO1xuICB9XG4gIGJvZHkgI2NvbnRlbnQgbWFpbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBib2R5ICNjb250ZW50IG1haW4gLmR1ZS1ib2FyZF9faGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gIH1cbiAgYm9keSAjY29udGVudCBtYWluIC5kdWUtYm9hcmRfX2hlYWRlciBkaXYgaDIge1xuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAwLjVyZW07XG4gIH1cbiAgYm9keSAjY29udGVudCBtYWluIC5kdWUtYm9hcmRfX2hlYWRlciBkaXYgaDMge1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIHdoaXRlLXNwYWNlOiB3cmFwO1xuICB9XG4gIGJvZHkgI2NvbnRlbnQgbWFpbiAuZHVlLWJvYXJkX19oZWFkZXIgLmhyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGJvZHkgI2NvbnRlbnQgbWFpbiAuZHVlLWJvYXJkX19oZWFkZXIgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgYm9keSAjY29udGVudCBtYWluIC5kdWUtYm9hcmRfX2hlYWRlciBidXR0b24gcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBib2R5ICNjb250ZW50IG1haW4gLmR1ZS1ib2FyZF9faGVhZGVyIGJ1dHRvbiBpbWcge1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgfVxuICBib2R5ICNjb250ZW50IG1haW4gLmR1ZS1ib2FyZCB1bCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2JyZWFrcG9pbnRzLW1haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUEwREE7RUFDRSxtQkFBQTtFQUNBLCtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ3pERjtBRDREQTtFQUNFLHNCQUFBO0VBQ0EsK0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDMURGO0FENkRBLHNCQUFBO0FBQ0E7RUFDRSxzQkFBQTtBQzNERjs7QUQ4REE7Ozs7Ozs7Ozs7Ozs7RUFhQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDM0RBOztBRDhEQTs7OztFQUlBLG9CQUFBO0VBQ0EsZUFBQTtBQzNEQTs7QUQ4REEsdUJBQUE7QUFFRTtFQUNFLHNCQUFBO0FDNURKO0FEOERFO0VBQ0UsOEJBQUE7QUM1REo7QUQ4REU7RUFDRSw2SUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBcEhXO0FDd0RmO0FENkRJO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUMzREo7O0FBNURBO0VBSUk7SUFDRSxhQUFBO0lBRUEsY0FBQTtFQTJESjtFQXpERTtJQUNFLGFBQUE7RUEyREo7RUF6RE07SUFDRSw0QkFBQTtJQUVBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLFNBQUE7RUEwRFI7RUF4RFU7SUFDRSxpQkFBQTtJQUNBLG1CQUFBO0VBMERaO0VBeERVO0lBQ0UsaUJBQUE7SUFDQSxpQkFBQTtFQTBEWjtFQXZEUTtJQUNFLGFBQUE7RUF5RFY7RUF2RFE7SUFDRSxZQUFBO0VBeURWO0VBeERVO0lBQ0UsYUFBQTtFQTBEWjtFQXhEVTtJRElWLFlDSHFDO0lESXJDLFdDSnFDO0VBMkRyQztFQXZETTtJQUNFLGFBQUE7RUF5RFI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkdGhlbWUtZGFyazogIzM3MzYzZTtcXG4kdGhlbWUtZGFya2VyOiAjMjkyOTJlO1xcbiR0aGVtZS1wdXJwbGU6ICM4NTcwZmM7XFxuJHRoZW1lLWdyYXk6ICM0MTQxNDY7XFxuJGZvbnQtd2hpdGU6ICNmMGYwZjA7XFxuJGZvbnQtZ3JheTogIzllOWU5ZTtcXG4kYm9yZGVyLWRhcms6ICM0NzQ3NDc7XFxuJGNhcmQtc2hhZG93OiAjMWExYTFhO1xcbiR0aGVtZS1yZWQ6ICNmZjVjNWM7XFxuXFxuQG1peGluIGJ1dHRvbi1mb2N1cygkdG9wLCAkbGVmdCkge1xcbiAgJjo6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAkdG9wO1xcbiAgICBsZWZ0OiAkbGVmdDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGhlaWdodDogNnB4O1xcbiAgICB3aWR0aDogNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcblxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcbiAgICBhbmltYXRpb24tbmFtZTogZ2xvdztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIH1cXG4gIEBrZXlmcmFtZXMgZ2xvdyB7XFxuICAgIGZyb20ge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMTAwJSk7XFxuICAgICAgb3BhY2l0eTogMC40O1xcbiAgICB9XFxuXFxuICAgIHRvIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEyMCUpO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1peGluIGljb24tc2l6ZSgkcGl4ZWwpIHtcXG4gIGhlaWdodDogJHBpeGVsO1xcbiAgd2lkdGg6ICRwaXhlbDtcXG59XFxuXFxuQG1peGluIGJ1dHRvbi1zdHlsaW5nIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWl4aW4gZmxleC1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0xhdG8nO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL0xhdG8tUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICBzcmM6IHVybCgnLi4vZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi8qIC0tLSBDU1MgUmVzZXQgLS0tICovXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbm1hcmdpbjogMDtcXG5wYWRkaW5nOiAwO1xcbmJvcmRlcjogMDtcXG5mb250LXNpemU6IDEwMCU7XFxuZm9udDogaW5oZXJpdDtcXG52ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbmZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbmZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLyogLS0tIEN1c3RvbSBDU1MgLS0tICovXFxuOnJvb3Qge1xcbiAgJi5kYXJrIHtcXG4gICAgLS10aGVtZS1hbG1vbmQ6IHRvbWF0bztcXG4gIH1cXG4gICYubGlnaHQge1xcbiAgICAtLXRoZW1lLWFsbW9uZDogYmxhbmNoZWRhbG1vbmQ7XFxuICB9XFxuICBib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWRhcmtlcjtcXG4gICAgI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMyMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuXFxuXCIsXCJAdXNlICdpbmRleCc7XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG5cXG5ib2R5IHtcXG4gICNjb250ZW50IHtcXG4gICAgI21haW4tLXNpZGViYXItaGlkZSB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgfVxcbiAgICBtYWluIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIC5kdWUtYm9hcmQge1xcbiAgICAgICAgJl9faGVhZGVyIHtcXG4gICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcXG5cXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgICBkaXYge1xcbiAgICAgICAgICAgIGgyIHtcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuNXJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgaDMge1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogd3JhcDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgLmhyIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgICAgIHAge1xcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGluZGV4Lmljb24tc2l6ZSgyNXB4KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIHVsIHtcXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuICBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9MYXRvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLyogLS0tIENTUyBSZXNldCAtLS0gKi9cbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5idXR0b24sXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLyogLS0tIEN1c3RvbSBDU1MgLS0tICovXG46cm9vdC5kYXJrIHtcbiAgLS10aGVtZS1hbG1vbmQ6IHRvbWF0bztcbn1cbjpyb290LmxpZ2h0IHtcbiAgLS10aGVtZS1hbG1vbmQ6IGJsYW5jaGVkYWxtb25kO1xufVxuOnJvb3QgYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTJlO1xufVxuOnJvb3QgYm9keSAjY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzIwcHggMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcbn1cblxuYm9keSAjY29udGVudCAuZGlhbG9nLWNyZWF0ZS1ib2FyZCxcbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1lZGl0LWJvYXJkIHtcbiAgd2lkdGg6IG1pbigzODBweCwgMTAwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzM2M2U7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWNyZWF0ZS1ib2FyZDo6YmFja2Ryb3AsXG5ib2R5ICNjb250ZW50IC5kaWFsb2ctZWRpdC1ib2FyZDo6YmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMC42O1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWNyZWF0ZS1ib2FyZCBkaXYsXG5ib2R5ICNjb250ZW50IC5kaWFsb2ctZWRpdC1ib2FyZCBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctY3JlYXRlLWJvYXJkIGRpdiBoNixcbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1lZGl0LWJvYXJkIGRpdiBoNiB7XG4gIGNvbG9yOiAjZjBmMGYwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctY3JlYXRlLWJvYXJkIGRpdiBkaXYsXG5ib2R5ICNjb250ZW50IC5kaWFsb2ctZWRpdC1ib2FyZCBkaXYgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNXB4O1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWNyZWF0ZS1ib2FyZCBkaXYgZGl2IGJ1dHRvbixcbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1lZGl0LWJvYXJkIGRpdiBkaXYgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNDE0NjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWNyZWF0ZS1ib2FyZCBkaXYgZGl2IGJ1dHRvbjpob3ZlcixcbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1lZGl0LWJvYXJkIGRpdiBkaXYgYnV0dG9uOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEyMCUpO1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWNyZWF0ZS1ib2FyZCBkaXYgZGl2IGJ1dHRvbiBpbWcsXG5ib2R5ICNjb250ZW50IC5kaWFsb2ctZWRpdC1ib2FyZCBkaXYgZGl2IGJ1dHRvbiBpbWcge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWNyZWF0ZS1ib2FyZCBmb3JtLFxuYm9keSAjY29udGVudCAuZGlhbG9nLWVkaXQtYm9hcmQgZm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctY3JlYXRlLWJvYXJkIGZvcm0gZGl2IGxhYmVsLFxuYm9keSAjY29udGVudCAuZGlhbG9nLWVkaXQtYm9hcmQgZm9ybSBkaXYgbGFiZWwge1xuICBjb2xvcjogI2YwZjBmMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG1hcmdpbjogNHB4O1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWNyZWF0ZS1ib2FyZCBmb3JtIGRpdiBzcGFuLFxuYm9keSAjY29udGVudCAuZGlhbG9nLWVkaXQtYm9hcmQgZm9ybSBkaXYgc3BhbiB7XG4gIGNvbG9yOiAjZmY1YzVjO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWFyZ2luOiA0cHg7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctY3JlYXRlLWJvYXJkIGZvcm0gaW5wdXQsXG5ib2R5ICNjb250ZW50IC5kaWFsb2ctZWRpdC1ib2FyZCBmb3JtIGlucHV0IHtcbiAgY29sb3I6ICNmMGYwZjA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzM2M2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0MTQxNDY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY2FyZXQtY29sb3I6ICNmMGYwZjA7XG4gIGhlaWdodDogMzVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctY3JlYXRlLWJvYXJkIGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxuYm9keSAjY29udGVudCAuZGlhbG9nLWVkaXQtYm9hcmQgZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgcGFkZGluZzogNXB4O1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWNyZWF0ZS1ib2FyZCBmb3JtIGlucHV0OmZvY3VzLFxuYm9keSAjY29udGVudCAuZGlhbG9nLWVkaXQtYm9hcmQgZm9ybSBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctY3JlYXRlLWJvYXJkIGZvcm0gYnV0dG9uLFxuYm9keSAjY29udGVudCAuZGlhbG9nLWVkaXQtYm9hcmQgZm9ybSBidXR0b24ge1xuICBjb2xvcjogI2YwZjBmMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NTcwZmM7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1jcmVhdGUtYm9hcmQgZm9ybSBidXR0b246aG92ZXIsXG5ib2R5ICNjb250ZW50IC5kaWFsb2ctZWRpdC1ib2FyZCBmb3JtIGJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxMjAlKTtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1hZGQtdGFzayxcbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1lZGl0LXRhc2sge1xuICB3aWR0aDogbWluKDM4MHB4LCAxMDAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3MzYzZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDI1cHg7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctYWRkLXRhc2s6OmJhY2tkcm9wLFxuYm9keSAjY29udGVudCAuZGlhbG9nLWVkaXQtdGFzazo6YmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMC42O1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWFkZC10YXNrIGRpdixcbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1lZGl0LXRhc2sgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWFkZC10YXNrIGRpdiBoNixcbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1lZGl0LXRhc2sgZGl2IGg2IHtcbiAgY29sb3I6ICNmMGYwZjA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1hZGQtdGFzayBkaXYgZGl2LFxuYm9keSAjY29udGVudCAuZGlhbG9nLWVkaXQtdGFzayBkaXYgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNXB4O1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWFkZC10YXNrIGRpdiBkaXYgYnV0dG9uLFxuYm9keSAjY29udGVudCAuZGlhbG9nLWVkaXQtdGFzayBkaXYgZGl2IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTQxNDY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1hZGQtdGFzayBkaXYgZGl2IGJ1dHRvbjpob3ZlcixcbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1lZGl0LXRhc2sgZGl2IGRpdiBidXR0b246aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTIwJSk7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctYWRkLXRhc2sgZGl2IGRpdiBidXR0b24gaW1nLFxuYm9keSAjY29udGVudCAuZGlhbG9nLWVkaXQtdGFzayBkaXYgZGl2IGJ1dHRvbiBpbWcge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWFkZC10YXNrIGZvcm0gdWwsXG5ib2R5ICNjb250ZW50IC5kaWFsb2ctZWRpdC10YXNrIGZvcm0gdWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDEwcHg7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctYWRkLXRhc2sgZm9ybSB1bCBsaSxcbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1lZGl0LXRhc2sgZm9ybSB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctYWRkLXRhc2sgZm9ybSB1bCBsaSBkaXYgbGFiZWwsXG5ib2R5ICNjb250ZW50IC5kaWFsb2ctZWRpdC10YXNrIGZvcm0gdWwgbGkgZGl2IGxhYmVsIHtcbiAgY29sb3I6ICNmMGYwZjA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW46IDRweDtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1hZGQtdGFzayBmb3JtIHVsIGxpIGRpdiBzcGFuLFxuYm9keSAjY29udGVudCAuZGlhbG9nLWVkaXQtdGFzayBmb3JtIHVsIGxpIGRpdiBzcGFuIHtcbiAgY29sb3I6ICNmZjVjNWM7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW46IDRweDtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1hZGQtdGFzayBmb3JtIHVsIGxpIGlucHV0LFxuYm9keSAjY29udGVudCAuZGlhbG9nLWVkaXQtdGFzayBmb3JtIHVsIGxpIGlucHV0IHtcbiAgY29sb3I6ICNmMGYwZjA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzM2M2U7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0MTQxNDY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY2FyZXQtY29sb3I6ICNmMGYwZjA7XG4gIGhlaWdodDogMzVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctYWRkLXRhc2sgZm9ybSB1bCBsaSBpbnB1dDo6cGxhY2Vob2xkZXIsXG5ib2R5ICNjb250ZW50IC5kaWFsb2ctZWRpdC10YXNrIGZvcm0gdWwgbGkgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHBhZGRpbmc6IDVweDtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1hZGQtdGFzayBmb3JtIHVsIGxpIGlucHV0OmZvY3VzLFxuYm9keSAjY29udGVudCAuZGlhbG9nLWVkaXQtdGFzayBmb3JtIHVsIGxpIGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1hZGQtdGFzayBmb3JtIHVsIGxpIHRleHRhcmVhLFxuYm9keSAjY29udGVudCAuZGlhbG9nLWVkaXQtdGFzayBmb3JtIHVsIGxpIHRleHRhcmVhIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiAjZjBmMGYwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczNjNlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDE0MTQ2O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNhcmV0LWNvbG9yOiAjZjBmMGYwO1xuICBwYWRkaW5nOiAxMHB4O1xuICByZXNpemU6IHZlcnRpY2FsO1xuICB3aWR0aDogMTAwJTtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1hZGQtdGFzayBmb3JtIHVsIGxpIHRleHRhcmVhOjpwbGFjZWhvbGRlcixcbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1lZGl0LXRhc2sgZm9ybSB1bCBsaSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgcGFkZGluZzogNXB4O1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWFkZC10YXNrIGZvcm0gdWwgbGkgdGV4dGFyZWE6Zm9jdXMsXG5ib2R5ICNjb250ZW50IC5kaWFsb2ctZWRpdC10YXNrIGZvcm0gdWwgbGkgdGV4dGFyZWE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLWFkZC10YXNrIGZvcm0gdWwgbGkgaW5wdXRbdHlwZT1kYXRlXSxcbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1lZGl0LXRhc2sgZm9ybSB1bCBsaSBpbnB1dFt0eXBlPWRhdGVdIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctYWRkLXRhc2sgZm9ybSB1bCBsaSBpbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3IsXG5ib2R5ICNjb250ZW50IC5kaWFsb2ctZWRpdC10YXNrIGZvcm0gdWwgbGkgaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctYWRkLXRhc2sgZm9ybSB1bCBsaSBzZWxlY3QsXG5ib2R5ICNjb250ZW50IC5kaWFsb2ctZWRpdC10YXNrIGZvcm0gdWwgbGkgc2VsZWN0IHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiAjZjBmMGYwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczNjNlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDE0MTQ2O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctYWRkLXRhc2sgZm9ybSB1bCBsaSBzZWxlY3Q6Zm9jdXMsXG5ib2R5ICNjb250ZW50IC5kaWFsb2ctZWRpdC10YXNrIGZvcm0gdWwgbGkgc2VsZWN0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1hZGQtdGFzayBmb3JtIHVsIGxpIGJ1dHRvbixcbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1lZGl0LXRhc2sgZm9ybSB1bCBsaSBidXR0b24ge1xuICBjb2xvcjogI2YwZjBmMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NTcwZmM7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctYWRkLXRhc2sgZm9ybSB1bCBsaSBidXR0b246aG92ZXIsXG5ib2R5ICNjb250ZW50IC5kaWFsb2ctZWRpdC10YXNrIGZvcm0gdWwgbGkgYnV0dG9uOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEyMCUpO1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLXJlYWQtdGFzayB7XG4gIHdpZHRoOiBtaW4oMzgwcHgsIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczNjNlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjVweDtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1yZWFkLXRhc2tbb3Blbl0ge1xuICBkaXNwbGF5OiBncmlkO1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLXJlYWQtdGFzazo6YmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgb3BhY2l0eTogMC42O1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLXJlYWQtdGFzayBoNSB7XG4gIGNvbG9yOiAjZjBmMGYwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAyMHB4IDBweCA1cHggMHB4O1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLXJlYWQtdGFzayBwIHtcbiAgY29sb3I6ICM5ZTllOWU7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgbWFyZ2luOiAxMnB4IDBweDtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1yZWFkLXRhc2tfX2luZm8ge1xuICBtYXJnaW46IDE1cHggMHB4IDEwcHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctcmVhZC10YXNrX19pbmZvIGg2IHtcbiAgY29sb3I6ICNmMGYwZjA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTQxNDY7XG4gIHBhZGRpbmc6IDRweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA3MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLXJlYWQtdGFza19faW5mbyBkaXYge1xuICB3aWR0aDogbWluLWNvbnRlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTQxNDY7XG4gIHBhZGRpbmc6IDRweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA3MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctcmVhZC10YXNrX19pbmZvIGRpdiBpbWcge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xufVxuYm9keSAjY29udGVudCAuZGlhbG9nLXJlYWQtdGFza19faW5mbyBkaXYgc3BhbiB7XG4gIGNvbG9yOiAjZjBmMGYwO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1yZWFkLXRhc2tfX2J1dHRvbnMge1xuICBtYXJnaW46IDIwcHggMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA5MHB4O1xuICBnYXA6IDEwcHg7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctcmVhZC10YXNrX19idXR0b25zIGJ1dHRvbiB7XG4gIGNvbG9yOiAjZjBmMGYwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg1NzBmYztcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMnM7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctcmVhZC10YXNrX19idXR0b25zIGJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxMjAlKTtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1yZWFkLXRhc2tfX2J1dHRvbnMgYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1yZWFkLXRhc2tfX2J1dHRvbnMgLmJ1dHRvbi1wcm9jZWVkLXRhc2stLWRlbGV0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDU0LCA1NCk7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctcmVhZC10YXNrX19idXR0b25zIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1yZWFkLXRhc2tfX2J1dHRvbnMgZGl2IGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5ib2R5ICNjb250ZW50IC5kaWFsb2ctcmVhZC10YXNrX19idXR0b25zIGRpdiBidXR0b24gaW1nIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cbmJvZHkgI2NvbnRlbnQgLmRpYWxvZy1yZWFkLXRhc2tfX2J1dHRvbnMgZGl2IGJ1dHRvbjpsYXN0LWNoaWxkIGltZyB7XG4gIHNjYWxlOiAxMjAlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2RpYWxvZy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQTBEQTtFQUNFLG1CQUFBO0VBQ0EsK0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDekRGO0FENERBO0VBQ0Usc0JBQUE7RUFDQSwrREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUMxREY7QUQ2REEsc0JBQUE7QUFDQTtFQUNFLHNCQUFBO0FDM0RGOztBRDhEQTs7Ozs7Ozs7Ozs7OztFQWFBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUMzREE7O0FEOERBOzs7O0VBSUEsb0JBQUE7RUFDQSxlQUFBO0FDM0RBOztBRDhEQSx1QkFBQTtBQUVFO0VBQ0Usc0JBQUE7QUM1REo7QUQ4REU7RUFDRSw4QkFBQTtBQzVESjtBRDhERTtFQUNFLDZJQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFwSFc7QUN3RGY7QUQ2REk7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQzNESjs7QUExREk7O0VBRUUsdUJBQUE7RUFDQSx5QkRQTztFQ1FQLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBNkROO0FBM0RNOztFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQThEUjtBQTVETTs7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQStEUjtBQTlEUTs7RUFDRSxjRGpCRztFQ2tCSCxpQkFBQTtFQUNBLGlCQUFBO0FBaUVWO0FBL0RROztFQUNFLGFBQUE7RUFDQSxTQUFBO0FBa0VWO0FBakVVOztFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRDVCQztFQzZCRCxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBRUEsb0JBQUE7QUFrRVo7QUFqRVk7O0VBQ0Usd0JBQUE7QUFvRWQ7QUFsRVk7O0VERFYsWUNFcUM7RUREckMsV0NDcUM7QUFzRXZDO0FBakVNOztFQUNFLGFBQUE7QUFvRVI7QUFsRVU7O0VBQ0UsY0RqREM7RUNrREQsaUJBQUE7RUFDQSxXQUFBO0FBcUVaO0FBbkVVOztFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFzRVo7QUFsRVE7O0VBQ0UsY0Q3REc7RUM4REgseUJEbEVHO0VDbUVILHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkRqRUc7RUNrRUgsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBcUVWO0FBcEVVOztFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQXVFWjtBQXJFVTs7RUFDRSxhQUFBO0FBd0VaO0FBckVROztFQUNFLGNEOUVHO0VDK0VILGlCQUFBO0VBQ0EseUJEbEZLO0VDbUZMLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBRUEsb0JBQUE7QUF1RVY7QUF0RVU7O0VBQ0Usd0JBQUE7QUF5RVo7QUFwRUk7O0VBRUUsdUJBQUE7RUFDQSx5QkRyR087RUNzR1AsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFzRU47QUFwRU07O0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FBdUVSO0FBckVNOztFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBd0VSO0FBdkVROztFQUNFLGNEL0dHO0VDZ0hILGlCQUFBO0VBQ0EsaUJBQUE7QUEwRVY7QUF4RVE7O0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUEyRVY7QUExRVU7O0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0VBQ0EseUJEMUhDO0VDMkhELG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxvQkFBQTtBQTJFWjtBQTFFWTs7RUFDRSx3QkFBQTtBQTZFZDtBQTNFWTs7RUQvRlYsWUNnR3FDO0VEL0ZyQyxXQytGcUM7QUErRXZDO0FBekVROztFQUNFLGFBQUE7RUFDQSxTQUFBO0FBNEVWO0FBM0VVOztFQUNFLGdCQUFBO0FBOEVaO0FBNUVjOztFQUNFLGNEbkpIO0VDb0pHLGlCQUFBO0VBQ0EsV0FBQTtBQStFaEI7QUE3RWM7O0VBQ0UsY0RwSko7RUNxSkksaUJBQUE7RUFDQSxXQUFBO0FBZ0ZoQjtBQTdFWTs7RUFDRSxjRDlKRDtFQytKQyx5QkRuS0Q7RUNvS0MseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CRGxLRDtFQ21LQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFnRmQ7QUEvRWM7O0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBa0ZoQjtBQWhGYzs7RUFDRSxhQUFBO0FBbUZoQjtBQWhGWTs7RUFDRSxpQkFBQTtFQUNBLGNEaExEO0VDaUxDLHlCRHJMRDtFQ3NMQyx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JEcExEO0VDcUxDLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFtRmQ7QUFsRmM7O0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBcUZoQjtBQW5GYzs7RUFDRSxhQUFBO0FBc0ZoQjtBQW5GWTs7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBc0ZkO0FBckZjOztFQUNFLGlCQUFBO0FBd0ZoQjtBQXJGWTs7RUFDRSxpQkFBQTtFQUNBLGNEMU1EO0VDMk1DLHlCRC9NRDtFQ2dOQyx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBd0ZkO0FBdkZjOztFQUNFLGFBQUE7QUEwRmhCO0FBdkZZOztFQUNFLGNEdE5EO0VDdU5DLGlCQUFBO0VBQ0EseUJEMU5DO0VDMk5ELFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLG9CQUFBO0FBeUZkO0FBeEZjOztFQUNFLHdCQUFBO0FBMkZoQjtBQXBGSTtFQUNFLHVCQUFBO0VBQ0EseUJEL09PO0VDZ1BQLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBc0ZOO0FBckZNO0VBQ0UsYUFBQTtBQXVGUjtBQXJGTTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQXVGUjtBQXJGTTtFQUNFLGNEdlBLO0VDd1BMLGlCQUFBO0VBRUEsd0JBQUE7QUFzRlI7QUFuRk07RUFDRSxjRDdQSTtFQzhQSixpQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFvRlI7QUFsRk07RUFDRSx5QkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFtRlI7QUFsRlE7RUFDRSxjRDNRRztFQzRRSCxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJEL1FHO0VDZ1JILGlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUFtRlY7QUFqRlE7RUFDRSxrQkFBQTtFQUNBLHlCRHhSRztFQ3lSSCxpQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQWtGVjtBQWpGVTtFRHhQUixZQ3lQbUM7RUR4UG5DLFdDd1BtQztBQW9GckM7QUFsRlU7RUFDRSxjRGxTQztFQ21TRCxpQkFBQTtBQW9GWjtBQWhGTTtFQUNFLGdCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxTQUFBO0FBaUZSO0FBL0VRO0VBQ0UsY0RoVEc7RUNpVEgsaUJBQUE7RUFDQSx5QkRwVEs7RUNxVEwsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFQSx1QkFBQTtBQWdGVjtBQS9FVTtFQUNFLHdCQUFBO0FBaUZaO0FBL0VVO0VBQ0UsYUFBQTtBQWlGWjtBQTlFUTtFQUNFLGtDQUFBO0FBZ0ZWO0FBOUVRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQWdGVjtBQTlFVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFnRlo7QUEvRVk7RUR0U1YsWUN1U3FDO0VEdFNyQyxXQ3NTcUM7QUFrRnZDO0FBOUVZO0VBQ0UsV0FBQTtBQWdGZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkdGhlbWUtZGFyazogIzM3MzYzZTtcXG4kdGhlbWUtZGFya2VyOiAjMjkyOTJlO1xcbiR0aGVtZS1wdXJwbGU6ICM4NTcwZmM7XFxuJHRoZW1lLWdyYXk6ICM0MTQxNDY7XFxuJGZvbnQtd2hpdGU6ICNmMGYwZjA7XFxuJGZvbnQtZ3JheTogIzllOWU5ZTtcXG4kYm9yZGVyLWRhcms6ICM0NzQ3NDc7XFxuJGNhcmQtc2hhZG93OiAjMWExYTFhO1xcbiR0aGVtZS1yZWQ6ICNmZjVjNWM7XFxuXFxuQG1peGluIGJ1dHRvbi1mb2N1cygkdG9wLCAkbGVmdCkge1xcbiAgJjo6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAkdG9wO1xcbiAgICBsZWZ0OiAkbGVmdDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGhlaWdodDogNnB4O1xcbiAgICB3aWR0aDogNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcblxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcbiAgICBhbmltYXRpb24tbmFtZTogZ2xvdztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIH1cXG4gIEBrZXlmcmFtZXMgZ2xvdyB7XFxuICAgIGZyb20ge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMTAwJSk7XFxuICAgICAgb3BhY2l0eTogMC40O1xcbiAgICB9XFxuXFxuICAgIHRvIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEyMCUpO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1peGluIGljb24tc2l6ZSgkcGl4ZWwpIHtcXG4gIGhlaWdodDogJHBpeGVsO1xcbiAgd2lkdGg6ICRwaXhlbDtcXG59XFxuXFxuQG1peGluIGJ1dHRvbi1zdHlsaW5nIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWl4aW4gZmxleC1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0xhdG8nO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL0xhdG8tUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICBzcmM6IHVybCgnLi4vZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi8qIC0tLSBDU1MgUmVzZXQgLS0tICovXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbm1hcmdpbjogMDtcXG5wYWRkaW5nOiAwO1xcbmJvcmRlcjogMDtcXG5mb250LXNpemU6IDEwMCU7XFxuZm9udDogaW5oZXJpdDtcXG52ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbmZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbmZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLyogLS0tIEN1c3RvbSBDU1MgLS0tICovXFxuOnJvb3Qge1xcbiAgJi5kYXJrIHtcXG4gICAgLS10aGVtZS1hbG1vbmQ6IHRvbWF0bztcXG4gIH1cXG4gICYubGlnaHQge1xcbiAgICAtLXRoZW1lLWFsbW9uZDogYmxhbmNoZWRhbG1vbmQ7XFxuICB9XFxuICBib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWRhcmtlcjtcXG4gICAgI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMyMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuXFxuXCIsXCJAdXNlICdpbmRleCc7XFxuXFxuYm9keSB7XFxuICAjY29udGVudCB7XFxuICAgIC5kaWFsb2ctY3JlYXRlLWJvYXJkLFxcbiAgICAuZGlhbG9nLWVkaXQtYm9hcmQge1xcbiAgICAgIHdpZHRoOiBtaW4oMzgwcHgsIDEwMCUpO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGluZGV4LiR0aGVtZS1kYXJrO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4OztcXG4gICAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XFxuXFxuICAgICAgJjo6YmFja2Ryb3Age1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgICAgICBvcGFjaXR5OiAwLjY7XFxuICAgICAgfVxcbiAgICAgIGRpdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGg2IHtcXG4gICAgICAgICAgY29sb3I6IGluZGV4LiRmb250LXdoaXRlO1xcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XFxuICAgICAgICB9XFxuICAgICAgICBkaXYge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBnYXA6IDE1cHg7XFxuICAgICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluZGV4LiR0aGVtZS1ncmF5O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIFxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIFxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyMCUpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgQGluY2x1ZGUgaW5kZXguaWNvbi1zaXplKDIwcHgpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgICBmb3JtIHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBkaXYge1xcbiAgICAgICAgICBsYWJlbCB7XFxuICAgICAgICAgICAgY29sb3I6IGluZGV4LiRmb250LXdoaXRlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgICAgICAgIG1hcmdpbjogNHB4O1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIHNwYW4ge1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmY1YzVjO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgICAgICAgIG1hcmdpbjogNHB4O1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpbnB1dCB7XFxuICAgICAgICAgIGNvbG9yOiBpbmRleC4kZm9udC13aGl0ZTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5kZXguJHRoZW1lLWRhcms7XFxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGluZGV4LiR0aGVtZS1ncmF5O1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgIGNhcmV0LWNvbG9yOiBpbmRleC4kZm9udC13aGl0ZTtcXG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICAmOmZvY3VzIHtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICBjb2xvcjogaW5kZXguJGZvbnQtd2hpdGU7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRleC4kdGhlbWUtcHVycGxlO1xcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XFxuICAgICAgICAgIG1hcmdpbjogMjBweCAwcHg7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMjAlKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuZGlhbG9nLWFkZC10YXNrLFxcbiAgICAuZGlhbG9nLWVkaXQtdGFzayB7XFxuICAgICAgd2lkdGg6IG1pbigzODBweCwgMTAwJSk7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5kZXguJHRoZW1lLWRhcms7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7O1xcbiAgICAgIHBhZGRpbmc6IDEwcHggMjVweDtcXG5cXG4gICAgICAmOjpiYWNrZHJvcCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgICB9XFxuICAgICAgZGl2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgaDYge1xcbiAgICAgICAgICBjb2xvcjogaW5kZXguJGZvbnQtd2hpdGU7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIGRpdiB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGdhcDogMTVweDtcXG4gICAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5kZXguJHRoZW1lLWdyYXk7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTIwJSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICBAaW5jbHVkZSBpbmRleC5pY29uLXNpemUoMjBweCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICAgIGZvcm0ge1xcbiAgICAgICAgdWwge1xcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgIGxpIHtcXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgICAgIGRpdiB7XFxuICAgICAgICAgICAgICBsYWJlbCB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBpbmRleC4kZm9udC13aGl0ZTtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgICAgICAgICAgIG1hcmdpbjogNHB4O1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgc3BhbiB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBpbmRleC4kdGhlbWUtcmVkO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA0cHg7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGlucHV0IHtcXG4gICAgICAgICAgICAgIGNvbG9yOiBpbmRleC4kZm9udC13aGl0ZTtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluZGV4LiR0aGVtZS1kYXJrO1xcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgaW5kZXguJHRoZW1lLWdyYXk7XFxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgICAgICBjYXJldC1jb2xvcjogaW5kZXguJGZvbnQtd2hpdGU7XFxuICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAmOmZvY3VzIHtcXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgdGV4dGFyZWEge1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgICAgICAgICAgICBjb2xvcjogaW5kZXguJGZvbnQtd2hpdGU7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRleC4kdGhlbWUtZGFyaztcXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGluZGV4LiR0aGVtZS1ncmF5O1xcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgY2FyZXQtY29sb3I6IGluZGV4LiRmb250LXdoaXRlO1xcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICAgIHJlc2l6ZTogdmVydGljYWw7XFxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICY6Zm9jdXMge1xcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICY6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgICAgICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBzZWxlY3Qge1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgICAgICAgICBjb2xvcjogaW5kZXguJGZvbnQtd2hpdGU7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRleC4kdGhlbWUtZGFyaztcXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGluZGV4LiR0aGVtZS1ncmF5O1xcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgJjpmb2N1cyB7XFxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgICBjb2xvcjogaW5kZXguJGZvbnQtd2hpdGU7XFxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluZGV4LiR0aGVtZS1wdXJwbGU7XFxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDBweDtcXG4gICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwcHg7XFxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgXFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG4gICAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTIwJSk7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC5kaWFsb2ctcmVhZC10YXNrIHtcXG4gICAgICB3aWR0aDogbWluKDM4MHB4LCAxMDAlKTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRleC4kdGhlbWUtZGFyaztcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDs7XFxuICAgICAgcGFkZGluZzogMTBweCAyNXB4O1xcbiAgICAgICZbb3Blbl0ge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICB9XFxuICAgICAgJjo6YmFja2Ryb3Age1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgICAgICBvcGFjaXR5OiAwLjY7XFxuICAgICAgfVxcbiAgICAgIGg1IHtcXG4gICAgICAgIGNvbG9yOiBpbmRleC4kZm9udC13aGl0ZTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgLy8gd2lkdGg6IDM1MHB4O1xcbiAgICAgICAgbWFyZ2luOiAyMHB4IDBweCA1cHggMHB4O1xcbiAgICAgIH1cXG5cXG4gICAgICBwIHtcXG4gICAgICAgIGNvbG9yOiBpbmRleC4kZm9udC1ncmF5O1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgICAvLyB3aWR0aDogMzUwcHg7XFxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgICAgIG1hcmdpbjogMTJweCAwcHg7XFxuICAgICAgfVxcbiAgICAgICZfX2luZm8ge1xcbiAgICAgICAgbWFyZ2luOiAxNXB4IDBweCAxMHB4IDBweDtcXG5cXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgaDYge1xcbiAgICAgICAgICBjb2xvcjogaW5kZXguJGZvbnQtd2hpdGU7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluZGV4LiR0aGVtZS1ncmF5O1xcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMTVweDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNzBweDtcXG4gIFxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgZGl2IHtcXG4gICAgICAgICAgd2lkdGg6IG1pbi1jb250ZW50O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRleC4kdGhlbWUtZ3JheTtcXG4gICAgICAgICAgcGFkZGluZzogNHB4IDE1cHg7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDcwcHg7XFxuICBcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIEBpbmNsdWRlIGluZGV4Lmljb24tc2l6ZSgxNXB4KTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgICBjb2xvcjogaW5kZXguJGZvbnQtd2hpdGU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgJl9fYnV0dG9ucyB7XFxuICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xcblxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA5MHB4O1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcblxcbiAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgY29sb3I6IGluZGV4LiRmb250LXdoaXRlO1xcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5kZXguJHRoZW1lLXB1cnBsZTtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgICAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMnM7XFxuICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMjAlKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICAmOmZvY3VzIHtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuYnV0dG9uLXByb2NlZWQtdGFzay0tZGVsZXRlIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgNTQsIDU0KTtcXG4gICAgICAgIH1cXG4gICAgICAgIGRpdiB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGdhcDogMTBweDtcXG5cXG4gICAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgQGluY2x1ZGUgaW5kZXguaWNvbi1zaXplKDIwcHgpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgICBidXR0b246bGFzdC1jaGlsZCB7XFxuICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgIHNjYWxlOiAxMjAlO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0xhdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4vKiAtLS0gQ1NTIFJlc2V0IC0tLSAqL1xuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbmJ1dHRvbixcbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuXG4vKiAtLS0gQ3VzdG9tIENTUyAtLS0gKi9cbjpyb290LmRhcmsge1xuICAtLXRoZW1lLWFsbW9uZDogdG9tYXRvO1xufVxuOnJvb3QubGlnaHQge1xuICAtLXRoZW1lLWFsbW9uZDogYmxhbmNoZWRhbG1vbmQ7XG59XG46cm9vdCBib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI5MmU7XG59XG46cm9vdCBib2R5ICNjb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMjBweCAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyO1xufVxuXG5ib2R5ICNjb250ZW50ICNoZWFkZXItLXNpZGViYXItaGlkZSB7XG4gIGdyaWQtY29sdW1uOiAxLzM7XG59XG5ib2R5ICNjb250ZW50IGhlYWRlciB7XG4gIHBhZGRpbmc6IDBweCAzNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczNjNlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzQ3NDc0NztcbiAgZ3JpZC1jb2x1bW46IDIvMztcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuYm9keSAjY29udGVudCBoZWFkZXIgaDIge1xuICBmb250LXNpemU6IDEuOHJlbTtcbiAgY29sb3I6ICNmMGYwZjA7XG59XG5ib2R5ICNjb250ZW50IGhlYWRlciBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDIwcHg7XG59XG5ib2R5ICNjb250ZW50IGhlYWRlciBkaXYgYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJvZHkgI2NvbnRlbnQgaGVhZGVyIGRpdiBidXR0b25bZGlzYWJsZWRdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmJvZHkgI2NvbnRlbnQgaGVhZGVyIGRpdiBidXR0b246aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTIwJSk7XG59XG5ib2R5ICNjb250ZW50IGhlYWRlciBkaXYgYnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoOTAlKTtcbn1cbmJvZHkgI2NvbnRlbnQgaGVhZGVyIGRpdiAuYnV0dG9uLW9wZW4tYWRkLXRhc2sge1xuICBwYWRkaW5nOiAwcHggMjJweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg1NzBmYztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG59XG5ib2R5ICNjb250ZW50IGhlYWRlciBkaXYgLmJ1dHRvbi1vcGVuLWFkZC10YXNrIHAge1xuICBjb2xvcjogI2YwZjBmMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbmJvZHkgI2NvbnRlbnQgaGVhZGVyIGRpdiAuYnV0dG9uLW9wZW4tYWRkLXRhc2sgaW1nIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cbmJvZHkgI2NvbnRlbnQgaGVhZGVyIGRpdiAuYnV0dG9uLW9wZW4tZWRpdC1ib2FyZCB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTQxNDY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuYm9keSAjY29udGVudCBoZWFkZXIgZGl2IC5idXR0b24tb3Blbi1lZGl0LWJvYXJkIGltZyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5ib2R5ICNjb250ZW50IGhlYWRlciBkaXYgLmJ1dHRvbi1zaWRlYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNDE0NjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbmJvZHkgI2NvbnRlbnQgaGVhZGVyIGRpdiAuYnV0dG9uLXNpZGViYXIgaW1nIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxMDUlKTtcbn1cbmJvZHkgI2NvbnRlbnQgaGVhZGVyIGRpdiAjYnV0dG9uLS1zaWRlYmFyLWhpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9oZWFkZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUEwREE7RUFDRSxtQkFBQTtFQUNBLCtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ3pERjtBRDREQTtFQUNFLHNCQUFBO0VBQ0EsK0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDMURGO0FENkRBLHNCQUFBO0FBQ0E7RUFDRSxzQkFBQTtBQzNERjs7QUQ4REE7Ozs7Ozs7Ozs7Ozs7RUFhQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDM0RBOztBRDhEQTs7OztFQUlBLG9CQUFBO0VBQ0EsZUFBQTtBQzNEQTs7QUQ4REEsdUJBQUE7QUFFRTtFQUNFLHNCQUFBO0FDNURKO0FEOERFO0VBQ0UsOEJBQUE7QUM1REo7QUQ4REU7RUFDRSw2SUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBcEhXO0FDd0RmO0FENkRJO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUMzREo7O0FBMURJO0VBQ0UsZ0JBQUE7QUE2RE47QUEzREk7RUFDRSxpQkFBQTtFQUNBLHlCRFRPO0VDVVAsZ0NBQUE7RUFFQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQTJETjtBQTFETTtFQUNFLGlCQUFBO0VBQ0EsY0RoQks7QUM0RWI7QUExRE07RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQTREUjtBQTNEUTtFQUNFLG9CQUFBO0VEcUJSLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUN5Q0Y7QUEvRFU7RUFDRSxhQUFBO0FBaUVaO0FBL0RVO0VBQ0Usd0JBQUE7QUFpRVo7QUEvRFU7RUFDRSxxQkFBQTtBQWlFWjtBQTdEUTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkR2Q0s7RUN5Q0wsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQThEVjtBQTdEVTtFQUNFLGNEM0NDO0VDNENELGlCQUFBO0VBQ0EsZUFBQTtBQStEWjtBQTdEVTtFRFRSLFlDVW1DO0VEVG5DLFdDU21DO0FBZ0VyQztBQTdEUTtFQUNFLGFBQUE7RUFDQSx5QkR0REc7RUN1REgsbUJBQUE7RURMUixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3FFRjtBQS9EVTtFRG5CUixZQ29CbUM7RURuQm5DLFdDbUJtQztBQWtFckM7QUEvRFE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHlCRGpFRztFQ2tFSCxtQkFBQTtBQWlFVjtBQWhFVTtFRDVCUixZQzZCbUM7RUQ1Qm5DLFdDNEJtQztFQUN6QixzQkFBQTtBQW1FWjtBQWhFUTtFRHRCTixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3lGRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkdGhlbWUtZGFyazogIzM3MzYzZTtcXG4kdGhlbWUtZGFya2VyOiAjMjkyOTJlO1xcbiR0aGVtZS1wdXJwbGU6ICM4NTcwZmM7XFxuJHRoZW1lLWdyYXk6ICM0MTQxNDY7XFxuJGZvbnQtd2hpdGU6ICNmMGYwZjA7XFxuJGZvbnQtZ3JheTogIzllOWU5ZTtcXG4kYm9yZGVyLWRhcms6ICM0NzQ3NDc7XFxuJGNhcmQtc2hhZG93OiAjMWExYTFhO1xcbiR0aGVtZS1yZWQ6ICNmZjVjNWM7XFxuXFxuQG1peGluIGJ1dHRvbi1mb2N1cygkdG9wLCAkbGVmdCkge1xcbiAgJjo6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAkdG9wO1xcbiAgICBsZWZ0OiAkbGVmdDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGhlaWdodDogNnB4O1xcbiAgICB3aWR0aDogNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcblxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcbiAgICBhbmltYXRpb24tbmFtZTogZ2xvdztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIH1cXG4gIEBrZXlmcmFtZXMgZ2xvdyB7XFxuICAgIGZyb20ge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMTAwJSk7XFxuICAgICAgb3BhY2l0eTogMC40O1xcbiAgICB9XFxuXFxuICAgIHRvIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEyMCUpO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1peGluIGljb24tc2l6ZSgkcGl4ZWwpIHtcXG4gIGhlaWdodDogJHBpeGVsO1xcbiAgd2lkdGg6ICRwaXhlbDtcXG59XFxuXFxuQG1peGluIGJ1dHRvbi1zdHlsaW5nIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWl4aW4gZmxleC1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0xhdG8nO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL0xhdG8tUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICBzcmM6IHVybCgnLi4vZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi8qIC0tLSBDU1MgUmVzZXQgLS0tICovXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbm1hcmdpbjogMDtcXG5wYWRkaW5nOiAwO1xcbmJvcmRlcjogMDtcXG5mb250LXNpemU6IDEwMCU7XFxuZm9udDogaW5oZXJpdDtcXG52ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbmZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbmZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLyogLS0tIEN1c3RvbSBDU1MgLS0tICovXFxuOnJvb3Qge1xcbiAgJi5kYXJrIHtcXG4gICAgLS10aGVtZS1hbG1vbmQ6IHRvbWF0bztcXG4gIH1cXG4gICYubGlnaHQge1xcbiAgICAtLXRoZW1lLWFsbW9uZDogYmxhbmNoZWRhbG1vbmQ7XFxuICB9XFxuICBib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWRhcmtlcjtcXG4gICAgI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMyMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuXFxuXCIsXCJAdXNlICdpbmRleCc7XFxuXFxuYm9keSB7XFxuICAjY29udGVudCB7XFxuICAgICNoZWFkZXItLXNpZGViYXItaGlkZSB7XFxuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICB9XFxuICAgIGhlYWRlciB7XFxuICAgICAgcGFkZGluZzogMHB4IDM1cHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5kZXguJHRoZW1lLWRhcms7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGluZGV4LiRib3JkZXItZGFyaztcXG5cXG4gICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgLy8gZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICAgIGdyaWQtcm93OiAxIC8gMjsgIFxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgaDIge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgICAgICBjb2xvcjogaW5kZXguJGZvbnQtd2hpdGU7XFxuICAgICAgfVxcbiAgICAgIGRpdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxuICAgICAgICAgICZbZGlzYWJsZWRdIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMjAlKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSg5MCUpO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIEBpbmNsdWRlIGluZGV4LmJ1dHRvbi1zdHlsaW5nKCk7XFxuICAgICAgICB9XFxuICAgICAgICAuYnV0dG9uLW9wZW4tYWRkLXRhc2sge1xcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMjJweDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5kZXguJHRoZW1lLXB1cnBsZTtcXG5cXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgZ2FwOiA1cHg7XFxuICAgICAgICAgIHAge1xcbiAgICAgICAgICAgIGNvbG9yOiBpbmRleC4kZm9udC13aGl0ZTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBpbmRleC5pY29uLXNpemUoMjBweCk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIC5idXR0b24tb3Blbi1lZGl0LWJvYXJkIHtcXG4gICAgICAgICAgcGFkZGluZzogMTJweDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5kZXguJHRoZW1lLWdyYXk7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuXFxuICAgICAgICAgIEBpbmNsdWRlIGluZGV4LmZsZXgtY2VudGVyKCk7XFxuICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgaW5kZXguaWNvbi1zaXplKDIwcHgpO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICAuYnV0dG9uLXNpZGViYXIge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRleC4kdGhlbWUtZ3JheTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICBAaW5jbHVkZSBpbmRleC5pY29uLXNpemUoMjBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxMDUlKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgICAgI2J1dHRvbi0tc2lkZWJhci1oaWRlIHtcXG4gICAgICAgICAgQGluY2x1ZGUgaW5kZXguZmxleC1jZW50ZXIoKTtcXG4gICAgICAgIFxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0xhdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4vKiAtLS0gQ1NTIFJlc2V0IC0tLSAqL1xuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbmJ1dHRvbixcbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxMDAlO1xufVxuXG4vKiAtLS0gQ3VzdG9tIENTUyAtLS0gKi9cbjpyb290LmRhcmsge1xuICAtLXRoZW1lLWFsbW9uZDogdG9tYXRvO1xufVxuOnJvb3QubGlnaHQge1xuICAtLXRoZW1lLWFsbW9uZDogYmxhbmNoZWRhbG1vbmQ7XG59XG46cm9vdCBib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI5MmU7XG59XG46cm9vdCBib2R5ICNjb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMjBweCAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQTBEQTtFQUNFLG1CQUFBO0VBQ0EsK0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBekRGO0FBNERBO0VBQ0Usc0JBQUE7RUFDQSwrREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUExREY7QUE2REEsc0JBQUE7QUFDQTtFQUNFLHNCQUFBO0FBM0RGOztBQThEQTs7Ozs7Ozs7Ozs7OztFQWFBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUEzREE7O0FBOERBOzs7O0VBSUEsb0JBQUE7RUFDQSxlQUFBO0FBM0RBOztBQThEQSx1QkFBQTtBQUVFO0VBQ0Usc0JBQUE7QUE1REo7QUE4REU7RUFDRSw4QkFBQTtBQTVESjtBQThERTtFQUNFLDZJQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFwSFc7QUF3RGY7QUE2REk7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQTNESlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkdGhlbWUtZGFyazogIzM3MzYzZTtcXG4kdGhlbWUtZGFya2VyOiAjMjkyOTJlO1xcbiR0aGVtZS1wdXJwbGU6ICM4NTcwZmM7XFxuJHRoZW1lLWdyYXk6ICM0MTQxNDY7XFxuJGZvbnQtd2hpdGU6ICNmMGYwZjA7XFxuJGZvbnQtZ3JheTogIzllOWU5ZTtcXG4kYm9yZGVyLWRhcms6ICM0NzQ3NDc7XFxuJGNhcmQtc2hhZG93OiAjMWExYTFhO1xcbiR0aGVtZS1yZWQ6ICNmZjVjNWM7XFxuXFxuQG1peGluIGJ1dHRvbi1mb2N1cygkdG9wLCAkbGVmdCkge1xcbiAgJjo6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAkdG9wO1xcbiAgICBsZWZ0OiAkbGVmdDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGhlaWdodDogNnB4O1xcbiAgICB3aWR0aDogNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcblxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcbiAgICBhbmltYXRpb24tbmFtZTogZ2xvdztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIH1cXG4gIEBrZXlmcmFtZXMgZ2xvdyB7XFxuICAgIGZyb20ge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMTAwJSk7XFxuICAgICAgb3BhY2l0eTogMC40O1xcbiAgICB9XFxuXFxuICAgIHRvIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEyMCUpO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1peGluIGljb24tc2l6ZSgkcGl4ZWwpIHtcXG4gIGhlaWdodDogJHBpeGVsO1xcbiAgd2lkdGg6ICRwaXhlbDtcXG59XFxuXFxuQG1peGluIGJ1dHRvbi1zdHlsaW5nIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWl4aW4gZmxleC1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0xhdG8nO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL0xhdG8tUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICBzcmM6IHVybCgnLi4vZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi8qIC0tLSBDU1MgUmVzZXQgLS0tICovXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbm1hcmdpbjogMDtcXG5wYWRkaW5nOiAwO1xcbmJvcmRlcjogMDtcXG5mb250LXNpemU6IDEwMCU7XFxuZm9udDogaW5oZXJpdDtcXG52ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbmZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbmZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLyogLS0tIEN1c3RvbSBDU1MgLS0tICovXFxuOnJvb3Qge1xcbiAgJi5kYXJrIHtcXG4gICAgLS10aGVtZS1hbG1vbmQ6IHRvbWF0bztcXG4gIH1cXG4gICYubGlnaHQge1xcbiAgICAtLXRoZW1lLWFsbW9uZDogYmxhbmNoZWRhbG1vbmQ7XFxuICB9XFxuICBib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWRhcmtlcjtcXG4gICAgI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMyMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9MYXRvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJMYXRvXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLyogLS0tIENTUyBSZXNldCAtLS0gKi9cbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5idXR0b24sXG5pbnB1dCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLyogLS0tIEN1c3RvbSBDU1MgLS0tICovXG46cm9vdC5kYXJrIHtcbiAgLS10aGVtZS1hbG1vbmQ6IHRvbWF0bztcbn1cbjpyb290LmxpZ2h0IHtcbiAgLS10aGVtZS1hbG1vbmQ6IGJsYW5jaGVkYWxtb25kO1xufVxuOnJvb3QgYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTJlO1xufVxuOnJvb3QgYm9keSAjY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzIwcHggMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcbn1cblxuYm9keSAjY29udGVudCAjbWFpbi0tc2lkZWJhci1oaWRlIHtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbn1cbmJvZHkgI2NvbnRlbnQgbWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTI5MmU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbiAgZ3JpZC1yb3c6IDIvMztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAyMHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbn1cbmJvZHkgI2NvbnRlbnQgbWFpbiAuY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmJvZHkgI2NvbnRlbnQgbWFpbiAuY29sdW1uX19oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuYm9keSAjY29udGVudCBtYWluIC5jb2x1bW5fX2hlYWRlciBoMyB7XG4gIGNvbG9yOiAjOWU5ZTllO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG59XG5ib2R5ICNjb250ZW50IG1haW4gLmNvbHVtbl9faGVhZGVyLXRvZG8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDdweDtcbn1cbmJvZHkgI2NvbnRlbnQgbWFpbiAuY29sdW1uX19oZWFkZXItdG9kbyBkaXYge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuYm9keSAjY29udGVudCBtYWluIC5jb2x1bW5fX2hlYWRlci1kb2luZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogN3B4O1xufVxuYm9keSAjY29udGVudCBtYWluIC5jb2x1bW5fX2hlYWRlci1kb2luZyBkaXYge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODU3MGZjO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuYm9keSAjY29udGVudCBtYWluIC5jb2x1bW5fX2hlYWRlci1kb25lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA3cHg7XG59XG5ib2R5ICNjb250ZW50IG1haW4gLmNvbHVtbl9faGVhZGVyLWRvbmUgZGl2IHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmJvZHkgI2NvbnRlbnQgbWFpbiAuY29sdW1uIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNXB4O1xufVxuYm9keSAjY29udGVudCBtYWluIC5jb2x1bW4gdWwgbGkge1xuICBjb2xvcjogI2YwZjBmMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3MzYzZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBwYWRkaW5nOiAxNXB4IDIwcHggMTVweCAyMHB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggIzFhMWExYTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbmJvZHkgI2NvbnRlbnQgbWFpbiAuY29sdW1uIHVsIGxpOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xufVxuYm9keSAjY29udGVudCBtYWluIC5jb2x1bW4gdWwgbGkgaDQge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5ib2R5ICNjb250ZW50IG1haW4gLmNvbHVtbiB1bCBsaSBwIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG5ib2R5ICNjb250ZW50IG1haW4gLmNvbHVtbiB1bCBsaSAudGFzay1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5ib2R5ICNjb250ZW50IG1haW4gLmNvbHVtbiB1bCBsaSAudGFzay1mb290ZXJfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNDE0NjtcbiAgcGFkZGluZzogNHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDcwcHg7XG59XG5ib2R5ICNjb250ZW50IG1haW4gLmNvbHVtbiB1bCBsaSAudGFzay1mb290ZXJfX2NvbnRhaW5lciBpbWcge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xufVxuYm9keSAjY29udGVudCBtYWluIC5jb2x1bW4gdWwgbGkgLnRhc2stZm9vdGVyX19jb250YWluZXIgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xufVxuYm9keSAjY29udGVudCBtYWluIC5jb2x1bW4gdWwgbGkgaDUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzllOWU5ZTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5ib2R5ICNjb250ZW50IG1haW4gLmR1ZS1ib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdyaWQtY29sdW1uOiAxL3NwYW4gMztcbn1cbmJvZHkgI2NvbnRlbnQgbWFpbiAuZHVlLWJvYXJkX19oZWFkZXIge1xuICBwYWRkaW5nOiAzMHB4IDQwcHggMHB4IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbn1cbmJvZHkgI2NvbnRlbnQgbWFpbiAuZHVlLWJvYXJkX19oZWFkZXIgZGl2IGgyIHtcbiAgY29sb3I6ICM5ZTllOWU7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDAuNXJlbTtcbn1cbmJvZHkgI2NvbnRlbnQgbWFpbiAuZHVlLWJvYXJkX19oZWFkZXIgZGl2IGgzIHtcbiAgY29sb3I6ICNmMGYwZjA7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuYm9keSAjY29udGVudCBtYWluIC5kdWUtYm9hcmRfX2hlYWRlciAuaHIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzQxNDE0NjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4IDUwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTNweCk7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuYm9keSAjY29udGVudCBtYWluIC5kdWUtYm9hcmRfX2hlYWRlciBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NTcwZmM7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4IDNweCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5ib2R5ICNjb250ZW50IG1haW4gLmR1ZS1ib2FyZF9faGVhZGVyIGJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxMjUlKTtcbn1cbmJvZHkgI2NvbnRlbnQgbWFpbiAuZHVlLWJvYXJkX19oZWFkZXIgYnV0dG9uIHAge1xuICBjb2xvcjogI2YwZjBmMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5ib2R5ICNjb250ZW50IG1haW4gLmR1ZS1ib2FyZF9faGVhZGVyIGJ1dHRvbiBpbWcge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuYm9keSAjY29udGVudCBtYWluIC5kdWUtYm9hcmQgdWwge1xuICBwYWRkaW5nOiA0MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdhcDogMjVweDtcbn1cbmJvZHkgI2NvbnRlbnQgbWFpbiAuZHVlLWJvYXJkIHVsIGxpIHtcbiAgY29sb3I6ICNmMGYwZjA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzM2M2U7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogMTVweCAyMHB4IDE1cHggMjBweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4ICMxYTFhMWE7XG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XG59XG5ib2R5ICNjb250ZW50IG1haW4gLmR1ZS1ib2FyZCB1bCBsaSBoNCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbmJvZHkgI2NvbnRlbnQgbWFpbiAuZHVlLWJvYXJkIHVsIGxpIHAge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cbmJvZHkgI2NvbnRlbnQgbWFpbiAuZHVlLWJvYXJkIHVsIGxpIC50YXNrLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmJvZHkgI2NvbnRlbnQgbWFpbiAuZHVlLWJvYXJkIHVsIGxpIC50YXNrLWZvb3Rlcl9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQ2O1xuICBwYWRkaW5nOiA0cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNzBweDtcbn1cbmJvZHkgI2NvbnRlbnQgbWFpbiAuZHVlLWJvYXJkIHVsIGxpIC50YXNrLWZvb3Rlcl9fY29udGFpbmVyIGltZyB7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDE1cHg7XG59XG5ib2R5ICNjb250ZW50IG1haW4gLmR1ZS1ib2FyZCB1bCBsaSAudGFzay1mb290ZXJfX2NvbnRhaW5lciBzcGFuIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG59XG5ib2R5ICNjb250ZW50IG1haW4gLmR1ZS1ib2FyZCB1bCBsaSBoNSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjOWU5ZTllO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBMERBO0VBQ0UsbUJBQUE7RUFDQSwrREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUN6REY7QUQ0REE7RUFDRSxzQkFBQTtFQUNBLCtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQzFERjtBRDZEQSxzQkFBQTtBQUNBO0VBQ0Usc0JBQUE7QUMzREY7O0FEOERBOzs7Ozs7Ozs7Ozs7O0VBYUEsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQzNEQTs7QUQ4REE7Ozs7RUFJQSxvQkFBQTtFQUNBLGVBQUE7QUMzREE7O0FEOERBLHVCQUFBO0FBRUU7RUFDRSxzQkFBQTtBQzVESjtBRDhERTtFQUNFLDhCQUFBO0FDNURKO0FEOERFO0VBQ0UsNklBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQXBIVztBQ3dEZjtBRDZESTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FDM0RKOztBQTFESTtFQUNFLGdCQUFBO0FBNkROO0FBM0RJO0VBQ0UseUJEUFM7RUNRVCxZQUFBO0VBQ0EsYUFBQTtFQUVBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBR0EsMkRBQUE7QUEwRE47QUF4RE07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUEwRFI7QUF6RFE7RUFDRSxtQkFBQTtBQTJEVjtBQTFEVTtFQUNFLGNEckJBO0VDc0JBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQTREWjtBQTFEVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUE0RFo7QUEzRFk7RURPVixZQ05xQztFRE9yQyxXQ1BxQztFQUN6QixzQkFBQTtFQUNBLG1CQUFBO0FBOERkO0FBM0RVO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQTZEWjtBQTVEWTtFREhWLFlDSXFDO0VESHJDLFdDR3FDO0VBQ3pCLHlCRDdDQztFQzhDRCxtQkFBQTtBQStEZDtBQTVEVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUE4RFo7QUE3RFk7RURiVixZQ2NxQztFRGJyQyxXQ2FxQztFQUN6Qiw0QkFBQTtFQUNBLG1CQUFBO0FBZ0VkO0FBNURRO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQThEVjtBQTdEVTtFQUNFLGNEL0RDO0VDZ0VELGdCQUFBO0VBQ0EseUJEckVDO0VDc0VELGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFFQSxvQkFBQTtBQThEWjtBQTdEWTtFQUNFLDJCQUFBO0FBK0RkO0FBN0RZO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBK0RkO0FBN0RZO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQStEZDtBQTdEWTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQStEZDtBQTlEYztFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkQzRkg7RUM0RkcsaUJBQUE7RUFDQSxtQkFBQTtBQWdFaEI7QUEvRGdCO0VEdkRkLFlDd0R5QztFRHZEekMsV0N1RHlDO0FBa0UzQztBQWhFZ0I7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBa0VsQjtBQTlEWTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNEeEdGO0VDeUdFLGlCQUFBO0FBZ0VkO0FBMURNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEscUJBQUE7QUEyRFI7QUExRFE7RUFDRSwyQkFBQTtFQUVBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBMkRWO0FBekRZO0VBQ0UsY0Q1SEY7RUM2SEUsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUEyRGQ7QUF6RFk7RUFDRSxjRHBJRDtFQ3FJQyxpQkFBQTtFQUNBLG1CQUFBO0FBMkRkO0FBeERVO0VBQ0UsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUVBLG9CQUFBO0FBeURaO0FBdkRVO0VEdEdSLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUNzR1UseUJEckpHO0VDc0pILG1CQUFBO0VBQ0EsMEJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBRUEsb0JBQUE7QUF5RFo7QUF4RFk7RUFDRSx3QkFBQTtBQTBEZDtBQXhEWTtFQUNFLGNEaEtEO0VDaUtDLGlCQUFBO0VBQ0EsbUJBQUE7QUEwRGQ7QUF4RFk7RUQ5SFYsWUMrSHFDO0VEOUhyQyxXQzhIcUM7QUEyRHZDO0FBdkRRO0VBQ0UsYUFBQTtFQUVBLGFBQUE7RUFDQSw0REFBQTtFQUNBLFNBQUE7QUF3RFY7QUF2RFU7RUFDRSxjRGhMQztFQ2lMRCxnQkFBQTtFQUNBLHlCRHRMQztFQ3VMRCxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQXlEWjtBQXZEWTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQXlEZDtBQXZEWTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUF5RGQ7QUF2RFk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUF5RGQ7QUF4RGM7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EseUJEeE1IO0VDeU1HLGlCQUFBO0VBQ0EsbUJBQUE7QUEwRGhCO0FBekRnQjtFRHBLZCxZQ3FLeUM7RURwS3pDLFdDb0t5QztBQTREM0M7QUExRGdCO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQTREbEI7QUF4RFk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRHJORjtFQ3NORSxpQkFBQTtBQTBEZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkdGhlbWUtZGFyazogIzM3MzYzZTtcXG4kdGhlbWUtZGFya2VyOiAjMjkyOTJlO1xcbiR0aGVtZS1wdXJwbGU6ICM4NTcwZmM7XFxuJHRoZW1lLWdyYXk6ICM0MTQxNDY7XFxuJGZvbnQtd2hpdGU6ICNmMGYwZjA7XFxuJGZvbnQtZ3JheTogIzllOWU5ZTtcXG4kYm9yZGVyLWRhcms6ICM0NzQ3NDc7XFxuJGNhcmQtc2hhZG93OiAjMWExYTFhO1xcbiR0aGVtZS1yZWQ6ICNmZjVjNWM7XFxuXFxuQG1peGluIGJ1dHRvbi1mb2N1cygkdG9wLCAkbGVmdCkge1xcbiAgJjo6YWZ0ZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAkdG9wO1xcbiAgICBsZWZ0OiAkbGVmdDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGhlaWdodDogNnB4O1xcbiAgICB3aWR0aDogNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcblxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcbiAgICBhbmltYXRpb24tbmFtZTogZ2xvdztcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIH1cXG4gIEBrZXlmcmFtZXMgZ2xvdyB7XFxuICAgIGZyb20ge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMTAwJSk7XFxuICAgICAgb3BhY2l0eTogMC40O1xcbiAgICB9XFxuXFxuICAgIHRvIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEyMCUpO1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1peGluIGljb24tc2l6ZSgkcGl4ZWwpIHtcXG4gIGhlaWdodDogJHBpeGVsO1xcbiAgd2lkdGg6ICRwaXhlbDtcXG59XFxuXFxuQG1peGluIGJ1dHRvbi1zdHlsaW5nIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWl4aW4gZmxleC1jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0xhdG8nO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL0xhdG8tUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICBzcmM6IHVybCgnLi4vZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi8qIC0tLSBDU1MgUmVzZXQgLS0tICovXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbm1hcmdpbjogMDtcXG5wYWRkaW5nOiAwO1xcbmJvcmRlcjogMDtcXG5mb250LXNpemU6IDEwMCU7XFxuZm9udDogaW5oZXJpdDtcXG52ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbmZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbmZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLyogLS0tIEN1c3RvbSBDU1MgLS0tICovXFxuOnJvb3Qge1xcbiAgJi5kYXJrIHtcXG4gICAgLS10aGVtZS1hbG1vbmQ6IHRvbWF0bztcXG4gIH1cXG4gICYubGlnaHQge1xcbiAgICAtLXRoZW1lLWFsbW9uZDogYmxhbmNoZWRhbG1vbmQ7XFxuICB9XFxuICBib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWRhcmtlcjtcXG4gICAgI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMyMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuXFxuXCIsXCJAdXNlICdpbmRleCc7XFxuXFxuYm9keSB7XFxuICAjY29udGVudCB7XFxuICAgICNtYWluLS1zaWRlYmFyLWhpZGUge1xcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgfVxcbiAgICBtYWluIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRleC4kdGhlbWUtZGFya2VyO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBwYWRkaW5nOiAyMHB4O1xcblxcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBnYXA6IDIwcHg7XFxuXFxuICAgICAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG5cXG4gICAgICAuY29sdW1uIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgJl9faGVhZGVyIHtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgICAgICAgaDMge1xcbiAgICAgICAgICAgIGNvbG9yOiBpbmRleC4kZm9udC1ncmF5O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgJi10b2RvIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiA3cHg7XFxuICAgICAgICAgICAgZGl2IHtcXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGluZGV4Lmljb24tc2l6ZSgxMHB4KTtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4OztcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgJi1kb2luZyB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogN3B4O1xcbiAgICAgICAgICAgIGRpdiB7XFxuICAgICAgICAgICAgICBAaW5jbHVkZSBpbmRleC5pY29uLXNpemUoMTBweCk7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRleC4kdGhlbWUtcHVycGxlO1xcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDs7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICAgICYtZG9uZSB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogN3B4O1xcbiAgICAgICAgICAgIGRpdiB7XFxuICAgICAgICAgICAgICBAaW5jbHVkZSBpbmRleC5pY29uLXNpemUoMTBweCk7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDs7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgICB1bCB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGdhcDogMjVweDtcXG4gICAgICAgICAgbGkge1xcbiAgICAgICAgICAgIGNvbG9yOiBpbmRleC4kZm9udC13aGl0ZTtcXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluZGV4LiR0aGVtZS1kYXJrO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHggMTVweCAyMHB4O1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCBpbmRleC4kY2FyZC1zaGFkb3c7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBoNCB7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBwIHtcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLnRhc2stZm9vdGVyIHtcXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgICAmX19jb250YWluZXIge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluZGV4LiR0aGVtZS1ncmF5O1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMTVweDtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNzBweDtcXG4gICAgICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgICBAaW5jbHVkZSBpbmRleC5pY29uLXNpemUoMTVweCk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgc3BhbiAge1xcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgaDUge1xcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICBjb2xvcjogaW5kZXguJGZvbnQtZ3JheTtcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgXFxuICAgICAgLmR1ZS1ib2FyZCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xcbiAgICAgICAgJl9faGVhZGVyIHtcXG4gICAgICAgICAgcGFkZGluZzogMzBweCA0MHB4IDBweCA0MHB4O1xcblxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgICAgICAgIGRpdiB7XFxuICAgICAgICAgICAgaDIge1xcbiAgICAgICAgICAgICAgY29sb3I6IGluZGV4LiRmb250LWdyYXk7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjVyZW07XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGgzIHtcXG4gICAgICAgICAgICAgIGNvbG9yOiBpbmRleC4kZm9udC13aGl0ZTtcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgLmhyIHtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgaW5kZXguJHRoZW1lLWdyYXk7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgbWFyZ2luOiAwcHggNTBweDtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEzcHgpO1xcblxcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgICB9XFxuICAgICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgaW5kZXguYnV0dG9uLXN0eWxpbmcoKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRleC4kdGhlbWUtcHVycGxlO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDEycHggM3B4IDIwcHg7XFxuXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogNXB4O1xcblxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEyNSUpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICBwIHtcXG4gICAgICAgICAgICAgIGNvbG9yOiBpbmRleC4kZm9udC13aGl0ZTtcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGluZGV4Lmljb24tc2l6ZSgyMHB4KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICAgIHVsIHtcXG4gICAgICAgICAgcGFkZGluZzogNDBweDtcXG5cXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcbiAgICAgICAgICBnYXA6IDI1cHg7XFxuICAgICAgICAgIGxpIHtcXG4gICAgICAgICAgICBjb2xvcjogaW5kZXguJGZvbnQtd2hpdGU7XFxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRleC4kdGhlbWUtZGFyaztcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgICAgICAgICAgcGFkZGluZzogMTVweCAyMHB4IDE1cHggMjBweDtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggaW5kZXguJGNhcmQtc2hhZG93O1xcbiAgICAgICAgICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFxuICAgICAgICAgICAgaDQge1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgcCB7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIC50YXNrLWZvb3RlciB7XFxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgICAgJl9fY29udGFpbmVyIHtcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRleC4kdGhlbWUtZ3JheTtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDE1cHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDcwcHg7XFxuICAgICAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgaW5kZXguaWNvbi1zaXplKDE1cHgpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIHNwYW4gIHtcXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGg1IHtcXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgY29sb3I6IGluZGV4LiRmb250LWdyYXk7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH07XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCIuLi9pc1NhbWVXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RoaXNXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcbiAqIC8vIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hc2lkZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXNpZGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnJlYWtwb2ludHMtYXNpZGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JyZWFrcG9pbnRzLWFzaWRlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JyZWFrcG9pbnRzLWhlYWRlci5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnJlYWtwb2ludHMtaGVhZGVyLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JyZWFrcG9pbnRzLWluZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9icmVha3BvaW50cy1pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9icmVha3BvaW50cy1tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9icmVha3BvaW50cy1tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RpYWxvZy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGlhbG9nLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGZhY3RvcnlCb2FyZCwgZmFjdG9yeVRhc2sgfSBmcm9tIFwiLi9mYWN0b3J5XCI7XG5pbXBvcnQgeyBmb3JtYXQsIGlzVG9kYXksIGlzVGhpc1dlZWsgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxubGV0IGFjdGl2ZUJvYXJkID0gbnVsbDtcbmxldCBzaWRlYmFyID0gdHJ1ZTtcblxuY29uc3QgYm9hcmRzID0gW1xuICB7XG4gICAgdGl0bGU6ICdLYW5iYW4gUHJvamVjdCcsXG4gICAgdGFza3M6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdCdWlsZCBVSSBmb3IgUHJvamVjdCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlcHJlaGVuZGVyaXQgbm9zdHJ1bSBmYWNpbGlzIHRlbmV0dXIgbGFib3J1bSB2b2x1cHRhdGlidXMgZGVzZXJ1bnQgZXhlcmNpdGF0aW9uZW0uJyxcbiAgICAgICAgZHVlRGF0ZTogJzIwMjMtMDktMjAnLFxuICAgICAgICBwcmlvcml0eTogJ2xvdycsXG4gICAgICAgIHN0YXR1czogJ3RvZG8nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdSZXN0cnVjdHVyZSBDb2RlIGludG8gTW9kdWxlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUmVwcmVoZW5kZXJpdCBub3N0cnVtIGZhY2lsaXMgdGVuZXR1ciBsYWJvcnVtIHZvbHVwdGF0aWJ1cyBkZXNlcnVudCBleGVyY2l0YXRpb25lbS4nLFxuICAgICAgICBkdWVEYXRlOiAnMjAyMy0wOS0yMScsXG4gICAgICAgIHByaW9yaXR5OiAnbWVkaXVtJyxcbiAgICAgICAgc3RhdHVzOiAndG9kbycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ01ha2UgcHJvamVjdCByZXNwb25zaXZlIHRvIGFsbCBkZXZpY2VzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdQb3NzaW11cyBuYXR1cyBxdWkgbmVtbyBuaWhpbCBsYXVkYW50aXVtIGRvbG9yZSBkb2xvcmVtcXVlIHNhcGllbnRlIG1pbmltYSB2ZXJvIG9wdGlvIHF1YW0gYXJjaGl0ZWN0byBtYWlvcmVzIG1hZ25pIG1vbGVzdGlhcyBuYW0sIGN1cGlkaXRhdGUgcHJhZXNlbnRpdW0gZXQuIFZvbHVwdGF0aWJ1cyEnLFxuICAgICAgICBkdWVEYXRlOiAnMjAyMy0wOS0yMycsXG4gICAgICAgIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICAgIHN0YXR1czogJ2RvaW5nJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnQnVpbGQgVUkgZm9yIFByb2plY3QnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSZXByZWhlbmRlcml0IG5vc3RydW0gZmFjaWxpcyB0ZW5ldHVyIGxhYm9ydW0gdm9sdXB0YXRpYnVzIGRlc2VydW50IGV4ZXJjaXRhdGlvbmVtLicsXG4gICAgICAgIGR1ZURhdGU6ICcyMDIzLTA5LTIwJyxcbiAgICAgICAgcHJpb3JpdHk6ICdsb3cnLFxuICAgICAgICBzdGF0dXM6ICd0b2RvJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnUmVzdHJ1Y3R1cmUgQ29kZSBpbnRvIE1vZHVsZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1JlcHJlaGVuZGVyaXQgbm9zdHJ1bSBmYWNpbGlzIHRlbmV0dXIgbGFib3J1bSB2b2x1cHRhdGlidXMgZGVzZXJ1bnQgZXhlcmNpdGF0aW9uZW0uJyxcbiAgICAgICAgZHVlRGF0ZTogJzIwMjMtMDktMjEnLFxuICAgICAgICBwcmlvcml0eTogJ21lZGl1bScsXG4gICAgICAgIHN0YXR1czogJ3RvZG8nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdNYWtlIHByb2plY3QgcmVzcG9uc2l2ZSB0byBhbGwgZGV2aWNlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUG9zc2ltdXMgbmF0dXMgcXVpIG5lbW8gbmloaWwgbGF1ZGFudGl1bSBkb2xvcmUgZG9sb3JlbXF1ZSBzYXBpZW50ZSBtaW5pbWEgdmVybyBvcHRpbyBxdWFtIGFyY2hpdGVjdG8gbWFpb3JlcyBtYWduaSBtb2xlc3RpYXMgbmFtLCBjdXBpZGl0YXRlIHByYWVzZW50aXVtIGV0LiBWb2x1cHRhdGlidXMhJyxcbiAgICAgICAgZHVlRGF0ZTogJzIwMjMtMDktMjMnLFxuICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgICAgICBzdGF0dXM6ICdkb2luZycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ0J1aWxkIFVJIGZvciBQcm9qZWN0JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmVwcmVoZW5kZXJpdCBub3N0cnVtIGZhY2lsaXMgdGVuZXR1ciBsYWJvcnVtIHZvbHVwdGF0aWJ1cyBkZXNlcnVudCBleGVyY2l0YXRpb25lbS4nLFxuICAgICAgICBkdWVEYXRlOiAnMjAyMy0wOS0yMCcsXG4gICAgICAgIHByaW9yaXR5OiAnbG93JyxcbiAgICAgICAgc3RhdHVzOiAndG9kbycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ1Jlc3RydWN0dXJlIENvZGUgaW50byBNb2R1bGVzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdSZXByZWhlbmRlcml0IG5vc3RydW0gZmFjaWxpcyB0ZW5ldHVyIGxhYm9ydW0gdm9sdXB0YXRpYnVzIGRlc2VydW50IGV4ZXJjaXRhdGlvbmVtLicsXG4gICAgICAgIGR1ZURhdGU6ICcyMDIzLTA5LTIxJyxcbiAgICAgICAgcHJpb3JpdHk6ICdtZWRpdW0nLFxuICAgICAgICBzdGF0dXM6ICd0b2RvJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnTWFrZSBwcm9qZWN0IHJlc3BvbnNpdmUgdG8gYWxsIGRldmljZXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1Bvc3NpbXVzIG5hdHVzIHF1aSBuZW1vIG5paGlsIGxhdWRhbnRpdW0gZG9sb3JlIGRvbG9yZW1xdWUgc2FwaWVudGUgbWluaW1hIHZlcm8gb3B0aW8gcXVhbSBhcmNoaXRlY3RvIG1haW9yZXMgbWFnbmkgbW9sZXN0aWFzIG5hbSwgY3VwaWRpdGF0ZSBwcmFlc2VudGl1bSBldC4gVm9sdXB0YXRpYnVzIScsXG4gICAgICAgIGR1ZURhdGU6ICcyMDIzLTA5LTIzJyxcbiAgICAgICAgcHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgc3RhdHVzOiAnZG9pbmcnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdCdWlsZCBVSSBmb3IgUHJvamVjdCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlcHJlaGVuZGVyaXQgbm9zdHJ1bSBmYWNpbGlzIHRlbmV0dXIgbGFib3J1bSB2b2x1cHRhdGlidXMgZGVzZXJ1bnQgZXhlcmNpdGF0aW9uZW0uJyxcbiAgICAgICAgZHVlRGF0ZTogJzIwMjMtMDktMjAnLFxuICAgICAgICBwcmlvcml0eTogJ2xvdycsXG4gICAgICAgIHN0YXR1czogJ3RvZG8nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdSZXN0cnVjdHVyZSBDb2RlIGludG8gTW9kdWxlcycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUmVwcmVoZW5kZXJpdCBub3N0cnVtIGZhY2lsaXMgdGVuZXR1ciBsYWJvcnVtIHZvbHVwdGF0aWJ1cyBkZXNlcnVudCBleGVyY2l0YXRpb25lbS4nLFxuICAgICAgICBkdWVEYXRlOiAnMjAyMy0wOS0yMScsXG4gICAgICAgIHByaW9yaXR5OiAnbWVkaXVtJyxcbiAgICAgICAgc3RhdHVzOiAndG9kbycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ01ha2UgcHJvamVjdCByZXNwb25zaXZlIHRvIGFsbCBkZXZpY2VzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdQb3NzaW11cyBuYXR1cyBxdWkgbmVtbyBuaWhpbCBsYXVkYW50aXVtIGRvbG9yZSBkb2xvcmVtcXVlIHNhcGllbnRlIG1pbmltYSB2ZXJvIG9wdGlvIHF1YW0gYXJjaGl0ZWN0byBtYWlvcmVzIG1hZ25pIG1vbGVzdGlhcyBuYW0sIGN1cGlkaXRhdGUgcHJhZXNlbnRpdW0gZXQuIFZvbHVwdGF0aWJ1cyEnLFxuICAgICAgICBkdWVEYXRlOiAnMjAyMy0wOS0yMycsXG4gICAgICAgIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICAgIHN0YXR1czogJ2RvaW5nJyxcbiAgICAgIH0sXG4gICAgXVxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdSZXN0YXVyYW50IFByb2plY3QnLFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnQ3JlYXRlIEZpZ21hIHByb3RvdHlwZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlcHJlaGVuZGVyaXQgbm9zdHJ1bSBmYWNpbGlzIHRlbmV0dXIgbGFib3J1bSB2b2x1cHRhdGlidXMgZGVzZXJ1bnQgZXhlcmNpdGF0aW9uZW0uJyxcbiAgICAgICAgZHVlRGF0ZTogJzIwMjMtMDktMjEnLFxuICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgICAgICBzdGF0dXM6ICd0b2RvJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnTWFrZSBlbnZpcm9ubWVudHMgZm9yIGRldmVsb3BtZW50IGFuZCBwcm9kdWN0aW9uJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdSZXByZWhlbmRlcml0IG5vc3RydW0gZmFjaWxpcyB0ZW5ldHVyIGxhYm9ydW0gdm9sdXB0YXRpYnVzIGRlc2VydW50IGV4ZXJjaXRhdGlvbmVtLicsXG4gICAgICAgIGR1ZURhdGU6ICcyMDIzLTA5LTIyJyxcbiAgICAgICAgcHJpb3JpdHk6ICdsb3cnLFxuICAgICAgICBzdGF0dXM6ICdkb25lJyxcbiAgICAgIH0sXG4gICAgXVxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdFdGNoLWEtU2tldGNoIFByb2plY3QnLFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnQ3JlYXRlIFdpcmVmcmFtZScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlcHJlaGVuZGVyaXQgbm9zdHJ1bSBmYWNpbGlzIHRlbmV0dXIgbGFib3J1bSB2b2x1cHRhdGlidXMgZGVzZXJ1bnQgZXhlcmNpdGF0aW9uZW0uJyxcbiAgICAgICAgZHVlRGF0ZTogJzIwMjMtMDktMjEnLFxuICAgICAgICBwcmlvcml0eTogJ2hpZ2gnLFxuICAgICAgICBzdGF0dXM6ICd0b2RvJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnQWRkIGFuaW1hdGlvbicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnUmVwcmVoZW5kZXJpdCBub3N0cnVtIGZhY2lsaXMgdGVuZXR1ciBsYWJvcnVtIHZvbHVwdGF0aWJ1cyBkZXNlcnVudCBleGVyY2l0YXRpb25lbS4nLFxuICAgICAgICBkdWVEYXRlOiAnMjAyMy0wOS0yOScsXG4gICAgICAgIHByaW9yaXR5OiAnbG93JyxcbiAgICAgICAgc3RhdHVzOiAnZG9uZScsXG4gICAgICB9LFxuICAgIF1cbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVGljIHRhYyB0b2UgUHJvamVjdCcsXG4gICAgdGFza3M6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdDcmVhdGUgV2lyZWZyYW1lJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmVwcmVoZW5kZXJpdCBub3N0cnVtIGZhY2lsaXMgdGVuZXR1ciBsYWJvcnVtIHZvbHVwdGF0aWJ1cyBkZXNlcnVudCBleGVyY2l0YXRpb25lbS4nLFxuICAgICAgICBkdWVEYXRlOiAnMjAyMy0wOS0yMScsXG4gICAgICAgIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICAgIHN0YXR1czogJ3RvZG8nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdBZGQgYW5pbWF0aW9uJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdSZXByZWhlbmRlcml0IG5vc3RydW0gZmFjaWxpcyB0ZW5ldHVyIGxhYm9ydW0gdm9sdXB0YXRpYnVzIGRlc2VydW50IGV4ZXJjaXRhdGlvbmVtLicsXG4gICAgICAgIGR1ZURhdGU6ICcyMDIzLTA5LTI5JyxcbiAgICAgICAgcHJpb3JpdHk6ICdsb3cnLFxuICAgICAgICBzdGF0dXM6ICdkb25lJyxcbiAgICAgIH0sXG4gICAgXVxuICB9LFxuXVxuXG5mdW5jdGlvbiB0b2dnbGVTaWRlYmFyKCkge1xuICBzaWRlYmFyID0gc2lkZWJhciA/IGZhbHNlIDogdHJ1ZTtcbiAgY29uc29sZS5sb2coc2lkZWJhcik7XG59XG5cbmZ1bmN0aW9uIGdldFNpZGViYXIoKSB7XG4gIHJldHVybiBzaWRlYmFyO1xufVxuXG5mdW5jdGlvbiBnZXREdWVUYXNrcyhkdWVXaGVuKSB7XG4gIGNvbnN0IGNvcHlPZkJvYXJkcyA9IGJvYXJkcy5zbGljZSgpO1xuXG4gIGNvbnN0IGFyciA9IFtdO1xuXG4gIGNvcHlPZkJvYXJkcy5mb3JFYWNoKChib2FyZCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBkdWVUYXNrcyA9IGJvYXJkLnRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgaWYgKGR1ZVdoZW4gPT09ICd0b2RheScpIHtcbiAgICAgICAgcmV0dXJuIHRhc2suc3RhdHVzICE9PSAnZG9uZScgJiYgaXNUb2RheShuZXcgRGF0ZSh0YXNrLmR1ZURhdGUpKTtcbiAgICAgIH0gZWxzZSBpZiAoZHVlV2hlbiA9PT0gJ3RoaXMgd2VlaycpIHtcbiAgICAgICAgcmV0dXJuIHRhc2suc3RhdHVzICE9PSAnZG9uZScgJiYgaXNUaGlzV2VlayhuZXcgRGF0ZSh0YXNrLmR1ZURhdGUpKTtcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKGR1ZVRhc2tzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgYXJyLnB1c2goe1xuICAgICAgICB0aXRsZTogYm9hcmQudGl0bGUsXG4gICAgICAgIHRhc2tzOiBbLi4uZHVlVGFza3NdLFxuICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgIH0pO1xuICAgIH1cbiAgfSlcblxuICBjb25zb2xlLmxvZyhhcnIpO1xuICBjb25zb2xlLmxvZyhib2FyZHMpO1xuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBnZXRUYXNrcygpIHtcbiAgY29uc3QgaW5kZXhPZkFjdGl2ZUJvYXJkID0gYm9hcmRzLmZpbmRJbmRleCgoYm9hcmQpID0+IGJvYXJkID09PSBnZXRBY3RpdmVCb2FyZCgpKTtcblxuICByZXR1cm4gYm9hcmRzW2luZGV4T2ZBY3RpdmVCb2FyZF0udGFza3M7XG59XG5cbmZ1bmN0aW9uIGdldEJvYXJkcygpIHtcbiAgcmV0dXJuIGJvYXJkcy5tYXAoKGJvYXJkKSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkLnRpdGxlO1xuICB9KVxufVxuXG5mdW5jdGlvbiBnZXRCb2FyZHNUb3RhbCgpIHtcbiAgcmV0dXJuIGJvYXJkcy5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZUJvYXJkKCkge1xuICByZXR1cm4gYWN0aXZlQm9hcmQ7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tzVG90YWwoKSB7XG4gIGNvbnN0IHRhc2tzID0gZ2V0VGFza3MoKTtcblxuICBjb25zdCB0b2RvID0gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnN0YXR1cyA9PT0gJ3RvZG8nKS5sZW5ndGg7XG4gIGNvbnN0IGRvaW5nID0gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnN0YXR1cyA9PT0gJ2RvaW5nJykubGVuZ3RoO1xuICBjb25zdCBkb25lID0gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnN0YXR1cyA9PT0gJ2RvbmUnKS5sZW5ndGg7XG5cbiAgcmV0dXJuIHsgdG9kbywgZG9pbmcsIGRvbmUgfTtcbn1cblxuZnVuY3Rpb24gYWRkTmV3VGFzaygpIHtcbiAgY29uc3QgaW5kZXhPZkFjdGl2ZUJvYXJkID0gYm9hcmRzLmZpbmRJbmRleCgoYm9hcmQpID0+IGJvYXJkID09PSBnZXRBY3RpdmVCb2FyZCgpKTtcblxuICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LWFkZC10YXNrLXRpdGxlJyk7XG4gIGNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtYWRkLXRhc2stZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgaW5wdXREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LWFkZC10YXNrLWR1ZS1kYXRlJyk7XG4gIGNvbnN0IGlucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtYWRkLXRhc2stcHJpb3JpdHknKTtcblxuICBjb25zdCBuZXdUYXNrID0gZmFjdG9yeVRhc2soXG4gICAgaW5wdXRUaXRsZS52YWx1ZSxcbiAgICBpbnB1dERlc2NyaXB0aW9uLnZhbHVlLFxuICAgIGlucHV0RGF0ZS52YWx1ZSxcbiAgICBpbnB1dFByaW9yaXR5LnZhbHVlXG4gICk7XG4gIFxuICBib2FyZHNbaW5kZXhPZkFjdGl2ZUJvYXJkXS50YXNrcy51bnNoaWZ0KG5ld1Rhc2spO1xuXG4gIGNvbnNvbGUubG9nKGJvYXJkcyk7XG59XG5cbmZ1bmN0aW9uIGFkZE5ld0JvYXJkKCkge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC1jcmVhdGUtYm9hcmQtdGl0bGUnKTsgIFxuICBjb25zdCBuZXdCb2FyZCA9IGZhY3RvcnlCb2FyZChpbnB1dC52YWx1ZSk7XG5cbiAgYm9hcmRzLnVuc2hpZnQobmV3Qm9hcmQpO1xuICBjb25zb2xlLmxvZyhib2FyZHMpO1xufVxuXG5mdW5jdGlvbiBlZGl0Qm9hcmQoKSB7XG4gIGNvbnN0IGluZGV4T2ZBY3RpdmVCb2FyZCA9IGJvYXJkcy5maW5kSW5kZXgoKGJvYXJkKSA9PiBib2FyZCA9PT0gZ2V0QWN0aXZlQm9hcmQoKSk7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LWVkaXQtYm9hcmQtdGl0bGUnKTtcbiAgY29uc3QgbmV3Qm9hcmQgPSBnZXRBY3RpdmVCb2FyZCgpO1xuXG4gIG5ld0JvYXJkLnRpdGxlID0gaW5wdXQudmFsdWU7XG5cbiAgYWN0aXZlQm9hcmQgPSBuZXdCb2FyZDsgLy8gdG8gZGlzcGxheSB1cGRhdGVkIGJvYXJkIGFmdGVyIGVkaXRpbmdcblxuICBib2FyZHMuc3BsaWNlKGluZGV4T2ZBY3RpdmVCb2FyZCwgMSwgbmV3Qm9hcmQpO1xuICBjb25zb2xlLmxvZyhib2FyZHNbaW5kZXhPZkFjdGl2ZUJvYXJkXSk7XG4gIGNvbnNvbGUubG9nKGJvYXJkcyk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKGUpIHtcbiAgY29uc3QgaW5kZXhPZkFjdGl2ZUJvYXJkID0gYm9hcmRzLmZpbmRJbmRleCgoYm9hcmQpID0+IGJvYXJkID09PSBnZXRBY3RpdmVCb2FyZCgpKTtcbiAgY29uc3QgaW5kZXhPZlRhc2sgPSBlLnRhcmdldC5jbG9zZXN0KCdkaWFsb2cnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcbiAgY29uc3QgbmV3VGFzayA9IGJvYXJkc1tpbmRleE9mQWN0aXZlQm9hcmRdLnRhc2tzW2luZGV4T2ZUYXNrXTtcblxuICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LWVkaXQtdGFzay10aXRsZScpO1xuICBjb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LWVkaXQtdGFzay1kZXNjcmlwdGlvbicpO1xuICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtZWRpdC10YXNrLWR1ZS1kYXRlJyk7XG4gIGNvbnN0IGlucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtZWRpdC10YXNrLXByaW9yaXR5Jyk7XG4gIGNvbnN0IGlucHV0U3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LWVkaXQtdGFzay1zdGF0dXMnKTtcblxuICBuZXdUYXNrLnRpdGxlID0gaW5wdXRUaXRsZS52YWx1ZTtcbiAgbmV3VGFzay5kZXNjcmlwdGlvbiA9IGlucHV0RGVzY3JpcHRpb24udmFsdWU7XG4gIG5ld1Rhc2suZHVlRGF0ZSA9IGlucHV0RGF0ZS52YWx1ZTtcbiAgbmV3VGFzay5wcmlvcml0eSA9IGlucHV0UHJpb3JpdHkudmFsdWU7XG4gIG5ld1Rhc2suc3RhdHVzID0gaW5wdXRTdGF0dXMudmFsdWU7XG5cbiAgY29uc29sZS5sb2coaW5kZXhPZkFjdGl2ZUJvYXJkKTtcbiAgY29uc29sZS5sb2coaW5kZXhPZlRhc2spO1xuICBjb25zb2xlLmxvZyhuZXdUYXNrKTtcblxuICBib2FyZHNbaW5kZXhPZkFjdGl2ZUJvYXJkXS50YXNrcy5zcGxpY2UoaW5kZXhPZlRhc2ssIDEsIG5ld1Rhc2spO1xuICBjb25zb2xlLmxvZyhib2FyZHNbaW5kZXhPZkFjdGl2ZUJvYXJkXSk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUJvYXJkKCkge1xuICBjb25zdCBpbmRleE9mQWN0aXZlQm9hcmQgPSBib2FyZHMuZmluZEluZGV4KChib2FyZCkgPT4gYm9hcmQgPT09IGdldEFjdGl2ZUJvYXJkKCkpO1xuICBcbiAgYWN0aXZlQm9hcmQgPSBudWxsOyAvLyB0byBkaXNwbGF5IG5vIGJvYXJkIGFmdGVyIGRlbGV0aW5nXG5cbiAgYm9hcmRzLnNwbGljZShpbmRleE9mQWN0aXZlQm9hcmQsIDEpO1xuICBjb25zb2xlLmxvZyhib2FyZHMpO1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVCb2FyZChlLCBkYXRhSW5kZXhIb2xkZXIpIHtcbiAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5jbG9zZXN0KGRhdGFJbmRleEhvbGRlcikuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gIC8vIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgYWN0aXZlQm9hcmQgPSBib2FyZHNbaW5kZXhdO1xufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVCb2FyZFRvTnVsbCgpIHtcbiAgYWN0aXZlQm9hcmQgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBwcm9jZWVkVGFzayhlKSB7XG4gIGNvbnN0IGluZGV4T2ZBY3RpdmVCb2FyZCA9IGJvYXJkcy5maW5kSW5kZXgoKGJvYXJkKSA9PiBib2FyZCA9PT0gZ2V0QWN0aXZlQm9hcmQoKSk7XG4gIGNvbnN0IGluZGV4T2ZUYXNrID0gZS50YXJnZXQuY2xvc2VzdCgnZGlhbG9nJykuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gIGNvbnN0IHRhc2sgPSBib2FyZHNbaW5kZXhPZkFjdGl2ZUJvYXJkXS50YXNrc1tpbmRleE9mVGFza107XG4gIGNvbnN0IHN0YXR1c09mVGFzayA9IGJvYXJkc1tpbmRleE9mQWN0aXZlQm9hcmRdLnRhc2tzW2luZGV4T2ZUYXNrXS5zdGF0dXM7XG5cbiAgaWYgKHN0YXR1c09mVGFzayA9PT0gJ3RvZG8nKSB7XG4gICAgdGFzay5zdGF0dXMgPSAnZG9pbmcnO1xuICB9IGVsc2UgaWYgKHN0YXR1c09mVGFzayA9PT0gJ2RvaW5nJykge1xuICAgIHRhc2suc3RhdHVzID0gJ2RvbmUnO1xuICB9IGVsc2UgaWYgKHN0YXR1c09mVGFzayA9PT0gJ2RvbmUnKSB7XG4gICAgZGVsZXRlVGFzayhlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKGUpIHtcbiAgY29uc3QgaW5kZXhPZkFjdGl2ZUJvYXJkID0gYm9hcmRzLmZpbmRJbmRleCgoYm9hcmQpID0+IGJvYXJkID09PSBnZXRBY3RpdmVCb2FyZCgpKTtcbiAgY29uc3QgaW5kZXhPZlRhc2sgPSBlLnRhcmdldC5jbG9zZXN0KCdkaWFsb2cnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcblxuICBib2FyZHNbaW5kZXhPZkFjdGl2ZUJvYXJkXS50YXNrcy5zcGxpY2UoaW5kZXhPZlRhc2ssIDEpO1xufVxuXG5mdW5jdGlvbiBzdG9yZUluZGV4KGUpIHtcbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZy1lZGl0LXRhc2snKTtcbiAgY29uc3QgaW5kZXhPZlRhc2sgPSBlLnRhcmdldC5jbG9zZXN0KCdkaWFsb2cnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKTtcblxuICBkaWFsb2cuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXhPZlRhc2spO1xufVxuXG5leHBvcnQgeyBcbiAgZ2V0Qm9hcmRzLCBcbiAgZ2V0Qm9hcmRzVG90YWwsIFxuICBhZGROZXdCb2FyZCwgXG4gIHNldEFjdGl2ZUJvYXJkLCBcbiAgZ2V0QWN0aXZlQm9hcmQsIFxuICBlZGl0Qm9hcmQsIFxuICBkZWxldGVCb2FyZCxcbiAgYWRkTmV3VGFzayxcbiAgZ2V0VGFza3MsXG4gIHByb2NlZWRUYXNrLFxuICBzdG9yZUluZGV4LFxuICBlZGl0VGFzayxcbiAgZ2V0VGFza3NUb3RhbCxcbiAgZGVsZXRlVGFzayxcbiAgc2V0QWN0aXZlQm9hcmRUb051bGwsXG4gIGdldER1ZVRhc2tzLFxuICB0b2dnbGVTaWRlYmFyLFxuICBnZXRTaWRlYmFyXG59OyIsImltcG9ydCBzdmdDYWxlbmRhciBmcm9tICcuL2Fzc2V0cy9jYWxlbmRhci5zdmcnO1xuLy8gbGV0IHN2Z0NhbGVuZGFyID0gcmVxdWlyZSgnc3ZnLWlubGluZS1sb2FkZXI/Y2xhc3NQcmVmaXghLi9hc3NldHMvY2FsZW5kYXIuc3ZnJyk7XG5cblxuaW1wb3J0IHsgZ2V0Qm9hcmRzLCBnZXRCb2FyZHNUb3RhbCwgc2V0QWN0aXZlQm9hcmQsIGdldEFjdGl2ZUJvYXJkLCBnZXRUYXNrcywgZ2V0VGFza3NUb3RhbCB9IGZyb20gXCIuL2RhdGEtaGFuZGxlclwiO1xuaW1wb3J0IHsgdG9nZ2xlSGVhZGVyQnV0dG9ucywgY3JlYXRlQ2FyZHMsIHNob3dCb2FyZE1haW4sIHRvZ2dsZUZvY3VzIH0gZnJvbSBcIi4vdWktbW9kdWxlXCI7XG5cbmZ1bmN0aW9uIGRpc3BsYXlCb2FyZHMoKSB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkcy1saXN0ID4gdWwnKTtcblxuICBnZXRCb2FyZHMoKS5mb3JFYWNoKChib2FyZCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcblxuICAgIGxpLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGAke2luZGV4fWApO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tcmVuZGVyJyk7XG4gICAgY29uc29sZS5sb2coc3ZnQ2FsZW5kYXIpO1xuICAgIHN2Zy5pbm5lckhUTUwgPSBzdmdDYWxlbmRhcjtcbiAgICBwLnRleHRDb250ZW50ID0gYm9hcmQ7XG5cbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoc3ZnKVxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChwKVxuXG4gICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgc2V0QWN0aXZlQm9hcmQoZSwgJ2xpJyk7XG4gICAgICBkaXNwbGF5QWN0aXZlQm9hcmQoKTtcbiAgICAgIHJlbW92ZUNvbHVtbigpO1xuICAgICAgc2hvd0JvYXJkTWFpbigpO1xuICAgICAgZGlzcGxheVRhc2tzVG90YWwoKTtcbiAgICAgIHJlbW92ZVRhc2tzKCk7XG4gICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICAgIHRvZ2dsZUZvY3VzKGUpO1xuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlBY3RpdmVCb2FyZCgpIHtcbiAgY29uc3QgYm9hcmRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgPiBoMicpO1xuICBjb25zdCBib2FyZCA9IGdldEFjdGl2ZUJvYXJkKCk7XG5cbiAgaWYgKGJvYXJkID09PSBudWxsKSB7XG4gICAgYm9hcmRIZWFkZXIudGV4dENvbnRlbnQgPSAnJztcbiAgfSBlbHNlIHtcbiAgICBib2FyZEhlYWRlci50ZXh0Q29udGVudCA9IGJvYXJkLnRpdGxlO1xuICB9XG5cbiAgdG9nZ2xlSGVhZGVyQnV0dG9ucygpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RHVlSGVhZGVyKGR1ZVdoZW4pIHtcbiAgY29uc3QgZHVlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyID4gaDInKTtcbiBcbiAgaWYgKGR1ZVdoZW4gPT09ICd0b2RheScpIHtcbiAgICBkdWVIZWFkZXIudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICB9IGVsc2UgaWYgKGR1ZVdoZW4gPT09ICd0aGlzIHdlZWsnKSB7XG4gICAgZHVlSGVhZGVyLnRleHRDb250ZW50ID0gJ1RoaXMgV2Vlayc7XG4gIH1cblxuICBjb25zb2xlLmxvZygnY2xpY2snKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKCkge1xuICBjb25zdCB0YXNrcyA9IGdldFRhc2tzKCk7XG5cbiAgY3JlYXRlQ2FyZHModGFza3MpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5Qm9hcmRzVG90YWwoKSB7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQtdG90YWwnKTtcblxuICBzcGFuLnRleHRDb250ZW50ID0gZ2V0Qm9hcmRzVG90YWwoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tzVG90YWwoKSB7XG4gIGNvbnN0IHsgdG9kbywgZG9pbmcsIGRvbmUgfSA9IGdldFRhc2tzVG90YWwoKTtcbiAgXG4gIGNvbnN0IGNvbHVtblRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sdW1uX19oZWFkZXItdG9kbyBoMycpO1xuICBjb25zdCBjb2x1bW5Eb2luZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2x1bW5fX2hlYWRlci1kb2luZyBoMycpO1xuICBjb25zdCBjb2x1bW5Eb25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbHVtbl9faGVhZGVyLWRvbmUgaDMnKTtcblxuICBjb2x1bW5Ub2RvLnRleHRDb250ZW50ID0gYFRPRE8gKCR7dG9kb30pYDtcbiAgY29sdW1uRG9pbmcudGV4dENvbnRlbnQgPSBgRE9JTkcgKCR7ZG9pbmd9KWA7XG4gIGNvbHVtbkRvbmUudGV4dENvbnRlbnQ9ICBgRE9ORSAoJHtkb25lfSlgO1xufVxuXG5mdW5jdGlvbiByZW1vdmVCb2FyZHMoKSB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkcy1saXN0ID4gdWwnKTtcbiAgXG4gIHdoaWxlICh1bC5maXJzdENoaWxkKSB7XG4gICAgdWwucmVtb3ZlQ2hpbGQodWwuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ29sdW1uKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gIHdoaWxlIChtYWluLmZpcnN0Q2hpbGQpIHtcbiAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZClcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrcygpIHtcbiAgY29uc3QgdWxUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtdG9kbycpO1xuICBjb25zdCB1bERvaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtZG9pbmcnKTtcbiAgY29uc3QgdWxEb25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtZG9uZScpO1xuXG4gIHdoaWxlICh1bFRvZG8uZmlyc3RDaGlsZCkge1xuICAgIHVsVG9kby5yZW1vdmVDaGlsZCh1bFRvZG8uZmlyc3RDaGlsZCk7XG4gIH1cblxuICB3aGlsZSAodWxEb2luZy5maXJzdENoaWxkKSB7XG4gICAgdWxEb2luZy5yZW1vdmVDaGlsZCh1bERvaW5nLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgd2hpbGUgKHVsRG9uZS5maXJzdENoaWxkKSB7XG4gICAgdWxEb25lLnJlbW92ZUNoaWxkKHVsRG9uZS5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5RWRpdEJvYXJkVmFsdWVzKCkge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctZWRpdC1ib2FyZCBpbnB1dCcpXG5cbiAgaW5wdXQudmFsdWUgPSBnZXRBY3RpdmVCb2FyZCgpLnRpdGxlO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UmVhZFRhc2tWYWx1ZXMoZSwgaW5kZXhIb2xkZXIpIHtcbiAgY29uc3QgdGFza3MgPSBnZXRUYXNrcygpO1xuICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmNsb3Nlc3QoaW5kZXhIb2xkZXIpLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xuXG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctcmVhZC10YXNrJyk7XG4gIGNvbnN0IGg1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZy1yZWFkLXRhc2sgaDUnKTtcbiAgY29uc3QgcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctcmVhZC10YXNrIHAnKTtcbiAgY29uc3QgaDYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLXJlYWQtdGFzayBoNicpO1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlhbG9nLXJlYWQtdGFza19faW5mbyBpbWcnKTtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWFsb2ctcmVhZC10YXNrIHNwYW4nKTtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpYWxvZy1yZWFkLXRhc2tfX2J1dHRvbnMgPiBidXR0b24nKTtcbiAgXG4gIGRpYWxvZy5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XG4gIGg1LnRleHRDb250ZW50ID0gdGFza3NbaW5kZXhdLnRpdGxlO1xuICBwLnRleHRDb250ZW50ID0gdGFza3NbaW5kZXhdLmRlc2NyaXB0aW9uO1xuICBoNi50ZXh0Q29udGVudCA9IHRhc2tzW2luZGV4XS5kdWVEYXRlO1xuICBzcGFuLnRleHRDb250ZW50ID0gdGFza3NbaW5kZXhdLnByaW9yaXR5O1xuXG4gIGlmICh0YXNrc1tpbmRleF0uc3RhdHVzID09PSAndG9kbycpIHtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnU3RhcnQgVGFzayc7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbi1wcm9jZWVkLXRhc2stLWRlbGV0ZScpO1xuICB9IGVsc2UgaWYgKHRhc2tzW2luZGV4XS5zdGF0dXMgPT09ICdkb2luZycpIHtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQ29tcGxldGUgVGFzayc7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbi1wcm9jZWVkLXRhc2stLWRlbGV0ZScpO1xuICB9IGVsc2Uge1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUgVGFzayc7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1wcm9jZWVkLXRhc2stLWRlbGV0ZScpO1xuICB9XG5cbiAgaWYgKHRhc2tzW2luZGV4XS5wcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnYXNzZXRzL2ltYWdlcy9mbGFnLnN2ZycpXG4gIH0gZWxzZSBpZiAodGFza3NbaW5kZXhdLnByaW9yaXR5ID09PSAnbWVkaXVtJykge1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICdhc3NldHMvaW1hZ2VzL2ZsYWctcHVycGxlLnN2ZycpXG4gIH0gZWxzZSBpZiAodGFza3NbaW5kZXhdLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnYXNzZXRzL2ltYWdlcy9mbGFnLW9yYW5nZS5zdmcnKVxuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlFZGl0VGFza1ZhbHVlcyhlKSB7XG4gIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuY2xvc2VzdCgnZGlhbG9nJykuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gIGNvbnN0IHRhc2tzID0gZ2V0VGFza3MoKTtcblxuICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LWVkaXQtdGFzay10aXRsZScpO1xuICBjb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LWVkaXQtdGFzay1kZXNjcmlwdGlvbicpO1xuICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtZWRpdC10YXNrLWR1ZS1kYXRlJyk7XG4gIGNvbnN0IGlucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtZWRpdC10YXNrLXByaW9yaXR5Jyk7XG4gIGNvbnN0IGlucHV0U3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LWVkaXQtdGFzay1zdGF0dXMnKTtcblxuICBpbnB1dFRpdGxlLnZhbHVlID0gdGFza3NbaW5kZXhdLnRpdGxlO1xuICBpbnB1dERlc2NyaXB0aW9uLnZhbHVlID0gdGFza3NbaW5kZXhdLmRlc2NyaXB0aW9uO1xuICBpbnB1dERhdGUudmFsdWUgPSB0YXNrc1tpbmRleF0uZHVlRGF0ZTtcbiAgaW5wdXRQcmlvcml0eS52YWx1ZSA9IHRhc2tzW2luZGV4XS5wcmlvcml0eTtcbiAgaW5wdXRTdGF0dXMudmFsdWUgPSB0YXNrc1tpbmRleF0uc3RhdHVzO1xufVxuXG5kaXNwbGF5Qm9hcmRzKCk7XG5kaXNwbGF5Qm9hcmRzVG90YWwoKTtcblxuZXhwb3J0IHsgXG4gIGRpc3BsYXlCb2FyZHMsXG4gIGRpc3BsYXlUYXNrcyxcbiAgcmVtb3ZlVGFza3MsXG4gIGRpc3BsYXlCb2FyZHNUb3RhbCxcbiAgcmVtb3ZlQm9hcmRzLFxuICBkaXNwbGF5RWRpdEJvYXJkVmFsdWVzLFxuICBkaXNwbGF5QWN0aXZlQm9hcmQsXG4gIGRpc3BsYXlFZGl0VGFza1ZhbHVlcyxcbiAgZGlzcGxheVJlYWRUYXNrVmFsdWVzLFxuICBkaXNwbGF5VGFza3NUb3RhbCxcbiAgZGlzcGxheUR1ZUhlYWRlcixcbiAgcmVtb3ZlQ29sdW1uXG4gfTsiLCJmdW5jdGlvbiBmYWN0b3J5Qm9hcmQodGl0bGUpIHsgXG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgdGFza3M6IFtdXG4gIH1cbn1cblxuZnVuY3Rpb24gZmFjdG9yeVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgc3RhdHVzOiAndG9kbydcbiAgfVxufVxuXG5leHBvcnQgeyBmYWN0b3J5Qm9hcmQsIGZhY3RvcnlUYXNrIH07IiwiZnVuY3Rpb24gZm9ybUNoZWNrQm9hcmRzKHN0cikge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kaWFsb2ctJHtzdHJ9IGlucHV0YCk7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZGlhbG9nLSR7c3RyfSBzcGFuYClcblxuICBpZiAoaW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgc3Bhbi50ZXh0Q29udGVudCA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJztcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAoaW5wdXQudmFsaWRpdHkudG9vU2hvcnQpIHtcbiAgICBzcGFuLnRleHRDb250ZW50ID0gJ0lucHV0IGlzIHRvbyBzaG9ydCc7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHNwYW4udGV4dENvbnRlbnQgPSAnJztcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtQ2hlY2tUYXNrcyhzdHIpIHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29udGFpbmVyLWlucHV0LSR7c3RyfS10aXRsZSBpbnB1dGApO1xuICBjb25zdCBzcGFuSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29udGFpbmVyLWlucHV0LSR7c3RyfS10aXRsZSBzcGFuYCk7XG4gIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbnRhaW5lci1pbnB1dC0ke3N0cn0tZGVzY3JpcHRpb24gdGV4dGFyZWFgKTtcbiAgY29uc3Qgc3BhblRleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbnRhaW5lci1pbnB1dC0ke3N0cn0tZGVzY3JpcHRpb24gc3BhbmApO1xuICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY29udGFpbmVyLWlucHV0LSR7c3RyfS1kdWUtZGF0ZSBpbnB1dGApO1xuICBjb25zdCBzcGFuSW5wdXREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNvbnRhaW5lci1pbnB1dC0ke3N0cn0tZHVlLWRhdGUgc3BhbmApO1xuXG4gIGZ1bmN0aW9uIGNoZWNrSW5wdXQoKSB7XG4gICAgaWYgKGlucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgc3BhbklucHV0LnRleHRDb250ZW50ID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoaW5wdXQudmFsaWRpdHkudG9vU2hvcnQpIHtcbiAgICAgIHNwYW5JbnB1dC50ZXh0Q29udGVudCA9ICdJbnB1dCBpcyB0b28gc2hvcnQnO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcGFuSW5wdXQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrVGV4dEFyZWEoKSB7XG4gICAgY29uc29sZS5sb2coJ2Rlc2NyaXB0aW9uJylcbiAgICBpZiAodGV4dEFyZWEudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICBzcGFuVGV4dEFyZWEudGV4dENvbnRlbnQgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0ZXh0QXJlYS52YWxpZGl0eS50b29TaG9ydCkge1xuICAgICAgc3BhblRleHRBcmVhLnRleHRDb250ZW50ID0gJ0lucHV0IGlzIHRvbyBzaG9ydCc7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNwYW5UZXh0QXJlYS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tJbnB1dERhdGUoKSB7XG4gICAgY29uc29sZS5sb2coJ2RhdGUnKVxuXG4gICAgaWYgKGlucHV0RGF0ZS52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgIHNwYW5JbnB1dERhdGUudGV4dENvbnRlbnQgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNwYW5JbnB1dERhdGUudGV4dENvbnRlbnQgPSAnJztcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBjaGVja0FsbCgpIHtcbiAgICBjb25zdCBpbnB1dElzVmFsaWQgPSBjaGVja0lucHV0KCk7XG4gICAgY29uc3QgdGV4dEFyZWFJc1ZhbGlkID0gY2hlY2tUZXh0QXJlYSgpO1xuICAgIGNvbnN0IGRhdGVJc1ZhbGlkID0gY2hlY2tJbnB1dERhdGUoKTtcblxuICAgIGlmIChpbnB1dElzVmFsaWQgJiYgdGV4dEFyZWFJc1ZhbGlkICYmIGRhdGVJc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjaGVja0FsbCgpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFySW5wdXRGaWVsZHMoKSB7XG4gIGNvbnN0IGlucHV0RmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgY29uc3QgaW5wdXRUZXh0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC1hZGQtdGFzay1kZXNjcmlwdGlvbicpO1xuICBjb25zdCBpbnB1dERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdvcHRpb25bdmFsdWU9XCJsb3dcIicpO1xuXG4gIGNvbnNvbGUubG9nKGlucHV0RGF0ZSk7XG5cbiAgaW5wdXRGaWVsZHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICB9KVxuXG4gIGlucHV0VGV4dEFyZWEudmFsdWUgPSAnJztcblxuICBpbnB1dERhdGUuc2VsZWN0ZWQgPSAndHJ1ZSc7XG59XG5cbmZ1bmN0aW9uIHByZXZlbnRFbnRlcktleSgpIHtcbiAgY29uc3QgZm9ybXMgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpO1xuXG4gIGZvcm1zLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufVxuXG5wcmV2ZW50RW50ZXJLZXkoKTtcblxuZXhwb3J0IHsgZm9ybUNoZWNrQm9hcmRzLCBmb3JtQ2hlY2tUYXNrcywgY2xlYXJJbnB1dEZpZWxkcyB9OyIsImltcG9ydCB7IGdldEFjdGl2ZUJvYXJkLCBnZXREdWVUYXNrcywgc2V0QWN0aXZlQm9hcmQsIGdldFNpZGViYXIgfSBmcm9tIFwiLi9kYXRhLWhhbmRsZXJcIjtcbmltcG9ydCB7IFxuICBkaXNwbGF5UmVhZFRhc2tWYWx1ZXMsIFxuICBkaXNwbGF5QWN0aXZlQm9hcmQsIFxuICByZW1vdmVDb2x1bW4sIFxuICBkaXNwbGF5VGFza3NUb3RhbCwgXG4gIHJlbW92ZVRhc2tzLCBcbiAgZGlzcGxheVRhc2tzXG59IGZyb20gXCIuL2Rpc3BsYXktbW9kdWxlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcmRzKGFyckxpc3QpIHtcbiAgY29uc3QgdWxUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtdG9kbycpO1xuICBjb25zdCB1bERvaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtZG9pbmcnKTtcbiAgY29uc3QgdWxEb25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtZG9uZScpO1xuXG4gIGFyckxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGNvbnN0IGRpdkZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRpdkZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgaDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuXG4gICAgbGkuc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xuXG4gICAgaDQudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xuICAgIGRpdkZvb3Rlci5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvb3RlcicpO1xuICAgIGRpdkZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvb3Rlcl9fY29udGFpbmVyJyk7XG4gICAgaDUudGV4dENvbnRlbnQgPSBpdGVtLmR1ZURhdGU7XG5cbiAgICBpZiAoaXRlbS5wcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICdhc3NldHMvaW1hZ2VzL2ZsYWcuc3ZnJyk7XG4gICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9vdGVyX19wcmlvLS1sb3cnKTtcbiAgICAgIHNwYW4udGV4dENvbnRlbnQgPSAnbG93JztcbiAgICB9IGVsc2UgaWYgKGl0ZW0ucHJpb3JpdHkgPT09ICdtZWRpdW0nKSB7XG4gICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnYXNzZXRzL2ltYWdlcy9mbGFnLXB1cnBsZS5zdmcnKTtcbiAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgndGFzay1mb290ZXJfX3ByaW8tLW1lZGl1bScpO1xuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9ICdtZWRpdW0nO1xuICAgIH0gZWxzZSBpZiAoaXRlbS5wcmlvcml0eSA9PT0gJ2hpZ2gnKSB7XG4gICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnYXNzZXRzL2ltYWdlcy9mbGFnLW9yYW5nZS5zdmcnKTtcbiAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgndGFzay1mb290ZXJfX3ByaW8tLWhpZ2gnKTtcbiAgICAgIHNwYW4udGV4dENvbnRlbnQgPSAnaGlnaCc7XG4gICAgfVxuXG4gICAgbGkuYXBwZW5kQ2hpbGQoaDQpO1xuICAgIGxpLmFwcGVuZENoaWxkKGRpdkZvb3Rlcik7XG4gICAgZGl2Rm9vdGVyLmFwcGVuZENoaWxkKGRpdkZvb3RlckNvbnRhaW5lcik7XG4gICAgZGl2Rm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG4gICAgZGl2Rm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIGRpdkZvb3Rlci5hcHBlbmRDaGlsZChoNSk7XG5cbiAgICBpZiAoaXRlbS5zdGF0dXMgPT09ICd0b2RvJykge1xuICAgICAgbGkuY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICAgICAgdWxUb2RvLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9IGVsc2UgaWYgKGl0ZW0uc3RhdHVzID09PSAnZG9pbmcnKSB7XG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKCdkb2luZycpO1xuICAgICAgdWxEb2luZy5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSBlbHNlIGlmIChpdGVtLnN0YXR1cyA9PT0gJ2RvbmUnKSB7XG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKCdkb25lJyk7XG4gICAgICB1bERvbmUuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH1cblxuICAgIGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHNob3dEaWFsb2coJ3JlYWQtdGFzaycpO1xuICAgICAgZGlzcGxheVJlYWRUYXNrVmFsdWVzKGUsICdsaScpO1xuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkQ29sdW1uKGNvbHVtbk5hbWUpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgY29uc3QgZGl2Q29sdW1uID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBkaXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZGl2Q29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIFxuICBkaXZDb2x1bW4uY2xhc3NMaXN0LmFkZCgnY29sdW1uJyk7XG4gIGRpdkhlYWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYGNvbHVtbl9faGVhZGVyIGNvbHVtbl9faGVhZGVyLSR7Y29sdW1uTmFtZX1gKTtcbiAgaDMudGV4dENvbnRlbnQgPSBjb2x1bW5OYW1lO1xuICB1bC5jbGFzc0xpc3QuYWRkKGBsaXN0LSR7Y29sdW1uTmFtZX1gKTtcblxuICBtYWluLmFwcGVuZENoaWxkKGRpdkNvbHVtbik7XG4gIGRpdkNvbHVtbi5hcHBlbmRDaGlsZChkaXZIZWFkZXIpO1xuICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQoZGl2Q29sb3IpO1xuICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQoaDMpO1xuICBkaXZDb2x1bW4uYXBwZW5kQ2hpbGQodWwpO1xufVxuXG5mdW5jdGlvbiBzaG93RHVlTWFpbihkdWVXaGVuKSB7XG4gIGxldCBib2FyZHMgPSBudWxsO1xuXG4gIGlmIChkdWVXaGVuID09PSAndG9kYXknKSB7XG4gICAgYm9hcmRzID0gZ2V0RHVlVGFza3MoJ3RvZGF5Jyk7XG4gIH0gZWxzZSBpZiAoZHVlV2hlbiA9PT0gJ3RoaXMgd2VlaycpIHtcbiAgICBib2FyZHMgPSBnZXREdWVUYXNrcygndGhpcyB3ZWVrJyk7XG4gIH1cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcblxuICBib2FyZHMuZm9yRWFjaCgoYm9hcmQpID0+IHtcbiAgICBjb25zdCBkaXZQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGl2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBkaXZIciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgZGl2SGVhZGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGJvYXJkLmluZGV4KTtcbiAgICBkaXZQYWdlLmNsYXNzTGlzdC5hZGQoJ2R1ZS1ib2FyZCcpO1xuICAgIGRpdkhlYWRlci5jbGFzc0xpc3QuYWRkKCdkdWUtYm9hcmRfX2hlYWRlcicpO1xuICAgIGgyLnRleHRDb250ZW50ID0gJ0JPQVJEJztcbiAgICBoMy50ZXh0Q29udGVudCA9IGJvYXJkLnRpdGxlO1xuICAgIGRpdkhyLmNsYXNzTGlzdC5hZGQoJ2hyJyk7XG4gICAgcC50ZXh0Q29udGVudCA9ICdTRUUgQk9BUkQnO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICdhc3NldHMvaW1hZ2VzL2Fycm93LXJpZ2h0LnN2ZycpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsICdSaWdodCBhcnJvdyBpY29uJyk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGRpdlBhZ2UpO1xuICAgIGRpdlBhZ2UuYXBwZW5kQ2hpbGQoZGl2SGVhZGVyKTtcbiAgICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQoZGl2Q29udGFpbmVyKTtcbiAgICBkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoaDIpO1xuICAgIGRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChoMyk7XG4gICAgZGl2SGVhZGVyLmFwcGVuZENoaWxkKGRpdkhyKTtcbiAgICBkaXZIZWFkZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQocCk7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGltZyk7XG4gICAgZGl2UGFnZS5hcHBlbmRDaGlsZCh1bCk7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NsaWNrJyk7XG5cbiAgICAgIHNldEFjdGl2ZUJvYXJkKGUsICdkaXYnKTtcbiAgICAgIGRpc3BsYXlBY3RpdmVCb2FyZCgpO1xuICAgICAgcmVtb3ZlQ29sdW1uKCk7XG4gICAgICBzaG93Qm9hcmRNYWluKCk7XG4gICAgICBkaXNwbGF5VGFza3NUb3RhbCgpO1xuICAgICAgcmVtb3ZlVGFza3MoKTtcbiAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgIH0pXG5cbiAgICBjcmVhdGVEdWVDYXJkcyhib2FyZC50YXNrcywgdWwpO1xuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVEdWVDYXJkcyh0YXNrcywgdWwpIHtcbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgY29uc3QgZGl2Rm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGl2Rm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBoNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG5cbiAgICBoNC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgZGl2Rm9vdGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9vdGVyJyk7XG4gICAgZGl2Rm9vdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9vdGVyX19jb250YWluZXInKTtcbiAgICBoNS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcblxuICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnbG93Jykge1xuICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2Fzc2V0cy9pbWFnZXMvZmxhZy5zdmcnKTtcbiAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgndGFzay1mb290ZXJfX3ByaW8tLWxvdycpO1xuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9ICdsb3cnO1xuICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcbiAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICdhc3NldHMvaW1hZ2VzL2ZsYWctcHVycGxlLnN2ZycpO1xuICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvb3Rlcl9fcHJpby0tbWVkaXVtJyk7XG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gJ21lZGl1bSc7XG4gICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICdhc3NldHMvaW1hZ2VzL2ZsYWctb3JhbmdlLnN2ZycpO1xuICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWZvb3Rlcl9fcHJpby0taGlnaCcpO1xuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9ICdoaWdoJztcbiAgICB9XG5cbiAgICBsaS5hcHBlbmRDaGlsZChoNCk7XG4gICAgbGkuYXBwZW5kQ2hpbGQoZGl2Rm9vdGVyKTtcbiAgICBkaXZGb290ZXIuYXBwZW5kQ2hpbGQoZGl2Rm9vdGVyQ29udGFpbmVyKTtcbiAgICBkaXZGb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBkaXZGb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgZGl2Rm9vdGVyLmFwcGVuZENoaWxkKGg1KTtcblxuICAgIGlmICh0YXNrLnN0YXR1cyA9PT0gJ3RvZG8nKSB7XG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gICAgfSBlbHNlIGlmICh0YXNrLnN0YXR1cyA9PT0gJ2RvaW5nJykge1xuICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnZG9pbmcnKTtcbiAgICB9IGVsc2UgaWYgKHRhc2suc3RhdHVzID09PSAnZG9uZScpIHtcbiAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKTtcbiAgICB9XG5cbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHNob3dCb2FyZE1haW4oKSB7XG4gIGNyZWF0ZUJvYXJkQ29sdW1uKCd0b2RvJyk7XG4gIGNyZWF0ZUJvYXJkQ29sdW1uKCdkb2luZycpO1xuICBjcmVhdGVCb2FyZENvbHVtbignZG9uZScpO1xufVxuXG5mdW5jdGlvbiBzaG93U2lkZWJhcigpIHtcbiAgY29uc3QgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgY29uc3QgYnV0dG9uU2lkZWJhckhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tc2lkZWJhci1oZWFkZXInKTtcblxuICBpZiAoZ2V0U2lkZWJhcigpKSB7XG4gICAgY29uc29sZS5sb2coJ3NpZGViYXIgb24nKTtcbiAgICBhc2lkZS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJywgJ2FzaWRlLS1zaWRlYmFyLWhpZGUnKTtcbiAgICBoZWFkZXIucmVtb3ZlQXR0cmlidXRlKCdpZCcsICdoZWFkZXItLXNpZGViYXItaGlkZScpO1xuICAgIG1haW4ucmVtb3ZlQXR0cmlidXRlKCdpZCcsICdtYWluLS1zaWRlYmFyLWhpZGUnKTtcbiAgICBidXR0b25TaWRlYmFySGVhZGVyLnJlbW92ZUF0dHJpYnV0ZSgnaWQnLCAnYnV0dG9uLS1zaWRlYmFyLWhpZGUnKVxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdzaWRlYmFyIG9mZicpO1xuICAgIGFzaWRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnYXNpZGUtLXNpZGViYXItaGlkZScpXG4gICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyLS1zaWRlYmFyLWhpZGUnKVxuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluLS1zaWRlYmFyLWhpZGUnKVxuICAgIGJ1dHRvblNpZGViYXJIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdidXR0b24tLXNpZGViYXItaGlkZScpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VNYWluKCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuXG4gIHdoaWxlIChtYWluLmZpcnN0Q2hpbGQpIHtcbiAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4uZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0RpYWxvZyhzdHIpIHtcbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmRpYWxvZy0ke3N0cn1gKTtcblxuICBkaWFsb2cuc2hvd01vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRGlhbG9nKHN0cikge1xuICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZGlhbG9nLSR7c3RyfWApO1xuXG4gIGRpYWxvZy5jbG9zZSgpO1xufVxuXG5mdW5jdGlvbiBleGl0RGlhbG9nKGUpIHtcbiAgY29uc3QgZGlhbG9nID0gZS50YXJnZXQuY2xvc2VzdCgnZGlhbG9nJyk7XG5cbiAgZGlhbG9nLmNsb3NlKCk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUhlYWRlckJ1dHRvbnMoKSB7XG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyLWJ1dHRvbnMnKTtcblxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGlmIChnZXRBY3RpdmVCb2FyZCgpID09PSBudWxsKSB7XG4gICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUZvY3VzKGUpIHtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tcmVuZGVyJyk7XG4gIGNvbnN0IGJ1dHRvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJykuY2hpbGRyZW5bMF07XG5cbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uLXJlbmRlci0tZm9jdXMnKTtcbiAgfSlcblxuICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLXJlbmRlci0tZm9jdXMnKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRGFya01vZGUoKSB7XG4gIGNvbnNvbGUubG9nKCdkYXJrIG1vZGUnKTtcblxuICBjb25zdCByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gIHJvb3QuY2xhc3NOYW1lID0gcm9vdC5jbGFzc05hbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyayc7XG4gIGNvbnNvbGUubG9nKHJvb3QpO1xufVxuXG5mdW5jdGlvbiBzZXREYXJrTW9kZSgpIHtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgcm9vdC5jbGFzc05hbWUgPSAnZGFyayc7XG59XG5cbmZ1bmN0aW9uIHNwYW5EYXRlUGlja2VyKCkge1xuICBjb25zdCBpbnB1dEZpZWxkc0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiZGF0ZVwiXScpO1xuXG4gIGlucHV0RmllbGRzRGF0ZS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaW5wdXQuc2hvd1BpY2tlcigpO1xuICAgIH0pXG4gIH0pXG59XG5cbnNwYW5EYXRlUGlja2VyKCk7XG5zZXREYXJrTW9kZSgpO1xuXG5leHBvcnQgeyBcbiAgc2hvd0RpYWxvZywgXG4gIGNsb3NlRGlhbG9nLCBcbiAgZXhpdERpYWxvZywgXG4gIHRvZ2dsZUhlYWRlckJ1dHRvbnMsIFxuICBjcmVhdGVDYXJkcyxcbiAgc2hvd0JvYXJkTWFpbixcbiAgY2xvc2VNYWluLFxuICBzaG93RHVlTWFpbixcbiAgc2hvd1NpZGViYXIsXG4gIHRvZ2dsZUZvY3VzLFxuICB0b2dnbGVEYXJrTW9kZVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYXBwXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2FzaWRlLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9oZWFkZXIuc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2RpYWxvZy5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvYnJlYWtwb2ludHMtbWFpbi5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvYnJlYWtwb2ludHMtaGVhZGVyLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9icmVha3BvaW50cy1hc2lkZS5zY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvYnJlYWtwb2ludHMtaW5kZXguc2Nzcyc7XG5cbmltcG9ydCB7IFxuICBkaXNwbGF5Qm9hcmRzLCBcbiAgZGlzcGxheVRhc2tzLFxuICByZW1vdmVUYXNrcyxcbiAgZGlzcGxheUJvYXJkc1RvdGFsLCBcbiAgcmVtb3ZlQm9hcmRzLCBcbiAgZGlzcGxheUVkaXRCb2FyZFZhbHVlcywgXG4gIGRpc3BsYXlBY3RpdmVCb2FyZCxcbiAgZGlzcGxheUVkaXRUYXNrVmFsdWVzLFxuICBkaXNwbGF5UmVhZFRhc2tWYWx1ZXMsXG4gIGRpc3BsYXlUYXNrc1RvdGFsLFxuICBkaXNwbGF5RHVlSGVhZGVyXG59IGZyb20gJy4vZGlzcGxheS1tb2R1bGUnO1xuaW1wb3J0IHsgXG4gIGFkZE5ld0JvYXJkLCBcbiAgZWRpdEJvYXJkLCBcbiAgZGVsZXRlQm9hcmQsIFxuICBhZGROZXdUYXNrLCBcbiAgcHJvY2VlZFRhc2ssIFxuICBzdG9yZUluZGV4LFxuICBlZGl0VGFzayxcbiAgZGVsZXRlVGFzayxcbiAgc2V0QWN0aXZlQm9hcmRUb051bGwsXG4gIHRvZ2dsZVNpZGViYXJcbn0gZnJvbSAnLi9kYXRhLWhhbmRsZXInO1xuaW1wb3J0IHsgXG4gIHNob3dEaWFsb2csIFxuICBjbG9zZURpYWxvZywgXG4gIGV4aXREaWFsb2csIFxuICB0b2dnbGVIZWFkZXJCdXR0b25zLCBcbiAgY2xvc2VNYWluLFxuICBzaG93RHVlTWFpbixcbiAgc2hvd1NpZGViYXIsXG4gIHRvZ2dsZUZvY3VzLFxuICB0b2dnbGVEYXJrTW9kZVxufSBmcm9tICcuL3VpLW1vZHVsZSc7XG5pbXBvcnQgeyBcbiAgZm9ybUNoZWNrQm9hcmRzLCBcbiAgZm9ybUNoZWNrVGFza3MsIFxuICBjbGVhcklucHV0RmllbGRzIFxufSBmcm9tICcuL2Zvcm0taGFuZGxlcic7XG5cbmNvbnN0IGJ1dHRvbnNEaWFsb2dDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tY2xvc2UtZGlhbG9nJyk7XG5jb25zdCBidXR0b25PcGVuRGlhbG9nQ3JlYXRlQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLW9wZW4tY3JlYXRlLWJvYXJkJyk7XG5jb25zdCBidXR0b25DcmVhdGVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b24tY3JlYXRlLWJvYXJkJyk7XG5jb25zdCBidXR0b25PcGVuRGlhbG9nRWRpdEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1vcGVuLWVkaXQtYm9hcmQnKTtcbmNvbnN0IGJ1dHRvbkVkaXRCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b24tZWRpdC1ib2FyZCcpO1xuY29uc3QgYnV0dG9uRGVsZXRlQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWRlbGV0ZS1ib2FyZCcpO1xuY29uc3QgYnV0dG9uT3BlbkRpYWxvZ0FkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLW9wZW4tYWRkLXRhc2snKTtcbmNvbnN0IGJ1dHRvbkFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uLWFkZC10YXNrJyk7XG5jb25zdCBidXR0b25Qcm9jZWVkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b24tcHJvY2VlZC10YXNrJyk7XG5jb25zdCBidXR0b25PcGVuRGlhbG9nRWRpdFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uLW9wZW4tZWRpdC10YXNrJyk7XG5jb25zdCBidXR0b25FZGl0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b24tZWRpdC10YXNrJyk7XG5jb25zdCBidXR0b25EZWxldGVUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1kZWxldGUtdGFzaycpO1xuY29uc3QgYnV0dG9uRHVlVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlLWJ1dHRvbnNfX3RvZGF5Jyk7XG5jb25zdCBidXR0b25EdWVUaGlzV2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWUtYnV0dG9uc19fdGhpcy13ZWVrJyk7XG5jb25zdCBidXR0b25zU2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tc2lkZWJhcicpO1xuY29uc3QgYnV0dG9uRGFya01vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmlnaHQtbW9kZSBpbnB1dCcpO1xuXG5idXR0b25EYXJrTW9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdG9nZ2xlRGFya01vZGUoKTtcbn0pXG5cbmJ1dHRvbnNTaWRlYmFyLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9nZ2xlU2lkZWJhcigpO1xuICAgIHNob3dTaWRlYmFyKCk7XG4gIH0pXG59KVxuXG5idXR0b25EdWVUb2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIHNldEFjdGl2ZUJvYXJkVG9OdWxsKCk7XG4gIHRvZ2dsZUhlYWRlckJ1dHRvbnMoKTtcbiAgZGlzcGxheUR1ZUhlYWRlcigndG9kYXknKTtcbiAgY2xvc2VNYWluKCk7XG4gIHNob3dEdWVNYWluKCd0b2RheScpO1xuICB0b2dnbGVGb2N1cyhlKTtcbn0pXG5cbmJ1dHRvbkR1ZVRoaXNXZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgc2V0QWN0aXZlQm9hcmRUb051bGwoKTtcbiAgdG9nZ2xlSGVhZGVyQnV0dG9ucygpO1xuICBkaXNwbGF5RHVlSGVhZGVyKCd0aGlzIHdlZWsnKTtcbiAgY2xvc2VNYWluKCk7XG4gIHNob3dEdWVNYWluKCd0aGlzIHdlZWsnKTtcbiAgdG9nZ2xlRm9jdXMoZSk7XG59KVxuXG5idXR0b25EZWxldGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZGVsZXRlVGFzayhlKTtcbiAgY2xvc2VEaWFsb2coJ2VkaXQtdGFzaycpO1xuICByZW1vdmVUYXNrcygpO1xuICBkaXNwbGF5VGFza3NUb3RhbCgpO1xuICBkaXNwbGF5VGFza3MoKTtcbn0pXG5cbmJ1dHRvbkVkaXRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgaWYgKCFmb3JtQ2hlY2tUYXNrcygnZWRpdC10YXNrJykpIHtcbiAgICBjb25zb2xlLmxvZygnSW52YWxpZCBmb3JtJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGVkaXRUYXNrKGUpO1xuICBjbG9zZURpYWxvZygnZWRpdC10YXNrJyk7XG4gIHJlbW92ZVRhc2tzKCk7XG4gIGRpc3BsYXlUYXNrc1RvdGFsKCk7XG4gIGRpc3BsYXlUYXNrcygpO1xuICBzaG93RGlhbG9nKCdyZWFkLXRhc2snKTtcbiAgZGlzcGxheVJlYWRUYXNrVmFsdWVzKGUsICdkaWFsb2cnKTtcbn0pXG5cbmJ1dHRvbk9wZW5EaWFsb2dFZGl0VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGNsb3NlRGlhbG9nKCdyZWFkLXRhc2snKTtcbiAgc2hvd0RpYWxvZygnZWRpdC10YXNrJyk7XG4gIHN0b3JlSW5kZXgoZSk7XG4gIGRpc3BsYXlFZGl0VGFza1ZhbHVlcyhlKTtcbn0pXG5cbmJ1dHRvblByb2NlZWRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgcHJvY2VlZFRhc2soZSk7XG4gIGNsb3NlRGlhbG9nKCdyZWFkLXRhc2snKTtcbiAgcmVtb3ZlVGFza3MoKTtcbiAgZGlzcGxheVRhc2tzVG90YWwoKTtcbiAgZGlzcGxheVRhc2tzKCk7XG59KVxuXG5idXR0b25BZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAoIWZvcm1DaGVja1Rhc2tzKCdhZGQtdGFzaycpKSB7XG4gICAgY29uc29sZS5sb2coJ0ludmFsaWQgZm9ybScpO1xuICAgIHJldHVybjtcbiAgfVxuICBhZGROZXdUYXNrKCk7XG4gIGNsZWFySW5wdXRGaWVsZHMoKTtcbiAgY2xvc2VEaWFsb2coJ2FkZC10YXNrJyk7XG4gIHJlbW92ZVRhc2tzKCk7XG4gIGRpc3BsYXlUYXNrc1RvdGFsKCk7XG4gIGRpc3BsYXlUYXNrcygpO1xufSlcblxuYnV0dG9uRGVsZXRlQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRlbGV0ZUJvYXJkKCk7XG4gIHJlbW92ZUJvYXJkcygpO1xuICBkaXNwbGF5Qm9hcmRzKCk7XG4gIGRpc3BsYXlCb2FyZHNUb3RhbCgpO1xuICBjbGVhcklucHV0RmllbGRzKCk7XG4gIGNsb3NlRGlhbG9nKCdlZGl0LWJvYXJkJyk7XG4gIGRpc3BsYXlBY3RpdmVCb2FyZCgpO1xuICBjbG9zZU1haW4oKTtcbn0pXG5cbmJ1dHRvbkVkaXRCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKCFmb3JtQ2hlY2tCb2FyZHMoJ2VkaXQtYm9hcmQnKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBlZGl0Qm9hcmQoKTtcbiAgcmVtb3ZlQm9hcmRzKCk7XG4gIGRpc3BsYXlCb2FyZHMoKTtcbiAgZGlzcGxheUJvYXJkc1RvdGFsKCk7XG4gIGNsZWFySW5wdXRGaWVsZHMoKTtcbiAgY2xvc2VEaWFsb2coJ2VkaXQtYm9hcmQnKTtcbiAgZGlzcGxheUFjdGl2ZUJvYXJkKCk7XG59KVxuXG5idXR0b25DcmVhdGVCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGlmICghZm9ybUNoZWNrQm9hcmRzKCdjcmVhdGUtYm9hcmQnKSkge1xuICAgIHJldHVybjtcbiAgfVxuICByZW1vdmVCb2FyZHMoKTtcbiAgYWRkTmV3Qm9hcmQoKTtcbiAgZGlzcGxheUJvYXJkcygpO1xuICBkaXNwbGF5Qm9hcmRzVG90YWwoKTtcbiAgY2xlYXJJbnB1dEZpZWxkcygpO1xuICBjbG9zZURpYWxvZygnY3JlYXRlLWJvYXJkJyk7XG59KVxuXG5idXR0b25PcGVuRGlhbG9nQ3JlYXRlQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHNob3dEaWFsb2coJ2NyZWF0ZS1ib2FyZCcpO1xufSlcblxuYnV0dG9uT3BlbkRpYWxvZ0VkaXRCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc2hvd0RpYWxvZygnZWRpdC1ib2FyZCcpO1xuICBkaXNwbGF5RWRpdEJvYXJkVmFsdWVzKCk7XG59KVxuXG5idXR0b25PcGVuRGlhbG9nQWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc2hvd0RpYWxvZygnYWRkLXRhc2snKTtcbn0pXG5cbmJ1dHRvbnNEaWFsb2dDbG9zZS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHsgZXhpdERpYWxvZyhlKSB9KVxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==