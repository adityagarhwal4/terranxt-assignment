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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst cookie_parser_1 = __importDefault(__webpack_require__(/*! cookie-parser */ \"cookie-parser\"));\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\nconst app = (0, express_1.default)();\ndotenv_1.default.config({ path: path_1.default.join(__dirname, \"..\", \"public/.env\") });\nconst FRONTEND_URI1 = process.env.FRONTEND_URI1;\nconst FRONTEND_URI2 = process.env.FRONTEND_URI2;\nif (!FRONTEND_URI1 || !FRONTEND_URI2) {\n    throw new Error(\"Missing FRONTEND_URI1 or FRONTEND_URI2 environment variables\");\n}\n// middlewares\napp.use(express_1.default.json({ limit: \"50mb\" }));\napp.use(express_1.default.urlencoded({ limit: '50mb', extended: true }));\napp.use(express_1.default.static(path_1.default.join(__dirname, \"..\", \"build\")));\napp.use((0, cors_1.default)({\n    credentials: true,\n    origin: [FRONTEND_URI1, FRONTEND_URI2],\n}));\napp.use((0, cookie_parser_1.default)());\n// adding build\napp.get(\"*\", (req, res) => {\n    res.sendFile(path_1.default.join(__dirname, \"..\", \"build\", \"index.html\"));\n});\nexports[\"default\"] = app;\n\n\n//# sourceURL=webpack://sdgxbackend/./src/app.ts?");

/***/ }),

/***/ "./src/database/connection/connect.ts":
/*!********************************************!*\
  !*** ./src/database/connection/connect.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.connectDB = void 0;\nconst mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst connectDB = async () => {\n    try {\n        const connect = await mongoose_1.default.connect(`${process.env.DB_URI}`);\n        console.log(\"DB connected\");\n        return connect;\n    }\n    catch (err) {\n        console.log(err.message);\n    }\n};\nexports.connectDB = connectDB;\n\n\n//# sourceURL=webpack://sdgxbackend/./src/database/connection/connect.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\nconst app_1 = __importDefault(__webpack_require__(/*! ./app */ \"./src/app.ts\"));\nconst path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nconst connect_1 = __webpack_require__(/*! ./database/connection/connect */ \"./src/database/connection/connect.ts\");\ndotenv_1.default.config({ path: path_1.default.join(__dirname, \"..\", \"public/.env\") });\nconst PORT = process.env.PORT || 5050;\napp_1.default.listen(PORT, () => {\n    (0, connect_1.connectDB)();\n    console.log(`server is running on http://localhost${PORT}`);\n});\n\n\n//# sourceURL=webpack://sdgxbackend/./src/server.ts?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.ts");
/******/ 	
/******/ })()
;