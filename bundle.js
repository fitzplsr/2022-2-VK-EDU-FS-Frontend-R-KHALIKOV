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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./chats.css":
/*!*******************!*\
  !*** ./chats.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./chats.css?");

/***/ }),

/***/ "./dialog.css":
/*!********************!*\
  !*** ./dialog.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./dialog.css?");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _messenger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messenger.js */ \"./messenger.js\");\n/* harmony import */ var _messenger_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_messenger_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dialog_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.css */ \"./dialog.css\");\n/* harmony import */ var _dialog_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dialog_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chats_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chats.css */ \"./chats.css\");\n/* harmony import */ var _chats_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chats_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./messenger.js":
/*!**********************!*\
  !*** ./messenger.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar current_chat_id = localStorage.getItem(\"current_chat\");\n\nif (!current_chat_id) {\n  localStorage.setItem(\"current_chat\", \"-1\");\n}\n\nvar which_page = localStorage.getItem(\"page\");\nconsole.log(\"which page:\" + which_page);\nvar is_chat = localStorage.getItem(\"chats\");\n\nif (!which_page || !is_chat) {\n  localStorage.setItem(\"menu\", \"1\");\n  localStorage.setItem(\"dialog\", \"0\");\n  localStorage.setItem(\"page\", \"menu\");\n  console.log(\"1111111111111111\");\n  viewChats();\n} else {\n  if (which_page === \"menu\") {\n    localStorage.setItem(\"menu\", \"1\");\n    localStorage.setItem(\"dialog\", \"0\");\n    console.log(\"222222222222222\");\n    viewChats();\n  } else {\n    localStorage.setItem(\"menu\", \"0\");\n    localStorage.setItem(\"dialog\", \"1\");\n    var chat = document.querySelector(\".chat\");\n    chat.removeChild(document.querySelector('.chat-show'));\n    var chat_show = document.createElement('div');\n    chat_show.className = 'chat-show';\n    var start = document.createElement('div');\n    start.setAttribute('id', 'start');\n    chat_show.appendChild(start);\n    var sp2 = document.getElementById('start-chat');\n    var link2 = sp2.parentNode;\n    link2.insertBefore(chat_show, sp2);\n    console.log(\"33333333333333333\");\n    viewDialog(current_chat_id);\n  }\n}\n\nvar back = document.querySelector('.back');\nback.addEventListener('click', function () {\n  setTimeout(viewChats, 200);\n});\n\nfunction viewChats() {\n  localStorage.setItem(\"menu\", \"1\");\n  var chatsInfo = localStorage.getItem(\"chats\");\n\n  if (chatsInfo) {\n    var dicts = JSON.parse(chatsInfo);\n\n    for (var dict in dicts) {\n      post_preview(dicts[dict][\"info\"]);\n    }\n  } else {\n    var _dict = {\n      \"chat0\": {\n        \"info\": {\n          \"chat_id\": \"0\",\n          \"chat_last_msg\": \"Hi, men\",\n          \"unread-msgs\": '1',\n          \"chat-time\": \"21:54\",\n          \"user_name\": \"Boss\"\n        },\n        \"messages\": {\n          \"message0\": {\n            \"id\": \"0\",\n            \"user_id\": \"1\",\n            \"name\": \"Boss\",\n            \"text\": \"Hi, men\",\n            \"time\": \"21:54\"\n          }\n        }\n      },\n      \"chat1\": {\n        \"info\": {\n          \"chat_id\": \"1\",\n          \"chat_last_msg\": \"Best wishes\",\n          \"unread-msgs\": '0',\n          \"chat-time\": \"21:50\",\n          \"user_name\": \"Bob\"\n        },\n        \"messages\": {\n          \"message0\": {\n            \"id\": \"0\",\n            \"user_id\": \"2\",\n            \"name\": \"Bob\",\n            \"text\": \"Where is my money\",\n            \"time\": \"21:50\"\n          },\n          \"message1\": {\n            \"id\": \"1\",\n            \"user_id\": \"0\",\n            \"name\": \"Me\",\n            \"text\": \"Best wishes\",\n            \"time\": \"21:51\"\n          }\n        }\n      }\n    };\n\n    for (var _chat in _dict) {\n      post_preview(_dict[_chat][\"info\"]);\n    }\n\n    localStorage.setItem(\"chats\", JSON.stringify(_dict));\n    localStorage.setItem(\"counter_chats\", \"0\");\n  }\n\n  localStorage.setItem(\"page\", \"menu\");\n  localStorage.setItem(\"counter\", \"0\");\n  document.getElementById('dialog').style.display = \"none\";\n  document.getElementById('menu').style.display = \"flex\";\n\n  if (localStorage.getItem(\"dialog\") === \"1\") {\n    del_dialog();\n  }\n\n  localStorage.setItem(\"dialog\", \"0\");\n  var previews = document.getElementsByClassName('preview');\n\n  var _iterator = _createForOfIteratorHelper(previews),\n      _step;\n\n  try {\n    var _loop = function _loop() {\n      var preview = _step.value;\n      preview.addEventListener(\"click\", function () {\n        setTimeout(viewDialog, 300, preview.querySelector(\".chat-id\").textContent);\n      });\n    };\n\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      _loop();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\nfunction del_dialog() {\n  var chat = document.querySelector(\".chat\");\n  chat.removeChild(document.querySelector('.chat-show'));\n  var userline = document.querySelector(\".user-line\");\n  userline.removeChild(document.querySelector(\".user\"));\n  var chat_show = document.createElement('div');\n  chat_show.className = 'chat-show';\n  var start = document.createElement('div');\n  start.setAttribute('id', 'start');\n  chat_show.appendChild(start);\n  var sp2 = document.getElementById('start-chat');\n  var link2 = sp2.parentNode;\n  link2.insertBefore(chat_show, sp2);\n}\n\nfunction post_preview(info) {\n  var preview_box = document.createElement('button');\n  preview_box.setAttribute('class', 'preview');\n  var avatar = document.createElement('i');\n  avatar.setAttribute('class', 'material-icons');\n  avatar.setAttribute('id', 'avatar');\n  avatar.textContent = 'account_circle';\n  var chat_id = document.createElement('div');\n  chat_id.setAttribute('class', 'chat-id');\n  chat_id.textContent = info[\"chat_id\"];\n  var chat_name = document.createElement('div');\n  chat_name.setAttribute('class', 'chat-name');\n  chat_name.textContent = info[\"user_name\"];\n  var chat_last_msg = document.createElement('div');\n  chat_last_msg.setAttribute('class', 'chat-last-msg');\n  chat_last_msg.textContent = info[\"chat_last_msg\"];\n  var chat_info = document.createElement('div');\n  chat_info.setAttribute('class', 'chat-info');\n  chat_info.appendChild(chat_name);\n  chat_info.appendChild(chat_last_msg);\n  chat_info.appendChild(chat_id);\n  var chat_time = document.createElement('div');\n  chat_time.setAttribute('class', 'chat-time');\n  chat_time.textContent = info['chat-time'];\n  var unread_msgs;\n\n  if (info[\"unread-msgs\"] === \"0\") {\n    unread_msgs = document.createElement('i');\n    unread_msgs.setAttribute('class', 'material-icons');\n    unread_msgs.setAttribute('id', 'msgs');\n    unread_msgs.textContent = 'done_all';\n  } else {\n    unread_msgs = document.createElement('div');\n    unread_msgs.setAttribute('class', 'unread-msgs');\n    unread_msgs.textContent = info['unread-msgs'];\n  }\n\n  var chat_nums = document.createElement('div');\n  chat_nums.setAttribute('class', 'chat-nums');\n  chat_nums.appendChild(chat_time);\n  chat_nums.appendChild(unread_msgs);\n  preview_box.appendChild(avatar);\n  preview_box.appendChild(chat_info);\n  preview_box.appendChild(chat_nums);\n  var sp2 = document.getElementById('start-preview');\n  var link2 = sp2.parentNode;\n  link2.insertBefore(preview_box, sp2);\n}\n\nvar form = document.querySelector('form');\nvar input = document.querySelector('.form-input');\n\nfunction viewDialog(chat_id) {\n  var dict = JSON.parse(localStorage.getItem(\"chats\"));\n  dict[\"chat\" + chat_id][\"info\"][\"unread-msgs\"] = \"0\";\n  dictJSON = JSON.stringify(dict);\n  localStorage.setItem(\"chats\", dictJSON);\n  localStorage.setItem(\"dialog\", \"1\");\n  localStorage.setItem(\"menu\", \"0\");\n  var chat = document.querySelector(\".chats-list\");\n  chat.removeChild(document.querySelector('.previews'));\n  var previews = document.createElement('div');\n  previews.className = 'previews';\n  var start = document.createElement('div');\n  start.setAttribute('id', 'start-preview');\n  previews.appendChild(start);\n  var sp3 = document.getElementById('start-chat-preview');\n  var link1 = sp3.parentNode;\n  link1.insertBefore(previews, sp3);\n  localStorage.setItem(\"page\", \"dialog\");\n  current_chat_id = chat_id;\n  localStorage.setItem(\"current_chat\", chat_id);\n  document.getElementById('menu').style.display = \"none\";\n  document.getElementById('dialog').style.display = \"flex\";\n  var chatInfo = localStorage.getItem(\"chats\");\n  var dicts = JSON.parse(chatInfo);\n  var name = dicts[\"chat\" + chat_id]['info']['user_name'];\n  var user = document.createElement('div');\n  user.className = 'user';\n  var user_name = document.createElement('div');\n  user_name.className = 'username';\n  user_name.textContent = name;\n  var status = document.createElement('div');\n  status.className = 'status';\n  status.textContent = 'online';\n  user.appendChild(user_name);\n  user.appendChild(status);\n  var sp2 = document.getElementById('start-dialog');\n  var link2 = sp2.parentNode;\n  link2.insertBefore(user, sp2);\n  var counter = 0;\n\n  for (var _dict2 in dicts[\"chat\" + chat_id][\"messages\"]) {\n    post(dicts[\"chat\" + chat_id][\"messages\"][_dict2]);\n    counter += 1;\n  }\n\n  localStorage.setItem(\"counter\", String(counter));\n}\n\nform.addEventListener('submit', handleSubmit);\nform.addEventListener('keypress', handleKeyPress);\n\nfunction post(info) {\n  var chat_window = document.createElement('div');\n  var id = \"1\";\n\n  if (info[\"name\"] === \"Me\") {\n    id = \"2\";\n  }\n\n  chat_window.setAttribute('class', 'messageFromUser' + id);\n  var user_text = document.createElement('div');\n  user_text.setAttribute('class', 'text');\n  user_text.textContent = info[\"text\"];\n  var user_time = document.createElement('div');\n  user_time.setAttribute('class', 'time');\n  user_time.textContent = info[\"time\"];\n  var user_name = document.createElement('div');\n  user_name.setAttribute('class', 'name');\n  user_name.textContent = info[\"name\"];\n  chat_window.appendChild(user_time);\n  chat_window.appendChild(user_text);\n  chat_window.appendChild(user_name);\n  var sp2 = document.getElementById('start');\n  var link2 = sp2.parentNode;\n  link2.insertBefore(chat_window, sp2);\n  chat_window.scrollIntoView({\n    block: \"end\",\n    inline: \"nearest\"\n  });\n}\n\nfunction handleSubmit(event) {\n  event.preventDefault();\n  var inputMessage = input.value.trim();\n  if (!inputMessage) return;\n  input.value = '';\n  var messageInfo = {};\n  var dict = JSON.parse(localStorage.getItem(\"chats\"));\n  var count = String(Number(localStorage.getItem(\"counter\")) + 1);\n  var now = new Date();\n  messageInfo[\"user_id\"] = \"2\";\n  messageInfo[\"id\"] = count;\n  messageInfo[\"name\"] = \"Me\";\n  messageInfo[\"text\"] = inputMessage;\n  messageInfo[\"time\"] = now.toLocaleTimeString(\"ru-Ru\").substring(0, 5);\n  current_chat_id = localStorage.getItem(\"current_chat\");\n  dict[\"chat\" + current_chat_id]['info']['chat_last_msg'] = inputMessage;\n  dict[\"chat\" + current_chat_id]['info']['unread-msgs'] = \"0\";\n  dict[\"chat\" + current_chat_id]['info']['chat-time'] = messageInfo[\"time\"];\n  dict[\"chat\" + current_chat_id]['messages']['message' + count] = messageInfo;\n  dictJSON = JSON.stringify(dict);\n  localStorage.setItem(\"chats\", dictJSON);\n  localStorage.setItem(\"counter\", count);\n  post(messageInfo);\n}\n\nfunction handleKeyPress(event) {\n  if (event.keyCode === 13) {\n    form.dispatchEvent(new Event('submit'));\n  }\n}\n\n//# sourceURL=webpack:///./messenger.js?");

/***/ })

/******/ });