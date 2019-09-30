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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/animated-scroll-to/animated-scroll-to.js":
/*!***************************************************************!*\
  !*** ./node_modules/animated-scroll-to/animated-scroll-to.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function() {\n  'use strict';\n\n  // desiredOffset - page offset to scroll to\n  // speed - duration of the scroll per 1000px\n  function __ANIMATE_SCROLL_TO(desiredOffset) {\n    var userOptions = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];\n\n    var options = {\n      speed: 500,\n      minDuration: 250,\n      maxDuration: 1500,\n      cancelOnUserAction: true,\n      element: window,\n      horizontal: false,\n      onComplete: undefined,\n      passive: true,\n      offset: 0\n    };\n\n    var optionsKeys = Object.keys(options);\n\n    // Override default options\n    for (var i = 0; i < optionsKeys.length; i++) {\n      var key = optionsKeys[i];\n\n      if (typeof userOptions[key] !== 'undefined') {\n        options[key] = userOptions[key];\n      }\n    }\n\n    if (!options.cancelOnUserAction && options.passive) {\n      options.passive = false;\n      if (userOptions.passive) {\n        console && console.warn(\n          'animated-scroll-to:\\n \"passive\" was set to \"false\" to prevent errors, ' +\n          'as using \"cancelOnUserAction: false\" doesn\\'t work with passive events.')\n      }\n    }\n\n    if (desiredOffset instanceof HTMLElement) {\n      if (userOptions.element && userOptions.element instanceof HTMLElement) {\n        if (options.horizontal) {\n          desiredOffset = (desiredOffset.getBoundingClientRect().left + userOptions.element.scrollLeft)\n            - userOptions.element.getBoundingClientRect().left;\n        } else {\n          desiredOffset = (desiredOffset.getBoundingClientRect().top + userOptions.element.scrollTop)\n            - userOptions.element.getBoundingClientRect().top;\n        }\n      } else if (options.horizontal) {\n        var scrollLeft = window.scrollX || document.documentElement.scrollLeft;\n        desiredOffset = scrollLeft + desiredOffset.getBoundingClientRect().left;\n      } else {\n        var scrollTop = window.scrollY || document.documentElement.scrollTop;\n        desiredOffset = scrollTop + desiredOffset.getBoundingClientRect().top;\n      }\n    }\n\n    // Add additonal user offset\n    desiredOffset += options.offset\n\n    options.isWindow = options.element === window;\n\n    var initialScrollPosition = null;\n    var initialAxisScollPosition = 0;\n    var maxScroll = null;\n\n    if (options.isWindow) {\n      if (options.horizontal) {\n        // get cross browser scroll positions\n        initialScrollPosition = window.scrollX || document.documentElement.scrollLeft;\n        initialAxisScollPosition = window.scrollY || document.documentElement.scrollTop;\n        // cross browser document height minus window height\n        maxScroll = Math.max(\n          document.body.scrollWidth, document.documentElement.scrollWidth,\n          document.body.offsetWidth, document.documentElement.offsetWidth,\n          document.body.clientWidth, document.documentElement.clientWidth\n        ) - window.innerWidth;\n      } else {\n        // get cross browser scroll positions\n        initialScrollPosition = window.scrollY || document.documentElement.scrollTop;\n        initialAxisScollPosition = window.scrollX || document.documentElement.scrollLeft;\n        // cross browser document width minus window width\n        maxScroll = Math.max(\n          document.body.scrollHeight, document.documentElement.scrollHeight,\n          document.body.offsetHeight, document.documentElement.offsetHeight,\n          document.body.clientHeight, document.documentElement.clientHeight\n        ) - window.innerHeight;\n      }\n    } else {\n      // DOM element\n      if (options.horizontal) {\n        initialScrollPosition = options.element.scrollLeft;\n        maxScroll = options.element.scrollWidth - options.element.clientWidth;\n      } else {\n        initialScrollPosition = options.element.scrollTop;\n        maxScroll = options.element.scrollHeight - options.element.clientHeight;\n      }\n    }\n\n    // If the scroll position is greater than maximum available scroll\n    if (desiredOffset > maxScroll) {\n      desiredOffset = maxScroll;\n    }\n\n    // Calculate diff to scroll\n    var diff = desiredOffset - initialScrollPosition;\n\n    // Do nothing if the page is already there\n    if (diff === 0) {\n      // Execute callback if there is any\n      if (options.onComplete && typeof options.onComplete === 'function') {\n        options.onComplete()\n      }\n\n      return;\n    }\n\n    // Calculate duration of the scroll\n    var duration = Math.abs(Math.round((diff / 1000) * options.speed));\n\n    // Set minimum and maximum duration\n    if (duration < options.minDuration) {\n      duration = options.minDuration;\n    } else if (duration > options.maxDuration) {\n      duration = options.maxDuration;\n    }\n\n    var startingTime = Date.now();\n\n    // Request animation frame ID\n    var requestID = null;\n\n    // Method handler\n    var handleUserEvent = null;\n    var userEventOptions = { passive: options.passive };\n\n    if (options.cancelOnUserAction) {\n      // Set handler to cancel scroll on user action\n      handleUserEvent = function() {\n        removeListeners();\n        cancelAnimationFrame(requestID);\n      };\n      window.addEventListener('keydown', handleUserEvent, userEventOptions);\n      window.addEventListener('mousedown', handleUserEvent, userEventOptions);\n    } else {\n      // Set handler to prevent user actions while scroll is active\n      handleUserEvent = function(e) { e.preventDefault(); };\n      window.addEventListener('scroll', handleUserEvent, userEventOptions);\n    }\n\n    window.addEventListener('wheel', handleUserEvent, userEventOptions);\n    window.addEventListener('touchstart', handleUserEvent, userEventOptions);\n\n    var removeListeners = function () {\n      window.removeEventListener('wheel', handleUserEvent, userEventOptions);\n      window.removeEventListener('touchstart', handleUserEvent, userEventOptions);\n\n      if (options.cancelOnUserAction) {\n        window.removeEventListener('keydown', handleUserEvent, userEventOptions);\n        window.removeEventListener('mousedown', handleUserEvent, userEventOptions);\n      } else {\n        window.removeEventListener('scroll', handleUserEvent, userEventOptions);\n      }\n    };\n\n    var step = function () {\n      var timeDiff = Date.now() - startingTime;\n      var t = (timeDiff / duration) - 1;\n      var easing = t * t * t + 1;\n      var scrollPosition = Math.round(initialScrollPosition + (diff * easing));\n\n      var doScroll = function(position) {\n        if (options.isWindow) {\n          if (options.horizontal) {\n            options.element.scrollTo(position, initialAxisScollPosition);\n          } else {\n            options.element.scrollTo(initialAxisScollPosition, position);\n          }\n        } else if (options.horizontal) {\n          options.element.scrollLeft = position;\n        } else {\n          options.element.scrollTop = position;\n        }\n      }\n\n      if (timeDiff < duration && scrollPosition !== desiredOffset) {\n        // If scroll didn't reach desired offset or time is not elapsed\n        // Scroll to a new position\n        // And request a new step\n        doScroll(scrollPosition);\n\n        requestID = requestAnimationFrame(step);\n      } else {\n        // If the time elapsed or we reached the desired offset\n        // Set scroll to the desired offset (when rounding made it to be off a pixel or two)\n        // Clear animation frame to be sure\n        doScroll(desiredOffset);\n\n        cancelAnimationFrame(requestID);\n\n        // Remove listeners\n        removeListeners();\n\n        // Animation is complete, execute callback if there is any\n        if (options.onComplete && typeof options.onComplete === 'function') {\n          options.onComplete()\n        }\n      }\n    };\n\n    // Start animating scroll\n    requestID = requestAnimationFrame(step);\n  }\n\n  if (true) {\n    if ( true && module.exports) {\n      module.exports = __ANIMATE_SCROLL_TO;\n      exports = module.exports;\n    }\n    exports.default = __ANIMATE_SCROLL_TO;\n  } else {}\n}).call(this);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYW5pbWF0ZWQtc2Nyb2xsLXRvL2FuaW1hdGVkLXNjcm9sbC10by5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbmltYXRlZC1zY3JvbGwtdG8vYW5pbWF0ZWQtc2Nyb2xsLXRvLmpzPzE4NmQiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gZGVzaXJlZE9mZnNldCAtIHBhZ2Ugb2Zmc2V0IHRvIHNjcm9sbCB0b1xuICAvLyBzcGVlZCAtIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgcGVyIDEwMDBweFxuICBmdW5jdGlvbiBfX0FOSU1BVEVfU0NST0xMX1RPKGRlc2lyZWRPZmZzZXQpIHtcbiAgICB2YXIgdXNlck9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgIG1pbkR1cmF0aW9uOiAyNTAsXG4gICAgICBtYXhEdXJhdGlvbjogMTUwMCxcbiAgICAgIGNhbmNlbE9uVXNlckFjdGlvbjogdHJ1ZSxcbiAgICAgIGVsZW1lbnQ6IHdpbmRvdyxcbiAgICAgIGhvcml6b250YWw6IGZhbHNlLFxuICAgICAgb25Db21wbGV0ZTogdW5kZWZpbmVkLFxuICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICAgIG9mZnNldDogMFxuICAgIH07XG5cbiAgICB2YXIgb3B0aW9uc0tleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKTtcblxuICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgb3B0aW9uc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0aW9uc0tleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBvcHRpb25zS2V5c1tpXTtcblxuICAgICAgaWYgKHR5cGVvZiB1c2VyT3B0aW9uc1trZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zW2tleV0gPSB1c2VyT3B0aW9uc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghb3B0aW9ucy5jYW5jZWxPblVzZXJBY3Rpb24gJiYgb3B0aW9ucy5wYXNzaXZlKSB7XG4gICAgICBvcHRpb25zLnBhc3NpdmUgPSBmYWxzZTtcbiAgICAgIGlmICh1c2VyT3B0aW9ucy5wYXNzaXZlKSB7XG4gICAgICAgIGNvbnNvbGUgJiYgY29uc29sZS53YXJuKFxuICAgICAgICAgICdhbmltYXRlZC1zY3JvbGwtdG86XFxuIFwicGFzc2l2ZVwiIHdhcyBzZXQgdG8gXCJmYWxzZVwiIHRvIHByZXZlbnQgZXJyb3JzLCAnICtcbiAgICAgICAgICAnYXMgdXNpbmcgXCJjYW5jZWxPblVzZXJBY3Rpb246IGZhbHNlXCIgZG9lc25cXCd0IHdvcmsgd2l0aCBwYXNzaXZlIGV2ZW50cy4nKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZXNpcmVkT2Zmc2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIGlmICh1c2VyT3B0aW9ucy5lbGVtZW50ICYmIHVzZXJPcHRpb25zLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAob3B0aW9ucy5ob3Jpem9udGFsKSB7XG4gICAgICAgICAgZGVzaXJlZE9mZnNldCA9IChkZXNpcmVkT2Zmc2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyB1c2VyT3B0aW9ucy5lbGVtZW50LnNjcm9sbExlZnQpXG4gICAgICAgICAgICAtIHVzZXJPcHRpb25zLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZXNpcmVkT2Zmc2V0ID0gKGRlc2lyZWRPZmZzZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdXNlck9wdGlvbnMuZWxlbWVudC5zY3JvbGxUb3ApXG4gICAgICAgICAgICAtIHVzZXJPcHRpb25zLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMuaG9yaXpvbnRhbCkge1xuICAgICAgICB2YXIgc2Nyb2xsTGVmdCA9IHdpbmRvdy5zY3JvbGxYIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICBkZXNpcmVkT2Zmc2V0ID0gc2Nyb2xsTGVmdCArIGRlc2lyZWRPZmZzZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICBkZXNpcmVkT2Zmc2V0ID0gc2Nyb2xsVG9wICsgZGVzaXJlZE9mZnNldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGFkZGl0b25hbCB1c2VyIG9mZnNldFxuICAgIGRlc2lyZWRPZmZzZXQgKz0gb3B0aW9ucy5vZmZzZXRcblxuICAgIG9wdGlvbnMuaXNXaW5kb3cgPSBvcHRpb25zLmVsZW1lbnQgPT09IHdpbmRvdztcblxuICAgIHZhciBpbml0aWFsU2Nyb2xsUG9zaXRpb24gPSBudWxsO1xuICAgIHZhciBpbml0aWFsQXhpc1Njb2xsUG9zaXRpb24gPSAwO1xuICAgIHZhciBtYXhTY3JvbGwgPSBudWxsO1xuXG4gICAgaWYgKG9wdGlvbnMuaXNXaW5kb3cpIHtcbiAgICAgIGlmIChvcHRpb25zLmhvcml6b250YWwpIHtcbiAgICAgICAgLy8gZ2V0IGNyb3NzIGJyb3dzZXIgc2Nyb2xsIHBvc2l0aW9uc1xuICAgICAgICBpbml0aWFsU2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgaW5pdGlhbEF4aXNTY29sbFBvc2l0aW9uID0gd2luZG93LnNjcm9sbFkgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgLy8gY3Jvc3MgYnJvd3NlciBkb2N1bWVudCBoZWlnaHQgbWludXMgd2luZG93IGhlaWdodFxuICAgICAgICBtYXhTY3JvbGwgPSBNYXRoLm1heChcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFdpZHRoLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsV2lkdGgsXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgICAgICApIC0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBnZXQgY3Jvc3MgYnJvd3NlciBzY3JvbGwgcG9zaXRpb25zXG4gICAgICAgIGluaXRpYWxTY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICAgIGluaXRpYWxBeGlzU2NvbGxQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxYIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICAvLyBjcm9zcyBicm93c2VyIGRvY3VtZW50IHdpZHRoIG1pbnVzIHdpbmRvdyB3aWR0aFxuICAgICAgICBtYXhTY3JvbGwgPSBNYXRoLm1heChcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCxcbiAgICAgICAgICBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgICAgICApIC0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBET00gZWxlbWVudFxuICAgICAgaWYgKG9wdGlvbnMuaG9yaXpvbnRhbCkge1xuICAgICAgICBpbml0aWFsU2Nyb2xsUG9zaXRpb24gPSBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgbWF4U2Nyb2xsID0gb3B0aW9ucy5lbGVtZW50LnNjcm9sbFdpZHRoIC0gb3B0aW9ucy5lbGVtZW50LmNsaWVudFdpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdGlhbFNjcm9sbFBvc2l0aW9uID0gb3B0aW9ucy5lbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgbWF4U2Nyb2xsID0gb3B0aW9ucy5lbGVtZW50LnNjcm9sbEhlaWdodCAtIG9wdGlvbnMuZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHNjcm9sbCBwb3NpdGlvbiBpcyBncmVhdGVyIHRoYW4gbWF4aW11bSBhdmFpbGFibGUgc2Nyb2xsXG4gICAgaWYgKGRlc2lyZWRPZmZzZXQgPiBtYXhTY3JvbGwpIHtcbiAgICAgIGRlc2lyZWRPZmZzZXQgPSBtYXhTY3JvbGw7XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIGRpZmYgdG8gc2Nyb2xsXG4gICAgdmFyIGRpZmYgPSBkZXNpcmVkT2Zmc2V0IC0gaW5pdGlhbFNjcm9sbFBvc2l0aW9uO1xuXG4gICAgLy8gRG8gbm90aGluZyBpZiB0aGUgcGFnZSBpcyBhbHJlYWR5IHRoZXJlXG4gICAgaWYgKGRpZmYgPT09IDApIHtcbiAgICAgIC8vIEV4ZWN1dGUgY2FsbGJhY2sgaWYgdGhlcmUgaXMgYW55XG4gICAgICBpZiAob3B0aW9ucy5vbkNvbXBsZXRlICYmIHR5cGVvZiBvcHRpb25zLm9uQ29tcGxldGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb3B0aW9ucy5vbkNvbXBsZXRlKClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENhbGN1bGF0ZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsXG4gICAgdmFyIGR1cmF0aW9uID0gTWF0aC5hYnMoTWF0aC5yb3VuZCgoZGlmZiAvIDEwMDApICogb3B0aW9ucy5zcGVlZCkpO1xuXG4gICAgLy8gU2V0IG1pbmltdW0gYW5kIG1heGltdW0gZHVyYXRpb25cbiAgICBpZiAoZHVyYXRpb24gPCBvcHRpb25zLm1pbkR1cmF0aW9uKSB7XG4gICAgICBkdXJhdGlvbiA9IG9wdGlvbnMubWluRHVyYXRpb247XG4gICAgfSBlbHNlIGlmIChkdXJhdGlvbiA+IG9wdGlvbnMubWF4RHVyYXRpb24pIHtcbiAgICAgIGR1cmF0aW9uID0gb3B0aW9ucy5tYXhEdXJhdGlvbjtcbiAgICB9XG5cbiAgICB2YXIgc3RhcnRpbmdUaW1lID0gRGF0ZS5ub3coKTtcblxuICAgIC8vIFJlcXVlc3QgYW5pbWF0aW9uIGZyYW1lIElEXG4gICAgdmFyIHJlcXVlc3RJRCA9IG51bGw7XG5cbiAgICAvLyBNZXRob2QgaGFuZGxlclxuICAgIHZhciBoYW5kbGVVc2VyRXZlbnQgPSBudWxsO1xuICAgIHZhciB1c2VyRXZlbnRPcHRpb25zID0geyBwYXNzaXZlOiBvcHRpb25zLnBhc3NpdmUgfTtcblxuICAgIGlmIChvcHRpb25zLmNhbmNlbE9uVXNlckFjdGlvbikge1xuICAgICAgLy8gU2V0IGhhbmRsZXIgdG8gY2FuY2VsIHNjcm9sbCBvbiB1c2VyIGFjdGlvblxuICAgICAgaGFuZGxlVXNlckV2ZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXF1ZXN0SUQpO1xuICAgICAgfTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlVXNlckV2ZW50LCB1c2VyRXZlbnRPcHRpb25zKTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVVc2VyRXZlbnQsIHVzZXJFdmVudE9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTZXQgaGFuZGxlciB0byBwcmV2ZW50IHVzZXIgYWN0aW9ucyB3aGlsZSBzY3JvbGwgaXMgYWN0aXZlXG4gICAgICBoYW5kbGVVc2VyRXZlbnQgPSBmdW5jdGlvbihlKSB7IGUucHJldmVudERlZmF1bHQoKTsgfTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVVc2VyRXZlbnQsIHVzZXJFdmVudE9wdGlvbnMpO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZVVzZXJFdmVudCwgdXNlckV2ZW50T3B0aW9ucyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVVc2VyRXZlbnQsIHVzZXJFdmVudE9wdGlvbnMpO1xuXG4gICAgdmFyIHJlbW92ZUxpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZVVzZXJFdmVudCwgdXNlckV2ZW50T3B0aW9ucyk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVVzZXJFdmVudCwgdXNlckV2ZW50T3B0aW9ucyk7XG5cbiAgICAgIGlmIChvcHRpb25zLmNhbmNlbE9uVXNlckFjdGlvbikge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZVVzZXJFdmVudCwgdXNlckV2ZW50T3B0aW9ucyk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVVc2VyRXZlbnQsIHVzZXJFdmVudE9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVVzZXJFdmVudCwgdXNlckV2ZW50T3B0aW9ucyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBzdGVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRpbWVEaWZmID0gRGF0ZS5ub3coKSAtIHN0YXJ0aW5nVGltZTtcbiAgICAgIHZhciB0ID0gKHRpbWVEaWZmIC8gZHVyYXRpb24pIC0gMTtcbiAgICAgIHZhciBlYXNpbmcgPSB0ICogdCAqIHQgKyAxO1xuICAgICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gTWF0aC5yb3VuZChpbml0aWFsU2Nyb2xsUG9zaXRpb24gKyAoZGlmZiAqIGVhc2luZykpO1xuXG4gICAgICB2YXIgZG9TY3JvbGwgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuICAgICAgICBpZiAob3B0aW9ucy5pc1dpbmRvdykge1xuICAgICAgICAgIGlmIChvcHRpb25zLmhvcml6b250YWwpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZWxlbWVudC5zY3JvbGxUbyhwb3NpdGlvbiwgaW5pdGlhbEF4aXNTY29sbFBvc2l0aW9uKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucy5lbGVtZW50LnNjcm9sbFRvKGluaXRpYWxBeGlzU2NvbGxQb3NpdGlvbiwgcG9zaXRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmhvcml6b250YWwpIHtcbiAgICAgICAgICBvcHRpb25zLmVsZW1lbnQuc2Nyb2xsTGVmdCA9IHBvc2l0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdGlvbnMuZWxlbWVudC5zY3JvbGxUb3AgPSBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGltZURpZmYgPCBkdXJhdGlvbiAmJiBzY3JvbGxQb3NpdGlvbiAhPT0gZGVzaXJlZE9mZnNldCkge1xuICAgICAgICAvLyBJZiBzY3JvbGwgZGlkbid0IHJlYWNoIGRlc2lyZWQgb2Zmc2V0IG9yIHRpbWUgaXMgbm90IGVsYXBzZWRcbiAgICAgICAgLy8gU2Nyb2xsIHRvIGEgbmV3IHBvc2l0aW9uXG4gICAgICAgIC8vIEFuZCByZXF1ZXN0IGEgbmV3IHN0ZXBcbiAgICAgICAgZG9TY3JvbGwoc2Nyb2xsUG9zaXRpb24pO1xuXG4gICAgICAgIHJlcXVlc3RJRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHRoZSB0aW1lIGVsYXBzZWQgb3Igd2UgcmVhY2hlZCB0aGUgZGVzaXJlZCBvZmZzZXRcbiAgICAgICAgLy8gU2V0IHNjcm9sbCB0byB0aGUgZGVzaXJlZCBvZmZzZXQgKHdoZW4gcm91bmRpbmcgbWFkZSBpdCB0byBiZSBvZmYgYSBwaXhlbCBvciB0d28pXG4gICAgICAgIC8vIENsZWFyIGFuaW1hdGlvbiBmcmFtZSB0byBiZSBzdXJlXG4gICAgICAgIGRvU2Nyb2xsKGRlc2lyZWRPZmZzZXQpO1xuXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RJRCk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGxpc3RlbmVyc1xuICAgICAgICByZW1vdmVMaXN0ZW5lcnMoKTtcblxuICAgICAgICAvLyBBbmltYXRpb24gaXMgY29tcGxldGUsIGV4ZWN1dGUgY2FsbGJhY2sgaWYgdGhlcmUgaXMgYW55XG4gICAgICAgIGlmIChvcHRpb25zLm9uQ29tcGxldGUgJiYgdHlwZW9mIG9wdGlvbnMub25Db21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG9wdGlvbnMub25Db21wbGV0ZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gU3RhcnQgYW5pbWF0aW5nIHNjcm9sbFxuICAgIHJlcXVlc3RJRCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgIG1vZHVsZS5leHBvcnRzID0gX19BTklNQVRFX1NDUk9MTF9UTztcbiAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcbiAgICB9XG4gICAgZXhwb3J0cy5kZWZhdWx0ID0gX19BTklNQVRFX1NDUk9MTF9UTztcbiAgfSBlbHNlIGlmICh3aW5kb3cpIHtcbiAgICB3aW5kb3cuYW5pbWF0ZVNjcm9sbFRvID0gX19BTklNQVRFX1NDUk9MTF9UTztcbiAgfVxufSkuY2FsbCh0aGlzKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/animated-scroll-to/animated-scroll-to.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var animated_scroll_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animated-scroll-to */ \"./node_modules/animated-scroll-to/animated-scroll-to.js\");\n/* harmony import */ var animated_scroll_to__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(animated_scroll_to__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst COOKIES_ACCEPTED_ALL = 'cookiesAcceptedAll';\n\n// SCROLL THINGS\nconst scrollToAnchor = (e) => {\n    e.preventDefault();\n    const target = e.currentTarget;\n    const scrollTargetName = target.getAttribute('href');\n    const scrollTarget = document.querySelector(scrollTargetName);\n\n    animated_scroll_to__WEBPACK_IMPORTED_MODULE_0___default()(scrollTarget);\n\n    // toggle mobile menu\n    const menuToggleCheckbox = document.querySelector('#navigation__toggle');\n    menuToggleCheckbox.checked = false;\n}\n\nconst initScrollAnimation = () => {\n    const navItems = document.querySelectorAll('.js__navigation__item');\n    navItems.forEach(navItem => {\n        navItem.addEventListener('click', scrollToAnchor);\n    });\n}\n\n// COOKIE THINGS\nconst hideCookieBanner = cookieBannerElem => {\n    cookieBannerElem.classList += ' hidden';\n}\nconst acceptCookies = (cookieBannerElem, localStorage) => {\n    localStorage.setItem(COOKIES_ACCEPTED_ALL, true);\n\n    hideCookieBanner(cookieBannerElem);\n}\n\nconst initCookieBanner = () => {\n    const cookieBanner = document.querySelector('.js__cookie');\n    const cookieButton = cookieBanner.querySelector('.js__cookie--accept');\n\n    const localStorage = window.localStorage;\n    const cookiesAccepted = localStorage.getItem(COOKIES_ACCEPTED_ALL);\n\n    if (cookiesAccepted) {\n        hideCookieBanner(cookieBanner);\n    } else {\n        cookieButton.addEventListener('click', () => acceptCookies(cookieBanner, localStorage));\n    }\n}\n\n// PAYPALL THINGS\nconst disablePaypalButton = () => {\n    const paypalButton = document.querySelector('#ppplus_continueButton');\n    paypalButton.setAttribute('disabled', true);\n\n    const warningMessage = document.querySelector('.buy__payment__warning');\n    warningMessage.classList.remove('hidden');\n}\n\nconst enablePaypalButton = () => {\n    const paypalButton = document.querySelector('#ppplus_continueButton');\n    paypalButton.removeAttribute('disabled');\n\n    const warningMessage = document.querySelector('.buy__payment__warning');\n    warningMessage.classList.add('hidden');\n}\n\nconst paypalIframeLoaded = () => {\n    const loadingIndicator = document.querySelector('.js__buy__payment__loading');\n    loadingIndicator.classList.add('hidden');\n\n    const paypalContainer = document.querySelector('#ppplus');\n    paypalContainer.classList.add('buy__payment__ppp__loaded');\n}\n\nconst initPaypal = () => {\n    fetch('https://28lysztg6d.execute-api.eu-west-1.amazonaws.com/dev/get-approval-url').then(\n        async (body) => {\n            const approvalUrl = await body.json();\n\n            window.ppp = PAYPAL.apps.PPP({\n                'approvalUrl': approvalUrl,\n                'buttonLocation': 'outside',\n                'disableContinue': disablePaypalButton,\n                'enableContinue': enablePaypalButton,\n                'country': 'DE',\n                'language': 'de_DE',\n                'mode': 'sandbox',\n                'onLoad': paypalIframeLoaded,\n                'placeholder': 'ppplus',\n                'styles': {\n                    \"psp\": {\n                        \"font-family\": [\"Helvetica\", \"sans-serif\"],\n                        \"font-size\": \"16px\",\n                        \"color\": \"#4255a2\"\n                    }\n                }\n            });\n        });\n}\n\n// INIT\nconst init = () => {\n    initPaypal();\n    initScrollAnimation();\n    initCookieBanner();\n}\n\ninit();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYW5pbWF0ZVNjcm9sbFRvIGZyb20gJ2FuaW1hdGVkLXNjcm9sbC10byc7XG5cbmNvbnN0IENPT0tJRVNfQUNDRVBURURfQUxMID0gJ2Nvb2tpZXNBY2NlcHRlZEFsbCc7XG5cbi8vIFNDUk9MTCBUSElOR1NcbmNvbnN0IHNjcm9sbFRvQW5jaG9yID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IHNjcm9sbFRhcmdldE5hbWUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgY29uc3Qgc2Nyb2xsVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzY3JvbGxUYXJnZXROYW1lKTtcblxuICAgIGFuaW1hdGVTY3JvbGxUbyhzY3JvbGxUYXJnZXQpO1xuXG4gICAgLy8gdG9nZ2xlIG1vYmlsZSBtZW51XG4gICAgY29uc3QgbWVudVRvZ2dsZUNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdmlnYXRpb25fX3RvZ2dsZScpO1xuICAgIG1lbnVUb2dnbGVDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG59XG5cbmNvbnN0IGluaXRTY3JvbGxBbmltYXRpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanNfX25hdmlnYXRpb25fX2l0ZW0nKTtcbiAgICBuYXZJdGVtcy5mb3JFYWNoKG5hdkl0ZW0gPT4ge1xuICAgICAgICBuYXZJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2Nyb2xsVG9BbmNob3IpO1xuICAgIH0pO1xufVxuXG4vLyBDT09LSUUgVEhJTkdTXG5jb25zdCBoaWRlQ29va2llQmFubmVyID0gY29va2llQmFubmVyRWxlbSA9PiB7XG4gICAgY29va2llQmFubmVyRWxlbS5jbGFzc0xpc3QgKz0gJyBoaWRkZW4nO1xufVxuY29uc3QgYWNjZXB0Q29va2llcyA9IChjb29raWVCYW5uZXJFbGVtLCBsb2NhbFN0b3JhZ2UpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDT09LSUVTX0FDQ0VQVEVEX0FMTCwgdHJ1ZSk7XG5cbiAgICBoaWRlQ29va2llQmFubmVyKGNvb2tpZUJhbm5lckVsZW0pO1xufVxuXG5jb25zdCBpbml0Q29va2llQmFubmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvb2tpZUJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qc19fY29va2llJyk7XG4gICAgY29uc3QgY29va2llQnV0dG9uID0gY29va2llQmFubmVyLnF1ZXJ5U2VsZWN0b3IoJy5qc19fY29va2llLS1hY2NlcHQnKTtcblxuICAgIGNvbnN0IGxvY2FsU3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gICAgY29uc3QgY29va2llc0FjY2VwdGVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oQ09PS0lFU19BQ0NFUFRFRF9BTEwpO1xuXG4gICAgaWYgKGNvb2tpZXNBY2NlcHRlZCkge1xuICAgICAgICBoaWRlQ29va2llQmFubmVyKGNvb2tpZUJhbm5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29va2llQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYWNjZXB0Q29va2llcyhjb29raWVCYW5uZXIsIGxvY2FsU3RvcmFnZSkpO1xuICAgIH1cbn1cblxuLy8gUEFZUEFMTCBUSElOR1NcbmNvbnN0IGRpc2FibGVQYXlwYWxCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgcGF5cGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BwcGx1c19jb250aW51ZUJ1dHRvbicpO1xuICAgIHBheXBhbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICBjb25zdCB3YXJuaW5nTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXlfX3BheW1lbnRfX3dhcm5pbmcnKTtcbiAgICB3YXJuaW5nTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn1cblxuY29uc3QgZW5hYmxlUGF5cGFsQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHBheXBhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcHBsdXNfY29udGludWVCdXR0b24nKTtcbiAgICBwYXlwYWxCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXG4gICAgY29uc3Qgd2FybmluZ01lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV5X19wYXltZW50X193YXJuaW5nJyk7XG4gICAgd2FybmluZ01lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59XG5cbmNvbnN0IHBheXBhbElmcmFtZUxvYWRlZCA9ICgpID0+IHtcbiAgICBjb25zdCBsb2FkaW5nSW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzX19idXlfX3BheW1lbnRfX2xvYWRpbmcnKTtcbiAgICBsb2FkaW5nSW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXG4gICAgY29uc3QgcGF5cGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BwcGx1cycpO1xuICAgIHBheXBhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidXlfX3BheW1lbnRfX3BwcF9fbG9hZGVkJyk7XG59XG5cbmNvbnN0IGluaXRQYXlwYWwgPSAoKSA9PiB7XG4gICAgZmV0Y2goJ2h0dHBzOi8vMjhseXN6dGc2ZC5leGVjdXRlLWFwaS5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9kZXYvZ2V0LWFwcHJvdmFsLXVybCcpLnRoZW4oXG4gICAgICAgIGFzeW5jIChib2R5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhcHByb3ZhbFVybCA9IGF3YWl0IGJvZHkuanNvbigpO1xuXG4gICAgICAgICAgICB3aW5kb3cucHBwID0gUEFZUEFMLmFwcHMuUFBQKHtcbiAgICAgICAgICAgICAgICAnYXBwcm92YWxVcmwnOiBhcHByb3ZhbFVybCxcbiAgICAgICAgICAgICAgICAnYnV0dG9uTG9jYXRpb24nOiAnb3V0c2lkZScsXG4gICAgICAgICAgICAgICAgJ2Rpc2FibGVDb250aW51ZSc6IGRpc2FibGVQYXlwYWxCdXR0b24sXG4gICAgICAgICAgICAgICAgJ2VuYWJsZUNvbnRpbnVlJzogZW5hYmxlUGF5cGFsQnV0dG9uLFxuICAgICAgICAgICAgICAgICdjb3VudHJ5JzogJ0RFJyxcbiAgICAgICAgICAgICAgICAnbGFuZ3VhZ2UnOiAnZGVfREUnLFxuICAgICAgICAgICAgICAgICdtb2RlJzogJ3NhbmRib3gnLFxuICAgICAgICAgICAgICAgICdvbkxvYWQnOiBwYXlwYWxJZnJhbWVMb2FkZWQsXG4gICAgICAgICAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ3BwcGx1cycsXG4gICAgICAgICAgICAgICAgJ3N0eWxlcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJwc3BcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LWZhbWlseVwiOiBbXCJIZWx2ZXRpY2FcIiwgXCJzYW5zLXNlcmlmXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzQyNTVhMlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG59XG5cbi8vIElOSVRcbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgaW5pdFBheXBhbCgpO1xuICAgIGluaXRTY3JvbGxBbmltYXRpb24oKTtcbiAgICBpbml0Q29va2llQmFubmVyKCk7XG59XG5cbmluaXQoKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });