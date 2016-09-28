/*! lineupjs - v0.5.1 - 2016
* https://github.com/Caleydo/lineup.js
* Copyright (c) 2016 Caleydo Team; Licensed BSD-3-Clause*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LineUpJS"] = factory();
	else
		root["LineUpJS"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Samuel Gratzl on 26.09.2016.
	 */
	__webpack_require__(1);
	module.exports = __webpack_require__(5);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".lugui-me {\n  margin-bottom: 5px;\n  clear: both; }\n  .lugui-me > div:first-of-type {\n    padding-bottom: 5px;\n    border-bottom: 1px solid black; }\n  .lugui-me > div:nth-of-type(3) {\n    padding-top: 5px; }\n    .lugui-me > div:nth-of-type(3) input {\n      width: 4em; }\n  .lugui-me > div:first-of-type, .lugui-me > div:nth-of-type(3) {\n    margin: 0 5px;\n    font-size: 10pt;\n    text-align: center; }\n    .lugui-me > div:first-of-type .raw_min, .lugui-me > div:nth-of-type(3) .raw_min {\n      float: left; }\n    .lugui-me > div:first-of-type .raw_max, .lugui-me > div:nth-of-type(3) .raw_max {\n      float: right;\n      text-align: right; }\n  .lugui-me svg {\n    margin-top: -5px;\n    margin-bottom: -7px;\n    z-index: 1;\n    position: relative; }\n    .lugui-me svg rect {\n      fill: white;\n      opacity: 0; }\n    .lugui-me svg g.samples line {\n      stroke: black;\n      opacity: 0.5; }\n    .lugui-me svg g.mapping:hover {\n      cursor: ew-resize; }\n      .lugui-me svg g.mapping:hover line {\n        stroke: #0000cf; }\n      .lugui-me svg g.mapping:hover circle {\n        fill: #0000cf; }\n    .lugui-me svg g.mapping line {\n      stroke: blue; }\n    .lugui-me svg g.mapping circle {\n      fill: blue; }\n  .lugui-me div.mapping_filter {\n    border: 1px solid black;\n    height: 20px;\n    position: relative; }\n    .lugui-me div.mapping_filter div.mapping_mapping {\n      position: absolute;\n      height: 100%;\n      width: 100%;\n      background-color: #bababa; }\n    .lugui-me div.mapping_filter div.filter_left_filter, .lugui-me div.mapping_filter div.filter_right_filter {\n      position: absolute;\n      height: 100%;\n      opacity: 0.5;\n      background: repeating-linear-gradient(-45deg, gray, gray 4px, white 4px, white 8px); }\n    .lugui-me div.mapping_filter div.left_handle, .lugui-me div.mapping_filter div.right_handle {\n      position: absolute;\n      top: 5px;\n      height: 15px;\n      width: 5px;\n      cursor: ew-resize;\n      background: black; }\n    .lugui-me div.mapping_filter div.left_handle {\n      left: 0;\n      border-radius: 0 3px 3px 0; }\n    .lugui-me div.mapping_filter div.right_handle {\n      border-radius: 3px 0 0 3px; }\n  .lugui-me div.script {\n    clear: both;\n    text-align: right; }\n    .lugui-me div.script textarea {\n      height: 4em;\n      width: 98%;\n      font-size: 8pt;\n      display: block; }\n\n.lu-popup {\n  position: absolute;\n  dominant-baseline: central;\n  text-anchor: middle; }\n  .lu-popup .ok {\n    position: absolute;\n    right: 10px; }\n\n.lu-popup, .lu-popup2 {\n  background-color: rgba(255, 255, 255, 0.9);\n  position: absolute;\n  padding: 2px;\n  box-shadow: 5px 5px 3px #888888;\n  z-index: 9;\n  font-size: 8pt;\n  clear: right; }\n  .lu-popup input, .lu-popup2 input {\n    font-size: 8pt; }\n  .lu-popup .selectionTable, .lu-popup2 .selectionTable {\n    background: white;\n    overflow-x: auto;\n    overflow-y: auto; }\n    .lu-popup .selectionTable td,\n    .lu-popup .selectionTable th, .lu-popup2 .selectionTable td,\n    .lu-popup2 .selectionTable th {\n      white-space: nowrap;\n      padding: 1px 5px 1px 3px;\n      cursor: pointer; }\n    .lu-popup .selectionTable th, .lu-popup2 .selectionTable th {\n      border-bottom: #c1c1c1 1px solid; }\n    .lu-popup .selectionTable table, .lu-popup2 .selectionTable table {\n      width: 95%;\n      border: 0; }\n    .lu-popup .selectionTable tr:hover, .lu-popup2 .selectionTable tr:hover {\n      background-color: lightblue; }\n  .lu-popup .lu-popup-title, .lu-popup2 .lu-popup-title {\n    cursor: pointer;\n    cursor: -webkit-grab; }\n\n.lu-popup2 * {\n  margin: 0; }\n\n.lu-popup2 .ok {\n  float: right; }\n\n.lu-popup2 div.bar {\n  height: 1em; }\n\n.lu-tooltip {\n  background-color: white;\n  min-width: 200px;\n  position: absolute;\n  z-index: 3;\n  font-size: 9pt;\n  text-align: left;\n  padding: 2px; }\n  .lu-tooltip table {\n    width: 100%;\n    border-collapse: collapse; }\n  .lu-tooltip tbody th {\n    width: 100px; }\n  .lu-tooltip td, .lu-tooltip th {\n    border: 1px solid black; }\n\n.lu-pool div.header {\n  border: 2px outset white;\n  position: absolute; }\n  .lu-pool div.header:hover {\n    border-color: #e5e5e5; }\n\n.lu, .lu-pool {\n  position: relative; }\n  .lu div.lu-header, .lu-pool div.lu-header {\n    position: relative; }\n  .lu text, .lu tspan, .lu-pool text, .lu-pool tspan {\n    dominant-baseline: text-before-edge; }\n  .lu text.actions tspan, .lu-pool text.actions tspan {\n    cursor: pointer; }\n    .lu text.actions tspan:hover, .lu-pool text.actions tspan:hover {\n      color: darkblue; }\n  .lu text.selection, .lu-pool text.selection {\n    cursor: pointer; }\n    .lu text.selection:hover, .lu-pool text.selection:hover {\n      color: darkblue; }\n  .lu text.rank, .lu text.text_right, .lu-pool text.rank, .lu-pool text.text_right {\n    text-anchor: end; }\n  .lu text.text_center, .lu-pool text.text_center {\n    text-anchor: middle; }\n  .lu g.bar rect, .lu-pool g.bar rect {\n    opacity: 0.5; }\n  .lu line.meanline, .lu-pool line.meanline {\n    stroke: darkgray;\n    stroke-width: 1; }\n  .lu *[draggable], .lu-pool *[draggable] {\n    cursor: pointer;\n    cursor: -webkit-grab; }\n  .lu line.slope, .lu-pool line.slope {\n    stroke: darkgray;\n    stroke-width: 2;\n    shape-rendering: geometricPrecision; }\n    .lu line.slope.hover, .lu-pool line.slope.hover {\n      stroke: #e5e5e5; }\n    .lu line.slope.selected, .lu-pool line.slope.selected {\n      stroke: #ffa500; }\n  .lu g.cols, .lu-pool g.cols {\n    pointer-events: none; }\n  .lu g.row rect.bg, .lu-pool g.row rect.bg {\n    fill: transparent; }\n    .lu g.row rect.bg.even, .lu-pool g.row rect.bg.even {\n      fill: #f7f7f7; }\n  .lu g.row.selected rect.bg, .lu-pool g.row.selected rect.bg {\n    stroke: #ffa500;\n    stroke-width: 1; }\n  .lu g.row.hover rect.bg, .lu-pool g.row.hover rect.bg {\n    fill: #e5e5e5; }\n  .lu g.row.hover rect.bar, .lu g.row.hover g.bar rect, .lu-pool g.row.hover rect.bar, .lu-pool g.row.hover g.bar rect {\n    opacity: 0.5; }\n  .lu div.lu-header, .lu div.lu-pool, .lu-pool div.lu-header, .lu-pool div.lu-pool {\n    position: relative;\n    background-color: white; }\n    .lu div.lu-header .drop, .lu div.lu-pool .drop, .lu-pool div.lu-header .drop, .lu-pool div.lu-pool .drop {\n      width: 100%;\n      height: 100%;\n      position: absolute; }\n      .lu div.lu-header .drop.drag_over, .lu div.lu-pool .drop.drag_over, .lu-pool div.lu-header .drop.drag_over, .lu-pool div.lu-pool .drop.drag_over {\n        background-color: #979797; }\n  .lu div.lu-header div.toolbar, .lu-pool div.lu-header div.toolbar {\n    display: none;\n    position: absolute;\n    text-align: right;\n    right: 5px;\n    top: 0;\n    border-radius: 3px 0 0 3px;\n    cursor: auto;\n    background: #6D6C6C;\n    z-index: 1; }\n  .lu div.lu-header div.header.drag_over div.lu-label, .lu-pool div.lu-header div.header.drag_over div.lu-label {\n    color: #979797; }\n  .lu div.lu-header div.header.compressed div.toolbar i:not(.fa-toggle-right), .lu div.lu-header div.header.compressed div.histogram, .lu-pool div.lu-header div.header.compressed div.toolbar i:not(.fa-toggle-right), .lu-pool div.lu-header div.header.compressed div.histogram {\n    display: none; }\n  .lu div.lu-header div.header div.histogram, .lu-pool div.lu-header div.header div.histogram {\n    position: absolute;\n    left: 0;\n    right: 5px;\n    top: 40%;\n    height: 60%;\n    display: none; }\n    .lu div.lu-header div.header div.histogram > div.bar, .lu-pool div.lu-header div.header div.histogram > div.bar {\n      position: absolute;\n      background-color: white;\n      opacity: 0.5; }\n      .lu div.lu-header div.header div.histogram > div.bar.selected, .lu-pool div.lu-header div.header div.histogram > div.bar.selected {\n        opacity: 1.0; }\n      .lu div.lu-header div.header div.histogram > div.bar:hover, .lu-pool div.lu-header div.header div.histogram > div.bar:hover {\n        opacity: 0.7; }\n    .lu div.lu-header div.header div.histogram div.mean, .lu-pool div.lu-header div.header div.histogram div.mean {\n      position: absolute;\n      height: 100%;\n      width: 1px;\n      border-left: 1px solid black; }\n  .lu div.lu-header div.header div.lu-label, .lu-pool div.lu-header div.header div.lu-label {\n    position: relative;\n    background: inherit;\n    transform-origin: left top;\n    text-overflow: ellipsis;\n    overflow-x: hidden; }\n  .lu div.lu-header div.header span.lu-label, .lu-pool div.lu-header div.header span.lu-label {\n    background: inherit; }\n  .lu div.lu-header div.header i.sort_indicator, .lu-pool div.lu-header div.header i.sort_indicator {\n    position: absolute;\n    left: 1px;\n    top: 1px;\n    font-size: 8pt; }\n  .lu div.lu-header div.header div.handle, .lu-pool div.lu-header div.header div.handle {\n    position: absolute;\n    right: 0;\n    height: 100%;\n    top: 0;\n    background-color: white;\n    display: inline-block;\n    cursor: col-resize; }\n    .lu div.lu-header div.header div.handle.drag_over, .lu-pool div.lu-header div.header div.handle.drag_over {\n      background-color: #979797; }\n  .lu div.lu-header div.toolbar i, .lu-pool div.lu-header div.toolbar i {\n    font-size: 8pt;\n    padding: 1px 2px;\n    cursor: pointer; }\n    .lu div.lu-header div.toolbar i:hover, .lu-pool div.lu-header div.toolbar i:hover {\n      color: darkblue; }\n  .lu div.lu-header div.rankingbuttons, .lu-pool div.lu-header div.rankingbuttons {\n    position: absolute;\n    display: inline-block;\n    height: 100%;\n    font-size: 90%; }\n  .lu div.lu-header div.header, .lu div.lu-header div.header_i, .lu-pool div.lu-header div.header, .lu-pool div.lu-header div.header_i {\n    position: absolute;\n    display: inline-block;\n    overflow: hidden;\n    color: white;\n    text-align: center;\n    height: 100%;\n    font-size: 90%; }\n    .lu div.lu-header div.header.filtered > div.toolbar i.fa-filter, .lu div.lu-header div.header_i.filtered > div.toolbar i.fa-filter, .lu-pool div.lu-header div.header.filtered > div.toolbar i.fa-filter, .lu-pool div.lu-header div.header_i.filtered > div.toolbar i.fa-filter {\n      color: darkblue; }\n    .lu div.lu-header div.header:not(.compressed):hover > div.toolbar, .lu div.lu-header div.header_i:not(.compressed):hover > div.toolbar, .lu-pool div.lu-header div.header:not(.compressed):hover > div.toolbar, .lu-pool div.lu-header div.header_i:not(.compressed):hover > div.toolbar {\n      display: block;\n      padding: 7px; }\n      .lu div.lu-header div.header:not(.compressed):hover > div.toolbar i, .lu div.lu-header div.header_i:not(.compressed):hover > div.toolbar i, .lu-pool div.lu-header div.header:not(.compressed):hover > div.toolbar i, .lu-pool div.lu-header div.header_i:not(.compressed):hover > div.toolbar i {\n        display: none; }\n      .lu div.lu-header div.header:not(.compressed):hover > div.toolbar:before, .lu div.lu-header div.header_i:not(.compressed):hover > div.toolbar:before, .lu-pool div.lu-header div.header:not(.compressed):hover > div.toolbar:before, .lu-pool div.lu-header div.header_i:not(.compressed):hover > div.toolbar:before {\n        z-index: -1;\n        content: '\\F0C9';\n        font-family: FontAwesome, sans-serif;\n        font-size: 7pt;\n        padding: 1px 2px 1px 1px;\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: -5px;\n        left: -5px; }\n      .lu div.lu-header div.header:not(.compressed):hover > div.toolbar:hover, .lu div.lu-header div.header_i:not(.compressed):hover > div.toolbar:hover, .lu-pool div.lu-header div.header:not(.compressed):hover > div.toolbar:hover, .lu-pool div.lu-header div.header_i:not(.compressed):hover > div.toolbar:hover {\n        padding: 0 10px 0 5px; }\n        .lu div.lu-header div.header:not(.compressed):hover > div.toolbar:hover:before, .lu div.lu-header div.header_i:not(.compressed):hover > div.toolbar:hover:before, .lu-pool div.lu-header div.header:not(.compressed):hover > div.toolbar:hover:before, .lu-pool div.lu-header div.header_i:not(.compressed):hover > div.toolbar:hover:before {\n          content: ''; }\n        .lu div.lu-header div.header:not(.compressed):hover > div.toolbar:hover i, .lu div.lu-header div.header_i:not(.compressed):hover > div.toolbar:hover i, .lu-pool div.lu-header div.header:not(.compressed):hover > div.toolbar:hover i, .lu-pool div.lu-header div.header_i:not(.compressed):hover > div.toolbar:hover i {\n          display: inline-block; }\n    .lu div.lu-header div.header.compressed:hover > div.toolbar, .lu div.lu-header div.header_i.compressed:hover > div.toolbar, .lu-pool div.lu-header div.header.compressed:hover > div.toolbar, .lu-pool div.lu-header div.header_i.compressed:hover > div.toolbar {\n      display: block; }\n    .lu div.lu-header div.header.number div.histogram, .lu div.lu-header div.header.categorical div.histogram, .lu div.lu-header div.header.ordinal div.histogram, .lu div.lu-header div.header_i.number div.histogram, .lu div.lu-header div.header_i.categorical div.histogram, .lu div.lu-header div.header_i.ordinal div.histogram, .lu-pool div.lu-header div.header.number div.histogram, .lu-pool div.lu-header div.header.categorical div.histogram, .lu-pool div.lu-header div.header.ordinal div.histogram, .lu-pool div.lu-header div.header_i.number div.histogram, .lu-pool div.lu-header div.header_i.categorical div.histogram, .lu-pool div.lu-header div.header_i.ordinal div.histogram {\n      display: block; }\n    .lu div.lu-header div.header.rotateable, .lu div.lu-header div.header_i.rotateable, .lu-pool div.lu-header div.header.rotateable, .lu-pool div.lu-header div.header_i.rotateable {\n      overflow: visible;\n      white-space: nowrap; }\n  .lu div.lu-header div.header_i, .lu-pool div.lu-header div.header_i {\n    top: 50%;\n    height: 50%; }\n  .lu svg.lu-body, .lu-pool svg.lu-body {\n    foreignObject-padding: 0;\n    foreignObject-margin: 0; }\n    .lu svg.lu-body text, .lu-pool svg.lu-body text {\n      font-size: 10pt; }\n    .lu svg.lu-body input, .lu-pool svg.lu-body input {\n      padding: 0;\n      margin: 0;\n      font-size: 9pt; }\n", ""]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * main module of LineUp.js containing the main class and exposes all other modules
	 * Created by Samuel Gratzl on 14.08.2015.
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	///<reference path='../typings/tsd.d.ts' />
	var model_ = __webpack_require__(6);
	var provider_ = __webpack_require__(9);
	var renderer_ = __webpack_require__(10);
	var ui_ = __webpack_require__(11);
	var utils_ = __webpack_require__(8);
	var ui_dialogs_ = __webpack_require__(12);
	var d3 = __webpack_require__(7);
	/**
	 * access to the model module
	 * @type {--global-type--}
	 */
	exports.model = model_;
	/**
	 * access to the provider module
	 * @type {--global-type--}
	 */
	exports.provider = provider_;
	/**
	 * access to the renderer module
	 * @type {--global-type--}
	 */
	exports.renderer = renderer_;
	/**
	 * access to the ui module
	 * @type {--global-type--}
	 */
	exports.ui = ui_;
	/**
	 * access to the utils module
	 * @type {--global-type--}
	 */
	exports.utils = utils_;
	/**
	 * access to the ui_dialogs module
	 * @type {--global-type--}
	 */
	exports.ui_dialogs = ui_dialogs_;
	/**
	 * main LineUp class managing data and rendering
	 */
	var LineUp = (function (_super) {
	    __extends(LineUp, _super);
	    function LineUp(container, data, config) {
	        var _this = this;
	        if (config === void 0) { config = {}; }
	        _super.call(this);
	        this.data = data;
	        /**
	         * default config of LineUp with all available options
	         */
	        this.config = {
	            /**
	             * a prefix used for all generated html ids
	             */
	            idPrefix: Math.random().toString(36).slice(-8).substr(0, 3),
	            /**
	             * options related to the header html layout
	             */
	            header: {
	                /**
	                 * standard height of the header
	                 */
	                headerHeight: 20,
	                /**
	                 * height of the header including histogram
	                 */
	                headerHistogramHeight: 40,
	                /**
	                 * should labels be automatically rotated if they doesn't fit?
	                 */
	                autoRotateLabels: false,
	                /**
	                 * space reserved if a label is rotated
	                 */
	                rotationHeight: 50,
	                /**
	                 * the degrees to rotate a label
	                 */
	                rotationDegree: -20,
	                /**
	                 * hook for adding buttons to rankings in the header
	                 */
	                rankingButtons: ui_.dummyRankingButtonHook,
	                /**
	                 * templates for link patterns
	                 */
	                linkTemplates: []
	            },
	            /**
	             * old name for header
	             */
	            htmlLayout: {},
	            /**
	             * visual representation options
	             */
	            renderingOptions: {
	                /**
	                 * show combined bars as stacked bars
	                 */
	                stacked: true,
	                /**
	                 * use animation for reordering
	                 */
	                animation: true,
	                /**
	                 * show histograms of the headers (just settable at the beginning)
	                 */
	                histograms: false,
	                /**
	                 * show a mean line for single numberial columns
	                 */
	                meanLine: false,
	            },
	            /**
	             * options related to the rendering of the body
	             */
	            body: {
	                renderer: 'svg',
	                rowHeight: 17,
	                rowPadding: 0.2,
	                rowBarPadding: 1,
	                /**
	                 * whether just the visible rows or all rows should be rendered - rendering performance (default: true)
	                 */
	                visibleRowsOnly: true,
	                /**
	                 * number of backup rows to keep to avoid updating on every small scroll thing
	                 */
	                backupScrollRows: 4,
	                animationDuration: 1000,
	                //number of cols that should be frozen on the left side
	                freezeCols: 0,
	                rowActions: []
	            },
	            /**
	             * old name for body
	             */
	            svgLayout: {},
	            /**
	             *  enables manipulation features, remove column, reorder,...
	             */
	            manipulative: true,
	            /**
	             * automatically add a column pool at the end
	             */
	            pool: false,
	            /**
	             * the renderers to use for rendering the columns
	             */
	            renderers: renderer_.renderers()
	        };
	        this.body = null;
	        this.header = null;
	        this.pools = [];
	        this.contentScroller = null;
	        /**
	         * local variable that is used by update()
	         * @type {boolean}
	         */
	        this.isUpdateInitialized = false;
	        this.$container = container instanceof d3.selection ? container : d3.select(container);
	        this.$container = this.$container.append('div').classed('lu', true);
	        this.config.svgLayout = this.config.body;
	        this.config.htmlLayout = this.config.header;
	        exports.utils.merge(this.config, config);
	        this.data.on('selectionChanged.main', this.triggerSelection.bind(this));
	        this.header = new ui_.HeaderRenderer(data, this.node, {
	            manipulative: this.config.manipulative,
	            headerHeight: this.config.header.headerHeight,
	            headerHistogramHeight: this.config.header.headerHistogramHeight,
	            histograms: this.config.renderingOptions.histograms,
	            autoRotateLabels: this.config.header.autoRotateLabels,
	            rotationHeight: this.config.header.rotationHeight,
	            rotationDegree: this.config.header.rotationDegree,
	            freezeCols: this.config.body.freezeCols,
	            rankingButtons: this.config.header.rankingButtons,
	            linkTemplates: this.config.header.linkTemplates
	        });
	        this.body = new (this.config.body.renderer === 'svg' ? ui_.BodyRenderer : ui_.BodyCanvasRenderer)(data, this.node, this.slice.bind(this), {
	            rowHeight: this.config.body.rowHeight,
	            rowPadding: this.config.body.rowPadding,
	            rowBarPadding: this.config.body.rowBarPadding,
	            animationDuration: this.config.body.animationDuration,
	            meanLine: this.config.renderingOptions.meanLine,
	            animation: this.config.renderingOptions.animation,
	            stacked: this.config.renderingOptions.stacked,
	            actions: this.config.body.rowActions,
	            idPrefix: this.config.idPrefix,
	            freezeCols: this.config.body.freezeCols,
	            renderers: this.config.renderers
	        });
	        //share hist caches
	        this.body.histCache = this.header.sharedHistCache;
	        this.forward(this.body, LineUp.EVENT_HOVER_CHANGED);
	        if (this.config.pool && this.config.manipulative) {
	            this.addPool(new ui_.PoolRenderer(data, this.node, this.config));
	        }
	        if (this.config.body.visibleRowsOnly) {
	            this.contentScroller = new utils_.ContentScroller(this.$container.node(), this.body.node, {
	                backupRows: this.config.body.backupScrollRows,
	                rowHeight: this.config.body.rowHeight,
	                topShift: function () { return _this.header.currentHeight(); }
	            });
	            this.contentScroller.on('scroll', function (top, left) {
	                //in two svg mode propagate horizontal shift
	                //console.log(top, left,'ss');
	                _this.header.$node.style('transform', 'translate(' + 0 + 'px,' + top + 'px)');
	                if (_this.config.body.freezeCols > 0) {
	                    _this.header.updateFreeze(left);
	                    _this.body.updateFreeze(left);
	                }
	            });
	            this.contentScroller.on('redraw', this.body.update.bind(this.body));
	        }
	    }
	    LineUp.prototype.createEventList = function () {
	        return _super.prototype.createEventList.call(this).concat([LineUp.EVENT_HOVER_CHANGED, LineUp.EVENT_SELECTION_CHANGED, LineUp.EVENT_MULTISELECTION_CHANGED, LineUp.EVENT_UPDATE_START, LineUp.EVENT_UPDATE_FINISHED]);
	    };
	    LineUp.prototype.addPool = function (pool_node, config) {
	        if (config === void 0) { config = this.config; }
	        if (pool_node instanceof ui_.PoolRenderer) {
	            this.pools.push(pool_node);
	        }
	        else {
	            this.pools.push(new ui_.PoolRenderer(this.data, pool_node, config));
	        }
	        return this.pools[this.pools.length - 1];
	    };
	    Object.defineProperty(LineUp.prototype, "node", {
	        /**
	         * returns the main lineup DOM element
	         * @returns {Element}
	         */
	        get: function () {
	            return this.$container.node();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    LineUp.prototype.slice = function (start, length, row2y) {
	        if (this.contentScroller) {
	            return this.contentScroller.select(start, length, row2y);
	        }
	        return { from: start, to: length };
	    };
	    /**
	     * destroys the DOM elements created by this lineup instance, this should be the last call to this lineup instance
	     */
	    LineUp.prototype.destroy = function () {
	        this.pools.forEach(function (p) { return p.remove(); });
	        this.$container.remove();
	        if (this.contentScroller) {
	            this.contentScroller.destroy();
	        }
	    };
	    /**
	     * sorts LineUp by he given column
	     * @param column callback function finding the column to sort
	     * @param ascending
	     * @returns {boolean}
	     */
	    LineUp.prototype.sortBy = function (column, ascending) {
	        if (ascending === void 0) { ascending = false; }
	        var col = this.data.find(column);
	        if (col) {
	            col.sortByMe(ascending);
	        }
	        return col !== null;
	    };
	    LineUp.prototype.dump = function () {
	        return this.data.dump();
	    };
	    LineUp.prototype.changeDataStorage = function (data, dump) {
	        if (this.data) {
	            this.data.on('selectionChanged.main', null);
	        }
	        this.data = data;
	        if (dump) {
	            this.data.restore(dump);
	        }
	        this.data.on('selectionChanged.main', this.triggerSelection.bind(this));
	        this.header.changeDataStorage(data);
	        this.body.changeDataStorage(data);
	        this.pools.forEach(function (p) { return p.changeDataStorage(data); });
	        this.update();
	    };
	    LineUp.prototype.triggerSelection = function (data_indices) {
	        this.fire(LineUp.EVENT_SELECTION_CHANGED, data_indices.length > 0 ? data_indices[0] : -1);
	        this.fire(LineUp.EVENT_MULTISELECTION_CHANGED, data_indices);
	    };
	    LineUp.prototype.restore = function (dump) {
	        this.changeDataStorage(this.data, dump);
	    };
	    LineUp.prototype.update = function () {
	        var _this = this;
	        // HACK: when calling update for the first time the BodyRenderer
	        // fires 3x the `renderFinished` event. However, we want to wait for
	        // the last event before firing LineUp.EVENT_UPDATE_FINISHED.
	        // For any further call of update() the body render will fire the
	        // `renderFinished` event only once
	        var waitForBodyRenderer = (this.isUpdateInitialized) ? 1 : 3;
	        this.isUpdateInitialized = true;
	        this.fire(LineUp.EVENT_UPDATE_START);
	        this.header.update();
	        this.body.update();
	        this.pools.forEach(function (p) { return p.update(); });
	        this.body.on('renderFinished', function () {
	            waitForBodyRenderer -= 1;
	            if (waitForBodyRenderer === 0) {
	                _this.fire(LineUp.EVENT_UPDATE_FINISHED);
	            }
	        });
	    };
	    LineUp.prototype.changeRenderingOption = function (option, value) {
	        this.config.renderingOptions[option] = value;
	        if (option === 'animation' || option === 'stacked') {
	            this.body.setOption(option, value);
	            this.body.update();
	        }
	    };
	    /**
	     * triggered when the mouse is over a specific row
	     * @argument data_index:number the selected data index or <0 if no row
	     */
	    LineUp.EVENT_HOVER_CHANGED = 'hoverChanged';
	    /**
	     * triggered when the user click on a row
	     * @argument data_index:number the selected data index or <0 if no row
	     */
	    LineUp.EVENT_SELECTION_CHANGED = 'selectionChanged';
	    /**
	     * triggered when the user selects one or more rows
	     * @argument data_indices:number[] the selected data indices
	     */
	    LineUp.EVENT_MULTISELECTION_CHANGED = 'multiSelectionChanged';
	    /**
	     * triggered when LineUpJS.update() was called
	     */
	    LineUp.EVENT_UPDATE_START = 'updateStart';
	    /**
	     * triggered when LineUpJS.update() was called and the rendering the body has finished
	     */
	    LineUp.EVENT_UPDATE_FINISHED = 'updateFinished';
	    return LineUp;
	}(utils_.AEventDispatcher));
	exports.LineUp = LineUp;
	/**
	 * assigns colors to colmns if they are numbers and not yet defined
	 * @param columns
	 * @returns {model_.IColumnDesc[]}
	 */
	function deriveColors(columns) {
	    var colors = d3.scale.category10().range().slice();
	    columns.forEach(function (col) {
	        switch (col.type) {
	            case 'number':
	                col.color = colors.shift();
	                break;
	        }
	    });
	    return columns;
	}
	exports.deriveColors = deriveColors;
	/**
	 * creates a local storage provider
	 * @param data
	 * @param columns
	 * @param options
	 * @returns {LocalDataProvider}
	 */
	function createLocalStorage(data, columns, options) {
	    if (options === void 0) { options = {}; }
	    return new provider_.LocalDataProvider(data, columns, options);
	}
	exports.createLocalStorage = createLocalStorage;
	function create(data, container, config) {
	    if (config === void 0) { config = {}; }
	    return new LineUp(container, data, config);
	}
	exports.create = create;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Samuel Gratzl on 06.08.2015.
	 */
	///<reference path='../typings/tsd.d.ts' />
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var d3 = __webpack_require__(7);
	var utils = __webpack_require__(8);
	/**
	 * converts a given id to css compatible one
	 * @param id
	 * @return {string|void}
	 */
	function fixCSS(id) {
	    return id.replace(/[\s!#$%&'\(\)\*\+,\.\/:;<=>\?@\[\\\]\^`\{\|}~]/g, '_'); //replace non css stuff to _
	}
	/**
	 * save number comparison
	 * @param a
	 * @param b
	 * @return {number}
	 */
	function numberCompare(a, b) {
	    if (a === b || (isNaN(a) && isNaN(b))) {
	        return 0;
	    }
	    return a - b;
	}
	/**
	 * a column in LineUp
	 */
	var Column = (function (_super) {
	    __extends(Column, _super);
	    function Column(id, desc) {
	        _super.call(this);
	        this.desc = desc;
	        /**
	         * width of the column
	         * @type {number}
	         * @private
	         */
	        this.width = 100;
	        this.parent = null;
	        /**
	         * whether this column is compressed i.e. just shown in a minimal version
	         * @type {boolean}
	         * @private
	         */
	        this.compressed = false;
	        this.id = fixCSS(id);
	        this.label = this.desc.label || this.id;
	        this.description = this.desc.description || '';
	        this.cssClass = this.desc.cssClass || '';
	        this.color = this.desc.color || (this.cssClass !== '' ? null : Column.DEFAULT_COLOR);
	    }
	    Object.defineProperty(Column.prototype, "headerCssClass", {
	        get: function () {
	            return this.desc.type;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Column.prototype.assignNewId = function (idGenerator) {
	        this.id = fixCSS(idGenerator());
	    };
	    Column.prototype.init = function (callback) {
	        return Promise.resolve(true);
	    };
	    Object.defineProperty(Column.prototype, "fqid", {
	        /**
	         * returns the fully qualified id i.e. path the parent
	         * @returns {string}
	         */
	        get: function () {
	            return this.parent ? this.parent.fqid + '_' + this.id : this.id;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Column.prototype, "fqpath", {
	        get: function () {
	            return this.parent ? this.parent.fqpath + '@' + this.parent.indexOf(this) : '';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * fires:
	     *  * widthChanged
	     *  * filterChanged
	     *  * labelChanged
	     *  * metaDataChanged
	     *  * compressChanged
	     *  * addColumn, removeColumn ... for composite pattern
	     *  * dirty, dirtyHeader, dirtyValues
	     * @returns {string[]}
	     */
	    Column.prototype.createEventList = function () {
	        return _super.prototype.createEventList.call(this).concat(['widthChanged', 'filterChanged', 'labelChanged', 'metaDataChanged', 'compressChanged', 'addColumn', 'removeColumn', 'dirty', 'dirtyHeader', 'dirtyValues']);
	    };
	    Column.prototype.getWidth = function () {
	        return this.width;
	    };
	    Column.prototype.isHidden = function () {
	        return this.width <= 0;
	    };
	    Column.prototype.setCompressed = function (value) {
	        if (this.compressed === value) {
	            return;
	        }
	        this.fire(['compressChanged', 'dirtyHeader', 'dirtyValues', 'dirty'], this.compressed, this.compressed = value);
	    };
	    Column.prototype.getCompressed = function () {
	        return this.compressed;
	    };
	    /**
	     * visitor pattern for flattening the columns
	     * @param r the result array
	     * @param offset left offeset
	     * @param levelsToGo how many levels down
	     * @param padding padding between columns
	     * @returns {number} the used width by this column
	     */
	    Column.prototype.flatten = function (r, offset, levelsToGo, padding) {
	        if (levelsToGo === void 0) { levelsToGo = 0; }
	        if (padding === void 0) { padding = 0; }
	        var w = this.compressed ? Column.COMPRESSED_WIDTH : this.getWidth();
	        r.push({ col: this, offset: offset, width: w });
	        return w;
	    };
	    Column.prototype.setWidth = function (value) {
	        if (this.width === value) {
	            return;
	        }
	        this.fire(['widthChanged', 'dirtyHeader', 'dirtyValues', 'dirty'], this.width, this.width = value);
	    };
	    Column.prototype.setWidthImpl = function (value) {
	        this.width = value;
	    };
	    Column.prototype.setMetaData = function (value) {
	        if (value.label === this.label && this.color === value.color && this.description === value.description) {
	            return;
	        }
	        var events = this.color === value.color ? ['labelChanged', 'metaDataChanged', 'dirtyHeader', 'dirty'] : ['labelChanged', 'metaDataChanged', 'dirtyHeader', 'dirtyValues', 'dirty'];
	        this.fire(events, this.getMetaData(), {
	            label: this.label = value.label,
	            color: this.color = value.color,
	            description: this.description = value.description
	        });
	    };
	    Column.prototype.getMetaData = function () {
	        return {
	            label: this.label,
	            color: this.color,
	            description: this.description
	        };
	    };
	    /**
	     * triggers that the ranking is sorted by this column
	     * @param ascending
	     * @returns {any}
	     */
	    Column.prototype.sortByMe = function (ascending) {
	        if (ascending === void 0) { ascending = false; }
	        var r = this.findMyRanker();
	        if (r) {
	            return r.sortBy(this, ascending);
	        }
	        return false;
	    };
	    /**
	     * toggles the sorting order of this column in the ranking
	     * @returns {any}
	     */
	    Column.prototype.toggleMySorting = function () {
	        var r = this.findMyRanker();
	        if (r) {
	            return r.toggleSorting(this);
	        }
	        return false;
	    };
	    /**
	     * removes the column from the ranking
	     * @returns {boolean}
	     */
	    Column.prototype.removeMe = function () {
	        if (this.parent) {
	            return this.parent.remove(this);
	        }
	        return false;
	    };
	    /**
	     * inserts the given column after itself
	     * @param col
	     * @returns {boolean}
	     */
	    Column.prototype.insertAfterMe = function (col) {
	        if (this.parent) {
	            return this.parent.insertAfter(col, this) != null;
	        }
	        return false;
	    };
	    /**
	     * finds the underlying ranking column
	     * @returns {Ranking}
	     */
	    Column.prototype.findMyRanker = function () {
	        if (this.parent) {
	            return this.parent.findMyRanker();
	        }
	        return null;
	    };
	    /**
	     * dumps this column to JSON compatible format
	     * @param toDescRef
	     * @returns {any}
	     */
	    Column.prototype.dump = function (toDescRef) {
	        var r = {
	            id: this.id,
	            desc: toDescRef(this.desc),
	            width: this.width,
	            compressed: this.compressed
	        };
	        if (this.label !== (this.desc.label || this.id)) {
	            r.label = this.label;
	        }
	        if (this.color !== (this.desc.color || Column.DEFAULT_COLOR) && this.color) {
	            r.color = this.color;
	        }
	        return r;
	    };
	    /**
	     * restore the column content from a dump
	     * @param dump
	     * @param factory
	     */
	    Column.prototype.restore = function (dump, factory) {
	        this.width = dump.width || this.width;
	        this.label = dump.label || this.label;
	        this.color = dump.color || this.color;
	        this.compressed = dump.compressed === true;
	    };
	    /**
	     * return the label of a given row for the current column
	     * @param row
	     * @return {string}
	     */
	    Column.prototype.getLabel = function (row) {
	        return '' + this.getValue(row);
	    };
	    /**
	     * return the value of a given row for the current column
	     * @param row
	     * @return
	     */
	    Column.prototype.getValue = function (row) {
	        return ''; //no value
	    };
	    /**
	     * compare function used to determine the order according to the values of the current column
	     * @param a
	     * @param b
	     * @return {number}
	     */
	    Column.prototype.compare = function (a, b) {
	        return 0; //can't compare
	    };
	    /**
	     * flag whether any filter is applied
	     * @return {boolean}
	     */
	    Column.prototype.isFiltered = function () {
	        return false;
	    };
	    /**
	     * predicate whether the current row should be included
	     * @param row
	     * @return {boolean}
	     */
	    Column.prototype.filter = function (row) {
	        return row !== null;
	    };
	    /**
	     * default color that should be used
	     * @type {string}
	     */
	    Column.DEFAULT_COLOR = '#C1C1C1';
	    /**
	     * magic variable for showing all columns
	     * @type {number}
	     */
	    Column.FLAT_ALL_COLUMNS = -1;
	    /**
	     * width of a compressed column
	     * @type {number}
	     */
	    Column.COMPRESSED_WIDTH = 16;
	    return Column;
	}(utils.AEventDispatcher));
	exports.Column = Column;
	/**
	 * a column having an accessor to get the cell value
	 */
	var ValueColumn = (function (_super) {
	    __extends(ValueColumn, _super);
	    function ValueColumn(id, desc) {
	        _super.call(this, id, desc);
	        //find accessor
	        this.accessor = desc.accessor || (function () { return null; });
	    }
	    ValueColumn.prototype.getLabel = function (row) {
	        return '' + this.getValue(row);
	    };
	    ValueColumn.prototype.getValue = function (row) {
	        return this.accessor(row, this.id, this.desc, this.findMyRanker());
	    };
	    ValueColumn.prototype.compare = function (a, b) {
	        return 0; //can't compare
	    };
	    return ValueColumn;
	}(Column));
	exports.ValueColumn = ValueColumn;
	/**
	 * a default column with no values
	 */
	var DummyColumn = (function (_super) {
	    __extends(DummyColumn, _super);
	    function DummyColumn(id, desc) {
	        _super.call(this, id, desc);
	    }
	    DummyColumn.prototype.getLabel = function (row) {
	        return '';
	    };
	    DummyColumn.prototype.getValue = function (row) {
	        return '';
	    };
	    DummyColumn.prototype.compare = function (a, b) {
	        return 0; //can't compare
	    };
	    return DummyColumn;
	}(Column));
	exports.DummyColumn = DummyColumn;
	/**
	 * checks whether the given column or description is a number column, i.e. the value is a number
	 * @param col
	 * @returns {boolean}
	 */
	function isNumberColumn(col) {
	    return (col instanceof Column && typeof col.getNumber === 'function' || (!(col instanceof Column) && col.type.match(/(number|stack|ordinal)/) != null));
	}
	exports.isNumberColumn = isNumberColumn;
	/**
	 * checks whether the given column or description is a categorical column, i.e. the value is a list of categories
	 * @param col
	 * @returns {boolean}
	 */
	function isCategoricalColumn(col) {
	    return (col instanceof Column && typeof col.getCategories === 'function' || (!(col instanceof Column) && col.type.match(/(categorical|ordinal)/) != null));
	}
	exports.isCategoricalColumn = isCategoricalColumn;
	function toScale(type) {
	    if (type === void 0) { type = 'linear'; }
	    switch (type) {
	        case 'log':
	            return d3.scale.log().clamp(true);
	        case 'sqrt':
	            return d3.scale.sqrt().clamp(true);
	        case 'pow1.1':
	            return d3.scale.pow().exponent(1.1).clamp(true);
	        case 'pow2':
	            return d3.scale.pow().exponent(2).clamp(true);
	        case 'pow3':
	            return d3.scale.pow().exponent(3).clamp(true);
	        default:
	            return d3.scale.linear().clamp(true);
	    }
	}
	function isSame(a, b) {
	    if (a.length !== b.length) {
	        return false;
	    }
	    return a.every(function (ai, i) { return ai === b[i]; });
	}
	function fixDomain(domain, type) {
	    if (type === 'log' && domain[0] === 0) {
	        domain[0] = 0.0000001; //0 is bad
	    }
	    return domain;
	}
	/**
	 * a mapping function based on a d3 scale (linear, sqrt, log)
	 */
	var ScaleMappingFunction = (function () {
	    function ScaleMappingFunction(domain, type, range) {
	        if (domain === void 0) { domain = [0, 1]; }
	        if (type === void 0) { type = 'linear'; }
	        if (range === void 0) { range = [0, 1]; }
	        this.type = type;
	        this.s = toScale(type).domain(fixDomain(domain, this.type)).range(range);
	    }
	    Object.defineProperty(ScaleMappingFunction.prototype, "domain", {
	        get: function () {
	            return this.s.domain();
	        },
	        set: function (domain) {
	            this.s.domain(fixDomain(domain, this.type));
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ScaleMappingFunction.prototype, "range", {
	        get: function () {
	            return this.s.range();
	        },
	        set: function (range) {
	            this.s.range(range);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ScaleMappingFunction.prototype.apply = function (v) {
	        return this.s(v);
	    };
	    Object.defineProperty(ScaleMappingFunction.prototype, "scaleType", {
	        get: function () {
	            return this.type;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ScaleMappingFunction.prototype.dump = function () {
	        return {
	            type: this.type,
	            domain: this.domain,
	            range: this.range
	        };
	    };
	    ScaleMappingFunction.prototype.eq = function (other) {
	        if (!(other instanceof ScaleMappingFunction)) {
	            return false;
	        }
	        var that = other;
	        return that.type === this.type && isSame(this.domain, that.domain) && isSame(this.range, that.range);
	    };
	    ScaleMappingFunction.prototype.restore = function (dump) {
	        this.type = dump.type;
	        this.s = toScale(dump.type).domain(dump.domain).range(dump.range);
	    };
	    ScaleMappingFunction.prototype.clone = function () {
	        return new ScaleMappingFunction(this.domain, this.type, this.range);
	    };
	    return ScaleMappingFunction;
	}());
	exports.ScaleMappingFunction = ScaleMappingFunction;
	/**
	 * a mapping function based on a custom user function using 'value' as the current value
	 */
	var ScriptMappingFunction = (function () {
	    function ScriptMappingFunction(domain_, code_) {
	        if (domain_ === void 0) { domain_ = [0, 1]; }
	        if (code_ === void 0) { code_ = 'return this.linear(value,this.value_min,this.value_max);'; }
	        this.domain_ = domain_;
	        this.code_ = code_;
	        this.f = new Function('value', code_);
	    }
	    Object.defineProperty(ScriptMappingFunction.prototype, "domain", {
	        get: function () {
	            return this.domain_;
	        },
	        set: function (domain) {
	            this.domain_ = domain;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ScriptMappingFunction.prototype, "code", {
	        get: function () {
	            return this.code_;
	        },
	        set: function (code) {
	            if (this.code_ === code) {
	                return;
	            }
	            this.code_ = code;
	            this.f = new Function('value', code);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ScriptMappingFunction.prototype.apply = function (v) {
	        var min = this.domain_[0], max = this.domain_[this.domain_.length - 1];
	        var r = this.f.call({
	            value_min: min,
	            value_max: max,
	            value_range: max - min,
	            value_domain: this.domain_.slice(),
	            linear: function (v, mi, ma) { return (v - mi) / (ma - mi); }
	        }, v);
	        if (typeof r === 'number') {
	            return Math.max(Math.min(r, 1), 0);
	        }
	        return NaN;
	    };
	    ScriptMappingFunction.prototype.dump = function () {
	        return {
	            type: 'script',
	            code: this.code
	        };
	    };
	    ScriptMappingFunction.prototype.eq = function (other) {
	        if (!(other instanceof ScriptMappingFunction)) {
	            return false;
	        }
	        var that = other;
	        return that.code === this.code;
	    };
	    ScriptMappingFunction.prototype.restore = function (dump) {
	        this.code = dump.code;
	    };
	    ScriptMappingFunction.prototype.clone = function () {
	        return new ScriptMappingFunction(this.domain, this.code);
	    };
	    return ScriptMappingFunction;
	}());
	exports.ScriptMappingFunction = ScriptMappingFunction;
	function createMappingFunction(dump) {
	    if (dump.type === 'script') {
	        var s = new ScriptMappingFunction();
	        s.restore(dump);
	        return s;
	    }
	    else {
	        var l = new ScaleMappingFunction();
	        l.restore(dump);
	        return l;
	    }
	}
	exports.createMappingFunction = createMappingFunction;
	/**
	 * a number column mapped from an original input scale to an output range
	 */
	var NumberColumn = (function (_super) {
	    __extends(NumberColumn, _super);
	    function NumberColumn(id, desc) {
	        _super.call(this, id, desc);
	        this.missingValue = 0;
	        /**
	         * currently active filter
	         * @type {{min: number, max: number}}
	         * @private
	         */
	        this.currentFilter = { min: -Infinity, max: Infinity };
	        this.numberFormat = d3.format('.3n');
	        if (desc.map) {
	            this.mapping = createMappingFunction(desc.map);
	        }
	        else if (desc.domain) {
	            this.mapping = new ScaleMappingFunction(desc.domain, 'linear', desc.range || [0, 1]);
	        }
	        this.original = this.mapping.clone();
	        if (desc.numberFormat) {
	            this.numberFormat = d3.format(desc.numberFormat);
	        }
	    }
	    NumberColumn.prototype.init = function (callback) {
	        var _this = this;
	        var d = this.mapping.domain;
	        //if any of the values is not given use the statistics to compute them
	        if (isNaN(d[0]) || isNaN(d[1])) {
	            return callback(this.desc).then(function (stats) {
	                _this.mapping.domain = [stats.min, stats.max];
	                _this.original.domain = [stats.min, stats.max];
	                return true;
	            });
	        }
	        return Promise.resolve(true);
	    };
	    NumberColumn.prototype.dump = function (toDescRef) {
	        var r = _super.prototype.dump.call(this, toDescRef);
	        r.map = this.mapping.dump();
	        r.filter = this.currentFilter;
	        r.missingValue = this.missingValue;
	        return r;
	    };
	    NumberColumn.prototype.restore = function (dump, factory) {
	        _super.prototype.restore.call(this, dump, factory);
	        if (dump.map) {
	            this.mapping = createMappingFunction(dump.map);
	        }
	        else if (dump.domain) {
	            this.mapping = new ScaleMappingFunction(dump.domain, 'linear', dump.range || [0, 1]);
	        }
	        if (dump.currentFilter) {
	            this.currentFilter = dump.currentFilter;
	        }
	        if (dump.missingValue) {
	            this.missingValue = dump.missingValue;
	        }
	        if (dump.numberFormat) {
	            this.numberFormat = d3.format(dump.numberFormat);
	        }
	    };
	    NumberColumn.prototype.createEventList = function () {
	        return _super.prototype.createEventList.call(this).concat(['mappingChanged']);
	    };
	    NumberColumn.prototype.getLabel = function (row) {
	        var v = _super.prototype.getValue.call(this, row);
	        //keep non number if it is not a number else convert using formatter
	        return '' + (typeof v === 'number' ? this.numberFormat(v) : v);
	    };
	    NumberColumn.prototype.getRawValue = function (row) {
	        var v = _super.prototype.getValue.call(this, row);
	        if (typeof (v) === 'undefined' || v == null || isNaN(v) || v === '' || v === 'NA' || (typeof (v) === 'string' && (v.toLowerCase() === 'na'))) {
	            return this.missingValue;
	        }
	        return +v;
	    };
	    NumberColumn.prototype.getValue = function (row) {
	        var v = this.getRawValue(row);
	        if (isNaN(v)) {
	            return v;
	        }
	        return this.mapping.apply(v);
	    };
	    NumberColumn.prototype.getNumber = function (row) {
	        return this.getValue(row);
	    };
	    NumberColumn.prototype.compare = function (a, b) {
	        return numberCompare(this.getValue(a), this.getValue(b));
	    };
	    NumberColumn.prototype.getOriginalMapping = function () {
	        return this.original.clone();
	    };
	    NumberColumn.prototype.getMapping = function () {
	        return this.mapping.clone();
	    };
	    NumberColumn.prototype.setMapping = function (mapping) {
	        if (this.mapping.eq(mapping)) {
	            return;
	        }
	        this.fire(['mappingChanged', 'dirtyValues', 'dirty'], this.mapping.clone(), this.mapping = mapping);
	    };
	    NumberColumn.prototype.isFiltered = function () {
	        return isFinite(this.currentFilter.min) || isFinite(this.currentFilter.max);
	    };
	    Object.defineProperty(NumberColumn.prototype, "filterMin", {
	        get: function () {
	            return this.currentFilter.min;
	        },
	        set: function (min) {
	            var bak = { min: this.currentFilter.min, max: this.currentFilter.max };
	            this.currentFilter.min = isNaN(min) ? -Infinity : min;
	            this.fire(['filterChanged', 'dirtyValues', 'dirty'], bak, this.currentFilter);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NumberColumn.prototype, "filterMax", {
	        get: function () {
	            return this.currentFilter.max;
	        },
	        set: function (max) {
	            var bak = { min: this.currentFilter.min, max: this.currentFilter.max };
	            this.currentFilter.max = isNaN(max) ? Infinity : max;
	            this.fire(['filterChanged', 'dirtyValues', 'dirty'], bak, this.currentFilter);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NumberColumn.prototype.getFilter = function () {
	        return {
	            min: this.currentFilter.min,
	            max: this.currentFilter.max
	        };
	    };
	    NumberColumn.prototype.setFilter = function (value) {
	        if (value === void 0) { value = { min: -Infinity, max: +Infinity }; }
	        if (this.currentFilter.min === value.min && this.currentFilter.max === value.max) {
	            return;
	        }
	        var bak = this.getFilter();
	        this.currentFilter.min = isNaN(value.min) ? -Infinity : value.min;
	        this.currentFilter.max = isNaN(value.max) ? Infinity : value.max;
	        this.fire(['filterChanged', 'dirtyValues', 'dirty'], bak, this.currentFilter);
	    };
	    /**
	     * filter the current row if any filter is set
	     * @param row
	     * @returns {boolean}
	     */
	    NumberColumn.prototype.filter = function (row) {
	        if (!this.isFiltered()) {
	            return true;
	        }
	        var v = this.getRawValue(row);
	        if (isNaN(v)) {
	            return true;
	        }
	        return !((isFinite(this.currentFilter.min) && v < this.currentFilter.min) || (isFinite(this.currentFilter.max) && v > this.currentFilter.max));
	    };
	    return NumberColumn;
	}(ValueColumn));
	exports.NumberColumn = NumberColumn;
	/**
	 * a string column with optional alignment
	 */
	var StringColumn = (function (_super) {
	    __extends(StringColumn, _super);
	    function StringColumn(id, desc) {
	        _super.call(this, id, desc);
	        this.currentFilter = null;
	        this._alignment = 'left';
	        this.setWidthImpl(200); //by default 200
	        this._alignment = desc.alignment || 'left';
	    }
	    Object.defineProperty(StringColumn.prototype, "alignment", {
	        //readonly
	        get: function () {
	            return this._alignment;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    StringColumn.prototype.getValue = function (row) {
	        var v = _super.prototype.getValue.call(this, row);
	        if (typeof (v) === 'undefined' || v == null) {
	            return '';
	        }
	        return v;
	    };
	    StringColumn.prototype.dump = function (toDescRef) {
	        var r = _super.prototype.dump.call(this, toDescRef);
	        if (this.currentFilter instanceof RegExp) {
	            r.filter = 'REGEX:' + this.currentFilter.source;
	        }
	        else {
	            r.filter = this.currentFilter;
	        }
	        r.alignment = this.alignment;
	        return r;
	    };
	    StringColumn.prototype.restore = function (dump, factory) {
	        _super.prototype.restore.call(this, dump, factory);
	        if (dump.filter && dump.filter.slice(0, 6) === 'REGEX:') {
	            this.currentFilter = new RegExp(dump.filter.slice(6));
	        }
	        else {
	            this.currentFilter = dump.filter || null;
	        }
	        this._alignment = dump.alignment || this._alignment;
	    };
	    StringColumn.prototype.isFiltered = function () {
	        return this.currentFilter != null;
	    };
	    StringColumn.prototype.filter = function (row) {
	        if (!this.isFiltered()) {
	            return true;
	        }
	        var r = this.getLabel(row), filter = this.currentFilter;
	        if (filter === StringColumn.FILTER_MISSING) {
	            return r != null && r.trim() !== '';
	        }
	        if (typeof filter === 'string' && filter.length > 0) {
	            return r && r.toLowerCase().indexOf(filter.toLowerCase()) >= 0;
	        }
	        if (filter instanceof RegExp) {
	            return r && filter.test(r);
	        }
	        return true;
	    };
	    StringColumn.prototype.getFilter = function () {
	        return this.currentFilter;
	    };
	    StringColumn.prototype.setFilter = function (filter) {
	        if (filter === '') {
	            filter = null;
	        }
	        if (this.currentFilter === filter) {
	            return;
	        }
	        this.fire(['filterChanged', 'dirtyValues', 'dirty'], this.currentFilter, this.currentFilter = filter);
	    };
	    StringColumn.prototype.compare = function (a, b) {
	        var a_val, b_val;
	        if ((a_val = this.getValue(a)) === '') {
	            return 1;
	        }
	        else if ((b_val = this.getValue(b)) === '') {
	            return -1;
	        }
	        else if (a_val === b_val) {
	            return 0;
	        }
	        else {
	            return a_val < b_val ? -1 : 1;
	        }
	    };
	    //magic key for filtering missing ones
	    StringColumn.FILTER_MISSING = '__FILTER_MISSING';
	    return StringColumn;
	}(ValueColumn));
	exports.StringColumn = StringColumn;
	/**
	 * a string column in which the label is a text but the value a link
	 */
	var LinkColumn = (function (_super) {
	    __extends(LinkColumn, _super);
	    function LinkColumn(id, desc) {
	        _super.call(this, id, desc);
	        /**
	         * a pattern used for generating the link, $1 is replaced with the actual value
	         * @type {null}
	         */
	        this.link = null;
	        this.link = desc.link;
	    }
	    Object.defineProperty(LinkColumn.prototype, "headerCssClass", {
	        get: function () {
	            return this.link == null ? 'link' : 'link link_pattern';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    LinkColumn.prototype.createEventList = function () {
	        return _super.prototype.createEventList.call(this).concat(['linkChanged']);
	    };
	    LinkColumn.prototype.setLink = function (link) {
	        /* tslint:disable */
	        if (link == this.link) {
	            return;
	        }
	        /* tslint:enable */
	        this.fire(['linkChanged', 'dirtyHeader', 'dirtyValues', 'dirty'], this.link, this.link = link);
	    };
	    LinkColumn.prototype.getLink = function () {
	        return this.link || '';
	    };
	    LinkColumn.prototype.dump = function (toDescRef) {
	        var r = _super.prototype.dump.call(this, toDescRef);
	        /* tslint:disable */
	        if (this.link != this.desc.link) {
	            r.link = this.link;
	        }
	        /* tslint:enable */
	        return r;
	    };
	    LinkColumn.prototype.restore = function (dump, factory) {
	        _super.prototype.restore.call(this, dump, factory);
	        if (dump.link) {
	            this.link = dump.link;
	        }
	    };
	    LinkColumn.prototype.getLabel = function (row) {
	        var v = _super.prototype.getValue.call(this, row);
	        if (v.alt) {
	            return v.alt;
	        }
	        return '' + v;
	    };
	    LinkColumn.prototype.isLink = function (row) {
	        if (this.link) {
	            return true;
	        }
	        //get original value
	        var v = _super.prototype.getValue.call(this, row);
	        //convert to link
	        return v.href != null;
	    };
	    LinkColumn.prototype.getValue = function (row) {
	        //get original value
	        var v = _super.prototype.getValue.call(this, row);
	        //convert to link
	        if (v.href) {
	            return v.href;
	        }
	        else if (this.link) {
	            return this.link.replace(/\$1/g, v);
	        }
	        return v;
	    };
	    return LinkColumn;
	}(StringColumn));
	exports.LinkColumn = LinkColumn;
	/**
	 * a string column in which the values can be edited locally
	 */
	var AnnotateColumn = (function (_super) {
	    __extends(AnnotateColumn, _super);
	    function AnnotateColumn(id, desc) {
	        _super.call(this, id, desc);
	        this.annotations = d3.map();
	    }
	    AnnotateColumn.prototype.createEventList = function () {
	        return _super.prototype.createEventList.call(this).concat(['valueChanged']);
	    };
	    AnnotateColumn.prototype.getValue = function (row) {
	        var index = String(row._index);
	        if (this.annotations.has(index)) {
	            return this.annotations.get(index);
	        }
	        return _super.prototype.getValue.call(this, row);
	    };
	    AnnotateColumn.prototype.dump = function (toDescRef) {
	        var r = _super.prototype.dump.call(this, toDescRef);
	        r.annotations = {};
	        this.annotations.forEach(function (k, v) {
	            r.annotations[k] = v;
	        });
	        return r;
	    };
	    AnnotateColumn.prototype.restore = function (dump, factory) {
	        var _this = this;
	        _super.prototype.restore.call(this, dump, factory);
	        if (dump.annotations) {
	            Object.keys(dump.annotations).forEach(function (k) {
	                _this.annotations.set(k, dump.annotations[k]);
	            });
	        }
	    };
	    AnnotateColumn.prototype.setValue = function (row, value) {
	        var old = this.getValue(row);
	        if (old === value) {
	            return true;
	        }
	        if (value === '' || value == null) {
	            this.annotations.remove(String(row._index));
	        }
	        else {
	            this.annotations.set(String(row._index), value);
	        }
	        this.fire(['valueChanged', 'dirtyValues', 'dirty'], row._index, old, value);
	        return true;
	    };
	    return AnnotateColumn;
	}(StringColumn));
	exports.AnnotateColumn = AnnotateColumn;
	function arrayEquals(a, b) {
	    var al = a != null ? a.length : 0;
	    var bl = b != null ? b.length : 0;
	    if (al !== bl) {
	        return false;
	    }
	    if (al === 0) {
	        return true;
	    }
	    return a.every(function (ai, i) { return ai === b[i]; });
	}
	/**
	 * a checkbox column for selections
	 */
	var SelectionColumn = (function (_super) {
	    __extends(SelectionColumn, _super);
	    function SelectionColumn(id, desc) {
	        _super.call(this, id, desc);
	        this.setCompressed(true);
	    }
	    /**
	     * factory for creating a description creating a rank column
	     * @param label
	     * @returns {{type: string, label: string}}
	     */
	    SelectionColumn.desc = function (label) {
	        if (label === void 0) { label = 'S'; }
	        return { type: 'selection', label: label };
	    };
	    SelectionColumn.prototype.createEventList = function () {
	        return _super.prototype.createEventList.call(this).concat(['select']);
	    };
	    SelectionColumn.prototype.setValue = function (row, value) {
	        var old = this.getValue(row);
	        if (old === value) {
	            return true;
	        }
	        return this.setImpl(row, value);
	    };
	    SelectionColumn.prototype.setImpl = function (row, value) {
	        if (this.desc.setter) {
	            this.desc.setter(row, value);
	        }
	        this.fire('select', row, value);
	        return true;
	    };
	    SelectionColumn.prototype.toggleValue = function (row) {
	        var old = this.getValue(row);
	        this.setImpl(row, !old);
	        return !old;
	    };
	    SelectionColumn.prototype.compare = function (a, b) {
	        return d3.ascending(this.getValue(a), this.getValue(b));
	    };
	    return SelectionColumn;
	}(ValueColumn));
	exports.SelectionColumn = SelectionColumn;
	/**
	 * a string column with optional alignment
	 */
	var BooleanColumn = (function (_super) {
	    __extends(BooleanColumn, _super);
	    function BooleanColumn(id, desc) {
	        _super.call(this, id, desc);
	        this.currentFilter = null;
	        this.trueMarker = 'X';
	        this.falseMarker = '';
	        this.setWidthImpl(30);
	        this.trueMarker = desc.trueMarker || this.trueMarker;
	        this.falseMarker = desc.falseMarker || this.falseMarker;
	    }
	    BooleanColumn.prototype.getValue = function (row) {
	        var v = _super.prototype.getValue.call(this, row);
	        if (typeof (v) === 'undefined' || v == null) {
	            return false;
	        }
	        return v === true || v === 'true' || v === 'yes' || v === 'x';
	    };
	    BooleanColumn.prototype.getLabel = function (row) {
	        var v = this.getValue(row);
	        return v ? this.trueMarker : this.falseMarker;
	    };
	    BooleanColumn.prototype.dump = function (toDescRef) {
	        var r = _super.prototype.dump.call(this, toDescRef);
	        if (this.currentFilter !== null) {
	            r.filter = this.currentFilter;
	        }
	        return r;
	    };
	    BooleanColumn.prototype.restore = function (dump, factory) {
	        _super.prototype.restore.call(this, dump, factory);
	        if (typeof dump.filter !== 'undefined') {
	            this.currentFilter = dump.filter;
	        }
	    };
	    BooleanColumn.prototype.isFiltered = function () {
	        return this.currentFilter !== null;
	    };
	    BooleanColumn.prototype.filter = function (row) {
	        if (!this.isFiltered()) {
	            return true;
	        }
	        var r = this.getValue(row);
	        return r === this.currentFilter;
	    };
	    BooleanColumn.prototype.getFilter = function () {
	        return this.currentFilter;
	    };
	    BooleanColumn.prototype.setFilter = function (filter) {
	        if (this.currentFilter === filter) {
	            return;
	        }
	        this.fire(['filterChanged', 'dirtyValues', 'dirty'], this.currentFilter, this.currentFilter = filter);
	    };
	    BooleanColumn.prototype.compare = function (a, b) {
	        return d3.ascending(this.getValue(a), this.getValue(b));
	    };
	    return BooleanColumn;
	}(ValueColumn));
	exports.BooleanColumn = BooleanColumn;
	/**
	 * column for categorical values
	 */
	var CategoricalColumn = (function (_super) {
	    __extends(CategoricalColumn, _super);
	    function CategoricalColumn(id, desc) {
	        _super.call(this, id, desc);
	        /**
	         * colors for each category
	         * @type {Ordinal<string, string>}
	         */
	        this.colors = d3.scale.category10();
	        /**
	         * category labels by default the category name itself
	         * @type {Array}
	         */
	        this.catLabels = d3.map();
	        /**
	         * set of categories to show
	         * @type {null}
	         * @private
	         */
	        this.currentFilter = null;
	        /**
	         * split multiple categories
	         * @type {string}
	         */
	        this.separator = ';';
	        this.separator = desc.separator || this.separator;
	        this.initCategories(desc);
	        //TODO infer categories from data
	    }
	    CategoricalColumn.prototype.initCategories = function (desc) {
	        if (desc.categories) {
	            var cats = [], cols = this.colors.range(), labels = d3.map();
	            desc.categories.forEach(function (cat, i) {
	                if (typeof cat === 'string') {
	                    cats.push(cat);
	                }
	                else {
	                    cats.push(cat.name);
	                    if (cat.label) {
	                        labels.set(cat.name, cat.label);
	                    }
	                    cols[i] = cat.color;
	                }
	            });
	            this.catLabels = labels;
	            this.colors.domain(cats).range(cols);
	        }
	    };
	    Object.defineProperty(CategoricalColumn.prototype, "categories", {
	        get: function () {
	            return this.colors.domain();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CategoricalColumn.prototype, "categoryColors", {
	        get: function () {
	            return this.colors.range();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CategoricalColumn.prototype, "categoryLabels", {
	        get: function () {
	            var _this = this;
	            //no mapping
	            if (this.catLabels === null || this.catLabels.empty()) {
	                return this.categories;
	            }
	            //label or identity mapping
	            return this.categories.map(function (c) { return _this.catLabels.has(c) ? _this.catLabels.get(c) : c; });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CategoricalColumn.prototype.colorOf = function (cat) {
	        return this.colors(cat);
	    };
	    CategoricalColumn.prototype.getLabel = function (row) {
	        //no mapping
	        if (this.catLabels === null || this.catLabels.empty()) {
	            return '' + StringColumn.prototype.getValue.call(this, row);
	        }
	        return this.getLabels(row).join(this.separator);
	    };
	    CategoricalColumn.prototype.getFirstLabel = function (row) {
	        var l = this.getLabels(row);
	        return l.length > 0 ? l[0] : null;
	    };
	    CategoricalColumn.prototype.getLabels = function (row) {
	        var _this = this;
	        var v = StringColumn.prototype.getValue.call(this, row);
	        var r = v.split(this.separator);
	        var mapToLabel = function (values) {
	            if (_this.catLabels === null || _this.catLabels.empty()) {
	                return values;
	            }
	            return values.map(function (v) { return _this.catLabels.has(v) ? _this.catLabels.get(v) : v; });
	        };
	        return mapToLabel(r);
	    };
	    CategoricalColumn.prototype.getValue = function (row) {
	        var r = this.getValues(row);
	        return r.length > 0 ? r[0] : null;
	    };
	    CategoricalColumn.prototype.getValues = function (row) {
	        var v = StringColumn.prototype.getValue.call(this, row);
	        var r = v.split(this.separator);
	        return r;
	    };
	    CategoricalColumn.prototype.getCategories = function (row) {
	        return this.getValues(row);
	    };
	    CategoricalColumn.prototype.getColor = function (row) {
	        var cat = this.getValue(row);
	        if (cat === null || cat === '') {
	            return null;
	        }
	        return this.colors(cat);
	    };
	    CategoricalColumn.prototype.getColors = function (row) {
	        return this.getCategories(row).map(this.colors);
	    };
	    CategoricalColumn.prototype.dump = function (toDescRef) {
	        var r = _super.prototype.dump.call(this, toDescRef);
	        r.filter = this.currentFilter;
	        r.colors = {
	            domain: this.colors.domain(),
	            range: this.colors.range(),
	            separator: this.separator
	        };
	        return r;
	    };
	    CategoricalColumn.prototype.restore = function (dump, factory) {
	        _super.prototype.restore.call(this, dump, factory);
	        this.currentFilter = dump.filter || null;
	        if (dump.colors) {
	            this.colors.domain(dump.colors.domain).range(dump.colors.range);
	        }
	        this.separator = dump.separator || this.separator;
	    };
	    CategoricalColumn.prototype.isFiltered = function () {
	        return this.currentFilter != null;
	    };
	    CategoricalColumn.prototype.filter = function (row) {
	        if (!this.isFiltered()) {
	            return true;
	        }
	        var vs = this.getCategories(row), filter = this.currentFilter;
	        return vs.every(function (v) {
	            if (Array.isArray(filter) && filter.length > 0) {
	                return filter.indexOf(v) >= 0;
	            }
	            else if (typeof filter === 'string' && filter.length > 0) {
	                return v && v.toLowerCase().indexOf(filter.toLowerCase()) >= 0;
	            }
	            else if (filter instanceof RegExp) {
	                return v != null && v.match(filter).length > 0;
	            }
	            return true;
	        });
	    };
	    CategoricalColumn.prototype.getFilter = function () {
	        return this.currentFilter;
	    };
	    CategoricalColumn.prototype.setFilter = function (filter) {
	        if (arrayEquals(this.currentFilter, filter)) {
	            return;
	        }
	        this.fire(['filterChanged', 'dirtyValues', 'dirty'], this.currentFilter, this.currentFilter = filter);
	    };
	    CategoricalColumn.prototype.compare = function (a, b) {
	        var va = this.getValues(a);
	        var vb = this.getValues(b);
	        //check all categories
	        for (var i = 0; i < Math.min(va.length, vb.length); ++i) {
	            var ci = d3.ascending(va[i], vb[i]);
	            if (ci !== 0) {
	                return ci;
	            }
	        }
	        //smaller length wins
	        return va.length - vb.length;
	    };
	    return CategoricalColumn;
	}(ValueColumn));
	exports.CategoricalColumn = CategoricalColumn;
	/**
	 * similar to a categorical column but the categories are mapped to numbers
	 */
	var CategoricalNumberColumn = (function (_super) {
	    __extends(CategoricalNumberColumn, _super);
	    function CategoricalNumberColumn(id, desc) {
	        _super.call(this, id, desc);
	        this.colors = d3.scale.category10();
	        /**
	         * category labels by default the category name itself
	         * @type {Array}
	         */
	        this.catLabels = d3.map();
	        this.scale = d3.scale.ordinal().rangeRoundPoints([0, 1]);
	        this.currentFilter = null;
	        /**
	         * separator for multi handling
	         * @type {string}
	         */
	        this.separator = ';';
	        this.combiner = d3.max;
	        this.separator = desc.separator || this.separator;
	        CategoricalColumn.prototype.initCategories.call(this, desc);
	        this.scale.domain(this.colors.domain());
	        if (desc.categories) {
	            //lookup value or 0.5 by default
	            var values = desc.categories.map(function (d) { return ((typeof d !== 'string' && typeof (d.value) === 'number')) ? d.value : 0.5; });
	            this.scale.range(values);
	        }
	    }
	    CategoricalNumberColumn.prototype.createEventList = function () {
	        return _super.prototype.createEventList.call(this).concat(['mappingChanged']);
	    };
	    Object.defineProperty(CategoricalNumberColumn.prototype, "categories", {
	        get: function () {
	            return this.colors.domain().slice();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CategoricalNumberColumn.prototype, "categoryColors", {
	        get: function () {
	            return this.colors.range().slice();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CategoricalNumberColumn.prototype, "categoryLabels", {
	        get: function () {
	            var _this = this;
	            //no mapping
	            if (this.catLabels === null || this.catLabels.empty()) {
	                return this.categories;
	            }
	            //label or identity mapping
	            return this.categories.map(function (c) { return _this.catLabels.has(c) ? _this.catLabels.get(c) : c; });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CategoricalNumberColumn.prototype.colorOf = function (cat) {
	        return this.colors(cat);
	    };
	    CategoricalNumberColumn.prototype.getLabel = function (row) {
	        return CategoricalColumn.prototype.getLabel.call(this, row);
	    };
	    CategoricalNumberColumn.prototype.getFirstLabel = function (row) {
	        return CategoricalColumn.prototype.getFirstLabel.call(this, row);
	    };
	    CategoricalNumberColumn.prototype.getLabels = function (row) {
	        return CategoricalColumn.prototype.getLabels.call(this, row);
	    };
	    CategoricalNumberColumn.prototype.getValue = function (row) {
	        var r = this.getValues(row);
	        return r.length > 0 ? this.combiner(r) : 0;
	    };
	    CategoricalNumberColumn.prototype.getValues = function (row) {
	        var r = CategoricalColumn.prototype.getValues.call(this, row);
	        return r.map(this.scale);
	    };
	    CategoricalNumberColumn.prototype.getCategories = function (row) {
	        return CategoricalColumn.prototype.getValues.call(this, row);
	    };
	    CategoricalNumberColumn.prototype.getNumber = function (row) {
	        return this.getValue(row);
	    };
	    CategoricalNumberColumn.prototype.getColor = function (row) {
	        var vs = this.getValues(row);
	        var cs = this.getColors(row);
	        if (this.combiner === d3.max) {
	            //use the max color
	            return cs.slice(1).reduce(function (prev, act, i) { return vs[i + 1] > prev.v ? { c: act, v: vs[i + 1] } : prev; }, {
	                c: cs[0],
	                v: vs[0]
	            }).c;
	        }
	        else if (this.combiner === d3.min) {
	            //use the max color
	            return cs.slice(1).reduce(function (prev, act, i) { return vs[i + 1] < prev.v ? { c: act, v: vs[i + 1] } : prev; }, {
	                c: cs[0],
	                v: vs[0]
	            }).c;
	        }
	        else {
	            //use the first
	            return cs[0] || null;
	        }
	    };
	    CategoricalNumberColumn.prototype.getColors = function (row) {
	        return CategoricalColumn.prototype.getColors.call(this, row);
	    };
	    CategoricalNumberColumn.prototype.dump = function (toDescRef) {
	        var r = CategoricalColumn.prototype.dump.call(this, toDescRef);
	        r.scale = {
	            domain: this.scale.domain(),
	            range: this.scale.range(),
	            separator: this.separator
	        };
	        return r;
	    };
	    CategoricalNumberColumn.prototype.restore = function (dump, factory) {
	        CategoricalColumn.prototype.restore.call(this, dump, factory);
	        if (dump.scale) {
	            this.scale.domain(dump.scale.domain).range(dump.scale.range);
	        }
	        this.separator = dump.separator || this.separator;
	    };
	    CategoricalNumberColumn.prototype.getScale = function () {
	        return {
	            domain: this.scale.domain(),
	            range: this.scale.range()
	        };
	    };
	    CategoricalNumberColumn.prototype.getMapping = function () {
	        return this.scale.range().slice();
	    };
	    CategoricalNumberColumn.prototype.setMapping = function (range) {
	        var bak = this.getScale();
	        this.scale.range(range);
	        this.fire(['mappingChanged', 'dirtyValues', 'dirty'], bak, this.getScale());
	    };
	    CategoricalNumberColumn.prototype.isFiltered = function () {
	        return this.currentFilter != null;
	    };
	    CategoricalNumberColumn.prototype.filter = function (row) {
	        return CategoricalColumn.prototype.filter.call(this, row);
	    };
	    CategoricalNumberColumn.prototype.getFilter = function () {
	        return this.currentFilter;
	    };
	    CategoricalNumberColumn.prototype.setFilter = function (filter) {
	        if (this.currentFilter === filter) {
	            return;
	        }
	        this.fire(['filterChanged', 'dirtyValues', 'dirty'], this.currentFilter, this.currentFilter = filter);
	    };
	    CategoricalNumberColumn.prototype.compare = function (a, b) {
	        return NumberColumn.prototype.compare.call(this, a, b);
	    };
	    return CategoricalNumberColumn;
	}(ValueColumn));
	exports.CategoricalNumberColumn = CategoricalNumberColumn;
	/**
	 * implementation of a combine column, standard operations how to select
	 */
	var CompositeColumn = (function (_super) {
	    __extends(CompositeColumn, _super);
	    function CompositeColumn(id, desc) {
	        _super.call(this, id, desc);
	        this._children = [];
	    }
	    CompositeColumn.prototype.assignNewId = function (idGenerator) {
	        _super.prototype.assignNewId.call(this, idGenerator);
	        this._children.forEach(function (c) { return c.assignNewId(idGenerator); });
	    };
	    Object.defineProperty(CompositeColumn.prototype, "children", {
	        get: function () {
	            return this._children.slice();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(CompositeColumn.prototype, "length", {
	        get: function () {
	            return this._children.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CompositeColumn.prototype.flatten = function (r, offset, levelsToGo, padding) {
	        if (levelsToGo === void 0) { levelsToGo = 0; }
	        if (padding === void 0) { padding = 0; }
	        var self = null;
	        //no more levels or just this one
	        if (levelsToGo === 0 || levelsToGo <= Column.FLAT_ALL_COLUMNS) {
	            var w = this.getCompressed() ? Column.COMPRESSED_WIDTH : this.getWidth();
	            r.push(self = { col: this, offset: offset, width: w });
	            if (levelsToGo === 0) {
	                return w;
	            }
	        }
	        //push children
	        this._children.forEach(function (c) {
	            if (!c.isHidden() || levelsToGo <= Column.FLAT_ALL_COLUMNS) {
	                c.flatten(r, offset, levelsToGo - 1, padding);
	            }
	        });
	        return w;
	    };
	    CompositeColumn.prototype.dump = function (toDescRef) {
	        var r = _super.prototype.dump.call(this, toDescRef);
	        r.children = this._children.map(function (d) { return d.dump(toDescRef); });
	        return r;
	    };
	    CompositeColumn.prototype.restore = function (dump, factory) {
	        var _this = this;
	        dump.children.map(function (child) {
	            var c = factory(child);
	            if (c) {
	                _this.push(c);
	            }
	        });
	        _super.prototype.restore.call(this, dump, factory);
	    };
	    /**
	     * inserts a column at a the given position
	     * @param col
	     * @param index
	     * @param weight
	     * @returns {any}
	     */
	    CompositeColumn.prototype.insert = function (col, index) {
	        this._children.splice(index, 0, col);
	        //listen and propagate events
	        return this.insertImpl(col, index);
	    };
	    CompositeColumn.prototype.insertImpl = function (col, index) {
	        col.parent = this;
	        this.forward(col, 'dirtyHeader.combine', 'dirtyValues.combine', 'dirty.combine', 'filterChanged.combine');
	        this.fire(['addColumn', 'dirtyHeader', 'dirtyValues', 'dirty'], col, index);
	        return col;
	    };
	    CompositeColumn.prototype.push = function (col) {
	        return this.insert(col, this._children.length);
	    };
	    CompositeColumn.prototype.at = function (index) {
	        return this._children[index];
	    };
	    CompositeColumn.prototype.indexOf = function (col) {
	        return this._children.indexOf(col);
	    };
	    CompositeColumn.prototype.insertAfter = function (col, ref) {
	        var i = this.indexOf(ref);
	        if (i < 0) {
	            return null;
	        }
	        return this.insert(col, i + 1);
	    };
	    CompositeColumn.prototype.remove = function (child) {
	        var i = this._children.indexOf(child);
	        if (i < 0) {
	            return false;
	        }
	        this._children.splice(i, 1); //remove and deregister listeners
	        return this.removeImpl(child);
	    };
	    CompositeColumn.prototype.removeImpl = function (child) {
	        child.parent = null;
	        this.unforward(child, 'dirtyHeader.combine', 'dirtyValues.combine', 'dirty.combine', 'filterChanged.combine');
	        this.fire(['removeColumn', 'dirtyHeader', 'dirtyValues', 'dirty'], child);
	        return true;
	    };
	    CompositeColumn.prototype.getColor = function (row) {
	        return this.color;
	    };
	    CompositeColumn.prototype.isFiltered = function () {
	        return this._children.some(function (d) { return d.isFiltered(); });
	    };
	    CompositeColumn.prototype.filter = function (row) {
	        return this._children.every(function (d) { return d.filter(row); });
	    };
	    return CompositeColumn;
	}(Column));
	exports.CompositeColumn = CompositeColumn;
	/**
	 * implementation of a combine column, standard operations how to select
	 */
	var CompositeNumberColumn = (function (_super) {
	    __extends(CompositeNumberColumn, _super);
	    function CompositeNumberColumn(id, desc) {
	        _super.call(this, id, desc);
	        this.missingValue = 0;
	        this.numberFormat = d3.format('.3n');
	        if (desc.numberFormat) {
	            this.numberFormat = d3.format(desc.numberFormat);
	        }
	    }
	    CompositeNumberColumn.prototype.dump = function (toDescRef) {
	        var r = _super.prototype.dump.call(this, toDescRef);
	        r.missingValue = this.missingValue;
	        return r;
	    };
	    CompositeNumberColumn.prototype.restore = function (dump, factory) {
	        if (dump.missingValue) {
	            this.missingValue = dump.missingValue;
	        }
	        if (dump.numberFormat) {
	            this.numberFormat = d3.format(dump.numberFormat);
	        }
	        _super.prototype.restore.call(this, dump, factory);
	    };
	    /**
	     * inserts a column at a the given position
	     * @param col
	     * @param index
	     * @param weight
	     * @returns {any}
	     */
	    CompositeNumberColumn.prototype.insert = function (col, index) {
	        if (!isNumberColumn(col)) {
	            return null;
	        }
	        return _super.prototype.insert.call(this, col, index);
	    };
	    CompositeNumberColumn.prototype.getLabel = function (row) {
	        var v = this.getValue(row);
	        //keep non number if it is not a number else convert using formatter
	        return '' + (typeof v === 'number' ? this.numberFormat(v) : v);
	    };
	    CompositeNumberColumn.prototype.getValue = function (row) {
	        //weighted sum
	        var v = this.compute(row);
	        if (typeof (v) === 'undefined' || v == null || isNaN(v)) {
	            return this.missingValue;
	        }
	        return v;
	    };
	    CompositeNumberColumn.prototype.compute = function (row) {
	        return NaN;
	    };
	    CompositeNumberColumn.prototype.getNumber = function (row) {
	        return this.getValue(row);
	    };
	    CompositeNumberColumn.prototype.compare = function (a, b) {
	        return numberCompare(this.getValue(a), this.getValue(b));
	    };
	    return CompositeNumberColumn;
	}(CompositeColumn));
	exports.CompositeNumberColumn = CompositeNumberColumn;
	function isMultiLevelColumn(col) {
	    return typeof (col.getCollapsed) === 'function';
	}
	exports.isMultiLevelColumn = isMultiLevelColumn;
	/**
	 * implementation of the stacked column
	 */
	var StackColumn = (function (_super) {
	    __extends(StackColumn, _super);
	    function StackColumn(id, desc) {
	        _super.call(this, id, desc);
	        /**
	         * whether this stack column is collapsed i.e. just looks like an ordinary number column
	         * @type {boolean}
	         * @private
	         */
	        this.collapsed = false;
	        var that = this;
	        this.adaptChange = function (old, new_) {
	            that.adaptWidthChange(this.source, old, new_);
	        };
	    }
	    /**
	     * factory for creating a description creating a stacked column
	     * @param label
	     * @returns {{type: string, label: string}}
	     */
	    StackColumn.desc = function (label) {
	        if (label === void 0) { label = 'Combined'; }
	        return { type: 'stack', label: label };
	    };
	    StackColumn.prototype.createEventList = function () {
	        return _super.prototype.createEventList.call(this).concat(['collapseChanged', 'weightsChanged']);
	    };
	    StackColumn.prototype.setCollapsed = function (value) {
	        if (this.collapsed === value) {
	            return;
	        }
	        this.fire(['collapseChanged', 'dirtyHeader', 'dirtyValues', 'dirty'], this.collapsed, this.collapsed = value);
	    };
	    StackColumn.prototype.getCollapsed = function () {
	        return this.collapsed;
	    };
	    StackColumn.prototype.flatten = function (r, offset, levelsToGo, padding) {
	        if (levelsToGo === void 0) { levelsToGo = 0; }
	        if (padding === void 0) { padding = 0; }
	        var self = null;
	        var children = levelsToGo <= Column.FLAT_ALL_COLUMNS ? this._children : this._children.filter(function (c) { return !c.isHidden(); });
	        //no more levels or just this one
	        if (levelsToGo === 0 || levelsToGo <= Column.FLAT_ALL_COLUMNS) {
	            var w = this.getCompressed() ? Column.COMPRESSED_WIDTH : this.getWidth();
	            if (!this.collapsed && !this.getCompressed()) {
	                w += (children.length - 1) * padding;
	            }
	            r.push(self = { col: this, offset: offset, width: w });
	            if (levelsToGo === 0) {
	                return w;
	            }
	        }
	        //push children
	        var acc = offset;
	        children.forEach(function (c) {
	            acc += c.flatten(r, acc, levelsToGo - 1, padding) + padding;
	        });
	        if (self) {
	            self.width = acc - offset - padding;
	        }
	        return acc - offset - padding;
	    };
	    StackColumn.prototype.dump = function (toDescRef) {
	        var r = _super.prototype.dump.call(this, toDescRef);
	        r.collapsed = this.collapsed;
	        return r;
	    };
	    StackColumn.prototype.restore = function (dump, factory) {
	        this.collapsed = dump.collapsed === true;
	        _super.prototype.restore.call(this, dump, factory);
	    };
	    /**
	     * inserts a column at a the given position
	     * @param col
	     * @param index
	     * @param weight
	     * @returns {any}
	     */
	    StackColumn.prototype.insert = function (col, index, weight) {
	        if (weight === void 0) { weight = NaN; }
	        if (!isNaN(weight)) {
	            col.setWidth((weight / (1 - weight) * this.getWidth()));
	        }
	        col.on('widthChanged.stack', this.adaptChange);
	        //increase my width
	        _super.prototype.setWidth.call(this, this.length === 0 ? col.getWidth() : (this.getWidth() + col.getWidth()));
	        return _super.prototype.insert.call(this, col, index);
	    };
	    StackColumn.prototype.push = function (col, weight) {
	        if (weight === void 0) { weight = NaN; }
	        return this.insert(col, this.length, weight);
	    };
	    StackColumn.prototype.insertAfter = function (col, ref, weight) {
	        if (weight === void 0) { weight = NaN; }
	        var i = this.indexOf(ref);
	        if (i < 0) {
	            return null;
	        }
	        return this.insert(col, i + 1, weight);
	    };
	    /**
	     * adapts weights according to an own width change
	     * @param col
	     * @param old
	     * @param new_
	     */
	    StackColumn.prototype.adaptWidthChange = function (col, old, new_) {
	        if (old === new_) {
	            return;
	        }
	        var bak = this.getWeights();
	        var full = this.getWidth(), change = (new_ - old) / full;
	        var oldWeight = old / full;
	        var factor = (1 - oldWeight - change) / (1 - oldWeight);
	        this._children.forEach(function (c) {
	            if (c === col) {
	            }
	            else {
	                c.setWidthImpl(c.getWidth() * factor);
	            }
	        });
	        this.fire(['weightsChanged', 'dirtyHeader', 'dirtyValues', 'dirty'], bak, this.getWeights());
	    };
	    StackColumn.prototype.getWeights = function () {
	        var w = this.getWidth();
	        return this._children.map(function (d) { return d.getWidth() / w; });
	    };
	    StackColumn.prototype.setWeights = function (weights) {
	        var bak = this.getWeights();
	        var s, delta = weights.length - this.length;
	        if (delta < 0) {
	            s = d3.sum(weights);
	            if (s <= 1) {
	                for (var i = 0; i < -delta; ++i) {
	                    weights.push((1 - s) * (1 / -delta));
	                }
	            }
	            else if (s <= 100) {
	                for (var i = 0; i < -delta; ++i) {
	                    weights.push((100 - s) * (1 / -delta));
	                }
	            }
	        }
	        weights = weights.slice(0, this.length);
	        s = d3.sum(weights) / this.getWidth();
	        weights = weights.map(function (d) { return d / s; });
	        this._children.forEach(function (c, i) {
	            c.setWidthImpl(weights[i]);
	        });
	        this.fire(['weightsChanged', 'dirtyHeader', 'dirtyValues', 'dirty'], bak, weights);
	    };
	    StackColumn.prototype.removeImpl = function (child) {
	        child.on('widthChanged.stack', null);
	        _super.prototype.setWidth.call(this, this.length === 1 ? 100 : this.getWidth() - child.getWidth());
	        return _super.prototype.removeImpl.call(this, child);
	    };
	    StackColumn.prototype.setWidth = function (value) {
	        var factor = value / this.getWidth();
	        this._children.forEach(function (child) {
	            //disable since we change it
	            child.setWidthImpl(child.getWidth() * factor);
	        });
	        _super.prototype.setWidth.call(this, value);
	    };
	    StackColumn.prototype.compute = function (row) {
	        var w = this.getWidth();
	        return this._children.reduce(function (acc, d) { return acc + d.getValue(row) * (d.getWidth() / w); }, 0);
	    };
	    return StackColumn;
	}(CompositeNumberColumn));
	exports.StackColumn = StackColumn;
	/**
	 * combines multiple columns by using the maximal value
	 */
	var MaxColumn = (function (_super) {
	    __extends(MaxColumn, _super);
	    function MaxColumn(id, desc) {
	        _super.call(this, id, desc);
	    }
	    /**
	     * factory for creating a description creating a max column
	     * @param label
	     * @returns {{type: string, label: string}}
	     */
	    MaxColumn.desc = function (label) {
	        if (label === void 0) { label = 'Max'; }
	        return { type: 'max', label: label };
	    };
	    MaxColumn.prototype.getColor = function (row) {
	        //compute the index of the maximal one
	        var c = this._children;
	        if (c.length === 0) {
	            return this.color;
	        }
	        var max_i = 0, max_v = c[0].getValue(row);
	        for (var i = 1; i < c.length; ++i) {
	            var v = c[i].getValue(row);
	            if (v > max_v) {
	                max_i = i;
	                max_v = v;
	            }
	        }
	        return c[max_i].color;
	    };
	    MaxColumn.prototype.compute = function (row) {
	        return d3.max(this._children, function (d) { return d.getValue(row); });
	    };
	    return MaxColumn;
	}(CompositeNumberColumn));
	exports.MaxColumn = MaxColumn;
	var MinColumn = (function (_super) {
	    __extends(MinColumn, _super);
	    function MinColumn(id, desc) {
	        _super.call(this, id, desc);
	    }
	    /**
	     * factory for creating a description creating a min column
	     * @param label
	     * @returns {{type: string, label: string}}
	     */
	    MinColumn.desc = function (label) {
	        if (label === void 0) { label = 'Min'; }
	        return { type: 'min', label: label };
	    };
	    MinColumn.prototype.getColor = function (row) {
	        //compute the index of the maximal one
	        var c = this._children;
	        if (c.length === 0) {
	            return this.color;
	        }
	        var min_i = 0, min_v = c[0].getValue(row);
	        for (var i = 1; i < c.length; ++i) {
	            var v = c[i].getValue(row);
	            if (v < min_v) {
	                min_i = i;
	                min_v = v;
	            }
	        }
	        return c[min_i].color;
	    };
	    MinColumn.prototype.compute = function (row) {
	        return d3.min(this._children, function (d) { return d.getValue(row); });
	    };
	    return MinColumn;
	}(CompositeNumberColumn));
	exports.MinColumn = MinColumn;
	var MeanColumn = (function (_super) {
	    __extends(MeanColumn, _super);
	    function MeanColumn(id, desc) {
	        _super.call(this, id, desc);
	    }
	    /**
	     * factory for creating a description creating a mean column
	     * @param label
	     * @returns {{type: string, label: string}}
	     */
	    MeanColumn.desc = function (label) {
	        if (label === void 0) { label = 'Mean'; }
	        return { type: 'mean', label: label };
	    };
	    MeanColumn.prototype.compute = function (row) {
	        return d3.mean(this._children, function (d) { return d.getValue(row); });
	    };
	    return MeanColumn;
	}(CompositeNumberColumn));
	exports.MeanColumn = MeanColumn;
	var MultiLevelCompositeColumn = (function (_super) {
	    __extends(MultiLevelCompositeColumn, _super);
	    function MultiLevelCompositeColumn(id, desc) {
	        _super.call(this, id, desc);
	        /**
	         * whether this stack column is collapsed i.e. just looks like an ordinary number column
	         * @type {boolean}
	         * @private
	         */
	        this.collapsed = false;
	        var that = this;
	        this.adaptChange = function (old, new_) {
	            that.adaptWidthChange(this.source, old, new_);
	        };
	    }
	    MultiLevelCompositeColumn.prototype.createEventList = function () {
	        return _super.prototype.createEventList.call(this).concat(['collapseChanged']);
	    };
	    MultiLevelCompositeColumn.prototype.setCollapsed = function (value) {
	        if (this.collapsed === value) {
	            return;
	        }
	        this.fire(['collapseChanged', 'dirtyHeader', 'dirtyValues', 'dirty'], this.collapsed, this.collapsed = value);
	    };
	    MultiLevelCompositeColumn.prototype.getCollapsed = function () {
	        return this.collapsed;
	    };
	    MultiLevelCompositeColumn.prototype.dump = function (toDescRef) {
	        var r = _super.prototype.dump.call(this, toDescRef);
	        r.collapsed = this.collapsed;
	        return r;
	    };
	    MultiLevelCompositeColumn.prototype.restore = function (dump, factory) {
	        this.collapsed = dump.collapsed === true;
	        _super.prototype.restore.call(this, dump, factory);
	    };
	    MultiLevelCompositeColumn.prototype.flatten = function (r, offset, levelsToGo, padding) {
	        if (levelsToGo === void 0) { levelsToGo = 0; }
	        if (padding === void 0) { padding = 0; }
	        return StackColumn.prototype.flatten.call(this, r, offset, levelsToGo, padding);
	    };
	    /**
	     * inserts a column at a the given position
	     * @param col
	     * @param index
	     * @param weight
	     * @returns {any}
	     */
	    MultiLevelCompositeColumn.prototype.insert = function (col, index) {
	        col.on('widthChanged.stack', this.adaptChange);
	        //increase my width
	        _super.prototype.setWidth.call(this, this.length === 0 ? col.getWidth() : (this.getWidth() + col.getWidth()));
	        return _super.prototype.insert.call(this, col, index);
	    };
	    /**
	     * adapts weights according to an own width change
	     * @param col
	     * @param old
	     * @param new_
	     */
	    MultiLevelCompositeColumn.prototype.adaptWidthChange = function (col, old, new_) {
	        if (old === new_) {
	            return;
	        }
	        _super.prototype.setWidth.call(this, this.getWidth() + (new_ - old));
	    };
	    MultiLevelCompositeColumn.prototype.removeImpl = function (child) {
	        child.on('widthChanged.stack', null);
	        _super.prototype.setWidth.call(this, this.length === 1 ? 100 : this.getWidth() - child.getWidth());
	        return _super.prototype.removeImpl.call(this, child);
	    };
	    MultiLevelCompositeColumn.prototype.setWidth = function (value) {
	        var factor = this.length / this.getWidth();
	        this._children.forEach(function (child) {
	            //disable since we change it
	            child.setWidthImpl(child.getWidth() * factor);
	        });
	        _super.prototype.setWidth.call(this, value);
	    };
	    return MultiLevelCompositeColumn;
	}(CompositeColumn));
	exports.MultiLevelCompositeColumn = MultiLevelCompositeColumn;
	/**
	 * a nested column is a composite column where the sorting order is determined by the nested ordering of the children
	 * i.e., sort by the first child if equal sort by the second child,...
	 */
	var NestedColumn = (function (_super) {
	    __extends(NestedColumn, _super);
	    function NestedColumn(id, desc) {
	        _super.call(this, id, desc);
	    }
	    /**
	     * factory for creating a description creating a mean column
	     * @param label
	     * @returns {{type: string, label: string}}
	     */
	    NestedColumn.desc = function (label) {
	        if (label === void 0) { label = 'Nested'; }
	        return { type: 'nested', label: label };
	    };
	    NestedColumn.prototype.compare = function (a, b) {
	        var c = this.children;
	        for (var _i = 0, c_1 = c; _i < c_1.length; _i++) {
	            var ci = c_1[_i];
	            var ci_result = ci.compare(a, b);
	            if (ci_result !== 0) {
	                return ci_result;
	            }
	        }
	        return 0;
	    };
	    NestedColumn.prototype.getLabel = function (row) {
	        return this.children.map(function (d) { return d.getLabel(row); }).join(';');
	    };
	    NestedColumn.prototype.getValue = function (row) {
	        return this.children.map(function (d) { return d.getValue(row); }).join(';');
	    };
	    return NestedColumn;
	}(MultiLevelCompositeColumn));
	exports.NestedColumn = NestedColumn;
	var ScriptColumn = (function (_super) {
	    __extends(ScriptColumn, _super);
	    function ScriptColumn(id, desc) {
	        _super.call(this, id, desc);
	        this.script = ScriptColumn.DEFAULT_SCRIPT;
	        this.f = null;
	        this.script = desc.script || this.script;
	    }
	    /**
	     * factory for creating a description creating a mean column
	     * @param label
	     * @returns {{type: string, label: string}}
	     */
	    ScriptColumn.desc = function (label) {
	        if (label === void 0) { label = 'script'; }
	        return { type: 'script', label: label, script: ScriptColumn.DEFAULT_SCRIPT };
	    };
	    ScriptColumn.prototype.createEventList = function () {
	        return _super.prototype.createEventList.call(this).concat(['scriptChanged']);
	    };
	    ScriptColumn.prototype.setScript = function (script) {
	        if (this.script === script) {
	            return;
	        }
	        this.f = null;
	        this.fire(['scriptChanged', 'dirtyValues', 'dirty'], this.script, this.script = script);
	    };
	    ScriptColumn.prototype.getScript = function () {
	        return this.script;
	    };
	    ScriptColumn.prototype.dump = function (toDescRef) {
	        var r = _super.prototype.dump.call(this, toDescRef);
	        r.script = this.script;
	        return r;
	    };
	    ScriptColumn.prototype.restore = function (dump, factory) {
	        this.script = dump.script || this.script;
	        _super.prototype.restore.call(this, dump, factory);
	    };
	    ScriptColumn.prototype.compute = function (row) {
	        if (this.f == null) {
	            this.f = new Function('children', 'values', this.script);
	        }
	        return this.f.call(this, this._children, this._children.map(function (d) { return d.getValue(row); }));
	    };
	    ScriptColumn.DEFAULT_SCRIPT = 'return d3.max(values)';
	    return ScriptColumn;
	}(CompositeColumn));
	exports.ScriptColumn = ScriptColumn;
	/**
	 * a rank column
	 */
	var RankColumn = (function (_super) {
	    __extends(RankColumn, _super);
	    function RankColumn(id, desc) {
	        _super.call(this, id, desc);
	        this.setWidthImpl(50);
	    }
	    /**
	     * factory for creating a description creating a rank column
	     * @param label
	     * @returns {{type: string, label: string}}
	     */
	    RankColumn.desc = function (label) {
	        if (label === void 0) { label = 'Rank'; }
	        return { type: 'rank', label: label };
	    };
	    return RankColumn;
	}(ValueColumn));
	exports.RankColumn = RankColumn;
	/**
	 * a ranking
	 */
	var Ranking = (function (_super) {
	    __extends(Ranking, _super);
	    function Ranking(id) {
	        var _this = this;
	        _super.call(this);
	        this.id = id;
	        /**
	         * the current sort criteria
	         * @type {null}
	         * @private
	         */
	        this.sortColumn = null;
	        /**
	         * ascending or descending order
	         * @type {boolean}
	         */
	        this.ascending = false;
	        /**
	         * columns of this ranking
	         * @type {Array}
	         * @private
	         */
	        this.columns = [];
	        this.comparator = function (a, b) {
	            if (_this.sortColumn === null) {
	                return 0;
	            }
	            var r = _this.sortColumn.compare(a, b);
	            return _this.ascending ? r : -r;
	        };
	        this.dirtyOrder = function () {
	            _this.fire(['dirtyOrder', 'dirtyValues', 'dirty'], _this.getSortCriteria());
	        };
	        /**
	         * the current ordering as an sorted array of indices
	         * @type {Array}
	         */
	        this.order = [];
	        this.id = fixCSS(id);
	    }
	    Ranking.prototype.createEventList = function () {
	        return _super.prototype.createEventList.call(this).concat(['widthChanged', 'filterChanged', 'labelChanged', 'compressChanged', 'addColumn', 'removeColumn', 'dirty', 'dirtyHeader', 'dirtyValues', 'sortCriteriaChanged', 'dirtyOrder', 'orderChanged']);
	    };
	    Ranking.prototype.assignNewId = function (idGenerator) {
	        this.id = fixCSS(idGenerator());
	        this.columns.forEach(function (c) { return c.assignNewId(idGenerator); });
	    };
	    Ranking.prototype.setOrder = function (order) {
	        this.fire(['orderChanged', 'dirtyValues', 'dirty'], this.order, this.order = order);
	    };
	    Ranking.prototype.getOrder = function () {
	        return this.order;
	    };
	    Ranking.prototype.dump = function (toDescRef) {
	        var r = {};
	        r.columns = this.columns.map(function (d) { return d.dump(toDescRef); });
	        r.sortColumn = {
	            asc: this.ascending
	        };
	        if (this.sortColumn) {
	            r.sortColumn.sortBy = this.sortColumn.id; //store the index not the object
	        }
	        return r;
	    };
	    Ranking.prototype.restore = function (dump, factory) {
	        var _this = this;
	        this.clear();
	        dump.columns.map(function (child) {
	            var c = factory(child);
	            if (c) {
	                _this.push(c);
	            }
	        });
	        if (dump.sortColumn) {
	            this.ascending = dump.sortColumn.asc;
	            if (dump.sortColumn.sortBy) {
	                var help = this.columns.filter(function (d) { return d.id === dump.sortColumn.sortBy; });
	                this.sortBy(help.length === 0 ? null : help[0], dump.sortColumn.asc);
	            }
	        }
	    };
	    Ranking.prototype.flatten = function (r, offset, levelsToGo, padding) {
	        if (levelsToGo === void 0) { levelsToGo = 0; }
	        if (padding === void 0) { padding = 0; }
	        var acc = offset; // + this.getWidth() + padding;
	        if (levelsToGo > 0 || levelsToGo <= Column.FLAT_ALL_COLUMNS) {
	            this.columns.forEach(function (c) {
	                if (!c.isHidden() || levelsToGo <= Column.FLAT_ALL_COLUMNS) {
	                    acc += c.flatten(r, acc, levelsToGo - 1, padding) + padding;
	                }
	            });
	        }
	        return acc - offset;
	    };
	    Ranking.prototype.getSortCriteria = function () {
	        return {
	            col: this.sortColumn,
	            asc: this.ascending
	        };
	    };
	    Ranking.prototype.toggleSorting = function (col) {
	        if (this.sortColumn === col) {
	            return this.sortBy(col, !this.ascending);
	        }
	        return this.sortBy(col);
	    };
	    Ranking.prototype.setSortCriteria = function (value) {
	        return this.sortBy(value.col, value.asc);
	    };
	    Ranking.prototype.sortBy = function (col, ascending) {
	        if (ascending === void 0) { ascending = false; }
	        if (col !== null && col.findMyRanker() !== this) {
	            return false; //not one of mine
	        }
	        if (this.sortColumn === col && this.ascending === ascending) {
	            return true; //already in this order
	        }
	        if (this.sortColumn) {
	            this.sortColumn.on('dirtyValues.order', null);
	        }
	        var bak = this.getSortCriteria();
	        this.sortColumn = col;
	        if (this.sortColumn) {
	            this.sortColumn.on('dirtyValues.order', this.dirtyOrder);
	        }
	        this.ascending = ascending;
	        this.fire(['sortCriteriaChanged', 'dirtyOrder', 'dirtyHeader', 'dirtyValues', 'dirty'], bak, this.getSortCriteria());
	        return true;
	    };
	    Object.defineProperty(Ranking.prototype, "children", {
	        get: function () {
	            return this.columns.slice();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Ranking.prototype, "length", {
	        get: function () {
	            return this.columns.length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Ranking.prototype.insert = function (col, index) {
	        if (index === void 0) { index = this.columns.length; }
	        this.columns.splice(index, 0, col);
	        col.parent = this;
	        this.forward(col, 'dirtyValues.ranking', 'dirtyHeader.ranking', 'dirty.ranking', 'filterChanged.ranking');
	        col.on('filterChanged.order', this.dirtyOrder);
	        this.fire(['addColumn', 'dirtyHeader', 'dirtyValues', 'dirty'], col, index);
	        if (this.sortColumn === null && !(col instanceof RankColumn || col instanceof SelectionColumn || col instanceof DummyColumn)) {
	            this.sortBy(col, col instanceof StringColumn);
	        }
	        return col;
	    };
	    Object.defineProperty(Ranking.prototype, "fqpath", {
	        get: function () {
	            return '';
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Ranking.prototype.findByPath = function (fqpath) {
	        var p = this;
	        var indices = fqpath.split('@').map(Number).slice(1); //ignore the first entry = ranking
	        while (indices.length > 0) {
	            var i = indices.shift();
	            p = p.at(i);
	        }
	        return p;
	    };
	    Ranking.prototype.indexOf = function (col) {
	        return this.columns.indexOf(col);
	    };
	    Ranking.prototype.at = function (index) {
	        return this.columns[index];
	    };
	    Ranking.prototype.insertAfter = function (col, ref) {
	        var i = this.columns.indexOf(ref);
	        if (i < 0) {
	            return null;
	        }
	        return this.insert(col, i + 1);
	    };
	    Ranking.prototype.push = function (col) {
	        return this.insert(col);
	    };
	    Ranking.prototype.remove = function (col) {
	        var i = this.columns.indexOf(col);
	        if (i < 0) {
	            return false;
	        }
	        this.unforward(col, 'dirtyValues.ranking', 'dirtyHeader.ranking', 'dirty.ranking', 'filterChanged.ranking');
	        if (this.sortColumn === col) {
	            var next = this.columns.filter(function (d) { return d !== col && !(d instanceof SelectionColumn) && !(d instanceof RankColumn); })[0];
	            this.sortBy(next ? next : null);
	        }
	        col.parent = null;
	        this.columns.splice(i, 1);
	        this.fire(['removeColumn', 'dirtyHeader', 'dirtyValues', 'dirty'], col, i);
	        return true;
	    };
	    Ranking.prototype.clear = function () {
	        var _this = this;
	        if (this.columns.length === 0) {
	            return;
	        }
	        this.sortColumn = null;
	        this.columns.forEach(function (col) {
	            _this.unforward(col, 'dirtyValues.ranking', 'dirtyHeader.ranking', 'dirty.ranking', 'filterChanged.ranking');
	            col.parent = null;
	        });
	        this.columns.length = 0;
	        this.fire(['removeColumn', 'dirtyHeader', 'dirtyValues', 'dirty'], null);
	    };
	    Object.defineProperty(Ranking.prototype, "flatColumns", {
	        get: function () {
	            var r = [];
	            this.flatten(r, 0, Column.FLAT_ALL_COLUMNS);
	            return r.map(function (d) { return d.col; });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Ranking.prototype.find = function (id_or_filter) {
	        var filter = typeof (id_or_filter) === 'string' ? function (col) { return col.id === id_or_filter; } : id_or_filter;
	        var r = this.flatColumns;
	        for (var i = 0; i < r.length; ++i) {
	            if (filter(r[i])) {
	                return r[i];
	            }
	        }
	        return null;
	    };
	    /**
	     * converts the sorting criteria to a json compatible notation for transferring it to the server
	     * @param toId
	     * @return {any}
	     */
	    Ranking.prototype.toSortingDesc = function (toId) {
	        //TODO describe also all the filter settings
	        var resolve = function (s) {
	            if (s === null) {
	                return null;
	            }
	            if (s instanceof StackColumn) {
	                var w = s.getWeights();
	                return s.children.map(function (child, i) {
	                    return {
	                        weight: w[i],
	                        id: resolve(child)
	                    };
	                });
	            }
	            return toId(s.desc);
	        };
	        var id = resolve(this.sortColumn);
	        if (id === null) {
	            return null;
	        }
	        return {
	            id: id,
	            asc: this.ascending
	        };
	    };
	    Ranking.prototype.isFiltered = function () {
	        return this.columns.some(function (d) { return d.isFiltered(); });
	    };
	    Ranking.prototype.filter = function (row) {
	        return this.columns.every(function (d) { return d.filter(row); });
	    };
	    Ranking.prototype.findMyRanker = function () {
	        return this;
	    };
	    Object.defineProperty(Ranking.prototype, "fqid", {
	        get: function () {
	            return this.id;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Ranking;
	}(utils.AEventDispatcher));
	exports.Ranking = Ranking;
	/**
	 * defines a new column type
	 * @param name
	 * @param functions
	 * @returns {CustomColumn}
	 */
	function defineColumn(name, functions) {
	    if (functions === void 0) { functions = {}; }
	    var CustomColumn = (function (_super) {
	        __extends(CustomColumn, _super);
	        function CustomColumn(id, desc) {
	            _super.call(this, id, desc);
	            if (typeof (this.init) === 'function') {
	                this.init.apply(this, [].slice.apply(arguments));
	            }
	        }
	        return CustomColumn;
	    }(ValueColumn));
	    CustomColumn.prototype.toString = function () { return name; };
	    CustomColumn.prototype = utils.merge(CustomColumn.prototype, functions);
	    return CustomColumn;
	}
	exports.defineColumn = defineColumn;
	/**
	 * utility for creating a stacked column description
	 * @type {function(string=): {type: string, label: string}}
	 */
	exports.createStackDesc = StackColumn.desc;
	exports.createRankDesc = RankColumn.desc;
	exports.createSelectionDesc = SelectionColumn.desc;
	exports.createMinDesc = MinColumn.desc;
	exports.createMaxDesc = MaxColumn.desc;
	exports.createMeanDesc = MeanColumn.desc;
	exports.createNestedDesc = NestedColumn.desc;
	exports.createScriptDesc = ScriptColumn.desc;
	/**
	 * utility for creating an action description with optional label
	 * @param label
	 * @returns {{type: string, label: string}}
	 */
	function createActionDesc(label) {
	    if (label === void 0) { label = 'actions'; }
	    return { type: 'actions', label: label };
	}
	exports.createActionDesc = createActionDesc;
	/**
	 * a map of all known column types
	 */
	function models() {
	    return {
	        number: NumberColumn,
	        string: StringColumn,
	        link: LinkColumn,
	        stack: StackColumn,
	        rank: RankColumn,
	        boolean: BooleanColumn,
	        categorical: CategoricalColumn,
	        ordinal: CategoricalNumberColumn,
	        actions: DummyColumn,
	        annotate: AnnotateColumn,
	        selection: SelectionColumn,
	        max: MaxColumn,
	        min: MinColumn,
	        mean: MinColumn,
	        script: ScriptColumn,
	        nested: NestedColumn
	    };
	}
	exports.models = models;
	//# sourceMappingURL=model.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function() {
	  var d3 = {
	    version: "3.5.17"
	  };
	  var d3_arraySlice = [].slice, d3_array = function(list) {
	    return d3_arraySlice.call(list);
	  };
	  var d3_document = this.document;
	  function d3_documentElement(node) {
	    return node && (node.ownerDocument || node.document || node).documentElement;
	  }
	  function d3_window(node) {
	    return node && (node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView);
	  }
	  if (d3_document) {
	    try {
	      d3_array(d3_document.documentElement.childNodes)[0].nodeType;
	    } catch (e) {
	      d3_array = function(list) {
	        var i = list.length, array = new Array(i);
	        while (i--) array[i] = list[i];
	        return array;
	      };
	    }
	  }
	  if (!Date.now) Date.now = function() {
	    return +new Date();
	  };
	  if (d3_document) {
	    try {
	      d3_document.createElement("DIV").style.setProperty("opacity", 0, "");
	    } catch (error) {
	      var d3_element_prototype = this.Element.prototype, d3_element_setAttribute = d3_element_prototype.setAttribute, d3_element_setAttributeNS = d3_element_prototype.setAttributeNS, d3_style_prototype = this.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
	      d3_element_prototype.setAttribute = function(name, value) {
	        d3_element_setAttribute.call(this, name, value + "");
	      };
	      d3_element_prototype.setAttributeNS = function(space, local, value) {
	        d3_element_setAttributeNS.call(this, space, local, value + "");
	      };
	      d3_style_prototype.setProperty = function(name, value, priority) {
	        d3_style_setProperty.call(this, name, value + "", priority);
	      };
	    }
	  }
	  d3.ascending = d3_ascending;
	  function d3_ascending(a, b) {
	    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	  }
	  d3.descending = function(a, b) {
	    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
	  };
	  d3.min = function(array, f) {
	    var i = -1, n = array.length, a, b;
	    if (arguments.length === 1) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) {
	        a = b;
	        break;
	      }
	      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
	    } else {
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
	        a = b;
	        break;
	      }
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
	    }
	    return a;
	  };
	  d3.max = function(array, f) {
	    var i = -1, n = array.length, a, b;
	    if (arguments.length === 1) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) {
	        a = b;
	        break;
	      }
	      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
	    } else {
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
	        a = b;
	        break;
	      }
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
	    }
	    return a;
	  };
	  d3.extent = function(array, f) {
	    var i = -1, n = array.length, a, b, c;
	    if (arguments.length === 1) {
	      while (++i < n) if ((b = array[i]) != null && b >= b) {
	        a = c = b;
	        break;
	      }
	      while (++i < n) if ((b = array[i]) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    } else {
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b >= b) {
	        a = c = b;
	        break;
	      }
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    }
	    return [ a, c ];
	  };
	  function d3_number(x) {
	    return x === null ? NaN : +x;
	  }
	  function d3_numeric(x) {
	    return !isNaN(x);
	  }
	  d3.sum = function(array, f) {
	    var s = 0, n = array.length, a, i = -1;
	    if (arguments.length === 1) {
	      while (++i < n) if (d3_numeric(a = +array[i])) s += a;
	    } else {
	      while (++i < n) if (d3_numeric(a = +f.call(array, array[i], i))) s += a;
	    }
	    return s;
	  };
	  d3.mean = function(array, f) {
	    var s = 0, n = array.length, a, i = -1, j = n;
	    if (arguments.length === 1) {
	      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) s += a; else --j;
	    } else {
	      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) s += a; else --j;
	    }
	    if (j) return s / j;
	  };
	  d3.quantile = function(values, p) {
	    var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
	    return e ? v + e * (values[h] - v) : v;
	  };
	  d3.median = function(array, f) {
	    var numbers = [], n = array.length, a, i = -1;
	    if (arguments.length === 1) {
	      while (++i < n) if (d3_numeric(a = d3_number(array[i]))) numbers.push(a);
	    } else {
	      while (++i < n) if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) numbers.push(a);
	    }
	    if (numbers.length) return d3.quantile(numbers.sort(d3_ascending), .5);
	  };
	  d3.variance = function(array, f) {
	    var n = array.length, m = 0, a, d, s = 0, i = -1, j = 0;
	    if (arguments.length === 1) {
	      while (++i < n) {
	        if (d3_numeric(a = d3_number(array[i]))) {
	          d = a - m;
	          m += d / ++j;
	          s += d * (a - m);
	        }
	      }
	    } else {
	      while (++i < n) {
	        if (d3_numeric(a = d3_number(f.call(array, array[i], i)))) {
	          d = a - m;
	          m += d / ++j;
	          s += d * (a - m);
	        }
	      }
	    }
	    if (j > 1) return s / (j - 1);
	  };
	  d3.deviation = function() {
	    var v = d3.variance.apply(this, arguments);
	    return v ? Math.sqrt(v) : v;
	  };
	  function d3_bisector(compare) {
	    return {
	      left: function(a, x, lo, hi) {
	        if (arguments.length < 3) lo = 0;
	        if (arguments.length < 4) hi = a.length;
	        while (lo < hi) {
	          var mid = lo + hi >>> 1;
	          if (compare(a[mid], x) < 0) lo = mid + 1; else hi = mid;
	        }
	        return lo;
	      },
	      right: function(a, x, lo, hi) {
	        if (arguments.length < 3) lo = 0;
	        if (arguments.length < 4) hi = a.length;
	        while (lo < hi) {
	          var mid = lo + hi >>> 1;
	          if (compare(a[mid], x) > 0) hi = mid; else lo = mid + 1;
	        }
	        return lo;
	      }
	    };
	  }
	  var d3_bisect = d3_bisector(d3_ascending);
	  d3.bisectLeft = d3_bisect.left;
	  d3.bisect = d3.bisectRight = d3_bisect.right;
	  d3.bisector = function(f) {
	    return d3_bisector(f.length === 1 ? function(d, x) {
	      return d3_ascending(f(d), x);
	    } : f);
	  };
	  d3.shuffle = function(array, i0, i1) {
	    if ((m = arguments.length) < 3) {
	      i1 = array.length;
	      if (m < 2) i0 = 0;
	    }
	    var m = i1 - i0, t, i;
	    while (m) {
	      i = Math.random() * m-- | 0;
	      t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
	    }
	    return array;
	  };
	  d3.permute = function(array, indexes) {
	    var i = indexes.length, permutes = new Array(i);
	    while (i--) permutes[i] = array[indexes[i]];
	    return permutes;
	  };
	  d3.pairs = function(array) {
	    var i = 0, n = array.length - 1, p0, p1 = array[0], pairs = new Array(n < 0 ? 0 : n);
	    while (i < n) pairs[i] = [ p0 = p1, p1 = array[++i] ];
	    return pairs;
	  };
	  d3.transpose = function(matrix) {
	    if (!(n = matrix.length)) return [];
	    for (var i = -1, m = d3.min(matrix, d3_transposeLength), transpose = new Array(m); ++i < m; ) {
	      for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n; ) {
	        row[j] = matrix[j][i];
	      }
	    }
	    return transpose;
	  };
	  function d3_transposeLength(d) {
	    return d.length;
	  }
	  d3.zip = function() {
	    return d3.transpose(arguments);
	  };
	  d3.keys = function(map) {
	    var keys = [];
	    for (var key in map) keys.push(key);
	    return keys;
	  };
	  d3.values = function(map) {
	    var values = [];
	    for (var key in map) values.push(map[key]);
	    return values;
	  };
	  d3.entries = function(map) {
	    var entries = [];
	    for (var key in map) entries.push({
	      key: key,
	      value: map[key]
	    });
	    return entries;
	  };
	  d3.merge = function(arrays) {
	    var n = arrays.length, m, i = -1, j = 0, merged, array;
	    while (++i < n) j += arrays[i].length;
	    merged = new Array(j);
	    while (--n >= 0) {
	      array = arrays[n];
	      m = array.length;
	      while (--m >= 0) {
	        merged[--j] = array[m];
	      }
	    }
	    return merged;
	  };
	  var abs = Math.abs;
	  d3.range = function(start, stop, step) {
	    if (arguments.length < 3) {
	      step = 1;
	      if (arguments.length < 2) {
	        stop = start;
	        start = 0;
	      }
	    }
	    if ((stop - start) / step === Infinity) throw new Error("infinite range");
	    var range = [], k = d3_range_integerScale(abs(step)), i = -1, j;
	    start *= k, stop *= k, step *= k;
	    if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k); else while ((j = start + step * ++i) < stop) range.push(j / k);
	    return range;
	  };
	  function d3_range_integerScale(x) {
	    var k = 1;
	    while (x * k % 1) k *= 10;
	    return k;
	  }
	  function d3_class(ctor, properties) {
	    for (var key in properties) {
	      Object.defineProperty(ctor.prototype, key, {
	        value: properties[key],
	        enumerable: false
	      });
	    }
	  }
	  d3.map = function(object, f) {
	    var map = new d3_Map();
	    if (object instanceof d3_Map) {
	      object.forEach(function(key, value) {
	        map.set(key, value);
	      });
	    } else if (Array.isArray(object)) {
	      var i = -1, n = object.length, o;
	      if (arguments.length === 1) while (++i < n) map.set(i, object[i]); else while (++i < n) map.set(f.call(object, o = object[i], i), o);
	    } else {
	      for (var key in object) map.set(key, object[key]);
	    }
	    return map;
	  };
	  function d3_Map() {
	    this._ = Object.create(null);
	  }
	  var d3_map_proto = "__proto__", d3_map_zero = "\x00";
	  d3_class(d3_Map, {
	    has: d3_map_has,
	    get: function(key) {
	      return this._[d3_map_escape(key)];
	    },
	    set: function(key, value) {
	      return this._[d3_map_escape(key)] = value;
	    },
	    remove: d3_map_remove,
	    keys: d3_map_keys,
	    values: function() {
	      var values = [];
	      for (var key in this._) values.push(this._[key]);
	      return values;
	    },
	    entries: function() {
	      var entries = [];
	      for (var key in this._) entries.push({
	        key: d3_map_unescape(key),
	        value: this._[key]
	      });
	      return entries;
	    },
	    size: d3_map_size,
	    empty: d3_map_empty,
	    forEach: function(f) {
	      for (var key in this._) f.call(this, d3_map_unescape(key), this._[key]);
	    }
	  });
	  function d3_map_escape(key) {
	    return (key += "") === d3_map_proto || key[0] === d3_map_zero ? d3_map_zero + key : key;
	  }
	  function d3_map_unescape(key) {
	    return (key += "")[0] === d3_map_zero ? key.slice(1) : key;
	  }
	  function d3_map_has(key) {
	    return d3_map_escape(key) in this._;
	  }
	  function d3_map_remove(key) {
	    return (key = d3_map_escape(key)) in this._ && delete this._[key];
	  }
	  function d3_map_keys() {
	    var keys = [];
	    for (var key in this._) keys.push(d3_map_unescape(key));
	    return keys;
	  }
	  function d3_map_size() {
	    var size = 0;
	    for (var key in this._) ++size;
	    return size;
	  }
	  function d3_map_empty() {
	    for (var key in this._) return false;
	    return true;
	  }
	  d3.nest = function() {
	    var nest = {}, keys = [], sortKeys = [], sortValues, rollup;
	    function map(mapType, array, depth) {
	      if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
	      var i = -1, n = array.length, key = keys[depth++], keyValue, object, setter, valuesByKey = new d3_Map(), values;
	      while (++i < n) {
	        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
	          values.push(object);
	        } else {
	          valuesByKey.set(keyValue, [ object ]);
	        }
	      }
	      if (mapType) {
	        object = mapType();
	        setter = function(keyValue, values) {
	          object.set(keyValue, map(mapType, values, depth));
	        };
	      } else {
	        object = {};
	        setter = function(keyValue, values) {
	          object[keyValue] = map(mapType, values, depth);
	        };
	      }
	      valuesByKey.forEach(setter);
	      return object;
	    }
	    function entries(map, depth) {
	      if (depth >= keys.length) return map;
	      var array = [], sortKey = sortKeys[depth++];
	      map.forEach(function(key, keyMap) {
	        array.push({
	          key: key,
	          values: entries(keyMap, depth)
	        });
	      });
	      return sortKey ? array.sort(function(a, b) {
	        return sortKey(a.key, b.key);
	      }) : array;
	    }
	    nest.map = function(array, mapType) {
	      return map(mapType, array, 0);
	    };
	    nest.entries = function(array) {
	      return entries(map(d3.map, array, 0), 0);
	    };
	    nest.key = function(d) {
	      keys.push(d);
	      return nest;
	    };
	    nest.sortKeys = function(order) {
	      sortKeys[keys.length - 1] = order;
	      return nest;
	    };
	    nest.sortValues = function(order) {
	      sortValues = order;
	      return nest;
	    };
	    nest.rollup = function(f) {
	      rollup = f;
	      return nest;
	    };
	    return nest;
	  };
	  d3.set = function(array) {
	    var set = new d3_Set();
	    if (array) for (var i = 0, n = array.length; i < n; ++i) set.add(array[i]);
	    return set;
	  };
	  function d3_Set() {
	    this._ = Object.create(null);
	  }
	  d3_class(d3_Set, {
	    has: d3_map_has,
	    add: function(key) {
	      this._[d3_map_escape(key += "")] = true;
	      return key;
	    },
	    remove: d3_map_remove,
	    values: d3_map_keys,
	    size: d3_map_size,
	    empty: d3_map_empty,
	    forEach: function(f) {
	      for (var key in this._) f.call(this, d3_map_unescape(key));
	    }
	  });
	  d3.behavior = {};
	  function d3_identity(d) {
	    return d;
	  }
	  d3.rebind = function(target, source) {
	    var i = 1, n = arguments.length, method;
	    while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
	    return target;
	  };
	  function d3_rebind(target, source, method) {
	    return function() {
	      var value = method.apply(source, arguments);
	      return value === source ? target : value;
	    };
	  }
	  function d3_vendorSymbol(object, name) {
	    if (name in object) return name;
	    name = name.charAt(0).toUpperCase() + name.slice(1);
	    for (var i = 0, n = d3_vendorPrefixes.length; i < n; ++i) {
	      var prefixName = d3_vendorPrefixes[i] + name;
	      if (prefixName in object) return prefixName;
	    }
	  }
	  var d3_vendorPrefixes = [ "webkit", "ms", "moz", "Moz", "o", "O" ];
	  function d3_noop() {}
	  d3.dispatch = function() {
	    var dispatch = new d3_dispatch(), i = -1, n = arguments.length;
	    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
	    return dispatch;
	  };
	  function d3_dispatch() {}
	  d3_dispatch.prototype.on = function(type, listener) {
	    var i = type.indexOf("."), name = "";
	    if (i >= 0) {
	      name = type.slice(i + 1);
	      type = type.slice(0, i);
	    }
	    if (type) return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
	    if (arguments.length === 2) {
	      if (listener == null) for (type in this) {
	        if (this.hasOwnProperty(type)) this[type].on(name, null);
	      }
	      return this;
	    }
	  };
	  function d3_dispatch_event(dispatch) {
	    var listeners = [], listenerByName = new d3_Map();
	    function event() {
	      var z = listeners, i = -1, n = z.length, l;
	      while (++i < n) if (l = z[i].on) l.apply(this, arguments);
	      return dispatch;
	    }
	    event.on = function(name, listener) {
	      var l = listenerByName.get(name), i;
	      if (arguments.length < 2) return l && l.on;
	      if (l) {
	        l.on = null;
	        listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
	        listenerByName.remove(name);
	      }
	      if (listener) listeners.push(listenerByName.set(name, {
	        on: listener
	      }));
	      return dispatch;
	    };
	    return event;
	  }
	  d3.event = null;
	  function d3_eventPreventDefault() {
	    d3.event.preventDefault();
	  }
	  function d3_eventSource() {
	    var e = d3.event, s;
	    while (s = e.sourceEvent) e = s;
	    return e;
	  }
	  function d3_eventDispatch(target) {
	    var dispatch = new d3_dispatch(), i = 0, n = arguments.length;
	    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
	    dispatch.of = function(thiz, argumentz) {
	      return function(e1) {
	        try {
	          var e0 = e1.sourceEvent = d3.event;
	          e1.target = target;
	          d3.event = e1;
	          dispatch[e1.type].apply(thiz, argumentz);
	        } finally {
	          d3.event = e0;
	        }
	      };
	    };
	    return dispatch;
	  }
	  d3.requote = function(s) {
	    return s.replace(d3_requote_re, "\\$&");
	  };
	  var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
	  var d3_subclass = {}.__proto__ ? function(object, prototype) {
	    object.__proto__ = prototype;
	  } : function(object, prototype) {
	    for (var property in prototype) object[property] = prototype[property];
	  };
	  function d3_selection(groups) {
	    d3_subclass(groups, d3_selectionPrototype);
	    return groups;
	  }
	  var d3_select = function(s, n) {
	    return n.querySelector(s);
	  }, d3_selectAll = function(s, n) {
	    return n.querySelectorAll(s);
	  }, d3_selectMatches = function(n, s) {
	    var d3_selectMatcher = n.matches || n[d3_vendorSymbol(n, "matchesSelector")];
	    d3_selectMatches = function(n, s) {
	      return d3_selectMatcher.call(n, s);
	    };
	    return d3_selectMatches(n, s);
	  };
	  if (typeof Sizzle === "function") {
	    d3_select = function(s, n) {
	      return Sizzle(s, n)[0] || null;
	    };
	    d3_selectAll = Sizzle;
	    d3_selectMatches = Sizzle.matchesSelector;
	  }
	  d3.selection = function() {
	    return d3.select(d3_document.documentElement);
	  };
	  var d3_selectionPrototype = d3.selection.prototype = [];
	  d3_selectionPrototype.select = function(selector) {
	    var subgroups = [], subgroup, subnode, group, node;
	    selector = d3_selection_selector(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      subgroups.push(subgroup = []);
	      subgroup.parentNode = (group = this[j]).parentNode;
	      for (var i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          subgroup.push(subnode = selector.call(node, node.__data__, i, j));
	          if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
	        } else {
	          subgroup.push(null);
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  function d3_selection_selector(selector) {
	    return typeof selector === "function" ? selector : function() {
	      return d3_select(selector, this);
	    };
	  }
	  d3_selectionPrototype.selectAll = function(selector) {
	    var subgroups = [], subgroup, node;
	    selector = d3_selection_selectorAll(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
	          subgroup.parentNode = node;
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  function d3_selection_selectorAll(selector) {
	    return typeof selector === "function" ? selector : function() {
	      return d3_selectAll(selector, this);
	    };
	  }
	  var d3_nsXhtml = "http://www.w3.org/1999/xhtml";
	  var d3_nsPrefix = {
	    svg: "http://www.w3.org/2000/svg",
	    xhtml: d3_nsXhtml,
	    xlink: "http://www.w3.org/1999/xlink",
	    xml: "http://www.w3.org/XML/1998/namespace",
	    xmlns: "http://www.w3.org/2000/xmlns/"
	  };
	  d3.ns = {
	    prefix: d3_nsPrefix,
	    qualify: function(name) {
	      var i = name.indexOf(":"), prefix = name;
	      if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
	      return d3_nsPrefix.hasOwnProperty(prefix) ? {
	        space: d3_nsPrefix[prefix],
	        local: name
	      } : name;
	    }
	  };
	  d3_selectionPrototype.attr = function(name, value) {
	    if (arguments.length < 2) {
	      if (typeof name === "string") {
	        var node = this.node();
	        name = d3.ns.qualify(name);
	        return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
	      }
	      for (value in name) this.each(d3_selection_attr(value, name[value]));
	      return this;
	    }
	    return this.each(d3_selection_attr(name, value));
	  };
	  function d3_selection_attr(name, value) {
	    name = d3.ns.qualify(name);
	    function attrNull() {
	      this.removeAttribute(name);
	    }
	    function attrNullNS() {
	      this.removeAttributeNS(name.space, name.local);
	    }
	    function attrConstant() {
	      this.setAttribute(name, value);
	    }
	    function attrConstantNS() {
	      this.setAttributeNS(name.space, name.local, value);
	    }
	    function attrFunction() {
	      var x = value.apply(this, arguments);
	      if (x == null) this.removeAttribute(name); else this.setAttribute(name, x);
	    }
	    function attrFunctionNS() {
	      var x = value.apply(this, arguments);
	      if (x == null) this.removeAttributeNS(name.space, name.local); else this.setAttributeNS(name.space, name.local, x);
	    }
	    return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
	  }
	  function d3_collapse(s) {
	    return s.trim().replace(/\s+/g, " ");
	  }
	  d3_selectionPrototype.classed = function(name, value) {
	    if (arguments.length < 2) {
	      if (typeof name === "string") {
	        var node = this.node(), n = (name = d3_selection_classes(name)).length, i = -1;
	        if (value = node.classList) {
	          while (++i < n) if (!value.contains(name[i])) return false;
	        } else {
	          value = node.getAttribute("class");
	          while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
	        }
	        return true;
	      }
	      for (value in name) this.each(d3_selection_classed(value, name[value]));
	      return this;
	    }
	    return this.each(d3_selection_classed(name, value));
	  };
	  function d3_selection_classedRe(name) {
	    return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
	  }
	  function d3_selection_classes(name) {
	    return (name + "").trim().split(/^|\s+/);
	  }
	  function d3_selection_classed(name, value) {
	    name = d3_selection_classes(name).map(d3_selection_classedName);
	    var n = name.length;
	    function classedConstant() {
	      var i = -1;
	      while (++i < n) name[i](this, value);
	    }
	    function classedFunction() {
	      var i = -1, x = value.apply(this, arguments);
	      while (++i < n) name[i](this, x);
	    }
	    return typeof value === "function" ? classedFunction : classedConstant;
	  }
	  function d3_selection_classedName(name) {
	    var re = d3_selection_classedRe(name);
	    return function(node, value) {
	      if (c = node.classList) return value ? c.add(name) : c.remove(name);
	      var c = node.getAttribute("class") || "";
	      if (value) {
	        re.lastIndex = 0;
	        if (!re.test(c)) node.setAttribute("class", d3_collapse(c + " " + name));
	      } else {
	        node.setAttribute("class", d3_collapse(c.replace(re, " ")));
	      }
	    };
	  }
	  d3_selectionPrototype.style = function(name, value, priority) {
	    var n = arguments.length;
	    if (n < 3) {
	      if (typeof name !== "string") {
	        if (n < 2) value = "";
	        for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
	        return this;
	      }
	      if (n < 2) {
	        var node = this.node();
	        return d3_window(node).getComputedStyle(node, null).getPropertyValue(name);
	      }
	      priority = "";
	    }
	    return this.each(d3_selection_style(name, value, priority));
	  };
	  function d3_selection_style(name, value, priority) {
	    function styleNull() {
	      this.style.removeProperty(name);
	    }
	    function styleConstant() {
	      this.style.setProperty(name, value, priority);
	    }
	    function styleFunction() {
	      var x = value.apply(this, arguments);
	      if (x == null) this.style.removeProperty(name); else this.style.setProperty(name, x, priority);
	    }
	    return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
	  }
	  d3_selectionPrototype.property = function(name, value) {
	    if (arguments.length < 2) {
	      if (typeof name === "string") return this.node()[name];
	      for (value in name) this.each(d3_selection_property(value, name[value]));
	      return this;
	    }
	    return this.each(d3_selection_property(name, value));
	  };
	  function d3_selection_property(name, value) {
	    function propertyNull() {
	      delete this[name];
	    }
	    function propertyConstant() {
	      this[name] = value;
	    }
	    function propertyFunction() {
	      var x = value.apply(this, arguments);
	      if (x == null) delete this[name]; else this[name] = x;
	    }
	    return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
	  }
	  d3_selectionPrototype.text = function(value) {
	    return arguments.length ? this.each(typeof value === "function" ? function() {
	      var v = value.apply(this, arguments);
	      this.textContent = v == null ? "" : v;
	    } : value == null ? function() {
	      this.textContent = "";
	    } : function() {
	      this.textContent = value;
	    }) : this.node().textContent;
	  };
	  d3_selectionPrototype.html = function(value) {
	    return arguments.length ? this.each(typeof value === "function" ? function() {
	      var v = value.apply(this, arguments);
	      this.innerHTML = v == null ? "" : v;
	    } : value == null ? function() {
	      this.innerHTML = "";
	    } : function() {
	      this.innerHTML = value;
	    }) : this.node().innerHTML;
	  };
	  d3_selectionPrototype.append = function(name) {
	    name = d3_selection_creator(name);
	    return this.select(function() {
	      return this.appendChild(name.apply(this, arguments));
	    });
	  };
	  function d3_selection_creator(name) {
	    function create() {
	      var document = this.ownerDocument, namespace = this.namespaceURI;
	      return namespace === d3_nsXhtml && document.documentElement.namespaceURI === d3_nsXhtml ? document.createElement(name) : document.createElementNS(namespace, name);
	    }
	    function createNS() {
	      return this.ownerDocument.createElementNS(name.space, name.local);
	    }
	    return typeof name === "function" ? name : (name = d3.ns.qualify(name)).local ? createNS : create;
	  }
	  d3_selectionPrototype.insert = function(name, before) {
	    name = d3_selection_creator(name);
	    before = d3_selection_selector(before);
	    return this.select(function() {
	      return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
	    });
	  };
	  d3_selectionPrototype.remove = function() {
	    return this.each(d3_selectionRemove);
	  };
	  function d3_selectionRemove() {
	    var parent = this.parentNode;
	    if (parent) parent.removeChild(this);
	  }
	  d3_selectionPrototype.data = function(value, key) {
	    var i = -1, n = this.length, group, node;
	    if (!arguments.length) {
	      value = new Array(n = (group = this[0]).length);
	      while (++i < n) {
	        if (node = group[i]) {
	          value[i] = node.__data__;
	        }
	      }
	      return value;
	    }
	    function bind(group, groupData) {
	      var i, n = group.length, m = groupData.length, n0 = Math.min(n, m), updateNodes = new Array(m), enterNodes = new Array(m), exitNodes = new Array(n), node, nodeData;
	      if (key) {
	        var nodeByKeyValue = new d3_Map(), keyValues = new Array(n), keyValue;
	        for (i = -1; ++i < n; ) {
	          if (node = group[i]) {
	            if (nodeByKeyValue.has(keyValue = key.call(node, node.__data__, i))) {
	              exitNodes[i] = node;
	            } else {
	              nodeByKeyValue.set(keyValue, node);
	            }
	            keyValues[i] = keyValue;
	          }
	        }
	        for (i = -1; ++i < m; ) {
	          if (!(node = nodeByKeyValue.get(keyValue = key.call(groupData, nodeData = groupData[i], i)))) {
	            enterNodes[i] = d3_selection_dataNode(nodeData);
	          } else if (node !== true) {
	            updateNodes[i] = node;
	            node.__data__ = nodeData;
	          }
	          nodeByKeyValue.set(keyValue, true);
	        }
	        for (i = -1; ++i < n; ) {
	          if (i in keyValues && nodeByKeyValue.get(keyValues[i]) !== true) {
	            exitNodes[i] = group[i];
	          }
	        }
	      } else {
	        for (i = -1; ++i < n0; ) {
	          node = group[i];
	          nodeData = groupData[i];
	          if (node) {
	            node.__data__ = nodeData;
	            updateNodes[i] = node;
	          } else {
	            enterNodes[i] = d3_selection_dataNode(nodeData);
	          }
	        }
	        for (;i < m; ++i) {
	          enterNodes[i] = d3_selection_dataNode(groupData[i]);
	        }
	        for (;i < n; ++i) {
	          exitNodes[i] = group[i];
	        }
	      }
	      enterNodes.update = updateNodes;
	      enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
	      enter.push(enterNodes);
	      update.push(updateNodes);
	      exit.push(exitNodes);
	    }
	    var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);
	    if (typeof value === "function") {
	      while (++i < n) {
	        bind(group = this[i], value.call(group, group.parentNode.__data__, i));
	      }
	    } else {
	      while (++i < n) {
	        bind(group = this[i], value);
	      }
	    }
	    update.enter = function() {
	      return enter;
	    };
	    update.exit = function() {
	      return exit;
	    };
	    return update;
	  };
	  function d3_selection_dataNode(data) {
	    return {
	      __data__: data
	    };
	  }
	  d3_selectionPrototype.datum = function(value) {
	    return arguments.length ? this.property("__data__", value) : this.property("__data__");
	  };
	  d3_selectionPrototype.filter = function(filter) {
	    var subgroups = [], subgroup, group, node;
	    if (typeof filter !== "function") filter = d3_selection_filter(filter);
	    for (var j = 0, m = this.length; j < m; j++) {
	      subgroups.push(subgroup = []);
	      subgroup.parentNode = (group = this[j]).parentNode;
	      for (var i = 0, n = group.length; i < n; i++) {
	        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
	          subgroup.push(node);
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  function d3_selection_filter(selector) {
	    return function() {
	      return d3_selectMatches(this, selector);
	    };
	  }
	  d3_selectionPrototype.order = function() {
	    for (var j = -1, m = this.length; ++j < m; ) {
	      for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
	        if (node = group[i]) {
	          if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
	          next = node;
	        }
	      }
	    }
	    return this;
	  };
	  d3_selectionPrototype.sort = function(comparator) {
	    comparator = d3_selection_sortComparator.apply(this, arguments);
	    for (var j = -1, m = this.length; ++j < m; ) this[j].sort(comparator);
	    return this.order();
	  };
	  function d3_selection_sortComparator(comparator) {
	    if (!arguments.length) comparator = d3_ascending;
	    return function(a, b) {
	      return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
	    };
	  }
	  d3_selectionPrototype.each = function(callback) {
	    return d3_selection_each(this, function(node, i, j) {
	      callback.call(node, node.__data__, i, j);
	    });
	  };
	  function d3_selection_each(groups, callback) {
	    for (var j = 0, m = groups.length; j < m; j++) {
	      for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
	        if (node = group[i]) callback(node, i, j);
	      }
	    }
	    return groups;
	  }
	  d3_selectionPrototype.call = function(callback) {
	    var args = d3_array(arguments);
	    callback.apply(args[0] = this, args);
	    return this;
	  };
	  d3_selectionPrototype.empty = function() {
	    return !this.node();
	  };
	  d3_selectionPrototype.node = function() {
	    for (var j = 0, m = this.length; j < m; j++) {
	      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
	        var node = group[i];
	        if (node) return node;
	      }
	    }
	    return null;
	  };
	  d3_selectionPrototype.size = function() {
	    var n = 0;
	    d3_selection_each(this, function() {
	      ++n;
	    });
	    return n;
	  };
	  function d3_selection_enter(selection) {
	    d3_subclass(selection, d3_selection_enterPrototype);
	    return selection;
	  }
	  var d3_selection_enterPrototype = [];
	  d3.selection.enter = d3_selection_enter;
	  d3.selection.enter.prototype = d3_selection_enterPrototype;
	  d3_selection_enterPrototype.append = d3_selectionPrototype.append;
	  d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
	  d3_selection_enterPrototype.node = d3_selectionPrototype.node;
	  d3_selection_enterPrototype.call = d3_selectionPrototype.call;
	  d3_selection_enterPrototype.size = d3_selectionPrototype.size;
	  d3_selection_enterPrototype.select = function(selector) {
	    var subgroups = [], subgroup, subnode, upgroup, group, node;
	    for (var j = -1, m = this.length; ++j < m; ) {
	      upgroup = (group = this[j]).update;
	      subgroups.push(subgroup = []);
	      subgroup.parentNode = group.parentNode;
	      for (var i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
	          subnode.__data__ = node.__data__;
	        } else {
	          subgroup.push(null);
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  d3_selection_enterPrototype.insert = function(name, before) {
	    if (arguments.length < 2) before = d3_selection_enterInsertBefore(this);
	    return d3_selectionPrototype.insert.call(this, name, before);
	  };
	  function d3_selection_enterInsertBefore(enter) {
	    var i0, j0;
	    return function(d, i, j) {
	      var group = enter[j].update, n = group.length, node;
	      if (j != j0) j0 = j, i0 = 0;
	      if (i >= i0) i0 = i + 1;
	      while (!(node = group[i0]) && ++i0 < n) ;
	      return node;
	    };
	  }
	  d3.select = function(node) {
	    var group;
	    if (typeof node === "string") {
	      group = [ d3_select(node, d3_document) ];
	      group.parentNode = d3_document.documentElement;
	    } else {
	      group = [ node ];
	      group.parentNode = d3_documentElement(node);
	    }
	    return d3_selection([ group ]);
	  };
	  d3.selectAll = function(nodes) {
	    var group;
	    if (typeof nodes === "string") {
	      group = d3_array(d3_selectAll(nodes, d3_document));
	      group.parentNode = d3_document.documentElement;
	    } else {
	      group = d3_array(nodes);
	      group.parentNode = null;
	    }
	    return d3_selection([ group ]);
	  };
	  d3_selectionPrototype.on = function(type, listener, capture) {
	    var n = arguments.length;
	    if (n < 3) {
	      if (typeof type !== "string") {
	        if (n < 2) listener = false;
	        for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
	        return this;
	      }
	      if (n < 2) return (n = this.node()["__on" + type]) && n._;
	      capture = false;
	    }
	    return this.each(d3_selection_on(type, listener, capture));
	  };
	  function d3_selection_on(type, listener, capture) {
	    var name = "__on" + type, i = type.indexOf("."), wrap = d3_selection_onListener;
	    if (i > 0) type = type.slice(0, i);
	    var filter = d3_selection_onFilters.get(type);
	    if (filter) type = filter, wrap = d3_selection_onFilter;
	    function onRemove() {
	      var l = this[name];
	      if (l) {
	        this.removeEventListener(type, l, l.$);
	        delete this[name];
	      }
	    }
	    function onAdd() {
	      var l = wrap(listener, d3_array(arguments));
	      onRemove.call(this);
	      this.addEventListener(type, this[name] = l, l.$ = capture);
	      l._ = listener;
	    }
	    function removeAll() {
	      var re = new RegExp("^__on([^.]+)" + d3.requote(type) + "$"), match;
	      for (var name in this) {
	        if (match = name.match(re)) {
	          var l = this[name];
	          this.removeEventListener(match[1], l, l.$);
	          delete this[name];
	        }
	      }
	    }
	    return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
	  }
	  var d3_selection_onFilters = d3.map({
	    mouseenter: "mouseover",
	    mouseleave: "mouseout"
	  });
	  if (d3_document) {
	    d3_selection_onFilters.forEach(function(k) {
	      if ("on" + k in d3_document) d3_selection_onFilters.remove(k);
	    });
	  }
	  function d3_selection_onListener(listener, argumentz) {
	    return function(e) {
	      var o = d3.event;
	      d3.event = e;
	      argumentz[0] = this.__data__;
	      try {
	        listener.apply(this, argumentz);
	      } finally {
	        d3.event = o;
	      }
	    };
	  }
	  function d3_selection_onFilter(listener, argumentz) {
	    var l = d3_selection_onListener(listener, argumentz);
	    return function(e) {
	      var target = this, related = e.relatedTarget;
	      if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
	        l.call(target, e);
	      }
	    };
	  }
	  var d3_event_dragSelect, d3_event_dragId = 0;
	  function d3_event_dragSuppress(node) {
	    var name = ".dragsuppress-" + ++d3_event_dragId, click = "click" + name, w = d3.select(d3_window(node)).on("touchmove" + name, d3_eventPreventDefault).on("dragstart" + name, d3_eventPreventDefault).on("selectstart" + name, d3_eventPreventDefault);
	    if (d3_event_dragSelect == null) {
	      d3_event_dragSelect = "onselectstart" in node ? false : d3_vendorSymbol(node.style, "userSelect");
	    }
	    if (d3_event_dragSelect) {
	      var style = d3_documentElement(node).style, select = style[d3_event_dragSelect];
	      style[d3_event_dragSelect] = "none";
	    }
	    return function(suppressClick) {
	      w.on(name, null);
	      if (d3_event_dragSelect) style[d3_event_dragSelect] = select;
	      if (suppressClick) {
	        var off = function() {
	          w.on(click, null);
	        };
	        w.on(click, function() {
	          d3_eventPreventDefault();
	          off();
	        }, true);
	        setTimeout(off, 0);
	      }
	    };
	  }
	  d3.mouse = function(container) {
	    return d3_mousePoint(container, d3_eventSource());
	  };
	  var d3_mouse_bug44083 = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;
	  function d3_mousePoint(container, e) {
	    if (e.changedTouches) e = e.changedTouches[0];
	    var svg = container.ownerSVGElement || container;
	    if (svg.createSVGPoint) {
	      var point = svg.createSVGPoint();
	      if (d3_mouse_bug44083 < 0) {
	        var window = d3_window(container);
	        if (window.scrollX || window.scrollY) {
	          svg = d3.select("body").append("svg").style({
	            position: "absolute",
	            top: 0,
	            left: 0,
	            margin: 0,
	            padding: 0,
	            border: "none"
	          }, "important");
	          var ctm = svg[0][0].getScreenCTM();
	          d3_mouse_bug44083 = !(ctm.f || ctm.e);
	          svg.remove();
	        }
	      }
	      if (d3_mouse_bug44083) point.x = e.pageX, point.y = e.pageY; else point.x = e.clientX, 
	      point.y = e.clientY;
	      point = point.matrixTransform(container.getScreenCTM().inverse());
	      return [ point.x, point.y ];
	    }
	    var rect = container.getBoundingClientRect();
	    return [ e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop ];
	  }
	  d3.touch = function(container, touches, identifier) {
	    if (arguments.length < 3) identifier = touches, touches = d3_eventSource().changedTouches;
	    if (touches) for (var i = 0, n = touches.length, touch; i < n; ++i) {
	      if ((touch = touches[i]).identifier === identifier) {
	        return d3_mousePoint(container, touch);
	      }
	    }
	  };
	  d3.behavior.drag = function() {
	    var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), origin = null, mousedown = dragstart(d3_noop, d3.mouse, d3_window, "mousemove", "mouseup"), touchstart = dragstart(d3_behavior_dragTouchId, d3.touch, d3_identity, "touchmove", "touchend");
	    function drag() {
	      this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
	    }
	    function dragstart(id, position, subject, move, end) {
	      return function() {
	        var that = this, target = d3.event.target.correspondingElement || d3.event.target, parent = that.parentNode, dispatch = event.of(that, arguments), dragged = 0, dragId = id(), dragName = ".drag" + (dragId == null ? "" : "-" + dragId), dragOffset, dragSubject = d3.select(subject(target)).on(move + dragName, moved).on(end + dragName, ended), dragRestore = d3_event_dragSuppress(target), position0 = position(parent, dragId);
	        if (origin) {
	          dragOffset = origin.apply(that, arguments);
	          dragOffset = [ dragOffset.x - position0[0], dragOffset.y - position0[1] ];
	        } else {
	          dragOffset = [ 0, 0 ];
	        }
	        dispatch({
	          type: "dragstart"
	        });
	        function moved() {
	          var position1 = position(parent, dragId), dx, dy;
	          if (!position1) return;
	          dx = position1[0] - position0[0];
	          dy = position1[1] - position0[1];
	          dragged |= dx | dy;
	          position0 = position1;
	          dispatch({
	            type: "drag",
	            x: position1[0] + dragOffset[0],
	            y: position1[1] + dragOffset[1],
	            dx: dx,
	            dy: dy
	          });
	        }
	        function ended() {
	          if (!position(parent, dragId)) return;
	          dragSubject.on(move + dragName, null).on(end + dragName, null);
	          dragRestore(dragged);
	          dispatch({
	            type: "dragend"
	          });
	        }
	      };
	    }
	    drag.origin = function(x) {
	      if (!arguments.length) return origin;
	      origin = x;
	      return drag;
	    };
	    return d3.rebind(drag, event, "on");
	  };
	  function d3_behavior_dragTouchId() {
	    return d3.event.changedTouches[0].identifier;
	  }
	  d3.touches = function(container, touches) {
	    if (arguments.length < 2) touches = d3_eventSource().touches;
	    return touches ? d3_array(touches).map(function(touch) {
	      var point = d3_mousePoint(container, touch);
	      point.identifier = touch.identifier;
	      return point;
	    }) : [];
	  };
	  var ε = 1e-6, ε2 = ε * ε, π = Math.PI, τ = 2 * π, τε = τ - ε, halfπ = π / 2, d3_radians = π / 180, d3_degrees = 180 / π;
	  function d3_sgn(x) {
	    return x > 0 ? 1 : x < 0 ? -1 : 0;
	  }
	  function d3_cross2d(a, b, c) {
	    return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
	  }
	  function d3_acos(x) {
	    return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
	  }
	  function d3_asin(x) {
	    return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
	  }
	  function d3_sinh(x) {
	    return ((x = Math.exp(x)) - 1 / x) / 2;
	  }
	  function d3_cosh(x) {
	    return ((x = Math.exp(x)) + 1 / x) / 2;
	  }
	  function d3_tanh(x) {
	    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
	  }
	  function d3_haversin(x) {
	    return (x = Math.sin(x / 2)) * x;
	  }
	  var ρ = Math.SQRT2, ρ2 = 2, ρ4 = 4;
	  d3.interpolateZoom = function(p0, p1) {
	    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
	    if (d2 < ε2) {
	      S = Math.log(w1 / w0) / ρ;
	      i = function(t) {
	        return [ ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(ρ * t * S) ];
	      };
	    } else {
	      var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1), b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
	      S = (r1 - r0) / ρ;
	      i = function(t) {
	        var s = t * S, coshr0 = d3_cosh(r0), u = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
	        return [ ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / d3_cosh(ρ * s + r0) ];
	      };
	    }
	    i.duration = S * 1e3;
	    return i;
	  };
	  d3.behavior.zoom = function() {
	    var view = {
	      x: 0,
	      y: 0,
	      k: 1
	    }, translate0, center0, center, size = [ 960, 500 ], scaleExtent = d3_behavior_zoomInfinity, duration = 250, zooming = 0, mousedown = "mousedown.zoom", mousemove = "mousemove.zoom", mouseup = "mouseup.zoom", mousewheelTimer, touchstart = "touchstart.zoom", touchtime, event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"), x0, x1, y0, y1;
	    if (!d3_behavior_zoomWheel) {
	      d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function() {
	        return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
	      }, "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function() {
	        return d3.event.wheelDelta;
	      }, "mousewheel") : (d3_behavior_zoomDelta = function() {
	        return -d3.event.detail;
	      }, "MozMousePixelScroll");
	    }
	    function zoom(g) {
	      g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted);
	    }
	    zoom.event = function(g) {
	      g.each(function() {
	        var dispatch = event.of(this, arguments), view1 = view;
	        if (d3_transitionInheritId) {
	          d3.select(this).transition().each("start.zoom", function() {
	            view = this.__chart__ || {
	              x: 0,
	              y: 0,
	              k: 1
	            };
	            zoomstarted(dispatch);
	          }).tween("zoom:zoom", function() {
	            var dx = size[0], dy = size[1], cx = center0 ? center0[0] : dx / 2, cy = center0 ? center0[1] : dy / 2, i = d3.interpolateZoom([ (cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k ], [ (cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k ]);
	            return function(t) {
	              var l = i(t), k = dx / l[2];
	              this.__chart__ = view = {
	                x: cx - l[0] * k,
	                y: cy - l[1] * k,
	                k: k
	              };
	              zoomed(dispatch);
	            };
	          }).each("interrupt.zoom", function() {
	            zoomended(dispatch);
	          }).each("end.zoom", function() {
	            zoomended(dispatch);
	          });
	        } else {
	          this.__chart__ = view;
	          zoomstarted(dispatch);
	          zoomed(dispatch);
	          zoomended(dispatch);
	        }
	      });
	    };
	    zoom.translate = function(_) {
	      if (!arguments.length) return [ view.x, view.y ];
	      view = {
	        x: +_[0],
	        y: +_[1],
	        k: view.k
	      };
	      rescale();
	      return zoom;
	    };
	    zoom.scale = function(_) {
	      if (!arguments.length) return view.k;
	      view = {
	        x: view.x,
	        y: view.y,
	        k: null
	      };
	      scaleTo(+_);
	      rescale();
	      return zoom;
	    };
	    zoom.scaleExtent = function(_) {
	      if (!arguments.length) return scaleExtent;
	      scaleExtent = _ == null ? d3_behavior_zoomInfinity : [ +_[0], +_[1] ];
	      return zoom;
	    };
	    zoom.center = function(_) {
	      if (!arguments.length) return center;
	      center = _ && [ +_[0], +_[1] ];
	      return zoom;
	    };
	    zoom.size = function(_) {
	      if (!arguments.length) return size;
	      size = _ && [ +_[0], +_[1] ];
	      return zoom;
	    };
	    zoom.duration = function(_) {
	      if (!arguments.length) return duration;
	      duration = +_;
	      return zoom;
	    };
	    zoom.x = function(z) {
	      if (!arguments.length) return x1;
	      x1 = z;
	      x0 = z.copy();
	      view = {
	        x: 0,
	        y: 0,
	        k: 1
	      };
	      return zoom;
	    };
	    zoom.y = function(z) {
	      if (!arguments.length) return y1;
	      y1 = z;
	      y0 = z.copy();
	      view = {
	        x: 0,
	        y: 0,
	        k: 1
	      };
	      return zoom;
	    };
	    function location(p) {
	      return [ (p[0] - view.x) / view.k, (p[1] - view.y) / view.k ];
	    }
	    function point(l) {
	      return [ l[0] * view.k + view.x, l[1] * view.k + view.y ];
	    }
	    function scaleTo(s) {
	      view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
	    }
	    function translateTo(p, l) {
	      l = point(l);
	      view.x += p[0] - l[0];
	      view.y += p[1] - l[1];
	    }
	    function zoomTo(that, p, l, k) {
	      that.__chart__ = {
	        x: view.x,
	        y: view.y,
	        k: view.k
	      };
	      scaleTo(Math.pow(2, k));
	      translateTo(center0 = p, l);
	      that = d3.select(that);
	      if (duration > 0) that = that.transition().duration(duration);
	      that.call(zoom.event);
	    }
	    function rescale() {
	      if (x1) x1.domain(x0.range().map(function(x) {
	        return (x - view.x) / view.k;
	      }).map(x0.invert));
	      if (y1) y1.domain(y0.range().map(function(y) {
	        return (y - view.y) / view.k;
	      }).map(y0.invert));
	    }
	    function zoomstarted(dispatch) {
	      if (!zooming++) dispatch({
	        type: "zoomstart"
	      });
	    }
	    function zoomed(dispatch) {
	      rescale();
	      dispatch({
	        type: "zoom",
	        scale: view.k,
	        translate: [ view.x, view.y ]
	      });
	    }
	    function zoomended(dispatch) {
	      if (!--zooming) dispatch({
	        type: "zoomend"
	      }), center0 = null;
	    }
	    function mousedowned() {
	      var that = this, dispatch = event.of(that, arguments), dragged = 0, subject = d3.select(d3_window(that)).on(mousemove, moved).on(mouseup, ended), location0 = location(d3.mouse(that)), dragRestore = d3_event_dragSuppress(that);
	      d3_selection_interrupt.call(that);
	      zoomstarted(dispatch);
	      function moved() {
	        dragged = 1;
	        translateTo(d3.mouse(that), location0);
	        zoomed(dispatch);
	      }
	      function ended() {
	        subject.on(mousemove, null).on(mouseup, null);
	        dragRestore(dragged);
	        zoomended(dispatch);
	      }
	    }
	    function touchstarted() {
	      var that = this, dispatch = event.of(that, arguments), locations0 = {}, distance0 = 0, scale0, zoomName = ".zoom-" + d3.event.changedTouches[0].identifier, touchmove = "touchmove" + zoomName, touchend = "touchend" + zoomName, targets = [], subject = d3.select(that), dragRestore = d3_event_dragSuppress(that);
	      started();
	      zoomstarted(dispatch);
	      subject.on(mousedown, null).on(touchstart, started);
	      function relocate() {
	        var touches = d3.touches(that);
	        scale0 = view.k;
	        touches.forEach(function(t) {
	          if (t.identifier in locations0) locations0[t.identifier] = location(t);
	        });
	        return touches;
	      }
	      function started() {
	        var target = d3.event.target;
	        d3.select(target).on(touchmove, moved).on(touchend, ended);
	        targets.push(target);
	        var changed = d3.event.changedTouches;
	        for (var i = 0, n = changed.length; i < n; ++i) {
	          locations0[changed[i].identifier] = null;
	        }
	        var touches = relocate(), now = Date.now();
	        if (touches.length === 1) {
	          if (now - touchtime < 500) {
	            var p = touches[0];
	            zoomTo(that, p, locations0[p.identifier], Math.floor(Math.log(view.k) / Math.LN2) + 1);
	            d3_eventPreventDefault();
	          }
	          touchtime = now;
	        } else if (touches.length > 1) {
	          var p = touches[0], q = touches[1], dx = p[0] - q[0], dy = p[1] - q[1];
	          distance0 = dx * dx + dy * dy;
	        }
	      }
	      function moved() {
	        var touches = d3.touches(that), p0, l0, p1, l1;
	        d3_selection_interrupt.call(that);
	        for (var i = 0, n = touches.length; i < n; ++i, l1 = null) {
	          p1 = touches[i];
	          if (l1 = locations0[p1.identifier]) {
	            if (l0) break;
	            p0 = p1, l0 = l1;
	          }
	        }
	        if (l1) {
	          var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1, scale1 = distance0 && Math.sqrt(distance1 / distance0);
	          p0 = [ (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2 ];
	          l0 = [ (l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2 ];
	          scaleTo(scale1 * scale0);
	        }
	        touchtime = null;
	        translateTo(p0, l0);
	        zoomed(dispatch);
	      }
	      function ended() {
	        if (d3.event.touches.length) {
	          var changed = d3.event.changedTouches;
	          for (var i = 0, n = changed.length; i < n; ++i) {
	            delete locations0[changed[i].identifier];
	          }
	          for (var identifier in locations0) {
	            return void relocate();
	          }
	        }
	        d3.selectAll(targets).on(zoomName, null);
	        subject.on(mousedown, mousedowned).on(touchstart, touchstarted);
	        dragRestore();
	        zoomended(dispatch);
	      }
	    }
	    function mousewheeled() {
	      var dispatch = event.of(this, arguments);
	      if (mousewheelTimer) clearTimeout(mousewheelTimer); else d3_selection_interrupt.call(this), 
	      translate0 = location(center0 = center || d3.mouse(this)), zoomstarted(dispatch);
	      mousewheelTimer = setTimeout(function() {
	        mousewheelTimer = null;
	        zoomended(dispatch);
	      }, 50);
	      d3_eventPreventDefault();
	      scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * view.k);
	      translateTo(center0, translate0);
	      zoomed(dispatch);
	    }
	    function dblclicked() {
	      var p = d3.mouse(this), k = Math.log(view.k) / Math.LN2;
	      zoomTo(this, p, location(p), d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1);
	    }
	    return d3.rebind(zoom, event, "on");
	  };
	  var d3_behavior_zoomInfinity = [ 0, Infinity ], d3_behavior_zoomDelta, d3_behavior_zoomWheel;
	  d3.color = d3_color;
	  function d3_color() {}
	  d3_color.prototype.toString = function() {
	    return this.rgb() + "";
	  };
	  d3.hsl = d3_hsl;
	  function d3_hsl(h, s, l) {
	    return this instanceof d3_hsl ? void (this.h = +h, this.s = +s, this.l = +l) : arguments.length < 2 ? h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : new d3_hsl(h, s, l);
	  }
	  var d3_hslPrototype = d3_hsl.prototype = new d3_color();
	  d3_hslPrototype.brighter = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    return new d3_hsl(this.h, this.s, this.l / k);
	  };
	  d3_hslPrototype.darker = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    return new d3_hsl(this.h, this.s, k * this.l);
	  };
	  d3_hslPrototype.rgb = function() {
	    return d3_hsl_rgb(this.h, this.s, this.l);
	  };
	  function d3_hsl_rgb(h, s, l) {
	    var m1, m2;
	    h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
	    s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
	    l = l < 0 ? 0 : l > 1 ? 1 : l;
	    m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
	    m1 = 2 * l - m2;
	    function v(h) {
	      if (h > 360) h -= 360; else if (h < 0) h += 360;
	      if (h < 60) return m1 + (m2 - m1) * h / 60;
	      if (h < 180) return m2;
	      if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
	      return m1;
	    }
	    function vv(h) {
	      return Math.round(v(h) * 255);
	    }
	    return new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
	  }
	  d3.hcl = d3_hcl;
	  function d3_hcl(h, c, l) {
	    return this instanceof d3_hcl ? void (this.h = +h, this.c = +c, this.l = +l) : arguments.length < 2 ? h instanceof d3_hcl ? new d3_hcl(h.h, h.c, h.l) : h instanceof d3_lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : new d3_hcl(h, c, l);
	  }
	  var d3_hclPrototype = d3_hcl.prototype = new d3_color();
	  d3_hclPrototype.brighter = function(k) {
	    return new d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
	  };
	  d3_hclPrototype.darker = function(k) {
	    return new d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
	  };
	  d3_hclPrototype.rgb = function() {
	    return d3_hcl_lab(this.h, this.c, this.l).rgb();
	  };
	  function d3_hcl_lab(h, c, l) {
	    if (isNaN(h)) h = 0;
	    if (isNaN(c)) c = 0;
	    return new d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
	  }
	  d3.lab = d3_lab;
	  function d3_lab(l, a, b) {
	    return this instanceof d3_lab ? void (this.l = +l, this.a = +a, this.b = +b) : arguments.length < 2 ? l instanceof d3_lab ? new d3_lab(l.l, l.a, l.b) : l instanceof d3_hcl ? d3_hcl_lab(l.h, l.c, l.l) : d3_rgb_lab((l = d3_rgb(l)).r, l.g, l.b) : new d3_lab(l, a, b);
	  }
	  var d3_lab_K = 18;
	  var d3_lab_X = .95047, d3_lab_Y = 1, d3_lab_Z = 1.08883;
	  var d3_labPrototype = d3_lab.prototype = new d3_color();
	  d3_labPrototype.brighter = function(k) {
	    return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
	  };
	  d3_labPrototype.darker = function(k) {
	    return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
	  };
	  d3_labPrototype.rgb = function() {
	    return d3_lab_rgb(this.l, this.a, this.b);
	  };
	  function d3_lab_rgb(l, a, b) {
	    var y = (l + 16) / 116, x = y + a / 500, z = y - b / 200;
	    x = d3_lab_xyz(x) * d3_lab_X;
	    y = d3_lab_xyz(y) * d3_lab_Y;
	    z = d3_lab_xyz(z) * d3_lab_Z;
	    return new d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
	  }
	  function d3_lab_hcl(l, a, b) {
	    return l > 0 ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : new d3_hcl(NaN, NaN, l);
	  }
	  function d3_lab_xyz(x) {
	    return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
	  }
	  function d3_xyz_lab(x) {
	    return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
	  }
	  function d3_xyz_rgb(r) {
	    return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
	  }
	  d3.rgb = d3_rgb;
	  function d3_rgb(r, g, b) {
	    return this instanceof d3_rgb ? void (this.r = ~~r, this.g = ~~g, this.b = ~~b) : arguments.length < 2 ? r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : new d3_rgb(r, g, b);
	  }
	  function d3_rgbNumber(value) {
	    return new d3_rgb(value >> 16, value >> 8 & 255, value & 255);
	  }
	  function d3_rgbString(value) {
	    return d3_rgbNumber(value) + "";
	  }
	  var d3_rgbPrototype = d3_rgb.prototype = new d3_color();
	  d3_rgbPrototype.brighter = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    var r = this.r, g = this.g, b = this.b, i = 30;
	    if (!r && !g && !b) return new d3_rgb(i, i, i);
	    if (r && r < i) r = i;
	    if (g && g < i) g = i;
	    if (b && b < i) b = i;
	    return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k));
	  };
	  d3_rgbPrototype.darker = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    return new d3_rgb(k * this.r, k * this.g, k * this.b);
	  };
	  d3_rgbPrototype.hsl = function() {
	    return d3_rgb_hsl(this.r, this.g, this.b);
	  };
	  d3_rgbPrototype.toString = function() {
	    return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
	  };
	  function d3_rgb_hex(v) {
	    return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
	  }
	  function d3_rgb_parse(format, rgb, hsl) {
	    var r = 0, g = 0, b = 0, m1, m2, color;
	    m1 = /([a-z]+)\((.*)\)/.exec(format = format.toLowerCase());
	    if (m1) {
	      m2 = m1[2].split(",");
	      switch (m1[1]) {
	       case "hsl":
	        {
	          return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
	        }
	
	       case "rgb":
	        {
	          return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
	        }
	      }
	    }
	    if (color = d3_rgb_names.get(format)) {
	      return rgb(color.r, color.g, color.b);
	    }
	    if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.slice(1), 16))) {
	      if (format.length === 4) {
	        r = (color & 3840) >> 4;
	        r = r >> 4 | r;
	        g = color & 240;
	        g = g >> 4 | g;
	        b = color & 15;
	        b = b << 4 | b;
	      } else if (format.length === 7) {
	        r = (color & 16711680) >> 16;
	        g = (color & 65280) >> 8;
	        b = color & 255;
	      }
	    }
	    return rgb(r, g, b);
	  }
	  function d3_rgb_hsl(r, g, b) {
	    var min = Math.min(r /= 255, g /= 255, b /= 255), max = Math.max(r, g, b), d = max - min, h, s, l = (max + min) / 2;
	    if (d) {
	      s = l < .5 ? d / (max + min) : d / (2 - max - min);
	      if (r == max) h = (g - b) / d + (g < b ? 6 : 0); else if (g == max) h = (b - r) / d + 2; else h = (r - g) / d + 4;
	      h *= 60;
	    } else {
	      h = NaN;
	      s = l > 0 && l < 1 ? 0 : h;
	    }
	    return new d3_hsl(h, s, l);
	  }
	  function d3_rgb_lab(r, g, b) {
	    r = d3_rgb_xyz(r);
	    g = d3_rgb_xyz(g);
	    b = d3_rgb_xyz(b);
	    var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X), y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y), z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
	    return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
	  }
	  function d3_rgb_xyz(r) {
	    return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
	  }
	  function d3_rgb_parseNumber(c) {
	    var f = parseFloat(c);
	    return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
	  }
	  var d3_rgb_names = d3.map({
	    aliceblue: 15792383,
	    antiquewhite: 16444375,
	    aqua: 65535,
	    aquamarine: 8388564,
	    azure: 15794175,
	    beige: 16119260,
	    bisque: 16770244,
	    black: 0,
	    blanchedalmond: 16772045,
	    blue: 255,
	    blueviolet: 9055202,
	    brown: 10824234,
	    burlywood: 14596231,
	    cadetblue: 6266528,
	    chartreuse: 8388352,
	    chocolate: 13789470,
	    coral: 16744272,
	    cornflowerblue: 6591981,
	    cornsilk: 16775388,
	    crimson: 14423100,
	    cyan: 65535,
	    darkblue: 139,
	    darkcyan: 35723,
	    darkgoldenrod: 12092939,
	    darkgray: 11119017,
	    darkgreen: 25600,
	    darkgrey: 11119017,
	    darkkhaki: 12433259,
	    darkmagenta: 9109643,
	    darkolivegreen: 5597999,
	    darkorange: 16747520,
	    darkorchid: 10040012,
	    darkred: 9109504,
	    darksalmon: 15308410,
	    darkseagreen: 9419919,
	    darkslateblue: 4734347,
	    darkslategray: 3100495,
	    darkslategrey: 3100495,
	    darkturquoise: 52945,
	    darkviolet: 9699539,
	    deeppink: 16716947,
	    deepskyblue: 49151,
	    dimgray: 6908265,
	    dimgrey: 6908265,
	    dodgerblue: 2003199,
	    firebrick: 11674146,
	    floralwhite: 16775920,
	    forestgreen: 2263842,
	    fuchsia: 16711935,
	    gainsboro: 14474460,
	    ghostwhite: 16316671,
	    gold: 16766720,
	    goldenrod: 14329120,
	    gray: 8421504,
	    green: 32768,
	    greenyellow: 11403055,
	    grey: 8421504,
	    honeydew: 15794160,
	    hotpink: 16738740,
	    indianred: 13458524,
	    indigo: 4915330,
	    ivory: 16777200,
	    khaki: 15787660,
	    lavender: 15132410,
	    lavenderblush: 16773365,
	    lawngreen: 8190976,
	    lemonchiffon: 16775885,
	    lightblue: 11393254,
	    lightcoral: 15761536,
	    lightcyan: 14745599,
	    lightgoldenrodyellow: 16448210,
	    lightgray: 13882323,
	    lightgreen: 9498256,
	    lightgrey: 13882323,
	    lightpink: 16758465,
	    lightsalmon: 16752762,
	    lightseagreen: 2142890,
	    lightskyblue: 8900346,
	    lightslategray: 7833753,
	    lightslategrey: 7833753,
	    lightsteelblue: 11584734,
	    lightyellow: 16777184,
	    lime: 65280,
	    limegreen: 3329330,
	    linen: 16445670,
	    magenta: 16711935,
	    maroon: 8388608,
	    mediumaquamarine: 6737322,
	    mediumblue: 205,
	    mediumorchid: 12211667,
	    mediumpurple: 9662683,
	    mediumseagreen: 3978097,
	    mediumslateblue: 8087790,
	    mediumspringgreen: 64154,
	    mediumturquoise: 4772300,
	    mediumvioletred: 13047173,
	    midnightblue: 1644912,
	    mintcream: 16121850,
	    mistyrose: 16770273,
	    moccasin: 16770229,
	    navajowhite: 16768685,
	    navy: 128,
	    oldlace: 16643558,
	    olive: 8421376,
	    olivedrab: 7048739,
	    orange: 16753920,
	    orangered: 16729344,
	    orchid: 14315734,
	    palegoldenrod: 15657130,
	    palegreen: 10025880,
	    paleturquoise: 11529966,
	    palevioletred: 14381203,
	    papayawhip: 16773077,
	    peachpuff: 16767673,
	    peru: 13468991,
	    pink: 16761035,
	    plum: 14524637,
	    powderblue: 11591910,
	    purple: 8388736,
	    rebeccapurple: 6697881,
	    red: 16711680,
	    rosybrown: 12357519,
	    royalblue: 4286945,
	    saddlebrown: 9127187,
	    salmon: 16416882,
	    sandybrown: 16032864,
	    seagreen: 3050327,
	    seashell: 16774638,
	    sienna: 10506797,
	    silver: 12632256,
	    skyblue: 8900331,
	    slateblue: 6970061,
	    slategray: 7372944,
	    slategrey: 7372944,
	    snow: 16775930,
	    springgreen: 65407,
	    steelblue: 4620980,
	    tan: 13808780,
	    teal: 32896,
	    thistle: 14204888,
	    tomato: 16737095,
	    turquoise: 4251856,
	    violet: 15631086,
	    wheat: 16113331,
	    white: 16777215,
	    whitesmoke: 16119285,
	    yellow: 16776960,
	    yellowgreen: 10145074
	  });
	  d3_rgb_names.forEach(function(key, value) {
	    d3_rgb_names.set(key, d3_rgbNumber(value));
	  });
	  function d3_functor(v) {
	    return typeof v === "function" ? v : function() {
	      return v;
	    };
	  }
	  d3.functor = d3_functor;
	  d3.xhr = d3_xhrType(d3_identity);
	  function d3_xhrType(response) {
	    return function(url, mimeType, callback) {
	      if (arguments.length === 2 && typeof mimeType === "function") callback = mimeType, 
	      mimeType = null;
	      return d3_xhr(url, mimeType, response, callback);
	    };
	  }
	  function d3_xhr(url, mimeType, response, callback) {
	    var xhr = {}, dispatch = d3.dispatch("beforesend", "progress", "load", "error"), headers = {}, request = new XMLHttpRequest(), responseType = null;
	    if (this.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url)) request = new XDomainRequest();
	    "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
	      request.readyState > 3 && respond();
	    };
	    function respond() {
	      var status = request.status, result;
	      if (!status && d3_xhrHasResponse(request) || status >= 200 && status < 300 || status === 304) {
	        try {
	          result = response.call(xhr, request);
	        } catch (e) {
	          dispatch.error.call(xhr, e);
	          return;
	        }
	        dispatch.load.call(xhr, result);
	      } else {
	        dispatch.error.call(xhr, request);
	      }
	    }
	    request.onprogress = function(event) {
	      var o = d3.event;
	      d3.event = event;
	      try {
	        dispatch.progress.call(xhr, request);
	      } finally {
	        d3.event = o;
	      }
	    };
	    xhr.header = function(name, value) {
	      name = (name + "").toLowerCase();
	      if (arguments.length < 2) return headers[name];
	      if (value == null) delete headers[name]; else headers[name] = value + "";
	      return xhr;
	    };
	    xhr.mimeType = function(value) {
	      if (!arguments.length) return mimeType;
	      mimeType = value == null ? null : value + "";
	      return xhr;
	    };
	    xhr.responseType = function(value) {
	      if (!arguments.length) return responseType;
	      responseType = value;
	      return xhr;
	    };
	    xhr.response = function(value) {
	      response = value;
	      return xhr;
	    };
	    [ "get", "post" ].forEach(function(method) {
	      xhr[method] = function() {
	        return xhr.send.apply(xhr, [ method ].concat(d3_array(arguments)));
	      };
	    });
	    xhr.send = function(method, data, callback) {
	      if (arguments.length === 2 && typeof data === "function") callback = data, data = null;
	      request.open(method, url, true);
	      if (mimeType != null && !("accept" in headers)) headers["accept"] = mimeType + ",*/*";
	      if (request.setRequestHeader) for (var name in headers) request.setRequestHeader(name, headers[name]);
	      if (mimeType != null && request.overrideMimeType) request.overrideMimeType(mimeType);
	      if (responseType != null) request.responseType = responseType;
	      if (callback != null) xhr.on("error", callback).on("load", function(request) {
	        callback(null, request);
	      });
	      dispatch.beforesend.call(xhr, request);
	      request.send(data == null ? null : data);
	      return xhr;
	    };
	    xhr.abort = function() {
	      request.abort();
	      return xhr;
	    };
	    d3.rebind(xhr, dispatch, "on");
	    return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
	  }
	  function d3_xhr_fixCallback(callback) {
	    return callback.length === 1 ? function(error, request) {
	      callback(error == null ? request : null);
	    } : callback;
	  }
	  function d3_xhrHasResponse(request) {
	    var type = request.responseType;
	    return type && type !== "text" ? request.response : request.responseText;
	  }
	  d3.dsv = function(delimiter, mimeType) {
	    var reFormat = new RegExp('["' + delimiter + "\n]"), delimiterCode = delimiter.charCodeAt(0);
	    function dsv(url, row, callback) {
	      if (arguments.length < 3) callback = row, row = null;
	      var xhr = d3_xhr(url, mimeType, row == null ? response : typedResponse(row), callback);
	      xhr.row = function(_) {
	        return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
	      };
	      return xhr;
	    }
	    function response(request) {
	      return dsv.parse(request.responseText);
	    }
	    function typedResponse(f) {
	      return function(request) {
	        return dsv.parse(request.responseText, f);
	      };
	    }
	    dsv.parse = function(text, f) {
	      var o;
	      return dsv.parseRows(text, function(row, i) {
	        if (o) return o(row, i - 1);
	        var a = new Function("d", "return {" + row.map(function(name, i) {
	          return JSON.stringify(name) + ": d[" + i + "]";
	        }).join(",") + "}");
	        o = f ? function(row, i) {
	          return f(a(row), i);
	        } : a;
	      });
	    };
	    dsv.parseRows = function(text, f) {
	      var EOL = {}, EOF = {}, rows = [], N = text.length, I = 0, n = 0, t, eol;
	      function token() {
	        if (I >= N) return EOF;
	        if (eol) return eol = false, EOL;
	        var j = I;
	        if (text.charCodeAt(j) === 34) {
	          var i = j;
	          while (i++ < N) {
	            if (text.charCodeAt(i) === 34) {
	              if (text.charCodeAt(i + 1) !== 34) break;
	              ++i;
	            }
	          }
	          I = i + 2;
	          var c = text.charCodeAt(i + 1);
	          if (c === 13) {
	            eol = true;
	            if (text.charCodeAt(i + 2) === 10) ++I;
	          } else if (c === 10) {
	            eol = true;
	          }
	          return text.slice(j + 1, i).replace(/""/g, '"');
	        }
	        while (I < N) {
	          var c = text.charCodeAt(I++), k = 1;
	          if (c === 10) eol = true; else if (c === 13) {
	            eol = true;
	            if (text.charCodeAt(I) === 10) ++I, ++k;
	          } else if (c !== delimiterCode) continue;
	          return text.slice(j, I - k);
	        }
	        return text.slice(j);
	      }
	      while ((t = token()) !== EOF) {
	        var a = [];
	        while (t !== EOL && t !== EOF) {
	          a.push(t);
	          t = token();
	        }
	        if (f && (a = f(a, n++)) == null) continue;
	        rows.push(a);
	      }
	      return rows;
	    };
	    dsv.format = function(rows) {
	      if (Array.isArray(rows[0])) return dsv.formatRows(rows);
	      var fieldSet = new d3_Set(), fields = [];
	      rows.forEach(function(row) {
	        for (var field in row) {
	          if (!fieldSet.has(field)) {
	            fields.push(fieldSet.add(field));
	          }
	        }
	      });
	      return [ fields.map(formatValue).join(delimiter) ].concat(rows.map(function(row) {
	        return fields.map(function(field) {
	          return formatValue(row[field]);
	        }).join(delimiter);
	      })).join("\n");
	    };
	    dsv.formatRows = function(rows) {
	      return rows.map(formatRow).join("\n");
	    };
	    function formatRow(row) {
	      return row.map(formatValue).join(delimiter);
	    }
	    function formatValue(text) {
	      return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
	    }
	    return dsv;
	  };
	  d3.csv = d3.dsv(",", "text/csv");
	  d3.tsv = d3.dsv("	", "text/tab-separated-values");
	  var d3_timer_queueHead, d3_timer_queueTail, d3_timer_interval, d3_timer_timeout, d3_timer_frame = this[d3_vendorSymbol(this, "requestAnimationFrame")] || function(callback) {
	    setTimeout(callback, 17);
	  };
	  d3.timer = function() {
	    d3_timer.apply(this, arguments);
	  };
	  function d3_timer(callback, delay, then) {
	    var n = arguments.length;
	    if (n < 2) delay = 0;
	    if (n < 3) then = Date.now();
	    var time = then + delay, timer = {
	      c: callback,
	      t: time,
	      n: null
	    };
	    if (d3_timer_queueTail) d3_timer_queueTail.n = timer; else d3_timer_queueHead = timer;
	    d3_timer_queueTail = timer;
	    if (!d3_timer_interval) {
	      d3_timer_timeout = clearTimeout(d3_timer_timeout);
	      d3_timer_interval = 1;
	      d3_timer_frame(d3_timer_step);
	    }
	    return timer;
	  }
	  function d3_timer_step() {
	    var now = d3_timer_mark(), delay = d3_timer_sweep() - now;
	    if (delay > 24) {
	      if (isFinite(delay)) {
	        clearTimeout(d3_timer_timeout);
	        d3_timer_timeout = setTimeout(d3_timer_step, delay);
	      }
	      d3_timer_interval = 0;
	    } else {
	      d3_timer_interval = 1;
	      d3_timer_frame(d3_timer_step);
	    }
	  }
	  d3.timer.flush = function() {
	    d3_timer_mark();
	    d3_timer_sweep();
	  };
	  function d3_timer_mark() {
	    var now = Date.now(), timer = d3_timer_queueHead;
	    while (timer) {
	      if (now >= timer.t && timer.c(now - timer.t)) timer.c = null;
	      timer = timer.n;
	    }
	    return now;
	  }
	  function d3_timer_sweep() {
	    var t0, t1 = d3_timer_queueHead, time = Infinity;
	    while (t1) {
	      if (t1.c) {
	        if (t1.t < time) time = t1.t;
	        t1 = (t0 = t1).n;
	      } else {
	        t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
	      }
	    }
	    d3_timer_queueTail = t0;
	    return time;
	  }
	  function d3_format_precision(x, p) {
	    return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
	  }
	  d3.round = function(x, n) {
	    return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
	  };
	  var d3_formatPrefixes = [ "y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y" ].map(d3_formatPrefix);
	  d3.formatPrefix = function(value, precision) {
	    var i = 0;
	    if (value = +value) {
	      if (value < 0) value *= -1;
	      if (precision) value = d3.round(value, d3_format_precision(value, precision));
	      i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
	      i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));
	    }
	    return d3_formatPrefixes[8 + i / 3];
	  };
	  function d3_formatPrefix(d, i) {
	    var k = Math.pow(10, abs(8 - i) * 3);
	    return {
	      scale: i > 8 ? function(d) {
	        return d / k;
	      } : function(d) {
	        return d * k;
	      },
	      symbol: d
	    };
	  }
	  function d3_locale_numberFormat(locale) {
	    var locale_decimal = locale.decimal, locale_thousands = locale.thousands, locale_grouping = locale.grouping, locale_currency = locale.currency, formatGroup = locale_grouping && locale_thousands ? function(value, width) {
	      var i = value.length, t = [], j = 0, g = locale_grouping[0], length = 0;
	      while (i > 0 && g > 0) {
	        if (length + g + 1 > width) g = Math.max(1, width - length);
	        t.push(value.substring(i -= g, i + g));
	        if ((length += g + 1) > width) break;
	        g = locale_grouping[j = (j + 1) % locale_grouping.length];
	      }
	      return t.reverse().join(locale_thousands);
	    } : d3_identity;
	    return function(specifier) {
	      var match = d3_format_re.exec(specifier), fill = match[1] || " ", align = match[2] || ">", sign = match[3] || "-", symbol = match[4] || "", zfill = match[5], width = +match[6], comma = match[7], precision = match[8], type = match[9], scale = 1, prefix = "", suffix = "", integer = false, exponent = true;
	      if (precision) precision = +precision.substring(1);
	      if (zfill || fill === "0" && align === "=") {
	        zfill = fill = "0";
	        align = "=";
	      }
	      switch (type) {
	       case "n":
	        comma = true;
	        type = "g";
	        break;
	
	       case "%":
	        scale = 100;
	        suffix = "%";
	        type = "f";
	        break;
	
	       case "p":
	        scale = 100;
	        suffix = "%";
	        type = "r";
	        break;
	
	       case "b":
	       case "o":
	       case "x":
	       case "X":
	        if (symbol === "#") prefix = "0" + type.toLowerCase();
	
	       case "c":
	        exponent = false;
	
	       case "d":
	        integer = true;
	        precision = 0;
	        break;
	
	       case "s":
	        scale = -1;
	        type = "r";
	        break;
	      }
	      if (symbol === "$") prefix = locale_currency[0], suffix = locale_currency[1];
	      if (type == "r" && !precision) type = "g";
	      if (precision != null) {
	        if (type == "g") precision = Math.max(1, Math.min(21, precision)); else if (type == "e" || type == "f") precision = Math.max(0, Math.min(20, precision));
	      }
	      type = d3_format_types.get(type) || d3_format_typeDefault;
	      var zcomma = zfill && comma;
	      return function(value) {
	        var fullSuffix = suffix;
	        if (integer && value % 1) return "";
	        var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign === "-" ? "" : sign;
	        if (scale < 0) {
	          var unit = d3.formatPrefix(value, precision);
	          value = unit.scale(value);
	          fullSuffix = unit.symbol + suffix;
	        } else {
	          value *= scale;
	        }
	        value = type(value, precision);
	        var i = value.lastIndexOf("."), before, after;
	        if (i < 0) {
	          var j = exponent ? value.lastIndexOf("e") : -1;
	          if (j < 0) before = value, after = ""; else before = value.substring(0, j), after = value.substring(j);
	        } else {
	          before = value.substring(0, i);
	          after = locale_decimal + value.substring(i + 1);
	        }
	        if (!zfill && comma) before = formatGroup(before, Infinity);
	        var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length), padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
	        if (zcomma) before = formatGroup(padding + before, padding.length ? width - after.length : Infinity);
	        negative += prefix;
	        value = before + after;
	        return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + fullSuffix;
	      };
	    };
	  }
	  var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
	  var d3_format_types = d3.map({
	    b: function(x) {
	      return x.toString(2);
	    },
	    c: function(x) {
	      return String.fromCharCode(x);
	    },
	    o: function(x) {
	      return x.toString(8);
	    },
	    x: function(x) {
	      return x.toString(16);
	    },
	    X: function(x) {
	      return x.toString(16).toUpperCase();
	    },
	    g: function(x, p) {
	      return x.toPrecision(p);
	    },
	    e: function(x, p) {
	      return x.toExponential(p);
	    },
	    f: function(x, p) {
	      return x.toFixed(p);
	    },
	    r: function(x, p) {
	      return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
	    }
	  });
	  function d3_format_typeDefault(x) {
	    return x + "";
	  }
	  var d3_time = d3.time = {}, d3_date = Date;
	  function d3_date_utc() {
	    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
	  }
	  d3_date_utc.prototype = {
	    getDate: function() {
	      return this._.getUTCDate();
	    },
	    getDay: function() {
	      return this._.getUTCDay();
	    },
	    getFullYear: function() {
	      return this._.getUTCFullYear();
	    },
	    getHours: function() {
	      return this._.getUTCHours();
	    },
	    getMilliseconds: function() {
	      return this._.getUTCMilliseconds();
	    },
	    getMinutes: function() {
	      return this._.getUTCMinutes();
	    },
	    getMonth: function() {
	      return this._.getUTCMonth();
	    },
	    getSeconds: function() {
	      return this._.getUTCSeconds();
	    },
	    getTime: function() {
	      return this._.getTime();
	    },
	    getTimezoneOffset: function() {
	      return 0;
	    },
	    valueOf: function() {
	      return this._.valueOf();
	    },
	    setDate: function() {
	      d3_time_prototype.setUTCDate.apply(this._, arguments);
	    },
	    setDay: function() {
	      d3_time_prototype.setUTCDay.apply(this._, arguments);
	    },
	    setFullYear: function() {
	      d3_time_prototype.setUTCFullYear.apply(this._, arguments);
	    },
	    setHours: function() {
	      d3_time_prototype.setUTCHours.apply(this._, arguments);
	    },
	    setMilliseconds: function() {
	      d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
	    },
	    setMinutes: function() {
	      d3_time_prototype.setUTCMinutes.apply(this._, arguments);
	    },
	    setMonth: function() {
	      d3_time_prototype.setUTCMonth.apply(this._, arguments);
	    },
	    setSeconds: function() {
	      d3_time_prototype.setUTCSeconds.apply(this._, arguments);
	    },
	    setTime: function() {
	      d3_time_prototype.setTime.apply(this._, arguments);
	    }
	  };
	  var d3_time_prototype = Date.prototype;
	  function d3_time_interval(local, step, number) {
	    function round(date) {
	      var d0 = local(date), d1 = offset(d0, 1);
	      return date - d0 < d1 - date ? d0 : d1;
	    }
	    function ceil(date) {
	      step(date = local(new d3_date(date - 1)), 1);
	      return date;
	    }
	    function offset(date, k) {
	      step(date = new d3_date(+date), k);
	      return date;
	    }
	    function range(t0, t1, dt) {
	      var time = ceil(t0), times = [];
	      if (dt > 1) {
	        while (time < t1) {
	          if (!(number(time) % dt)) times.push(new Date(+time));
	          step(time, 1);
	        }
	      } else {
	        while (time < t1) times.push(new Date(+time)), step(time, 1);
	      }
	      return times;
	    }
	    function range_utc(t0, t1, dt) {
	      try {
	        d3_date = d3_date_utc;
	        var utc = new d3_date_utc();
	        utc._ = t0;
	        return range(utc, t1, dt);
	      } finally {
	        d3_date = Date;
	      }
	    }
	    local.floor = local;
	    local.round = round;
	    local.ceil = ceil;
	    local.offset = offset;
	    local.range = range;
	    var utc = local.utc = d3_time_interval_utc(local);
	    utc.floor = utc;
	    utc.round = d3_time_interval_utc(round);
	    utc.ceil = d3_time_interval_utc(ceil);
	    utc.offset = d3_time_interval_utc(offset);
	    utc.range = range_utc;
	    return local;
	  }
	  function d3_time_interval_utc(method) {
	    return function(date, k) {
	      try {
	        d3_date = d3_date_utc;
	        var utc = new d3_date_utc();
	        utc._ = date;
	        return method(utc, k)._;
	      } finally {
	        d3_date = Date;
	      }
	    };
	  }
	  d3_time.year = d3_time_interval(function(date) {
	    date = d3_time.day(date);
	    date.setMonth(0, 1);
	    return date;
	  }, function(date, offset) {
	    date.setFullYear(date.getFullYear() + offset);
	  }, function(date) {
	    return date.getFullYear();
	  });
	  d3_time.years = d3_time.year.range;
	  d3_time.years.utc = d3_time.year.utc.range;
	  d3_time.day = d3_time_interval(function(date) {
	    var day = new d3_date(2e3, 0);
	    day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
	    return day;
	  }, function(date, offset) {
	    date.setDate(date.getDate() + offset);
	  }, function(date) {
	    return date.getDate() - 1;
	  });
	  d3_time.days = d3_time.day.range;
	  d3_time.days.utc = d3_time.day.utc.range;
	  d3_time.dayOfYear = function(date) {
	    var year = d3_time.year(date);
	    return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
	  };
	  [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ].forEach(function(day, i) {
	    i = 7 - i;
	    var interval = d3_time[day] = d3_time_interval(function(date) {
	      (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
	      return date;
	    }, function(date, offset) {
	      date.setDate(date.getDate() + Math.floor(offset) * 7);
	    }, function(date) {
	      var day = d3_time.year(date).getDay();
	      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
	    });
	    d3_time[day + "s"] = interval.range;
	    d3_time[day + "s"].utc = interval.utc.range;
	    d3_time[day + "OfYear"] = function(date) {
	      var day = d3_time.year(date).getDay();
	      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7);
	    };
	  });
	  d3_time.week = d3_time.sunday;
	  d3_time.weeks = d3_time.sunday.range;
	  d3_time.weeks.utc = d3_time.sunday.utc.range;
	  d3_time.weekOfYear = d3_time.sundayOfYear;
	  function d3_locale_timeFormat(locale) {
	    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_days = locale.days, locale_shortDays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
	    function d3_time_format(template) {
	      var n = template.length;
	      function format(date) {
	        var string = [], i = -1, j = 0, c, p, f;
	        while (++i < n) {
	          if (template.charCodeAt(i) === 37) {
	            string.push(template.slice(j, i));
	            if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null) c = template.charAt(++i);
	            if (f = d3_time_formats[c]) c = f(date, p == null ? c === "e" ? " " : "0" : p);
	            string.push(c);
	            j = i + 1;
	          }
	        }
	        string.push(template.slice(j, i));
	        return string.join("");
	      }
	      format.parse = function(string) {
	        var d = {
	          y: 1900,
	          m: 0,
	          d: 1,
	          H: 0,
	          M: 0,
	          S: 0,
	          L: 0,
	          Z: null
	        }, i = d3_time_parse(d, template, string, 0);
	        if (i != string.length) return null;
	        if ("p" in d) d.H = d.H % 12 + d.p * 12;
	        var localZ = d.Z != null && d3_date !== d3_date_utc, date = new (localZ ? d3_date_utc : d3_date)();
	        if ("j" in d) date.setFullYear(d.y, 0, d.j); else if ("W" in d || "U" in d) {
	          if (!("w" in d)) d.w = "W" in d ? 1 : 0;
	          date.setFullYear(d.y, 0, 1);
	          date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7);
	        } else date.setFullYear(d.y, d.m, d.d);
	        date.setHours(d.H + (d.Z / 100 | 0), d.M + d.Z % 100, d.S, d.L);
	        return localZ ? date._ : date;
	      };
	      format.toString = function() {
	        return template;
	      };
	      return format;
	    }
	    function d3_time_parse(date, template, string, j) {
	      var c, p, t, i = 0, n = template.length, m = string.length;
	      while (i < n) {
	        if (j >= m) return -1;
	        c = template.charCodeAt(i++);
	        if (c === 37) {
	          t = template.charAt(i++);
	          p = d3_time_parsers[t in d3_time_formatPads ? template.charAt(i++) : t];
	          if (!p || (j = p(date, string, j)) < 0) return -1;
	        } else if (c != string.charCodeAt(j++)) {
	          return -1;
	        }
	      }
	      return j;
	    }
	    d3_time_format.utc = function(template) {
	      var local = d3_time_format(template);
	      function format(date) {
	        try {
	          d3_date = d3_date_utc;
	          var utc = new d3_date();
	          utc._ = date;
	          return local(utc);
	        } finally {
	          d3_date = Date;
	        }
	      }
	      format.parse = function(string) {
	        try {
	          d3_date = d3_date_utc;
	          var date = local.parse(string);
	          return date && date._;
	        } finally {
	          d3_date = Date;
	        }
	      };
	      format.toString = local.toString;
	      return format;
	    };
	    d3_time_format.multi = d3_time_format.utc.multi = d3_time_formatMulti;
	    var d3_time_periodLookup = d3.map(), d3_time_dayRe = d3_time_formatRe(locale_days), d3_time_dayLookup = d3_time_formatLookup(locale_days), d3_time_dayAbbrevRe = d3_time_formatRe(locale_shortDays), d3_time_dayAbbrevLookup = d3_time_formatLookup(locale_shortDays), d3_time_monthRe = d3_time_formatRe(locale_months), d3_time_monthLookup = d3_time_formatLookup(locale_months), d3_time_monthAbbrevRe = d3_time_formatRe(locale_shortMonths), d3_time_monthAbbrevLookup = d3_time_formatLookup(locale_shortMonths);
	    locale_periods.forEach(function(p, i) {
	      d3_time_periodLookup.set(p.toLowerCase(), i);
	    });
	    var d3_time_formats = {
	      a: function(d) {
	        return locale_shortDays[d.getDay()];
	      },
	      A: function(d) {
	        return locale_days[d.getDay()];
	      },
	      b: function(d) {
	        return locale_shortMonths[d.getMonth()];
	      },
	      B: function(d) {
	        return locale_months[d.getMonth()];
	      },
	      c: d3_time_format(locale_dateTime),
	      d: function(d, p) {
	        return d3_time_formatPad(d.getDate(), p, 2);
	      },
	      e: function(d, p) {
	        return d3_time_formatPad(d.getDate(), p, 2);
	      },
	      H: function(d, p) {
	        return d3_time_formatPad(d.getHours(), p, 2);
	      },
	      I: function(d, p) {
	        return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
	      },
	      j: function(d, p) {
	        return d3_time_formatPad(1 + d3_time.dayOfYear(d), p, 3);
	      },
	      L: function(d, p) {
	        return d3_time_formatPad(d.getMilliseconds(), p, 3);
	      },
	      m: function(d, p) {
	        return d3_time_formatPad(d.getMonth() + 1, p, 2);
	      },
	      M: function(d, p) {
	        return d3_time_formatPad(d.getMinutes(), p, 2);
	      },
	      p: function(d) {
	        return locale_periods[+(d.getHours() >= 12)];
	      },
	      S: function(d, p) {
	        return d3_time_formatPad(d.getSeconds(), p, 2);
	      },
	      U: function(d, p) {
	        return d3_time_formatPad(d3_time.sundayOfYear(d), p, 2);
	      },
	      w: function(d) {
	        return d.getDay();
	      },
	      W: function(d, p) {
	        return d3_time_formatPad(d3_time.mondayOfYear(d), p, 2);
	      },
	      x: d3_time_format(locale_date),
	      X: d3_time_format(locale_time),
	      y: function(d, p) {
	        return d3_time_formatPad(d.getFullYear() % 100, p, 2);
	      },
	      Y: function(d, p) {
	        return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
	      },
	      Z: d3_time_zone,
	      "%": function() {
	        return "%";
	      }
	    };
	    var d3_time_parsers = {
	      a: d3_time_parseWeekdayAbbrev,
	      A: d3_time_parseWeekday,
	      b: d3_time_parseMonthAbbrev,
	      B: d3_time_parseMonth,
	      c: d3_time_parseLocaleFull,
	      d: d3_time_parseDay,
	      e: d3_time_parseDay,
	      H: d3_time_parseHour24,
	      I: d3_time_parseHour24,
	      j: d3_time_parseDayOfYear,
	      L: d3_time_parseMilliseconds,
	      m: d3_time_parseMonthNumber,
	      M: d3_time_parseMinutes,
	      p: d3_time_parseAmPm,
	      S: d3_time_parseSeconds,
	      U: d3_time_parseWeekNumberSunday,
	      w: d3_time_parseWeekdayNumber,
	      W: d3_time_parseWeekNumberMonday,
	      x: d3_time_parseLocaleDate,
	      X: d3_time_parseLocaleTime,
	      y: d3_time_parseYear,
	      Y: d3_time_parseFullYear,
	      Z: d3_time_parseZone,
	      "%": d3_time_parseLiteralPercent
	    };
	    function d3_time_parseWeekdayAbbrev(date, string, i) {
	      d3_time_dayAbbrevRe.lastIndex = 0;
	      var n = d3_time_dayAbbrevRe.exec(string.slice(i));
	      return n ? (date.w = d3_time_dayAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseWeekday(date, string, i) {
	      d3_time_dayRe.lastIndex = 0;
	      var n = d3_time_dayRe.exec(string.slice(i));
	      return n ? (date.w = d3_time_dayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseMonthAbbrev(date, string, i) {
	      d3_time_monthAbbrevRe.lastIndex = 0;
	      var n = d3_time_monthAbbrevRe.exec(string.slice(i));
	      return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseMonth(date, string, i) {
	      d3_time_monthRe.lastIndex = 0;
	      var n = d3_time_monthRe.exec(string.slice(i));
	      return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseLocaleFull(date, string, i) {
	      return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
	    }
	    function d3_time_parseLocaleDate(date, string, i) {
	      return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
	    }
	    function d3_time_parseLocaleTime(date, string, i) {
	      return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
	    }
	    function d3_time_parseAmPm(date, string, i) {
	      var n = d3_time_periodLookup.get(string.slice(i, i += 2).toLowerCase());
	      return n == null ? -1 : (date.p = n, i);
	    }
	    return d3_time_format;
	  }
	  var d3_time_formatPads = {
	    "-": "",
	    _: " ",
	    "0": "0"
	  }, d3_time_numberRe = /^\s*\d+/, d3_time_percentRe = /^%/;
	  function d3_time_formatPad(value, fill, width) {
	    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
	    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
	  }
	  function d3_time_formatRe(names) {
	    return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
	  }
	  function d3_time_formatLookup(names) {
	    var map = new d3_Map(), i = -1, n = names.length;
	    while (++i < n) map.set(names[i].toLowerCase(), i);
	    return map;
	  }
	  function d3_time_parseWeekdayNumber(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 1));
	    return n ? (date.w = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseWeekNumberSunday(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i));
	    return n ? (date.U = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseWeekNumberMonday(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i));
	    return n ? (date.W = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseFullYear(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 4));
	    return n ? (date.y = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseYear(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.y = d3_time_expandYear(+n[0]), i + n[0].length) : -1;
	  }
	  function d3_time_parseZone(date, string, i) {
	    return /^[+-]\d{4}$/.test(string = string.slice(i, i + 5)) ? (date.Z = -string, 
	    i + 5) : -1;
	  }
	  function d3_time_expandYear(d) {
	    return d + (d > 68 ? 1900 : 2e3);
	  }
	  function d3_time_parseMonthNumber(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.m = n[0] - 1, i + n[0].length) : -1;
	  }
	  function d3_time_parseDay(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.d = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseDayOfYear(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
	    return n ? (date.j = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseHour24(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.H = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseMinutes(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.M = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseSeconds(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 2));
	    return n ? (date.S = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseMilliseconds(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.slice(i, i + 3));
	    return n ? (date.L = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_zone(d) {
	    var z = d.getTimezoneOffset(), zs = z > 0 ? "-" : "+", zh = abs(z) / 60 | 0, zm = abs(z) % 60;
	    return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
	  }
	  function d3_time_parseLiteralPercent(date, string, i) {
	    d3_time_percentRe.lastIndex = 0;
	    var n = d3_time_percentRe.exec(string.slice(i, i + 1));
	    return n ? i + n[0].length : -1;
	  }
	  function d3_time_formatMulti(formats) {
	    var n = formats.length, i = -1;
	    while (++i < n) formats[i][0] = this(formats[i][0]);
	    return function(date) {
	      var i = 0, f = formats[i];
	      while (!f[1](date)) f = formats[++i];
	      return f[0](date);
	    };
	  }
	  d3.locale = function(locale) {
	    return {
	      numberFormat: d3_locale_numberFormat(locale),
	      timeFormat: d3_locale_timeFormat(locale)
	    };
	  };
	  var d3_locale_enUS = d3.locale({
	    decimal: ".",
	    thousands: ",",
	    grouping: [ 3 ],
	    currency: [ "$", "" ],
	    dateTime: "%a %b %e %X %Y",
	    date: "%m/%d/%Y",
	    time: "%H:%M:%S",
	    periods: [ "AM", "PM" ],
	    days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
	    shortDays: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
	    months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
	    shortMonths: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
	  });
	  d3.format = d3_locale_enUS.numberFormat;
	  d3.geo = {};
	  function d3_adder() {}
	  d3_adder.prototype = {
	    s: 0,
	    t: 0,
	    add: function(y) {
	      d3_adderSum(y, this.t, d3_adderTemp);
	      d3_adderSum(d3_adderTemp.s, this.s, this);
	      if (this.s) this.t += d3_adderTemp.t; else this.s = d3_adderTemp.t;
	    },
	    reset: function() {
	      this.s = this.t = 0;
	    },
	    valueOf: function() {
	      return this.s;
	    }
	  };
	  var d3_adderTemp = new d3_adder();
	  function d3_adderSum(a, b, o) {
	    var x = o.s = a + b, bv = x - a, av = x - bv;
	    o.t = a - av + (b - bv);
	  }
	  d3.geo.stream = function(object, listener) {
	    if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
	      d3_geo_streamObjectType[object.type](object, listener);
	    } else {
	      d3_geo_streamGeometry(object, listener);
	    }
	  };
	  function d3_geo_streamGeometry(geometry, listener) {
	    if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
	      d3_geo_streamGeometryType[geometry.type](geometry, listener);
	    }
	  }
	  var d3_geo_streamObjectType = {
	    Feature: function(feature, listener) {
	      d3_geo_streamGeometry(feature.geometry, listener);
	    },
	    FeatureCollection: function(object, listener) {
	      var features = object.features, i = -1, n = features.length;
	      while (++i < n) d3_geo_streamGeometry(features[i].geometry, listener);
	    }
	  };
	  var d3_geo_streamGeometryType = {
	    Sphere: function(object, listener) {
	      listener.sphere();
	    },
	    Point: function(object, listener) {
	      object = object.coordinates;
	      listener.point(object[0], object[1], object[2]);
	    },
	    MultiPoint: function(object, listener) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) object = coordinates[i], listener.point(object[0], object[1], object[2]);
	    },
	    LineString: function(object, listener) {
	      d3_geo_streamLine(object.coordinates, listener, 0);
	    },
	    MultiLineString: function(object, listener) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) d3_geo_streamLine(coordinates[i], listener, 0);
	    },
	    Polygon: function(object, listener) {
	      d3_geo_streamPolygon(object.coordinates, listener);
	    },
	    MultiPolygon: function(object, listener) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) d3_geo_streamPolygon(coordinates[i], listener);
	    },
	    GeometryCollection: function(object, listener) {
	      var geometries = object.geometries, i = -1, n = geometries.length;
	      while (++i < n) d3_geo_streamGeometry(geometries[i], listener);
	    }
	  };
	  function d3_geo_streamLine(coordinates, listener, closed) {
	    var i = -1, n = coordinates.length - closed, coordinate;
	    listener.lineStart();
	    while (++i < n) coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1], coordinate[2]);
	    listener.lineEnd();
	  }
	  function d3_geo_streamPolygon(coordinates, listener) {
	    var i = -1, n = coordinates.length;
	    listener.polygonStart();
	    while (++i < n) d3_geo_streamLine(coordinates[i], listener, 1);
	    listener.polygonEnd();
	  }
	  d3.geo.area = function(object) {
	    d3_geo_areaSum = 0;
	    d3.geo.stream(object, d3_geo_area);
	    return d3_geo_areaSum;
	  };
	  var d3_geo_areaSum, d3_geo_areaRingSum = new d3_adder();
	  var d3_geo_area = {
	    sphere: function() {
	      d3_geo_areaSum += 4 * π;
	    },
	    point: d3_noop,
	    lineStart: d3_noop,
	    lineEnd: d3_noop,
	    polygonStart: function() {
	      d3_geo_areaRingSum.reset();
	      d3_geo_area.lineStart = d3_geo_areaRingStart;
	    },
	    polygonEnd: function() {
	      var area = 2 * d3_geo_areaRingSum;
	      d3_geo_areaSum += area < 0 ? 4 * π + area : area;
	      d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
	    }
	  };
	  function d3_geo_areaRingStart() {
	    var λ00, φ00, λ0, cosφ0, sinφ0;
	    d3_geo_area.point = function(λ, φ) {
	      d3_geo_area.point = nextPoint;
	      λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), 
	      sinφ0 = Math.sin(φ);
	    };
	    function nextPoint(λ, φ) {
	      λ *= d3_radians;
	      φ = φ * d3_radians / 2 + π / 4;
	      var dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, cosφ = Math.cos(φ), sinφ = Math.sin(φ), k = sinφ0 * sinφ, u = cosφ0 * cosφ + k * Math.cos(adλ), v = k * sdλ * Math.sin(adλ);
	      d3_geo_areaRingSum.add(Math.atan2(v, u));
	      λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
	    }
	    d3_geo_area.lineEnd = function() {
	      nextPoint(λ00, φ00);
	    };
	  }
	  function d3_geo_cartesian(spherical) {
	    var λ = spherical[0], φ = spherical[1], cosφ = Math.cos(φ);
	    return [ cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ) ];
	  }
	  function d3_geo_cartesianDot(a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
	  }
	  function d3_geo_cartesianCross(a, b) {
	    return [ a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0] ];
	  }
	  function d3_geo_cartesianAdd(a, b) {
	    a[0] += b[0];
	    a[1] += b[1];
	    a[2] += b[2];
	  }
	  function d3_geo_cartesianScale(vector, k) {
	    return [ vector[0] * k, vector[1] * k, vector[2] * k ];
	  }
	  function d3_geo_cartesianNormalize(d) {
	    var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
	    d[0] /= l;
	    d[1] /= l;
	    d[2] /= l;
	  }
	  function d3_geo_spherical(cartesian) {
	    return [ Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2]) ];
	  }
	  function d3_geo_sphericalEqual(a, b) {
	    return abs(a[0] - b[0]) < ε && abs(a[1] - b[1]) < ε;
	  }
	  d3.geo.bounds = function() {
	    var λ0, φ0, λ1, φ1, λ_, λ__, φ__, p0, dλSum, ranges, range;
	    var bound = {
	      point: point,
	      lineStart: lineStart,
	      lineEnd: lineEnd,
	      polygonStart: function() {
	        bound.point = ringPoint;
	        bound.lineStart = ringStart;
	        bound.lineEnd = ringEnd;
	        dλSum = 0;
	        d3_geo_area.polygonStart();
	      },
	      polygonEnd: function() {
	        d3_geo_area.polygonEnd();
	        bound.point = point;
	        bound.lineStart = lineStart;
	        bound.lineEnd = lineEnd;
	        if (d3_geo_areaRingSum < 0) λ0 = -(λ1 = 180), φ0 = -(φ1 = 90); else if (dλSum > ε) φ1 = 90; else if (dλSum < -ε) φ0 = -90;
	        range[0] = λ0, range[1] = λ1;
	      }
	    };
	    function point(λ, φ) {
	      ranges.push(range = [ λ0 = λ, λ1 = λ ]);
	      if (φ < φ0) φ0 = φ;
	      if (φ > φ1) φ1 = φ;
	    }
	    function linePoint(λ, φ) {
	      var p = d3_geo_cartesian([ λ * d3_radians, φ * d3_radians ]);
	      if (p0) {
	        var normal = d3_geo_cartesianCross(p0, p), equatorial = [ normal[1], -normal[0], 0 ], inflection = d3_geo_cartesianCross(equatorial, normal);
	        d3_geo_cartesianNormalize(inflection);
	        inflection = d3_geo_spherical(inflection);
	        var dλ = λ - λ_, s = dλ > 0 ? 1 : -1, λi = inflection[0] * d3_degrees * s, antimeridian = abs(dλ) > 180;
	        if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
	          var φi = inflection[1] * d3_degrees;
	          if (φi > φ1) φ1 = φi;
	        } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
	          var φi = -inflection[1] * d3_degrees;
	          if (φi < φ0) φ0 = φi;
	        } else {
	          if (φ < φ0) φ0 = φ;
	          if (φ > φ1) φ1 = φ;
	        }
	        if (antimeridian) {
	          if (λ < λ_) {
	            if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
	          } else {
	            if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
	          }
	        } else {
	          if (λ1 >= λ0) {
	            if (λ < λ0) λ0 = λ;
	            if (λ > λ1) λ1 = λ;
	          } else {
	            if (λ > λ_) {
	              if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
	            } else {
	              if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
	            }
	          }
	        }
	      } else {
	        point(λ, φ);
	      }
	      p0 = p, λ_ = λ;
	    }
	    function lineStart() {
	      bound.point = linePoint;
	    }
	    function lineEnd() {
	      range[0] = λ0, range[1] = λ1;
	      bound.point = point;
	      p0 = null;
	    }
	    function ringPoint(λ, φ) {
	      if (p0) {
	        var dλ = λ - λ_;
	        dλSum += abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ;
	      } else λ__ = λ, φ__ = φ;
	      d3_geo_area.point(λ, φ);
	      linePoint(λ, φ);
	    }
	    function ringStart() {
	      d3_geo_area.lineStart();
	    }
	    function ringEnd() {
	      ringPoint(λ__, φ__);
	      d3_geo_area.lineEnd();
	      if (abs(dλSum) > ε) λ0 = -(λ1 = 180);
	      range[0] = λ0, range[1] = λ1;
	      p0 = null;
	    }
	    function angle(λ0, λ1) {
	      return (λ1 -= λ0) < 0 ? λ1 + 360 : λ1;
	    }
	    function compareRanges(a, b) {
	      return a[0] - b[0];
	    }
	    function withinRange(x, range) {
	      return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
	    }
	    return function(feature) {
	      φ1 = λ1 = -(λ0 = φ0 = Infinity);
	      ranges = [];
	      d3.geo.stream(feature, bound);
	      var n = ranges.length;
	      if (n) {
	        ranges.sort(compareRanges);
	        for (var i = 1, a = ranges[0], b, merged = [ a ]; i < n; ++i) {
	          b = ranges[i];
	          if (withinRange(b[0], a) || withinRange(b[1], a)) {
	            if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
	            if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
	          } else {
	            merged.push(a = b);
	          }
	        }
	        var best = -Infinity, dλ;
	        for (var n = merged.length - 1, i = 0, a = merged[n], b; i <= n; a = b, ++i) {
	          b = merged[i];
	          if ((dλ = angle(a[1], b[0])) > best) best = dλ, λ0 = b[0], λ1 = a[1];
	        }
	      }
	      ranges = range = null;
	      return λ0 === Infinity || φ0 === Infinity ? [ [ NaN, NaN ], [ NaN, NaN ] ] : [ [ λ0, φ0 ], [ λ1, φ1 ] ];
	    };
	  }();
	  d3.geo.centroid = function(object) {
	    d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
	    d3.geo.stream(object, d3_geo_centroid);
	    var x = d3_geo_centroidX2, y = d3_geo_centroidY2, z = d3_geo_centroidZ2, m = x * x + y * y + z * z;
	    if (m < ε2) {
	      x = d3_geo_centroidX1, y = d3_geo_centroidY1, z = d3_geo_centroidZ1;
	      if (d3_geo_centroidW1 < ε) x = d3_geo_centroidX0, y = d3_geo_centroidY0, z = d3_geo_centroidZ0;
	      m = x * x + y * y + z * z;
	      if (m < ε2) return [ NaN, NaN ];
	    }
	    return [ Math.atan2(y, x) * d3_degrees, d3_asin(z / Math.sqrt(m)) * d3_degrees ];
	  };
	  var d3_geo_centroidW0, d3_geo_centroidW1, d3_geo_centroidX0, d3_geo_centroidY0, d3_geo_centroidZ0, d3_geo_centroidX1, d3_geo_centroidY1, d3_geo_centroidZ1, d3_geo_centroidX2, d3_geo_centroidY2, d3_geo_centroidZ2;
	  var d3_geo_centroid = {
	    sphere: d3_noop,
	    point: d3_geo_centroidPoint,
	    lineStart: d3_geo_centroidLineStart,
	    lineEnd: d3_geo_centroidLineEnd,
	    polygonStart: function() {
	      d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
	    },
	    polygonEnd: function() {
	      d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
	    }
	  };
	  function d3_geo_centroidPoint(λ, φ) {
	    λ *= d3_radians;
	    var cosφ = Math.cos(φ *= d3_radians);
	    d3_geo_centroidPointXYZ(cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ));
	  }
	  function d3_geo_centroidPointXYZ(x, y, z) {
	    ++d3_geo_centroidW0;
	    d3_geo_centroidX0 += (x - d3_geo_centroidX0) / d3_geo_centroidW0;
	    d3_geo_centroidY0 += (y - d3_geo_centroidY0) / d3_geo_centroidW0;
	    d3_geo_centroidZ0 += (z - d3_geo_centroidZ0) / d3_geo_centroidW0;
	  }
	  function d3_geo_centroidLineStart() {
	    var x0, y0, z0;
	    d3_geo_centroid.point = function(λ, φ) {
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians);
	      x0 = cosφ * Math.cos(λ);
	      y0 = cosφ * Math.sin(λ);
	      z0 = Math.sin(φ);
	      d3_geo_centroid.point = nextPoint;
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    };
	    function nextPoint(λ, φ) {
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
	      d3_geo_centroidW1 += w;
	      d3_geo_centroidX1 += w * (x0 + (x0 = x));
	      d3_geo_centroidY1 += w * (y0 + (y0 = y));
	      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    }
	  }
	  function d3_geo_centroidLineEnd() {
	    d3_geo_centroid.point = d3_geo_centroidPoint;
	  }
	  function d3_geo_centroidRingStart() {
	    var λ00, φ00, x0, y0, z0;
	    d3_geo_centroid.point = function(λ, φ) {
	      λ00 = λ, φ00 = φ;
	      d3_geo_centroid.point = nextPoint;
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians);
	      x0 = cosφ * Math.cos(λ);
	      y0 = cosφ * Math.sin(λ);
	      z0 = Math.sin(φ);
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    };
	    d3_geo_centroid.lineEnd = function() {
	      nextPoint(λ00, φ00);
	      d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
	      d3_geo_centroid.point = d3_geo_centroidPoint;
	    };
	    function nextPoint(λ, φ) {
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = Math.sqrt(cx * cx + cy * cy + cz * cz), u = x0 * x + y0 * y + z0 * z, v = m && -d3_acos(u) / m, w = Math.atan2(m, u);
	      d3_geo_centroidX2 += v * cx;
	      d3_geo_centroidY2 += v * cy;
	      d3_geo_centroidZ2 += v * cz;
	      d3_geo_centroidW1 += w;
	      d3_geo_centroidX1 += w * (x0 + (x0 = x));
	      d3_geo_centroidY1 += w * (y0 + (y0 = y));
	      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    }
	  }
	  function d3_geo_compose(a, b) {
	    function compose(x, y) {
	      return x = a(x, y), b(x[0], x[1]);
	    }
	    if (a.invert && b.invert) compose.invert = function(x, y) {
	      return x = b.invert(x, y), x && a.invert(x[0], x[1]);
	    };
	    return compose;
	  }
	  function d3_true() {
	    return true;
	  }
	  function d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener) {
	    var subject = [], clip = [];
	    segments.forEach(function(segment) {
	      if ((n = segment.length - 1) <= 0) return;
	      var n, p0 = segment[0], p1 = segment[n];
	      if (d3_geo_sphericalEqual(p0, p1)) {
	        listener.lineStart();
	        for (var i = 0; i < n; ++i) listener.point((p0 = segment[i])[0], p0[1]);
	        listener.lineEnd();
	        return;
	      }
	      var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true), b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
	      a.o = b;
	      subject.push(a);
	      clip.push(b);
	      a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
	      b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
	      a.o = b;
	      subject.push(a);
	      clip.push(b);
	    });
	    clip.sort(compare);
	    d3_geo_clipPolygonLinkCircular(subject);
	    d3_geo_clipPolygonLinkCircular(clip);
	    if (!subject.length) return;
	    for (var i = 0, entry = clipStartInside, n = clip.length; i < n; ++i) {
	      clip[i].e = entry = !entry;
	    }
	    var start = subject[0], points, point;
	    while (1) {
	      var current = start, isSubject = true;
	      while (current.v) if ((current = current.n) === start) return;
	      points = current.z;
	      listener.lineStart();
	      do {
	        current.v = current.o.v = true;
	        if (current.e) {
	          if (isSubject) {
	            for (var i = 0, n = points.length; i < n; ++i) listener.point((point = points[i])[0], point[1]);
	          } else {
	            interpolate(current.x, current.n.x, 1, listener);
	          }
	          current = current.n;
	        } else {
	          if (isSubject) {
	            points = current.p.z;
	            for (var i = points.length - 1; i >= 0; --i) listener.point((point = points[i])[0], point[1]);
	          } else {
	            interpolate(current.x, current.p.x, -1, listener);
	          }
	          current = current.p;
	        }
	        current = current.o;
	        points = current.z;
	        isSubject = !isSubject;
	      } while (!current.v);
	      listener.lineEnd();
	    }
	  }
	  function d3_geo_clipPolygonLinkCircular(array) {
	    if (!(n = array.length)) return;
	    var n, i = 0, a = array[0], b;
	    while (++i < n) {
	      a.n = b = array[i];
	      b.p = a;
	      a = b;
	    }
	    a.n = b = array[0];
	    b.p = a;
	  }
	  function d3_geo_clipPolygonIntersection(point, points, other, entry) {
	    this.x = point;
	    this.z = points;
	    this.o = other;
	    this.e = entry;
	    this.v = false;
	    this.n = this.p = null;
	  }
	  function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {
	    return function(rotate, listener) {
	      var line = clipLine(listener), rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
	      var clip = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() {
	          clip.point = pointRing;
	          clip.lineStart = ringStart;
	          clip.lineEnd = ringEnd;
	          segments = [];
	          polygon = [];
	        },
	        polygonEnd: function() {
	          clip.point = point;
	          clip.lineStart = lineStart;
	          clip.lineEnd = lineEnd;
	          segments = d3.merge(segments);
	          var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);
	          if (segments.length) {
	            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
	            d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate, listener);
	          } else if (clipStartInside) {
	            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
	            listener.lineStart();
	            interpolate(null, null, 1, listener);
	            listener.lineEnd();
	          }
	          if (polygonStarted) listener.polygonEnd(), polygonStarted = false;
	          segments = polygon = null;
	        },
	        sphere: function() {
	          listener.polygonStart();
	          listener.lineStart();
	          interpolate(null, null, 1, listener);
	          listener.lineEnd();
	          listener.polygonEnd();
	        }
	      };
	      function point(λ, φ) {
	        var point = rotate(λ, φ);
	        if (pointVisible(λ = point[0], φ = point[1])) listener.point(λ, φ);
	      }
	      function pointLine(λ, φ) {
	        var point = rotate(λ, φ);
	        line.point(point[0], point[1]);
	      }
	      function lineStart() {
	        clip.point = pointLine;
	        line.lineStart();
	      }
	      function lineEnd() {
	        clip.point = point;
	        line.lineEnd();
	      }
	      var segments;
	      var buffer = d3_geo_clipBufferListener(), ringListener = clipLine(buffer), polygonStarted = false, polygon, ring;
	      function pointRing(λ, φ) {
	        ring.push([ λ, φ ]);
	        var point = rotate(λ, φ);
	        ringListener.point(point[0], point[1]);
	      }
	      function ringStart() {
	        ringListener.lineStart();
	        ring = [];
	      }
	      function ringEnd() {
	        pointRing(ring[0][0], ring[0][1]);
	        ringListener.lineEnd();
	        var clean = ringListener.clean(), ringSegments = buffer.buffer(), segment, n = ringSegments.length;
	        ring.pop();
	        polygon.push(ring);
	        ring = null;
	        if (!n) return;
	        if (clean & 1) {
	          segment = ringSegments[0];
	          var n = segment.length - 1, i = -1, point;
	          if (n > 0) {
	            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
	            listener.lineStart();
	            while (++i < n) listener.point((point = segment[i])[0], point[1]);
	            listener.lineEnd();
	          }
	          return;
	        }
	        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
	        segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
	      }
	      return clip;
	    };
	  }
	  function d3_geo_clipSegmentLength1(segment) {
	    return segment.length > 1;
	  }
	  function d3_geo_clipBufferListener() {
	    var lines = [], line;
	    return {
	      lineStart: function() {
	        lines.push(line = []);
	      },
	      point: function(λ, φ) {
	        line.push([ λ, φ ]);
	      },
	      lineEnd: d3_noop,
	      buffer: function() {
	        var buffer = lines;
	        lines = [];
	        line = null;
	        return buffer;
	      },
	      rejoin: function() {
	        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
	      }
	    };
	  }
	  function d3_geo_clipSort(a, b) {
	    return ((a = a.x)[0] < 0 ? a[1] - halfπ - ε : halfπ - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfπ - ε : halfπ - b[1]);
	  }
	  var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [ -π, -π / 2 ]);
	  function d3_geo_clipAntimeridianLine(listener) {
	    var λ0 = NaN, φ0 = NaN, sλ0 = NaN, clean;
	    return {
	      lineStart: function() {
	        listener.lineStart();
	        clean = 1;
	      },
	      point: function(λ1, φ1) {
	        var sλ1 = λ1 > 0 ? π : -π, dλ = abs(λ1 - λ0);
	        if (abs(dλ - π) < ε) {
	          listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? halfπ : -halfπ);
	          listener.point(sλ0, φ0);
	          listener.lineEnd();
	          listener.lineStart();
	          listener.point(sλ1, φ0);
	          listener.point(λ1, φ0);
	          clean = 0;
	        } else if (sλ0 !== sλ1 && dλ >= π) {
	          if (abs(λ0 - sλ0) < ε) λ0 -= sλ0 * ε;
	          if (abs(λ1 - sλ1) < ε) λ1 -= sλ1 * ε;
	          φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
	          listener.point(sλ0, φ0);
	          listener.lineEnd();
	          listener.lineStart();
	          listener.point(sλ1, φ0);
	          clean = 0;
	        }
	        listener.point(λ0 = λ1, φ0 = φ1);
	        sλ0 = sλ1;
	      },
	      lineEnd: function() {
	        listener.lineEnd();
	        λ0 = φ0 = NaN;
	      },
	      clean: function() {
	        return 2 - clean;
	      }
	    };
	  }
	  function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
	    var cosφ0, cosφ1, sinλ0_λ1 = Math.sin(λ0 - λ1);
	    return abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
	  }
	  function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
	    var φ;
	    if (from == null) {
	      φ = direction * halfπ;
	      listener.point(-π, φ);
	      listener.point(0, φ);
	      listener.point(π, φ);
	      listener.point(π, 0);
	      listener.point(π, -φ);
	      listener.point(0, -φ);
	      listener.point(-π, -φ);
	      listener.point(-π, 0);
	      listener.point(-π, φ);
	    } else if (abs(from[0] - to[0]) > ε) {
	      var s = from[0] < to[0] ? π : -π;
	      φ = direction * s / 2;
	      listener.point(-s, φ);
	      listener.point(0, φ);
	      listener.point(s, φ);
	    } else {
	      listener.point(to[0], to[1]);
	    }
	  }
	  function d3_geo_pointInPolygon(point, polygon) {
	    var meridian = point[0], parallel = point[1], meridianNormal = [ Math.sin(meridian), -Math.cos(meridian), 0 ], polarAngle = 0, winding = 0;
	    d3_geo_areaRingSum.reset();
	    for (var i = 0, n = polygon.length; i < n; ++i) {
	      var ring = polygon[i], m = ring.length;
	      if (!m) continue;
	      var point0 = ring[0], λ0 = point0[0], φ0 = point0[1] / 2 + π / 4, sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), j = 1;
	      while (true) {
	        if (j === m) j = 0;
	        point = ring[j];
	        var λ = point[0], φ = point[1] / 2 + π / 4, sinφ = Math.sin(φ), cosφ = Math.cos(φ), dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, antimeridian = adλ > π, k = sinφ0 * sinφ;
	        d3_geo_areaRingSum.add(Math.atan2(k * sdλ * Math.sin(adλ), cosφ0 * cosφ + k * Math.cos(adλ)));
	        polarAngle += antimeridian ? dλ + sdλ * τ : dλ;
	        if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {
	          var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
	          d3_geo_cartesianNormalize(arc);
	          var intersection = d3_geo_cartesianCross(meridianNormal, arc);
	          d3_geo_cartesianNormalize(intersection);
	          var φarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);
	          if (parallel > φarc || parallel === φarc && (arc[0] || arc[1])) {
	            winding += antimeridian ^ dλ >= 0 ? 1 : -1;
	          }
	        }
	        if (!j++) break;
	        λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ, point0 = point;
	      }
	    }
	    return (polarAngle < -ε || polarAngle < ε && d3_geo_areaRingSum < -ε) ^ winding & 1;
	  }
	  function d3_geo_clipCircle(radius) {
	    var cr = Math.cos(radius), smallRadius = cr > 0, notHemisphere = abs(cr) > ε, interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
	    return d3_geo_clip(visible, clipLine, interpolate, smallRadius ? [ 0, -radius ] : [ -π, radius - π ]);
	    function visible(λ, φ) {
	      return Math.cos(λ) * Math.cos(φ) > cr;
	    }
	    function clipLine(listener) {
	      var point0, c0, v0, v00, clean;
	      return {
	        lineStart: function() {
	          v00 = v0 = false;
	          clean = 1;
	        },
	        point: function(λ, φ) {
	          var point1 = [ λ, φ ], point2, v = visible(λ, φ), c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π : -π), φ) : 0;
	          if (!point0 && (v00 = v0 = v)) listener.lineStart();
	          if (v !== v0) {
	            point2 = intersect(point0, point1);
	            if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
	              point1[0] += ε;
	              point1[1] += ε;
	              v = visible(point1[0], point1[1]);
	            }
	          }
	          if (v !== v0) {
	            clean = 0;
	            if (v) {
	              listener.lineStart();
	              point2 = intersect(point1, point0);
	              listener.point(point2[0], point2[1]);
	            } else {
	              point2 = intersect(point0, point1);
	              listener.point(point2[0], point2[1]);
	              listener.lineEnd();
	            }
	            point0 = point2;
	          } else if (notHemisphere && point0 && smallRadius ^ v) {
	            var t;
	            if (!(c & c0) && (t = intersect(point1, point0, true))) {
	              clean = 0;
	              if (smallRadius) {
	                listener.lineStart();
	                listener.point(t[0][0], t[0][1]);
	                listener.point(t[1][0], t[1][1]);
	                listener.lineEnd();
	              } else {
	                listener.point(t[1][0], t[1][1]);
	                listener.lineEnd();
	                listener.lineStart();
	                listener.point(t[0][0], t[0][1]);
	              }
	            }
	          }
	          if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
	            listener.point(point1[0], point1[1]);
	          }
	          point0 = point1, v0 = v, c0 = c;
	        },
	        lineEnd: function() {
	          if (v0) listener.lineEnd();
	          point0 = null;
	        },
	        clean: function() {
	          return clean | (v00 && v0) << 1;
	        }
	      };
	    }
	    function intersect(a, b, two) {
	      var pa = d3_geo_cartesian(a), pb = d3_geo_cartesian(b);
	      var n1 = [ 1, 0, 0 ], n2 = d3_geo_cartesianCross(pa, pb), n2n2 = d3_geo_cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
	      if (!determinant) return !two && a;
	      var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = d3_geo_cartesianCross(n1, n2), A = d3_geo_cartesianScale(n1, c1), B = d3_geo_cartesianScale(n2, c2);
	      d3_geo_cartesianAdd(A, B);
	      var u = n1xn2, w = d3_geo_cartesianDot(A, u), uu = d3_geo_cartesianDot(u, u), t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
	      if (t2 < 0) return;
	      var t = Math.sqrt(t2), q = d3_geo_cartesianScale(u, (-w - t) / uu);
	      d3_geo_cartesianAdd(q, A);
	      q = d3_geo_spherical(q);
	      if (!two) return q;
	      var λ0 = a[0], λ1 = b[0], φ0 = a[1], φ1 = b[1], z;
	      if (λ1 < λ0) z = λ0, λ0 = λ1, λ1 = z;
	      var δλ = λ1 - λ0, polar = abs(δλ - π) < ε, meridian = polar || δλ < ε;
	      if (!polar && φ1 < φ0) z = φ0, φ0 = φ1, φ1 = z;
	      if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {
	        var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);
	        d3_geo_cartesianAdd(q1, A);
	        return [ q, d3_geo_spherical(q1) ];
	      }
	    }
	    function code(λ, φ) {
	      var r = smallRadius ? radius : π - radius, code = 0;
	      if (λ < -r) code |= 1; else if (λ > r) code |= 2;
	      if (φ < -r) code |= 4; else if (φ > r) code |= 8;
	      return code;
	    }
	  }
	  function d3_geom_clipLine(x0, y0, x1, y1) {
	    return function(line) {
	      var a = line.a, b = line.b, ax = a.x, ay = a.y, bx = b.x, by = b.y, t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
	      r = x0 - ax;
	      if (!dx && r > 0) return;
	      r /= dx;
	      if (dx < 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      } else if (dx > 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      }
	      r = x1 - ax;
	      if (!dx && r < 0) return;
	      r /= dx;
	      if (dx < 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      } else if (dx > 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      }
	      r = y0 - ay;
	      if (!dy && r > 0) return;
	      r /= dy;
	      if (dy < 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      } else if (dy > 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      }
	      r = y1 - ay;
	      if (!dy && r < 0) return;
	      r /= dy;
	      if (dy < 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      } else if (dy > 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      }
	      if (t0 > 0) line.a = {
	        x: ax + t0 * dx,
	        y: ay + t0 * dy
	      };
	      if (t1 < 1) line.b = {
	        x: ax + t1 * dx,
	        y: ay + t1 * dy
	      };
	      return line;
	    };
	  }
	  var d3_geo_clipExtentMAX = 1e9;
	  d3.geo.clipExtent = function() {
	    var x0, y0, x1, y1, stream, clip, clipExtent = {
	      stream: function(output) {
	        if (stream) stream.valid = false;
	        stream = clip(output);
	        stream.valid = true;
	        return stream;
	      },
	      extent: function(_) {
	        if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
	        clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
	        if (stream) stream.valid = false, stream = null;
	        return clipExtent;
	      }
	    };
	    return clipExtent.extent([ [ 0, 0 ], [ 960, 500 ] ]);
	  };
	  function d3_geo_clipExtent(x0, y0, x1, y1) {
	    return function(listener) {
	      var listener_ = listener, bufferListener = d3_geo_clipBufferListener(), clipLine = d3_geom_clipLine(x0, y0, x1, y1), segments, polygon, ring;
	      var clip = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() {
	          listener = bufferListener;
	          segments = [];
	          polygon = [];
	          clean = true;
	        },
	        polygonEnd: function() {
	          listener = listener_;
	          segments = d3.merge(segments);
	          var clipStartInside = insidePolygon([ x0, y1 ]), inside = clean && clipStartInside, visible = segments.length;
	          if (inside || visible) {
	            listener.polygonStart();
	            if (inside) {
	              listener.lineStart();
	              interpolate(null, null, 1, listener);
	              listener.lineEnd();
	            }
	            if (visible) {
	              d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener);
	            }
	            listener.polygonEnd();
	          }
	          segments = polygon = ring = null;
	        }
	      };
	      function insidePolygon(p) {
	        var wn = 0, n = polygon.length, y = p[1];
	        for (var i = 0; i < n; ++i) {
	          for (var j = 1, v = polygon[i], m = v.length, a = v[0], b; j < m; ++j) {
	            b = v[j];
	            if (a[1] <= y) {
	              if (b[1] > y && d3_cross2d(a, b, p) > 0) ++wn;
	            } else {
	              if (b[1] <= y && d3_cross2d(a, b, p) < 0) --wn;
	            }
	            a = b;
	          }
	        }
	        return wn !== 0;
	      }
	      function interpolate(from, to, direction, listener) {
	        var a = 0, a1 = 0;
	        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
	          do {
	            listener.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
	          } while ((a = (a + direction + 4) % 4) !== a1);
	        } else {
	          listener.point(to[0], to[1]);
	        }
	      }
	      function pointVisible(x, y) {
	        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
	      }
	      function point(x, y) {
	        if (pointVisible(x, y)) listener.point(x, y);
	      }
	      var x__, y__, v__, x_, y_, v_, first, clean;
	      function lineStart() {
	        clip.point = linePoint;
	        if (polygon) polygon.push(ring = []);
	        first = true;
	        v_ = false;
	        x_ = y_ = NaN;
	      }
	      function lineEnd() {
	        if (segments) {
	          linePoint(x__, y__);
	          if (v__ && v_) bufferListener.rejoin();
	          segments.push(bufferListener.buffer());
	        }
	        clip.point = point;
	        if (v_) listener.lineEnd();
	      }
	      function linePoint(x, y) {
	        x = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));
	        y = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));
	        var v = pointVisible(x, y);
	        if (polygon) ring.push([ x, y ]);
	        if (first) {
	          x__ = x, y__ = y, v__ = v;
	          first = false;
	          if (v) {
	            listener.lineStart();
	            listener.point(x, y);
	          }
	        } else {
	          if (v && v_) listener.point(x, y); else {
	            var l = {
	              a: {
	                x: x_,
	                y: y_
	              },
	              b: {
	                x: x,
	                y: y
	              }
	            };
	            if (clipLine(l)) {
	              if (!v_) {
	                listener.lineStart();
	                listener.point(l.a.x, l.a.y);
	              }
	              listener.point(l.b.x, l.b.y);
	              if (!v) listener.lineEnd();
	              clean = false;
	            } else if (v) {
	              listener.lineStart();
	              listener.point(x, y);
	              clean = false;
	            }
	          }
	        }
	        x_ = x, y_ = y, v_ = v;
	      }
	      return clip;
	    };
	    function corner(p, direction) {
	      return abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
	    }
	    function compare(a, b) {
	      return comparePoints(a.x, b.x);
	    }
	    function comparePoints(a, b) {
	      var ca = corner(a, 1), cb = corner(b, 1);
	      return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
	    }
	  }
	  function d3_geo_conic(projectAt) {
	    var φ0 = 0, φ1 = π / 3, m = d3_geo_projectionMutator(projectAt), p = m(φ0, φ1);
	    p.parallels = function(_) {
	      if (!arguments.length) return [ φ0 / π * 180, φ1 / π * 180 ];
	      return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
	    };
	    return p;
	  }
	  function d3_geo_conicEqualArea(φ0, φ1) {
	    var sinφ0 = Math.sin(φ0), n = (sinφ0 + Math.sin(φ1)) / 2, C = 1 + sinφ0 * (2 * n - sinφ0), ρ0 = Math.sqrt(C) / n;
	    function forward(λ, φ) {
	      var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
	      return [ ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ) ];
	    }
	    forward.invert = function(x, y) {
	      var ρ0_y = ρ0 - y;
	      return [ Math.atan2(x, ρ0_y) / n, d3_asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n)) ];
	    };
	    return forward;
	  }
	  (d3.geo.conicEqualArea = function() {
	    return d3_geo_conic(d3_geo_conicEqualArea);
	  }).raw = d3_geo_conicEqualArea;
	  d3.geo.albers = function() {
	    return d3.geo.conicEqualArea().rotate([ 96, 0 ]).center([ -.6, 38.7 ]).parallels([ 29.5, 45.5 ]).scale(1070);
	  };
	  d3.geo.albersUsa = function() {
	    var lower48 = d3.geo.albers();
	    var alaska = d3.geo.conicEqualArea().rotate([ 154, 0 ]).center([ -2, 58.5 ]).parallels([ 55, 65 ]);
	    var hawaii = d3.geo.conicEqualArea().rotate([ 157, 0 ]).center([ -3, 19.9 ]).parallels([ 8, 18 ]);
	    var point, pointStream = {
	      point: function(x, y) {
	        point = [ x, y ];
	      }
	    }, lower48Point, alaskaPoint, hawaiiPoint;
	    function albersUsa(coordinates) {
	      var x = coordinates[0], y = coordinates[1];
	      point = null;
	      (lower48Point(x, y), point) || (alaskaPoint(x, y), point) || hawaiiPoint(x, y);
	      return point;
	    }
	    albersUsa.invert = function(coordinates) {
	      var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
	      return (y >= .12 && y < .234 && x >= -.425 && x < -.214 ? alaska : y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii : lower48).invert(coordinates);
	    };
	    albersUsa.stream = function(stream) {
	      var lower48Stream = lower48.stream(stream), alaskaStream = alaska.stream(stream), hawaiiStream = hawaii.stream(stream);
	      return {
	        point: function(x, y) {
	          lower48Stream.point(x, y);
	          alaskaStream.point(x, y);
	          hawaiiStream.point(x, y);
	        },
	        sphere: function() {
	          lower48Stream.sphere();
	          alaskaStream.sphere();
	          hawaiiStream.sphere();
	        },
	        lineStart: function() {
	          lower48Stream.lineStart();
	          alaskaStream.lineStart();
	          hawaiiStream.lineStart();
	        },
	        lineEnd: function() {
	          lower48Stream.lineEnd();
	          alaskaStream.lineEnd();
	          hawaiiStream.lineEnd();
	        },
	        polygonStart: function() {
	          lower48Stream.polygonStart();
	          alaskaStream.polygonStart();
	          hawaiiStream.polygonStart();
	        },
	        polygonEnd: function() {
	          lower48Stream.polygonEnd();
	          alaskaStream.polygonEnd();
	          hawaiiStream.polygonEnd();
	        }
	      };
	    };
	    albersUsa.precision = function(_) {
	      if (!arguments.length) return lower48.precision();
	      lower48.precision(_);
	      alaska.precision(_);
	      hawaii.precision(_);
	      return albersUsa;
	    };
	    albersUsa.scale = function(_) {
	      if (!arguments.length) return lower48.scale();
	      lower48.scale(_);
	      alaska.scale(_ * .35);
	      hawaii.scale(_);
	      return albersUsa.translate(lower48.translate());
	    };
	    albersUsa.translate = function(_) {
	      if (!arguments.length) return lower48.translate();
	      var k = lower48.scale(), x = +_[0], y = +_[1];
	      lower48Point = lower48.translate(_).clipExtent([ [ x - .455 * k, y - .238 * k ], [ x + .455 * k, y + .238 * k ] ]).stream(pointStream).point;
	      alaskaPoint = alaska.translate([ x - .307 * k, y + .201 * k ]).clipExtent([ [ x - .425 * k + ε, y + .12 * k + ε ], [ x - .214 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
	      hawaiiPoint = hawaii.translate([ x - .205 * k, y + .212 * k ]).clipExtent([ [ x - .214 * k + ε, y + .166 * k + ε ], [ x - .115 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
	      return albersUsa;
	    };
	    return albersUsa.scale(1070);
	  };
	  var d3_geo_pathAreaSum, d3_geo_pathAreaPolygon, d3_geo_pathArea = {
	    point: d3_noop,
	    lineStart: d3_noop,
	    lineEnd: d3_noop,
	    polygonStart: function() {
	      d3_geo_pathAreaPolygon = 0;
	      d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
	    },
	    polygonEnd: function() {
	      d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
	      d3_geo_pathAreaSum += abs(d3_geo_pathAreaPolygon / 2);
	    }
	  };
	  function d3_geo_pathAreaRingStart() {
	    var x00, y00, x0, y0;
	    d3_geo_pathArea.point = function(x, y) {
	      d3_geo_pathArea.point = nextPoint;
	      x00 = x0 = x, y00 = y0 = y;
	    };
	    function nextPoint(x, y) {
	      d3_geo_pathAreaPolygon += y0 * x - x0 * y;
	      x0 = x, y0 = y;
	    }
	    d3_geo_pathArea.lineEnd = function() {
	      nextPoint(x00, y00);
	    };
	  }
	  var d3_geo_pathBoundsX0, d3_geo_pathBoundsY0, d3_geo_pathBoundsX1, d3_geo_pathBoundsY1;
	  var d3_geo_pathBounds = {
	    point: d3_geo_pathBoundsPoint,
	    lineStart: d3_noop,
	    lineEnd: d3_noop,
	    polygonStart: d3_noop,
	    polygonEnd: d3_noop
	  };
	  function d3_geo_pathBoundsPoint(x, y) {
	    if (x < d3_geo_pathBoundsX0) d3_geo_pathBoundsX0 = x;
	    if (x > d3_geo_pathBoundsX1) d3_geo_pathBoundsX1 = x;
	    if (y < d3_geo_pathBoundsY0) d3_geo_pathBoundsY0 = y;
	    if (y > d3_geo_pathBoundsY1) d3_geo_pathBoundsY1 = y;
	  }
	  function d3_geo_pathBuffer() {
	    var pointCircle = d3_geo_pathBufferCircle(4.5), buffer = [];
	    var stream = {
	      point: point,
	      lineStart: function() {
	        stream.point = pointLineStart;
	      },
	      lineEnd: lineEnd,
	      polygonStart: function() {
	        stream.lineEnd = lineEndPolygon;
	      },
	      polygonEnd: function() {
	        stream.lineEnd = lineEnd;
	        stream.point = point;
	      },
	      pointRadius: function(_) {
	        pointCircle = d3_geo_pathBufferCircle(_);
	        return stream;
	      },
	      result: function() {
	        if (buffer.length) {
	          var result = buffer.join("");
	          buffer = [];
	          return result;
	        }
	      }
	    };
	    function point(x, y) {
	      buffer.push("M", x, ",", y, pointCircle);
	    }
	    function pointLineStart(x, y) {
	      buffer.push("M", x, ",", y);
	      stream.point = pointLine;
	    }
	    function pointLine(x, y) {
	      buffer.push("L", x, ",", y);
	    }
	    function lineEnd() {
	      stream.point = point;
	    }
	    function lineEndPolygon() {
	      buffer.push("Z");
	    }
	    return stream;
	  }
	  function d3_geo_pathBufferCircle(radius) {
	    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
	  }
	  var d3_geo_pathCentroid = {
	    point: d3_geo_pathCentroidPoint,
	    lineStart: d3_geo_pathCentroidLineStart,
	    lineEnd: d3_geo_pathCentroidLineEnd,
	    polygonStart: function() {
	      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
	    },
	    polygonEnd: function() {
	      d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
	      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
	      d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
	    }
	  };
	  function d3_geo_pathCentroidPoint(x, y) {
	    d3_geo_centroidX0 += x;
	    d3_geo_centroidY0 += y;
	    ++d3_geo_centroidZ0;
	  }
	  function d3_geo_pathCentroidLineStart() {
	    var x0, y0;
	    d3_geo_pathCentroid.point = function(x, y) {
	      d3_geo_pathCentroid.point = nextPoint;
	      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
	    };
	    function nextPoint(x, y) {
	      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
	      d3_geo_centroidX1 += z * (x0 + x) / 2;
	      d3_geo_centroidY1 += z * (y0 + y) / 2;
	      d3_geo_centroidZ1 += z;
	      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
	    }
	  }
	  function d3_geo_pathCentroidLineEnd() {
	    d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
	  }
	  function d3_geo_pathCentroidRingStart() {
	    var x00, y00, x0, y0;
	    d3_geo_pathCentroid.point = function(x, y) {
	      d3_geo_pathCentroid.point = nextPoint;
	      d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y);
	    };
	    function nextPoint(x, y) {
	      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
	      d3_geo_centroidX1 += z * (x0 + x) / 2;
	      d3_geo_centroidY1 += z * (y0 + y) / 2;
	      d3_geo_centroidZ1 += z;
	      z = y0 * x - x0 * y;
	      d3_geo_centroidX2 += z * (x0 + x);
	      d3_geo_centroidY2 += z * (y0 + y);
	      d3_geo_centroidZ2 += z * 3;
	      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
	    }
	    d3_geo_pathCentroid.lineEnd = function() {
	      nextPoint(x00, y00);
	    };
	  }
	  function d3_geo_pathContext(context) {
	    var pointRadius = 4.5;
	    var stream = {
	      point: point,
	      lineStart: function() {
	        stream.point = pointLineStart;
	      },
	      lineEnd: lineEnd,
	      polygonStart: function() {
	        stream.lineEnd = lineEndPolygon;
	      },
	      polygonEnd: function() {
	        stream.lineEnd = lineEnd;
	        stream.point = point;
	      },
	      pointRadius: function(_) {
	        pointRadius = _;
	        return stream;
	      },
	      result: d3_noop
	    };
	    function point(x, y) {
	      context.moveTo(x + pointRadius, y);
	      context.arc(x, y, pointRadius, 0, τ);
	    }
	    function pointLineStart(x, y) {
	      context.moveTo(x, y);
	      stream.point = pointLine;
	    }
	    function pointLine(x, y) {
	      context.lineTo(x, y);
	    }
	    function lineEnd() {
	      stream.point = point;
	    }
	    function lineEndPolygon() {
	      context.closePath();
	    }
	    return stream;
	  }
	  function d3_geo_resample(project) {
	    var δ2 = .5, cosMinDistance = Math.cos(30 * d3_radians), maxDepth = 16;
	    function resample(stream) {
	      return (maxDepth ? resampleRecursive : resampleNone)(stream);
	    }
	    function resampleNone(stream) {
	      return d3_geo_transformPoint(stream, function(x, y) {
	        x = project(x, y);
	        stream.point(x[0], x[1]);
	      });
	    }
	    function resampleRecursive(stream) {
	      var λ00, φ00, x00, y00, a00, b00, c00, λ0, x0, y0, a0, b0, c0;
	      var resample = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() {
	          stream.polygonStart();
	          resample.lineStart = ringStart;
	        },
	        polygonEnd: function() {
	          stream.polygonEnd();
	          resample.lineStart = lineStart;
	        }
	      };
	      function point(x, y) {
	        x = project(x, y);
	        stream.point(x[0], x[1]);
	      }
	      function lineStart() {
	        x0 = NaN;
	        resample.point = linePoint;
	        stream.lineStart();
	      }
	      function linePoint(λ, φ) {
	        var c = d3_geo_cartesian([ λ, φ ]), p = project(λ, φ);
	        resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
	        stream.point(x0, y0);
	      }
	      function lineEnd() {
	        resample.point = point;
	        stream.lineEnd();
	      }
	      function ringStart() {
	        lineStart();
	        resample.point = ringPoint;
	        resample.lineEnd = ringEnd;
	      }
	      function ringPoint(λ, φ) {
	        linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
	        resample.point = linePoint;
	      }
	      function ringEnd() {
	        resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
	        resample.lineEnd = lineEnd;
	        lineEnd();
	      }
	      return resample;
	    }
	    function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
	      var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
	      if (d2 > 4 * δ2 && depth--) {
	        var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = Math.sqrt(a * a + b * b + c * c), φ2 = Math.asin(c /= m), λ2 = abs(abs(c) - 1) < ε || abs(λ0 - λ1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a), p = project(λ2, φ2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
	        if (dz * dz / d2 > δ2 || abs((dx * dx2 + dy * dy2) / d2 - .5) > .3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
	          resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
	          stream.point(x2, y2);
	          resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
	        }
	      }
	    }
	    resample.precision = function(_) {
	      if (!arguments.length) return Math.sqrt(δ2);
	      maxDepth = (δ2 = _ * _) > 0 && 16;
	      return resample;
	    };
	    return resample;
	  }
	  d3.geo.path = function() {
	    var pointRadius = 4.5, projection, context, projectStream, contextStream, cacheStream;
	    function path(object) {
	      if (object) {
	        if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
	        if (!cacheStream || !cacheStream.valid) cacheStream = projectStream(contextStream);
	        d3.geo.stream(object, cacheStream);
	      }
	      return contextStream.result();
	    }
	    path.area = function(object) {
	      d3_geo_pathAreaSum = 0;
	      d3.geo.stream(object, projectStream(d3_geo_pathArea));
	      return d3_geo_pathAreaSum;
	    };
	    path.centroid = function(object) {
	      d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
	      d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
	      return d3_geo_centroidZ2 ? [ d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2 ] : d3_geo_centroidZ1 ? [ d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1 ] : d3_geo_centroidZ0 ? [ d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0 ] : [ NaN, NaN ];
	    };
	    path.bounds = function(object) {
	      d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
	      d3.geo.stream(object, projectStream(d3_geo_pathBounds));
	      return [ [ d3_geo_pathBoundsX0, d3_geo_pathBoundsY0 ], [ d3_geo_pathBoundsX1, d3_geo_pathBoundsY1 ] ];
	    };
	    path.projection = function(_) {
	      if (!arguments.length) return projection;
	      projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
	      return reset();
	    };
	    path.context = function(_) {
	      if (!arguments.length) return context;
	      contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
	      if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
	      return reset();
	    };
	    path.pointRadius = function(_) {
	      if (!arguments.length) return pointRadius;
	      pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
	      return path;
	    };
	    function reset() {
	      cacheStream = null;
	      return path;
	    }
	    return path.projection(d3.geo.albersUsa()).context(null);
	  };
	  function d3_geo_pathProjectStream(project) {
	    var resample = d3_geo_resample(function(x, y) {
	      return project([ x * d3_degrees, y * d3_degrees ]);
	    });
	    return function(stream) {
	      return d3_geo_projectionRadians(resample(stream));
	    };
	  }
	  d3.geo.transform = function(methods) {
	    return {
	      stream: function(stream) {
	        var transform = new d3_geo_transform(stream);
	        for (var k in methods) transform[k] = methods[k];
	        return transform;
	      }
	    };
	  };
	  function d3_geo_transform(stream) {
	    this.stream = stream;
	  }
	  d3_geo_transform.prototype = {
	    point: function(x, y) {
	      this.stream.point(x, y);
	    },
	    sphere: function() {
	      this.stream.sphere();
	    },
	    lineStart: function() {
	      this.stream.lineStart();
	    },
	    lineEnd: function() {
	      this.stream.lineEnd();
	    },
	    polygonStart: function() {
	      this.stream.polygonStart();
	    },
	    polygonEnd: function() {
	      this.stream.polygonEnd();
	    }
	  };
	  function d3_geo_transformPoint(stream, point) {
	    return {
	      point: point,
	      sphere: function() {
	        stream.sphere();
	      },
	      lineStart: function() {
	        stream.lineStart();
	      },
	      lineEnd: function() {
	        stream.lineEnd();
	      },
	      polygonStart: function() {
	        stream.polygonStart();
	      },
	      polygonEnd: function() {
	        stream.polygonEnd();
	      }
	    };
	  }
	  d3.geo.projection = d3_geo_projection;
	  d3.geo.projectionMutator = d3_geo_projectionMutator;
	  function d3_geo_projection(project) {
	    return d3_geo_projectionMutator(function() {
	      return project;
	    })();
	  }
	  function d3_geo_projectionMutator(projectAt) {
	    var project, rotate, projectRotate, projectResample = d3_geo_resample(function(x, y) {
	      x = project(x, y);
	      return [ x[0] * k + δx, δy - x[1] * k ];
	    }), k = 150, x = 480, y = 250, λ = 0, φ = 0, δλ = 0, δφ = 0, δγ = 0, δx, δy, preclip = d3_geo_clipAntimeridian, postclip = d3_identity, clipAngle = null, clipExtent = null, stream;
	    function projection(point) {
	      point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
	      return [ point[0] * k + δx, δy - point[1] * k ];
	    }
	    function invert(point) {
	      point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
	      return point && [ point[0] * d3_degrees, point[1] * d3_degrees ];
	    }
	    projection.stream = function(output) {
	      if (stream) stream.valid = false;
	      stream = d3_geo_projectionRadians(preclip(rotate, projectResample(postclip(output))));
	      stream.valid = true;
	      return stream;
	    };
	    projection.clipAngle = function(_) {
	      if (!arguments.length) return clipAngle;
	      preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
	      return invalidate();
	    };
	    projection.clipExtent = function(_) {
	      if (!arguments.length) return clipExtent;
	      clipExtent = _;
	      postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
	      return invalidate();
	    };
	    projection.scale = function(_) {
	      if (!arguments.length) return k;
	      k = +_;
	      return reset();
	    };
	    projection.translate = function(_) {
	      if (!arguments.length) return [ x, y ];
	      x = +_[0];
	      y = +_[1];
	      return reset();
	    };
	    projection.center = function(_) {
	      if (!arguments.length) return [ λ * d3_degrees, φ * d3_degrees ];
	      λ = _[0] % 360 * d3_radians;
	      φ = _[1] % 360 * d3_radians;
	      return reset();
	    };
	    projection.rotate = function(_) {
	      if (!arguments.length) return [ δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees ];
	      δλ = _[0] % 360 * d3_radians;
	      δφ = _[1] % 360 * d3_radians;
	      δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
	      return reset();
	    };
	    d3.rebind(projection, projectResample, "precision");
	    function reset() {
	      projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
	      var center = project(λ, φ);
	      δx = x - center[0] * k;
	      δy = y + center[1] * k;
	      return invalidate();
	    }
	    function invalidate() {
	      if (stream) stream.valid = false, stream = null;
	      return projection;
	    }
	    return function() {
	      project = projectAt.apply(this, arguments);
	      projection.invert = project.invert && invert;
	      return reset();
	    };
	  }
	  function d3_geo_projectionRadians(stream) {
	    return d3_geo_transformPoint(stream, function(x, y) {
	      stream.point(x * d3_radians, y * d3_radians);
	    });
	  }
	  function d3_geo_equirectangular(λ, φ) {
	    return [ λ, φ ];
	  }
	  (d3.geo.equirectangular = function() {
	    return d3_geo_projection(d3_geo_equirectangular);
	  }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
	  d3.geo.rotation = function(rotate) {
	    rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);
	    function forward(coordinates) {
	      coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
	      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
	    }
	    forward.invert = function(coordinates) {
	      coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
	      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
	    };
	    return forward;
	  };
	  function d3_geo_identityRotation(λ, φ) {
	    return [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
	  }
	  d3_geo_identityRotation.invert = d3_geo_equirectangular;
	  function d3_geo_rotation(δλ, δφ, δγ) {
	    return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_identityRotation;
	  }
	  function d3_geo_forwardRotationλ(δλ) {
	    return function(λ, φ) {
	      return λ += δλ, [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
	    };
	  }
	  function d3_geo_rotationλ(δλ) {
	    var rotation = d3_geo_forwardRotationλ(δλ);
	    rotation.invert = d3_geo_forwardRotationλ(-δλ);
	    return rotation;
	  }
	  function d3_geo_rotationφγ(δφ, δγ) {
	    var cosδφ = Math.cos(δφ), sinδφ = Math.sin(δφ), cosδγ = Math.cos(δγ), sinδγ = Math.sin(δγ);
	    function rotation(λ, φ) {
	      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδφ + x * sinδφ;
	      return [ Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), d3_asin(k * cosδγ + y * sinδγ) ];
	    }
	    rotation.invert = function(λ, φ) {
	      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδγ - y * sinδγ;
	      return [ Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), d3_asin(k * cosδφ - x * sinδφ) ];
	    };
	    return rotation;
	  }
	  d3.geo.circle = function() {
	    var origin = [ 0, 0 ], angle, precision = 6, interpolate;
	    function circle() {
	      var center = typeof origin === "function" ? origin.apply(this, arguments) : origin, rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert, ring = [];
	      interpolate(null, null, 1, {
	        point: function(x, y) {
	          ring.push(x = rotate(x, y));
	          x[0] *= d3_degrees, x[1] *= d3_degrees;
	        }
	      });
	      return {
	        type: "Polygon",
	        coordinates: [ ring ]
	      };
	    }
	    circle.origin = function(x) {
	      if (!arguments.length) return origin;
	      origin = x;
	      return circle;
	    };
	    circle.angle = function(x) {
	      if (!arguments.length) return angle;
	      interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
	      return circle;
	    };
	    circle.precision = function(_) {
	      if (!arguments.length) return precision;
	      interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
	      return circle;
	    };
	    return circle.angle(90);
	  };
	  function d3_geo_circleInterpolate(radius, precision) {
	    var cr = Math.cos(radius), sr = Math.sin(radius);
	    return function(from, to, direction, listener) {
	      var step = direction * precision;
	      if (from != null) {
	        from = d3_geo_circleAngle(cr, from);
	        to = d3_geo_circleAngle(cr, to);
	        if (direction > 0 ? from < to : from > to) from += direction * τ;
	      } else {
	        from = radius + direction * τ;
	        to = radius - .5 * step;
	      }
	      for (var point, t = from; direction > 0 ? t > to : t < to; t -= step) {
	        listener.point((point = d3_geo_spherical([ cr, -sr * Math.cos(t), -sr * Math.sin(t) ]))[0], point[1]);
	      }
	    };
	  }
	  function d3_geo_circleAngle(cr, point) {
	    var a = d3_geo_cartesian(point);
	    a[0] -= cr;
	    d3_geo_cartesianNormalize(a);
	    var angle = d3_acos(-a[1]);
	    return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
	  }
	  d3.geo.distance = function(a, b) {
	    var Δλ = (b[0] - a[0]) * d3_radians, φ0 = a[1] * d3_radians, φ1 = b[1] * d3_radians, sinΔλ = Math.sin(Δλ), cosΔλ = Math.cos(Δλ), sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), sinφ1 = Math.sin(φ1), cosφ1 = Math.cos(φ1), t;
	    return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
	  };
	  d3.geo.graticule = function() {
	    var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
	    function graticule() {
	      return {
	        type: "MultiLineString",
	        coordinates: lines()
	      };
	    }
	    function lines() {
	      return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
	        return abs(x % DX) > ε;
	      }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
	        return abs(y % DY) > ε;
	      }).map(y));
	    }
	    graticule.lines = function() {
	      return lines().map(function(coordinates) {
	        return {
	          type: "LineString",
	          coordinates: coordinates
	        };
	      });
	    };
	    graticule.outline = function() {
	      return {
	        type: "Polygon",
	        coordinates: [ X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1)) ]
	      };
	    };
	    graticule.extent = function(_) {
	      if (!arguments.length) return graticule.minorExtent();
	      return graticule.majorExtent(_).minorExtent(_);
	    };
	    graticule.majorExtent = function(_) {
	      if (!arguments.length) return [ [ X0, Y0 ], [ X1, Y1 ] ];
	      X0 = +_[0][0], X1 = +_[1][0];
	      Y0 = +_[0][1], Y1 = +_[1][1];
	      if (X0 > X1) _ = X0, X0 = X1, X1 = _;
	      if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
	      return graticule.precision(precision);
	    };
	    graticule.minorExtent = function(_) {
	      if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
	      x0 = +_[0][0], x1 = +_[1][0];
	      y0 = +_[0][1], y1 = +_[1][1];
	      if (x0 > x1) _ = x0, x0 = x1, x1 = _;
	      if (y0 > y1) _ = y0, y0 = y1, y1 = _;
	      return graticule.precision(precision);
	    };
	    graticule.step = function(_) {
	      if (!arguments.length) return graticule.minorStep();
	      return graticule.majorStep(_).minorStep(_);
	    };
	    graticule.majorStep = function(_) {
	      if (!arguments.length) return [ DX, DY ];
	      DX = +_[0], DY = +_[1];
	      return graticule;
	    };
	    graticule.minorStep = function(_) {
	      if (!arguments.length) return [ dx, dy ];
	      dx = +_[0], dy = +_[1];
	      return graticule;
	    };
	    graticule.precision = function(_) {
	      if (!arguments.length) return precision;
	      precision = +_;
	      x = d3_geo_graticuleX(y0, y1, 90);
	      y = d3_geo_graticuleY(x0, x1, precision);
	      X = d3_geo_graticuleX(Y0, Y1, 90);
	      Y = d3_geo_graticuleY(X0, X1, precision);
	      return graticule;
	    };
	    return graticule.majorExtent([ [ -180, -90 + ε ], [ 180, 90 - ε ] ]).minorExtent([ [ -180, -80 - ε ], [ 180, 80 + ε ] ]);
	  };
	  function d3_geo_graticuleX(y0, y1, dy) {
	    var y = d3.range(y0, y1 - ε, dy).concat(y1);
	    return function(x) {
	      return y.map(function(y) {
	        return [ x, y ];
	      });
	    };
	  }
	  function d3_geo_graticuleY(x0, x1, dx) {
	    var x = d3.range(x0, x1 - ε, dx).concat(x1);
	    return function(y) {
	      return x.map(function(x) {
	        return [ x, y ];
	      });
	    };
	  }
	  function d3_source(d) {
	    return d.source;
	  }
	  function d3_target(d) {
	    return d.target;
	  }
	  d3.geo.greatArc = function() {
	    var source = d3_source, source_, target = d3_target, target_;
	    function greatArc() {
	      return {
	        type: "LineString",
	        coordinates: [ source_ || source.apply(this, arguments), target_ || target.apply(this, arguments) ]
	      };
	    }
	    greatArc.distance = function() {
	      return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
	    };
	    greatArc.source = function(_) {
	      if (!arguments.length) return source;
	      source = _, source_ = typeof _ === "function" ? null : _;
	      return greatArc;
	    };
	    greatArc.target = function(_) {
	      if (!arguments.length) return target;
	      target = _, target_ = typeof _ === "function" ? null : _;
	      return greatArc;
	    };
	    greatArc.precision = function() {
	      return arguments.length ? greatArc : 0;
	    };
	    return greatArc;
	  };
	  d3.geo.interpolate = function(source, target) {
	    return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
	  };
	  function d3_geo_interpolate(x0, y0, x1, y1) {
	    var cy0 = Math.cos(y0), sy0 = Math.sin(y0), cy1 = Math.cos(y1), sy1 = Math.sin(y1), kx0 = cy0 * Math.cos(x0), ky0 = cy0 * Math.sin(x0), kx1 = cy1 * Math.cos(x1), ky1 = cy1 * Math.sin(x1), d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))), k = 1 / Math.sin(d);
	    var interpolate = d ? function(t) {
	      var B = Math.sin(t *= d) * k, A = Math.sin(d - t) * k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
	      return [ Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees ];
	    } : function() {
	      return [ x0 * d3_degrees, y0 * d3_degrees ];
	    };
	    interpolate.distance = d;
	    return interpolate;
	  }
	  d3.geo.length = function(object) {
	    d3_geo_lengthSum = 0;
	    d3.geo.stream(object, d3_geo_length);
	    return d3_geo_lengthSum;
	  };
	  var d3_geo_lengthSum;
	  var d3_geo_length = {
	    sphere: d3_noop,
	    point: d3_noop,
	    lineStart: d3_geo_lengthLineStart,
	    lineEnd: d3_noop,
	    polygonStart: d3_noop,
	    polygonEnd: d3_noop
	  };
	  function d3_geo_lengthLineStart() {
	    var λ0, sinφ0, cosφ0;
	    d3_geo_length.point = function(λ, φ) {
	      λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);
	      d3_geo_length.point = nextPoint;
	    };
	    d3_geo_length.lineEnd = function() {
	      d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
	    };
	    function nextPoint(λ, φ) {
	      var sinφ = Math.sin(φ *= d3_radians), cosφ = Math.cos(φ), t = abs((λ *= d3_radians) - λ0), cosΔλ = Math.cos(t);
	      d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);
	      λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;
	    }
	  }
	  function d3_geo_azimuthal(scale, angle) {
	    function azimuthal(λ, φ) {
	      var cosλ = Math.cos(λ), cosφ = Math.cos(φ), k = scale(cosλ * cosφ);
	      return [ k * cosφ * Math.sin(λ), k * Math.sin(φ) ];
	    }
	    azimuthal.invert = function(x, y) {
	      var ρ = Math.sqrt(x * x + y * y), c = angle(ρ), sinc = Math.sin(c), cosc = Math.cos(c);
	      return [ Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ) ];
	    };
	    return azimuthal;
	  }
	  var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
	    return Math.sqrt(2 / (1 + cosλcosφ));
	  }, function(ρ) {
	    return 2 * Math.asin(ρ / 2);
	  });
	  (d3.geo.azimuthalEqualArea = function() {
	    return d3_geo_projection(d3_geo_azimuthalEqualArea);
	  }).raw = d3_geo_azimuthalEqualArea;
	  var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
	    var c = Math.acos(cosλcosφ);
	    return c && c / Math.sin(c);
	  }, d3_identity);
	  (d3.geo.azimuthalEquidistant = function() {
	    return d3_geo_projection(d3_geo_azimuthalEquidistant);
	  }).raw = d3_geo_azimuthalEquidistant;
	  function d3_geo_conicConformal(φ0, φ1) {
	    var cosφ0 = Math.cos(φ0), t = function(φ) {
	      return Math.tan(π / 4 + φ / 2);
	    }, n = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t(φ1) / t(φ0)), F = cosφ0 * Math.pow(t(φ0), n) / n;
	    if (!n) return d3_geo_mercator;
	    function forward(λ, φ) {
	      if (F > 0) {
	        if (φ < -halfπ + ε) φ = -halfπ + ε;
	      } else {
	        if (φ > halfπ - ε) φ = halfπ - ε;
	      }
	      var ρ = F / Math.pow(t(φ), n);
	      return [ ρ * Math.sin(n * λ), F - ρ * Math.cos(n * λ) ];
	    }
	    forward.invert = function(x, y) {
	      var ρ0_y = F - y, ρ = d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y);
	      return [ Math.atan2(x, ρ0_y) / n, 2 * Math.atan(Math.pow(F / ρ, 1 / n)) - halfπ ];
	    };
	    return forward;
	  }
	  (d3.geo.conicConformal = function() {
	    return d3_geo_conic(d3_geo_conicConformal);
	  }).raw = d3_geo_conicConformal;
	  function d3_geo_conicEquidistant(φ0, φ1) {
	    var cosφ0 = Math.cos(φ0), n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0), G = cosφ0 / n + φ0;
	    if (abs(n) < ε) return d3_geo_equirectangular;
	    function forward(λ, φ) {
	      var ρ = G - φ;
	      return [ ρ * Math.sin(n * λ), G - ρ * Math.cos(n * λ) ];
	    }
	    forward.invert = function(x, y) {
	      var ρ0_y = G - y;
	      return [ Math.atan2(x, ρ0_y) / n, G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y) ];
	    };
	    return forward;
	  }
	  (d3.geo.conicEquidistant = function() {
	    return d3_geo_conic(d3_geo_conicEquidistant);
	  }).raw = d3_geo_conicEquidistant;
	  var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
	    return 1 / cosλcosφ;
	  }, Math.atan);
	  (d3.geo.gnomonic = function() {
	    return d3_geo_projection(d3_geo_gnomonic);
	  }).raw = d3_geo_gnomonic;
	  function d3_geo_mercator(λ, φ) {
	    return [ λ, Math.log(Math.tan(π / 4 + φ / 2)) ];
	  }
	  d3_geo_mercator.invert = function(x, y) {
	    return [ x, 2 * Math.atan(Math.exp(y)) - halfπ ];
	  };
	  function d3_geo_mercatorProjection(project) {
	    var m = d3_geo_projection(project), scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, clipAuto;
	    m.scale = function() {
	      var v = scale.apply(m, arguments);
	      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
	    };
	    m.translate = function() {
	      var v = translate.apply(m, arguments);
	      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
	    };
	    m.clipExtent = function(_) {
	      var v = clipExtent.apply(m, arguments);
	      if (v === m) {
	        if (clipAuto = _ == null) {
	          var k = π * scale(), t = translate();
	          clipExtent([ [ t[0] - k, t[1] - k ], [ t[0] + k, t[1] + k ] ]);
	        }
	      } else if (clipAuto) {
	        v = null;
	      }
	      return v;
	    };
	    return m.clipExtent(null);
	  }
	  (d3.geo.mercator = function() {
	    return d3_geo_mercatorProjection(d3_geo_mercator);
	  }).raw = d3_geo_mercator;
	  var d3_geo_orthographic = d3_geo_azimuthal(function() {
	    return 1;
	  }, Math.asin);
	  (d3.geo.orthographic = function() {
	    return d3_geo_projection(d3_geo_orthographic);
	  }).raw = d3_geo_orthographic;
	  var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
	    return 1 / (1 + cosλcosφ);
	  }, function(ρ) {
	    return 2 * Math.atan(ρ);
	  });
	  (d3.geo.stereographic = function() {
	    return d3_geo_projection(d3_geo_stereographic);
	  }).raw = d3_geo_stereographic;
	  function d3_geo_transverseMercator(λ, φ) {
	    return [ Math.log(Math.tan(π / 4 + φ / 2)), -λ ];
	  }
	  d3_geo_transverseMercator.invert = function(x, y) {
	    return [ -y, 2 * Math.atan(Math.exp(x)) - halfπ ];
	  };
	  (d3.geo.transverseMercator = function() {
	    var projection = d3_geo_mercatorProjection(d3_geo_transverseMercator), center = projection.center, rotate = projection.rotate;
	    projection.center = function(_) {
	      return _ ? center([ -_[1], _[0] ]) : (_ = center(), [ _[1], -_[0] ]);
	    };
	    projection.rotate = function(_) {
	      return _ ? rotate([ _[0], _[1], _.length > 2 ? _[2] + 90 : 90 ]) : (_ = rotate(), 
	      [ _[0], _[1], _[2] - 90 ]);
	    };
	    return rotate([ 0, 0, 90 ]);
	  }).raw = d3_geo_transverseMercator;
	  d3.geom = {};
	  function d3_geom_pointX(d) {
	    return d[0];
	  }
	  function d3_geom_pointY(d) {
	    return d[1];
	  }
	  d3.geom.hull = function(vertices) {
	    var x = d3_geom_pointX, y = d3_geom_pointY;
	    if (arguments.length) return hull(vertices);
	    function hull(data) {
	      if (data.length < 3) return [];
	      var fx = d3_functor(x), fy = d3_functor(y), i, n = data.length, points = [], flippedPoints = [];
	      for (i = 0; i < n; i++) {
	        points.push([ +fx.call(this, data[i], i), +fy.call(this, data[i], i), i ]);
	      }
	      points.sort(d3_geom_hullOrder);
	      for (i = 0; i < n; i++) flippedPoints.push([ points[i][0], -points[i][1] ]);
	      var upper = d3_geom_hullUpper(points), lower = d3_geom_hullUpper(flippedPoints);
	      var skipLeft = lower[0] === upper[0], skipRight = lower[lower.length - 1] === upper[upper.length - 1], polygon = [];
	      for (i = upper.length - 1; i >= 0; --i) polygon.push(data[points[upper[i]][2]]);
	      for (i = +skipLeft; i < lower.length - skipRight; ++i) polygon.push(data[points[lower[i]][2]]);
	      return polygon;
	    }
	    hull.x = function(_) {
	      return arguments.length ? (x = _, hull) : x;
	    };
	    hull.y = function(_) {
	      return arguments.length ? (y = _, hull) : y;
	    };
	    return hull;
	  };
	  function d3_geom_hullUpper(points) {
	    var n = points.length, hull = [ 0, 1 ], hs = 2;
	    for (var i = 2; i < n; i++) {
	      while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0) --hs;
	      hull[hs++] = i;
	    }
	    return hull.slice(0, hs);
	  }
	  function d3_geom_hullOrder(a, b) {
	    return a[0] - b[0] || a[1] - b[1];
	  }
	  d3.geom.polygon = function(coordinates) {
	    d3_subclass(coordinates, d3_geom_polygonPrototype);
	    return coordinates;
	  };
	  var d3_geom_polygonPrototype = d3.geom.polygon.prototype = [];
	  d3_geom_polygonPrototype.area = function() {
	    var i = -1, n = this.length, a, b = this[n - 1], area = 0;
	    while (++i < n) {
	      a = b;
	      b = this[i];
	      area += a[1] * b[0] - a[0] * b[1];
	    }
	    return area * .5;
	  };
	  d3_geom_polygonPrototype.centroid = function(k) {
	    var i = -1, n = this.length, x = 0, y = 0, a, b = this[n - 1], c;
	    if (!arguments.length) k = -1 / (6 * this.area());
	    while (++i < n) {
	      a = b;
	      b = this[i];
	      c = a[0] * b[1] - b[0] * a[1];
	      x += (a[0] + b[0]) * c;
	      y += (a[1] + b[1]) * c;
	    }
	    return [ x * k, y * k ];
	  };
	  d3_geom_polygonPrototype.clip = function(subject) {
	    var input, closed = d3_geom_polygonClosed(subject), i = -1, n = this.length - d3_geom_polygonClosed(this), j, m, a = this[n - 1], b, c, d;
	    while (++i < n) {
	      input = subject.slice();
	      subject.length = 0;
	      b = this[i];
	      c = input[(m = input.length - closed) - 1];
	      j = -1;
	      while (++j < m) {
	        d = input[j];
	        if (d3_geom_polygonInside(d, a, b)) {
	          if (!d3_geom_polygonInside(c, a, b)) {
	            subject.push(d3_geom_polygonIntersect(c, d, a, b));
	          }
	          subject.push(d);
	        } else if (d3_geom_polygonInside(c, a, b)) {
	          subject.push(d3_geom_polygonIntersect(c, d, a, b));
	        }
	        c = d;
	      }
	      if (closed) subject.push(subject[0]);
	      a = b;
	    }
	    return subject;
	  };
	  function d3_geom_polygonInside(p, a, b) {
	    return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
	  }
	  function d3_geom_polygonIntersect(c, d, a, b) {
	    var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3, y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3, ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
	    return [ x1 + ua * x21, y1 + ua * y21 ];
	  }
	  function d3_geom_polygonClosed(coordinates) {
	    var a = coordinates[0], b = coordinates[coordinates.length - 1];
	    return !(a[0] - b[0] || a[1] - b[1]);
	  }
	  var d3_geom_voronoiEdges, d3_geom_voronoiCells, d3_geom_voronoiBeaches, d3_geom_voronoiBeachPool = [], d3_geom_voronoiFirstCircle, d3_geom_voronoiCircles, d3_geom_voronoiCirclePool = [];
	  function d3_geom_voronoiBeach() {
	    d3_geom_voronoiRedBlackNode(this);
	    this.edge = this.site = this.circle = null;
	  }
	  function d3_geom_voronoiCreateBeach(site) {
	    var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach();
	    beach.site = site;
	    return beach;
	  }
	  function d3_geom_voronoiDetachBeach(beach) {
	    d3_geom_voronoiDetachCircle(beach);
	    d3_geom_voronoiBeaches.remove(beach);
	    d3_geom_voronoiBeachPool.push(beach);
	    d3_geom_voronoiRedBlackNode(beach);
	  }
	  function d3_geom_voronoiRemoveBeach(beach) {
	    var circle = beach.circle, x = circle.x, y = circle.cy, vertex = {
	      x: x,
	      y: y
	    }, previous = beach.P, next = beach.N, disappearing = [ beach ];
	    d3_geom_voronoiDetachBeach(beach);
	    var lArc = previous;
	    while (lArc.circle && abs(x - lArc.circle.x) < ε && abs(y - lArc.circle.cy) < ε) {
	      previous = lArc.P;
	      disappearing.unshift(lArc);
	      d3_geom_voronoiDetachBeach(lArc);
	      lArc = previous;
	    }
	    disappearing.unshift(lArc);
	    d3_geom_voronoiDetachCircle(lArc);
	    var rArc = next;
	    while (rArc.circle && abs(x - rArc.circle.x) < ε && abs(y - rArc.circle.cy) < ε) {
	      next = rArc.N;
	      disappearing.push(rArc);
	      d3_geom_voronoiDetachBeach(rArc);
	      rArc = next;
	    }
	    disappearing.push(rArc);
	    d3_geom_voronoiDetachCircle(rArc);
	    var nArcs = disappearing.length, iArc;
	    for (iArc = 1; iArc < nArcs; ++iArc) {
	      rArc = disappearing[iArc];
	      lArc = disappearing[iArc - 1];
	      d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
	    }
	    lArc = disappearing[0];
	    rArc = disappearing[nArcs - 1];
	    rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
	    d3_geom_voronoiAttachCircle(lArc);
	    d3_geom_voronoiAttachCircle(rArc);
	  }
	  function d3_geom_voronoiAddBeach(site) {
	    var x = site.x, directrix = site.y, lArc, rArc, dxl, dxr, node = d3_geom_voronoiBeaches._;
	    while (node) {
	      dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;
	      if (dxl > ε) node = node.L; else {
	        dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);
	        if (dxr > ε) {
	          if (!node.R) {
	            lArc = node;
	            break;
	          }
	          node = node.R;
	        } else {
	          if (dxl > -ε) {
	            lArc = node.P;
	            rArc = node;
	          } else if (dxr > -ε) {
	            lArc = node;
	            rArc = node.N;
	          } else {
	            lArc = rArc = node;
	          }
	          break;
	        }
	      }
	    }
	    var newArc = d3_geom_voronoiCreateBeach(site);
	    d3_geom_voronoiBeaches.insert(lArc, newArc);
	    if (!lArc && !rArc) return;
	    if (lArc === rArc) {
	      d3_geom_voronoiDetachCircle(lArc);
	      rArc = d3_geom_voronoiCreateBeach(lArc.site);
	      d3_geom_voronoiBeaches.insert(newArc, rArc);
	      newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
	      d3_geom_voronoiAttachCircle(lArc);
	      d3_geom_voronoiAttachCircle(rArc);
	      return;
	    }
	    if (!rArc) {
	      newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
	      return;
	    }
	    d3_geom_voronoiDetachCircle(lArc);
	    d3_geom_voronoiDetachCircle(rArc);
	    var lSite = lArc.site, ax = lSite.x, ay = lSite.y, bx = site.x - ax, by = site.y - ay, rSite = rArc.site, cx = rSite.x - ax, cy = rSite.y - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = {
	      x: (cy * hb - by * hc) / d + ax,
	      y: (bx * hc - cx * hb) / d + ay
	    };
	    d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
	    newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
	    rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
	    d3_geom_voronoiAttachCircle(lArc);
	    d3_geom_voronoiAttachCircle(rArc);
	  }
	  function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
	    var site = arc.site, rfocx = site.x, rfocy = site.y, pby2 = rfocy - directrix;
	    if (!pby2) return rfocx;
	    var lArc = arc.P;
	    if (!lArc) return -Infinity;
	    site = lArc.site;
	    var lfocx = site.x, lfocy = site.y, plby2 = lfocy - directrix;
	    if (!plby2) return lfocx;
	    var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
	    if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
	    return (rfocx + lfocx) / 2;
	  }
	  function d3_geom_voronoiRightBreakPoint(arc, directrix) {
	    var rArc = arc.N;
	    if (rArc) return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
	    var site = arc.site;
	    return site.y === directrix ? site.x : Infinity;
	  }
	  function d3_geom_voronoiCell(site) {
	    this.site = site;
	    this.edges = [];
	  }
	  d3_geom_voronoiCell.prototype.prepare = function() {
	    var halfEdges = this.edges, iHalfEdge = halfEdges.length, edge;
	    while (iHalfEdge--) {
	      edge = halfEdges[iHalfEdge].edge;
	      if (!edge.b || !edge.a) halfEdges.splice(iHalfEdge, 1);
	    }
	    halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
	    return halfEdges.length;
	  };
	  function d3_geom_voronoiCloseCells(extent) {
	    var x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], x2, y2, x3, y3, cells = d3_geom_voronoiCells, iCell = cells.length, cell, iHalfEdge, halfEdges, nHalfEdges, start, end;
	    while (iCell--) {
	      cell = cells[iCell];
	      if (!cell || !cell.prepare()) continue;
	      halfEdges = cell.edges;
	      nHalfEdges = halfEdges.length;
	      iHalfEdge = 0;
	      while (iHalfEdge < nHalfEdges) {
	        end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;
	        start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;
	        if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {
	          halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x3 - x0) < ε && y1 - y3 > ε ? {
	            x: x0,
	            y: abs(x2 - x0) < ε ? y2 : y1
	          } : abs(y3 - y1) < ε && x1 - x3 > ε ? {
	            x: abs(y2 - y1) < ε ? x2 : x1,
	            y: y1
	          } : abs(x3 - x1) < ε && y3 - y0 > ε ? {
	            x: x1,
	            y: abs(x2 - x1) < ε ? y2 : y0
	          } : abs(y3 - y0) < ε && x3 - x0 > ε ? {
	            x: abs(y2 - y0) < ε ? x2 : x0,
	            y: y0
	          } : null), cell.site, null));
	          ++nHalfEdges;
	        }
	      }
	    }
	  }
	  function d3_geom_voronoiHalfEdgeOrder(a, b) {
	    return b.angle - a.angle;
	  }
	  function d3_geom_voronoiCircle() {
	    d3_geom_voronoiRedBlackNode(this);
	    this.x = this.y = this.arc = this.site = this.cy = null;
	  }
	  function d3_geom_voronoiAttachCircle(arc) {
	    var lArc = arc.P, rArc = arc.N;
	    if (!lArc || !rArc) return;
	    var lSite = lArc.site, cSite = arc.site, rSite = rArc.site;
	    if (lSite === rSite) return;
	    var bx = cSite.x, by = cSite.y, ax = lSite.x - bx, ay = lSite.y - by, cx = rSite.x - bx, cy = rSite.y - by;
	    var d = 2 * (ax * cy - ay * cx);
	    if (d >= -ε2) return;
	    var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x = (cy * ha - ay * hc) / d, y = (ax * hc - cx * ha) / d, cy = y + by;
	    var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle();
	    circle.arc = arc;
	    circle.site = cSite;
	    circle.x = x + bx;
	    circle.y = cy + Math.sqrt(x * x + y * y);
	    circle.cy = cy;
	    arc.circle = circle;
	    var before = null, node = d3_geom_voronoiCircles._;
	    while (node) {
	      if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
	        if (node.L) node = node.L; else {
	          before = node.P;
	          break;
	        }
	      } else {
	        if (node.R) node = node.R; else {
	          before = node;
	          break;
	        }
	      }
	    }
	    d3_geom_voronoiCircles.insert(before, circle);
	    if (!before) d3_geom_voronoiFirstCircle = circle;
	  }
	  function d3_geom_voronoiDetachCircle(arc) {
	    var circle = arc.circle;
	    if (circle) {
	      if (!circle.P) d3_geom_voronoiFirstCircle = circle.N;
	      d3_geom_voronoiCircles.remove(circle);
	      d3_geom_voronoiCirclePool.push(circle);
	      d3_geom_voronoiRedBlackNode(circle);
	      arc.circle = null;
	    }
	  }
	  function d3_geom_voronoiClipEdges(extent) {
	    var edges = d3_geom_voronoiEdges, clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]), i = edges.length, e;
	    while (i--) {
	      e = edges[i];
	      if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε) {
	        e.a = e.b = null;
	        edges.splice(i, 1);
	      }
	    }
	  }
	  function d3_geom_voronoiConnectEdge(edge, extent) {
	    var vb = edge.b;
	    if (vb) return true;
	    var va = edge.a, x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], lSite = edge.l, rSite = edge.r, lx = lSite.x, ly = lSite.y, rx = rSite.x, ry = rSite.y, fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;
	    if (ry === ly) {
	      if (fx < x0 || fx >= x1) return;
	      if (lx > rx) {
	        if (!va) va = {
	          x: fx,
	          y: y0
	        }; else if (va.y >= y1) return;
	        vb = {
	          x: fx,
	          y: y1
	        };
	      } else {
	        if (!va) va = {
	          x: fx,
	          y: y1
	        }; else if (va.y < y0) return;
	        vb = {
	          x: fx,
	          y: y0
	        };
	      }
	    } else {
	      fm = (lx - rx) / (ry - ly);
	      fb = fy - fm * fx;
	      if (fm < -1 || fm > 1) {
	        if (lx > rx) {
	          if (!va) va = {
	            x: (y0 - fb) / fm,
	            y: y0
	          }; else if (va.y >= y1) return;
	          vb = {
	            x: (y1 - fb) / fm,
	            y: y1
	          };
	        } else {
	          if (!va) va = {
	            x: (y1 - fb) / fm,
	            y: y1
	          }; else if (va.y < y0) return;
	          vb = {
	            x: (y0 - fb) / fm,
	            y: y0
	          };
	        }
	      } else {
	        if (ly < ry) {
	          if (!va) va = {
	            x: x0,
	            y: fm * x0 + fb
	          }; else if (va.x >= x1) return;
	          vb = {
	            x: x1,
	            y: fm * x1 + fb
	          };
	        } else {
	          if (!va) va = {
	            x: x1,
	            y: fm * x1 + fb
	          }; else if (va.x < x0) return;
	          vb = {
	            x: x0,
	            y: fm * x0 + fb
	          };
	        }
	      }
	    }
	    edge.a = va;
	    edge.b = vb;
	    return true;
	  }
	  function d3_geom_voronoiEdge(lSite, rSite) {
	    this.l = lSite;
	    this.r = rSite;
	    this.a = this.b = null;
	  }
	  function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
	    var edge = new d3_geom_voronoiEdge(lSite, rSite);
	    d3_geom_voronoiEdges.push(edge);
	    if (va) d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);
	    if (vb) d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);
	    d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
	    d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
	    return edge;
	  }
	  function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
	    var edge = new d3_geom_voronoiEdge(lSite, null);
	    edge.a = va;
	    edge.b = vb;
	    d3_geom_voronoiEdges.push(edge);
	    return edge;
	  }
	  function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
	    if (!edge.a && !edge.b) {
	      edge.a = vertex;
	      edge.l = lSite;
	      edge.r = rSite;
	    } else if (edge.l === rSite) {
	      edge.b = vertex;
	    } else {
	      edge.a = vertex;
	    }
	  }
	  function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
	    var va = edge.a, vb = edge.b;
	    this.edge = edge;
	    this.site = lSite;
	    this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y);
	  }
	  d3_geom_voronoiHalfEdge.prototype = {
	    start: function() {
	      return this.edge.l === this.site ? this.edge.a : this.edge.b;
	    },
	    end: function() {
	      return this.edge.l === this.site ? this.edge.b : this.edge.a;
	    }
	  };
	  function d3_geom_voronoiRedBlackTree() {
	    this._ = null;
	  }
	  function d3_geom_voronoiRedBlackNode(node) {
	    node.U = node.C = node.L = node.R = node.P = node.N = null;
	  }
	  d3_geom_voronoiRedBlackTree.prototype = {
	    insert: function(after, node) {
	      var parent, grandpa, uncle;
	      if (after) {
	        node.P = after;
	        node.N = after.N;
	        if (after.N) after.N.P = node;
	        after.N = node;
	        if (after.R) {
	          after = after.R;
	          while (after.L) after = after.L;
	          after.L = node;
	        } else {
	          after.R = node;
	        }
	        parent = after;
	      } else if (this._) {
	        after = d3_geom_voronoiRedBlackFirst(this._);
	        node.P = null;
	        node.N = after;
	        after.P = after.L = node;
	        parent = after;
	      } else {
	        node.P = node.N = null;
	        this._ = node;
	        parent = null;
	      }
	      node.L = node.R = null;
	      node.U = parent;
	      node.C = true;
	      after = node;
	      while (parent && parent.C) {
	        grandpa = parent.U;
	        if (parent === grandpa.L) {
	          uncle = grandpa.R;
	          if (uncle && uncle.C) {
	            parent.C = uncle.C = false;
	            grandpa.C = true;
	            after = grandpa;
	          } else {
	            if (after === parent.R) {
	              d3_geom_voronoiRedBlackRotateLeft(this, parent);
	              after = parent;
	              parent = after.U;
	            }
	            parent.C = false;
	            grandpa.C = true;
	            d3_geom_voronoiRedBlackRotateRight(this, grandpa);
	          }
	        } else {
	          uncle = grandpa.L;
	          if (uncle && uncle.C) {
	            parent.C = uncle.C = false;
	            grandpa.C = true;
	            after = grandpa;
	          } else {
	            if (after === parent.L) {
	              d3_geom_voronoiRedBlackRotateRight(this, parent);
	              after = parent;
	              parent = after.U;
	            }
	            parent.C = false;
	            grandpa.C = true;
	            d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
	          }
	        }
	        parent = after.U;
	      }
	      this._.C = false;
	    },
	    remove: function(node) {
	      if (node.N) node.N.P = node.P;
	      if (node.P) node.P.N = node.N;
	      node.N = node.P = null;
	      var parent = node.U, sibling, left = node.L, right = node.R, next, red;
	      if (!left) next = right; else if (!right) next = left; else next = d3_geom_voronoiRedBlackFirst(right);
	      if (parent) {
	        if (parent.L === node) parent.L = next; else parent.R = next;
	      } else {
	        this._ = next;
	      }
	      if (left && right) {
	        red = next.C;
	        next.C = node.C;
	        next.L = left;
	        left.U = next;
	        if (next !== right) {
	          parent = next.U;
	          next.U = node.U;
	          node = next.R;
	          parent.L = node;
	          next.R = right;
	          right.U = next;
	        } else {
	          next.U = parent;
	          parent = next;
	          node = next.R;
	        }
	      } else {
	        red = node.C;
	        node = next;
	      }
	      if (node) node.U = parent;
	      if (red) return;
	      if (node && node.C) {
	        node.C = false;
	        return;
	      }
	      do {
	        if (node === this._) break;
	        if (node === parent.L) {
	          sibling = parent.R;
	          if (sibling.C) {
	            sibling.C = false;
	            parent.C = true;
	            d3_geom_voronoiRedBlackRotateLeft(this, parent);
	            sibling = parent.R;
	          }
	          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
	            if (!sibling.R || !sibling.R.C) {
	              sibling.L.C = false;
	              sibling.C = true;
	              d3_geom_voronoiRedBlackRotateRight(this, sibling);
	              sibling = parent.R;
	            }
	            sibling.C = parent.C;
	            parent.C = sibling.R.C = false;
	            d3_geom_voronoiRedBlackRotateLeft(this, parent);
	            node = this._;
	            break;
	          }
	        } else {
	          sibling = parent.L;
	          if (sibling.C) {
	            sibling.C = false;
	            parent.C = true;
	            d3_geom_voronoiRedBlackRotateRight(this, parent);
	            sibling = parent.L;
	          }
	          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
	            if (!sibling.L || !sibling.L.C) {
	              sibling.R.C = false;
	              sibling.C = true;
	              d3_geom_voronoiRedBlackRotateLeft(this, sibling);
	              sibling = parent.L;
	            }
	            sibling.C = parent.C;
	            parent.C = sibling.L.C = false;
	            d3_geom_voronoiRedBlackRotateRight(this, parent);
	            node = this._;
	            break;
	          }
	        }
	        sibling.C = true;
	        node = parent;
	        parent = parent.U;
	      } while (!node.C);
	      if (node) node.C = false;
	    }
	  };
	  function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
	    var p = node, q = node.R, parent = p.U;
	    if (parent) {
	      if (parent.L === p) parent.L = q; else parent.R = q;
	    } else {
	      tree._ = q;
	    }
	    q.U = parent;
	    p.U = q;
	    p.R = q.L;
	    if (p.R) p.R.U = p;
	    q.L = p;
	  }
	  function d3_geom_voronoiRedBlackRotateRight(tree, node) {
	    var p = node, q = node.L, parent = p.U;
	    if (parent) {
	      if (parent.L === p) parent.L = q; else parent.R = q;
	    } else {
	      tree._ = q;
	    }
	    q.U = parent;
	    p.U = q;
	    p.L = q.R;
	    if (p.L) p.L.U = p;
	    q.R = p;
	  }
	  function d3_geom_voronoiRedBlackFirst(node) {
	    while (node.L) node = node.L;
	    return node;
	  }
	  function d3_geom_voronoi(sites, bbox) {
	    var site = sites.sort(d3_geom_voronoiVertexOrder).pop(), x0, y0, circle;
	    d3_geom_voronoiEdges = [];
	    d3_geom_voronoiCells = new Array(sites.length);
	    d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree();
	    d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree();
	    while (true) {
	      circle = d3_geom_voronoiFirstCircle;
	      if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
	        if (site.x !== x0 || site.y !== y0) {
	          d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
	          d3_geom_voronoiAddBeach(site);
	          x0 = site.x, y0 = site.y;
	        }
	        site = sites.pop();
	      } else if (circle) {
	        d3_geom_voronoiRemoveBeach(circle.arc);
	      } else {
	        break;
	      }
	    }
	    if (bbox) d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);
	    var diagram = {
	      cells: d3_geom_voronoiCells,
	      edges: d3_geom_voronoiEdges
	    };
	    d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;
	    return diagram;
	  }
	  function d3_geom_voronoiVertexOrder(a, b) {
	    return b.y - a.y || b.x - a.x;
	  }
	  d3.geom.voronoi = function(points) {
	    var x = d3_geom_pointX, y = d3_geom_pointY, fx = x, fy = y, clipExtent = d3_geom_voronoiClipExtent;
	    if (points) return voronoi(points);
	    function voronoi(data) {
	      var polygons = new Array(data.length), x0 = clipExtent[0][0], y0 = clipExtent[0][1], x1 = clipExtent[1][0], y1 = clipExtent[1][1];
	      d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, i) {
	        var edges = cell.edges, site = cell.site, polygon = polygons[i] = edges.length ? edges.map(function(e) {
	          var s = e.start();
	          return [ s.x, s.y ];
	        }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [ [ x0, y1 ], [ x1, y1 ], [ x1, y0 ], [ x0, y0 ] ] : [];
	        polygon.point = data[i];
	      });
	      return polygons;
	    }
	    function sites(data) {
	      return data.map(function(d, i) {
	        return {
	          x: Math.round(fx(d, i) / ε) * ε,
	          y: Math.round(fy(d, i) / ε) * ε,
	          i: i
	        };
	      });
	    }
	    voronoi.links = function(data) {
	      return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
	        return edge.l && edge.r;
	      }).map(function(edge) {
	        return {
	          source: data[edge.l.i],
	          target: data[edge.r.i]
	        };
	      });
	    };
	    voronoi.triangles = function(data) {
	      var triangles = [];
	      d3_geom_voronoi(sites(data)).cells.forEach(function(cell, i) {
	        var site = cell.site, edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder), j = -1, m = edges.length, e0, s0, e1 = edges[m - 1].edge, s1 = e1.l === site ? e1.r : e1.l;
	        while (++j < m) {
	          e0 = e1;
	          s0 = s1;
	          e1 = edges[j].edge;
	          s1 = e1.l === site ? e1.r : e1.l;
	          if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
	            triangles.push([ data[i], data[s0.i], data[s1.i] ]);
	          }
	        }
	      });
	      return triangles;
	    };
	    voronoi.x = function(_) {
	      return arguments.length ? (fx = d3_functor(x = _), voronoi) : x;
	    };
	    voronoi.y = function(_) {
	      return arguments.length ? (fy = d3_functor(y = _), voronoi) : y;
	    };
	    voronoi.clipExtent = function(_) {
	      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
	      clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;
	      return voronoi;
	    };
	    voronoi.size = function(_) {
	      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
	      return voronoi.clipExtent(_ && [ [ 0, 0 ], _ ]);
	    };
	    return voronoi;
	  };
	  var d3_geom_voronoiClipExtent = [ [ -1e6, -1e6 ], [ 1e6, 1e6 ] ];
	  function d3_geom_voronoiTriangleArea(a, b, c) {
	    return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
	  }
	  d3.geom.delaunay = function(vertices) {
	    return d3.geom.voronoi().triangles(vertices);
	  };
	  d3.geom.quadtree = function(points, x1, y1, x2, y2) {
	    var x = d3_geom_pointX, y = d3_geom_pointY, compat;
	    if (compat = arguments.length) {
	      x = d3_geom_quadtreeCompatX;
	      y = d3_geom_quadtreeCompatY;
	      if (compat === 3) {
	        y2 = y1;
	        x2 = x1;
	        y1 = x1 = 0;
	      }
	      return quadtree(points);
	    }
	    function quadtree(data) {
	      var d, fx = d3_functor(x), fy = d3_functor(y), xs, ys, i, n, x1_, y1_, x2_, y2_;
	      if (x1 != null) {
	        x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
	      } else {
	        x2_ = y2_ = -(x1_ = y1_ = Infinity);
	        xs = [], ys = [];
	        n = data.length;
	        if (compat) for (i = 0; i < n; ++i) {
	          d = data[i];
	          if (d.x < x1_) x1_ = d.x;
	          if (d.y < y1_) y1_ = d.y;
	          if (d.x > x2_) x2_ = d.x;
	          if (d.y > y2_) y2_ = d.y;
	          xs.push(d.x);
	          ys.push(d.y);
	        } else for (i = 0; i < n; ++i) {
	          var x_ = +fx(d = data[i], i), y_ = +fy(d, i);
	          if (x_ < x1_) x1_ = x_;
	          if (y_ < y1_) y1_ = y_;
	          if (x_ > x2_) x2_ = x_;
	          if (y_ > y2_) y2_ = y_;
	          xs.push(x_);
	          ys.push(y_);
	        }
	      }
	      var dx = x2_ - x1_, dy = y2_ - y1_;
	      if (dx > dy) y2_ = y1_ + dx; else x2_ = x1_ + dy;
	      function insert(n, d, x, y, x1, y1, x2, y2) {
	        if (isNaN(x) || isNaN(y)) return;
	        if (n.leaf) {
	          var nx = n.x, ny = n.y;
	          if (nx != null) {
	            if (abs(nx - x) + abs(ny - y) < .01) {
	              insertChild(n, d, x, y, x1, y1, x2, y2);
	            } else {
	              var nPoint = n.point;
	              n.x = n.y = n.point = null;
	              insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
	              insertChild(n, d, x, y, x1, y1, x2, y2);
	            }
	          } else {
	            n.x = x, n.y = y, n.point = d;
	          }
	        } else {
	          insertChild(n, d, x, y, x1, y1, x2, y2);
	        }
	      }
	      function insertChild(n, d, x, y, x1, y1, x2, y2) {
	        var xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym, i = below << 1 | right;
	        n.leaf = false;
	        n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
	        if (right) x1 = xm; else x2 = xm;
	        if (below) y1 = ym; else y2 = ym;
	        insert(n, d, x, y, x1, y1, x2, y2);
	      }
	      var root = d3_geom_quadtreeNode();
	      root.add = function(d) {
	        insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);
	      };
	      root.visit = function(f) {
	        d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
	      };
	      root.find = function(point) {
	        return d3_geom_quadtreeFind(root, point[0], point[1], x1_, y1_, x2_, y2_);
	      };
	      i = -1;
	      if (x1 == null) {
	        while (++i < n) {
	          insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
	        }
	        --i;
	      } else data.forEach(root.add);
	      xs = ys = data = d = null;
	      return root;
	    }
	    quadtree.x = function(_) {
	      return arguments.length ? (x = _, quadtree) : x;
	    };
	    quadtree.y = function(_) {
	      return arguments.length ? (y = _, quadtree) : y;
	    };
	    quadtree.extent = function(_) {
	      if (!arguments.length) return x1 == null ? null : [ [ x1, y1 ], [ x2, y2 ] ];
	      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], 
	      y2 = +_[1][1];
	      return quadtree;
	    };
	    quadtree.size = function(_) {
	      if (!arguments.length) return x1 == null ? null : [ x2 - x1, y2 - y1 ];
	      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
	      return quadtree;
	    };
	    return quadtree;
	  };
	  function d3_geom_quadtreeCompatX(d) {
	    return d.x;
	  }
	  function d3_geom_quadtreeCompatY(d) {
	    return d.y;
	  }
	  function d3_geom_quadtreeNode() {
	    return {
	      leaf: true,
	      nodes: [],
	      point: null,
	      x: null,
	      y: null
	    };
	  }
	  function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
	    if (!f(node, x1, y1, x2, y2)) {
	      var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, children = node.nodes;
	      if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
	      if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
	      if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
	      if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
	    }
	  }
	  function d3_geom_quadtreeFind(root, x, y, x0, y0, x3, y3) {
	    var minDistance2 = Infinity, closestPoint;
	    (function find(node, x1, y1, x2, y2) {
	      if (x1 > x3 || y1 > y3 || x2 < x0 || y2 < y0) return;
	      if (point = node.point) {
	        var point, dx = x - node.x, dy = y - node.y, distance2 = dx * dx + dy * dy;
	        if (distance2 < minDistance2) {
	          var distance = Math.sqrt(minDistance2 = distance2);
	          x0 = x - distance, y0 = y - distance;
	          x3 = x + distance, y3 = y + distance;
	          closestPoint = point;
	        }
	      }
	      var children = node.nodes, xm = (x1 + x2) * .5, ym = (y1 + y2) * .5, right = x >= xm, below = y >= ym;
	      for (var i = below << 1 | right, j = i + 4; i < j; ++i) {
	        if (node = children[i & 3]) switch (i & 3) {
	         case 0:
	          find(node, x1, y1, xm, ym);
	          break;
	
	         case 1:
	          find(node, xm, y1, x2, ym);
	          break;
	
	         case 2:
	          find(node, x1, ym, xm, y2);
	          break;
	
	         case 3:
	          find(node, xm, ym, x2, y2);
	          break;
	        }
	      }
	    })(root, x0, y0, x3, y3);
	    return closestPoint;
	  }
	  d3.interpolateRgb = d3_interpolateRgb;
	  function d3_interpolateRgb(a, b) {
	    a = d3.rgb(a);
	    b = d3.rgb(b);
	    var ar = a.r, ag = a.g, ab = a.b, br = b.r - ar, bg = b.g - ag, bb = b.b - ab;
	    return function(t) {
	      return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
	    };
	  }
	  d3.interpolateObject = d3_interpolateObject;
	  function d3_interpolateObject(a, b) {
	    var i = {}, c = {}, k;
	    for (k in a) {
	      if (k in b) {
	        i[k] = d3_interpolate(a[k], b[k]);
	      } else {
	        c[k] = a[k];
	      }
	    }
	    for (k in b) {
	      if (!(k in a)) {
	        c[k] = b[k];
	      }
	    }
	    return function(t) {
	      for (k in i) c[k] = i[k](t);
	      return c;
	    };
	  }
	  d3.interpolateNumber = d3_interpolateNumber;
	  function d3_interpolateNumber(a, b) {
	    a = +a, b = +b;
	    return function(t) {
	      return a * (1 - t) + b * t;
	    };
	  }
	  d3.interpolateString = d3_interpolateString;
	  function d3_interpolateString(a, b) {
	    var bi = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
	    a = a + "", b = b + "";
	    while ((am = d3_interpolate_numberA.exec(a)) && (bm = d3_interpolate_numberB.exec(b))) {
	      if ((bs = bm.index) > bi) {
	        bs = b.slice(bi, bs);
	        if (s[i]) s[i] += bs; else s[++i] = bs;
	      }
	      if ((am = am[0]) === (bm = bm[0])) {
	        if (s[i]) s[i] += bm; else s[++i] = bm;
	      } else {
	        s[++i] = null;
	        q.push({
	          i: i,
	          x: d3_interpolateNumber(am, bm)
	        });
	      }
	      bi = d3_interpolate_numberB.lastIndex;
	    }
	    if (bi < b.length) {
	      bs = b.slice(bi);
	      if (s[i]) s[i] += bs; else s[++i] = bs;
	    }
	    return s.length < 2 ? q[0] ? (b = q[0].x, function(t) {
	      return b(t) + "";
	    }) : function() {
	      return b;
	    } : (b = q.length, function(t) {
	      for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
	      return s.join("");
	    });
	  }
	  var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");
	  d3.interpolate = d3_interpolate;
	  function d3_interpolate(a, b) {
	    var i = d3.interpolators.length, f;
	    while (--i >= 0 && !(f = d3.interpolators[i](a, b))) ;
	    return f;
	  }
	  d3.interpolators = [ function(a, b) {
	    var t = typeof b;
	    return (t === "string" ? d3_rgb_names.has(b.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_color ? d3_interpolateRgb : Array.isArray(b) ? d3_interpolateArray : t === "object" && isNaN(b) ? d3_interpolateObject : d3_interpolateNumber)(a, b);
	  } ];
	  d3.interpolateArray = d3_interpolateArray;
	  function d3_interpolateArray(a, b) {
	    var x = [], c = [], na = a.length, nb = b.length, n0 = Math.min(a.length, b.length), i;
	    for (i = 0; i < n0; ++i) x.push(d3_interpolate(a[i], b[i]));
	    for (;i < na; ++i) c[i] = a[i];
	    for (;i < nb; ++i) c[i] = b[i];
	    return function(t) {
	      for (i = 0; i < n0; ++i) c[i] = x[i](t);
	      return c;
	    };
	  }
	  var d3_ease_default = function() {
	    return d3_identity;
	  };
	  var d3_ease = d3.map({
	    linear: d3_ease_default,
	    poly: d3_ease_poly,
	    quad: function() {
	      return d3_ease_quad;
	    },
	    cubic: function() {
	      return d3_ease_cubic;
	    },
	    sin: function() {
	      return d3_ease_sin;
	    },
	    exp: function() {
	      return d3_ease_exp;
	    },
	    circle: function() {
	      return d3_ease_circle;
	    },
	    elastic: d3_ease_elastic,
	    back: d3_ease_back,
	    bounce: function() {
	      return d3_ease_bounce;
	    }
	  });
	  var d3_ease_mode = d3.map({
	    "in": d3_identity,
	    out: d3_ease_reverse,
	    "in-out": d3_ease_reflect,
	    "out-in": function(f) {
	      return d3_ease_reflect(d3_ease_reverse(f));
	    }
	  });
	  d3.ease = function(name) {
	    var i = name.indexOf("-"), t = i >= 0 ? name.slice(0, i) : name, m = i >= 0 ? name.slice(i + 1) : "in";
	    t = d3_ease.get(t) || d3_ease_default;
	    m = d3_ease_mode.get(m) || d3_identity;
	    return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))));
	  };
	  function d3_ease_clamp(f) {
	    return function(t) {
	      return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
	    };
	  }
	  function d3_ease_reverse(f) {
	    return function(t) {
	      return 1 - f(1 - t);
	    };
	  }
	  function d3_ease_reflect(f) {
	    return function(t) {
	      return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
	    };
	  }
	  function d3_ease_quad(t) {
	    return t * t;
	  }
	  function d3_ease_cubic(t) {
	    return t * t * t;
	  }
	  function d3_ease_cubicInOut(t) {
	    if (t <= 0) return 0;
	    if (t >= 1) return 1;
	    var t2 = t * t, t3 = t2 * t;
	    return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
	  }
	  function d3_ease_poly(e) {
	    return function(t) {
	      return Math.pow(t, e);
	    };
	  }
	  function d3_ease_sin(t) {
	    return 1 - Math.cos(t * halfπ);
	  }
	  function d3_ease_exp(t) {
	    return Math.pow(2, 10 * (t - 1));
	  }
	  function d3_ease_circle(t) {
	    return 1 - Math.sqrt(1 - t * t);
	  }
	  function d3_ease_elastic(a, p) {
	    var s;
	    if (arguments.length < 2) p = .45;
	    if (arguments.length) s = p / τ * Math.asin(1 / a); else a = 1, s = p / 4;
	    return function(t) {
	      return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * τ / p);
	    };
	  }
	  function d3_ease_back(s) {
	    if (!s) s = 1.70158;
	    return function(t) {
	      return t * t * ((s + 1) * t - s);
	    };
	  }
	  function d3_ease_bounce(t) {
	    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
	  }
	  d3.interpolateHcl = d3_interpolateHcl;
	  function d3_interpolateHcl(a, b) {
	    a = d3.hcl(a);
	    b = d3.hcl(b);
	    var ah = a.h, ac = a.c, al = a.l, bh = b.h - ah, bc = b.c - ac, bl = b.l - al;
	    if (isNaN(bc)) bc = 0, ac = isNaN(ac) ? b.c : ac;
	    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
	    return function(t) {
	      return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
	    };
	  }
	  d3.interpolateHsl = d3_interpolateHsl;
	  function d3_interpolateHsl(a, b) {
	    a = d3.hsl(a);
	    b = d3.hsl(b);
	    var ah = a.h, as = a.s, al = a.l, bh = b.h - ah, bs = b.s - as, bl = b.l - al;
	    if (isNaN(bs)) bs = 0, as = isNaN(as) ? b.s : as;
	    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
	    return function(t) {
	      return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + "";
	    };
	  }
	  d3.interpolateLab = d3_interpolateLab;
	  function d3_interpolateLab(a, b) {
	    a = d3.lab(a);
	    b = d3.lab(b);
	    var al = a.l, aa = a.a, ab = a.b, bl = b.l - al, ba = b.a - aa, bb = b.b - ab;
	    return function(t) {
	      return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
	    };
	  }
	  d3.interpolateRound = d3_interpolateRound;
	  function d3_interpolateRound(a, b) {
	    b -= a;
	    return function(t) {
	      return Math.round(a + b * t);
	    };
	  }
	  d3.transform = function(string) {
	    var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
	    return (d3.transform = function(string) {
	      if (string != null) {
	        g.setAttribute("transform", string);
	        var t = g.transform.baseVal.consolidate();
	      }
	      return new d3_transform(t ? t.matrix : d3_transformIdentity);
	    })(string);
	  };
	  function d3_transform(m) {
	    var r0 = [ m.a, m.b ], r1 = [ m.c, m.d ], kx = d3_transformNormalize(r0), kz = d3_transformDot(r0, r1), ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
	    if (r0[0] * r1[1] < r1[0] * r0[1]) {
	      r0[0] *= -1;
	      r0[1] *= -1;
	      kx *= -1;
	      kz *= -1;
	    }
	    this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
	    this.translate = [ m.e, m.f ];
	    this.scale = [ kx, ky ];
	    this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
	  }
	  d3_transform.prototype.toString = function() {
	    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
	  };
	  function d3_transformDot(a, b) {
	    return a[0] * b[0] + a[1] * b[1];
	  }
	  function d3_transformNormalize(a) {
	    var k = Math.sqrt(d3_transformDot(a, a));
	    if (k) {
	      a[0] /= k;
	      a[1] /= k;
	    }
	    return k;
	  }
	  function d3_transformCombine(a, b, k) {
	    a[0] += k * b[0];
	    a[1] += k * b[1];
	    return a;
	  }
	  var d3_transformIdentity = {
	    a: 1,
	    b: 0,
	    c: 0,
	    d: 1,
	    e: 0,
	    f: 0
	  };
	  d3.interpolateTransform = d3_interpolateTransform;
	  function d3_interpolateTransformPop(s) {
	    return s.length ? s.pop() + "," : "";
	  }
	  function d3_interpolateTranslate(ta, tb, s, q) {
	    if (ta[0] !== tb[0] || ta[1] !== tb[1]) {
	      var i = s.push("translate(", null, ",", null, ")");
	      q.push({
	        i: i - 4,
	        x: d3_interpolateNumber(ta[0], tb[0])
	      }, {
	        i: i - 2,
	        x: d3_interpolateNumber(ta[1], tb[1])
	      });
	    } else if (tb[0] || tb[1]) {
	      s.push("translate(" + tb + ")");
	    }
	  }
	  function d3_interpolateRotate(ra, rb, s, q) {
	    if (ra !== rb) {
	      if (ra - rb > 180) rb += 360; else if (rb - ra > 180) ra += 360;
	      q.push({
	        i: s.push(d3_interpolateTransformPop(s) + "rotate(", null, ")") - 2,
	        x: d3_interpolateNumber(ra, rb)
	      });
	    } else if (rb) {
	      s.push(d3_interpolateTransformPop(s) + "rotate(" + rb + ")");
	    }
	  }
	  function d3_interpolateSkew(wa, wb, s, q) {
	    if (wa !== wb) {
	      q.push({
	        i: s.push(d3_interpolateTransformPop(s) + "skewX(", null, ")") - 2,
	        x: d3_interpolateNumber(wa, wb)
	      });
	    } else if (wb) {
	      s.push(d3_interpolateTransformPop(s) + "skewX(" + wb + ")");
	    }
	  }
	  function d3_interpolateScale(ka, kb, s, q) {
	    if (ka[0] !== kb[0] || ka[1] !== kb[1]) {
	      var i = s.push(d3_interpolateTransformPop(s) + "scale(", null, ",", null, ")");
	      q.push({
	        i: i - 4,
	        x: d3_interpolateNumber(ka[0], kb[0])
	      }, {
	        i: i - 2,
	        x: d3_interpolateNumber(ka[1], kb[1])
	      });
	    } else if (kb[0] !== 1 || kb[1] !== 1) {
	      s.push(d3_interpolateTransformPop(s) + "scale(" + kb + ")");
	    }
	  }
	  function d3_interpolateTransform(a, b) {
	    var s = [], q = [];
	    a = d3.transform(a), b = d3.transform(b);
	    d3_interpolateTranslate(a.translate, b.translate, s, q);
	    d3_interpolateRotate(a.rotate, b.rotate, s, q);
	    d3_interpolateSkew(a.skew, b.skew, s, q);
	    d3_interpolateScale(a.scale, b.scale, s, q);
	    a = b = null;
	    return function(t) {
	      var i = -1, n = q.length, o;
	      while (++i < n) s[(o = q[i]).i] = o.x(t);
	      return s.join("");
	    };
	  }
	  function d3_uninterpolateNumber(a, b) {
	    b = (b -= a = +a) || 1 / b;
	    return function(x) {
	      return (x - a) / b;
	    };
	  }
	  function d3_uninterpolateClamp(a, b) {
	    b = (b -= a = +a) || 1 / b;
	    return function(x) {
	      return Math.max(0, Math.min(1, (x - a) / b));
	    };
	  }
	  d3.layout = {};
	  d3.layout.bundle = function() {
	    return function(links) {
	      var paths = [], i = -1, n = links.length;
	      while (++i < n) paths.push(d3_layout_bundlePath(links[i]));
	      return paths;
	    };
	  };
	  function d3_layout_bundlePath(link) {
	    var start = link.source, end = link.target, lca = d3_layout_bundleLeastCommonAncestor(start, end), points = [ start ];
	    while (start !== lca) {
	      start = start.parent;
	      points.push(start);
	    }
	    var k = points.length;
	    while (end !== lca) {
	      points.splice(k, 0, end);
	      end = end.parent;
	    }
	    return points;
	  }
	  function d3_layout_bundleAncestors(node) {
	    var ancestors = [], parent = node.parent;
	    while (parent != null) {
	      ancestors.push(node);
	      node = parent;
	      parent = parent.parent;
	    }
	    ancestors.push(node);
	    return ancestors;
	  }
	  function d3_layout_bundleLeastCommonAncestor(a, b) {
	    if (a === b) return a;
	    var aNodes = d3_layout_bundleAncestors(a), bNodes = d3_layout_bundleAncestors(b), aNode = aNodes.pop(), bNode = bNodes.pop(), sharedNode = null;
	    while (aNode === bNode) {
	      sharedNode = aNode;
	      aNode = aNodes.pop();
	      bNode = bNodes.pop();
	    }
	    return sharedNode;
	  }
	  d3.layout.chord = function() {
	    var chord = {}, chords, groups, matrix, n, padding = 0, sortGroups, sortSubgroups, sortChords;
	    function relayout() {
	      var subgroups = {}, groupSums = [], groupIndex = d3.range(n), subgroupIndex = [], k, x, x0, i, j;
	      chords = [];
	      groups = [];
	      k = 0, i = -1;
	      while (++i < n) {
	        x = 0, j = -1;
	        while (++j < n) {
	          x += matrix[i][j];
	        }
	        groupSums.push(x);
	        subgroupIndex.push(d3.range(n));
	        k += x;
	      }
	      if (sortGroups) {
	        groupIndex.sort(function(a, b) {
	          return sortGroups(groupSums[a], groupSums[b]);
	        });
	      }
	      if (sortSubgroups) {
	        subgroupIndex.forEach(function(d, i) {
	          d.sort(function(a, b) {
	            return sortSubgroups(matrix[i][a], matrix[i][b]);
	          });
	        });
	      }
	      k = (τ - padding * n) / k;
	      x = 0, i = -1;
	      while (++i < n) {
	        x0 = x, j = -1;
	        while (++j < n) {
	          var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
	          subgroups[di + "-" + dj] = {
	            index: di,
	            subindex: dj,
	            startAngle: a0,
	            endAngle: a1,
	            value: v
	          };
	        }
	        groups[di] = {
	          index: di,
	          startAngle: x0,
	          endAngle: x,
	          value: groupSums[di]
	        };
	        x += padding;
	      }
	      i = -1;
	      while (++i < n) {
	        j = i - 1;
	        while (++j < n) {
	          var source = subgroups[i + "-" + j], target = subgroups[j + "-" + i];
	          if (source.value || target.value) {
	            chords.push(source.value < target.value ? {
	              source: target,
	              target: source
	            } : {
	              source: source,
	              target: target
	            });
	          }
	        }
	      }
	      if (sortChords) resort();
	    }
	    function resort() {
	      chords.sort(function(a, b) {
	        return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
	      });
	    }
	    chord.matrix = function(x) {
	      if (!arguments.length) return matrix;
	      n = (matrix = x) && matrix.length;
	      chords = groups = null;
	      return chord;
	    };
	    chord.padding = function(x) {
	      if (!arguments.length) return padding;
	      padding = x;
	      chords = groups = null;
	      return chord;
	    };
	    chord.sortGroups = function(x) {
	      if (!arguments.length) return sortGroups;
	      sortGroups = x;
	      chords = groups = null;
	      return chord;
	    };
	    chord.sortSubgroups = function(x) {
	      if (!arguments.length) return sortSubgroups;
	      sortSubgroups = x;
	      chords = null;
	      return chord;
	    };
	    chord.sortChords = function(x) {
	      if (!arguments.length) return sortChords;
	      sortChords = x;
	      if (chords) resort();
	      return chord;
	    };
	    chord.chords = function() {
	      if (!chords) relayout();
	      return chords;
	    };
	    chord.groups = function() {
	      if (!groups) relayout();
	      return groups;
	    };
	    return chord;
	  };
	  d3.layout.force = function() {
	    var force = {}, event = d3.dispatch("start", "tick", "end"), timer, size = [ 1, 1 ], drag, alpha, friction = .9, linkDistance = d3_layout_forceLinkDistance, linkStrength = d3_layout_forceLinkStrength, charge = -30, chargeDistance2 = d3_layout_forceChargeDistance2, gravity = .1, theta2 = .64, nodes = [], links = [], distances, strengths, charges;
	    function repulse(node) {
	      return function(quad, x1, _, x2) {
	        if (quad.point !== node) {
	          var dx = quad.cx - node.x, dy = quad.cy - node.y, dw = x2 - x1, dn = dx * dx + dy * dy;
	          if (dw * dw / theta2 < dn) {
	            if (dn < chargeDistance2) {
	              var k = quad.charge / dn;
	              node.px -= dx * k;
	              node.py -= dy * k;
	            }
	            return true;
	          }
	          if (quad.point && dn && dn < chargeDistance2) {
	            var k = quad.pointCharge / dn;
	            node.px -= dx * k;
	            node.py -= dy * k;
	          }
	        }
	        return !quad.charge;
	      };
	    }
	    force.tick = function() {
	      if ((alpha *= .99) < .005) {
	        timer = null;
	        event.end({
	          type: "end",
	          alpha: alpha = 0
	        });
	        return true;
	      }
	      var n = nodes.length, m = links.length, q, i, o, s, t, l, k, x, y;
	      for (i = 0; i < m; ++i) {
	        o = links[i];
	        s = o.source;
	        t = o.target;
	        x = t.x - s.x;
	        y = t.y - s.y;
	        if (l = x * x + y * y) {
	          l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
	          x *= l;
	          y *= l;
	          t.x -= x * (k = s.weight + t.weight ? s.weight / (s.weight + t.weight) : .5);
	          t.y -= y * k;
	          s.x += x * (k = 1 - k);
	          s.y += y * k;
	        }
	      }
	      if (k = alpha * gravity) {
	        x = size[0] / 2;
	        y = size[1] / 2;
	        i = -1;
	        if (k) while (++i < n) {
	          o = nodes[i];
	          o.x += (x - o.x) * k;
	          o.y += (y - o.y) * k;
	        }
	      }
	      if (charge) {
	        d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
	        i = -1;
	        while (++i < n) {
	          if (!(o = nodes[i]).fixed) {
	            q.visit(repulse(o));
	          }
	        }
	      }
	      i = -1;
	      while (++i < n) {
	        o = nodes[i];
	        if (o.fixed) {
	          o.x = o.px;
	          o.y = o.py;
	        } else {
	          o.x -= (o.px - (o.px = o.x)) * friction;
	          o.y -= (o.py - (o.py = o.y)) * friction;
	        }
	      }
	      event.tick({
	        type: "tick",
	        alpha: alpha
	      });
	    };
	    force.nodes = function(x) {
	      if (!arguments.length) return nodes;
	      nodes = x;
	      return force;
	    };
	    force.links = function(x) {
	      if (!arguments.length) return links;
	      links = x;
	      return force;
	    };
	    force.size = function(x) {
	      if (!arguments.length) return size;
	      size = x;
	      return force;
	    };
	    force.linkDistance = function(x) {
	      if (!arguments.length) return linkDistance;
	      linkDistance = typeof x === "function" ? x : +x;
	      return force;
	    };
	    force.distance = force.linkDistance;
	    force.linkStrength = function(x) {
	      if (!arguments.length) return linkStrength;
	      linkStrength = typeof x === "function" ? x : +x;
	      return force;
	    };
	    force.friction = function(x) {
	      if (!arguments.length) return friction;
	      friction = +x;
	      return force;
	    };
	    force.charge = function(x) {
	      if (!arguments.length) return charge;
	      charge = typeof x === "function" ? x : +x;
	      return force;
	    };
	    force.chargeDistance = function(x) {
	      if (!arguments.length) return Math.sqrt(chargeDistance2);
	      chargeDistance2 = x * x;
	      return force;
	    };
	    force.gravity = function(x) {
	      if (!arguments.length) return gravity;
	      gravity = +x;
	      return force;
	    };
	    force.theta = function(x) {
	      if (!arguments.length) return Math.sqrt(theta2);
	      theta2 = x * x;
	      return force;
	    };
	    force.alpha = function(x) {
	      if (!arguments.length) return alpha;
	      x = +x;
	      if (alpha) {
	        if (x > 0) {
	          alpha = x;
	        } else {
	          timer.c = null, timer.t = NaN, timer = null;
	          event.end({
	            type: "end",
	            alpha: alpha = 0
	          });
	        }
	      } else if (x > 0) {
	        event.start({
	          type: "start",
	          alpha: alpha = x
	        });
	        timer = d3_timer(force.tick);
	      }
	      return force;
	    };
	    force.start = function() {
	      var i, n = nodes.length, m = links.length, w = size[0], h = size[1], neighbors, o;
	      for (i = 0; i < n; ++i) {
	        (o = nodes[i]).index = i;
	        o.weight = 0;
	      }
	      for (i = 0; i < m; ++i) {
	        o = links[i];
	        if (typeof o.source == "number") o.source = nodes[o.source];
	        if (typeof o.target == "number") o.target = nodes[o.target];
	        ++o.source.weight;
	        ++o.target.weight;
	      }
	      for (i = 0; i < n; ++i) {
	        o = nodes[i];
	        if (isNaN(o.x)) o.x = position("x", w);
	        if (isNaN(o.y)) o.y = position("y", h);
	        if (isNaN(o.px)) o.px = o.x;
	        if (isNaN(o.py)) o.py = o.y;
	      }
	      distances = [];
	      if (typeof linkDistance === "function") for (i = 0; i < m; ++i) distances[i] = +linkDistance.call(this, links[i], i); else for (i = 0; i < m; ++i) distances[i] = linkDistance;
	      strengths = [];
	      if (typeof linkStrength === "function") for (i = 0; i < m; ++i) strengths[i] = +linkStrength.call(this, links[i], i); else for (i = 0; i < m; ++i) strengths[i] = linkStrength;
	      charges = [];
	      if (typeof charge === "function") for (i = 0; i < n; ++i) charges[i] = +charge.call(this, nodes[i], i); else for (i = 0; i < n; ++i) charges[i] = charge;
	      function position(dimension, size) {
	        if (!neighbors) {
	          neighbors = new Array(n);
	          for (j = 0; j < n; ++j) {
	            neighbors[j] = [];
	          }
	          for (j = 0; j < m; ++j) {
	            var o = links[j];
	            neighbors[o.source.index].push(o.target);
	            neighbors[o.target.index].push(o.source);
	          }
	        }
	        var candidates = neighbors[i], j = -1, l = candidates.length, x;
	        while (++j < l) if (!isNaN(x = candidates[j][dimension])) return x;
	        return Math.random() * size;
	      }
	      return force.resume();
	    };
	    force.resume = function() {
	      return force.alpha(.1);
	    };
	    force.stop = function() {
	      return force.alpha(0);
	    };
	    force.drag = function() {
	      if (!drag) drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
	      if (!arguments.length) return drag;
	      this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
	    };
	    function dragmove(d) {
	      d.px = d3.event.x, d.py = d3.event.y;
	      force.resume();
	    }
	    return d3.rebind(force, event, "on");
	  };
	  function d3_layout_forceDragstart(d) {
	    d.fixed |= 2;
	  }
	  function d3_layout_forceDragend(d) {
	    d.fixed &= ~6;
	  }
	  function d3_layout_forceMouseover(d) {
	    d.fixed |= 4;
	    d.px = d.x, d.py = d.y;
	  }
	  function d3_layout_forceMouseout(d) {
	    d.fixed &= ~4;
	  }
	  function d3_layout_forceAccumulate(quad, alpha, charges) {
	    var cx = 0, cy = 0;
	    quad.charge = 0;
	    if (!quad.leaf) {
	      var nodes = quad.nodes, n = nodes.length, i = -1, c;
	      while (++i < n) {
	        c = nodes[i];
	        if (c == null) continue;
	        d3_layout_forceAccumulate(c, alpha, charges);
	        quad.charge += c.charge;
	        cx += c.charge * c.cx;
	        cy += c.charge * c.cy;
	      }
	    }
	    if (quad.point) {
	      if (!quad.leaf) {
	        quad.point.x += Math.random() - .5;
	        quad.point.y += Math.random() - .5;
	      }
	      var k = alpha * charges[quad.point.index];
	      quad.charge += quad.pointCharge = k;
	      cx += k * quad.point.x;
	      cy += k * quad.point.y;
	    }
	    quad.cx = cx / quad.charge;
	    quad.cy = cy / quad.charge;
	  }
	  var d3_layout_forceLinkDistance = 20, d3_layout_forceLinkStrength = 1, d3_layout_forceChargeDistance2 = Infinity;
	  d3.layout.hierarchy = function() {
	    var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;
	    function hierarchy(root) {
	      var stack = [ root ], nodes = [], node;
	      root.depth = 0;
	      while ((node = stack.pop()) != null) {
	        nodes.push(node);
	        if ((childs = children.call(hierarchy, node, node.depth)) && (n = childs.length)) {
	          var n, childs, child;
	          while (--n >= 0) {
	            stack.push(child = childs[n]);
	            child.parent = node;
	            child.depth = node.depth + 1;
	          }
	          if (value) node.value = 0;
	          node.children = childs;
	        } else {
	          if (value) node.value = +value.call(hierarchy, node, node.depth) || 0;
	          delete node.children;
	        }
	      }
	      d3_layout_hierarchyVisitAfter(root, function(node) {
	        var childs, parent;
	        if (sort && (childs = node.children)) childs.sort(sort);
	        if (value && (parent = node.parent)) parent.value += node.value;
	      });
	      return nodes;
	    }
	    hierarchy.sort = function(x) {
	      if (!arguments.length) return sort;
	      sort = x;
	      return hierarchy;
	    };
	    hierarchy.children = function(x) {
	      if (!arguments.length) return children;
	      children = x;
	      return hierarchy;
	    };
	    hierarchy.value = function(x) {
	      if (!arguments.length) return value;
	      value = x;
	      return hierarchy;
	    };
	    hierarchy.revalue = function(root) {
	      if (value) {
	        d3_layout_hierarchyVisitBefore(root, function(node) {
	          if (node.children) node.value = 0;
	        });
	        d3_layout_hierarchyVisitAfter(root, function(node) {
	          var parent;
	          if (!node.children) node.value = +value.call(hierarchy, node, node.depth) || 0;
	          if (parent = node.parent) parent.value += node.value;
	        });
	      }
	      return root;
	    };
	    return hierarchy;
	  };
	  function d3_layout_hierarchyRebind(object, hierarchy) {
	    d3.rebind(object, hierarchy, "sort", "children", "value");
	    object.nodes = object;
	    object.links = d3_layout_hierarchyLinks;
	    return object;
	  }
	  function d3_layout_hierarchyVisitBefore(node, callback) {
	    var nodes = [ node ];
	    while ((node = nodes.pop()) != null) {
	      callback(node);
	      if ((children = node.children) && (n = children.length)) {
	        var n, children;
	        while (--n >= 0) nodes.push(children[n]);
	      }
	    }
	  }
	  function d3_layout_hierarchyVisitAfter(node, callback) {
	    var nodes = [ node ], nodes2 = [];
	    while ((node = nodes.pop()) != null) {
	      nodes2.push(node);
	      if ((children = node.children) && (n = children.length)) {
	        var i = -1, n, children;
	        while (++i < n) nodes.push(children[i]);
	      }
	    }
	    while ((node = nodes2.pop()) != null) {
	      callback(node);
	    }
	  }
	  function d3_layout_hierarchyChildren(d) {
	    return d.children;
	  }
	  function d3_layout_hierarchyValue(d) {
	    return d.value;
	  }
	  function d3_layout_hierarchySort(a, b) {
	    return b.value - a.value;
	  }
	  function d3_layout_hierarchyLinks(nodes) {
	    return d3.merge(nodes.map(function(parent) {
	      return (parent.children || []).map(function(child) {
	        return {
	          source: parent,
	          target: child
	        };
	      });
	    }));
	  }
	  d3.layout.partition = function() {
	    var hierarchy = d3.layout.hierarchy(), size = [ 1, 1 ];
	    function position(node, x, dx, dy) {
	      var children = node.children;
	      node.x = x;
	      node.y = node.depth * dy;
	      node.dx = dx;
	      node.dy = dy;
	      if (children && (n = children.length)) {
	        var i = -1, n, c, d;
	        dx = node.value ? dx / node.value : 0;
	        while (++i < n) {
	          position(c = children[i], x, d = c.value * dx, dy);
	          x += d;
	        }
	      }
	    }
	    function depth(node) {
	      var children = node.children, d = 0;
	      if (children && (n = children.length)) {
	        var i = -1, n;
	        while (++i < n) d = Math.max(d, depth(children[i]));
	      }
	      return 1 + d;
	    }
	    function partition(d, i) {
	      var nodes = hierarchy.call(this, d, i);
	      position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
	      return nodes;
	    }
	    partition.size = function(x) {
	      if (!arguments.length) return size;
	      size = x;
	      return partition;
	    };
	    return d3_layout_hierarchyRebind(partition, hierarchy);
	  };
	  d3.layout.pie = function() {
	    var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = τ, padAngle = 0;
	    function pie(data) {
	      var n = data.length, values = data.map(function(d, i) {
	        return +value.call(pie, d, i);
	      }), a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle), da = (typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a, p = Math.min(Math.abs(da) / n, +(typeof padAngle === "function" ? padAngle.apply(this, arguments) : padAngle)), pa = p * (da < 0 ? -1 : 1), sum = d3.sum(values), k = sum ? (da - n * pa) / sum : 0, index = d3.range(n), arcs = [], v;
	      if (sort != null) index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
	        return values[j] - values[i];
	      } : function(i, j) {
	        return sort(data[i], data[j]);
	      });
	      index.forEach(function(i) {
	        arcs[i] = {
	          data: data[i],
	          value: v = values[i],
	          startAngle: a,
	          endAngle: a += v * k + pa,
	          padAngle: p
	        };
	      });
	      return arcs;
	    }
	    pie.value = function(_) {
	      if (!arguments.length) return value;
	      value = _;
	      return pie;
	    };
	    pie.sort = function(_) {
	      if (!arguments.length) return sort;
	      sort = _;
	      return pie;
	    };
	    pie.startAngle = function(_) {
	      if (!arguments.length) return startAngle;
	      startAngle = _;
	      return pie;
	    };
	    pie.endAngle = function(_) {
	      if (!arguments.length) return endAngle;
	      endAngle = _;
	      return pie;
	    };
	    pie.padAngle = function(_) {
	      if (!arguments.length) return padAngle;
	      padAngle = _;
	      return pie;
	    };
	    return pie;
	  };
	  var d3_layout_pieSortByValue = {};
	  d3.layout.stack = function() {
	    var values = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x = d3_layout_stackX, y = d3_layout_stackY;
	    function stack(data, index) {
	      if (!(n = data.length)) return data;
	      var series = data.map(function(d, i) {
	        return values.call(stack, d, i);
	      });
	      var points = series.map(function(d) {
	        return d.map(function(v, i) {
	          return [ x.call(stack, v, i), y.call(stack, v, i) ];
	        });
	      });
	      var orders = order.call(stack, points, index);
	      series = d3.permute(series, orders);
	      points = d3.permute(points, orders);
	      var offsets = offset.call(stack, points, index);
	      var m = series[0].length, n, i, j, o;
	      for (j = 0; j < m; ++j) {
	        out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
	        for (i = 1; i < n; ++i) {
	          out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
	        }
	      }
	      return data;
	    }
	    stack.values = function(x) {
	      if (!arguments.length) return values;
	      values = x;
	      return stack;
	    };
	    stack.order = function(x) {
	      if (!arguments.length) return order;
	      order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
	      return stack;
	    };
	    stack.offset = function(x) {
	      if (!arguments.length) return offset;
	      offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
	      return stack;
	    };
	    stack.x = function(z) {
	      if (!arguments.length) return x;
	      x = z;
	      return stack;
	    };
	    stack.y = function(z) {
	      if (!arguments.length) return y;
	      y = z;
	      return stack;
	    };
	    stack.out = function(z) {
	      if (!arguments.length) return out;
	      out = z;
	      return stack;
	    };
	    return stack;
	  };
	  function d3_layout_stackX(d) {
	    return d.x;
	  }
	  function d3_layout_stackY(d) {
	    return d.y;
	  }
	  function d3_layout_stackOut(d, y0, y) {
	    d.y0 = y0;
	    d.y = y;
	  }
	  var d3_layout_stackOrders = d3.map({
	    "inside-out": function(data) {
	      var n = data.length, i, j, max = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index = d3.range(n).sort(function(a, b) {
	        return max[a] - max[b];
	      }), top = 0, bottom = 0, tops = [], bottoms = [];
	      for (i = 0; i < n; ++i) {
	        j = index[i];
	        if (top < bottom) {
	          top += sums[j];
	          tops.push(j);
	        } else {
	          bottom += sums[j];
	          bottoms.push(j);
	        }
	      }
	      return bottoms.reverse().concat(tops);
	    },
	    reverse: function(data) {
	      return d3.range(data.length).reverse();
	    },
	    "default": d3_layout_stackOrderDefault
	  });
	  var d3_layout_stackOffsets = d3.map({
	    silhouette: function(data) {
	      var n = data.length, m = data[0].length, sums = [], max = 0, i, j, o, y0 = [];
	      for (j = 0; j < m; ++j) {
	        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
	        if (o > max) max = o;
	        sums.push(o);
	      }
	      for (j = 0; j < m; ++j) {
	        y0[j] = (max - sums[j]) / 2;
	      }
	      return y0;
	    },
	    wiggle: function(data) {
	      var n = data.length, x = data[0], m = x.length, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];
	      y0[0] = o = o0 = 0;
	      for (j = 1; j < m; ++j) {
	        for (i = 0, s1 = 0; i < n; ++i) s1 += data[i][j][1];
	        for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
	          for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
	            s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
	          }
	          s2 += s3 * data[i][j][1];
	        }
	        y0[j] = o -= s1 ? s2 / s1 * dx : 0;
	        if (o < o0) o0 = o;
	      }
	      for (j = 0; j < m; ++j) y0[j] -= o0;
	      return y0;
	    },
	    expand: function(data) {
	      var n = data.length, m = data[0].length, k = 1 / n, i, j, o, y0 = [];
	      for (j = 0; j < m; ++j) {
	        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
	        if (o) for (i = 0; i < n; i++) data[i][j][1] /= o; else for (i = 0; i < n; i++) data[i][j][1] = k;
	      }
	      for (j = 0; j < m; ++j) y0[j] = 0;
	      return y0;
	    },
	    zero: d3_layout_stackOffsetZero
	  });
	  function d3_layout_stackOrderDefault(data) {
	    return d3.range(data.length);
	  }
	  function d3_layout_stackOffsetZero(data) {
	    var j = -1, m = data[0].length, y0 = [];
	    while (++j < m) y0[j] = 0;
	    return y0;
	  }
	  function d3_layout_stackMaxIndex(array) {
	    var i = 1, j = 0, v = array[0][1], k, n = array.length;
	    for (;i < n; ++i) {
	      if ((k = array[i][1]) > v) {
	        j = i;
	        v = k;
	      }
	    }
	    return j;
	  }
	  function d3_layout_stackReduceSum(d) {
	    return d.reduce(d3_layout_stackSum, 0);
	  }
	  function d3_layout_stackSum(p, d) {
	    return p + d[1];
	  }
	  d3.layout.histogram = function() {
	    var frequency = true, valuer = Number, ranger = d3_layout_histogramRange, binner = d3_layout_histogramBinSturges;
	    function histogram(data, i) {
	      var bins = [], values = data.map(valuer, this), range = ranger.call(this, values, i), thresholds = binner.call(this, range, values, i), bin, i = -1, n = values.length, m = thresholds.length - 1, k = frequency ? 1 : 1 / n, x;
	      while (++i < m) {
	        bin = bins[i] = [];
	        bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
	        bin.y = 0;
	      }
	      if (m > 0) {
	        i = -1;
	        while (++i < n) {
	          x = values[i];
	          if (x >= range[0] && x <= range[1]) {
	            bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
	            bin.y += k;
	            bin.push(data[i]);
	          }
	        }
	      }
	      return bins;
	    }
	    histogram.value = function(x) {
	      if (!arguments.length) return valuer;
	      valuer = x;
	      return histogram;
	    };
	    histogram.range = function(x) {
	      if (!arguments.length) return ranger;
	      ranger = d3_functor(x);
	      return histogram;
	    };
	    histogram.bins = function(x) {
	      if (!arguments.length) return binner;
	      binner = typeof x === "number" ? function(range) {
	        return d3_layout_histogramBinFixed(range, x);
	      } : d3_functor(x);
	      return histogram;
	    };
	    histogram.frequency = function(x) {
	      if (!arguments.length) return frequency;
	      frequency = !!x;
	      return histogram;
	    };
	    return histogram;
	  };
	  function d3_layout_histogramBinSturges(range, values) {
	    return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
	  }
	  function d3_layout_histogramBinFixed(range, n) {
	    var x = -1, b = +range[0], m = (range[1] - b) / n, f = [];
	    while (++x <= n) f[x] = m * x + b;
	    return f;
	  }
	  function d3_layout_histogramRange(values) {
	    return [ d3.min(values), d3.max(values) ];
	  }
	  d3.layout.pack = function() {
	    var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size = [ 1, 1 ], radius;
	    function pack(d, i) {
	      var nodes = hierarchy.call(this, d, i), root = nodes[0], w = size[0], h = size[1], r = radius == null ? Math.sqrt : typeof radius === "function" ? radius : function() {
	        return radius;
	      };
	      root.x = root.y = 0;
	      d3_layout_hierarchyVisitAfter(root, function(d) {
	        d.r = +r(d.value);
	      });
	      d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
	      if (padding) {
	        var dr = padding * (radius ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;
	        d3_layout_hierarchyVisitAfter(root, function(d) {
	          d.r += dr;
	        });
	        d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
	        d3_layout_hierarchyVisitAfter(root, function(d) {
	          d.r -= dr;
	        });
	      }
	      d3_layout_packTransform(root, w / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));
	      return nodes;
	    }
	    pack.size = function(_) {
	      if (!arguments.length) return size;
	      size = _;
	      return pack;
	    };
	    pack.radius = function(_) {
	      if (!arguments.length) return radius;
	      radius = _ == null || typeof _ === "function" ? _ : +_;
	      return pack;
	    };
	    pack.padding = function(_) {
	      if (!arguments.length) return padding;
	      padding = +_;
	      return pack;
	    };
	    return d3_layout_hierarchyRebind(pack, hierarchy);
	  };
	  function d3_layout_packSort(a, b) {
	    return a.value - b.value;
	  }
	  function d3_layout_packInsert(a, b) {
	    var c = a._pack_next;
	    a._pack_next = b;
	    b._pack_prev = a;
	    b._pack_next = c;
	    c._pack_prev = b;
	  }
	  function d3_layout_packSplice(a, b) {
	    a._pack_next = b;
	    b._pack_prev = a;
	  }
	  function d3_layout_packIntersects(a, b) {
	    var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
	    return .999 * dr * dr > dx * dx + dy * dy;
	  }
	  function d3_layout_packSiblings(node) {
	    if (!(nodes = node.children) || !(n = nodes.length)) return;
	    var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k, n;
	    function bound(node) {
	      xMin = Math.min(node.x - node.r, xMin);
	      xMax = Math.max(node.x + node.r, xMax);
	      yMin = Math.min(node.y - node.r, yMin);
	      yMax = Math.max(node.y + node.r, yMax);
	    }
	    nodes.forEach(d3_layout_packLink);
	    a = nodes[0];
	    a.x = -a.r;
	    a.y = 0;
	    bound(a);
	    if (n > 1) {
	      b = nodes[1];
	      b.x = b.r;
	      b.y = 0;
	      bound(b);
	      if (n > 2) {
	        c = nodes[2];
	        d3_layout_packPlace(a, b, c);
	        bound(c);
	        d3_layout_packInsert(a, c);
	        a._pack_prev = c;
	        d3_layout_packInsert(c, b);
	        b = a._pack_next;
	        for (i = 3; i < n; i++) {
	          d3_layout_packPlace(a, b, c = nodes[i]);
	          var isect = 0, s1 = 1, s2 = 1;
	          for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
	            if (d3_layout_packIntersects(j, c)) {
	              isect = 1;
	              break;
	            }
	          }
	          if (isect == 1) {
	            for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
	              if (d3_layout_packIntersects(k, c)) {
	                break;
	              }
	            }
	          }
	          if (isect) {
	            if (s1 < s2 || s1 == s2 && b.r < a.r) d3_layout_packSplice(a, b = j); else d3_layout_packSplice(a = k, b);
	            i--;
	          } else {
	            d3_layout_packInsert(a, c);
	            b = c;
	            bound(c);
	          }
	        }
	      }
	    }
	    var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;
	    for (i = 0; i < n; i++) {
	      c = nodes[i];
	      c.x -= cx;
	      c.y -= cy;
	      cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
	    }
	    node.r = cr;
	    nodes.forEach(d3_layout_packUnlink);
	  }
	  function d3_layout_packLink(node) {
	    node._pack_next = node._pack_prev = node;
	  }
	  function d3_layout_packUnlink(node) {
	    delete node._pack_next;
	    delete node._pack_prev;
	  }
	  function d3_layout_packTransform(node, x, y, k) {
	    var children = node.children;
	    node.x = x += k * node.x;
	    node.y = y += k * node.y;
	    node.r *= k;
	    if (children) {
	      var i = -1, n = children.length;
	      while (++i < n) d3_layout_packTransform(children[i], x, y, k);
	    }
	  }
	  function d3_layout_packPlace(a, b, c) {
	    var db = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;
	    if (db && (dx || dy)) {
	      var da = b.r + c.r, dc = dx * dx + dy * dy;
	      da *= da;
	      db *= db;
	      var x = .5 + (db - da) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
	      c.x = a.x + x * dx + y * dy;
	      c.y = a.y + x * dy - y * dx;
	    } else {
	      c.x = a.x + db;
	      c.y = a.y;
	    }
	  }
	  d3.layout.tree = function() {
	    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = null;
	    function tree(d, i) {
	      var nodes = hierarchy.call(this, d, i), root0 = nodes[0], root1 = wrapTree(root0);
	      d3_layout_hierarchyVisitAfter(root1, firstWalk), root1.parent.m = -root1.z;
	      d3_layout_hierarchyVisitBefore(root1, secondWalk);
	      if (nodeSize) d3_layout_hierarchyVisitBefore(root0, sizeNode); else {
	        var left = root0, right = root0, bottom = root0;
	        d3_layout_hierarchyVisitBefore(root0, function(node) {
	          if (node.x < left.x) left = node;
	          if (node.x > right.x) right = node;
	          if (node.depth > bottom.depth) bottom = node;
	        });
	        var tx = separation(left, right) / 2 - left.x, kx = size[0] / (right.x + separation(right, left) / 2 + tx), ky = size[1] / (bottom.depth || 1);
	        d3_layout_hierarchyVisitBefore(root0, function(node) {
	          node.x = (node.x + tx) * kx;
	          node.y = node.depth * ky;
	        });
	      }
	      return nodes;
	    }
	    function wrapTree(root0) {
	      var root1 = {
	        A: null,
	        children: [ root0 ]
	      }, queue = [ root1 ], node1;
	      while ((node1 = queue.pop()) != null) {
	        for (var children = node1.children, child, i = 0, n = children.length; i < n; ++i) {
	          queue.push((children[i] = child = {
	            _: children[i],
	            parent: node1,
	            children: (child = children[i].children) && child.slice() || [],
	            A: null,
	            a: null,
	            z: 0,
	            m: 0,
	            c: 0,
	            s: 0,
	            t: null,
	            i: i
	          }).a = child);
	        }
	      }
	      return root1.children[0];
	    }
	    function firstWalk(v) {
	      var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
	      if (children.length) {
	        d3_layout_treeShift(v);
	        var midpoint = (children[0].z + children[children.length - 1].z) / 2;
	        if (w) {
	          v.z = w.z + separation(v._, w._);
	          v.m = v.z - midpoint;
	        } else {
	          v.z = midpoint;
	        }
	      } else if (w) {
	        v.z = w.z + separation(v._, w._);
	      }
	      v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
	    }
	    function secondWalk(v) {
	      v._.x = v.z + v.parent.m;
	      v.m += v.parent.m;
	    }
	    function apportion(v, w, ancestor) {
	      if (w) {
	        var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
	        while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
	          vom = d3_layout_treeLeft(vom);
	          vop = d3_layout_treeRight(vop);
	          vop.a = v;
	          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
	          if (shift > 0) {
	            d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);
	            sip += shift;
	            sop += shift;
	          }
	          sim += vim.m;
	          sip += vip.m;
	          som += vom.m;
	          sop += vop.m;
	        }
	        if (vim && !d3_layout_treeRight(vop)) {
	          vop.t = vim;
	          vop.m += sim - sop;
	        }
	        if (vip && !d3_layout_treeLeft(vom)) {
	          vom.t = vip;
	          vom.m += sip - som;
	          ancestor = v;
	        }
	      }
	      return ancestor;
	    }
	    function sizeNode(node) {
	      node.x *= size[0];
	      node.y = node.depth * size[1];
	    }
	    tree.separation = function(x) {
	      if (!arguments.length) return separation;
	      separation = x;
	      return tree;
	    };
	    tree.size = function(x) {
	      if (!arguments.length) return nodeSize ? null : size;
	      nodeSize = (size = x) == null ? sizeNode : null;
	      return tree;
	    };
	    tree.nodeSize = function(x) {
	      if (!arguments.length) return nodeSize ? size : null;
	      nodeSize = (size = x) == null ? null : sizeNode;
	      return tree;
	    };
	    return d3_layout_hierarchyRebind(tree, hierarchy);
	  };
	  function d3_layout_treeSeparation(a, b) {
	    return a.parent == b.parent ? 1 : 2;
	  }
	  function d3_layout_treeLeft(v) {
	    var children = v.children;
	    return children.length ? children[0] : v.t;
	  }
	  function d3_layout_treeRight(v) {
	    var children = v.children, n;
	    return (n = children.length) ? children[n - 1] : v.t;
	  }
	  function d3_layout_treeMove(wm, wp, shift) {
	    var change = shift / (wp.i - wm.i);
	    wp.c -= change;
	    wp.s += shift;
	    wm.c += change;
	    wp.z += shift;
	    wp.m += shift;
	  }
	  function d3_layout_treeShift(v) {
	    var shift = 0, change = 0, children = v.children, i = children.length, w;
	    while (--i >= 0) {
	      w = children[i];
	      w.z += shift;
	      w.m += shift;
	      shift += w.s + (change += w.c);
	    }
	  }
	  function d3_layout_treeAncestor(vim, v, ancestor) {
	    return vim.a.parent === v.parent ? vim.a : ancestor;
	  }
	  d3.layout.cluster = function() {
	    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = false;
	    function cluster(d, i) {
	      var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x = 0;
	      d3_layout_hierarchyVisitAfter(root, function(node) {
	        var children = node.children;
	        if (children && children.length) {
	          node.x = d3_layout_clusterX(children);
	          node.y = d3_layout_clusterY(children);
	        } else {
	          node.x = previousNode ? x += separation(node, previousNode) : 0;
	          node.y = 0;
	          previousNode = node;
	        }
	      });
	      var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
	      d3_layout_hierarchyVisitAfter(root, nodeSize ? function(node) {
	        node.x = (node.x - root.x) * size[0];
	        node.y = (root.y - node.y) * size[1];
	      } : function(node) {
	        node.x = (node.x - x0) / (x1 - x0) * size[0];
	        node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
	      });
	      return nodes;
	    }
	    cluster.separation = function(x) {
	      if (!arguments.length) return separation;
	      separation = x;
	      return cluster;
	    };
	    cluster.size = function(x) {
	      if (!arguments.length) return nodeSize ? null : size;
	      nodeSize = (size = x) == null;
	      return cluster;
	    };
	    cluster.nodeSize = function(x) {
	      if (!arguments.length) return nodeSize ? size : null;
	      nodeSize = (size = x) != null;
	      return cluster;
	    };
	    return d3_layout_hierarchyRebind(cluster, hierarchy);
	  };
	  function d3_layout_clusterY(children) {
	    return 1 + d3.max(children, function(child) {
	      return child.y;
	    });
	  }
	  function d3_layout_clusterX(children) {
	    return children.reduce(function(x, child) {
	      return x + child.x;
	    }, 0) / children.length;
	  }
	  function d3_layout_clusterLeft(node) {
	    var children = node.children;
	    return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
	  }
	  function d3_layout_clusterRight(node) {
	    var children = node.children, n;
	    return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
	  }
	  d3.layout.treemap = function() {
	    var hierarchy = d3.layout.hierarchy(), round = Math.round, size = [ 1, 1 ], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, mode = "squarify", ratio = .5 * (1 + Math.sqrt(5));
	    function scale(children, k) {
	      var i = -1, n = children.length, child, area;
	      while (++i < n) {
	        area = (child = children[i]).value * (k < 0 ? 0 : k);
	        child.area = isNaN(area) || area <= 0 ? 0 : area;
	      }
	    }
	    function squarify(node) {
	      var children = node.children;
	      if (children && children.length) {
	        var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy), n;
	        scale(remaining, rect.dx * rect.dy / node.value);
	        row.area = 0;
	        while ((n = remaining.length) > 0) {
	          row.push(child = remaining[n - 1]);
	          row.area += child.area;
	          if (mode !== "squarify" || (score = worst(row, u)) <= best) {
	            remaining.pop();
	            best = score;
	          } else {
	            row.area -= row.pop().area;
	            position(row, u, rect, false);
	            u = Math.min(rect.dx, rect.dy);
	            row.length = row.area = 0;
	            best = Infinity;
	          }
	        }
	        if (row.length) {
	          position(row, u, rect, true);
	          row.length = row.area = 0;
	        }
	        children.forEach(squarify);
	      }
	    }
	    function stickify(node) {
	      var children = node.children;
	      if (children && children.length) {
	        var rect = pad(node), remaining = children.slice(), child, row = [];
	        scale(remaining, rect.dx * rect.dy / node.value);
	        row.area = 0;
	        while (child = remaining.pop()) {
	          row.push(child);
	          row.area += child.area;
	          if (child.z != null) {
	            position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
	            row.length = row.area = 0;
	          }
	        }
	        children.forEach(stickify);
	      }
	    }
	    function worst(row, u) {
	      var s = row.area, r, rmax = 0, rmin = Infinity, i = -1, n = row.length;
	      while (++i < n) {
	        if (!(r = row[i].area)) continue;
	        if (r < rmin) rmin = r;
	        if (r > rmax) rmax = r;
	      }
	      s *= s;
	      u *= u;
	      return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
	    }
	    function position(row, u, rect, flush) {
	      var i = -1, n = row.length, x = rect.x, y = rect.y, v = u ? round(row.area / u) : 0, o;
	      if (u == rect.dx) {
	        if (flush || v > rect.dy) v = rect.dy;
	        while (++i < n) {
	          o = row[i];
	          o.x = x;
	          o.y = y;
	          o.dy = v;
	          x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
	        }
	        o.z = true;
	        o.dx += rect.x + rect.dx - x;
	        rect.y += v;
	        rect.dy -= v;
	      } else {
	        if (flush || v > rect.dx) v = rect.dx;
	        while (++i < n) {
	          o = row[i];
	          o.x = x;
	          o.y = y;
	          o.dx = v;
	          y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
	        }
	        o.z = false;
	        o.dy += rect.y + rect.dy - y;
	        rect.x += v;
	        rect.dx -= v;
	      }
	    }
	    function treemap(d) {
	      var nodes = stickies || hierarchy(d), root = nodes[0];
	      root.x = root.y = 0;
	      if (root.value) root.dx = size[0], root.dy = size[1]; else root.dx = root.dy = 0;
	      if (stickies) hierarchy.revalue(root);
	      scale([ root ], root.dx * root.dy / root.value);
	      (stickies ? stickify : squarify)(root);
	      if (sticky) stickies = nodes;
	      return nodes;
	    }
	    treemap.size = function(x) {
	      if (!arguments.length) return size;
	      size = x;
	      return treemap;
	    };
	    treemap.padding = function(x) {
	      if (!arguments.length) return padding;
	      function padFunction(node) {
	        var p = x.call(treemap, node, node.depth);
	        return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [ p, p, p, p ] : p);
	      }
	      function padConstant(node) {
	        return d3_layout_treemapPad(node, x);
	      }
	      var type;
	      pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [ x, x, x, x ], 
	      padConstant) : padConstant;
	      return treemap;
	    };
	    treemap.round = function(x) {
	      if (!arguments.length) return round != Number;
	      round = x ? Math.round : Number;
	      return treemap;
	    };
	    treemap.sticky = function(x) {
	      if (!arguments.length) return sticky;
	      sticky = x;
	      stickies = null;
	      return treemap;
	    };
	    treemap.ratio = function(x) {
	      if (!arguments.length) return ratio;
	      ratio = x;
	      return treemap;
	    };
	    treemap.mode = function(x) {
	      if (!arguments.length) return mode;
	      mode = x + "";
	      return treemap;
	    };
	    return d3_layout_hierarchyRebind(treemap, hierarchy);
	  };
	  function d3_layout_treemapPadNull(node) {
	    return {
	      x: node.x,
	      y: node.y,
	      dx: node.dx,
	      dy: node.dy
	    };
	  }
	  function d3_layout_treemapPad(node, padding) {
	    var x = node.x + padding[3], y = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];
	    if (dx < 0) {
	      x += dx / 2;
	      dx = 0;
	    }
	    if (dy < 0) {
	      y += dy / 2;
	      dy = 0;
	    }
	    return {
	      x: x,
	      y: y,
	      dx: dx,
	      dy: dy
	    };
	  }
	  d3.random = {
	    normal: function(µ, σ) {
	      var n = arguments.length;
	      if (n < 2) σ = 1;
	      if (n < 1) µ = 0;
	      return function() {
	        var x, y, r;
	        do {
	          x = Math.random() * 2 - 1;
	          y = Math.random() * 2 - 1;
	          r = x * x + y * y;
	        } while (!r || r > 1);
	        return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
	      };
	    },
	    logNormal: function() {
	      var random = d3.random.normal.apply(d3, arguments);
	      return function() {
	        return Math.exp(random());
	      };
	    },
	    bates: function(m) {
	      var random = d3.random.irwinHall(m);
	      return function() {
	        return random() / m;
	      };
	    },
	    irwinHall: function(m) {
	      return function() {
	        for (var s = 0, j = 0; j < m; j++) s += Math.random();
	        return s;
	      };
	    }
	  };
	  d3.scale = {};
	  function d3_scaleExtent(domain) {
	    var start = domain[0], stop = domain[domain.length - 1];
	    return start < stop ? [ start, stop ] : [ stop, start ];
	  }
	  function d3_scaleRange(scale) {
	    return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
	  }
	  function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
	    var u = uninterpolate(domain[0], domain[1]), i = interpolate(range[0], range[1]);
	    return function(x) {
	      return i(u(x));
	    };
	  }
	  function d3_scale_nice(domain, nice) {
	    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;
	    if (x1 < x0) {
	      dx = i0, i0 = i1, i1 = dx;
	      dx = x0, x0 = x1, x1 = dx;
	    }
	    domain[i0] = nice.floor(x0);
	    domain[i1] = nice.ceil(x1);
	    return domain;
	  }
	  function d3_scale_niceStep(step) {
	    return step ? {
	      floor: function(x) {
	        return Math.floor(x / step) * step;
	      },
	      ceil: function(x) {
	        return Math.ceil(x / step) * step;
	      }
	    } : d3_scale_niceIdentity;
	  }
	  var d3_scale_niceIdentity = {
	    floor: d3_identity,
	    ceil: d3_identity
	  };
	  function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
	    var u = [], i = [], j = 0, k = Math.min(domain.length, range.length) - 1;
	    if (domain[k] < domain[0]) {
	      domain = domain.slice().reverse();
	      range = range.slice().reverse();
	    }
	    while (++j <= k) {
	      u.push(uninterpolate(domain[j - 1], domain[j]));
	      i.push(interpolate(range[j - 1], range[j]));
	    }
	    return function(x) {
	      var j = d3.bisect(domain, x, 1, k) - 1;
	      return i[j](u[j](x));
	    };
	  }
	  d3.scale.linear = function() {
	    return d3_scale_linear([ 0, 1 ], [ 0, 1 ], d3_interpolate, false);
	  };
	  function d3_scale_linear(domain, range, interpolate, clamp) {
	    var output, input;
	    function rescale() {
	      var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
	      output = linear(domain, range, uninterpolate, interpolate);
	      input = linear(range, domain, uninterpolate, d3_interpolate);
	      return scale;
	    }
	    function scale(x) {
	      return output(x);
	    }
	    scale.invert = function(y) {
	      return input(y);
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      domain = x.map(Number);
	      return rescale();
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      return rescale();
	    };
	    scale.rangeRound = function(x) {
	      return scale.range(x).interpolate(d3_interpolateRound);
	    };
	    scale.clamp = function(x) {
	      if (!arguments.length) return clamp;
	      clamp = x;
	      return rescale();
	    };
	    scale.interpolate = function(x) {
	      if (!arguments.length) return interpolate;
	      interpolate = x;
	      return rescale();
	    };
	    scale.ticks = function(m) {
	      return d3_scale_linearTicks(domain, m);
	    };
	    scale.tickFormat = function(m, format) {
	      return d3_scale_linearTickFormat(domain, m, format);
	    };
	    scale.nice = function(m) {
	      d3_scale_linearNice(domain, m);
	      return rescale();
	    };
	    scale.copy = function() {
	      return d3_scale_linear(domain, range, interpolate, clamp);
	    };
	    return rescale();
	  }
	  function d3_scale_linearRebind(scale, linear) {
	    return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
	  }
	  function d3_scale_linearNice(domain, m) {
	    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
	    d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
	    return domain;
	  }
	  function d3_scale_linearTickRange(domain, m) {
	    if (m == null) m = 10;
	    var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)), err = m / span * step;
	    if (err <= .15) step *= 10; else if (err <= .35) step *= 5; else if (err <= .75) step *= 2;
	    extent[0] = Math.ceil(extent[0] / step) * step;
	    extent[1] = Math.floor(extent[1] / step) * step + step * .5;
	    extent[2] = step;
	    return extent;
	  }
	  function d3_scale_linearTicks(domain, m) {
	    return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
	  }
	  function d3_scale_linearTickFormat(domain, m, format) {
	    var range = d3_scale_linearTickRange(domain, m);
	    if (format) {
	      var match = d3_format_re.exec(format);
	      match.shift();
	      if (match[8] === "s") {
	        var prefix = d3.formatPrefix(Math.max(abs(range[0]), abs(range[1])));
	        if (!match[7]) match[7] = "." + d3_scale_linearPrecision(prefix.scale(range[2]));
	        match[8] = "f";
	        format = d3.format(match.join(""));
	        return function(d) {
	          return format(prefix.scale(d)) + prefix.symbol;
	        };
	      }
	      if (!match[7]) match[7] = "." + d3_scale_linearFormatPrecision(match[8], range);
	      format = match.join("");
	    } else {
	      format = ",." + d3_scale_linearPrecision(range[2]) + "f";
	    }
	    return d3.format(format);
	  }
	  var d3_scale_linearFormatSignificant = {
	    s: 1,
	    g: 1,
	    p: 1,
	    r: 1,
	    e: 1
	  };
	  function d3_scale_linearPrecision(value) {
	    return -Math.floor(Math.log(value) / Math.LN10 + .01);
	  }
	  function d3_scale_linearFormatPrecision(type, range) {
	    var p = d3_scale_linearPrecision(range[2]);
	    return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +(type !== "e") : p - (type === "%") * 2;
	  }
	  d3.scale.log = function() {
	    return d3_scale_log(d3.scale.linear().domain([ 0, 1 ]), 10, true, [ 1, 10 ]);
	  };
	  function d3_scale_log(linear, base, positive, domain) {
	    function log(x) {
	      return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base);
	    }
	    function pow(x) {
	      return positive ? Math.pow(base, x) : -Math.pow(base, -x);
	    }
	    function scale(x) {
	      return linear(log(x));
	    }
	    scale.invert = function(x) {
	      return pow(linear.invert(x));
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      positive = x[0] >= 0;
	      linear.domain((domain = x.map(Number)).map(log));
	      return scale;
	    };
	    scale.base = function(_) {
	      if (!arguments.length) return base;
	      base = +_;
	      linear.domain(domain.map(log));
	      return scale;
	    };
	    scale.nice = function() {
	      var niced = d3_scale_nice(domain.map(log), positive ? Math : d3_scale_logNiceNegative);
	      linear.domain(niced);
	      domain = niced.map(pow);
	      return scale;
	    };
	    scale.ticks = function() {
	      var extent = d3_scaleExtent(domain), ticks = [], u = extent[0], v = extent[1], i = Math.floor(log(u)), j = Math.ceil(log(v)), n = base % 1 ? 2 : base;
	      if (isFinite(j - i)) {
	        if (positive) {
	          for (;i < j; i++) for (var k = 1; k < n; k++) ticks.push(pow(i) * k);
	          ticks.push(pow(i));
	        } else {
	          ticks.push(pow(i));
	          for (;i++ < j; ) for (var k = n - 1; k > 0; k--) ticks.push(pow(i) * k);
	        }
	        for (i = 0; ticks[i] < u; i++) {}
	        for (j = ticks.length; ticks[j - 1] > v; j--) {}
	        ticks = ticks.slice(i, j);
	      }
	      return ticks;
	    };
	    scale.tickFormat = function(n, format) {
	      if (!arguments.length) return d3_scale_logFormat;
	      if (arguments.length < 2) format = d3_scale_logFormat; else if (typeof format !== "function") format = d3.format(format);
	      var k = Math.max(1, base * n / scale.ticks().length);
	      return function(d) {
	        var i = d / pow(Math.round(log(d)));
	        if (i * base < base - .5) i *= base;
	        return i <= k ? format(d) : "";
	      };
	    };
	    scale.copy = function() {
	      return d3_scale_log(linear.copy(), base, positive, domain);
	    };
	    return d3_scale_linearRebind(scale, linear);
	  }
	  var d3_scale_logFormat = d3.format(".0e"), d3_scale_logNiceNegative = {
	    floor: function(x) {
	      return -Math.ceil(-x);
	    },
	    ceil: function(x) {
	      return -Math.floor(-x);
	    }
	  };
	  d3.scale.pow = function() {
	    return d3_scale_pow(d3.scale.linear(), 1, [ 0, 1 ]);
	  };
	  function d3_scale_pow(linear, exponent, domain) {
	    var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);
	    function scale(x) {
	      return linear(powp(x));
	    }
	    scale.invert = function(x) {
	      return powb(linear.invert(x));
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      linear.domain((domain = x.map(Number)).map(powp));
	      return scale;
	    };
	    scale.ticks = function(m) {
	      return d3_scale_linearTicks(domain, m);
	    };
	    scale.tickFormat = function(m, format) {
	      return d3_scale_linearTickFormat(domain, m, format);
	    };
	    scale.nice = function(m) {
	      return scale.domain(d3_scale_linearNice(domain, m));
	    };
	    scale.exponent = function(x) {
	      if (!arguments.length) return exponent;
	      powp = d3_scale_powPow(exponent = x);
	      powb = d3_scale_powPow(1 / exponent);
	      linear.domain(domain.map(powp));
	      return scale;
	    };
	    scale.copy = function() {
	      return d3_scale_pow(linear.copy(), exponent, domain);
	    };
	    return d3_scale_linearRebind(scale, linear);
	  }
	  function d3_scale_powPow(e) {
	    return function(x) {
	      return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
	    };
	  }
	  d3.scale.sqrt = function() {
	    return d3.scale.pow().exponent(.5);
	  };
	  d3.scale.ordinal = function() {
	    return d3_scale_ordinal([], {
	      t: "range",
	      a: [ [] ]
	    });
	  };
	  function d3_scale_ordinal(domain, ranger) {
	    var index, range, rangeBand;
	    function scale(x) {
	      return range[((index.get(x) || (ranger.t === "range" ? index.set(x, domain.push(x)) : NaN)) - 1) % range.length];
	    }
	    function steps(start, step) {
	      return d3.range(domain.length).map(function(i) {
	        return start + step * i;
	      });
	    }
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      domain = [];
	      index = new d3_Map();
	      var i = -1, n = x.length, xi;
	      while (++i < n) if (!index.has(xi = x[i])) index.set(xi, domain.push(xi));
	      return scale[ranger.t].apply(scale, ranger.a);
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      rangeBand = 0;
	      ranger = {
	        t: "range",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangePoints = function(x, padding) {
	      if (arguments.length < 2) padding = 0;
	      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = (start + stop) / 2, 
	      0) : (stop - start) / (domain.length - 1 + padding);
	      range = steps(start + step * padding / 2, step);
	      rangeBand = 0;
	      ranger = {
	        t: "rangePoints",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeRoundPoints = function(x, padding) {
	      if (arguments.length < 2) padding = 0;
	      var start = x[0], stop = x[1], step = domain.length < 2 ? (start = stop = Math.round((start + stop) / 2), 
	      0) : (stop - start) / (domain.length - 1 + padding) | 0;
	      range = steps(start + Math.round(step * padding / 2 + (stop - start - (domain.length - 1 + padding) * step) / 2), step);
	      rangeBand = 0;
	      ranger = {
	        t: "rangeRoundPoints",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeBands = function(x, padding, outerPadding) {
	      if (arguments.length < 2) padding = 0;
	      if (arguments.length < 3) outerPadding = padding;
	      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = (stop - start) / (domain.length - padding + 2 * outerPadding);
	      range = steps(start + step * outerPadding, step);
	      if (reverse) range.reverse();
	      rangeBand = step * (1 - padding);
	      ranger = {
	        t: "rangeBands",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeRoundBands = function(x, padding, outerPadding) {
	      if (arguments.length < 2) padding = 0;
	      if (arguments.length < 3) outerPadding = padding;
	      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding));
	      range = steps(start + Math.round((stop - start - (domain.length - padding) * step) / 2), step);
	      if (reverse) range.reverse();
	      rangeBand = Math.round(step * (1 - padding));
	      ranger = {
	        t: "rangeRoundBands",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeBand = function() {
	      return rangeBand;
	    };
	    scale.rangeExtent = function() {
	      return d3_scaleExtent(ranger.a[0]);
	    };
	    scale.copy = function() {
	      return d3_scale_ordinal(domain, ranger);
	    };
	    return scale.domain(domain);
	  }
	  d3.scale.category10 = function() {
	    return d3.scale.ordinal().range(d3_category10);
	  };
	  d3.scale.category20 = function() {
	    return d3.scale.ordinal().range(d3_category20);
	  };
	  d3.scale.category20b = function() {
	    return d3.scale.ordinal().range(d3_category20b);
	  };
	  d3.scale.category20c = function() {
	    return d3.scale.ordinal().range(d3_category20c);
	  };
	  var d3_category10 = [ 2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175 ].map(d3_rgbString);
	  var d3_category20 = [ 2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725 ].map(d3_rgbString);
	  var d3_category20b = [ 3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654 ].map(d3_rgbString);
	  var d3_category20c = [ 3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081 ].map(d3_rgbString);
	  d3.scale.quantile = function() {
	    return d3_scale_quantile([], []);
	  };
	  function d3_scale_quantile(domain, range) {
	    var thresholds;
	    function rescale() {
	      var k = 0, q = range.length;
	      thresholds = [];
	      while (++k < q) thresholds[k - 1] = d3.quantile(domain, k / q);
	      return scale;
	    }
	    function scale(x) {
	      if (!isNaN(x = +x)) return range[d3.bisect(thresholds, x)];
	    }
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      domain = x.map(d3_number).filter(d3_numeric).sort(d3_ascending);
	      return rescale();
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      return rescale();
	    };
	    scale.quantiles = function() {
	      return thresholds;
	    };
	    scale.invertExtent = function(y) {
	      y = range.indexOf(y);
	      return y < 0 ? [ NaN, NaN ] : [ y > 0 ? thresholds[y - 1] : domain[0], y < thresholds.length ? thresholds[y] : domain[domain.length - 1] ];
	    };
	    scale.copy = function() {
	      return d3_scale_quantile(domain, range);
	    };
	    return rescale();
	  }
	  d3.scale.quantize = function() {
	    return d3_scale_quantize(0, 1, [ 0, 1 ]);
	  };
	  function d3_scale_quantize(x0, x1, range) {
	    var kx, i;
	    function scale(x) {
	      return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
	    }
	    function rescale() {
	      kx = range.length / (x1 - x0);
	      i = range.length - 1;
	      return scale;
	    }
	    scale.domain = function(x) {
	      if (!arguments.length) return [ x0, x1 ];
	      x0 = +x[0];
	      x1 = +x[x.length - 1];
	      return rescale();
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      return rescale();
	    };
	    scale.invertExtent = function(y) {
	      y = range.indexOf(y);
	      y = y < 0 ? NaN : y / kx + x0;
	      return [ y, y + 1 / kx ];
	    };
	    scale.copy = function() {
	      return d3_scale_quantize(x0, x1, range);
	    };
	    return rescale();
	  }
	  d3.scale.threshold = function() {
	    return d3_scale_threshold([ .5 ], [ 0, 1 ]);
	  };
	  function d3_scale_threshold(domain, range) {
	    function scale(x) {
	      if (x <= x) return range[d3.bisect(domain, x)];
	    }
	    scale.domain = function(_) {
	      if (!arguments.length) return domain;
	      domain = _;
	      return scale;
	    };
	    scale.range = function(_) {
	      if (!arguments.length) return range;
	      range = _;
	      return scale;
	    };
	    scale.invertExtent = function(y) {
	      y = range.indexOf(y);
	      return [ domain[y - 1], domain[y] ];
	    };
	    scale.copy = function() {
	      return d3_scale_threshold(domain, range);
	    };
	    return scale;
	  }
	  d3.scale.identity = function() {
	    return d3_scale_identity([ 0, 1 ]);
	  };
	  function d3_scale_identity(domain) {
	    function identity(x) {
	      return +x;
	    }
	    identity.invert = identity;
	    identity.domain = identity.range = function(x) {
	      if (!arguments.length) return domain;
	      domain = x.map(identity);
	      return identity;
	    };
	    identity.ticks = function(m) {
	      return d3_scale_linearTicks(domain, m);
	    };
	    identity.tickFormat = function(m, format) {
	      return d3_scale_linearTickFormat(domain, m, format);
	    };
	    identity.copy = function() {
	      return d3_scale_identity(domain);
	    };
	    return identity;
	  }
	  d3.svg = {};
	  function d3_zero() {
	    return 0;
	  }
	  d3.svg.arc = function() {
	    var innerRadius = d3_svg_arcInnerRadius, outerRadius = d3_svg_arcOuterRadius, cornerRadius = d3_zero, padRadius = d3_svg_arcAuto, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle, padAngle = d3_svg_arcPadAngle;
	    function arc() {
	      var r0 = Math.max(0, +innerRadius.apply(this, arguments)), r1 = Math.max(0, +outerRadius.apply(this, arguments)), a0 = startAngle.apply(this, arguments) - halfπ, a1 = endAngle.apply(this, arguments) - halfπ, da = Math.abs(a1 - a0), cw = a0 > a1 ? 0 : 1;
	      if (r1 < r0) rc = r1, r1 = r0, r0 = rc;
	      if (da >= τε) return circleSegment(r1, cw) + (r0 ? circleSegment(r0, 1 - cw) : "") + "Z";
	      var rc, cr, rp, ap, p0 = 0, p1 = 0, x0, y0, x1, y1, x2, y2, x3, y3, path = [];
	      if (ap = (+padAngle.apply(this, arguments) || 0) / 2) {
	        rp = padRadius === d3_svg_arcAuto ? Math.sqrt(r0 * r0 + r1 * r1) : +padRadius.apply(this, arguments);
	        if (!cw) p1 *= -1;
	        if (r1) p1 = d3_asin(rp / r1 * Math.sin(ap));
	        if (r0) p0 = d3_asin(rp / r0 * Math.sin(ap));
	      }
	      if (r1) {
	        x0 = r1 * Math.cos(a0 + p1);
	        y0 = r1 * Math.sin(a0 + p1);
	        x1 = r1 * Math.cos(a1 - p1);
	        y1 = r1 * Math.sin(a1 - p1);
	        var l1 = Math.abs(a1 - a0 - 2 * p1) <= π ? 0 : 1;
	        if (p1 && d3_svg_arcSweep(x0, y0, x1, y1) === cw ^ l1) {
	          var h1 = (a0 + a1) / 2;
	          x0 = r1 * Math.cos(h1);
	          y0 = r1 * Math.sin(h1);
	          x1 = y1 = null;
	        }
	      } else {
	        x0 = y0 = 0;
	      }
	      if (r0) {
	        x2 = r0 * Math.cos(a1 - p0);
	        y2 = r0 * Math.sin(a1 - p0);
	        x3 = r0 * Math.cos(a0 + p0);
	        y3 = r0 * Math.sin(a0 + p0);
	        var l0 = Math.abs(a0 - a1 + 2 * p0) <= π ? 0 : 1;
	        if (p0 && d3_svg_arcSweep(x2, y2, x3, y3) === 1 - cw ^ l0) {
	          var h0 = (a0 + a1) / 2;
	          x2 = r0 * Math.cos(h0);
	          y2 = r0 * Math.sin(h0);
	          x3 = y3 = null;
	        }
	      } else {
	        x2 = y2 = 0;
	      }
	      if (da > ε && (rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments))) > .001) {
	        cr = r0 < r1 ^ cw ? 0 : 1;
	        var rc1 = rc, rc0 = rc;
	        if (da < π) {
	          var oc = x3 == null ? [ x2, y2 ] : x1 == null ? [ x0, y0 ] : d3_geom_polygonIntersect([ x0, y0 ], [ x3, y3 ], [ x1, y1 ], [ x2, y2 ]), ax = x0 - oc[0], ay = y0 - oc[1], bx = x1 - oc[0], by = y1 - oc[1], kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2), lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
	          rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
	          rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
	        }
	        if (x1 != null) {
	          var t30 = d3_svg_arcCornerTangents(x3 == null ? [ x2, y2 ] : [ x3, y3 ], [ x0, y0 ], r1, rc1, cw), t12 = d3_svg_arcCornerTangents([ x1, y1 ], [ x2, y2 ], r1, rc1, cw);
	          if (rc === rc1) {
	            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 0,", cr, " ", t30[1], "A", r1, ",", r1, " 0 ", 1 - cw ^ d3_svg_arcSweep(t30[1][0], t30[1][1], t12[1][0], t12[1][1]), ",", cw, " ", t12[1], "A", rc1, ",", rc1, " 0 0,", cr, " ", t12[0]);
	          } else {
	            path.push("M", t30[0], "A", rc1, ",", rc1, " 0 1,", cr, " ", t12[0]);
	          }
	        } else {
	          path.push("M", x0, ",", y0);
	        }
	        if (x3 != null) {
	          var t03 = d3_svg_arcCornerTangents([ x0, y0 ], [ x3, y3 ], r0, -rc0, cw), t21 = d3_svg_arcCornerTangents([ x2, y2 ], x1 == null ? [ x0, y0 ] : [ x1, y1 ], r0, -rc0, cw);
	          if (rc === rc0) {
	            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t21[1], "A", r0, ",", r0, " 0 ", cw ^ d3_svg_arcSweep(t21[1][0], t21[1][1], t03[1][0], t03[1][1]), ",", 1 - cw, " ", t03[1], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
	          } else {
	            path.push("L", t21[0], "A", rc0, ",", rc0, " 0 0,", cr, " ", t03[0]);
	          }
	        } else {
	          path.push("L", x2, ",", y2);
	        }
	      } else {
	        path.push("M", x0, ",", y0);
	        if (x1 != null) path.push("A", r1, ",", r1, " 0 ", l1, ",", cw, " ", x1, ",", y1);
	        path.push("L", x2, ",", y2);
	        if (x3 != null) path.push("A", r0, ",", r0, " 0 ", l0, ",", 1 - cw, " ", x3, ",", y3);
	      }
	      path.push("Z");
	      return path.join("");
	    }
	    function circleSegment(r1, cw) {
	      return "M0," + r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + -r1 + "A" + r1 + "," + r1 + " 0 1," + cw + " 0," + r1;
	    }
	    arc.innerRadius = function(v) {
	      if (!arguments.length) return innerRadius;
	      innerRadius = d3_functor(v);
	      return arc;
	    };
	    arc.outerRadius = function(v) {
	      if (!arguments.length) return outerRadius;
	      outerRadius = d3_functor(v);
	      return arc;
	    };
	    arc.cornerRadius = function(v) {
	      if (!arguments.length) return cornerRadius;
	      cornerRadius = d3_functor(v);
	      return arc;
	    };
	    arc.padRadius = function(v) {
	      if (!arguments.length) return padRadius;
	      padRadius = v == d3_svg_arcAuto ? d3_svg_arcAuto : d3_functor(v);
	      return arc;
	    };
	    arc.startAngle = function(v) {
	      if (!arguments.length) return startAngle;
	      startAngle = d3_functor(v);
	      return arc;
	    };
	    arc.endAngle = function(v) {
	      if (!arguments.length) return endAngle;
	      endAngle = d3_functor(v);
	      return arc;
	    };
	    arc.padAngle = function(v) {
	      if (!arguments.length) return padAngle;
	      padAngle = d3_functor(v);
	      return arc;
	    };
	    arc.centroid = function() {
	      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - halfπ;
	      return [ Math.cos(a) * r, Math.sin(a) * r ];
	    };
	    return arc;
	  };
	  var d3_svg_arcAuto = "auto";
	  function d3_svg_arcInnerRadius(d) {
	    return d.innerRadius;
	  }
	  function d3_svg_arcOuterRadius(d) {
	    return d.outerRadius;
	  }
	  function d3_svg_arcStartAngle(d) {
	    return d.startAngle;
	  }
	  function d3_svg_arcEndAngle(d) {
	    return d.endAngle;
	  }
	  function d3_svg_arcPadAngle(d) {
	    return d && d.padAngle;
	  }
	  function d3_svg_arcSweep(x0, y0, x1, y1) {
	    return (x0 - x1) * y0 - (y0 - y1) * x0 > 0 ? 0 : 1;
	  }
	  function d3_svg_arcCornerTangents(p0, p1, r1, rc, cw) {
	    var x01 = p0[0] - p1[0], y01 = p0[1] - p1[1], lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x1 = p0[0] + ox, y1 = p0[1] + oy, x2 = p1[0] + ox, y2 = p1[1] + oy, x3 = (x1 + x2) / 2, y3 = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, d2 = dx * dx + dy * dy, r = r1 - rc, D = x1 * y2 - x2 * y1, d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x3, dy0 = cy0 - y3, dx1 = cx1 - x3, dy1 = cy1 - y3;
	    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
	    return [ [ cx0 - ox, cy0 - oy ], [ cx0 * r1 / r, cy0 * r1 / r ] ];
	  }
	  function d3_svg_line(projection) {
	    var x = d3_geom_pointX, y = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, tension = .7;
	    function line(data) {
	      var segments = [], points = [], i = -1, n = data.length, d, fx = d3_functor(x), fy = d3_functor(y);
	      function segment() {
	        segments.push("M", interpolate(projection(points), tension));
	      }
	      while (++i < n) {
	        if (defined.call(this, d = data[i], i)) {
	          points.push([ +fx.call(this, d, i), +fy.call(this, d, i) ]);
	        } else if (points.length) {
	          segment();
	          points = [];
	        }
	      }
	      if (points.length) segment();
	      return segments.length ? segments.join("") : null;
	    }
	    line.x = function(_) {
	      if (!arguments.length) return x;
	      x = _;
	      return line;
	    };
	    line.y = function(_) {
	      if (!arguments.length) return y;
	      y = _;
	      return line;
	    };
	    line.defined = function(_) {
	      if (!arguments.length) return defined;
	      defined = _;
	      return line;
	    };
	    line.interpolate = function(_) {
	      if (!arguments.length) return interpolateKey;
	      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
	      return line;
	    };
	    line.tension = function(_) {
	      if (!arguments.length) return tension;
	      tension = _;
	      return line;
	    };
	    return line;
	  }
	  d3.svg.line = function() {
	    return d3_svg_line(d3_identity);
	  };
	  var d3_svg_lineInterpolators = d3.map({
	    linear: d3_svg_lineLinear,
	    "linear-closed": d3_svg_lineLinearClosed,
	    step: d3_svg_lineStep,
	    "step-before": d3_svg_lineStepBefore,
	    "step-after": d3_svg_lineStepAfter,
	    basis: d3_svg_lineBasis,
	    "basis-open": d3_svg_lineBasisOpen,
	    "basis-closed": d3_svg_lineBasisClosed,
	    bundle: d3_svg_lineBundle,
	    cardinal: d3_svg_lineCardinal,
	    "cardinal-open": d3_svg_lineCardinalOpen,
	    "cardinal-closed": d3_svg_lineCardinalClosed,
	    monotone: d3_svg_lineMonotone
	  });
	  d3_svg_lineInterpolators.forEach(function(key, value) {
	    value.key = key;
	    value.closed = /-closed$/.test(key);
	  });
	  function d3_svg_lineLinear(points) {
	    return points.length > 1 ? points.join("L") : points + "Z";
	  }
	  function d3_svg_lineLinearClosed(points) {
	    return points.join("L") + "Z";
	  }
	  function d3_svg_lineStep(points) {
	    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
	    while (++i < n) path.push("H", (p[0] + (p = points[i])[0]) / 2, "V", p[1]);
	    if (n > 1) path.push("H", p[0]);
	    return path.join("");
	  }
	  function d3_svg_lineStepBefore(points) {
	    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
	    while (++i < n) path.push("V", (p = points[i])[1], "H", p[0]);
	    return path.join("");
	  }
	  function d3_svg_lineStepAfter(points) {
	    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
	    while (++i < n) path.push("H", (p = points[i])[0], "V", p[1]);
	    return path.join("");
	  }
	  function d3_svg_lineCardinalOpen(points, tension) {
	    return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, -1), d3_svg_lineCardinalTangents(points, tension));
	  }
	  function d3_svg_lineCardinalClosed(points, tension) {
	    return points.length < 3 ? d3_svg_lineLinearClosed(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), 
	    points), d3_svg_lineCardinalTangents([ points[points.length - 2] ].concat(points, [ points[1] ]), tension));
	  }
	  function d3_svg_lineCardinal(points, tension) {
	    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
	  }
	  function d3_svg_lineHermite(points, tangents) {
	    if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
	      return d3_svg_lineLinear(points);
	    }
	    var quad = points.length != tangents.length, path = "", p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
	    if (quad) {
	      path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
	      p0 = points[1];
	      pi = 2;
	    }
	    if (tangents.length > 1) {
	      t = tangents[1];
	      p = points[pi];
	      pi++;
	      path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
	      for (var i = 2; i < tangents.length; i++, pi++) {
	        p = points[pi];
	        t = tangents[i];
	        path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
	      }
	    }
	    if (quad) {
	      var lp = points[pi];
	      path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
	    }
	    return path;
	  }
	  function d3_svg_lineCardinalTangents(points, tension) {
	    var tangents = [], a = (1 - tension) / 2, p0, p1 = points[0], p2 = points[1], i = 1, n = points.length;
	    while (++i < n) {
	      p0 = p1;
	      p1 = p2;
	      p2 = points[i];
	      tangents.push([ a * (p2[0] - p0[0]), a * (p2[1] - p0[1]) ]);
	    }
	    return tangents;
	  }
	  function d3_svg_lineBasis(points) {
	    if (points.length < 3) return d3_svg_lineLinear(points);
	    var i = 1, n = points.length, pi = points[0], x0 = pi[0], y0 = pi[1], px = [ x0, x0, x0, (pi = points[1])[0] ], py = [ y0, y0, y0, pi[1] ], path = [ x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
	    points.push(points[n - 1]);
	    while (++i <= n) {
	      pi = points[i];
	      px.shift();
	      px.push(pi[0]);
	      py.shift();
	      py.push(pi[1]);
	      d3_svg_lineBasisBezier(path, px, py);
	    }
	    points.pop();
	    path.push("L", pi);
	    return path.join("");
	  }
	  function d3_svg_lineBasisOpen(points) {
	    if (points.length < 4) return d3_svg_lineLinear(points);
	    var path = [], i = -1, n = points.length, pi, px = [ 0 ], py = [ 0 ];
	    while (++i < 3) {
	      pi = points[i];
	      px.push(pi[0]);
	      py.push(pi[1]);
	    }
	    path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
	    --i;
	    while (++i < n) {
	      pi = points[i];
	      px.shift();
	      px.push(pi[0]);
	      py.shift();
	      py.push(pi[1]);
	      d3_svg_lineBasisBezier(path, px, py);
	    }
	    return path.join("");
	  }
	  function d3_svg_lineBasisClosed(points) {
	    var path, i = -1, n = points.length, m = n + 4, pi, px = [], py = [];
	    while (++i < 4) {
	      pi = points[i % n];
	      px.push(pi[0]);
	      py.push(pi[1]);
	    }
	    path = [ d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
	    --i;
	    while (++i < m) {
	      pi = points[i % n];
	      px.shift();
	      px.push(pi[0]);
	      py.shift();
	      py.push(pi[1]);
	      d3_svg_lineBasisBezier(path, px, py);
	    }
	    return path.join("");
	  }
	  function d3_svg_lineBundle(points, tension) {
	    var n = points.length - 1;
	    if (n) {
	      var x0 = points[0][0], y0 = points[0][1], dx = points[n][0] - x0, dy = points[n][1] - y0, i = -1, p, t;
	      while (++i <= n) {
	        p = points[i];
	        t = i / n;
	        p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
	        p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
	      }
	    }
	    return d3_svg_lineBasis(points);
	  }
	  function d3_svg_lineDot4(a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
	  }
	  var d3_svg_lineBasisBezier1 = [ 0, 2 / 3, 1 / 3, 0 ], d3_svg_lineBasisBezier2 = [ 0, 1 / 3, 2 / 3, 0 ], d3_svg_lineBasisBezier3 = [ 0, 1 / 6, 2 / 3, 1 / 6 ];
	  function d3_svg_lineBasisBezier(path, x, y) {
	    path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
	  }
	  function d3_svg_lineSlope(p0, p1) {
	    return (p1[1] - p0[1]) / (p1[0] - p0[0]);
	  }
	  function d3_svg_lineFiniteDifferences(points) {
	    var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = d3_svg_lineSlope(p0, p1);
	    while (++i < j) {
	      m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
	    }
	    m[i] = d;
	    return m;
	  }
	  function d3_svg_lineMonotoneTangents(points) {
	    var tangents = [], d, a, b, s, m = d3_svg_lineFiniteDifferences(points), i = -1, j = points.length - 1;
	    while (++i < j) {
	      d = d3_svg_lineSlope(points[i], points[i + 1]);
	      if (abs(d) < ε) {
	        m[i] = m[i + 1] = 0;
	      } else {
	        a = m[i] / d;
	        b = m[i + 1] / d;
	        s = a * a + b * b;
	        if (s > 9) {
	          s = d * 3 / Math.sqrt(s);
	          m[i] = s * a;
	          m[i + 1] = s * b;
	        }
	      }
	    }
	    i = -1;
	    while (++i <= j) {
	      s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
	      tangents.push([ s || 0, m[i] * s || 0 ]);
	    }
	    return tangents;
	  }
	  function d3_svg_lineMonotone(points) {
	    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
	  }
	  d3.svg.line.radial = function() {
	    var line = d3_svg_line(d3_svg_lineRadial);
	    line.radius = line.x, delete line.x;
	    line.angle = line.y, delete line.y;
	    return line;
	  };
	  function d3_svg_lineRadial(points) {
	    var point, i = -1, n = points.length, r, a;
	    while (++i < n) {
	      point = points[i];
	      r = point[0];
	      a = point[1] - halfπ;
	      point[0] = r * Math.cos(a);
	      point[1] = r * Math.sin(a);
	    }
	    return points;
	  }
	  function d3_svg_area(projection) {
	    var x0 = d3_geom_pointX, x1 = d3_geom_pointX, y0 = 0, y1 = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, interpolateReverse = interpolate, L = "L", tension = .7;
	    function area(data) {
	      var segments = [], points0 = [], points1 = [], i = -1, n = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function() {
	        return x;
	      } : d3_functor(x1), fy1 = y0 === y1 ? function() {
	        return y;
	      } : d3_functor(y1), x, y;
	      function segment() {
	        segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
	      }
	      while (++i < n) {
	        if (defined.call(this, d = data[i], i)) {
	          points0.push([ x = +fx0.call(this, d, i), y = +fy0.call(this, d, i) ]);
	          points1.push([ +fx1.call(this, d, i), +fy1.call(this, d, i) ]);
	        } else if (points0.length) {
	          segment();
	          points0 = [];
	          points1 = [];
	        }
	      }
	      if (points0.length) segment();
	      return segments.length ? segments.join("") : null;
	    }
	    area.x = function(_) {
	      if (!arguments.length) return x1;
	      x0 = x1 = _;
	      return area;
	    };
	    area.x0 = function(_) {
	      if (!arguments.length) return x0;
	      x0 = _;
	      return area;
	    };
	    area.x1 = function(_) {
	      if (!arguments.length) return x1;
	      x1 = _;
	      return area;
	    };
	    area.y = function(_) {
	      if (!arguments.length) return y1;
	      y0 = y1 = _;
	      return area;
	    };
	    area.y0 = function(_) {
	      if (!arguments.length) return y0;
	      y0 = _;
	      return area;
	    };
	    area.y1 = function(_) {
	      if (!arguments.length) return y1;
	      y1 = _;
	      return area;
	    };
	    area.defined = function(_) {
	      if (!arguments.length) return defined;
	      defined = _;
	      return area;
	    };
	    area.interpolate = function(_) {
	      if (!arguments.length) return interpolateKey;
	      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
	      interpolateReverse = interpolate.reverse || interpolate;
	      L = interpolate.closed ? "M" : "L";
	      return area;
	    };
	    area.tension = function(_) {
	      if (!arguments.length) return tension;
	      tension = _;
	      return area;
	    };
	    return area;
	  }
	  d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
	  d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
	  d3.svg.area = function() {
	    return d3_svg_area(d3_identity);
	  };
	  d3.svg.area.radial = function() {
	    var area = d3_svg_area(d3_svg_lineRadial);
	    area.radius = area.x, delete area.x;
	    area.innerRadius = area.x0, delete area.x0;
	    area.outerRadius = area.x1, delete area.x1;
	    area.angle = area.y, delete area.y;
	    area.startAngle = area.y0, delete area.y0;
	    area.endAngle = area.y1, delete area.y1;
	    return area;
	  };
	  d3.svg.chord = function() {
	    var source = d3_source, target = d3_target, radius = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
	    function chord(d, i) {
	      var s = subgroup(this, source, d, i), t = subgroup(this, target, d, i);
	      return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
	    }
	    function subgroup(self, f, d, i) {
	      var subgroup = f.call(self, d, i), r = radius.call(self, subgroup, i), a0 = startAngle.call(self, subgroup, i) - halfπ, a1 = endAngle.call(self, subgroup, i) - halfπ;
	      return {
	        r: r,
	        a0: a0,
	        a1: a1,
	        p0: [ r * Math.cos(a0), r * Math.sin(a0) ],
	        p1: [ r * Math.cos(a1), r * Math.sin(a1) ]
	      };
	    }
	    function equals(a, b) {
	      return a.a0 == b.a0 && a.a1 == b.a1;
	    }
	    function arc(r, p, a) {
	      return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
	    }
	    function curve(r0, p0, r1, p1) {
	      return "Q 0,0 " + p1;
	    }
	    chord.radius = function(v) {
	      if (!arguments.length) return radius;
	      radius = d3_functor(v);
	      return chord;
	    };
	    chord.source = function(v) {
	      if (!arguments.length) return source;
	      source = d3_functor(v);
	      return chord;
	    };
	    chord.target = function(v) {
	      if (!arguments.length) return target;
	      target = d3_functor(v);
	      return chord;
	    };
	    chord.startAngle = function(v) {
	      if (!arguments.length) return startAngle;
	      startAngle = d3_functor(v);
	      return chord;
	    };
	    chord.endAngle = function(v) {
	      if (!arguments.length) return endAngle;
	      endAngle = d3_functor(v);
	      return chord;
	    };
	    return chord;
	  };
	  function d3_svg_chordRadius(d) {
	    return d.radius;
	  }
	  d3.svg.diagonal = function() {
	    var source = d3_source, target = d3_target, projection = d3_svg_diagonalProjection;
	    function diagonal(d, i) {
	      var p0 = source.call(this, d, i), p3 = target.call(this, d, i), m = (p0.y + p3.y) / 2, p = [ p0, {
	        x: p0.x,
	        y: m
	      }, {
	        x: p3.x,
	        y: m
	      }, p3 ];
	      p = p.map(projection);
	      return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
	    }
	    diagonal.source = function(x) {
	      if (!arguments.length) return source;
	      source = d3_functor(x);
	      return diagonal;
	    };
	    diagonal.target = function(x) {
	      if (!arguments.length) return target;
	      target = d3_functor(x);
	      return diagonal;
	    };
	    diagonal.projection = function(x) {
	      if (!arguments.length) return projection;
	      projection = x;
	      return diagonal;
	    };
	    return diagonal;
	  };
	  function d3_svg_diagonalProjection(d) {
	    return [ d.x, d.y ];
	  }
	  d3.svg.diagonal.radial = function() {
	    var diagonal = d3.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;
	    diagonal.projection = function(x) {
	      return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
	    };
	    return diagonal;
	  };
	  function d3_svg_diagonalRadialProjection(projection) {
	    return function() {
	      var d = projection.apply(this, arguments), r = d[0], a = d[1] - halfπ;
	      return [ r * Math.cos(a), r * Math.sin(a) ];
	    };
	  }
	  d3.svg.symbol = function() {
	    var type = d3_svg_symbolType, size = d3_svg_symbolSize;
	    function symbol(d, i) {
	      return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
	    }
	    symbol.type = function(x) {
	      if (!arguments.length) return type;
	      type = d3_functor(x);
	      return symbol;
	    };
	    symbol.size = function(x) {
	      if (!arguments.length) return size;
	      size = d3_functor(x);
	      return symbol;
	    };
	    return symbol;
	  };
	  function d3_svg_symbolSize() {
	    return 64;
	  }
	  function d3_svg_symbolType() {
	    return "circle";
	  }
	  function d3_svg_symbolCircle(size) {
	    var r = Math.sqrt(size / π);
	    return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
	  }
	  var d3_svg_symbols = d3.map({
	    circle: d3_svg_symbolCircle,
	    cross: function(size) {
	      var r = Math.sqrt(size / 5) / 2;
	      return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
	    },
	    diamond: function(size) {
	      var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)), rx = ry * d3_svg_symbolTan30;
	      return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
	    },
	    square: function(size) {
	      var r = Math.sqrt(size) / 2;
	      return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
	    },
	    "triangle-down": function(size) {
	      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
	      return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
	    },
	    "triangle-up": function(size) {
	      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
	      return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
	    }
	  });
	  d3.svg.symbolTypes = d3_svg_symbols.keys();
	  var d3_svg_symbolSqrt3 = Math.sqrt(3), d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
	  d3_selectionPrototype.transition = function(name) {
	    var id = d3_transitionInheritId || ++d3_transitionId, ns = d3_transitionNamespace(name), subgroups = [], subgroup, node, transition = d3_transitionInherit || {
	      time: Date.now(),
	      ease: d3_ease_cubicInOut,
	      delay: 0,
	      duration: 250
	    };
	    for (var j = -1, m = this.length; ++j < m; ) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) d3_transitionNode(node, i, ns, id, transition);
	        subgroup.push(node);
	      }
	    }
	    return d3_transition(subgroups, ns, id);
	  };
	  d3_selectionPrototype.interrupt = function(name) {
	    return this.each(name == null ? d3_selection_interrupt : d3_selection_interruptNS(d3_transitionNamespace(name)));
	  };
	  var d3_selection_interrupt = d3_selection_interruptNS(d3_transitionNamespace());
	  function d3_selection_interruptNS(ns) {
	    return function() {
	      var lock, activeId, active;
	      if ((lock = this[ns]) && (active = lock[activeId = lock.active])) {
	        active.timer.c = null;
	        active.timer.t = NaN;
	        if (--lock.count) delete lock[activeId]; else delete this[ns];
	        lock.active += .5;
	        active.event && active.event.interrupt.call(this, this.__data__, active.index);
	      }
	    };
	  }
	  function d3_transition(groups, ns, id) {
	    d3_subclass(groups, d3_transitionPrototype);
	    groups.namespace = ns;
	    groups.id = id;
	    return groups;
	  }
	  var d3_transitionPrototype = [], d3_transitionId = 0, d3_transitionInheritId, d3_transitionInherit;
	  d3_transitionPrototype.call = d3_selectionPrototype.call;
	  d3_transitionPrototype.empty = d3_selectionPrototype.empty;
	  d3_transitionPrototype.node = d3_selectionPrototype.node;
	  d3_transitionPrototype.size = d3_selectionPrototype.size;
	  d3.transition = function(selection, name) {
	    return selection && selection.transition ? d3_transitionInheritId ? selection.transition(name) : selection : d3.selection().transition(selection);
	  };
	  d3.transition.prototype = d3_transitionPrototype;
	  d3_transitionPrototype.select = function(selector) {
	    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnode, node;
	    selector = d3_selection_selector(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
	          if ("__data__" in node) subnode.__data__ = node.__data__;
	          d3_transitionNode(subnode, i, ns, id, node[ns][id]);
	          subgroup.push(subnode);
	        } else {
	          subgroup.push(null);
	        }
	      }
	    }
	    return d3_transition(subgroups, ns, id);
	  };
	  d3_transitionPrototype.selectAll = function(selector) {
	    var id = this.id, ns = this.namespace, subgroups = [], subgroup, subnodes, node, subnode, transition;
	    selector = d3_selection_selectorAll(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          transition = node[ns][id];
	          subnodes = selector.call(node, node.__data__, i, j);
	          subgroups.push(subgroup = []);
	          for (var k = -1, o = subnodes.length; ++k < o; ) {
	            if (subnode = subnodes[k]) d3_transitionNode(subnode, k, ns, id, transition);
	            subgroup.push(subnode);
	          }
	        }
	      }
	    }
	    return d3_transition(subgroups, ns, id);
	  };
	  d3_transitionPrototype.filter = function(filter) {
	    var subgroups = [], subgroup, group, node;
	    if (typeof filter !== "function") filter = d3_selection_filter(filter);
	    for (var j = 0, m = this.length; j < m; j++) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
	        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
	          subgroup.push(node);
	        }
	      }
	    }
	    return d3_transition(subgroups, this.namespace, this.id);
	  };
	  d3_transitionPrototype.tween = function(name, tween) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 2) return this.node()[ns][id].tween.get(name);
	    return d3_selection_each(this, tween == null ? function(node) {
	      node[ns][id].tween.remove(name);
	    } : function(node) {
	      node[ns][id].tween.set(name, tween);
	    });
	  };
	  function d3_transition_tween(groups, name, value, tween) {
	    var id = groups.id, ns = groups.namespace;
	    return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
	      node[ns][id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
	    } : (value = tween(value), function(node) {
	      node[ns][id].tween.set(name, value);
	    }));
	  }
	  d3_transitionPrototype.attr = function(nameNS, value) {
	    if (arguments.length < 2) {
	      for (value in nameNS) this.attr(value, nameNS[value]);
	      return this;
	    }
	    var interpolate = nameNS == "transform" ? d3_interpolateTransform : d3_interpolate, name = d3.ns.qualify(nameNS);
	    function attrNull() {
	      this.removeAttribute(name);
	    }
	    function attrNullNS() {
	      this.removeAttributeNS(name.space, name.local);
	    }
	    function attrTween(b) {
	      return b == null ? attrNull : (b += "", function() {
	        var a = this.getAttribute(name), i;
	        return a !== b && (i = interpolate(a, b), function(t) {
	          this.setAttribute(name, i(t));
	        });
	      });
	    }
	    function attrTweenNS(b) {
	      return b == null ? attrNullNS : (b += "", function() {
	        var a = this.getAttributeNS(name.space, name.local), i;
	        return a !== b && (i = interpolate(a, b), function(t) {
	          this.setAttributeNS(name.space, name.local, i(t));
	        });
	      });
	    }
	    return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS : attrTween);
	  };
	  d3_transitionPrototype.attrTween = function(nameNS, tween) {
	    var name = d3.ns.qualify(nameNS);
	    function attrTween(d, i) {
	      var f = tween.call(this, d, i, this.getAttribute(name));
	      return f && function(t) {
	        this.setAttribute(name, f(t));
	      };
	    }
	    function attrTweenNS(d, i) {
	      var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
	      return f && function(t) {
	        this.setAttributeNS(name.space, name.local, f(t));
	      };
	    }
	    return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
	  };
	  d3_transitionPrototype.style = function(name, value, priority) {
	    var n = arguments.length;
	    if (n < 3) {
	      if (typeof name !== "string") {
	        if (n < 2) value = "";
	        for (priority in name) this.style(priority, name[priority], value);
	        return this;
	      }
	      priority = "";
	    }
	    function styleNull() {
	      this.style.removeProperty(name);
	    }
	    function styleString(b) {
	      return b == null ? styleNull : (b += "", function() {
	        var a = d3_window(this).getComputedStyle(this, null).getPropertyValue(name), i;
	        return a !== b && (i = d3_interpolate(a, b), function(t) {
	          this.style.setProperty(name, i(t), priority);
	        });
	      });
	    }
	    return d3_transition_tween(this, "style." + name, value, styleString);
	  };
	  d3_transitionPrototype.styleTween = function(name, tween, priority) {
	    if (arguments.length < 3) priority = "";
	    function styleTween(d, i) {
	      var f = tween.call(this, d, i, d3_window(this).getComputedStyle(this, null).getPropertyValue(name));
	      return f && function(t) {
	        this.style.setProperty(name, f(t), priority);
	      };
	    }
	    return this.tween("style." + name, styleTween);
	  };
	  d3_transitionPrototype.text = function(value) {
	    return d3_transition_tween(this, "text", value, d3_transition_text);
	  };
	  function d3_transition_text(b) {
	    if (b == null) b = "";
	    return function() {
	      this.textContent = b;
	    };
	  }
	  d3_transitionPrototype.remove = function() {
	    var ns = this.namespace;
	    return this.each("end.transition", function() {
	      var p;
	      if (this[ns].count < 2 && (p = this.parentNode)) p.removeChild(this);
	    });
	  };
	  d3_transitionPrototype.ease = function(value) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 1) return this.node()[ns][id].ease;
	    if (typeof value !== "function") value = d3.ease.apply(d3, arguments);
	    return d3_selection_each(this, function(node) {
	      node[ns][id].ease = value;
	    });
	  };
	  d3_transitionPrototype.delay = function(value) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 1) return this.node()[ns][id].delay;
	    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
	      node[ns][id].delay = +value.call(node, node.__data__, i, j);
	    } : (value = +value, function(node) {
	      node[ns][id].delay = value;
	    }));
	  };
	  d3_transitionPrototype.duration = function(value) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 1) return this.node()[ns][id].duration;
	    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
	      node[ns][id].duration = Math.max(1, value.call(node, node.__data__, i, j));
	    } : (value = Math.max(1, value), function(node) {
	      node[ns][id].duration = value;
	    }));
	  };
	  d3_transitionPrototype.each = function(type, listener) {
	    var id = this.id, ns = this.namespace;
	    if (arguments.length < 2) {
	      var inherit = d3_transitionInherit, inheritId = d3_transitionInheritId;
	      try {
	        d3_transitionInheritId = id;
	        d3_selection_each(this, function(node, i, j) {
	          d3_transitionInherit = node[ns][id];
	          type.call(node, node.__data__, i, j);
	        });
	      } finally {
	        d3_transitionInherit = inherit;
	        d3_transitionInheritId = inheritId;
	      }
	    } else {
	      d3_selection_each(this, function(node) {
	        var transition = node[ns][id];
	        (transition.event || (transition.event = d3.dispatch("start", "end", "interrupt"))).on(type, listener);
	      });
	    }
	    return this;
	  };
	  d3_transitionPrototype.transition = function() {
	    var id0 = this.id, id1 = ++d3_transitionId, ns = this.namespace, subgroups = [], subgroup, group, node, transition;
	    for (var j = 0, m = this.length; j < m; j++) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
	        if (node = group[i]) {
	          transition = node[ns][id0];
	          d3_transitionNode(node, i, ns, id1, {
	            time: transition.time,
	            ease: transition.ease,
	            delay: transition.delay + transition.duration,
	            duration: transition.duration
	          });
	        }
	        subgroup.push(node);
	      }
	    }
	    return d3_transition(subgroups, ns, id1);
	  };
	  function d3_transitionNamespace(name) {
	    return name == null ? "__transition__" : "__transition_" + name + "__";
	  }
	  function d3_transitionNode(node, i, ns, id, inherit) {
	    var lock = node[ns] || (node[ns] = {
	      active: 0,
	      count: 0
	    }), transition = lock[id], time, timer, duration, ease, tweens;
	    function schedule(elapsed) {
	      var delay = transition.delay;
	      timer.t = delay + time;
	      if (delay <= elapsed) return start(elapsed - delay);
	      timer.c = start;
	    }
	    function start(elapsed) {
	      var activeId = lock.active, active = lock[activeId];
	      if (active) {
	        active.timer.c = null;
	        active.timer.t = NaN;
	        --lock.count;
	        delete lock[activeId];
	        active.event && active.event.interrupt.call(node, node.__data__, active.index);
	      }
	      for (var cancelId in lock) {
	        if (+cancelId < id) {
	          var cancel = lock[cancelId];
	          cancel.timer.c = null;
	          cancel.timer.t = NaN;
	          --lock.count;
	          delete lock[cancelId];
	        }
	      }
	      timer.c = tick;
	      d3_timer(function() {
	        if (timer.c && tick(elapsed || 1)) {
	          timer.c = null;
	          timer.t = NaN;
	        }
	        return 1;
	      }, 0, time);
	      lock.active = id;
	      transition.event && transition.event.start.call(node, node.__data__, i);
	      tweens = [];
	      transition.tween.forEach(function(key, value) {
	        if (value = value.call(node, node.__data__, i)) {
	          tweens.push(value);
	        }
	      });
	      ease = transition.ease;
	      duration = transition.duration;
	    }
	    function tick(elapsed) {
	      var t = elapsed / duration, e = ease(t), n = tweens.length;
	      while (n > 0) {
	        tweens[--n].call(node, e);
	      }
	      if (t >= 1) {
	        transition.event && transition.event.end.call(node, node.__data__, i);
	        if (--lock.count) delete lock[id]; else delete node[ns];
	        return 1;
	      }
	    }
	    if (!transition) {
	      time = inherit.time;
	      timer = d3_timer(schedule, 0, time);
	      transition = lock[id] = {
	        tween: new d3_Map(),
	        time: time,
	        timer: timer,
	        delay: inherit.delay,
	        duration: inherit.duration,
	        ease: inherit.ease,
	        index: i
	      };
	      inherit = null;
	      ++lock.count;
	    }
	  }
	  d3.svg.axis = function() {
	    var scale = d3.scale.linear(), orient = d3_svg_axisDefaultOrient, innerTickSize = 6, outerTickSize = 6, tickPadding = 3, tickArguments_ = [ 10 ], tickValues = null, tickFormat_;
	    function axis(g) {
	      g.each(function() {
	        var g = d3.select(this);
	        var scale0 = this.__chart__ || scale, scale1 = this.__chart__ = scale.copy();
	        var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues, tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity : tickFormat_, tick = g.selectAll(".tick").data(ticks, scale1), tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ε), tickExit = d3.transition(tick.exit()).style("opacity", ε).remove(), tickUpdate = d3.transition(tick.order()).style("opacity", 1), tickSpacing = Math.max(innerTickSize, 0) + tickPadding, tickTransform;
	        var range = d3_scaleRange(scale1), path = g.selectAll(".domain").data([ 0 ]), pathUpdate = (path.enter().append("path").attr("class", "domain"), 
	        d3.transition(path));
	        tickEnter.append("line");
	        tickEnter.append("text");
	        var lineEnter = tickEnter.select("line"), lineUpdate = tickUpdate.select("line"), text = tick.select("text").text(tickFormat), textEnter = tickEnter.select("text"), textUpdate = tickUpdate.select("text"), sign = orient === "top" || orient === "left" ? -1 : 1, x1, x2, y1, y2;
	        if (orient === "bottom" || orient === "top") {
	          tickTransform = d3_svg_axisX, x1 = "x", y1 = "y", x2 = "x2", y2 = "y2";
	          text.attr("dy", sign < 0 ? "0em" : ".71em").style("text-anchor", "middle");
	          pathUpdate.attr("d", "M" + range[0] + "," + sign * outerTickSize + "V0H" + range[1] + "V" + sign * outerTickSize);
	        } else {
	          tickTransform = d3_svg_axisY, x1 = "y", y1 = "x", x2 = "y2", y2 = "x2";
	          text.attr("dy", ".32em").style("text-anchor", sign < 0 ? "end" : "start");
	          pathUpdate.attr("d", "M" + sign * outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + sign * outerTickSize);
	        }
	        lineEnter.attr(y2, sign * innerTickSize);
	        textEnter.attr(y1, sign * tickSpacing);
	        lineUpdate.attr(x2, 0).attr(y2, sign * innerTickSize);
	        textUpdate.attr(x1, 0).attr(y1, sign * tickSpacing);
	        if (scale1.rangeBand) {
	          var x = scale1, dx = x.rangeBand() / 2;
	          scale0 = scale1 = function(d) {
	            return x(d) + dx;
	          };
	        } else if (scale0.rangeBand) {
	          scale0 = scale1;
	        } else {
	          tickExit.call(tickTransform, scale1, scale0);
	        }
	        tickEnter.call(tickTransform, scale0, scale1);
	        tickUpdate.call(tickTransform, scale1, scale1);
	      });
	    }
	    axis.scale = function(x) {
	      if (!arguments.length) return scale;
	      scale = x;
	      return axis;
	    };
	    axis.orient = function(x) {
	      if (!arguments.length) return orient;
	      orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
	      return axis;
	    };
	    axis.ticks = function() {
	      if (!arguments.length) return tickArguments_;
	      tickArguments_ = d3_array(arguments);
	      return axis;
	    };
	    axis.tickValues = function(x) {
	      if (!arguments.length) return tickValues;
	      tickValues = x;
	      return axis;
	    };
	    axis.tickFormat = function(x) {
	      if (!arguments.length) return tickFormat_;
	      tickFormat_ = x;
	      return axis;
	    };
	    axis.tickSize = function(x) {
	      var n = arguments.length;
	      if (!n) return innerTickSize;
	      innerTickSize = +x;
	      outerTickSize = +arguments[n - 1];
	      return axis;
	    };
	    axis.innerTickSize = function(x) {
	      if (!arguments.length) return innerTickSize;
	      innerTickSize = +x;
	      return axis;
	    };
	    axis.outerTickSize = function(x) {
	      if (!arguments.length) return outerTickSize;
	      outerTickSize = +x;
	      return axis;
	    };
	    axis.tickPadding = function(x) {
	      if (!arguments.length) return tickPadding;
	      tickPadding = +x;
	      return axis;
	    };
	    axis.tickSubdivide = function() {
	      return arguments.length && axis;
	    };
	    return axis;
	  };
	  var d3_svg_axisDefaultOrient = "bottom", d3_svg_axisOrients = {
	    top: 1,
	    right: 1,
	    bottom: 1,
	    left: 1
	  };
	  function d3_svg_axisX(selection, x0, x1) {
	    selection.attr("transform", function(d) {
	      var v0 = x0(d);
	      return "translate(" + (isFinite(v0) ? v0 : x1(d)) + ",0)";
	    });
	  }
	  function d3_svg_axisY(selection, y0, y1) {
	    selection.attr("transform", function(d) {
	      var v0 = y0(d);
	      return "translate(0," + (isFinite(v0) ? v0 : y1(d)) + ")";
	    });
	  }
	  d3.svg.brush = function() {
	    var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), x = null, y = null, xExtent = [ 0, 0 ], yExtent = [ 0, 0 ], xExtentDomain, yExtentDomain, xClamp = true, yClamp = true, resizes = d3_svg_brushResizes[0];
	    function brush(g) {
	      g.each(function() {
	        var g = d3.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
	        var background = g.selectAll(".background").data([ 0 ]);
	        background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
	        g.selectAll(".extent").data([ 0 ]).enter().append("rect").attr("class", "extent").style("cursor", "move");
	        var resize = g.selectAll(".resize").data(resizes, d3_identity);
	        resize.exit().remove();
	        resize.enter().append("g").attr("class", function(d) {
	          return "resize " + d;
	        }).style("cursor", function(d) {
	          return d3_svg_brushCursor[d];
	        }).append("rect").attr("x", function(d) {
	          return /[ew]$/.test(d) ? -3 : null;
	        }).attr("y", function(d) {
	          return /^[ns]/.test(d) ? -3 : null;
	        }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
	        resize.style("display", brush.empty() ? "none" : null);
	        var gUpdate = d3.transition(g), backgroundUpdate = d3.transition(background), range;
	        if (x) {
	          range = d3_scaleRange(x);
	          backgroundUpdate.attr("x", range[0]).attr("width", range[1] - range[0]);
	          redrawX(gUpdate);
	        }
	        if (y) {
	          range = d3_scaleRange(y);
	          backgroundUpdate.attr("y", range[0]).attr("height", range[1] - range[0]);
	          redrawY(gUpdate);
	        }
	        redraw(gUpdate);
	      });
	    }
	    brush.event = function(g) {
	      g.each(function() {
	        var event_ = event.of(this, arguments), extent1 = {
	          x: xExtent,
	          y: yExtent,
	          i: xExtentDomain,
	          j: yExtentDomain
	        }, extent0 = this.__chart__ || extent1;
	        this.__chart__ = extent1;
	        if (d3_transitionInheritId) {
	          d3.select(this).transition().each("start.brush", function() {
	            xExtentDomain = extent0.i;
	            yExtentDomain = extent0.j;
	            xExtent = extent0.x;
	            yExtent = extent0.y;
	            event_({
	              type: "brushstart"
	            });
	          }).tween("brush:brush", function() {
	            var xi = d3_interpolateArray(xExtent, extent1.x), yi = d3_interpolateArray(yExtent, extent1.y);
	            xExtentDomain = yExtentDomain = null;
	            return function(t) {
	              xExtent = extent1.x = xi(t);
	              yExtent = extent1.y = yi(t);
	              event_({
	                type: "brush",
	                mode: "resize"
	              });
	            };
	          }).each("end.brush", function() {
	            xExtentDomain = extent1.i;
	            yExtentDomain = extent1.j;
	            event_({
	              type: "brush",
	              mode: "resize"
	            });
	            event_({
	              type: "brushend"
	            });
	          });
	        } else {
	          event_({
	            type: "brushstart"
	          });
	          event_({
	            type: "brush",
	            mode: "resize"
	          });
	          event_({
	            type: "brushend"
	          });
	        }
	      });
	    };
	    function redraw(g) {
	      g.selectAll(".resize").attr("transform", function(d) {
	        return "translate(" + xExtent[+/e$/.test(d)] + "," + yExtent[+/^s/.test(d)] + ")";
	      });
	    }
	    function redrawX(g) {
	      g.select(".extent").attr("x", xExtent[0]);
	      g.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0]);
	    }
	    function redrawY(g) {
	      g.select(".extent").attr("y", yExtent[0]);
	      g.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0]);
	    }
	    function brushstart() {
	      var target = this, eventTarget = d3.select(d3.event.target), event_ = event.of(target, arguments), g = d3.select(target), resizing = eventTarget.datum(), resizingX = !/^(n|s)$/.test(resizing) && x, resizingY = !/^(e|w)$/.test(resizing) && y, dragging = eventTarget.classed("extent"), dragRestore = d3_event_dragSuppress(target), center, origin = d3.mouse(target), offset;
	      var w = d3.select(d3_window(target)).on("keydown.brush", keydown).on("keyup.brush", keyup);
	      if (d3.event.changedTouches) {
	        w.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
	      } else {
	        w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
	      }
	      g.interrupt().selectAll("*").interrupt();
	      if (dragging) {
	        origin[0] = xExtent[0] - origin[0];
	        origin[1] = yExtent[0] - origin[1];
	      } else if (resizing) {
	        var ex = +/w$/.test(resizing), ey = +/^n/.test(resizing);
	        offset = [ xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1] ];
	        origin[0] = xExtent[ex];
	        origin[1] = yExtent[ey];
	      } else if (d3.event.altKey) center = origin.slice();
	      g.style("pointer-events", "none").selectAll(".resize").style("display", null);
	      d3.select("body").style("cursor", eventTarget.style("cursor"));
	      event_({
	        type: "brushstart"
	      });
	      brushmove();
	      function keydown() {
	        if (d3.event.keyCode == 32) {
	          if (!dragging) {
	            center = null;
	            origin[0] -= xExtent[1];
	            origin[1] -= yExtent[1];
	            dragging = 2;
	          }
	          d3_eventPreventDefault();
	        }
	      }
	      function keyup() {
	        if (d3.event.keyCode == 32 && dragging == 2) {
	          origin[0] += xExtent[1];
	          origin[1] += yExtent[1];
	          dragging = 0;
	          d3_eventPreventDefault();
	        }
	      }
	      function brushmove() {
	        var point = d3.mouse(target), moved = false;
	        if (offset) {
	          point[0] += offset[0];
	          point[1] += offset[1];
	        }
	        if (!dragging) {
	          if (d3.event.altKey) {
	            if (!center) center = [ (xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2 ];
	            origin[0] = xExtent[+(point[0] < center[0])];
	            origin[1] = yExtent[+(point[1] < center[1])];
	          } else center = null;
	        }
	        if (resizingX && move1(point, x, 0)) {
	          redrawX(g);
	          moved = true;
	        }
	        if (resizingY && move1(point, y, 1)) {
	          redrawY(g);
	          moved = true;
	        }
	        if (moved) {
	          redraw(g);
	          event_({
	            type: "brush",
	            mode: dragging ? "move" : "resize"
	          });
	        }
	      }
	      function move1(point, scale, i) {
	        var range = d3_scaleRange(scale), r0 = range[0], r1 = range[1], position = origin[i], extent = i ? yExtent : xExtent, size = extent[1] - extent[0], min, max;
	        if (dragging) {
	          r0 -= position;
	          r1 -= size + position;
	        }
	        min = (i ? yClamp : xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];
	        if (dragging) {
	          max = (min += position) + size;
	        } else {
	          if (center) position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
	          if (position < min) {
	            max = min;
	            min = position;
	          } else {
	            max = position;
	          }
	        }
	        if (extent[0] != min || extent[1] != max) {
	          if (i) yExtentDomain = null; else xExtentDomain = null;
	          extent[0] = min;
	          extent[1] = max;
	          return true;
	        }
	      }
	      function brushend() {
	        brushmove();
	        g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
	        d3.select("body").style("cursor", null);
	        w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
	        dragRestore();
	        event_({
	          type: "brushend"
	        });
	      }
	    }
	    brush.x = function(z) {
	      if (!arguments.length) return x;
	      x = z;
	      resizes = d3_svg_brushResizes[!x << 1 | !y];
	      return brush;
	    };
	    brush.y = function(z) {
	      if (!arguments.length) return y;
	      y = z;
	      resizes = d3_svg_brushResizes[!x << 1 | !y];
	      return brush;
	    };
	    brush.clamp = function(z) {
	      if (!arguments.length) return x && y ? [ xClamp, yClamp ] : x ? xClamp : y ? yClamp : null;
	      if (x && y) xClamp = !!z[0], yClamp = !!z[1]; else if (x) xClamp = !!z; else if (y) yClamp = !!z;
	      return brush;
	    };
	    brush.extent = function(z) {
	      var x0, x1, y0, y1, t;
	      if (!arguments.length) {
	        if (x) {
	          if (xExtentDomain) {
	            x0 = xExtentDomain[0], x1 = xExtentDomain[1];
	          } else {
	            x0 = xExtent[0], x1 = xExtent[1];
	            if (x.invert) x0 = x.invert(x0), x1 = x.invert(x1);
	            if (x1 < x0) t = x0, x0 = x1, x1 = t;
	          }
	        }
	        if (y) {
	          if (yExtentDomain) {
	            y0 = yExtentDomain[0], y1 = yExtentDomain[1];
	          } else {
	            y0 = yExtent[0], y1 = yExtent[1];
	            if (y.invert) y0 = y.invert(y0), y1 = y.invert(y1);
	            if (y1 < y0) t = y0, y0 = y1, y1 = t;
	          }
	        }
	        return x && y ? [ [ x0, y0 ], [ x1, y1 ] ] : x ? [ x0, x1 ] : y && [ y0, y1 ];
	      }
	      if (x) {
	        x0 = z[0], x1 = z[1];
	        if (y) x0 = x0[0], x1 = x1[0];
	        xExtentDomain = [ x0, x1 ];
	        if (x.invert) x0 = x(x0), x1 = x(x1);
	        if (x1 < x0) t = x0, x0 = x1, x1 = t;
	        if (x0 != xExtent[0] || x1 != xExtent[1]) xExtent = [ x0, x1 ];
	      }
	      if (y) {
	        y0 = z[0], y1 = z[1];
	        if (x) y0 = y0[1], y1 = y1[1];
	        yExtentDomain = [ y0, y1 ];
	        if (y.invert) y0 = y(y0), y1 = y(y1);
	        if (y1 < y0) t = y0, y0 = y1, y1 = t;
	        if (y0 != yExtent[0] || y1 != yExtent[1]) yExtent = [ y0, y1 ];
	      }
	      return brush;
	    };
	    brush.clear = function() {
	      if (!brush.empty()) {
	        xExtent = [ 0, 0 ], yExtent = [ 0, 0 ];
	        xExtentDomain = yExtentDomain = null;
	      }
	      return brush;
	    };
	    brush.empty = function() {
	      return !!x && xExtent[0] == xExtent[1] || !!y && yExtent[0] == yExtent[1];
	    };
	    return d3.rebind(brush, event, "on");
	  };
	  var d3_svg_brushCursor = {
	    n: "ns-resize",
	    e: "ew-resize",
	    s: "ns-resize",
	    w: "ew-resize",
	    nw: "nwse-resize",
	    ne: "nesw-resize",
	    se: "nwse-resize",
	    sw: "nesw-resize"
	  };
	  var d3_svg_brushResizes = [ [ "n", "e", "s", "w", "nw", "ne", "se", "sw" ], [ "e", "w" ], [ "n", "s" ], [] ];
	  var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
	  var d3_time_formatUtc = d3_time_format.utc;
	  var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
	  d3_time_format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
	  function d3_time_formatIsoNative(date) {
	    return date.toISOString();
	  }
	  d3_time_formatIsoNative.parse = function(string) {
	    var date = new Date(string);
	    return isNaN(date) ? null : date;
	  };
	  d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
	  d3_time.second = d3_time_interval(function(date) {
	    return new d3_date(Math.floor(date / 1e3) * 1e3);
	  }, function(date, offset) {
	    date.setTime(date.getTime() + Math.floor(offset) * 1e3);
	  }, function(date) {
	    return date.getSeconds();
	  });
	  d3_time.seconds = d3_time.second.range;
	  d3_time.seconds.utc = d3_time.second.utc.range;
	  d3_time.minute = d3_time_interval(function(date) {
	    return new d3_date(Math.floor(date / 6e4) * 6e4);
	  }, function(date, offset) {
	    date.setTime(date.getTime() + Math.floor(offset) * 6e4);
	  }, function(date) {
	    return date.getMinutes();
	  });
	  d3_time.minutes = d3_time.minute.range;
	  d3_time.minutes.utc = d3_time.minute.utc.range;
	  d3_time.hour = d3_time_interval(function(date) {
	    var timezone = date.getTimezoneOffset() / 60;
	    return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
	  }, function(date, offset) {
	    date.setTime(date.getTime() + Math.floor(offset) * 36e5);
	  }, function(date) {
	    return date.getHours();
	  });
	  d3_time.hours = d3_time.hour.range;
	  d3_time.hours.utc = d3_time.hour.utc.range;
	  d3_time.month = d3_time_interval(function(date) {
	    date = d3_time.day(date);
	    date.setDate(1);
	    return date;
	  }, function(date, offset) {
	    date.setMonth(date.getMonth() + offset);
	  }, function(date) {
	    return date.getMonth();
	  });
	  d3_time.months = d3_time.month.range;
	  d3_time.months.utc = d3_time.month.utc.range;
	  function d3_time_scale(linear, methods, format) {
	    function scale(x) {
	      return linear(x);
	    }
	    scale.invert = function(x) {
	      return d3_time_scaleDate(linear.invert(x));
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
	      linear.domain(x);
	      return scale;
	    };
	    function tickMethod(extent, count) {
	      var span = extent[1] - extent[0], target = span / count, i = d3.bisect(d3_time_scaleSteps, target);
	      return i == d3_time_scaleSteps.length ? [ methods.year, d3_scale_linearTickRange(extent.map(function(d) {
	        return d / 31536e6;
	      }), count)[2] ] : !i ? [ d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2] ] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];
	    }
	    scale.nice = function(interval, skip) {
	      var domain = scale.domain(), extent = d3_scaleExtent(domain), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
	      if (method) interval = method[0], skip = method[1];
	      function skipped(date) {
	        return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
	      }
	      return scale.domain(d3_scale_nice(domain, skip > 1 ? {
	        floor: function(date) {
	          while (skipped(date = interval.floor(date))) date = d3_time_scaleDate(date - 1);
	          return date;
	        },
	        ceil: function(date) {
	          while (skipped(date = interval.ceil(date))) date = d3_time_scaleDate(+date + 1);
	          return date;
	        }
	      } : interval));
	    };
	    scale.ticks = function(interval, skip) {
	      var extent = d3_scaleExtent(scale.domain()), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [ {
	        range: interval
	      }, skip ];
	      if (method) interval = method[0], skip = method[1];
	      return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip < 1 ? 1 : skip);
	    };
	    scale.tickFormat = function() {
	      return format;
	    };
	    scale.copy = function() {
	      return d3_time_scale(linear.copy(), methods, format);
	    };
	    return d3_scale_linearRebind(scale, linear);
	  }
	  function d3_time_scaleDate(t) {
	    return new Date(t);
	  }
	  var d3_time_scaleSteps = [ 1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6 ];
	  var d3_time_scaleLocalMethods = [ [ d3_time.second, 1 ], [ d3_time.second, 5 ], [ d3_time.second, 15 ], [ d3_time.second, 30 ], [ d3_time.minute, 1 ], [ d3_time.minute, 5 ], [ d3_time.minute, 15 ], [ d3_time.minute, 30 ], [ d3_time.hour, 1 ], [ d3_time.hour, 3 ], [ d3_time.hour, 6 ], [ d3_time.hour, 12 ], [ d3_time.day, 1 ], [ d3_time.day, 2 ], [ d3_time.week, 1 ], [ d3_time.month, 1 ], [ d3_time.month, 3 ], [ d3_time.year, 1 ] ];
	  var d3_time_scaleLocalFormat = d3_time_format.multi([ [ ".%L", function(d) {
	    return d.getMilliseconds();
	  } ], [ ":%S", function(d) {
	    return d.getSeconds();
	  } ], [ "%I:%M", function(d) {
	    return d.getMinutes();
	  } ], [ "%I %p", function(d) {
	    return d.getHours();
	  } ], [ "%a %d", function(d) {
	    return d.getDay() && d.getDate() != 1;
	  } ], [ "%b %d", function(d) {
	    return d.getDate() != 1;
	  } ], [ "%B", function(d) {
	    return d.getMonth();
	  } ], [ "%Y", d3_true ] ]);
	  var d3_time_scaleMilliseconds = {
	    range: function(start, stop, step) {
	      return d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate);
	    },
	    floor: d3_identity,
	    ceil: d3_identity
	  };
	  d3_time_scaleLocalMethods.year = d3_time.year;
	  d3_time.scale = function() {
	    return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
	  };
	  var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function(m) {
	    return [ m[0].utc, m[1] ];
	  });
	  var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([ [ ".%L", function(d) {
	    return d.getUTCMilliseconds();
	  } ], [ ":%S", function(d) {
	    return d.getUTCSeconds();
	  } ], [ "%I:%M", function(d) {
	    return d.getUTCMinutes();
	  } ], [ "%I %p", function(d) {
	    return d.getUTCHours();
	  } ], [ "%a %d", function(d) {
	    return d.getUTCDay() && d.getUTCDate() != 1;
	  } ], [ "%b %d", function(d) {
	    return d.getUTCDate() != 1;
	  } ], [ "%B", function(d) {
	    return d.getUTCMonth();
	  } ], [ "%Y", d3_true ] ]);
	  d3_time_scaleUtcMethods.year = d3_time.year.utc;
	  d3_time.scale.utc = function() {
	    return d3_time_scale(d3.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);
	  };
	  d3.text = d3_xhrType(function(request) {
	    return request.responseText;
	  });
	  d3.json = function(url, callback) {
	    return d3_xhr(url, "application/json", d3_json, callback);
	  };
	  function d3_json(request) {
	    return JSON.parse(request.responseText);
	  }
	  d3.html = function(url, callback) {
	    return d3_xhr(url, "text/html", d3_html, callback);
	  };
	  function d3_html(request) {
	    var range = d3_document.createRange();
	    range.selectNode(d3_document.body);
	    return range.createContextualFragment(request.responseText);
	  }
	  d3.xml = d3_xhrType(function(request) {
	    return request.responseXML;
	  });
	  if (true) this.d3 = d3, !(__WEBPACK_AMD_DEFINE_FACTORY__ = (d3), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); else if (typeof module === "object" && module.exports) module.exports = d3; else this.d3 = d3;
	}();

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Samuel Gratzl on 14.08.2015.
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	///<reference path='../typings/tsd.d.ts' />
	var d3 = __webpack_require__(7);
	/**
	 * create a delayed call, can be called multiple times but only the last one at most delayed by timeToDelay will be executed
	 * @param callback the callback to call
	 * @param timeToDelay delay the call in milliseconds
	 * @param thisCallback this argument of the callback
	 * @return {function(...[any]): undefined} a function that can be called with the same interface as the callback but delayed
	 */
	function delayedCall(callback, timeToDelay, thisCallback) {
	    if (timeToDelay === void 0) { timeToDelay = 100; }
	    if (thisCallback === void 0) { thisCallback = this; }
	    var tm = -1;
	    return function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        if (tm >= 0) {
	            clearTimeout(tm);
	            tm = -1;
	        }
	        args.unshift(thisCallback === null ? this : thisCallback);
	        tm = setTimeout(callback.bind.apply(callback, args), timeToDelay);
	    };
	}
	exports.delayedCall = delayedCall;
	/**
	 * utility for AEventDispatcher to forward an event
	 * @param to
	 * @param event
	 * @return {function(...[any]): undefined}
	 */
	function forwardEvent(to, event) {
	    return function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        args.unshift(event || this.type);
	        to.fire.apply(to, args);
	    };
	}
	exports.forwardEvent = forwardEvent;
	/**
	 * base class for event dispatching using d3 event mechanism
	 */
	var AEventDispatcher = (function () {
	    function AEventDispatcher() {
	        this.forwarder = forwardEvent(this);
	        this.listeners = d3.dispatch.apply(d3, this.createEventList());
	    }
	    AEventDispatcher.prototype.on = function (type, listener) {
	        var _this = this;
	        if (arguments.length > 1) {
	            if (Array.isArray(type)) {
	                type.forEach(function (d) { return _this.listeners.on(d, listener); });
	            }
	            else {
	                this.listeners.on(type, listener);
	            }
	            return this;
	        }
	        return this.listeners.on(type);
	    };
	    /**
	     * return the list of events to be able to dispatch
	     * @return {Array}
	     */
	    AEventDispatcher.prototype.createEventList = function () {
	        return [];
	    };
	    AEventDispatcher.prototype.fire = function (type) {
	        var _this = this;
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        var fireImpl = function (t) {
	            //local context per event, set a this argument
	            var context = {
	                source: _this,
	                type: t,
	                args: args //the arguments to the listener
	            };
	            _this.listeners[t].apply(context, args);
	        };
	        if (Array.isArray(type)) {
	            type.forEach(fireImpl.bind(this));
	        }
	        else {
	            fireImpl(type);
	        }
	    };
	    /**
	     * forwards one or more events from a given dispatcher to the current one
	     * i.e. when one of the given events is fired in 'from' it will be forwared to all my listeners
	     * @param from the event dispatcher to forward from
	     * @param types the event types to forward
	     */
	    AEventDispatcher.prototype.forward = function (from) {
	        var types = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            types[_i - 1] = arguments[_i];
	        }
	        from.on(types, this.forwarder);
	    };
	    /**
	     * removes the forwarding declarations
	     * @param from
	     * @param types
	     */
	    AEventDispatcher.prototype.unforward = function (from) {
	        var types = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            types[_i - 1] = arguments[_i];
	        }
	        from.on(types, null);
	    };
	    return AEventDispatcher;
	}());
	exports.AEventDispatcher = AEventDispatcher;
	var TYPE_OBJECT = '[object Object]';
	var TYPE_ARRAY = '[object Array]';
	//credits to https://github.com/vladmiller/dextend/blob/master/lib/dextend.js
	function merge() {
	    var args = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        args[_i - 0] = arguments[_i];
	    }
	    var result = null;
	    for (var i = 0; i < args.length; i++) {
	        var toMerge = args[i], keys = Object.keys(toMerge);
	        if (result === null) {
	            result = toMerge;
	            continue;
	        }
	        for (var j = 0; j < keys.length; j++) {
	            var keyName = keys[j];
	            var value = toMerge[keyName];
	            //merge just POJOs
	            if (Object.prototype.toString.call(value) === TYPE_OBJECT && (Object.getPrototypeOf(value) === Object.prototype)) {
	                if (result[keyName] === undefined) {
	                    result[keyName] = {};
	                }
	                result[keyName] = merge(result[keyName], value);
	            }
	            else if (Object.prototype.toString.call(value) === TYPE_ARRAY) {
	                if (result[keyName] === undefined) {
	                    result[keyName] = [];
	                }
	                result[keyName] = value.concat(result[keyName]);
	            }
	            else {
	                result[keyName] = value;
	            }
	        }
	    }
	    return result;
	}
	exports.merge = merge;
	/**
	 * computes the absolute offset of the given element
	 * @param element
	 * @return {{left: number, top: number, width: number, height: number}}
	 */
	function offset(element) {
	    var obj = element.getBoundingClientRect();
	    return {
	        left: obj.left + window.pageXOffset,
	        top: obj.top + window.pageYOffset,
	        width: obj.width,
	        height: obj.height
	    };
	}
	exports.offset = offset;
	/**
	 * content scroller utility
	 *
	 * a class for efficiently selecting a range of data items that are currently visible according to the scrolled position
	 */
	var ContentScroller = (function (_super) {
	    __extends(ContentScroller, _super);
	    /**
	     *
	     * @param container the container element wrapping the content with a fixed height for enforcing scrolling
	     * @param content the content element to scroll
	     * @param options options see attribute
	     */
	    function ContentScroller(container, content, options) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        _super.call(this);
	        this.container = container;
	        this.content = content;
	        this.options = {
	            /**
	             * shift that should be used for calculating the top position
	             */
	            topShift: function () { return 0; },
	            /**
	             * backup rows, i.e .the number of rows that should also be shown for avoiding to frequent updates
	             */
	            backupRows: 5,
	            /**
	             * the height of one row in pixel
	             */
	            rowHeight: 10
	        };
	        this.prevScrollTop = 0;
	        this.shift = 0;
	        merge(this.options, options);
	        d3.select(container).on('scroll.scroller', function () { return _this.onScroll(); });
	        //keep the previous state computing whether a redraw is needed
	        this.prevScrollTop = container.scrollTop;
	        //total shift to the top
	        this.shift = offset(content).top - offset(container).top;
	    }
	    /**
	     * two events are fired:
	     *  * scroll when the user scrolls the container
	     *  * redraw when a redraw of the content must be performed due to scrolling changes. Note due to backup rows
	     *     a scrolling operation might not include a redraw
	     *
	     * @returns {string[]}
	     */
	    ContentScroller.prototype.createEventList = function () {
	        return _super.prototype.createEventList.call(this).concat(['scroll', 'redraw']);
	    };
	    ContentScroller.prototype.scrollIntoView = function (start, length, index, row2y) {
	        var range = this.select(start, length, row2y);
	        if (range.from <= index && index <= range.to) {
	            return; //already visible
	        }
	        var top = this.container.scrollTop - this.shift - this.options.topShift(), bottom = top + this.container.clientHeight, i = 0, j;
	        if (top > 0) {
	            i = Math.round(top / this.options.rowHeight);
	            //count up till really even partial rows are visible
	            while (i >= start && row2y(i + 1) > top) {
	                i--;
	            }
	            i -= this.options.backupRows; //one more row as backup for scrolling
	        }
	        {
	            j = Math.round(bottom / this.options.rowHeight);
	            //count down till really even partial rows are visible
	            while (j <= length && row2y(j - 1) < bottom) {
	                j++;
	            }
	            j += this.options.backupRows; //one more row as backup for scrolling
	        }
	    };
	    /**
	     * selects a range identified by start and length and the row2y position callback returning the slice to show according to the current user scrolling position
	     * @param start start of the range
	     * @param length length of the range
	     * @param row2y lookup for computing the y position of a given row
	     * @returns {{from: number, to: number}} the slide to show
	     */
	    ContentScroller.prototype.select = function (start, length, row2y) {
	        var top = this.container.scrollTop - this.shift - this.options.topShift(), bottom = top + this.container.clientHeight, i = 0, j;
	        /*console.log(window.matchMedia('print').matches, window.matchMedia('screen').matches, top, bottom);
	         if (typeof window.matchMedia === 'function' && window.matchMedia('print').matches) {
	         console.log('show all');
	         return [0, data.length];
	         }*/
	        if (top > 0) {
	            i = Math.round(top / this.options.rowHeight);
	            //count up till really even partial rows are visible
	            while (i >= start && row2y(i + 1) > top) {
	                i--;
	            }
	            i -= this.options.backupRows; //one more row as backup for scrolling
	        }
	        {
	            j = Math.round(bottom / this.options.rowHeight);
	            //count down till really even partial rows are visible
	            while (j <= length && row2y(j - 1) < bottom) {
	                j++;
	            }
	            j += this.options.backupRows; //one more row as backup for scrolling
	        }
	        return {
	            from: Math.max(i, start),
	            to: Math.min(j, length)
	        };
	    };
	    ContentScroller.prototype.onScroll = function () {
	        var top = this.container.scrollTop;
	        var left = this.container.scrollLeft;
	        //at least one row changed
	        //console.log(top, left);
	        this.fire('scroll', top, left);
	        if (Math.abs(this.prevScrollTop - top) >= this.options.rowHeight * this.options.backupRows) {
	            //we scrolled out of our backup rows, so we have to redraw the content
	            this.prevScrollTop = top;
	            this.fire('redraw');
	        }
	    };
	    /**
	     * removes the listeners
	     */
	    ContentScroller.prototype.destroy = function () {
	        d3.select(this.container).on('scroll.scroller', null);
	    };
	    return ContentScroller;
	}(AEventDispatcher));
	exports.ContentScroller = ContentScroller;
	/**
	 * checks whether the given DragEvent has one of the given types
	 */
	function hasDnDType(e, typesToCheck) {
	    var types = e.dataTransfer.types;
	    if (typeof types.indexOf === 'function') {
	        return typesToCheck.some(function (type) { return types.indexOf(type) >= 0; });
	    }
	    if (typeof types.includes === 'function') {
	        return typesToCheck.some(function (type) { return types.includes(type); });
	    }
	    if (typeof types.contains === 'function') {
	        return typesToCheck.some(function (type) { return types.contains(type); });
	    }
	    return false;
	}
	exports.hasDnDType = hasDnDType;
	/**
	 * should it be a copy dnd operation?
	 */
	function copyDnD(e) {
	    var dT = e.dataTransfer;
	    return (e.ctrlKey && dT.effectAllowed.match(/copy/gi) != null) || (dT.effectAllowed.match(/move/gi) == null);
	}
	exports.copyDnD = copyDnD;
	/**
	 * updates the drop effect according to the currently selected meta keys
	 * @param e
	 */
	function updateDropEffect(e) {
	    var dT = e.dataTransfer;
	    if (copyDnD(e)) {
	        dT.dropEffect = 'copy';
	    }
	    else {
	        dT.dropEffect = 'move';
	    }
	}
	exports.updateDropEffect = updateDropEffect;
	/**
	 * returns a d3 callable function to make an element dropable, managed the class css 'drag_over' for hovering effects
	 * @param mimeTypes the mime types to be dropable
	 * @param onDrop: handler when an element is dropped
	 */
	function dropAble(mimeTypes, onDrop) {
	    return function ($node) {
	        $node.on('dragenter', function () {
	            var e = d3.event;
	            //var xy = d3.mouse($node.node());
	            if (hasDnDType(e, mimeTypes)) {
	                d3.select(this).classed('drag_over', true);
	                //sounds good
	                return false;
	            }
	            //not a valid mime type
	            d3.select(this).classed('drag_over', false);
	        }).on('dragover', function () {
	            var e = d3.event;
	            if (hasDnDType(e, mimeTypes)) {
	                e.preventDefault();
	                updateDropEffect(e);
	                d3.select(this).classed('drag_over', true);
	                return false;
	            }
	        }).on('dragleave', function () {
	            //
	            d3.select(this).classed('drag_over', false);
	        }).on('drop', function (d) {
	            var e = d3.event;
	            e.preventDefault();
	            d3.select(this).classed('drag_over', false);
	            //var xy = d3.mouse($node.node());
	            if (hasDnDType(e, mimeTypes)) {
	                var data = {};
	                //selects the data contained in the data transfer
	                mimeTypes.forEach(function (mime) {
	                    var value = e.dataTransfer.getData(mime);
	                    if (value !== '') {
	                        data[mime] = value;
	                    }
	                });
	                return onDrop(data, d, copyDnD(e));
	            }
	        });
	    };
	}
	exports.dropAble = dropAble;
	//# sourceMappingURL=utils.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Samuel Gratzl on 14.08.2015.
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var model = __webpack_require__(6);
	var utils = __webpack_require__(8);
	var d3 = __webpack_require__(7);
	/**
	 * computes the simple statistics of an array using d3 histogram
	 * @param arr the data array
	 * @param acc accessor function
	 * @param range the total value range
	 * @returns {{min: number, max: number, count: number, hist: histogram.Bin<number>[]}}
	 */
	function computeStats(arr, acc, range) {
	    if (arr.length === 0) {
	        return {
	            min: NaN,
	            max: NaN,
	            mean: NaN,
	            count: 0,
	            maxBin: 0,
	            hist: []
	        };
	    }
	    var hist = d3.layout.histogram().value(acc);
	    if (range) {
	        hist.range(function () { return range; });
	    }
	    var ex = d3.extent(arr, acc);
	    var hist_data = hist(arr);
	    return {
	        min: ex[0],
	        max: ex[1],
	        mean: d3.mean(arr, acc),
	        count: arr.length,
	        maxBin: d3.max(hist_data, function (d) { return d.y; }),
	        hist: hist_data
	    };
	}
	/**
	 * computes a categorical histogram
	 * @param arr the data array
	 * @param acc the accessor
	 * @param categories the list of known categories
	 * @returns {{hist: {cat: string, y: number}[]}}
	 */
	function computeHist(arr, acc, categories) {
	    var m = d3.map();
	    categories.forEach(function (cat) { return m.set(cat, 0); });
	    arr.forEach(function (a) {
	        var vs = acc(a);
	        if (vs == null) {
	            return;
	        }
	        vs.forEach(function (v) {
	            m.set(v, (m.get(v) || 0) + 1);
	        });
	    });
	    return {
	        maxBin: d3.max(m.values()),
	        hist: m.entries().map(function (entry) { return ({ cat: entry.key, y: entry.value }); })
	    };
	}
	function isSupportType(col) {
	    return ['rank', 'selection', 'actions'].indexOf(col.type) >= 0;
	}
	/**
	 * a basic data provider holding the data and rankings
	 */
	var DataProvider = (function (_super) {
	    __extends(DataProvider, _super);
	    function DataProvider(options) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        _super.call(this);
	        /**
	         * all rankings
	         * @type {Array}
	         * @private
	         */
	        this.rankings_ = [];
	        /**
	         * the current selected indices
	         * @type {Set}
	         */
	        this.selection = d3.set();
	        this.uid = 0;
	        /**
	         * lookup map of a column type to its column implementation
	         */
	        this.columnTypes = utils.merge({}, model.models());
	        this.createHelper = function (d) {
	            //factory method for restoring a column
	            var desc = _this.fromDescRef(d.desc);
	            var c = null;
	            if (desc && desc.type) {
	                _this.fixDesc(d.desc);
	                var type = _this.columnTypes[desc.type];
	                c = new type(d.id, desc);
	                c.restore(d, _this.createHelper);
	            }
	            return c;
	        };
	        this.columnTypes = utils.merge(model.models(), options.columnTypes || {});
	    }
	    /**
	     * events:
	     *  * column changes: addColumn, removeColumn
	     *  * ranking changes: addRanking, removeRanking
	     *  * dirty: dirty, dirtyHeder, dirtyValues
	     *  * selectionChanged
	     * @returns {string[]}
	     */
	    DataProvider.prototype.createEventList = function () {
	        return _super.prototype.createEventList.call(this).concat(['addColumn', 'removeColumn', 'addRanking', 'removeRanking', 'dirty', 'dirtyHeader', 'dirtyValues', 'orderChanged', 'selectionChanged']);
	    };
	    /**
	     * returns a list of all known column descriptions
	     * @returns {Array}
	     */
	    DataProvider.prototype.getColumns = function () {
	        return [];
	    };
	    /**
	     * adds a new ranking
	     * @param existing an optional existing ranking to clone
	     * @return the new ranking
	     */
	    DataProvider.prototype.pushRanking = function (existing) {
	        var r = this.cloneRanking(existing);
	        this.insertRanking(r);
	        return r;
	    };
	    DataProvider.prototype.takeSnapshot = function (col) {
	        var r = this.cloneRanking();
	        r.push(this.clone(col));
	        this.insertRanking(r);
	        return r;
	    };
	    DataProvider.prototype.insertRanking = function (r, index) {
	        if (index === void 0) { index = this.rankings_.length; }
	        this.rankings_.splice(index, 0, r);
	        this.forward(r, 'addColumn.provider', 'removeColumn.provider', 'dirty.provider', 'dirtyHeader.provider', 'orderChanged.provider', 'dirtyValues.provider');
	        var that = this;
	        //delayed reordering per ranking
	        r.on('dirtyOrder.provider', utils.delayedCall(function () {
	            that.triggerReorder(this.source);
	        }, 100, null));
	        this.fire(['addRanking', 'dirtyHeader', 'dirtyValues', 'dirty'], r, index);
	        this.triggerReorder(r);
	    };
	    DataProvider.prototype.triggerReorder = function (ranking) {
	        this.sort(ranking).then(function (order) { return ranking.setOrder(order); });
	    };
	    /**
	     * removes a ranking from this data provider
	     * @param ranking
	     * @returns {boolean}
	     */
	    DataProvider.prototype.removeRanking = function (ranking) {
	        var i = this.rankings_.indexOf(ranking);
	        if (i < 0) {
	            return false;
	        }
	        this.unforward(ranking, 'addColumn.provider', 'removeColumn.provider', 'dirty.provider', 'dirtyHeader.provider', 'orderChanged.provider', 'dirtyOrder.provider', 'dirtyValues.provider');
	        this.rankings_.splice(i, 1);
	        ranking.on('dirtyOrder.provider', null);
	        this.cleanUpRanking(ranking);
	        this.fire(['removeRanking', 'dirtyHeader', 'dirtyValues', 'dirty'], ranking, i);
	        return true;
	    };
	    /**
	     * removes all rankings
	     */
	    DataProvider.prototype.clearRankings = function () {
	        var _this = this;
	        this.rankings_.forEach(function (ranking) {
	            _this.unforward(ranking, 'addColumn.provider', 'removeColumn.provider', 'dirty.provider', 'dirtyHeader.provider', 'dirtyOrder.provider', 'dirtyValues.provider');
	            ranking.on('dirtyOrder.provider', null);
	            _this.cleanUpRanking(ranking);
	        });
	        this.rankings_ = [];
	        this.fire(['removeRanking', 'dirtyHeader', 'dirtyValues', 'dirty'], null);
	    };
	    /**
	     * returns a list of all current rankings
	     * @returns {model.Ranking[]}
	     */
	    DataProvider.prototype.getRankings = function () {
	        return this.rankings_.slice();
	    };
	    /**
	     * returns the last ranking for quicker access
	     * @returns {model.Ranking}
	     */
	    DataProvider.prototype.getLastRanking = function () {
	        return this.rankings_[this.rankings_.length - 1];
	    };
	    /**
	     * hook method for cleaning up a ranking
	     * @param ranking
	     */
	    DataProvider.prototype.cleanUpRanking = function (ranking) {
	        //nothing to do
	    };
	    /**
	     * abstract method for cloning a ranking
	     * @param existing
	     * @returns {null}
	     */
	    DataProvider.prototype.cloneRanking = function (existing) {
	        return null; //implement me
	    };
	    /**
	     * adds a column to a ranking described by its column description
	     * @param ranking the ranking to add the column to
	     * @param desc the description of the column
	     * @return {model.Column} the newly created column or null
	     */
	    DataProvider.prototype.push = function (ranking, desc) {
	        var r = this.create(desc);
	        if (r) {
	            ranking.push(r);
	            return r;
	        }
	        return null;
	    };
	    /**
	     * adds a column to a ranking described by its column description
	     * @param ranking the ranking to add the column to
	     * @param index the position to insert the column
	     * @param desc the description of the column
	     * @return {model.Column} the newly created column or null
	     */
	    DataProvider.prototype.insert = function (ranking, index, desc) {
	        var r = this.create(desc);
	        if (r) {
	            ranking.insert(r, index);
	            return r;
	        }
	        return null;
	    };
	    /**
	     * creates a new unique id for a column
	     * @returns {string}
	     */
	    DataProvider.prototype.nextId = function () {
	        return 'col' + (this.uid++);
	    };
	    DataProvider.prototype.rankAccessor = function (row, id, desc, ranking) {
	        return 0;
	    };
	    DataProvider.prototype.fixDesc = function (desc) {
	        var _this = this;
	        //hacks for provider dependent descriptors
	        if (desc.type === 'rank') {
	            desc.accessor = this.rankAccessor.bind(this);
	        }
	        else if (desc.type === 'selection') {
	            desc.accessor = function (row) { return _this.isSelected(row._index); };
	            desc.setter = function (row, value) { return value ? _this.select(row._index) : _this.deselect(row._index); };
	        }
	    };
	    /**
	     * creates an internal column model out of the given column description
	     * @param desc
	     * @returns {model.Column] the new column or null if it can't be created
	     */
	    DataProvider.prototype.create = function (desc) {
	        this.fixDesc(desc);
	        //find by type and instantiate
	        var type = this.columnTypes[desc.type];
	        if (type) {
	            return new type(this.nextId(), desc);
	        }
	        return null;
	    };
	    /**
	     * clones a column by dumping and restoring
	     * @param col
	     * @returns {model.Column}
	     */
	    DataProvider.prototype.clone = function (col) {
	        var dump = this.dumpColumn(col);
	        return this.restoreColumn(dump);
	    };
	    /**
	     * restores a column from a dump
	     * @param dump
	     * @returns {model.Column}
	     */
	    DataProvider.prototype.restoreColumn = function (dump) {
	        var _this = this;
	        var create = function (d) {
	            var desc = _this.fromDescRef(d.desc);
	            var type = _this.columnTypes[desc.type];
	            _this.fixDesc(desc);
	            var c = new type('', desc);
	            c.restore(d, create);
	            c.assignNewId(_this.nextId.bind(_this));
	            return c;
	        };
	        return create(dump);
	    };
	    /**
	     * finds a column in all rankings returning the first match
	     * @param id_or_filter by id or by a filter function
	     * @returns {model.Column}
	     */
	    DataProvider.prototype.find = function (id_or_filter) {
	        //convert to function
	        var filter = typeof (id_or_filter) === 'string' ? function (col) { return col.id === id_or_filter; } : id_or_filter;
	        for (var i = 0; i < this.rankings_.length; ++i) {
	            var r = this.rankings_[i].find(filter);
	            if (r) {
	                return r;
	            }
	        }
	        return null;
	    };
	    /**
	     * dumps this whole provider including selection and the rankings
	     * @returns {{uid: number, selection: number[], rankings: *[]}}
	     */
	    DataProvider.prototype.dump = function () {
	        var _this = this;
	        return {
	            uid: this.uid,
	            selection: this.selection.values().map(Number),
	            rankings: this.rankings_.map(function (r) { return r.dump(_this.toDescRef); })
	        };
	    };
	    /**
	     * dumps a specific column
	     * @param col
	     * @returns {any}
	     */
	    DataProvider.prototype.dumpColumn = function (col) {
	        return col.dump(this.toDescRef);
	    };
	    /**
	     * for better dumping describe reference, by default just return the description
	     * @param desc
	     * @returns {any}
	     */
	    DataProvider.prototype.toDescRef = function (desc) {
	        return desc;
	    };
	    /**
	     * inverse operation of toDescRef
	     * @param descRef
	     * @returns {any}
	     */
	    DataProvider.prototype.fromDescRef = function (descRef) {
	        return descRef;
	    };
	    DataProvider.prototype.restoreRanking = function (dump) {
	        var ranking = this.cloneRanking();
	        ranking.restore(dump, this.createHelper);
	        //if no rank column add one
	        if (!ranking.children.some(function (d) { return d instanceof model.RankColumn; })) {
	            ranking.insert(this.create(model.RankColumn.desc()), 0);
	        }
	        var idGenerator = this.nextId.bind(this);
	        ranking.children.forEach(function (c) { return c.assignNewId(idGenerator); });
	        return ranking;
	    };
	    DataProvider.prototype.restore = function (dump) {
	        var _this = this;
	        //clean old
	        this.clearRankings();
	        //restore selection
	        this.uid = dump.uid || 0;
	        if (dump.selection) {
	            dump.selection.forEach(function (s) { return _this.selection.add(String(s)); });
	        }
	        //restore rankings
	        if (dump.rankings) {
	            dump.rankings.forEach(function (r) {
	                var ranking = _this.cloneRanking();
	                ranking.restore(r, _this.createHelper);
	                //if no rank column add one
	                if (!ranking.children.some(function (d) { return d instanceof model.RankColumn; })) {
	                    ranking.insert(_this.create(model.RankColumn.desc()), 0);
	                }
	                _this.insertRanking(ranking);
	            });
	        }
	        if (dump.layout) {
	            Object.keys(dump.layout).forEach(function (key) {
	                _this.deriveRanking(dump.layout[key]);
	            });
	        }
	        //assign new ids
	        var idGenerator = this.nextId.bind(this);
	        this.rankings_.forEach(function (r) {
	            r.children.forEach(function (c) { return c.assignNewId(idGenerator); });
	        });
	    };
	    DataProvider.prototype.findDesc = function (ref) {
	        return null;
	    };
	    /**
	     * generates a default ranking by using all column descriptions ones
	     */
	    DataProvider.prototype.deriveDefault = function () {
	        var _this = this;
	        if (this.rankings_.length > 0) {
	            //no default if we have a ranking
	            return;
	        }
	        var r = this.pushRanking();
	        this.getColumns().forEach(function (col) {
	            if (!isSupportType(col)) {
	                _this.push(r, col);
	            }
	        });
	    };
	    /**
	     * derives a ranking from an old layout bundle format
	     * @param bundle
	     */
	    DataProvider.prototype.deriveRanking = function (bundle) {
	        var _this = this;
	        var ranking = this.cloneRanking();
	        ranking.clear();
	        var toCol = function (column) {
	            if (column.type === 'rank') {
	                return _this.create(model.createRankDesc());
	            }
	            if (column.type === 'selection') {
	                return _this.create(model.createSelectionDesc());
	            }
	            if (column.type === 'actions') {
	                var r = _this.create(model.createActionDesc(column.label || 'actions'));
	                r.restore(column, null);
	                return r;
	            }
	            if (column.type === 'stacked') {
	                //create a stacked one
	                var r_1 = _this.create(model.createStackDesc(column.label || 'Combined'));
	                (column.children || []).forEach(function (col) {
	                    var c = toCol(col);
	                    if (c) {
	                        r_1.push(c);
	                    }
	                });
	                return r_1;
	            }
	            else {
	                var desc = _this.findDesc(column.column);
	                if (desc) {
	                    var r = _this.create(desc);
	                    column.label = column.label || desc.label || desc.column;
	                    r.restore(column, null);
	                    return r;
	                }
	            }
	            return null;
	        };
	        bundle.forEach(function (column) {
	            var col = toCol(column);
	            if (col) {
	                ranking.push(col);
	            }
	        });
	        //if no rank column add one
	        if (!ranking.children.some(function (d) { return d instanceof model.RankColumn; })) {
	            ranking.insert(this.create(model.createRankDesc()), 0);
	        }
	        this.insertRanking(ranking);
	        return ranking;
	    };
	    /**
	     * sorts the given ranking and eventually return a ordering of the data items
	     * @param ranking
	     * @return {Promise<any>}
	     */
	    DataProvider.prototype.sort = function (ranking) {
	        return Promise.reject('not implemented');
	    };
	    /**
	     * returns a view in the order of the given indices
	     * @param indices
	     * @return {Promise<any>}
	     */
	    DataProvider.prototype.view = function (indices) {
	        return Promise.reject('not implemented');
	    };
	    /**
	     * returns a data sample used for the mapping editor
	     * @param col
	     * @return {Promise<any>}
	     */
	    DataProvider.prototype.mappingSample = function (col) {
	        return Promise.reject('not implemented');
	    };
	    /**
	     * helper for computing statistics
	     * @param indices
	     * @returns {{stats: (function(model.INumberColumn): *), hist: (function(model.ICategoricalColumn): *)}}
	     */
	    DataProvider.prototype.stats = function (indices) {
	        return {
	            stats: function (col) { return Promise.reject('not implemented'); },
	            hist: function (col) { return Promise.reject('not implemented'); }
	        };
	    };
	    /**
	     * method for computing the unique key of a row
	     * @param row
	     * @param i
	     * @return {string}
	     */
	    DataProvider.prototype.rowKey = function (row, i) {
	        return typeof (row) === 'number' ? String(row) : String(row._index);
	    };
	    /**
	     * is the given row selected
	     * @param index
	     * @return {boolean}
	     */
	    DataProvider.prototype.isSelected = function (index) {
	        return this.selection.has(String(index));
	    };
	    /**
	     * also select the given row
	     * @param index
	     */
	    DataProvider.prototype.select = function (index) {
	        this.selection.add(String(index));
	        this.fire('selectionChanged', this.selection.values().map(Number));
	    };
	    /**
	     * hook for selecting elements matching the given arguments
	     * @param search
	     * @param col
	     */
	    DataProvider.prototype.searchSelect = function (search, col) {
	        //implemented by custom provider
	    };
	    /**
	     * also select all the given rows
	     * @param indices
	     * @param jumpToSelection whether the first selected row should be visible
	     */
	    DataProvider.prototype.selectAll = function (indices, jumpToSelection) {
	        var _this = this;
	        if (jumpToSelection === void 0) { jumpToSelection = false; }
	        indices.forEach(function (index) {
	            _this.selection.add(String(index));
	        });
	        this.fire('selectionChanged', this.selection.values().map(Number), jumpToSelection);
	    };
	    /**
	     * set the selection to the given rows
	     * @param indices
	     * @param jumpToSelection whether the first selected row should be visible
	     */
	    DataProvider.prototype.setSelection = function (indices, jumpToSelection) {
	        var _this = this;
	        if (jumpToSelection === void 0) { jumpToSelection = false; }
	        if (this.selection.size() === indices.length && indices.every(function (i) { return _this.selection.has(String(i)); })) {
	            return; //no change
	        }
	        this.selection = d3.set();
	        this.selectAll(indices, jumpToSelection);
	    };
	    /**
	     * toggles the selection of the given data index
	     * @param index
	     * @param additional just this element or all
	     * @returns {boolean} whether the index is currently selected
	     */
	    DataProvider.prototype.toggleSelection = function (index, additional) {
	        if (additional === void 0) { additional = false; }
	        if (this.isSelected(index)) {
	            if (additional) {
	                this.deselect(index);
	            }
	            else {
	                this.clearSelection();
	            }
	            return false;
	        }
	        else {
	            if (additional) {
	                this.select(index);
	            }
	            else {
	                this.setSelection([index]);
	            }
	            return true;
	        }
	    };
	    /**
	     * deselect the given row
	     * @param index
	     */
	    DataProvider.prototype.deselect = function (index) {
	        this.selection.remove(String(index));
	        this.fire('selectionChanged', this.selection.values().map(Number));
	    };
	    /**
	     * returns a promise containing the selected rows
	     * @return {Promise<any[]>}
	     */
	    DataProvider.prototype.selectedRows = function () {
	        if (this.selection.empty()) {
	            return Promise.resolve([]);
	        }
	        return this.view(this.getSelection());
	    };
	    /**
	     * returns the currently selected indices
	     * @returns {Array}
	     */
	    DataProvider.prototype.getSelection = function () {
	        var indices = [];
	        this.selection.forEach(function (s) { return indices.push(+s); });
	        indices.sort();
	        return indices;
	    };
	    /**
	     * clears the selection
	     */
	    DataProvider.prototype.clearSelection = function () {
	        this.selection = d3.set();
	        this.fire('selectionChanged', [], false);
	    };
	    /**
	     * utility to export a ranking to a table with the given separator
	     * @param ranking
	     * @param options
	     * @returns {Promise<string>}
	     */
	    DataProvider.prototype.exportTable = function (ranking, options) {
	        if (options === void 0) { options = {}; }
	        var op = {
	            separator: '\t',
	            newline: '\n',
	            header: true,
	            quote: false,
	            quoteChar: '"'
	        };
	        //optionally quote not numbers
	        function quote(l, c) {
	            if (op.quote && (!c || !model.isNumberColumn(c))) {
	                return op.quoteChar + l + op.quoteChar;
	            }
	            return l;
	        }
	        utils.merge(op, options);
	        var columns = ranking.flatColumns;
	        return this.view(ranking.getOrder()).then(function (data) {
	            var r = [];
	            if (op.header) {
	                r.push(columns.map(function (d) { return quote(d.label); }).join(op.separator));
	            }
	            data.forEach(function (row) {
	                r.push(columns.map(function (c) { return quote(c.getLabel(row), c); }).join(op.separator));
	            });
	            return r.join(op.newline);
	        });
	    };
	    return DataProvider;
	}(utils.AEventDispatcher));
	exports.DataProvider = DataProvider;
	/**
	 * common base implementation of a DataProvider with a fixed list of column descriptions
	 */
	var CommonDataProvider = (function (_super) {
	    __extends(CommonDataProvider, _super);
	    function CommonDataProvider(columns, options) {
	        var _this = this;
	        if (columns === void 0) { columns = []; }
	        if (options === void 0) { options = {}; }
	        _super.call(this, options);
	        this.columns = columns;
	        this.rankingIndex = 0;
	        //generic accessor of the data item
	        this.rowGetter = function (row, id, desc) { return row[desc.column]; };
	        //generate the accessor
	        columns.forEach(function (d) {
	            d.accessor = d.accessor || _this.rowGetter;
	            d.label = d.label || d.column;
	        });
	    }
	    CommonDataProvider.prototype.createEventList = function () {
	        return _super.prototype.createEventList.call(this).concat(['addDesc']);
	    };
	    /**
	     * adds another column description to this data provider
	     * @param column
	     */
	    CommonDataProvider.prototype.pushDesc = function (column) {
	        var d = column;
	        d.accessor = d.accessor || this.rowGetter;
	        d.label = column.label || d.column;
	        this.columns.push(column);
	        this.fire('addDesc', d);
	    };
	    CommonDataProvider.prototype.getColumns = function () {
	        return this.columns.slice();
	    };
	    CommonDataProvider.prototype.findDesc = function (ref) {
	        return this.columns.filter(function (c) { return c.column === ref; })[0];
	    };
	    /**
	     * identify by the tuple type@columnname
	     * @param desc
	     * @returns {string}
	     */
	    CommonDataProvider.prototype.toDescRef = function (desc) {
	        return desc.column ? desc.type + '@' + desc.column : desc;
	    };
	    CommonDataProvider.prototype.fromDescRef = function (descRef) {
	        if (typeof (descRef) === 'string') {
	            return this.columns.filter(function (d) { return d.type + '@' + d.column === descRef; })[0];
	        }
	        return descRef;
	    };
	    CommonDataProvider.prototype.restore = function (dump) {
	        _super.prototype.restore.call(this, dump);
	        this.rankingIndex = 1 + d3.max(this.getRankings(), function (r) { return +r.id.substring(4); });
	    };
	    CommonDataProvider.prototype.nextRankingId = function () {
	        return 'rank' + (this.rankingIndex++);
	    };
	    return CommonDataProvider;
	}(DataProvider));
	exports.CommonDataProvider = CommonDataProvider;
	/**
	 * a data provider based on an local array
	 */
	var LocalDataProvider = (function (_super) {
	    __extends(LocalDataProvider, _super);
	    function LocalDataProvider(data, columns, options) {
	        if (columns === void 0) { columns = []; }
	        if (options === void 0) { options = {}; }
	        _super.call(this, columns, options);
	        this.data = data;
	        this.options = {
	            /**
	             * whether the filter should be applied to all rankings regardless where they are
	             */
	            filterGlobally: false,
	            /**
	             * jump to search results such that they are visible
	             */
	            jumpToSearchResult: true
	        };
	        utils.merge(this.options, options);
	        //enhance with a magic attribute storing ranking information
	        data.forEach(function (d, i) {
	            d._rankings = {};
	            d._index = i;
	        });
	        var that = this;
	        this.reorderall = function () {
	            //fire for all other rankings a dirty order event, too
	            var ranking = this.source;
	            that.getRankings().forEach(function (r) {
	                if (r !== ranking) {
	                    r.dirtyOrder();
	                }
	            });
	        };
	    }
	    /**
	     * replaces the dataset rows with a new one
	     * @param data
	     */
	    LocalDataProvider.prototype.setData = function (data) {
	        data.forEach(function (d, i) {
	            d._rankings = {};
	            d._index = i;
	        });
	        this.data = data;
	        this.reorderall();
	    };
	    LocalDataProvider.prototype.clearData = function () {
	        this.setData([]);
	    };
	    /**
	     * append rows to the dataset
	     * @param data
	     */
	    LocalDataProvider.prototype.appendData = function (data) {
	        var l = this.data.length;
	        data.forEach(function (d, i) {
	            d._rankings = {};
	            d._index = l + i;
	        });
	        this.data.push.apply(this.data, data);
	        this.reorderall();
	    };
	    LocalDataProvider.prototype.rankAccessor = function (row, id, desc, ranking) {
	        return (row._rankings[ranking.id] + 1) || 1;
	    };
	    LocalDataProvider.prototype.cloneRanking = function (existing) {
	        var _this = this;
	        var id = this.nextRankingId();
	        var new_ = new model.Ranking(id);
	        if (existing) {
	            this.data.forEach(function (row) {
	                var r = row._rankings;
	                r[id] = r[existing.id];
	            });
	            //TODO better cloning
	            existing.children.forEach(function (child) {
	                _this.push(new_, child.desc);
	            });
	        }
	        else {
	            new_.push(this.create(model.createRankDesc()));
	        }
	        if (this.options.filterGlobally) {
	            new_.on('filterChanged.reorderall', this.reorderall);
	        }
	        return new_;
	    };
	    LocalDataProvider.prototype.cleanUpRanking = function (ranking) {
	        if (this.options.filterGlobally) {
	            ranking.on('filterChanged.reorderall', null);
	        }
	        //delete all stored information
	        this.data.forEach(function (d) { return delete d._rankings[ranking.id]; });
	    };
	    LocalDataProvider.prototype.sort = function (ranking) {
	        if (this.data.length === 0) {
	            return Promise.resolve([]);
	        }
	        //wrap in a helper and store the initial index
	        var helper = this.data.map(function (r, i) { return ({ row: r, i: i, prev: r._rankings[ranking.id] || 0 }); });
	        //do the optional filtering step
	        if (this.options.filterGlobally) {
	            var filtered_1 = this.getRankings().filter(function (d) { return d.isFiltered(); });
	            if (filtered_1.length > 0) {
	                helper = helper.filter(function (d) { return filtered_1.every(function (f) { return f.filter(d.row); }); });
	            }
	        }
	        else if (ranking.isFiltered()) {
	            helper = helper.filter(function (d) { return ranking.filter(d.row); });
	        }
	        //sort by the ranking column
	        helper.sort(function (a, b) { return ranking.comparator(a.row, b.row); });
	        //store the ranking index and create an argsort version, i.e. rank 0 -> index i
	        var argsort = helper.map(function (r, i) {
	            r.row._rankings[ranking.id] = i;
	            return r.i;
	        });
	        return Promise.resolve(argsort);
	    };
	    LocalDataProvider.prototype.view = function (indices) {
	        var _this = this;
	        if (this.data.length === 0) {
	            return Promise.resolve([]);
	        }
	        //filter invalid indices
	        var l = this.data.length;
	        var slice = indices.filter(function (i) { return i >= 0 && i < l; }).map(function (index) { return _this.data[index]; });
	        return Promise.resolve(slice);
	    };
	    /**
	     * helper for computing statistics
	     * @param indices
	     * @returns {{stats: (function(model.INumberColumn): *), hist: (function(model.ICategoricalColumn): *)}}
	     */
	    LocalDataProvider.prototype.stats = function (indices) {
	        var _this = this;
	        var d = null;
	        var getD = function () { return d === null ? (d = _this.view(indices)) : d; };
	        return {
	            stats: function (col) { return getD().then(function (data) { return computeStats(data, col.getNumber.bind(col), [0, 1]); }); },
	            hist: function (col) { return getD().then(function (data) { return computeHist(data, col.getCategories.bind(col), col.categories); }); }
	        };
	    };
	    LocalDataProvider.prototype.mappingSample = function (col) {
	        var _this = this;
	        var MAX_SAMPLE = 500; //at most 500 sample lines
	        var l = this.data.length;
	        if (l <= MAX_SAMPLE) {
	            return Promise.resolve(this.data.map(col.getRawValue.bind(col)));
	        }
	        //randomly select 500 elements
	        var indices = [];
	        for (var i = 0; i < MAX_SAMPLE; ++i) {
	            var j = Math.floor(Math.random() * (l - 1));
	            while (indices.indexOf(j) >= 0) {
	                j = Math.floor(Math.random() * (l - 1));
	            }
	            indices.push(j);
	        }
	        return Promise.resolve(indices.map(function (i) { return col.getRawValue(_this.data[i]); }));
	    };
	    LocalDataProvider.prototype.searchSelect = function (search, col) {
	        var f = typeof search === 'string' ? function (v) { return v.indexOf(search) >= 0; } : function (v) { return v.match(search) != null; };
	        var indices = this.data.filter(function (row) {
	            return f(col.getLabel(row));
	        }).map(function (row) { return row._index; });
	        this.setSelection(indices, this.options.jumpToSearchResult);
	    };
	    return LocalDataProvider;
	}(CommonDataProvider));
	exports.LocalDataProvider = LocalDataProvider;
	/**
	 * a remote implementation of the data provider
	 */
	var RemoteDataProvider = (function (_super) {
	    __extends(RemoteDataProvider, _super);
	    function RemoteDataProvider(server, columns, options) {
	        if (columns === void 0) { columns = []; }
	        if (options === void 0) { options = {}; }
	        _super.call(this, columns, options);
	        this.server = server;
	        /**
	         * the local ranking orders
	         * @type {{}}
	         */
	        this.ranks = {};
	    }
	    RemoteDataProvider.prototype.rankAccessor = function (row, id, desc, ranking) {
	        return this.ranks[ranking.id][row._index] || 0;
	    };
	    RemoteDataProvider.prototype.cloneRanking = function (existing) {
	        var id = this.nextRankingId();
	        if (existing) {
	            //copy the ranking
	            this.ranks[id] = this.ranks[existing.id];
	        }
	        var r = new model.Ranking(id);
	        r.push(this.create(model.createRankDesc()));
	        return r;
	    };
	    RemoteDataProvider.prototype.cleanUpRanking = function (ranking) {
	        //delete all stored information
	        delete this.ranks[ranking.id];
	    };
	    RemoteDataProvider.prototype.sort = function (ranking) {
	        var _this = this;
	        //generate a description of what to sort
	        var desc = ranking.toSortingDesc(function (desc) { return desc.column; });
	        //use the server side to sort
	        return this.server.sort(desc).then(function (argsort) {
	            //store the result
	            _this.ranks[ranking.id] = argsort;
	            return argsort;
	        });
	    };
	    RemoteDataProvider.prototype.view = function (argsort) {
	        return this.server.view(argsort).then(function (view) {
	            //enhance with the data index
	            view.forEach(function (d, i) { return d._index = argsort[i]; });
	            return view;
	        });
	    };
	    RemoteDataProvider.prototype.mappingSample = function (col) {
	        return this.server.mappingSample(col.desc.column);
	    };
	    RemoteDataProvider.prototype.searchSelect = function (search, col) {
	        var _this = this;
	        this.server.search(search, col.desc.column).then(function (indices) {
	            _this.setSelection(indices);
	        });
	    };
	    return RemoteDataProvider;
	}(CommonDataProvider));
	exports.RemoteDataProvider = RemoteDataProvider;
	//# sourceMappingURL=provider.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Samuel Gratzl on 14.08.2015.
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var model = __webpack_require__(6);
	/**
	 * default renderer instance rendering the value as a text
	 */
	var DefaultCellRenderer = (function () {
	    function DefaultCellRenderer() {
	        /**
	         * class to append to the text elements
	         * @type {string}
	         */
	        this.textClass = 'text';
	        /**
	         * the text alignment: left, center, right
	         * @type {string}
	         */
	        this.align = 'left';
	    }
	    DefaultCellRenderer.prototype.render = function ($col, col, rows, context) {
	        var $rows = $col.datum(col).selectAll('text.' + this.textClass).data(rows, context.rowKey);
	        $rows.enter().append('text').attr({
	            'class': this.textClass,
	            'clip-path': 'url(#' + context.idPrefix + 'clipCol' + col.id + ')',
	            y: function (d, i) { return context.cellPrevY(i); }
	        });
	        var alignmentShift = 2;
	        if (this.align === 'right') {
	            alignmentShift = col.getWidth() - 5;
	        }
	        else if (this.align === 'center') {
	            alignmentShift = col.getWidth() * 0.5;
	        }
	        $rows.attr({
	            x: function (d, i) { return context.cellX(i) + alignmentShift; },
	            'data-index': function (d, i) { return i; }
	        }).text(function (d) { return col.getLabel(d); });
	        context.animated($rows).attr({
	            y: function (d, i) { return context.cellY(i); }
	        });
	        $rows.exit().remove();
	    };
	    /**
	     * resolves the cell in the column for a given row
	     * @param $col
	     * @param index
	     * @return {Selection<Datum>}
	     */
	    DefaultCellRenderer.prototype.findRow = function ($col, index) {
	        return $col.selectAll('text.' + this.textClass + '[data-index="' + index + '"]');
	    };
	    DefaultCellRenderer.prototype.mouseEnter = function ($col, $row, col, row, index, context) {
	        var rowNode = $row.node();
	        //find the right one and
	        var n = this.findRow($col, index).node();
	        if (n) {
	            rowNode.appendChild(n);
	        }
	    };
	    DefaultCellRenderer.prototype.mouseLeave = function ($col, $row, col, row, index, context) {
	        var colNode = $col.node();
	        var rowNode = $row.node();
	        //move back
	        if (rowNode.hasChildNodes() && colNode) {
	            colNode.appendChild(rowNode.firstChild);
	        }
	        $row.selectAll('*').remove();
	    };
	    DefaultCellRenderer.prototype.renderCanvas = function (ctx, col, rows, context) {
	        var _this = this;
	        ctx.save();
	        ctx.textAlign = this.align;
	        rows.forEach(function (row, i) {
	            var y = context.cellY(i);
	            var alignmentShift = 2;
	            if (_this.align === 'right') {
	                alignmentShift = col.getWidth() - 5;
	            }
	            else if (_this.align === 'center') {
	                alignmentShift = col.getWidth() * 0.5;
	            }
	            var x = context.cellX(i) + alignmentShift;
	            ctx.fillText(col.getLabel(row), x, y, col.getWidth());
	        });
	        ctx.restore();
	    };
	    DefaultCellRenderer.prototype.mouseEnterCanvas = function (ctx, col, row, index, context) {
	        //TODO
	    };
	    return DefaultCellRenderer;
	}());
	exports.DefaultCellRenderer = DefaultCellRenderer;
	/**
	 * simple derived one where individual elements can be overridden
	 */
	var DerivedCellRenderer = (function (_super) {
	    __extends(DerivedCellRenderer, _super);
	    function DerivedCellRenderer(extraFuncs) {
	        var _this = this;
	        _super.call(this);
	        //integrate all the extra functions
	        Object.keys(extraFuncs).forEach(function (key) {
	            _this[key] = extraFuncs[key];
	        });
	    }
	    return DerivedCellRenderer;
	}(DefaultCellRenderer));
	/**
	 * a renderer rendering a bar for numerical columns
	 */
	var BarCellRenderer = (function (_super) {
	    __extends(BarCellRenderer, _super);
	    function BarCellRenderer() {
	        _super.apply(this, arguments);
	        /**
	         * flag to always render the value
	         * @type {boolean}
	         */
	        this.renderValue = false;
	    }
	    BarCellRenderer.prototype.render = function ($col, col, rows, context) {
	        var _this = this;
	        var renderValue = this.renderValue || context.option('renderBarValue', false);
	        //map to bars
	        var $rows = $col.datum(col).selectAll('.bar').data(rows, context.rowKey);
	        var padding = context.option('rowPadding', 1);
	        var renderBars = function ($enter, clazz, $update) {
	            $enter.append('rect').attr({
	                'class': clazz,
	                x: function (d, i) { return context.cellX(i); },
	                y: function (d, i) { return context.cellPrevY(i) + padding; },
	                width: function (d) {
	                    var n = col.getWidth() * col.getValue(d);
	                    return isNaN(n) ? 0 : n;
	                }
	            }).style('fill', col.color);
	            $update.attr({
	                height: function (d, i) { return context.rowHeight(i) - context.option('rowPadding', 1) * 2; }
	            });
	            context.animated($update).attr({
	                x: function (d, i) { return context.cellX(i); },
	                y: function (d, i) { return context.cellY(i) + context.option('rowPadding', 1); },
	                width: function (d) {
	                    var n = col.getWidth() * col.getValue(d);
	                    return isNaN(n) ? 0 : n;
	                }
	            }).style({
	                fill: function (d, i) { return _this.colorOf(d, i, col); }
	            });
	        };
	        if (renderValue) {
	            var $rows_enter = $rows.enter().append('g').attr('class', 'bar ' + this.textClass);
	            renderBars($rows_enter, '', $rows.select('rect'));
	            $rows_enter.append('text').attr({
	                'class': 'number',
	                'clip-path': 'url(#' + context.idPrefix + 'clipCol' + col.id + ')'
	            });
	            context.animated($rows.select('text').text(function (d) { return col.getLabel(d); }))
	                .attr('transform', function (d, i) { return 'translate(' + context.cellX(i) + ',' + context.cellY(i) + ')'; });
	        }
	        else {
	            renderBars($rows.enter(), 'bar ' + this.textClass, $rows);
	        }
	        $rows.attr({
	            'data-index': function (d, i) { return i; },
	        });
	        $rows.exit().remove();
	    };
	    /**
	     * computes the color for a given row
	     * @param d the current row
	     * @param i the row index
	     * @param col the model column
	     * @returns {string}
	     */
	    BarCellRenderer.prototype.colorOf = function (d, i, col) {
	        return col.color;
	    };
	    BarCellRenderer.prototype.findRow = function ($col, index) {
	        return $col.selectAll('.bar[data-index="' + index + '"]');
	    };
	    BarCellRenderer.prototype.mouseEnter = function ($col, $row, col, row, index, context) {
	        var renderValue = this.renderValue || context.option('renderBarValue', false);
	        if (renderValue) {
	            return _super.prototype.mouseEnter.call(this, $col, $row, col, row, index, context);
	        }
	        var rowNode = this.findRow($col, index);
	        if (!rowNode.empty()) {
	            //create a text element on top
	            $row.node().appendChild((rowNode.node()));
	            $row.append('text').datum(rowNode.datum()).attr({
	                'class': 'number',
	                'clip-path': 'url(#' + context.idPrefix + 'clipCol' + col.id + ')',
	                transform: 'translate(' + context.cellX(index) + ',' + context.cellY(index) + ')'
	            }).text(function (d) { return col.getLabel(d); });
	        }
	    };
	    BarCellRenderer.prototype.renderCanvas = function (ctx, col, rows, context) {
	        var _this = this;
	        var renderValue = this.renderValue || context.option('renderBarValue', false);
	        var padding = context.option('rowPadding', 1);
	        ctx.save();
	        rows.forEach(function (d, i) {
	            var x = context.cellX(i);
	            var y = context.cellY(i) + padding;
	            var n = col.getWidth() * col.getValue(d);
	            var w = isNaN(n) ? 0 : n;
	            var h = context.rowHeight(i) - padding * 2;
	            ctx.fillStyle = _this.colorOf(d, i, col) || col.color || model.Column.DEFAULT_COLOR;
	            ctx.fillRect(x, y, w, h);
	            if (renderValue) {
	                ctx.fillText(col.getLabel(d), x, y - padding, col.getWidth());
	            }
	        });
	        ctx.restore();
	    };
	    BarCellRenderer.prototype.mouseEnterCanvas = function (ctx, col, row, index, context) {
	        var renderValue = this.renderValue || context.option('renderBarValue', false);
	        if (renderValue) {
	            return;
	        }
	        ctx.save();
	        ctx.fillText(col.getLabel(row), context.cellX(index), context.cellY(index), col.getWidth());
	        ctx.restore();
	    };
	    return BarCellRenderer;
	}(DefaultCellRenderer));
	exports.BarCellRenderer = BarCellRenderer;
	/**
	 * render as a heatmap cell, e.g., encode the value in color
	 */
	var HeatMapCellRenderer = (function (_super) {
	    __extends(HeatMapCellRenderer, _super);
	    function HeatMapCellRenderer() {
	        _super.apply(this, arguments);
	    }
	    HeatMapCellRenderer.prototype.render = function ($col, col, rows, context) {
	        var _this = this;
	        var $rows = $col.datum(col).selectAll('rect.heatmap').data(rows, context.rowKey);
	        $rows.enter().append('rect').attr({
	            'class': 'bar ' + col.cssClass,
	            x: function (d, i) { return context.cellX(i); },
	            y: function (d, i) { return context.cellPrevY(i) + context.option('rowPadding', 1); },
	            width: function (d, i) { return context.rowHeight(i) - context.option('rowPadding', 1) * 2; }
	        }).style('fill', col.color);
	        $rows.attr({
	            'data-index': function (d, i) { return i; },
	            width: function (d, i) { return context.rowHeight(i) - context.option('rowPadding', 1) * 2; },
	            height: function (d, i) { return context.rowHeight(i) - context.option('rowPadding', 1) * 2; }
	        });
	        context.animated($rows).attr({
	            x: function (d, i) { return context.cellX(i); },
	            y: function (d, i) { return context.cellY(i) + context.option('rowPadding', 1); }
	        }).style({
	            fill: function (d, i) { return _this.colorOf(d, i, col); }
	        });
	        $rows.exit().remove();
	    };
	    /**
	     * computes the color of the cell
	     * @param d the row
	     * @param i the data index
	     * @param col the column
	     * @returns {string} the computed color
	     */
	    HeatMapCellRenderer.prototype.colorOf = function (d, i, col) {
	        var v = col.getValue(d);
	        if (isNaN(v)) {
	            v = 0;
	        }
	        //hsl space encoding, encode in lightness
	        var color = d3.hsl(col.color || model.Column.DEFAULT_COLOR);
	        color.l = v;
	        return color.toString();
	    };
	    HeatMapCellRenderer.prototype.findRow = function ($col, index) {
	        return $col.selectAll('rect.heatmap[data-index="' + index + '"]');
	    };
	    HeatMapCellRenderer.prototype.mouseEnter = function ($col, $row, col, row, index, context) {
	        var rowNode = this.findRow($col, index);
	        if (!rowNode.empty()) {
	            //append a text element on top
	            $row.node().appendChild((rowNode.node()));
	            $row.append('text').datum(rowNode.datum()).attr({
	                'class': 'number',
	                'clip-path': 'url(#' + context.idPrefix + 'clipCol' + col.id + ')',
	                transform: 'translate(' + context.cellX(index) + ',' + context.cellY(index) + ')'
	            }).text(function (d) { return col.getLabel(d); });
	        }
	    };
	    HeatMapCellRenderer.prototype.renderCanvas = function (ctx, col, rows, context) {
	        var _this = this;
	        ctx.save();
	        rows.forEach(function (d, i) {
	            var x = context.cellX(i);
	            var y = context.cellY(i) + context.option('rowPadding', 1);
	            var h = context.rowHeight(i) - context.option('rowPadding', 1) * 2;
	            ctx.fillStyle = _this.colorOf(d, i, col);
	            ctx.fillRect(x, y, h, h);
	        });
	        ctx.restore();
	    };
	    HeatMapCellRenderer.prototype.mouseEnterCanvas = function (ctx, col, row, index, context) {
	        ctx.save();
	        ctx.fillText(col.getLabel(row), context.cellX(index), context.cellY(index), col.getWidth());
	        ctx.restore();
	    };
	    return HeatMapCellRenderer;
	}(DefaultCellRenderer));
	exports.HeatMapCellRenderer = HeatMapCellRenderer;
	/**
	 * a bar cell renderer where individual function can be overwritten
	 */
	var DerivedBarCellRenderer = (function (_super) {
	    __extends(DerivedBarCellRenderer, _super);
	    function DerivedBarCellRenderer(extraFuncs) {
	        var _this = this;
	        _super.call(this);
	        Object.keys(extraFuncs).forEach(function (key) {
	            _this[key] = extraFuncs[key];
	        });
	    }
	    return DerivedBarCellRenderer;
	}(BarCellRenderer));
	/**
	 * an rendering for action columns, i.e., clickable column actions
	 */
	var ActionCellRenderer = (function () {
	    function ActionCellRenderer() {
	    }
	    ActionCellRenderer.prototype.render = function ($col, col, rows, context) {
	        //nothing to render in normal mode
	    };
	    ActionCellRenderer.prototype.mouseEnter = function ($col, $row, col, row, index, context) {
	        //render all actions at tspans
	        var actions = context.option('actions', []);
	        var $actions = $row.append('text').attr({
	            'class': 'actions fa',
	            x: context.cellX(index),
	            y: context.cellPrevY(index),
	            'data-index': index
	        }).selectAll('tspan').data(actions);
	        $actions.enter().append('tspan')
	            .text(function (d) { return d.icon; })
	            .attr('title', function (d) { return d.name; })
	            .on('click', function (d) {
	            d3.event.preventDefault();
	            d3.event.stopPropagation();
	            d.action(row);
	        });
	    };
	    ActionCellRenderer.prototype.mouseLeave = function ($col, $row, col, row, index, context) {
	        $row.selectAll('*').remove();
	    };
	    return ActionCellRenderer;
	}());
	exports.ActionCellRenderer = ActionCellRenderer;
	var SelectionCellRenderer = (function (_super) {
	    __extends(SelectionCellRenderer, _super);
	    function SelectionCellRenderer() {
	        _super.call(this);
	        this.textClass = 'selection';
	    }
	    SelectionCellRenderer.prototype.render = function ($col, col, rows, context) {
	        var $rows = $col.datum(col).selectAll('text.' + this.textClass).data(rows, context.rowKey);
	        $rows.enter().append('text').attr({
	            'class': this.textClass + ' fa',
	            y: function (d, i) { return context.cellPrevY(i); }
	        }).on('click', function (d) {
	            d3.event.preventDefault();
	            d3.event.stopPropagation();
	            var new_ = col.toggleValue(d);
	            d3.select(this).text(new_ === true ? '\uf046' : '\uf096');
	        });
	        $rows.attr({
	            x: function (d, i) { return context.cellX(i); },
	            'data-index': function (d, i) { return i; }
	        }).text(function (d) { return col.getValue(d) === true ? '\uf046' : '\uf096'; });
	        context.animated($rows).attr({
	            y: function (d, i) { return context.cellY(i); }
	        });
	        $rows.exit().remove();
	    };
	    SelectionCellRenderer.prototype.renderCanvas = function (ctx, col, rows, context) {
	        ctx.save();
	        ctx.font = 'FontAwesome';
	        rows.forEach(function (d, i) {
	            var x = context.cellX(i);
	            var y = context.cellY(i);
	            ctx.fillText(col.getValue(d) === true ? '\uf046' : '\uf096', x, y);
	        });
	        ctx.restore();
	    };
	    return SelectionCellRenderer;
	}(DefaultCellRenderer));
	exports.SelectionCellRenderer = SelectionCellRenderer;
	/**
	 * a renderer for annotate columns
	 */
	var AnnotateCellRenderer = (function (_super) {
	    __extends(AnnotateCellRenderer, _super);
	    function AnnotateCellRenderer() {
	        _super.apply(this, arguments);
	    }
	    AnnotateCellRenderer.prototype.mouseEnter = function ($col, $row, col, row, index, context) {
	        //render an input field for editing
	        this.findRow($col, index).attr('display', 'none');
	        $row.append('foreignObject').attr({
	            x: context.cellX(index) - 2,
	            y: context.cellPrevY(index) - 2,
	            'data-index': index,
	            width: col.getWidth(),
	            height: context.rowHeight(index)
	        }).append('xhtml:input').attr({
	            type: 'text',
	            value: col.getValue(row)
	        }).style({
	            width: col.getWidth() + 'px'
	        }).on('change', function () {
	            //update the value
	            var text = this.value;
	            col.setValue(row, text);
	        }).on('click', function () { return d3.event.stopPropagation(); });
	    };
	    AnnotateCellRenderer.prototype.mouseLeave = function ($col, $row, col, row, index, context) {
	        this.findRow($col, index).attr('display', null);
	        var node = $row.select('input').node();
	        if (node) {
	            //update the value before removal, the change event may not have been fired
	            col.setValue(row, node.value);
	        }
	        $row.selectAll('*').remove();
	    };
	    return AnnotateCellRenderer;
	}(DefaultCellRenderer));
	var defaultRendererInstance = new DefaultCellRenderer();
	var barRendererInstance = new BarCellRenderer();
	/**
	 * creates a new instance with optional overridden methods
	 * @param extraFuncs
	 * @return {DefaultCellRenderer}
	 */
	function defaultRenderer(extraFuncs) {
	    if (!extraFuncs) {
	        return defaultRendererInstance;
	    }
	    return new DerivedCellRenderer(extraFuncs);
	}
	exports.defaultRenderer = defaultRenderer;
	/**
	 * creates a new instance with optional overridden methods
	 * @param extraFuncs
	 * @return {BarCellRenderer}
	 */
	function barRenderer(extraFuncs) {
	    if (!extraFuncs) {
	        return barRendererInstance;
	    }
	    return new DerivedBarCellRenderer(extraFuncs);
	}
	exports.barRenderer = barRenderer;
	/**
	 * renderer of a link column, i.e. render an intermediate *a* element
	 */
	var LinkCellRenderer = (function (_super) {
	    __extends(LinkCellRenderer, _super);
	    function LinkCellRenderer() {
	        _super.apply(this, arguments);
	    }
	    LinkCellRenderer.prototype.render = function ($col, col, rows, context) {
	        //wrap the text elements with an a element
	        var $rows = $col.datum(col).selectAll('text.link').data(rows, context.rowKey);
	        $rows.enter().append('text').attr({
	            'class': 'text link',
	            'clip-path': 'url(#' + context.idPrefix + 'clipCol' + col.id + ')',
	            y: function (d, i) { return context.cellPrevY(i); }
	        });
	        $rows.attr({
	            x: function (d, i) { return context.cellX(i); },
	            'data-index': function (d, i) { return i; }
	        }).html(function (d) { return col.isLink(d) ? "<a class=\"link\" xlink:href=\"" + col.getValue(d) + "\" target=\"_blank\">" + col.getLabel(d) + "</a>" : col.getLabel(d); });
	        context.animated($rows).attr({
	            y: function (d, i) { return context.cellY(i); }
	        });
	        $rows.exit().remove();
	    };
	    LinkCellRenderer.prototype.findRow = function ($col, index) {
	        return $col.selectAll('text.link[data-index="' + index + '"]');
	    };
	    return LinkCellRenderer;
	}(DefaultCellRenderer));
	/**
	 * renders a string with additional alignment behavior
	 */
	var StringCellRenderer = (function (_super) {
	    __extends(StringCellRenderer, _super);
	    function StringCellRenderer() {
	        _super.apply(this, arguments);
	    }
	    StringCellRenderer.prototype.render = function ($col, col, rows, context) {
	        this.align = col.alignment;
	        this.textClass = 'text' + (col.alignment === 'left' ? '' : '_' + col.alignment);
	        return _super.prototype.render.call(this, $col, col, rows, context);
	    };
	    return StringCellRenderer;
	}(DefaultCellRenderer));
	/**
	 * renders categorical columns as a colored rect with label
	 */
	var CategoricalRenderer = (function (_super) {
	    __extends(CategoricalRenderer, _super);
	    function CategoricalRenderer() {
	        _super.apply(this, arguments);
	        this.textClass = 'cat';
	    }
	    CategoricalRenderer.prototype.render = function ($col, col, rows, context) {
	        var $rows = $col.datum(col).selectAll('g.' + this.textClass).data(rows, context.rowKey);
	        var $rows_enter = $rows.enter().append('g').attr({
	            'class': this.textClass,
	            'data-index': function (d, i) { return i; },
	            transform: function (d, i) { return 'translate(' + context.cellX(i) + ',' + context.cellPrevY(i) + ')'; }
	        });
	        $rows_enter.append('text').attr({
	            'clip-path': 'url(#' + context.idPrefix + 'clipCol' + col.id + ')',
	            x: function (d, i) { return context.rowHeight(i); }
	        });
	        $rows_enter.append('rect').attr({
	            y: context.option('rowPadding', 1)
	        });
	        $rows.attr({
	            'data-index': function (d, i) { return i; },
	            transform: function (d, i) { return 'translate(' + context.cellX(i) + ',' + context.cellY(i) + ')'; }
	        });
	        $rows.select('text').attr({
	            x: function (d, i) { return context.rowHeight(i); }
	        }).text(function (d) { return col.getLabel(d); });
	        $rows.select('rect').style({
	            fill: function (d) { return col.getColor(d); }
	        }).attr({
	            height: function (d, i) { return Math.max(context.rowHeight(i) - context.option('rowPadding', 1) * 2, 0); },
	            width: function (d, i) { return Math.max(context.rowHeight(i) - context.option('rowPadding', 1) * 2, 0); }
	        });
	        context.animated($rows).attr({
	            transform: function (d, i) { return 'translate(' + context.cellX(i) + ',' + context.cellY(i) + ')'; }
	        });
	        $rows.exit().remove();
	    };
	    CategoricalRenderer.prototype.findRow = function ($col, index) {
	        return $col.selectAll('g.' + this.textClass + '[data-index="' + index + '"]');
	    };
	    CategoricalRenderer.prototype.renderCanvas = function (ctx, col, rows, context) {
	        ctx.save();
	        rows.forEach(function (d, i) {
	            var x = context.cellX(i);
	            var y = context.cellY(i);
	            ctx.fillStyle = 'black';
	            ctx.fillText(col.getLabel(d), x + context.rowHeight(i), y);
	            ctx.fillStyle = col.getColor(d);
	            ctx.fillRect(x, y + context.option('rowPadding', 1), Math.max(context.rowHeight(i) - context.option('rowPadding', 1) * 2, 0), Math.max(context.rowHeight(i) - context.option('rowPadding', 1) * 2, 0));
	        });
	    };
	    return CategoricalRenderer;
	}(DefaultCellRenderer));
	/**
	 * renders a stacked column using composite pattern
	 */
	var StackCellRenderer = (function (_super) {
	    __extends(StackCellRenderer, _super);
	    function StackCellRenderer(nestingPossible) {
	        if (nestingPossible === void 0) { nestingPossible = true; }
	        _super.call(this);
	        this.nestingPossible = nestingPossible;
	    }
	    StackCellRenderer.prototype.renderImpl = function ($base, col, context, perChild, rowGetter, animated) {
	        if (animated === void 0) { animated = true; }
	        var $group = $base.datum(col), children = col.children, stacked = this.nestingPossible && context.showStacked(col);
	        var offset = 0, shifts = children.map(function (d) {
	            var r = offset;
	            offset += d.getWidth();
	            offset += (!stacked ? context.option('columnPadding', 0) : 0);
	            return r;
	        });
	        var baseclass = 'component' + context.option('stackLevel', '');
	        var ueber = context.cellX;
	        var ueberOption = context.option;
	        context.option = function (option, default_) {
	            var r = ueberOption(option, default_);
	            return option === 'stackLevel' ? r + 'N' : r;
	        };
	        //map all children to g elements
	        var $children = $group.selectAll('g.' + baseclass).data(children, function (d) { return d.id; });
	        //shift children horizontally
	        $children.enter().append('g').attr({
	            'class': baseclass,
	            transform: function (d, i) { return 'translate(' + shifts[i] + ',0)'; }
	        });
	        //for each children render the column
	        $children.attr({
	            'class': function (d) { return baseclass + ' ' + d.desc.type; },
	            'data-stack': function (d, i) { return i; }
	        }).each(function (d, i) {
	            if (stacked) {
	                var preChildren_1 = children.slice(0, i);
	                //if shown as stacked bar shift individual cells of a column to the left where they belong to
	                context.cellX = function (index) {
	                    //shift by all the empty space left from the previous columns
	                    return ueber(index) - preChildren_1.reduce(function (prev, child) { return prev + child.getWidth() * (1 - child.getValue(rowGetter(index))); }, 0);
	                };
	            }
	            perChild(d3.select(this), d, i, context);
	        });
	        (animated ? context.animated($children) : $children).attr({
	            transform: function (d, i) { return 'translate(' + shifts[i] + ',0)'; }
	        });
	        $children.exit().remove();
	        context.cellX = ueber;
	        context.option = ueberOption;
	    };
	    StackCellRenderer.prototype.render = function ($col, stack, rows, context) {
	        this.renderImpl($col, stack, context, function ($child, col, i, ccontext) {
	            ccontext.render(col, $child, rows, ccontext);
	        }, function (index) { return rows[index]; });
	    };
	    StackCellRenderer.prototype.mouseEnter = function ($col, $row, stack, row, index, context) {
	        var baseclass = 'component' + context.option('stackLevel', '');
	        this.renderImpl($row, stack, context, function ($row_i, col, i, ccontext) {
	            var $col_i = $col.select('g.' + baseclass + '[data-stack="' + i + '"]');
	            if (!$col_i.empty()) {
	                ccontext.renderer(col).mouseEnter($col_i, $row_i, col, row, index, ccontext);
	            }
	        }, function (index) { return row; }, false);
	    };
	    StackCellRenderer.prototype.mouseLeave = function ($col, $row, satck, row, index, context) {
	        var baseclass = 'component' + context.option('stackLevel', '');
	        this.renderImpl($row, satck, context, function ($row_i, col, i, ccontext) {
	            var $col_i = $col.select('g.' + baseclass + '[data-stack="' + i + '"]');
	            if (!$col_i.empty()) {
	                ccontext.renderer(col).mouseLeave($col_i, $row_i, col, row, index, ccontext);
	            }
	        }, function (index) { return row; }, false);
	        $row.selectAll('*').remove();
	    };
	    StackCellRenderer.prototype.renderCanvas = function (ctx, stack, rows, context) {
	        var children = stack.children, stacked = this.nestingPossible && context.showStacked(stack);
	        var offset = 0, shifts = children.map(function (d) {
	            var r = offset;
	            offset += d.getWidth();
	            offset += (!stacked ? context.option('columnPadding', 0) : 0);
	            return r;
	        });
	        var ueber = context.cellX;
	        var ueberOption = context.option;
	        context.option = function (option, default_) {
	            var r = ueberOption(option, default_);
	            return option === 'stackLevel' ? r + 'N' : r;
	        };
	        ctx.save();
	        children.forEach(function (child, i) {
	            ctx.save();
	            ctx.translate(shifts[i], 0);
	            if (stacked) {
	                var preChildren_2 = children.slice(0, i);
	                //if shown as stacked bar shift individual cells of a column to the left where they belong to
	                context.cellX = function (index) {
	                    //shift by all the empty space left from the previous columns
	                    return ueber(index) - preChildren_2.reduce(function (prev, child) { return prev + child.getWidth() * (1 - child.getValue(rows[index])); }, 0);
	                };
	            }
	            context.renderCanvas(child, ctx, rows, context);
	            ctx.restore();
	        });
	        ctx.restore();
	        context.cellX = ueber;
	        context.option = ueberOption;
	    };
	    return StackCellRenderer;
	}(DefaultCellRenderer));
	/**
	 * defines a custom renderer object
	 * @param selector d3 selector, e.g. text.my
	 * @param render render function
	 * @param extras additional functions
	 * @returns {DerivedCellRenderer}
	 */
	function createRenderer(selector, render, extras) {
	    var _this = this;
	    if (extras === void 0) { extras = {}; }
	    extras.selector = selector;
	    extras.render = render;
	    extras.findRow = function ($col, index) { return $col.selectAll(_this.selector + '[data-index="' + index + '"]'); };
	    var r = new DerivedCellRenderer(extras);
	    return r;
	}
	exports.createRenderer = createRenderer;
	var combineRenderer = barRenderer({
	    colorOf: function (d, i, col) { return col.getColor(d); }
	});
	/**
	 * returns a map of all known renderers by type
	 * @return
	 */
	function renderers() {
	    return {
	        string: new StringCellRenderer(),
	        link: new LinkCellRenderer(),
	        number: barRenderer(),
	        rank: defaultRenderer({
	            textClass: 'rank',
	            align: 'right'
	        }),
	        boolean: defaultRenderer({
	            textClass: 'boolean',
	            align: 'center'
	        }),
	        heatmap: new HeatMapCellRenderer(),
	        stack: new StackCellRenderer(),
	        categorical: new CategoricalRenderer(),
	        ordinal: barRenderer({
	            renderValue: true,
	            colorOf: function (d, i, col) { return col.getColor(d); }
	        }),
	        max: combineRenderer,
	        min: combineRenderer,
	        mean: combineRenderer,
	        script: combineRenderer,
	        actions: new ActionCellRenderer(),
	        annotate: new AnnotateCellRenderer(),
	        selection: new SelectionCellRenderer(),
	        nested: new StackCellRenderer(false)
	    };
	}
	exports.renderers = renderers;
	//# sourceMappingURL=renderer.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Samuel Gratzl on 14.08.2015.
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	///<reference path='../typings/tsd.d.ts' />
	var d3 = __webpack_require__(7);
	var utils = __webpack_require__(8);
	var model = __webpack_require__(6);
	var renderer = __webpack_require__(10);
	var dialogs = __webpack_require__(12);
	var PoolEntry = (function () {
	    function PoolEntry(desc) {
	        this.desc = desc;
	        this.used = 0;
	    }
	    return PoolEntry;
	}());
	/**
	 * utility function to generate the tooltip text with description
	 * @param col the column
	 */
	function toFullTooltip(col) {
	    var base = col.label;
	    if (col.description != null && col.description !== '') {
	        base += '\n' + col.description;
	    }
	    return base;
	}
	var PoolRenderer = (function () {
	    function PoolRenderer(data, parent, options) {
	        if (options === void 0) { options = {}; }
	        this.data = data;
	        this.options = {
	            layout: 'vertical',
	            elemWidth: 100,
	            elemHeight: 40,
	            width: 100,
	            height: 500,
	            additionalDesc: [],
	            hideUsed: true,
	            addAtEndOnClick: false
	        };
	        utils.merge(this.options, options);
	        this.$node = d3.select(parent).append('div').classed('lu-pool', true);
	        this.changeDataStorage(data);
	    }
	    PoolRenderer.prototype.changeDataStorage = function (data) {
	        var _this = this;
	        if (this.data) {
	            this.data.on(['addColumn.pool', 'removeColumn.pool', 'addRanking.pool', 'removeRanking.pool', 'addDesc.pool'], null);
	        }
	        this.data = data;
	        this.entries = data.getColumns().concat(this.options.additionalDesc).map(function (d) { return new PoolEntry(d); });
	        data.on(['addDesc.pool'], function (desc) {
	            _this.entries.push(new PoolEntry(desc));
	            _this.update();
	        });
	        if (this.options.hideUsed) {
	            var that = this;
	            data.on(['addColumn.pool', 'removeColumn.pool'], function (col) {
	                var desc = col.desc, change = this.type === 'addColumn' ? 1 : -1;
	                that.entries.some(function (entry) {
	                    if (entry.desc !== desc) {
	                        return false;
	                    }
	                    entry.used += change;
	                    return true;
	                });
	                that.update();
	            });
	            data.on(['addRanking.pool', 'removeRanking.pool'], function (ranking) {
	                var descs = ranking.flatColumns.map(function (d) { return d.desc; }), change = this.type === 'addRanking' ? 1 : -1;
	                that.entries.some(function (entry) {
	                    if (descs.indexOf(entry.desc) < 0) {
	                        return false;
	                    }
	                    entry.used += change;
	                    return true;
	                });
	                that.update();
	            });
	            data.getRankings().forEach(function (ranking) {
	                var descs = ranking.flatColumns.map(function (d) { return d.desc; }), change = +1;
	                that.entries.some(function (entry) {
	                    if (descs.indexOf(entry.desc) < 0) {
	                        return false;
	                    }
	                    entry.used += change;
	                });
	            });
	        }
	    };
	    PoolRenderer.prototype.remove = function () {
	        this.$node.remove();
	        if (this.data) {
	            this.data.on(['addColumn.pool', 'removeColumn.pool', 'addRanking.pool', 'removeRanking.pool', 'addDesc.pool'], null);
	        }
	    };
	    PoolRenderer.prototype.update = function () {
	        var _this = this;
	        var data = this.data;
	        var descToShow = this.entries.filter(function (e) { return e.used === 0; }).map(function (d) { return d.desc; });
	        var $headers = this.$node.selectAll('div.header').data(descToShow);
	        var $headers_enter = $headers.enter().append('div').attr({
	            'class': 'header',
	            'draggable': true
	        }).on('dragstart', function (d) {
	            var e = d3.event;
	            e.dataTransfer.effectAllowed = 'copyMove'; //none, copy, copyLink, copyMove, link, linkMove, move, all
	            e.dataTransfer.setData('text/plain', d.label);
	            e.dataTransfer.setData('application/caleydo-lineup-column', JSON.stringify(data.toDescRef(d)));
	            if (model.isNumberColumn(d)) {
	                e.dataTransfer.setData('application/caleydo-lineup-column-number', JSON.stringify(data.toDescRef(d)));
	            }
	        }).style({
	            width: this.options.elemWidth + 'px',
	            height: this.options.elemHeight + 'px'
	        });
	        if (this.options.addAtEndOnClick) {
	            $headers_enter.on('click', function (d) {
	                _this.data.push(_this.data.getLastRanking(), d);
	            });
	        }
	        $headers_enter.append('span').classed('label', true).text(function (d) { return d.label; });
	        $headers.attr('class', function (d) { return ("header " + (d.cssClass || '') + " " + d.type); });
	        $headers.style({
	            'transform': function (d, i) {
	                var pos = _this.layout(i);
	                return 'translate(' + pos.x + 'px,' + pos.y + 'px)';
	            },
	            'background-color': function (d) {
	                var s = d;
	                return s.cssClass ? null : s.color || model.Column.DEFAULT_COLOR;
	            }
	        });
	        $headers.attr({
	            title: function (d) { return toFullTooltip(d); }
	        });
	        $headers.select('span').text(function (d) { return d.label; });
	        $headers.exit().remove();
	        //compute the size of this node
	        switch (this.options.layout) {
	            case 'horizontal':
	                this.$node.style({
	                    width: (this.options.elemWidth * descToShow.length) + 'px',
	                    height: (this.options.elemHeight * 1) + 'px'
	                });
	                break;
	            case 'grid':
	                var perRow = d3.round(this.options.width / this.options.elemWidth, 0);
	                this.$node.style({
	                    width: perRow * this.options.elemWidth + 'px',
	                    height: Math.ceil(descToShow.length / perRow) * this.options.elemHeight + 'px'
	                });
	                break;
	            //case 'vertical':
	            default:
	                this.$node.style({
	                    width: (this.options.elemWidth * 1) + 'px',
	                    height: (this.options.elemHeight * descToShow.length) + 'px'
	                });
	                break;
	        }
	    };
	    PoolRenderer.prototype.layout = function (i) {
	        switch (this.options.layout) {
	            case 'horizontal':
	                return { x: i * this.options.elemWidth, y: 0 };
	            case 'grid':
	                var perRow = d3.round(this.options.width / this.options.elemWidth, 0);
	                return { x: (i % perRow) * this.options.elemWidth, y: Math.floor(i / perRow) * this.options.elemHeight };
	            //case 'vertical':
	            default:
	                return { x: 0, y: i * this.options.elemHeight };
	        }
	    };
	    return PoolRenderer;
	}());
	exports.PoolRenderer = PoolRenderer;
	function dummyRankingButtonHook() {
	    return null;
	}
	exports.dummyRankingButtonHook = dummyRankingButtonHook;
	var HeaderRenderer = (function () {
	    function HeaderRenderer(data, parent, options) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        this.data = data;
	        this.options = {
	            slopeWidth: 150,
	            columnPadding: 5,
	            headerHistogramHeight: 40,
	            headerHeight: 20,
	            manipulative: true,
	            histograms: false,
	            filterDialogs: dialogs.filterDialogs(),
	            linkTemplates: [],
	            searchAble: function (col) { return col instanceof model.StringColumn; },
	            sortOnLabel: true,
	            autoRotateLabels: false,
	            rotationHeight: 50,
	            rotationDegree: -20,
	            freezeCols: 0,
	            rankingButtons: dummyRankingButtonHook
	        };
	        this.histCache = d3.map();
	        this.dragHandler = d3.behavior.drag()
	            .on('dragstart', function () {
	            d3.select(this).classed('dragging', true);
	            d3.event.sourceEvent.stopPropagation();
	            d3.event.sourceEvent.preventDefault();
	        })
	            .on('drag', function (d) {
	            //the new width
	            var newValue = Math.max(d3.mouse(this.parentNode)[0], 2);
	            d.setWidth(newValue);
	            d3.event.sourceEvent.stopPropagation();
	            d3.event.sourceEvent.preventDefault();
	        })
	            .on('dragend', function (d) {
	            d3.select(this).classed('dragging', false);
	            d3.event.sourceEvent.stopPropagation();
	            d3.event.sourceEvent.preventDefault();
	        });
	        this.dropHandler = utils.dropAble(['application/caleydo-lineup-column-ref', 'application/caleydo-lineup-column'], function (data, d, copy) {
	            var col = null;
	            if ('application/caleydo-lineup-column-ref' in data) {
	                var id = data['application/caleydo-lineup-column-ref'];
	                col = _this.data.find(id);
	                if (copy) {
	                    col = _this.data.clone(col);
	                }
	                else {
	                    col.removeMe();
	                }
	            }
	            else {
	                var desc = JSON.parse(data['application/caleydo-lineup-column']);
	                col = _this.data.create(_this.data.fromDescRef(desc));
	            }
	            if (d instanceof model.Column) {
	                return d.insertAfterMe(col) != null;
	            }
	            else {
	                var r = _this.data.getLastRanking();
	                return r.push(col) !== null;
	            }
	        });
	        utils.merge(this.options, options);
	        this.$node = d3.select(parent).append('div').classed('lu-header', true);
	        this.$node.append('div').classed('drop', true).call(this.dropHandler);
	        this.changeDataStorage(data);
	    }
	    HeaderRenderer.prototype.changeDataStorage = function (data) {
	        var _this = this;
	        if (this.data) {
	            this.data.on(['dirtyHeader.headerRenderer', 'orderChanged.headerRenderer', 'selectionChanged.headerRenderer'], null);
	        }
	        this.data = data;
	        data.on('dirtyHeader.headerRenderer', utils.delayedCall(this.update.bind(this), 1));
	        if (this.options.histograms) {
	            data.on('orderChanged.headerRenderer', function () {
	                _this.updateHist();
	                _this.update();
	            });
	            data.on('selectionChanged.headerRenderer', utils.delayedCall(this.drawSelection.bind(this), 1));
	        }
	    };
	    Object.defineProperty(HeaderRenderer.prototype, "sharedHistCache", {
	        get: function () {
	            return this.histCache;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * defines the current header height in pixel
	     * @returns {number}
	     */
	    HeaderRenderer.prototype.currentHeight = function () {
	        return parseInt(this.$node.style('height'), 10);
	    };
	    HeaderRenderer.prototype.updateHist = function () {
	        var _this = this;
	        var rankings = this.data.getRankings();
	        rankings.forEach(function (ranking) {
	            var order = ranking.getOrder();
	            var cols = ranking.flatColumns;
	            var histo = order == null ? null : _this.data.stats(order);
	            cols.filter(function (d) { return d instanceof model.NumberColumn && !d.isHidden(); }).forEach(function (col) {
	                _this.histCache.set(col.id, histo === null ? null : histo.stats(col));
	            });
	            cols.filter(function (d) { return model.isCategoricalColumn(d) && !d.isHidden(); }).forEach(function (col) {
	                _this.histCache.set(col.id, histo === null ? null : histo.hist(col));
	            });
	        });
	    };
	    /**
	     * update the selection in the histograms
	     */
	    HeaderRenderer.prototype.drawSelection = function () {
	        var _this = this;
	        if (!this.options.histograms) {
	            return;
	        }
	        //highlight the bins in the histograms
	        var node = this.$node.node();
	        [].slice.call(node.querySelectorAll('div.bar')).forEach(function (d) { return d.classList.remove('selected'); });
	        var indices = this.data.getSelection();
	        if (indices.length <= 0) {
	            return;
	        }
	        this.data.view(indices).then(function (data) {
	            //get the data
	            var rankings = _this.data.getRankings();
	            rankings.forEach(function (ranking) {
	                var cols = ranking.flatColumns;
	                //find all number histograms
	                cols.filter(function (d) { return d instanceof model.NumberColumn && !d.isHidden(); }).forEach(function (col) {
	                    var bars = [].slice.call(node.querySelectorAll("div.header[data-id=\"" + col.id + "\"] div.bar"));
	                    data.forEach(function (d) {
	                        var v = col.getValue(d);
	                        //choose the right bin
	                        for (var i = 1; i < bars.length; ++i) {
	                            var bar = bars[i];
	                            if (bar.dataset.x > v) {
	                                bars[i - 1].classList.add('selected');
	                                break;
	                            }
	                            else if (i === bars.length - 1) {
	                                bar.classList.add('selected');
	                                break;
	                            }
	                        }
	                    });
	                });
	                cols.filter(function (d) { return model.isCategoricalColumn(d) && !d.isHidden(); }).forEach(function (col) {
	                    var header = node.querySelector("div.header[data-id=\"" + col.id + "\"]");
	                    data.forEach(function (d) {
	                        var cats = col.getCategories(d);
	                        (cats || []).forEach(function (cat) {
	                            header.querySelector("div.bar[data-cat=\"" + cat + "\"]").classList.add('selected');
	                        });
	                    });
	                });
	            });
	        });
	    };
	    HeaderRenderer.prototype.renderRankingButtons = function (rankings, rankingsOffsets) {
	        var $rankingbuttons = this.$node.selectAll('div.rankingbuttons').data(rankings);
	        $rankingbuttons.enter().append('div')
	            .classed('rankingbuttons', true)
	            .call(this.options.rankingButtons);
	        $rankingbuttons.style('left', function (d, i) { return rankingsOffsets[i] + 'px'; });
	        $rankingbuttons.exit().remove();
	    };
	    HeaderRenderer.prototype.update = function () {
	        var _this = this;
	        var that = this;
	        var rankings = this.data.getRankings();
	        var shifts = [], offset = 0, rankingOffsets = [];
	        rankings.forEach(function (ranking) {
	            offset += ranking.flatten(shifts, offset, 1, _this.options.columnPadding) + _this.options.slopeWidth;
	            rankingOffsets.push(offset - _this.options.slopeWidth);
	        });
	        //real width
	        offset -= this.options.slopeWidth;
	        var columns = shifts.map(function (d) { return d.col; });
	        //update all if needed
	        if (this.options.histograms && this.histCache.empty() && rankings.length > 0) {
	            this.updateHist();
	        }
	        this.renderColumns(columns, shifts);
	        if (this.options.rankingButtons !== dummyRankingButtonHook) {
	            this.renderRankingButtons(rankings, rankingOffsets);
	        }
	        function countMultiLevel(c) {
	            if (model.isMultiLevelColumn(c) && !c.getCollapsed() && !c.getCompressed()) {
	                return 1 + Math.max.apply(Math, c.children.map(countMultiLevel));
	            }
	            return 1;
	        }
	        var levels = Math.max.apply(Math, columns.map(countMultiLevel));
	        var height = (this.options.histograms ? this.options.headerHistogramHeight : this.options.headerHeight) + (levels - 1) * this.options.headerHeight;
	        if (this.options.autoRotateLabels) {
	            //check if we have overflows
	            var rotatedAny = false;
	            this.$node.selectAll('div.header')
	                .style('height', height + 'px').select('div.lu-label').each(function (d) {
	                var w = this.querySelector('span.lu-label').offsetWidth;
	                var actWidth = d.getWidth();
	                if (w > (actWidth + 30)) {
	                    d3.select(this).style('transform', "rotate(" + that.options.rotationDegree + "deg)");
	                    rotatedAny = true;
	                }
	                else {
	                    d3.select(this).style('transform', null);
	                }
	            });
	            this.$node.selectAll('div.header').style('margin-top', rotatedAny ? this.options.rotationHeight + 'px' : null);
	            height += rotatedAny ? this.options.rotationHeight : 0;
	        }
	        this.$node.style('height', height + 'px');
	    };
	    HeaderRenderer.prototype.createToolbar = function ($node) {
	        var _this = this;
	        var filterDialogs = this.options.filterDialogs, provider = this.data, that = this;
	        var $regular = $node.filter(function (d) { return !(d instanceof model.Ranking); }), $stacked = $node.filter(function (d) { return d instanceof model.StackColumn; }), $multilevel = $node.filter(function (d) { return model.isMultiLevelColumn(d); });
	        //edit weights
	        $stacked.append('i').attr('class', 'fa fa-tasks').attr('title', 'Edit Weights').on('click', function (d) {
	            dialogs.openEditWeightsDialog(d, d3.select(this.parentNode.parentNode));
	            d3.event.stopPropagation();
	        });
	        //rename
	        $regular.append('i').attr('class', 'fa fa-pencil-square-o').attr('title', 'Rename').on('click', function (d) {
	            dialogs.openRenameDialog(d, d3.select(this.parentNode.parentNode));
	            d3.event.stopPropagation();
	        });
	        //clone
	        $regular.append('i').attr('class', 'fa fa-code-fork').attr('title', 'Generate Snapshot').on('click', function (d) {
	            provider.takeSnapshot(d);
	            d3.event.stopPropagation();
	        });
	        //edit link
	        $node.filter(function (d) { return d instanceof model.LinkColumn; }).append('i').attr('class', 'fa fa-external-link').attr('title', 'Edit Link Pattern').on('click', function (d) {
	            dialogs.openEditLinkDialog(d, d3.select(this.parentNode.parentNode), [].concat(d.desc.templates || [], that.options.linkTemplates));
	            d3.event.stopPropagation();
	        });
	        //edit script
	        $node.filter(function (d) { return d instanceof model.ScriptColumn; }).append('i').attr('class', 'fa fa-gears').attr('title', 'Edit Combine Script').on('click', function (d) {
	            dialogs.openEditScriptDialog(d, d3.select(this.parentNode.parentNode));
	            d3.event.stopPropagation();
	        });
	        //filter
	        $node.filter(function (d) { return filterDialogs.hasOwnProperty(d.desc.type); }).append('i').attr('class', 'fa fa-filter').attr('title', 'Filter').on('click', function (d) {
	            filterDialogs[d.desc.type](d, d3.select(this.parentNode.parentNode), provider);
	            d3.event.stopPropagation();
	        });
	        //search
	        $node.filter(function (d) { return _this.options.searchAble(d); }).append('i').attr('class', 'fa fa-search').attr('title', 'Search').on('click', function (d) {
	            dialogs.openSearchDialog(d, d3.select(this.parentNode.parentNode), provider);
	            d3.event.stopPropagation();
	        });
	        //collapse
	        $regular.append('i')
	            .attr('class', 'fa')
	            .classed('fa-toggle-left', function (d) { return !d.getCompressed(); })
	            .classed('fa-toggle-right', function (d) { return d.getCompressed(); })
	            .attr('title', '(Un)Collapse')
	            .on('click', function (d) {
	            d.setCompressed(!d.getCompressed());
	            d3.select(this)
	                .classed('fa-toggle-left', !d.getCompressed())
	                .classed('fa-toggle-right', d.getCompressed());
	            d3.event.stopPropagation();
	        });
	        //compress
	        $multilevel.append('i')
	            .attr('class', 'fa')
	            .classed('fa-compress', function (d) { return !d.getCollapsed(); })
	            .classed('fa-expand', function (d) { return d.getCollapsed(); })
	            .attr('title', 'Compress/Expand')
	            .on('click', function (d) {
	            d.setCollapsed(!d.getCollapsed());
	            d3.select(this)
	                .classed('fa-compress', !d.getCollapsed())
	                .classed('fa-expand', d.getCollapsed());
	            d3.event.stopPropagation();
	        });
	        //remove
	        $node.append('i').attr('class', 'fa fa-times').attr('title', 'Hide').on('click', function (d) {
	            if (d instanceof model.RankColumn) {
	                provider.removeRanking(d.findMyRanker());
	                if (provider.getRankings().length === 0) {
	                    provider.pushRanking();
	                }
	            }
	            else {
	                d.removeMe();
	            }
	            d3.event.stopPropagation();
	        });
	    };
	    HeaderRenderer.prototype.updateFreeze = function (left) {
	        var numColumns = this.options.freezeCols;
	        this.$node.selectAll('div.header')
	            .style('z-index', function (d, i) { return i < numColumns ? 1 : null; })
	            .style('transform', function (d, i) { return i < numColumns ? "translate(" + left + "px,0)" : null; });
	    };
	    HeaderRenderer.prototype.renderColumns = function (columns, shifts, $base, clazz) {
	        var _this = this;
	        if ($base === void 0) { $base = this.$node; }
	        if (clazz === void 0) { clazz = 'header'; }
	        var $headers = $base.selectAll('div.' + clazz).data(columns, function (d) { return d.id; });
	        var $headers_enter = $headers.enter().append('div').attr({
	            'class': clazz
	        })
	            .on('click', function (d) {
	            if (_this.options.manipulative && !d3.event.defaultPrevented && d3.event.currentTarget === d3.event.target) {
	                d.toggleMySorting();
	            }
	        });
	        var $header_enter_div = $headers_enter.append('div').classed('lu-label', true)
	            .on('click', function (d) {
	            if (_this.options.manipulative && !d3.event.defaultPrevented) {
	                d.toggleMySorting();
	            }
	        })
	            .on('dragstart', function (d) {
	            var e = d3.event;
	            e.dataTransfer.effectAllowed = 'copyMove'; //none, copy, copyLink, copyMove, link, linkMove, move, all
	            e.dataTransfer.setData('text/plain', d.label);
	            e.dataTransfer.setData('application/caleydo-lineup-column-ref', d.id);
	            var ref = JSON.stringify(_this.data.toDescRef(d.desc));
	            e.dataTransfer.setData('application/caleydo-lineup-column', ref);
	            if (model.isNumberColumn(d)) {
	                e.dataTransfer.setData('application/caleydo-lineup-column-number', ref);
	                e.dataTransfer.setData('application/caleydo-lineup-column-number-ref', d.id);
	            }
	        });
	        $header_enter_div.append('i').attr('class', 'fa fa sort_indicator');
	        $header_enter_div.append('span').classed('lu-label', true).attr({
	            'draggable': this.options.manipulative
	        });
	        if (this.options.manipulative) {
	            $headers_enter.append('div').classed('handle', true)
	                .call(this.dragHandler)
	                .style('width', this.options.columnPadding + 'px')
	                .call(this.dropHandler);
	            $headers_enter.append('div').classed('toolbar', true).call(this.createToolbar.bind(this));
	        }
	        if (this.options.histograms) {
	            $headers_enter.append('div').classed('histogram', true);
	        }
	        $headers.style({
	            width: function (d, i) { return (shifts[i].width + _this.options.columnPadding) + 'px'; },
	            left: function (d, i) { return shifts[i].offset + 'px'; },
	            'background-color': function (d) { return d.color; }
	        });
	        $headers.attr({
	            'class': function (d) { return (clazz + " " + (d.cssClass || '') + " " + (d.getCompressed() ? 'compressed' : '') + " " + d.headerCssClass + " " + (_this.options.autoRotateLabels ? 'rotateable' : '') + " " + (d.isFiltered() ? 'filtered' : '')); },
	            title: function (d) { return toFullTooltip(d); },
	            'data-id': function (d) { return d.id; },
	        });
	        $headers.select('i.sort_indicator').attr('class', function (d) {
	            var r = d.findMyRanker();
	            if (r && r.getSortCriteria().col === d) {
	                return 'sort_indicator fa fa-sort-' + (r.getSortCriteria().asc ? 'asc' : 'desc');
	            }
	            return 'sort_indicator fa';
	        });
	        $headers.select('span.lu-label').text(function (d) { return d.label; });
	        var that = this;
	        $headers.filter(function (d) { return model.isMultiLevelColumn(d); }).each(function (col) {
	            if (col.getCollapsed() || col.getCompressed()) {
	                d3.select(this).selectAll('div.' + clazz + '_i').remove();
	            }
	            else {
	                var s_shifts = [];
	                col.flatten(s_shifts, 0, 1, that.options.columnPadding);
	                var s_columns = s_shifts.map(function (d) { return d.col; });
	                that.renderColumns(s_columns, s_shifts, d3.select(this), clazz + (clazz.substr(clazz.length - 2) !== '_i' ? '_i' : ''));
	            }
	        }).select('div.lu-label').call(utils.dropAble(['application/caleydo-lineup-column-number-ref', 'application/caleydo-lineup-column-number'], function (data, d, copy) {
	            var col = null;
	            if ('application/caleydo-lineup-column-number-ref' in data) {
	                var id = data['application/caleydo-lineup-column-number-ref'];
	                col = _this.data.find(id);
	                if (copy) {
	                    col = _this.data.clone(col);
	                }
	                else if (col) {
	                    col.removeMe();
	                }
	            }
	            else {
	                var desc = JSON.parse(data['application/caleydo-lineup-column-number']);
	                col = _this.data.create(_this.data.fromDescRef(desc));
	            }
	            return d.push(col) != null;
	        }));
	        if (this.options.histograms) {
	            $headers.filter(function (d) { return model.isCategoricalColumn(d); }).each(function (col) {
	                var $this = d3.select(this).select('div.histogram');
	                var hist = that.histCache.get(col.id);
	                if (hist) {
	                    hist.then(function (stats) {
	                        var $bars = $this.selectAll('div.bar').data(stats.hist);
	                        $bars.enter().append('div').classed('bar', true);
	                        var sx = d3.scale.ordinal().domain(col.categories).rangeBands([0, 100], 0.1);
	                        var sy = d3.scale.linear().domain([0, stats.maxBin]).range([0, 100]);
	                        $bars.style({
	                            left: function (d) { return sx(d.cat) + '%'; },
	                            width: function (d) { return sx.rangeBand() + '%'; },
	                            top: function (d) { return (100 - sy(d.y)) + '%'; },
	                            height: function (d) { return sy(d.y) + '%'; },
	                            'background-color': function (d) { return col.colorOf(d.cat); }
	                        }).attr({
	                            title: function (d) { return (d.cat + ": " + d.y); },
	                            'data-cat': function (d) { return d.cat; }
	                        });
	                        $bars.exit().remove();
	                    });
	                }
	            });
	            $headers.filter(function (d) { return d instanceof model.NumberColumn; }).each(function (col) {
	                var $this = d3.select(this).select('div.histogram');
	                var hist = that.histCache.get(col.id);
	                if (hist) {
	                    hist.then(function (stats) {
	                        var $bars = $this.selectAll('div.bar').data(stats.hist);
	                        $bars.enter().append('div').classed('bar', true);
	                        var sx = d3.scale.ordinal().domain(d3.range(stats.hist.length).map(String)).rangeBands([0, 100], 0.1);
	                        var sy = d3.scale.linear().domain([0, stats.maxBin]).range([0, 100]);
	                        $bars.style({
	                            left: function (d, i) { return sx(String(i)) + '%'; },
	                            width: function (d, i) { return sx.rangeBand() + '%'; },
	                            top: function (d) { return (100 - sy(d.y)) + '%'; },
	                            height: function (d) { return sy(d.y) + '%'; }
	                        }).attr({
	                            title: function (d, i) { return ("Bin " + i + ": " + d.y); },
	                            'data-x': function (d) { return d.x; }
	                        });
	                        $bars.exit().remove();
	                        var $mean = $this.select('div.mean');
	                        if ($mean.empty()) {
	                            $mean = $this.append('div').classed('mean', true);
	                        }
	                        $mean.style('left', (stats.mean * 100) + '%');
	                    });
	                }
	            });
	        }
	        $headers.exit().remove();
	    };
	    return HeaderRenderer;
	}());
	exports.HeaderRenderer = HeaderRenderer;
	var BodyRenderer = (function (_super) {
	    __extends(BodyRenderer, _super);
	    function BodyRenderer(data, parent, slicer, options) {
	        if (options === void 0) { options = {}; }
	        _super.call(this);
	        this.data = data;
	        this.slicer = slicer;
	        this.options = {
	            rowHeight: 20,
	            rowPadding: 1,
	            rowBarPadding: 1,
	            idPrefix: '',
	            slopeWidth: 150,
	            columnPadding: 5,
	            stacked: true,
	            animation: false,
	            animationDuration: 1000,
	            renderers: renderer.renderers(),
	            meanLine: false,
	            actions: [],
	            freezeCols: 0
	        };
	        this.currentFreezeLeft = 0;
	        this.histCache = d3.map();
	        //merge options
	        utils.merge(this.options, options);
	        this.$node = d3.select(parent).append('svg').classed('lu-body', true);
	        this.changeDataStorage(data);
	    }
	    BodyRenderer.prototype.createEventList = function () {
	        return _super.prototype.createEventList.call(this).concat(['hoverChanged', 'renderFinished']);
	    };
	    Object.defineProperty(BodyRenderer.prototype, "node", {
	        get: function () {
	            return this.$node.node();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    BodyRenderer.prototype.setOption = function (key, value) {
	        this.options[key] = value;
	    };
	    BodyRenderer.prototype.changeDataStorage = function (data) {
	        var _this = this;
	        if (this.data) {
	            this.data.on(['dirtyValues.bodyRenderer', 'selectionChanged.bodyRenderer'], null);
	        }
	        this.data = data;
	        data.on('dirtyValues.bodyRenderer', utils.delayedCall(this.update.bind(this), 1));
	        data.on('selectionChanged.bodyRenderer', utils.delayedCall(function (selection, jumpToFirst) {
	            if (jumpToFirst && selection.length > 0) {
	                _this.jumpToSelection();
	            }
	            _this.drawSelection();
	        }, 1));
	    };
	    BodyRenderer.prototype.createContext = function (index_shift) {
	        var options = this.options;
	        return {
	            rowKey: this.options.animation ? this.data.rowKey : undefined,
	            cellY: function (index) {
	                return (index + index_shift) * (options.rowHeight);
	            },
	            cellPrevY: function (index) {
	                return (index + index_shift) * (options.rowHeight);
	            },
	            cellX: function (index) {
	                return 0;
	            },
	            rowHeight: function (index) {
	                return options.rowHeight * (1 - options.rowPadding);
	            },
	            renderer: function (col) {
	                if (col.getCompressed() && model.isNumberColumn(col)) {
	                    return options.renderers.heatmap;
	                }
	                if (col instanceof model.StackColumn && col.getCollapsed()) {
	                    return options.renderers.number;
	                }
	                if (model.isMultiLevelColumn(col) && col.getCollapsed()) {
	                    return options.renderers.string;
	                }
	                var l = options.renderers[col.desc.type];
	                return l || renderer.defaultRenderer();
	            },
	            render: function (col, $this, data, context) {
	                if (context === void 0) { context = this; }
	                //if renderers change delete old stuff
	                var tthis = ($this.node());
	                var old_renderer = tthis.__renderer__;
	                var act_renderer = this.renderer(col);
	                if (old_renderer !== act_renderer) {
	                    $this.selectAll('*').remove();
	                    tthis.__renderer__ = act_renderer;
	                }
	                act_renderer.render($this, col, data, context);
	            },
	            renderCanvas: function (col, ctx, data, context) {
	                if (context === void 0) { context = this; }
	                //dummy impl
	            },
	            showStacked: function (col) {
	                return col instanceof model.StackColumn && options.stacked;
	            },
	            idPrefix: options.idPrefix,
	            animated: function ($sel) { return options.animation ? $sel.transition().duration(options.animationDuration) : $sel; },
	            //show mean line if option is enabled and top level
	            showMeanLine: function (col) { return options.meanLine && model.isNumberColumn(col) && !col.getCompressed() && col.parent instanceof model.Ranking; },
	            option: function (key, default_) { return (key in options) ? options[key] : default_; }
	        };
	    };
	    BodyRenderer.prototype.updateClipPathsImpl = function (r, context, height) {
	        var $base = this.$node.select('defs.body');
	        if ($base.empty()) {
	            $base = this.$node.append('defs').classed('body', true);
	        }
	        //generate clip paths for the text columns to avoid text overflow
	        //see http://stackoverflow.com/questions/L742812/cannot-select-svg-foreignobject-element-in-d3
	        //there is a bug in webkit which present camelCase selectors
	        var textClipPath = $base.selectAll(function () {
	            return this.getElementsByTagName('clipPath');
	        }).data(r, function (d) { return d.id; });
	        textClipPath.enter().append('clipPath')
	            .attr('id', function (d) { return context.idPrefix + 'clipCol' + d.id; })
	            .append('rect').attr({
	            y: 0
	        });
	        textClipPath.exit().remove();
	        textClipPath.select('rect')
	            .attr({
	            x: 0,
	            width: function (d) { return Math.max(d.getWidth() - 5, 0); },
	            height: height
	        });
	    };
	    BodyRenderer.prototype.updateClipPaths = function (rankings, context, height) {
	        var _this = this;
	        var shifts = [], offset = 0;
	        rankings.forEach(function (r) {
	            var w = r.flatten(shifts, offset, 2, _this.options.columnPadding);
	            offset += w + _this.options.slopeWidth;
	        });
	        this.updateClipPathsImpl(shifts.map(function (s) { return s.col; }), context, height);
	        var $elem = this.$node.select('clipPath#c' + context.idPrefix + 'Freeze');
	        if ($elem.empty()) {
	            $elem = this.$node.append('clipPath').attr('id', 'c' + context.idPrefix + 'Freeze').append('rect').attr({
	                y: 0,
	                width: 20000,
	                height: height
	            });
	        }
	        $elem.select('rect').attr({
	            height: height
	        });
	    };
	    BodyRenderer.prototype.renderRankings = function ($body, rankings, orders, shifts, context, height) {
	        var _this = this;
	        var that = this;
	        var dataPromises = orders.map(function (r) { return _this.data.view(r); });
	        var $rankings = $body.selectAll('g.ranking').data(rankings, function (d) { return d.id; });
	        var $rankings_enter = $rankings.enter().append('g').attr({
	            'class': 'ranking',
	            transform: function (d, i) { return 'translate(' + shifts[i].shift + ',0)'; }
	        });
	        $rankings_enter.append('g').attr('class', 'rows');
	        $rankings_enter.append('g').attr('class', 'cols');
	        context.animated($rankings).attr({
	            transform: function (d, i) { return 'translate(' + shifts[i].shift + ',0)'; }
	        });
	        var $cols = $rankings.select('g.cols').selectAll('g.uchild').data(function (d) { return d.children.filter(function (d) { return !d.isHidden(); }); }, function (d) { return d.id; });
	        $cols.enter().append('g').attr('class', 'uchild')
	            .append('g').attr({
	            'class': 'child',
	            transform: function (d, i, j) { return 'translate(' + shifts[j].shifts[i] + ',0)'; }
	        });
	        $cols.exit().remove();
	        $cols = $cols.select('g.child');
	        $cols.attr({
	            'data-index': function (d, i) { return i; }
	        });
	        context.animated($cols).attr({
	            transform: function (d, i, j) {
	                return 'translate(' + shifts[j].shifts[i] + ',0)';
	            }
	        }).each(function (d, i, j) {
	            var $col = d3.select(this);
	            dataPromises[j].then(function (data) {
	                context.render(d, $col, data, context);
	            });
	            if (context.showMeanLine(d)) {
	                var h = that.histCache.get(d.id);
	                if (h) {
	                    h.then(function (stats) {
	                        var $mean = $col.selectAll('line.meanline').data([stats.mean]);
	                        $mean.enter().append('line').attr('class', 'meanline');
	                        $mean.exit().remove();
	                        $mean.attr('x1', d.getWidth() * stats.mean)
	                            .attr('x2', d.getWidth() * stats.mean)
	                            .attr('y2', height);
	                    });
	                }
	            }
	            else {
	                $col.selectAll('line.meanline').remove();
	            }
	        });
	        // wait until all `context.render()` calls have finished
	        Promise.all(dataPromises).then(function (args) {
	            _this.fire('renderFinished');
	        });
	        function mouseOverRow($row, $cols, index, ranking, rankingIndex) {
	            $row.classed('hover', true);
	            var $value_cols = $row.select('g.values').selectAll('g.uchild').data(ranking.children.filter(function (d) { return !d.isHidden(); }), function (d) { return d.id; });
	            $value_cols.enter().append('g').attr({
	                'class': 'uchild'
	            }).append('g').classed('child', true);
	            $value_cols.select('g.child').attr({
	                transform: function (d, i) {
	                    return 'translate(' + shifts[rankingIndex].shifts[i] + ',0)';
	                }
	            }).each(function (d, i) {
	                var _this = this;
	                dataPromises[rankingIndex].then(function (data) {
	                    context.renderer(d).mouseEnter($cols.selectAll('g.child[data-index="' + i + '"]'), d3.select(_this), d, data[index], index, context);
	                });
	            });
	            $value_cols.exit().remove();
	            //data.mouseOver(d, i);
	        }
	        function mouseLeaveRow($row, $cols, index, ranking, rankingIndex) {
	            $row.classed('hover', false);
	            $row.select('g.values').selectAll('g.uchild').each(function (d, i) {
	                var _this = this;
	                dataPromises[rankingIndex].then(function (data) {
	                    context.renderer(d).mouseLeave($cols.selectAll('g.child[data-index="' + i + '"]'), d3.select(_this).select('g.child'), d, data[index], index, context);
	                });
	            }).remove();
	            //data.mouseLeave(d, i);
	        }
	        this.mouseOverItem = function (data_index, hover) {
	            if (hover === void 0) { hover = true; }
	            $rankings.each(function (ranking, rankingIndex) {
	                var $ranking = d3.select(this);
	                var $row = $ranking.selectAll('g.row[data-index="' + data_index + '"]');
	                var $cols = $ranking.select('g.cols');
	                if (!$row.empty()) {
	                    var index = $row.datum().i;
	                    if (hover) {
	                        mouseOverRow($row, $cols, index, ranking, rankingIndex);
	                    }
	                    else {
	                        mouseLeaveRow($row, $cols, index, ranking, rankingIndex);
	                    }
	                }
	            });
	            //set clip path for frozen columns
	            that.updateFrozenRows();
	        };
	        var $rows = $rankings.select('g.rows').selectAll('g.row').data(function (d, i) { return orders[i].map(function (d, i) { return ({ d: d, i: i }); }); });
	        var $rows_enter = $rows.enter().append('g').attr({
	            'class': 'row'
	        });
	        $rows_enter.append('rect').attr({
	            'class': 'bg'
	        });
	        $rows_enter.append('g').attr({ 'class': 'values' });
	        $rows_enter.on('mouseenter', function (data_index) {
	            _this.mouseOver(data_index.d, true);
	        }).on('mouseleave', function (data_index) {
	            _this.mouseOver(data_index.d, false);
	        }).on('click', function (data_index) {
	            _this.select(data_index.d, d3.event.ctrlKey);
	        });
	        $rows.attr({
	            'data-index': function (d) { return d.d; }
	        }).classed('selected', function (d) { return _this.data.isSelected(d.d); });
	        $rows.select('rect').attr({
	            y: function (d) { return context.cellY(d.i); },
	            height: function (d) { return context.rowHeight(d.i); },
	            width: function (d, i, j) { return shifts[j].width; },
	            'class': function (d, i) { return 'bg ' + (i % 2 === 0 ? 'even' : 'odd'); }
	        });
	        $rows.exit().remove();
	        $rankings.exit().remove();
	    };
	    BodyRenderer.prototype.jumpToSelection = function () {
	        var _this = this;
	        var indices = this.data.getSelection();
	        var rankings = this.data.getRankings();
	        if (indices.length <= 0 || rankings.length <= 0) {
	            return;
	        }
	        var order = rankings[0].getOrder();
	        var visibleRange = this.slicer(0, order.length, function (i) { return i * _this.options.rowHeight; });
	        var visibleOrder = order.slice(visibleRange.from, visibleRange.to);
	        //if any of the selected indices is in the visible range - done
	        if (indices.some(function (d) { return visibleOrder.indexOf(d) >= 0; })) {
	            return;
	        }
	        //find the closest not visible one in the indices list
	        //
	    };
	    BodyRenderer.prototype.select = function (dataIndex, additional) {
	        if (additional === void 0) { additional = false; }
	        var selected = this.data.toggleSelection(dataIndex, additional);
	        this.$node.selectAll('g.row[data-index="' + dataIndex + '"], line.slope[data-index="' + dataIndex + '"]').classed('selected', selected);
	    };
	    BodyRenderer.prototype.hasAnySelectionColumn = function () {
	        return this.data.getRankings().some(function (r) { return r.children.some(function (c) { return c instanceof model.SelectionColumn && !c.isHidden(); }); });
	    };
	    BodyRenderer.prototype.drawSelection = function () {
	        if (this.hasAnySelectionColumn()) {
	            this.update();
	        }
	        var indices = this.data.getSelection();
	        if (indices.length === 0) {
	            this.$node.selectAll('g.row.selected, line.slope.selected').classed('selected', false);
	        }
	        else {
	            var s = d3.set(indices);
	            this.$node.selectAll('g.row').classed('selected', function (d) { return s.has(String(d.d)); });
	            this.$node.selectAll('line.slope').classed('selected', function (d) { return s.has(String(d.data_index)); });
	        }
	    };
	    BodyRenderer.prototype.mouseOver = function (dataIndex, hover) {
	        if (hover === void 0) { hover = true; }
	        this.fire('hoverChanged', hover ? dataIndex : -1);
	        this.mouseOverItem(dataIndex, hover);
	        //update the slope graph
	        this.$node.selectAll('line.slope[data-index="' + dataIndex + '"]').classed('hover', hover);
	    };
	    BodyRenderer.prototype.renderSlopeGraphs = function ($body, rankings, orders, shifts, context) {
	        var _this = this;
	        var slopes = orders.slice(1).map(function (d, i) { return ({ left: orders[i], left_i: i, right: d, right_i: i + 1 }); });
	        var $slopes = $body.selectAll('g.slopegraph').data(slopes);
	        $slopes.enter().append('g').attr({
	            'class': 'slopegraph'
	        });
	        $slopes.attr({
	            transform: function (d, i) { return 'translate(' + (shifts[i + 1].shift - _this.options.slopeWidth) + ',0)'; }
	        });
	        var $lines = $slopes.selectAll('line.slope').data(function (d, i) {
	            var cache = {};
	            d.right.forEach(function (data_index, pos) {
	                cache[data_index] = pos;
	            });
	            return d.left.map(function (data_index, pos) { return ({
	                data_index: data_index,
	                lpos: pos,
	                rpos: cache[data_index]
	            }); }).filter(function (d) { return d.rpos != null; });
	        });
	        $lines.enter().append('line').attr({
	            'class': 'slope',
	            x2: this.options.slopeWidth
	        }).on('mouseenter', function (d) {
	            _this.mouseOver(d.data_index, true);
	        }).on('mouseleave', function (d) {
	            _this.mouseOver(d.data_index, false);
	        });
	        $lines.attr({
	            'data-index': function (d) { return d.data_index; }
	        });
	        $lines.attr({
	            y1: function (d) {
	                return context.rowHeight(d.lpos) * 0.5 + context.cellY(d.lpos);
	            },
	            y2: function (d) {
	                return context.rowHeight(d.rpos) * 0.5 + context.cellY(d.rpos);
	            }
	        });
	        $lines.exit().remove();
	        $slopes.exit().remove();
	    };
	    BodyRenderer.prototype.updateFreeze = function (left) {
	        var _this = this;
	        var numColumns = this.options.freezeCols;
	        var $cols = this.$node.select('g.cols');
	        var $n = this.$node.select('#c' + this.options.idPrefix + 'Freeze').select('rect');
	        var $col = $cols.select("g.child[data-index=\"" + numColumns + "\"]");
	        if ($col.empty()) {
	            //use the last one
	            $col = $cols.select('g.child:last-of-type');
	        }
	        var x = d3.transform($col.attr('transform') || '').translate[0];
	        $n.attr('x', left + x);
	        $cols.selectAll('g.uchild').attr({
	            'clip-path': function (d, i) { return i < numColumns ? null : 'url(#c' + _this.options.idPrefix + 'Freeze)'; },
	            'transform': function (d, i) { return i < numColumns ? 'translate(' + left + ',0)' : null; }
	        });
	        this.currentFreezeLeft = left;
	        //update all mouse over rows and selected rows with
	        this.updateFrozenRows();
	    };
	    BodyRenderer.prototype.updateFrozenRows = function () {
	        var _this = this;
	        var numColumns = this.options.freezeCols;
	        if (numColumns <= 0) {
	            return;
	        }
	        var left = this.currentFreezeLeft;
	        var $rows = this.$node.select('g.rows');
	        $rows.select('g.row.hover g.values').selectAll('g.uchild').attr({
	            'clip-path': function (d, i) { return i < numColumns ? null : 'url(#c' + _this.options.idPrefix + 'Freeze)'; },
	            'transform': function (d, i) { return i < numColumns ? 'translate(' + left + ',0)' : null; }
	        });
	    };
	    /**
	     * render the body
	     */
	    BodyRenderer.prototype.update = function () {
	        var _this = this;
	        var rankings = this.data.getRankings();
	        var maxElems = d3.max(rankings, function (d) { return d.getOrder().length; }) || 0;
	        var height = this.options.rowHeight * maxElems;
	        var visibleRange = this.slicer(0, maxElems, function (i) { return i * _this.options.rowHeight; });
	        var orderSlicer = function (order) {
	            if (visibleRange.from === 0 && order.length <= visibleRange.to) {
	                return order;
	            }
	            return order.slice(visibleRange.from, Math.min(order.length, visibleRange.to));
	        };
	        var orders = rankings.map(function (r) { return orderSlicer(r.getOrder()); });
	        var context = this.createContext(visibleRange.from);
	        //compute offsets and shifts for individual rankings and columns inside the rankings
	        var offset = 0, shifts = rankings.map(function (d, i) {
	            var r = offset;
	            offset += _this.options.slopeWidth;
	            var o2 = 0, shift2 = d.children.filter(function (d) { return !d.isHidden(); }).map(function (o) {
	                var r = o2;
	                o2 += (o.getCompressed() ? model.Column.COMPRESSED_WIDTH : o.getWidth()) + _this.options.columnPadding;
	                if (model.isMultiLevelColumn(o) && !o.getCollapsed() && !o.getCompressed()) {
	                    o2 += _this.options.columnPadding * (o.length - 1);
	                }
	                return r;
	            });
	            offset += o2;
	            return {
	                shift: r,
	                shifts: shift2,
	                width: o2
	            };
	        });
	        this.$node.attr({
	            width: Math.max(0, offset - this.options.slopeWidth),
	            height: height
	        });
	        this.updateClipPaths(rankings, context, height);
	        var $body = this.$node.select('g.body');
	        if ($body.empty()) {
	            $body = this.$node.append('g').classed('body', true);
	        }
	        this.renderRankings($body, rankings, orders, shifts, context, height);
	        this.renderSlopeGraphs($body, rankings, orders, shifts, context);
	    };
	    return BodyRenderer;
	}(utils.AEventDispatcher));
	exports.BodyRenderer = BodyRenderer;
	var BodyCanvasRenderer = (function (_super) {
	    __extends(BodyCanvasRenderer, _super);
	    function BodyCanvasRenderer(data, parent, slicer, options) {
	        if (options === void 0) { options = {}; }
	        _super.call(this);
	        this.data = data;
	        this.slicer = slicer;
	        this.options = {
	            rowHeight: 20,
	            rowPadding: 1,
	            rowBarPadding: 1,
	            idPrefix: '',
	            slopeWidth: 150,
	            columnPadding: 5,
	            stacked: true,
	            renderers: renderer.renderers(),
	            meanLine: false,
	            freezeCols: 0
	        };
	        this.histCache = d3.map();
	        //merge options
	        utils.merge(this.options, options);
	        this.$node = d3.select(parent).append('canvas').classed('lu-canvas.body', true);
	        this.changeDataStorage(data);
	    }
	    BodyCanvasRenderer.prototype.createEventList = function () {
	        return _super.prototype.createEventList.call(this).concat(['hoverChanged']);
	    };
	    Object.defineProperty(BodyCanvasRenderer.prototype, "node", {
	        get: function () {
	            return this.$node.node();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    BodyCanvasRenderer.prototype.setOption = function (key, value) {
	        this.options[key] = value;
	    };
	    BodyCanvasRenderer.prototype.updateFreeze = function (left) {
	        //dummy impl
	    };
	    BodyCanvasRenderer.prototype.select = function (dataIndex, additional) {
	        if (additional === void 0) { additional = false; }
	        //dummy impl
	    };
	    BodyCanvasRenderer.prototype.changeDataStorage = function (data) {
	        if (this.data) {
	            this.data.on(['dirtyValues.bodyRenderer', 'selectionChanged.bodyRenderer'], null);
	        }
	        this.data = data;
	        data.on('dirtyValues.bodyRenderer', utils.delayedCall(this.update.bind(this), 1));
	        //data.on('selectionChanged.bodyRenderer', utils.delayedCall(this.drawSelection.bind(this), 1));
	    };
	    BodyCanvasRenderer.prototype.createContext = function (index_shift) {
	        var options = this.options;
	        return {
	            rowKey: undefined,
	            cellY: function (index) {
	                return (index + index_shift) * (options.rowHeight);
	            },
	            cellPrevY: function (index) {
	                return (index + index_shift) * (options.rowHeight);
	            },
	            cellX: function (index) {
	                return 0;
	            },
	            rowHeight: function (index) {
	                return options.rowHeight * (1 - options.rowPadding);
	            },
	            renderer: function (col) {
	                if (col.getCompressed() && model.isNumberColumn(col)) {
	                    return options.renderers.heatmap;
	                }
	                if (col instanceof model.StackColumn && col.getCollapsed()) {
	                    return options.renderers.number;
	                }
	                if (model.isMultiLevelColumn(col) && col.getCollapsed()) {
	                    return options.renderers.string;
	                }
	                var l = options.renderers[col.desc.type];
	                return l || renderer.defaultRenderer();
	            },
	            render: function (col, $this, data, context) {
	                if (context === void 0) { context = this; }
	                //dummy impl
	            },
	            renderCanvas: function (col, ctx, data, context) {
	                if (context === void 0) { context = this; }
	                var act_renderer = this.renderer(col);
	                act_renderer.renderCanvas(ctx, col, data, context);
	            },
	            showStacked: function (col) {
	                return col instanceof model.StackColumn && options.stacked;
	            },
	            idPrefix: options.idPrefix,
	            animated: function ($sel) { return $sel; },
	            //show mean line if option is enabled and top level
	            showMeanLine: function (col) { return options.meanLine && model.isNumberColumn(col) && !col.getCompressed() && col.parent instanceof model.Ranking; },
	            option: function (key, default_) { return (key in options) ? options[key] : default_; }
	        };
	    };
	    BodyCanvasRenderer.prototype.renderRankings = function (ctx, rankings, orders, shifts, context, height) {
	        var _this = this;
	        var dataPromises = orders.map(function (r) { return _this.data.view(r); });
	        ctx.save();
	        rankings.forEach(function (ranking, j) {
	            dataPromises[j].then(function (data) {
	                ctx.save();
	                ctx.translate(shifts[j].shift, 0);
	                ctx.save();
	                ctx.fillStyle = '#f7f7f7';
	                orders[j].forEach(function (order, i) {
	                    if (i % 2 === 0) {
	                        ctx.fillRect(0, context.cellY(i), shifts[j].width, context.rowHeight(i));
	                    }
	                });
	                ctx.restore();
	                ranking.children.forEach(function (child, i) {
	                    ctx.save();
	                    ctx.translate(shifts[j].shifts[i], 0);
	                    context.renderCanvas(child, ctx, data, context);
	                    ctx.restore();
	                });
	                ctx.restore();
	            });
	        });
	        ctx.restore();
	    };
	    BodyCanvasRenderer.prototype.renderSlopeGraphs = function (ctx, rankings, orders, shifts, context) {
	        var _this = this;
	        var slopes = orders.slice(1).map(function (d, i) { return ({ left: orders[i], left_i: i, right: d, right_i: i + 1 }); });
	        ctx.save();
	        ctx.fillStyle = 'darkgray';
	        slopes.forEach(function (slope, i) {
	            ctx.save();
	            ctx.translate(shifts[i + 1].shift - _this.options.slopeWidth, 0);
	            var cache = {};
	            slope.right.forEach(function (data_index, pos) {
	                cache[data_index] = pos;
	            });
	            var lines = slope.left.map(function (data_index, pos) { return ({
	                data_index: data_index,
	                lpos: pos,
	                rpos: cache[data_index]
	            }); }).filter(function (d) { return d.rpos != null; });
	            ctx.beginPath();
	            lines.forEach(function (line) {
	                ctx.moveTo(0, context.rowHeight(line.lpos) * 0.5 + context.cellY(line.lpos));
	                ctx.lineTo(_this.options.slopeWidth, context.rowHeight(line.rpos) * 0.5 + context.cellY(line.rpos));
	            });
	            ctx.stroke();
	            ctx.restore();
	        });
	        ctx.restore();
	    };
	    /**
	     * render the body
	     */
	    BodyCanvasRenderer.prototype.update = function () {
	        var _this = this;
	        var rankings = this.data.getRankings();
	        var maxElems = d3.max(rankings, function (d) { return d.getOrder().length; }) || 0;
	        var height = this.options.rowHeight * maxElems;
	        var visibleRange = this.slicer(0, maxElems, function (i) { return i * _this.options.rowHeight; });
	        var orderSlicer = function (order) {
	            if (visibleRange.from === 0 && order.length <= visibleRange.to) {
	                return order;
	            }
	            return order.slice(visibleRange.from, Math.min(order.length, visibleRange.to));
	        };
	        var orders = rankings.map(function (r) { return orderSlicer(r.getOrder()); });
	        var context = this.createContext(visibleRange.from);
	        //compute offsets and shifts for individual rankings and columns inside the rankings
	        var offset = 0, shifts = rankings.map(function (d, i) {
	            var r = offset;
	            offset += _this.options.slopeWidth;
	            var o2 = 0, shift2 = d.children.filter(function (d) { return !d.isHidden(); }).map(function (o) {
	                var r = o2;
	                o2 += (o.getCompressed() ? model.Column.COMPRESSED_WIDTH : o.getWidth()) + _this.options.columnPadding;
	                if (o instanceof model.StackColumn && !o.getCollapsed() && !o.getCompressed()) {
	                    o2 += _this.options.columnPadding * (o.length - 1);
	                }
	                return r;
	            });
	            offset += o2;
	            return {
	                shift: r,
	                shifts: shift2,
	                width: o2
	            };
	        });
	        this.$node.attr({
	            width: offset,
	            height: height
	        });
	        var ctx = this.$node.node().getContext('2d');
	        ctx.font = '10pt Times New Roman';
	        ctx.textBaseline = 'top';
	        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	        this.renderRankings(ctx, rankings, orders, shifts, context, height);
	        this.renderSlopeGraphs(ctx, rankings, orders, shifts, context);
	    };
	    return BodyCanvasRenderer;
	}(utils.AEventDispatcher));
	exports.BodyCanvasRenderer = BodyCanvasRenderer;
	//# sourceMappingURL=ui.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * a set of simple dialogs for LineUp
	 *
	 * Created by Samuel Gratzl on 24.08.2015.
	 */
	"use strict";
	var model = __webpack_require__(6);
	var utils = __webpack_require__(8);
	var mappingeditor = __webpack_require__(13);
	function dialogForm(title, body, buttonsWithLabel) {
	    if (buttonsWithLabel === void 0) { buttonsWithLabel = false; }
	    return '<span style="font-weight: bold" class="lu-popup-title">' + title + '</span>' +
	        '<form onsubmit="return false">' +
	        body + '<button type = "submit" class="ok fa fa-check" title="ok"></button>' +
	        '<button type = "reset" class="cancel fa fa-times" title="cancel"></button>' +
	        '<button type = "button" class="reset fa fa-undo" title="reset"></button></form>';
	}
	exports.dialogForm = dialogForm;
	/**
	 * creates a simple popup dialog under the given attachment
	 * @param attachment
	 * @param title
	 * @param body
	 * @returns {Selection<any>}
	 */
	function makePopup(attachement, title, body) {
	    var pos = utils.offset(attachement.node());
	    var $popup = d3.select('body').append('div')
	        .attr({
	        'class': 'lu-popup2'
	    }).style({
	        left: pos.left + 'px',
	        top: pos.top + 'px'
	    }).html(dialogForm(title, body));
	    function movePopup() {
	        //.style("left", (this.parentElement.offsetLeft + (<any>d3.event).dx) + 'px')
	        //.style("top", (this.parentElement.offsetTop + d3.event.dy) + 'px');
	        //const mouse = d3.mouse(this.parentElement);
	        $popup.style({
	            left: (this.parentElement.offsetLeft + d3.event.dx) + 'px',
	            top: (this.parentElement.offsetTop + d3.event.dy) + 'px'
	        });
	    }
	    $popup.select('span.lu-popup-title').call(d3.behavior.drag().on('drag', movePopup));
	    $popup.on('keydown', function () {
	        if (d3.event.which === 27) {
	            $popup.remove();
	        }
	    });
	    var auto = $popup.select('input[autofocus]').node();
	    if (auto) {
	        auto.focus();
	    }
	    return $popup;
	}
	exports.makePopup = makePopup;
	/**
	 * opens a rename dialog for the given column
	 * @param column the column to rename
	 * @param $header the visual header element of this column
	 */
	function openRenameDialog(column, $header) {
	    var popup = makePopup($header, 'Rename Column', "\n    <input type=\"text\" size=\"15\" value=\"" + column.label + "\" required=\"required\" autofocus=\"autofocus\"><br>\n    <input type=\"color\" size=\"15\" value=\"" + column.color + "\" required=\"required\"><br>\n    <textarea rows=\"5\">" + column.description + "</textarea><br>");
	    popup.select('.ok').on('click', function () {
	        var newValue = popup.select('input[type="text"]').property('value');
	        var newColor = popup.select('input[type="color"]').property('value');
	        var newDescription = popup.select('textarea').property('value');
	        column.setMetaData({ label: newValue, color: newColor, description: newDescription });
	        popup.remove();
	    });
	    popup.select('.cancel').on('click', function () {
	        popup.remove();
	    });
	}
	exports.openRenameDialog = openRenameDialog;
	/**
	 * opens a dialog for editing the link of a column
	 * @param column the column to rename
	 * @param $header the visual header element of this column
	 */
	function openEditLinkDialog(column, $header, templates) {
	    if (templates === void 0) { templates = []; }
	    var t = "<input type=\"text\" size=\"15\" value=\"" + column.getLink() + "\" required=\"required\" autofocus=\"autofocus\" " + (templates.length > 0 ? 'list="lineupPatternList"' : '') + "><br>";
	    if (templates.length > 0) {
	        t += '<datalist id="lineupPatternList">' + templates.map(function (t) { return ("<option value=\"" + t + "\">"); }) + '</datalist>';
	    }
	    var popup = makePopup($header, 'Edit Link ($ as Placeholder)', t);
	    popup.select('.ok').on('click', function () {
	        var newValue = popup.select('input[type="text"]').property('value');
	        column.setLink(newValue);
	        popup.remove();
	    });
	    popup.select('.cancel').on('click', function () {
	        popup.remove();
	    });
	}
	exports.openEditLinkDialog = openEditLinkDialog;
	/**
	 * opens a search dialog for the given column
	 * @param column the column to rename
	 * @param $header the visual header element of this column
	 * @param provider the data provider for the actual search
	 */
	function openSearchDialog(column, $header, provider) {
	    var popup = makePopup($header, 'Search', '<input type="text" size="15" value="" required="required" autofocus="autofocus"><br><label><input type="checkbox">RegExp</label><br>');
	    popup.select('input[type="text"]').on('input', function () {
	        var search = d3.event.target.value;
	        if (search.length >= 3) {
	            var isRegex = popup.select('input[type="checkbox"]').property('checked');
	            if (isRegex) {
	                search = new RegExp(search);
	            }
	            provider.searchSelect(search, column);
	        }
	    });
	    function updateImpl() {
	        var search = popup.select('input[type="text"]').property('value');
	        var isRegex = popup.select('input[type="text"]').property('checked');
	        if (search.length > 0) {
	            if (isRegex) {
	                search = new RegExp(search);
	            }
	            provider.searchSelect(search, column);
	        }
	        popup.remove();
	    }
	    popup.select('input[type="checkbox"]').on('change', updateImpl);
	    popup.select('.ok').on('click', updateImpl);
	    popup.select('.cancel').on('click', function () {
	        popup.remove();
	    });
	}
	exports.openSearchDialog = openSearchDialog;
	/**
	 * opens a dialog for editing the weights of a stack column
	 * @param column the column to filter
	 * @param $header the visual header element of this column
	 */
	function openEditWeightsDialog(column, $header) {
	    var weights = column.getWeights(), children = column.children.map(function (d, i) { return ({ col: d, weight: weights[i] * 100 }); });
	    //map weights to pixels
	    var scale = d3.scale.linear().domain([0, 100]).range([0, 120]);
	    var $popup = makePopup($header, 'Edit Weights', '<table></table>');
	    //show as a table with inputs and bars
	    var $rows = $popup.select('table').selectAll('tr').data(children);
	    var $rows_enter = $rows.enter().append('tr');
	    $rows_enter.append('td')
	        .append('input').attr({
	        type: 'number',
	        value: function (d) { return d.weight; },
	        min: 0,
	        max: 100,
	        size: 5
	    }).on('input', function (d) {
	        d.weight = +this.value;
	        redraw();
	    });
	    $rows_enter.append('td').append('div')
	        .attr('class', function (d) { return 'bar ' + d.col.cssClass; })
	        .style('background-color', function (d) { return d.col.color; });
	    $rows_enter.append('td').text(function (d) { return d.col.label; });
	    function redraw() {
	        $rows.select('.bar').transition().style('width', function (d) { return scale(d.weight) + 'px'; });
	    }
	    redraw();
	    $popup.select('.cancel').on('click', function () {
	        column.setWeights(weights);
	        $popup.remove();
	    });
	    $popup.select('.reset').on('click', function () {
	        children.forEach(function (d, i) { return d.weight = weights[i] * 100; });
	        $rows.select('input').property('value', function (d) { return d.weight; });
	        redraw();
	    });
	    $popup.select('.ok').on('click', function () {
	        column.setWeights(children.map(function (d) { return d.weight; }));
	        $popup.remove();
	    });
	}
	exports.openEditWeightsDialog = openEditWeightsDialog;
	/**
	 * flags the header to be filtered
	 * @param $header
	 * @param filtered
	 */
	function markFiltered($header, filtered) {
	    if (filtered === void 0) { filtered = false; }
	    $header.classed('filtered', filtered);
	}
	function sortbyName(prop) {
	    return function (a, b) {
	        var av = a[prop], bv = b[prop];
	        if (av.toLowerCase() < bv.toLowerCase()) {
	            return -1;
	        }
	        if (av.toLowerCase() > bv.toLowerCase()) {
	            return 1;
	        }
	        return 0;
	    };
	}
	/**
	 * opens a dialog for filtering a categorical column
	 * @param column the column to rename
	 * @param $header the visual header element of this column
	 */
	function openCategoricalFilter(column, $header) {
	    var bak = column.getFilter() || [];
	    var popup = makePopup($header, 'Edit Filter', '<div class="selectionTable"><table><thead><th class="selectAll"></th><th>Category</th></thead><tbody></tbody></table></div>');
	    // list all data rows !
	    var colors = column.categoryColors, labels = column.categoryLabels;
	    var trData = column.categories.map(function (d, i) {
	        return { cat: d, label: labels[i], isChecked: bak.length === 0 || bak.indexOf(d) >= 0, color: colors[i] };
	    }).sort(sortbyName('label'));
	    var $rows = popup.select('tbody').selectAll('tr').data(trData);
	    var $rows_enter = $rows.enter().append('tr');
	    $rows_enter.append('td').attr('class', 'checkmark');
	    $rows_enter.append('td').attr('class', 'datalabel').text(function (d) { return d.label; });
	    $rows_enter.on('click', function (d) {
	        d.isChecked = !d.isChecked;
	        redraw();
	    });
	    function redraw() {
	        $rows.select('.checkmark').html(function (d) { return '<i class="fa fa-' + ((d.isChecked) ? 'check-' : '') + 'square-o"></i>'; });
	        $rows.select('.datalabel').style('opacity', function (d) { return d.isChecked ? '1.0' : '.8'; });
	    }
	    redraw();
	    var isCheckedAll = true;
	    function redrawSelectAll() {
	        popup.select('.selectAll').html(function (d) { return '<i class="fa fa-' + ((isCheckedAll) ? 'check-' : '') + 'square-o"></i>'; });
	        popup.select('thead').on('click', function (d) {
	            isCheckedAll = !isCheckedAll;
	            trData.forEach(function (row) { return row.isChecked = isCheckedAll; });
	            redraw();
	            redrawSelectAll();
	        });
	    }
	    redrawSelectAll();
	    function updateData(filter) {
	        markFiltered($header, filter && filter.length > 0 && filter.length < trData.length);
	        column.setFilter(filter);
	    }
	    popup.select('.cancel').on('click', function () {
	        updateData(bak);
	        popup.remove();
	    });
	    popup.select('.reset').on('click', function () {
	        trData.forEach(function (d) { return d.isChecked = true; });
	        redraw();
	        updateData(null);
	    });
	    popup.select('.ok').on('click', function () {
	        var f = trData.filter(function (d) { return d.isChecked; }).map(function (d) { return d.cat; });
	        if (f.length === trData.length) {
	            f = [];
	        }
	        updateData(f);
	        popup.remove();
	    });
	}
	/**
	 * opens a dialog for filtering a string column
	 * @param column the column to filter
	 * @param $header the visual header element of this column
	 */
	function openStringFilter(column, $header) {
	    var bak = column.getFilter() || '', bakMissing = bak === model.StringColumn.FILTER_MISSING;
	    if (bakMissing) {
	        bak = '';
	    }
	    var $popup = makePopup($header, 'Filter', "<input type=\"text\" placeholder=\"containing...\" autofocus=\"true\" size=\"15\" value=\"" + ((bak instanceof RegExp) ? bak.source : bak) + "\" autofocus=\"autofocus\">\n    <br><label><input type=\"checkbox\" " + ((bak instanceof RegExp) ? 'checked="checked"' : '') + ">RegExp</label><br><label><input class=\"lu_filter_missing\" type=\"checkbox\" " + (bakMissing ? 'checked="checked"' : '') + ">Filter Missing</label>\n    <br>");
	    function updateData(filter) {
	        markFiltered($header, (filter && filter !== ''));
	        column.setFilter(filter);
	    }
	    function updateImpl(force) {
	        //get value
	        var search = $popup.select('input[type="text"]').property('value');
	        var filterMissing = $popup.select('input[type="checkbox"].lu_filter_missing').property('checked');
	        if (filterMissing && search === '') {
	            search = model.StringColumn.FILTER_MISSING;
	        }
	        if (search === '') {
	            updateData(search);
	            return;
	        }
	        if (search.length >= 3 || force) {
	            var isRegex = $popup.select('input[type="checkbox"]:first-of-type').property('checked');
	            if (isRegex && search !== model.StringColumn.FILTER_MISSING) {
	                search = new RegExp(search);
	            }
	            updateData(search);
	        }
	    }
	    $popup.selectAll('input[type="checkbox"]').on('change', updateImpl);
	    $popup.select('input[type="text"]').on('input', updateImpl);
	    $popup.select('.cancel').on('click', function () {
	        $popup.select('input[type="text"]').property('value', bak || '');
	        $popup.select('input[type="checkbox"]:first-of-type').property('checked', bak instanceof RegExp ? 'checked' : null);
	        $popup.select('input[type="checkbox"].lu_filter_missing').property('checked', bakMissing ? 'checked' : null);
	        updateData(bak);
	        $popup.remove();
	    });
	    $popup.select('.reset').on('click', function () {
	        $popup.select('input[type="text"]').property('value', '');
	        $popup.selectAll('input[type="checkbox"]').property('checked', null);
	        updateData(null);
	    });
	    $popup.select('.ok').on('click', function () {
	        updateImpl(true);
	        $popup.remove();
	    });
	}
	/**
	 * opens a dialog for filtering a boolean column
	 * @param column the column to filter
	 * @param $header the visual header element of this column
	 */
	function openBooleanFilter(column, $header) {
	    var bak = column.getFilter();
	    var $popup = makePopup($header, 'Filter', "<label><input type=\"radio\" name=\"boolean_check\" value=\"null\" " + (bak === null ? 'checked="checked"' : '') + ">No Filter</label><br>\n     <label><input type=\"radio\" name=\"boolean_check\" value=\"true\" " + (bak === true ? 'checked="checked"' : '') + ">True</label><br>\n     <label><input type=\"radio\" name=\"boolean_check\" value=\"false\" " + (bak === false ? 'checked="checked"' : '') + ">False</label>\n    <br>");
	    function updateData(filter) {
	        markFiltered($header, (filter !== null));
	        column.setFilter(filter);
	    }
	    function updateImpl(force) {
	        //get value
	        var isTrue = $popup.select('input[type="radio"][value="true"]').property('checked');
	        var isFalse = $popup.select('input[type="radio"][value="false"]').property('checked');
	        updateData(isTrue ? true : (isFalse ? false : null));
	    }
	    $popup.selectAll('input[type="radio"]').on('change', updateImpl);
	    $popup.select('.cancel').on('click', function () {
	        updateData(bak);
	        $popup.remove();
	    });
	    $popup.select('.reset').on('click', function () {
	        var v = bak === null ? 'null' : String(bak);
	        $popup.selectAll('input[type="radio"]').property('checked', function () {
	            return this.value === v;
	        });
	        updateData(null);
	    });
	    $popup.select('.ok').on('click', function () {
	        updateImpl(true);
	        $popup.remove();
	    });
	}
	/**
	 * opens a dialog for editing the script code
	 * @param column the column to edit
	 * @param $header the visual header element of this column
	 */
	function openEditScriptDialog(column, $header) {
	    var bak = column.getScript();
	    var $popup = makePopup($header, 'Edit Script', "Parameters: <code>values: number[], children: Column[]</code><br>\n      <textarea autofocus=\"true\" rows=\"5\" autofocus=\"autofocus\" style=\"width: 95%;\">" + column.getScript() + "</textarea><br>");
	    function updateData(script) {
	        column.setScript(script);
	    }
	    function updateImpl() {
	        //get value
	        var script = $popup.select('textarea').property('value');
	        updateData(script);
	    }
	    $popup.select('.cancel').on('click', function () {
	        $popup.select('textarea').property('value', bak);
	        updateData(bak);
	        $popup.remove();
	    });
	    $popup.select('.reset').on('click', function () {
	        $popup.select('textarea').property('value', model.ScriptColumn.DEFAULT_SCRIPT);
	        updateData(model.ScriptColumn.DEFAULT_SCRIPT);
	    });
	    $popup.select('.ok').on('click', function () {
	        updateImpl();
	        $popup.remove();
	    });
	}
	exports.openEditScriptDialog = openEditScriptDialog;
	/**
	 * opens the mapping editor for a given NumberColumn
	 * @param column the column to rename
	 * @param $header the visual header element of this column
	 * @param data the data provider for illustrating the mapping by example
	 */
	function openMappingEditor(column, $header, data) {
	    var pos = utils.offset($header.node()), bak = column.getMapping(), original = column.getOriginalMapping(), bakfilter = column.getFilter(), act = bak.clone(), actfilter = bakfilter;
	    var popup = d3.select('body').append('div')
	        .attr({
	        'class': 'lu-popup'
	    }).style({
	        left: pos.left + 'px',
	        top: pos.top + 'px'
	    })
	        .html(dialogForm('Change Mapping', '<div class="mappingArea"></div>'));
	    function applyMapping(newscale, filter) {
	        act = newscale;
	        actfilter = filter;
	        markFiltered($header, !newscale.eq(original) || (bakfilter.min !== filter.min || bakfilter.max !== filter.min));
	        column.setMapping(newscale);
	        column.setFilter(filter);
	    }
	    var editorOptions = {
	        callback: applyMapping,
	        triggerCallback: 'dragend'
	    };
	    var data_sample = data.mappingSample(column);
	    var editor = mappingeditor.create(popup.select('.mappingArea').node(), act, original, actfilter, data_sample, editorOptions);
	    popup.select('.ok').on('click', function () {
	        applyMapping(editor.scale, editor.filter);
	        popup.remove();
	    });
	    popup.select('.cancel').on('click', function () {
	        column.setMapping(bak);
	        markFiltered($header, !bak.eq(original));
	        popup.remove();
	    });
	    popup.select('.reset').on('click', function () {
	        bak = original;
	        act = bak.clone();
	        bakfilter = { min: -Infinity, max: +Infinity };
	        actfilter = bakfilter;
	        applyMapping(act, actfilter);
	        popup.selectAll('.mappingArea *').remove();
	        editor = mappingeditor.create(popup.select('.mappingArea').node(), act, original, actfilter, data_sample, editorOptions);
	    });
	}
	/**
	 * opens the mapping editor for a given CategoricalNumberColumn, i.e. to map categories to numbers
	 * @param column the column to rename
	 * @param $header the visual header element of this column
	 */
	function openCategoricalMappingEditor(column, $header) {
	    var bak = column.getFilter() || [];
	    var scale = d3.scale.linear().domain([0, 100]).range([0, 120]);
	    var $popup = makePopup($header, 'Edit Categorical Mapping', '<div class="selectionTable"><table><thead><th class="selectAll"></th><th colspan="2">Scale</th><th>Category</th></thead><tbody></tbody></table></div>');
	    var range = column.getScale().range, colors = column.categoryColors, labels = column.categoryLabels;
	    var trData = column.categories.map(function (d, i) {
	        return { cat: d, label: labels[i], isChecked: bak.length === 0 || bak.indexOf(d) >= 0, range: range[i] * 100, color: colors[i] };
	    }).sort(sortbyName('label'));
	    var $rows = $popup.select('tbody').selectAll('tr').data(trData);
	    var $rows_enter = $rows.enter().append('tr');
	    $rows_enter.append('td').attr('class', 'checkmark').on('click', function (d) {
	        d.isChecked = !d.isChecked;
	        redraw();
	    });
	    $rows_enter.append('td')
	        .append('input').attr({
	        type: 'number',
	        value: function (d) { return d.range; },
	        min: 0,
	        max: 100,
	        size: 5
	    }).on('input', function (d) {
	        d.range = +this.value;
	        redraw();
	    });
	    $rows_enter.append('td').append('div').attr('class', 'bar').style('background-color', function (d) { return d.color; });
	    $rows_enter.append('td').attr('class', 'datalabel').text(function (d) { return d.label; });
	    function redraw() {
	        $rows.select('.checkmark').html(function (d) { return '<i class="fa fa-' + ((d.isChecked) ? 'check-' : '') + 'square-o"></i>'; });
	        $rows.select('.bar').transition().style('width', function (d) { return scale(d.range) + 'px'; });
	        $rows.select('.datalabel').style('opacity', function (d) { return d.isChecked ? '1.0' : '.8'; });
	    }
	    redraw();
	    var isCheckedAll = true;
	    function redrawSelectAll() {
	        $popup.select('.selectAll').html(function (d) { return '<i class="fa fa-' + ((isCheckedAll) ? 'check-' : '') + 'square-o"></i>'; });
	        $popup.select('thead').on('click', function (d) {
	            isCheckedAll = !isCheckedAll;
	            trData.forEach(function (row) { return row.isChecked = isCheckedAll; });
	            redraw();
	            redrawSelectAll();
	        });
	    }
	    redrawSelectAll();
	    function updateData(filter) {
	        markFiltered($header, filter && filter.length > 0 && filter.length < trData.length);
	        column.setFilter(filter);
	    }
	    $popup.select('.cancel').on('click', function () {
	        updateData(bak);
	        column.setMapping(range);
	        $popup.remove();
	    });
	    $popup.select('.reset').on('click', function () {
	        trData.forEach(function (d) {
	            d.isChecked = true;
	            d.range = 50;
	        });
	        redraw();
	        updateData(null);
	        column.setMapping(trData.map(function () { return 1; }));
	    });
	    $popup.select('.ok').on('click', function () {
	        var f = trData.filter(function (d) { return d.isChecked; }).map(function (d) { return d.cat; });
	        if (f.length === trData.length) {
	            f = [];
	        }
	        updateData(f);
	        column.setMapping(trData.map(function (d) { return d.range / 100; }));
	        $popup.remove();
	    });
	}
	/**
	 * returns all known filter dialogs mappings by type
	 * @return
	 */
	function filterDialogs() {
	    return {
	        string: openStringFilter,
	        categorical: openCategoricalFilter,
	        number: openMappingEditor,
	        ordinal: openCategoricalMappingEditor,
	        boolean: openBooleanFilter
	    };
	}
	exports.filterDialogs = filterDialogs;
	//# sourceMappingURL=ui_dialogs.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by Samuel Gratzl on 14.08.2015.
	 */
	"use strict";
	///<reference path='../typings/tsd.d.ts' />
	var d3 = __webpack_require__(7);
	var utils = __webpack_require__(8);
	var model = __webpack_require__(6);
	function clamp(v, min, max) {
	    return Math.max(Math.min(v, max), min);
	}
	var MappingEditor = (function () {
	    function MappingEditor(parent, scale_, original, old_filter, dataPromise, options) {
	        if (options === void 0) { options = {}; }
	        this.parent = parent;
	        this.scale_ = scale_;
	        this.original = original;
	        this.old_filter = old_filter;
	        this.dataPromise = dataPromise;
	        this.options = {
	            width: 370,
	            height: 200,
	            padding_hor: 5,
	            padding_ver: 5,
	            radius: 5,
	            callback: function (d) { return d; },
	            callbackThisArg: null,
	            triggerCallback: 'change' //change, dragend
	        };
	        utils.merge(this.options, options);
	        //work on a local copy
	        this.scale_ = scale_.clone();
	        this.build(d3.select(parent));
	    }
	    Object.defineProperty(MappingEditor.prototype, "scale", {
	        get: function () {
	            return this.scale_;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MappingEditor.prototype, "filter", {
	        get: function () {
	            return this.computeFilter();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    MappingEditor.prototype.build = function ($root) {
	        var options = this.options, that = this;
	        $root = $root.append('div').classed('lugui-me', true);
	        $root.node().innerHTML = "<div>\n    <span class=\"raw_min\">0</span>\n    <span class=\"center\"><label><select>\n        <option value=\"linear\">Linear</option>\n        <option value=\"linear_invert\">Invert</option>\n        <option value=\"linear_abs\">Absolute</option>\n        <option value=\"log\">Log</option>\n        <option value=\"pow1.1\">Pow 1.1</option>\n        <option value=\"pow2\">Pow 2</option>\n        <option value=\"pow3\">Pow 3</option>\n        <option value=\"sqrt\">Sqrt</option>\n        <option value=\"script\">Custom Script</option>\n      </select></label>\n      </span>\n    <span class=\"raw_max\">1</span>\n  </div>\n  <svg width=\"" + options.width + "\" height=\"" + options.height + "\">\n    <rect width=\"100%\" height=\"10\"></rect>\n    <rect width=\"100%\" height=\"10\" y=\"" + (options.height - 10) + "\"></rect>\n    <g transform=\"translate(" + options.padding_hor + "," + options.padding_ver + ")\">\n      <g class=\"samples\">\n\n      </g>\n      <g class=\"mappings\">\n\n      </g>\n    </g>\n  </svg>\n  <div class=\"mapping_filter\" style=\"width: " + (options.width - options.padding_hor * 2) + "px; margin-left: " + options.padding_hor + "px;\">\n    <div class=\"mapping_mapping\"></div>\n    <div class=\"filter_left_filter\"></div>\n    <div class=\"filter_right_filter\"></div>\n    <div class=\"left_handle\"></div>\n    <div class=\"right_handle\"></div>\n  </div>\n  <div>\n    <input type=\"text\" class=\"raw_min\" value=\"0\">\n    <span class=\"center\">Raw</span>\n    <input type=\"text\" class=\"raw_max\" value=\"1\">\n  </div>\n  <div class=\"script\">\n    <textarea>\n\n    </textarea>\n    <button>Apply</button>\n  </div>";
	        var width = options.width - options.padding_hor * 2;
	        var height = options.height - options.padding_ver * 2;
	        var $mapping_area = $root.select('div.mapping_mapping');
	        var raw2pixel = d3.scale.linear().domain([Math.min(this.scale.domain[0], this.original.domain[0]), Math.max(this.scale.domain[this.scale.domain.length - 1], this.original.domain[this.original.domain.length - 1])])
	            .range([0, width]);
	        var normal2pixel = d3.scale.linear().domain([0, 1])
	            .range([0, width]);
	        $root.select('input.raw_min')
	            .property('value', raw2pixel.domain()[0])
	            .on('blur', function () {
	            var d = raw2pixel.domain();
	            d[0] = parseFloat(this.value);
	            raw2pixel.domain(d);
	            var old = that.scale_.domain;
	            old[0] = d[0];
	            that.scale_.domain = old;
	            updateRaw();
	            triggerUpdate();
	        });
	        $root.select('input.raw_max')
	            .property('value', raw2pixel.domain()[1])
	            .on('blur', function () {
	            var d = raw2pixel.domain();
	            d[1] = parseFloat(this.value);
	            raw2pixel.domain(d);
	            var old = that.scale_.domain;
	            old[old.length - 1] = d[1];
	            that.scale_.domain = old;
	            updateRaw();
	            triggerUpdate();
	        });
	        //lines that show mapping of individual data items
	        var datalines = $root.select('g.samples').selectAll('line').data([]);
	        this.dataPromise.then(function (data) {
	            //to unique values
	            data = d3.set(data.map(String)).values().map(parseFloat);
	            datalines = datalines.data(data);
	            datalines.enter()
	                .append('line')
	                .attr({
	                x1: function (d) { return normal2pixel(that.scale.apply(d)); },
	                y1: 0,
	                x2: raw2pixel,
	                y2: height
	            }).style('visibility', function (d) {
	                var domain = that.scale.domain;
	                return (d < domain[0] || d > domain[domain.length - 1]) ? 'hidden' : null;
	            });
	        });
	        function updateDataLines() {
	            datalines.attr({
	                x1: function (d) { return normal2pixel(that.scale.apply(d)); },
	                x2: raw2pixel
	            }).style('visibility', function (d) {
	                var domain = that.scale.domain;
	                return (d < domain[0] || d > domain[domain.length - 1]) ? 'hidden' : null;
	            });
	            var minmax = d3.extent(that.scale.domain);
	            $mapping_area.style({
	                left: raw2pixel(minmax[0]) + 'px',
	                width: raw2pixel(minmax[1] - minmax[0]) + 'px'
	            });
	        }
	        function createDrag(move) {
	            return d3.behavior.drag()
	                .on('dragstart', function () {
	                d3.select(this)
	                    .classed('dragging', true)
	                    .attr('r', options.radius * 1.1);
	            })
	                .on('drag', move)
	                .on('dragend', function () {
	                d3.select(this)
	                    .classed('dragging', false)
	                    .attr('r', options.radius);
	                triggerUpdate(true);
	            });
	        }
	        var mapping_lines = [];
	        function renderMappingLines() {
	            if (!(that.scale instanceof model.ScaleMappingFunction)) {
	                return;
	            }
	            {
	                var sscale = that.scale;
	                var domain = sscale.domain;
	                var range_1 = sscale.range;
	                mapping_lines = domain.map(function (d, i) { return ({ r: d, n: range_1[i] }); });
	            }
	            function updateScale() {
	                //sort by raw value
	                mapping_lines.sort(function (a, b) { return a.r - b.r; });
	                //update the scale
	                var scale = that.scale;
	                scale.domain = mapping_lines.map(function (d) { return d.r; });
	                scale.range = mapping_lines.map(function (d) { return d.n; });
	                //console.log(sscale.domain, sscale.range);
	                updateDataLines();
	            }
	            function removePoint(i) {
	                if (mapping_lines.length <= 2) {
	                    return; //can't remove have to have at least two
	                }
	                mapping_lines.splice(i, 1);
	                updateScale();
	                renderMappingLines();
	            }
	            function addPoint(x) {
	                x = clamp(x, 0, width);
	                mapping_lines.push({
	                    n: normal2pixel.invert(x),
	                    r: raw2pixel.invert(x)
	                });
	                updateScale();
	                renderMappingLines();
	            }
	            $root.selectAll('rect').on('click', function () {
	                addPoint(d3.mouse($root.select('svg > g').node())[0]);
	            });
	            var $mapping = $root.select('g.mappings').selectAll('g.mapping').data(mapping_lines);
	            var $mapping_enter = $mapping.enter().append('g').classed('mapping', true).on('contextmenu', function (d, i) {
	                d3.event.preventDefault();
	                d3.event.stopPropagation();
	                removePoint(i);
	            });
	            $mapping_enter.append('line').attr({
	                y1: 0,
	                y2: height
	            }).call(createDrag(function (d) {
	                //drag the line shifts both point in parallel
	                var dx = d3.event.dx;
	                var nx = clamp(normal2pixel(d.n) + dx, 0, width);
	                var rx = clamp(raw2pixel(d.r) + dx, 0, width);
	                d.n = normal2pixel.invert(nx);
	                d.r = raw2pixel.invert(rx);
	                d3.select(this).attr('x1', nx).attr('x2', rx);
	                d3.select(this.parentElement).select('circle.normalized').attr('cx', nx);
	                d3.select(this.parentElement).select('circle.raw').attr('cx', rx);
	                updateScale();
	            }));
	            $mapping_enter.append('circle').classed('normalized', true).attr('r', options.radius).call(createDrag(function (d) {
	                //drag normalized
	                var x = clamp(d3.event.x, 0, width);
	                d.n = normal2pixel.invert(x);
	                d3.select(this).attr('cx', x);
	                d3.select(this.parentElement).select('line').attr('x1', x);
	                updateScale();
	            }));
	            $mapping_enter.append('circle').classed('raw', true).attr('r', options.radius).attr('cy', height).call(createDrag(function (d) {
	                //drag raw
	                var x = clamp(d3.event.x, 0, width);
	                d.r = raw2pixel.invert(x);
	                d3.select(this).attr('cx', x);
	                d3.select(this.parentElement).select('line').attr('x2', x);
	                updateScale();
	            }));
	            $mapping.select('line').attr({
	                x1: function (d) { return normal2pixel(d.n); },
	                x2: function (d) { return raw2pixel(d.r); }
	            });
	            $mapping.select('circle.normalized').attr('cx', function (d) { return normal2pixel(d.n); });
	            $mapping.select('circle.raw').attr('cx', function (d) { return raw2pixel(d.r); });
	            $mapping.exit().remove();
	        }
	        function renderScript() {
	            if (!(that.scale instanceof model.ScriptMappingFunction)) {
	                $root.select('div.script').style('display', 'none');
	                return;
	            }
	            $root.select('div.script').style('display', null);
	            var sscale = that.scale;
	            var $text = $root.select('textarea').text(sscale.code);
	            $root.select('div.script').select('button').on('click', function () {
	                sscale.code = $text.property('value');
	                updateDataLines();
	                triggerUpdate();
	            });
	        }
	        renderMappingLines();
	        renderScript();
	        function triggerUpdate(isDragEnd) {
	            if (isDragEnd === void 0) { isDragEnd = false; }
	            if (isDragEnd && (options.triggerCallback !== 'dragend')) {
	                return;
	            }
	            options.callback.call(options.callbackThisArg, that.scale.clone(), that.filter);
	        }
	        $root.selectAll('div.left_handle, div.right_handle').call(createDrag(function (d) {
	            //drag normalized
	            var x = clamp(d3.event.x, 0, width - 5);
	            var $this = d3.select(this).style('left', x + 'px');
	            var is_left = $this.classed('left_handle');
	            if (is_left) {
	                $root.select('div.filter_left_filter').style('width', x + 'px');
	            }
	            else {
	                $root.select('div.filter_right_filter').style('left', x + 'px').style('width', (width - x) + 'px');
	            }
	        }));
	        {
	            var min_filter = (isFinite(this.old_filter.min) ? raw2pixel(this.old_filter.min) : 0);
	            var max_filter = (isFinite(this.old_filter.max) ? raw2pixel(this.old_filter.max) : width);
	            $root.select('div.right_handle').style('left', (max_filter - 5) + 'px');
	            $root.select('div.filter_right_filter').style('left', max_filter + 'px').style('width', (width - max_filter) + 'px');
	            $root.select('div.left_handle').style('left', min_filter + 'px');
	            $root.select('div.filter_left_filter').style('width', min_filter + 'px');
	        }
	        this.computeFilter = function () {
	            var min_p = parseFloat($root.select('div.left_handle').style('left'));
	            var min_f = raw2pixel.invert(min_p);
	            var max_p = parseFloat($root.select('div.right_handle').style('left')) + 5;
	            var max_f = raw2pixel.invert(max_p);
	            return {
	                min: min_p <= 0 ? -Infinity : min_f,
	                max: max_p >= width ? Infinity : max_f
	            };
	        };
	        function updateRaw() {
	            var d = raw2pixel.domain();
	            $root.select('input.raw_min').property('value', d[0]);
	            $root.select('input.raw_max').property('value', d[1]);
	            updateDataLines();
	            renderMappingLines();
	        }
	        updateRaw();
	        $root.select('select').on('change', function () {
	            var v = this.value;
	            if (v === 'linear_invert') {
	                that.scale_ = new model.ScaleMappingFunction(raw2pixel.domain(), 'linear', [1, 0]);
	            }
	            else if (v === 'linear_abs') {
	                var d = raw2pixel.domain();
	                that.scale_ = new model.ScaleMappingFunction([d[0], (d[1] - d[0]) / 2, d[1]], 'linear', [1, 0, 1]);
	            }
	            else if (v === 'script') {
	                that.scale_ = new model.ScriptMappingFunction(raw2pixel.domain());
	            }
	            else {
	                that.scale_ = new model.ScaleMappingFunction(raw2pixel.domain(), v);
	            }
	            updateDataLines();
	            renderMappingLines();
	            renderScript();
	            triggerUpdate();
	        }).property('selectedIndex', function () {
	            var name = 'script';
	            if (that.scale_ instanceof model.ScaleMappingFunction) {
	                name = that.scale.scaleType;
	            }
	            var types = ['linear', 'linear_invert', 'linear_abs', 'log', 'pow1.1', 'pow2', 'pow3', 'sqrt', 'script'];
	            return types.indexOf(name);
	        });
	    };
	    return MappingEditor;
	}());
	exports.MappingEditor = MappingEditor;
	function create(parent, scale, original, filter, dataPromise, options) {
	    if (options === void 0) { options = {}; }
	    return new MappingEditor(parent, scale, original, filter, dataPromise, options);
	}
	exports.create = create;
	//# sourceMappingURL=mappingeditor.js.map

/***/ }
/******/ ])
});
;
//# sourceMappingURL=LineUpJS_bundle.js.map