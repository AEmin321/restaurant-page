/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/page-load */ \"./src/pages/page-load.js\");\n\n\n(0,_pages_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ populateAbout)\n/* harmony export */ });\nfunction populateAbout () {\n    const mainDiv=document.querySelector('.main');\n\n    mainDiv.innerHTML=`<div class=\"about-wrapper\"><div class=\"about-title\">About Us!</div>\n    <p>Lorem ipsum dolor sit amet. Et possimus veniam et dolor blanditiis eos quos explicabo et expedita doloremque. Qui sint numquam rem labore odio sed odio odio. In officia officia ut mollitia internos id nisi sunt! Ut corporis libero eos voluptates corporis qui facilis ipsum.</p>\n    <p>Eum magnam quia et dolorem odit aut consequatur totam. Qui minus temporibus vel galisum sint sed voluptas dolores aut dolorum veniam.</p>\n    <p>Et natus omnis eum velit voluptatem est soluta possimus qui earum sint eos assumenda soluta et impedit temporibus. Sed veniam iusto ex eligendi consectetur aut sint dicta. Sed vero iure aut eaque reiciendis aut rerum quasi quo perspiciatis eius.</p></div>`;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/about.js?");

/***/ }),

/***/ "./src/pages/footer.js":
/*!*****************************!*\
  !*** ./src/pages/footer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ footer)\n/* harmony export */ });\nconst container=document.querySelector('body');\n\nfunction footer () {\n    const createFooter=document.createElement('footer');\n    createFooter.textContent='© Amini 2023';\n    container.appendChild(createFooter);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/footer.js?");

/***/ }),

/***/ "./src/pages/header.js":
/*!*****************************!*\
  !*** ./src/pages/header.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setHeader)\n/* harmony export */ });\nconst container =document.querySelector('.container');\n\nfunction setHeader () {\n    const headerDiv=document.createElement('div');\n    headerDiv.classList.add('header');\n\n    const headerTitle=document.createElement('div');\n    headerTitle.classList.add ('header-title');\n    headerTitle.textContent='Lorem Restaurant';\n\n    const btnsDiv=document.createElement('div');\n    btnsDiv.classList.add('btns-wrapper');\n    btnsDiv.appendChild(createButton('home-btn','Home'));\n    btnsDiv.appendChild(createButton('menu-btn','Menu'));\n    btnsDiv.appendChild(createButton('about-btn','About'));\n\n    headerDiv.appendChild(headerTitle);\n    headerDiv.appendChild(btnsDiv);\n    container.appendChild(headerDiv);\n}\n\nfunction createButton (className,txtContent) {\n    const createBtn=document.createElement('div');\n    createBtn.classList.add(className);\n    createBtn.textContent=txtContent;\n    return createBtn;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/header.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _asset_hero_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset/hero.png */ \"./src/asset/hero.png\");\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(title,pText) {\n    const mainDiv=document.querySelector('.main');\n    mainDiv.innerHTML=`<div class=\"hero-text-wrapper\"><div class=\"hero-title\">${title}</div>\n    <div class=\"hero-paragraph\">${pText}</div>\n    <button class=\"hero-btn\">View Menu >></button></div>\n    <div class=\"hero-wrapper\"><img class=\"hero-img\" src=\"${_asset_hero_png__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"hero image of foods.\"/></div>`;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ populateMenu)\n/* harmony export */ });\n/* harmony import */ var _asset_hero_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset/hero.png */ \"./src/asset/hero.png\");\n\n\n\nconst menuItems=[\n    {\n        name:\"alksjd\",\n        details:\"asdlfkjlk\",\n        price:'11$'\n    },\n    {\n        name:\"alksdj\",\n        details:\"asdlfkjlk\",\n        price:'22$'\n    },\n    {\n        name:\"alkj\",\n        details:\"asdlfkjlk\",\n        price:'12$'\n    },\n    {\n        name:\"alkj\",\n        details:\"asdlfkjlk\",\n        price:'12$'\n    },\n    {\n        name:\"alkj\",\n        details:\"asdlfkjlk\",\n        price:'12$'\n    },\n    {\n        name:\"alkj\",\n        details:\"asdlfkjlk\",\n        price:'12$'\n    }\n];\n\nfunction populateMenu () {\n    const mainDiv=document.querySelector('.main');\n    menuItems.forEach((item)=>{\n        const cardDiv=document.createElement('div');\n        const cardImg=document.createElement('img');\n        const cardTitle=document.createElement('div');\n        const cardParagraph=document.createElement('p');\n        const cardPrice=document.createElement('div');\n\n        cardTitle.classList.add('card-title');\n        cardPrice.classList.add('card-price');\n\n        cardImg.src=_asset_hero_png__WEBPACK_IMPORTED_MODULE_0__;\n        cardTitle.textContent=item.name;\n        cardParagraph.textContent=item.details;\n        cardPrice.textContent=item.price;\n\n        cardDiv.classList.add('card');\n        cardDiv.appendChild(cardImg);\n        cardDiv.appendChild(cardTitle);\n        cardDiv.appendChild(cardParagraph);\n        cardDiv.appendChild(cardPrice);\n        mainDiv.appendChild(cardDiv);\n    })\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu.js?");

