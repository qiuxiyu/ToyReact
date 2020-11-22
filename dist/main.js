/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar MyComponent = function MyComponent() {\n  _classCallCheck(this, MyComponent);\n};\n\nfunction createElement(type, attributes) {\n  var e;\n\n  if (typeof type === \"string\") {\n    e = document.createElement(type);\n  } else {\n    e = new type();\n  }\n\n  for (var p in attributes) {\n    e.setAttribute(p, attributes[p]);\n  }\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  for (var _i = 0, _children = children; _i < _children.length; _i++) {\n    var child = _children[_i];\n\n    if (typeof child === \"string\") {\n      child = document.createTextNode(child);\n    }\n\n    e.appendChild(child);\n  }\n\n  return e;\n}\n\ndocument.body.appendChild(createElement(MyComponent, {\n  \"class\": \"c\",\n  id: \"a\"\n}, createElement(\"div\", null, \"abc\"), createElement(\"div\", null), createElement(\"div\", null)));\n\n//# sourceURL=webpack://toy-react/./main.js?");
/******/ })()
;