/***/ }),

/***/ "./src/pages/page-load.js":
/*!********************************!*\
  !*** ./src/pages/page-load.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initialPage)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/pages/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/pages/home.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/pages/footer.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ \"./src/pages/about.js\");\n\n\n\n\n\n\nconst heroTitle=\"Welcome to Lorem Restaurant\";\nconst heroParagraph=\"Qui omnis molestiae qui harum totam et dolorem atque At error nihil est obcaecati tempore.\";\n\nfunction initialPage () {\n    const createMainDiv=document.createElement('div');\n    createMainDiv.classList.add('main');\n    const getContent=document.querySelector('.container');\n    (0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    getContent.appendChild(createMainDiv);\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(heroTitle,heroParagraph);\n    handleBtnClick();\n    (0,_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\nfunction handleBtnClick () {\n    const mainDiv=document.querySelector('.main');\n    const homeBtn=document.querySelector('.home-btn');\n    const menuBtn=document.querySelector('.menu-btn');\n    const aboutBtn=document.querySelector('.about-btn');\n\n    handleHeroBtn(mainDiv);\n    \n    homeBtn.addEventListener('click',()=>{\n        handleHomeButton(mainDiv);\n        homeBtn.classList.add('btn-active');\n        menuBtn.classList.remove('btn-active');\n        aboutBtn.classList.remove('btn-active');\n    })\n    menuBtn.addEventListener('click',()=>{\n        handleMenuButton(mainDiv);\n        homeBtn.classList.remove('btn-active');\n        menuBtn.classList.add('btn-active');\n        aboutBtn.classList.remove('btn-active');\n    })\n    aboutBtn.addEventListener('click',()=>{\n        handleAboutButton(mainDiv);\n        homeBtn.classList.remove('btn-active');\n        menuBtn.classList.remove('btn-active');\n        aboutBtn.classList.add('btn-active');\n    })\n}\n\nfunction handleHomeButton (mainDiv) {\n    mainDiv.innerHTML='';\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(heroTitle,heroParagraph);\n    handleHeroBtn(mainDiv);\n}\n\nfunction handleMenuButton(mainDiv) {\n    mainDiv.innerHTML='';\n    (0,_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\nfunction handleAboutButton(mainDiv) {\n    mainDiv.innnerHTML='';\n    (0,_about__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n}\n\nfunction handleHeroBtn (mainDiv) {\n    const heroBtn=document.querySelector('.hero-btn');\n    const homeBtn=document.querySelector('.home-btn');\n    const menuBtn=document.querySelector('.menu-btn');\n    const aboutBtn=document.querySelector('.about-btn');\n\n    heroBtn.addEventListener('click',()=>{\n        // console.log ('log');\n        handleMenuButton(mainDiv);\n        homeBtn.classList.remove('btn-active');\n        menuBtn.classList.add('btn-active');\n        aboutBtn.classList.remove('btn-active');\n    })\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/page-load.js?");

/***/ }),

/***/ "./src/asset/hero.png":
/*!****************************!*\
  !*** ./src/asset/hero.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3c37c3a8ef44e4f319eb.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/asset/hero.png?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;