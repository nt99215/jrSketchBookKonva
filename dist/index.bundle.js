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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(13);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _tool = null;
var _isDrawingMode = false;
var _isLineDrawing = false;
var _selectedColor = '';
var _selectedSize = 0;
var _drawingHistory = [];
var _historyLimit = 30;

var _defaultTension = 0.3;
var _defaultBrushSize = 10;
var _defaultLineSize = 15;
var _defaultEraserSize = 15;
var _defaultColor = '#000000';
var _defaultOpacity = 100;

var _mainStage = null;
var _mainDrawLayer = null;
var _currentLayer = null;
var _drawCursor = null;
var _stageSize = { width: 810, height: 700 };

var GameConfig = function () {
    function GameConfig() {
        (0, _classCallCheck3.default)(this, GameConfig);
    }

    (0, _createClass3.default)(GameConfig, null, [{
        key: 'MAIN_STAGE',
        get: function get() {
            return _mainStage;
        },
        set: function set(obj) {
            _mainStage = obj;
        }
    }, {
        key: 'STAGE_SIZE',
        get: function get() {
            return _stageSize;
        },
        set: function set(obj) {
            _stageSize = obj;
        }
    }, {
        key: 'MAIN_LAYER',
        get: function get() {
            return _mainDrawLayer;
        },
        set: function set(obj) {
            _mainDrawLayer = obj;
        }
    }, {
        key: 'CURRENT_LAYER',
        get: function get() {
            return _currentLayer;
        },
        set: function set(obj) {
            _currentLayer = obj;
        }
    }, {
        key: 'DRAW_CURSOR',
        get: function get() {
            return _drawCursor;
        },
        set: function set(obj) {
            _drawCursor = obj;
        }
    }, {
        key: 'CURRENT_TOOL',
        get: function get() {
            return _tool;
        },
        set: function set(obj) {
            _tool = obj;
        }
    }, {
        key: 'DEFAULT_TENSION',
        get: function get() {
            return _defaultTension;
        }
    }, {
        key: 'IS_DRAWING_MODE',
        get: function get() {
            return _isDrawingMode;
        },
        set: function set(bool) {
            _isDrawingMode = bool;
        }
    }, {
        key: 'IS_LINE_DRAWING',
        get: function get() {
            return _isLineDrawing;
        },
        set: function set(bool) {
            _isLineDrawing = bool;
        }
    }, {
        key: 'SELECTED_COLOR',
        get: function get() {
            return _selectedColor;
        },
        set: function set(str) {
            _selectedColor = str;
        }
    }, {
        key: 'SELECTED_SIZE',
        get: function get() {
            return _drawingHistory;
        },
        set: function set(obj) {
            _drawingHistory.push(obj);
        }
    }, {
        key: 'DEFAULT_BRUSH_SIZE',
        get: function get() {
            return _defaultBrushSize;
        }
    }, {
        key: 'DEFAULT_LINE_SIZE',
        get: function get() {
            return _defaultLineSize;
        }
    }, {
        key: 'DEFAULT_ERASER_SIZE',
        get: function get() {
            return _defaultEraserSize;
        }
    }, {
        key: 'DEFAULT_COLOR',
        get: function get() {
            return _defaultColor;
        }
    }, {
        key: 'DEFAULT_OPACITY',
        get: function get() {
            return _defaultOpacity;
        }
    }]);
    return GameConfig;
}();

exports.default = GameConfig;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _GameConfig = __webpack_require__(2);

var _GameConfig2 = _interopRequireDefault(_GameConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LayerManager = function () {
        function LayerManager() {
                (0, _classCallCheck3.default)(this, LayerManager);
        }

        (0, _createClass3.default)(LayerManager, [{
                key: "init",
                value: function init(currentLayer) {

                        if (currentLayer === _GameConfig2.default.MAIN_LAYER) return;
                        var _currentLayer = currentLayer;
                        var img = new Konva.Image({
                                image: _currentLayer.canvas._canvas,
                                width: _GameConfig2.default.STAGE_SIZE.width,
                                height: _GameConfig2.default.STAGE_SIZE.height
                        });
                        _GameConfig2.default.MAIN_LAYER.add(img);
                        _GameConfig2.default.MAIN_LAYER.draw();
                        // _currentLayer.destroy();
                        _GameConfig2.default.MAIN_STAGE.remove(_currentLayer);
                        // _currentLayer.clear();
                        _currentLayer.remove();
                        _currentLayer = null;
                        // console.log("GameConfig.MAIN_LAYER", GameConfig.MAIN_LAYER);
                }
        }, {
                key: "stageUpdate",
                value: function stageUpdate() {
                        /* const scale = 1 / 4;
                         const url = _stage.toDataURL({ pixelRatio: scale });
                         document.getElementById('preview').src = url;*/

                        // let dataUrl = _drawLayer.toDataURL();
                        // this.downloadURI(dataUrl, 'stage.png');
                        // let json = _stage.toJSON();
                        // console.log(json);

                }
        }]);
        return LayerManager;
}();

exports.default = LayerManager;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(9)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(20);
var IE8_DOM_DEFINE = __webpack_require__(21);
var toPrimitive = __webpack_require__(23);
var dP = Object.defineProperty;

exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Utility = function () {
    function Utility() {
        (0, _classCallCheck3.default)(this, Utility);
    }

    (0, _createClass3.default)(Utility, [{
        key: "_rgbToHex",
        value: function _rgbToHex(r, g, b) {

            var rgbToHex = function rgbToHex(r, g, b) {
                return '#' + [r, g, b].map(function (x) {
                    var hex = x.toString(16);
                    return hex.length === 1 ? '0' + hex : hex;
                }).join('');
            };

            // console.log(rgbToHex)
        }
    }, {
        key: "_hexToRgb",
        value: function _hexToRgb(hex) {
            hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (m, r, g, b) {
                return '#' + r + r + g + g + b + b;
            }).substring(1).match(/.{2}/g).map(function (x) {
                return parseInt(x, 16);
            });

            console.log(hex);
        }
    }], [{
        key: "newCtx",
        value: function newCtx(width, height) {
            var canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            return canvas.getContext("2d");
        }
    }, {
        key: "hexToRgb",
        value: function hexToRgb(hexType) {
            var hex = hexType.replace("#", "");
            var value = hex.match(/[a-f\d]/gi);

            // 헥사값이 세자리일 경우, 여섯자리로.
            if (value.length == 3) hex = value[0] + value[0] + value[1] + value[1] + value[2] + value[2];

            value = hex.match(/[a-f\d]{2}/gi);
            var r = parseInt(value[0], 16);
            var g = parseInt(value[1], 16);
            var b = parseInt(value[2], 16);

            return {
                r: r, g: g, b: b, a: 255
            };
        }
    }]);
    return Utility;
}();

exports.default = Utility;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _SketchBookKonva = __webpack_require__(12);

var _SketchBookKonva2 = _interopRequireDefault(_SketchBookKonva);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var s = new _SketchBookKonva2.default('container');

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _LineDraw = __webpack_require__(26);

var _LineDraw2 = _interopRequireDefault(_LineDraw);

var _Brush = __webpack_require__(27);

var _Brush2 = _interopRequireDefault(_Brush);

var _GameConfig = __webpack_require__(2);

var _GameConfig2 = _interopRequireDefault(_GameConfig);

var _Airbrush = __webpack_require__(28);

var _Airbrush2 = _interopRequireDefault(_Airbrush);

var _Crayon = __webpack_require__(29);

var _Crayon2 = _interopRequireDefault(_Crayon);

var _Eraser = __webpack_require__(30);

var _Eraser2 = _interopRequireDefault(_Eraser);

var _Zoom = __webpack_require__(31);

var _Zoom2 = _interopRequireDefault(_Zoom);

var _Move = __webpack_require__(32);

var _Move2 = _interopRequireDefault(_Move);

var _ClearCanvas = __webpack_require__(33);

var _ClearCanvas2 = _interopRequireDefault(_ClearCanvas);

var _ScreenTone = __webpack_require__(34);

var _ScreenTone2 = _interopRequireDefault(_ScreenTone);

var _TextInput = __webpack_require__(35);

var _TextInput2 = _interopRequireDefault(_TextInput);

var _FloodFill = __webpack_require__(36);

var _FloodFill2 = _interopRequireDefault(_FloodFill);

var _Cursor = __webpack_require__(37);

var _Cursor2 = _interopRequireDefault(_Cursor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _id = void 0,
    _stage = void 0,
    _mainLayer = void 0,
    _cursorLayer = void 0;

var $ = function $(id) {
    return document.getElementById(id);
};
var toolsOption = $('toolsOption'),
    brushEl = $('brush'),
    airBrushEl = $('airBrush'),
    crayonEl = $('crayon'),
    fillEl = $('fill'),
    lineEl = $('line'),
    screenToneEl = $('screenTone'),
    eraserEl = $('eraser'),
    textEl = $('text'),
    zoomEl = $('zoom'),

// moveEl = $('move'),
clearEl = $('clear'),
    moveEl = $('move'),


//tools Property
colorEl = $('_color'),
    sizeEl = $('_size'),
    opacityEl = $('_opacity'),
    zoomSlider = $('_zoom'),


/**
 * TOOLS TYPE
 * @type {HTMLElement | jQuery | HTMLElement}
 */
//BRUSH TYPE
brushTypeEl = $('brushType'),


//ERASER TYPE
eraserTypeEl = $('EraserType'),


//LINE TYPE
lineTypeEl = $('lineType'),


//CRAYON TYPE
crayonTypeEl = $('crayonType'),


//SCREEN_TONE TYPE
screenToneTypeEl = $('screenToneType');

var _elementArr = [{ el: brushEl, obj: _Brush2.default }, { el: airBrushEl, obj: _Airbrush2.default }, { el: crayonEl, obj: _Crayon2.default }, { el: fillEl, obj: _FloodFill2.default }, { el: lineEl, obj: _LineDraw2.default }, { el: screenToneEl, obj: _ScreenTone2.default }, { el: textEl, obj: _TextInput2.default }, { el: eraserEl, obj: _Eraser2.default }, { el: zoomEl, obj: _Zoom2.default }, { el: moveEl, obj: _Move2.default }, { el: clearEl, obj: _ClearCanvas2.default }];

var SketchBookKonva = function () {
    function SketchBookKonva(id, width, height) {
        var layer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
        (0, _classCallCheck3.default)(this, SketchBookKonva);

        _id = id;
        this._init();
    }

    (0, _createClass3.default)(SketchBookKonva, [{
        key: "_init",
        value: function _init() {
            var _this = this;

            _stage = new Konva.Stage({
                container: 'container',
                width: _GameConfig2.default.STAGE_SIZE.width,
                height: _GameConfig2.default.STAGE_SIZE.height
            });

            _GameConfig2.default.MAIN_STAGE = _stage;

            // this._createImg();

            _mainLayer = new Konva.Layer();
            _GameConfig2.default.MAIN_LAYER = _mainLayer;
            _stage.add(_mainLayer);

            _cursorLayer = new Konva.Layer();
            _stage.add(_cursorLayer);

            _GameConfig2.default.DRAW_CURSOR = new _Cursor2.default(_stage, _cursorLayer);

            colorEl.onchange = function () {
                if (_GameConfig2.default.CURRENT_TOOL) _GameConfig2.default.CURRENT_TOOL.setColor(this.value);
            };

            sizeEl.onchange = function () {
                if (_GameConfig2.default.CURRENT_TOOL) _GameConfig2.default.CURRENT_TOOL.setSize(this.value);
            };

            opacityEl.onchange = function () {
                if (_GameConfig2.default.CURRENT_TOOL) {
                    _GameConfig2.default.CURRENT_TOOL.setOpacity(this.value);
                    _GameConfig2.default.CURRENT_TOOL.getOpacity();
                }
            };

            zoomSlider.onchange = function () {
                if (_GameConfig2.default.CURRENT_TOOL.constructor.name === 'Zoom') _GameConfig2.default.CURRENT_TOOL.setSize(this.value);
            };

            /**TOOLS SELECT
             *
             */

            var _loop = function _loop(i) {
                var eL = _elementArr[i].el;
                var o = _elementArr[i].obj;
                eL.onclick = function () {
                    return _this._toolSelect(eL.id, o);
                };
            };

            for (var i in _elementArr) {
                _loop(i);
            }

            /**
             * BRUSH STYLE
             */
            brushTypeEl.onchange = function (e) {
                if (_GameConfig2.default.CURRENT_TOOL) _GameConfig2.default.CURRENT_TOOL.setLineType(e);
            };

            /**
             * LINE STYLE
             */
            lineTypeEl.onchange = function (e) {
                if (_GameConfig2.default.CURRENT_TOOL) _GameConfig2.default.CURRENT_TOOL.setLineType(e);
            };

            /**
             * CRAYON STYLE
             */
            crayonTypeEl.onchange = function (e) {
                if (_GameConfig2.default.CURRENT_TOOL) _GameConfig2.default.CURRENT_TOOL.setLineType(e);
            };

            /**
             * CRAYON STYLE
             */
            screenToneTypeEl.onchange = function (e) {
                if (_GameConfig2.default.CURRENT_TOOL) _GameConfig2.default.CURRENT_TOOL.setLineType(e);
            };

            this._toolSelect();
        }
    }, {
        key: "_toolSelect",
        value: function _toolSelect() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Brush2.default;


            _GameConfig2.default.IS_DRAWING_MODE = false;

            if (id === 'clear') {
                this._layerClear();
                return;
            }

            this._toolsDestroy();

            if (id === 'zoom' || id === 'move') {
                obj.prototype.init(_stage);
                return;
            }
            if (id === 'eraser') obj.prototype.init(_stage, _mainLayer);else {
                _GameConfig2.default.IS_DRAWING_MODE = true;
                obj.prototype.init(_stage);
            }

            colorEl.value = obj.prototype.getColor();
            sizeEl.value = obj.prototype.getSize();
            opacityEl.value = obj.prototype.getOpacity();

            _GameConfig2.default.DRAW_CURSOR._drawRect(obj.prototype.getSize());
        }
    }, {
        key: "_layerClear",
        value: function _layerClear() {

            if (_GameConfig2.default.MAIN_LAYER) {
                _stage.remove(_GameConfig2.default.MAIN_LAYER);
                _GameConfig2.default.MAIN_LAYER.destroy();
                _GameConfig2.default.MAIN_LAYER = null;
            }
            _mainLayer = new Konva.Layer();
            _stage.add(_mainLayer);
            _GameConfig2.default.MAIN_LAYER = _mainLayer;
            _mainLayer.draw();
        }
    }, {
        key: "_toolsDestroy",
        value: function _toolsDestroy() {
            if (_GameConfig2.default.CURRENT_TOOL) {
                _GameConfig2.default.CURRENT_TOOL.destroy();
                _GameConfig2.default.DRAW_CURSOR._destroy();
            }
        }
    }]);
    return SketchBookKonva;
}();

exports.default = SketchBookKonva;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(14), __esModule: true };

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(15);
var $Object = __webpack_require__(7).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(16);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(4), 'Object', { defineProperty: __webpack_require__(8).f });


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var core = __webpack_require__(7);
var ctx = __webpack_require__(17);
var hide = __webpack_require__(19);
var has = __webpack_require__(25);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(18);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var createDesc = __webpack_require__(24);
module.exports = __webpack_require__(4) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(4) && !__webpack_require__(9)(function () {
  return Object.defineProperty(__webpack_require__(22)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
var document = __webpack_require__(6).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(5);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _GameConfig = __webpack_require__(2);

var _GameConfig2 = _interopRequireDefault(_GameConfig);

var _LayerManager = __webpack_require__(3);

var _LayerManager2 = _interopRequireDefault(_LayerManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _stage = void 0,
    _drawLayer = void 0,
    _this = void 0,
    isPaint = void 0,
    _line = void 0,
    _dashEnabled = void 0;
var _color = _GameConfig2.default.DEFAULT_COLOR;
var _size = _GameConfig2.default.DEFAULT_LINE_SIZE;
var _opacity = _GameConfig2.default.DEFAULT_OPACITY;
var _dashConfigArr = [[0], [0, 0, 30], [0, 30]];
var _lineType = _dashConfigArr[0];

var LineDraw = function () {
    function LineDraw() {
        (0, _classCallCheck3.default)(this, LineDraw);
    }

    (0, _createClass3.default)(LineDraw, [{
        key: "init",
        value: function init(stage) {
            _GameConfig2.default.CURRENT_TOOL = this;
            _stage = stage;
            _drawLayer = new Konva.Layer();
            _stage.add(_drawLayer);
            _GameConfig2.default.CURRENT_LAYER = _drawLayer;
            _this = this;
            _dashEnabled = false;

            this.useTool();
        }
    }, {
        key: "useTool",
        value: function useTool() {
            _stage.on('mousedown touchstart', function () {
                isPaint = true;
                var pos = _stage.getPointerPosition();
                _line = new Konva.Line({
                    points: [pos.x, pos.y, pos.x, pos.y],
                    // pointerLength: 20,
                    // pointerWidth: 20,
                    lineJoin: 'round',
                    lineCap: 'round',
                    opacity: _this.getOpacity() / 100,
                    stroke: _this.getColor(),
                    strokeWidth: _this.getSize(),
                    dashEnabled: _dashEnabled,
                    dash: _this.getLineType()
                });
                _drawLayer.add(_line);
            });

            _stage.on('mousemove touchmove', function () {

                var pos = _stage.getPointerPosition();
                _GameConfig2.default.DRAW_CURSOR._move(pos.x, pos.y);
                if (!isPaint) return;
                var oldPoints = _line.points();
                _line.points([oldPoints[0], oldPoints[1], pos.x, pos.y]);
                _drawLayer.draw();
            });

            _stage.on('mouseup touchend contentTouchend', function () {
                _GameConfig2.default.DRAW_CURSOR._visible(false);
                isPaint = false;
                _LayerManager2.default.prototype.init(_drawLayer);
                _drawLayer = new Konva.Layer();
                _stage.add(_drawLayer);
                _GameConfig2.default.CURRENT_LAYER = _drawLayer;
                _GameConfig2.default.DRAW_CURSOR._visible(true);
            });
        }
    }, {
        key: "destroy",
        value: function destroy() {
            _LayerManager2.default.prototype.init(_drawLayer);
            isPaint = false;
            if (_stage) _stage.off('mousedown touchstart');
            if (_stage) _stage.off('mousemove touchmove');
            if (_stage) _stage.off('mouseup touchend contentTouchend');
        }

        /**
         *
         * @param color
         */

    }, {
        key: "setColor",
        value: function setColor(color) {
            _color = color;
        }
    }, {
        key: "getColor",
        value: function getColor() {
            return _color;
        }

        /**
         *
         * @param size
         */

    }, {
        key: "setSize",
        value: function setSize(size) {
            _size = size;
            _lineType.pop();
            _lineType.push(_size * 2);
        }
    }, {
        key: "getSize",
        value: function getSize() {
            return _size;
        }

        /**
         *
         * @param opacity
         */

    }, {
        key: "setOpacity",
        value: function setOpacity(opacity) {
            _opacity = opacity;
        }
    }, {
        key: "getOpacity",
        value: function getOpacity() {
            return _opacity;
        }

        /**
         *
         * @param lineType
         */

    }, {
        key: "setLineType",
        value: function setLineType(e) {
            var type = e.target.id.substr(1, e.target.name.length + 1);
            switch (type) {
                case 'stroke':
                    _lineType = [0];
                    break;
                case 'dot':
                    _lineType = [0, this.getSize() * 2];
                    break;
                case 'dash':
                    _lineType = [0, 0, this.getSize() * 2];
                    break;
                default:
                    _lineType = [0];
                    break;
            }
            _dashEnabled = type !== 'stroke';
        }
    }, {
        key: "getLineType",
        value: function getLineType() {
            return _lineType;
        }
    }]);
    return LineDraw;
}();

exports.default = LineDraw;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _GameConfig = __webpack_require__(2);

var _GameConfig2 = _interopRequireDefault(_GameConfig);

var _LayerManager = __webpack_require__(3);

var _LayerManager2 = _interopRequireDefault(_LayerManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _stage = void 0,
    _drawLayer = void 0,
    _this = void 0;
var _color = _GameConfig2.default.DEFAULT_COLOR;
var _size = _GameConfig2.default.DEFAULT_LINE_SIZE;
var _opacity = _GameConfig2.default.DEFAULT_OPACITY;
var _typeConfigArr = [[0, 0], [0, 0, 15], [0, 10]];
var _img = void 0,
    _brushType = void 0,
    _clone = void 0,
    _shapeEnable = void 0;
var _imgObj = { w: 0, h: 0, r: 0 };
var _angleRatio = 4;
var _lineCap = 'round';

var Brush = function () {
    function Brush() {
        (0, _classCallCheck3.default)(this, Brush);
    }

    (0, _createClass3.default)(Brush, [{
        key: "init",
        value: function init(stage) {
            _GameConfig2.default.CURRENT_TOOL = this;
            _stage = stage;
            _drawLayer = new Konva.Layer();
            _stage.add(_drawLayer);
            _GameConfig2.default.CURRENT_LAYER = _drawLayer;
            _this = this;
            _shapeEnable = false;
            this.useTool();
        }
    }, {
        key: "useTool",
        value: function useTool() {
            var _this2 = this;

            var isDrawing = false;
            var currentLine = void 0;
            _stage.on('mousedown touchstart', function (evt) {
                isDrawing = true;
                var pos = _this2.getRelativePointerPosition(_stage);
                if (!_shapeEnable) {
                    currentLine = new Konva.Line({
                        stroke: _this.getColor(),
                        strokeWidth: _this.getSize(),
                        points: [pos.x, pos.y],
                        globalCompositeOperation: 'source-over',
                        lineJoin: 'round',
                        lineCap: _this.getLineCap(),
                        tension: _GameConfig2.default.DEFAULT_TENSION,
                        opacity: _this.getOpacity() / 100

                    });
                    _drawLayer.add(currentLine);
                } else currentLine = { points: [pos.x, pos.y] };
            });

            _stage.on('mousemove touchmove', function (evt) {
                var pos = _this2.getRelativePointerPosition(_stage);
                _GameConfig2.default.DRAW_CURSOR._move(pos.x, pos.y);
                if (!isDrawing) return;
                if (!_shapeEnable) {
                    var newPoints = currentLine.points().concat([pos.x, pos.y]);
                    currentLine.points(newPoints);
                } else {
                    var obj = _imgObj;
                    _img = new Konva.Rect({
                        width: parseInt(obj.w * _this2.getSize()),
                        height: parseInt(obj.h * _this2.getSize()),
                        rotation: obj.r,
                        fill: _this.getColor()
                    });

                    _img.cache();
                    _this2.imageDraw(pos.x, pos.y);
                }
                _drawLayer.batchDraw();
            });

            _stage.on('mouseup touchend contentTouchend', function (evt) {
                _GameConfig2.default.DRAW_CURSOR._visible(false);
                isDrawing = false;
                _LayerManager2.default.prototype.init(_drawLayer);
                _drawLayer = new Konva.Layer();
                _stage.add(_drawLayer);
                _GameConfig2.default.CURRENT_LAYER = _drawLayer;
                _GameConfig2.default.DRAW_CURSOR._visible(true);
            });
        }
    }, {
        key: "getRelativePointerPosition",
        value: function getRelativePointerPosition(node) {
            var transform = node.getAbsoluteTransform().copy();
            transform.invert();
            var pos = node.getStage().getPointerPosition();
            return transform.point(pos);
        }
    }, {
        key: "imageDraw",
        value: function imageDraw(x, y) {
            _clone = _img.clone({
                x: x,
                y: y,
                fill: _this.getColor()
            });

            _clone.cache();
            _drawLayer.add(_clone);
        }
    }, {
        key: "destroy",
        value: function destroy() {
            _LayerManager2.default.prototype.init(_drawLayer);
            if (_stage) _stage.off('mousedown touchstart');
            if (_stage) _stage.off('mousemove touchmove');
            if (_stage) _stage.off('mouseup touchend contentTouchend');
        }

        /**
         *
         * @param color
         */

    }, {
        key: "setColor",
        value: function setColor(color) {
            _color = color;
        }
    }, {
        key: "getColor",
        value: function getColor() {
            return _color;
        }

        /**
         *
         * @param size
         */

    }, {
        key: "setSize",
        value: function setSize(size) {
            _size = size;
        }
    }, {
        key: "getSize",
        value: function getSize() {
            return _size;
        }

        /**
         *
         * @param opacity
         */

    }, {
        key: "setOpacity",
        value: function setOpacity(opacity) {
            _opacity = opacity;
        }
    }, {
        key: "getOpacity",
        value: function getOpacity() {
            return _opacity;
        }

        /**
         *
         * @param lineCap
         */

    }, {
        key: "setLineCap",
        value: function setLineCap(str) {
            _lineCap = str;
        }
    }, {
        key: "getLineCap",
        value: function getLineCap() {
            return _lineCap;
        }

        /**
         *
         * @param linType
         */

    }, {
        key: "setLineType",
        value: function setLineType(e) {
            var type = e.target.id.substr(0, e.target.id.length);
            type = String(type);
            switch (type) {
                case '1':
                    this.setLineCap('round');
                    _shapeEnable = false;
                    break;
                case '2':
                    this.setLineCap('square');
                    _shapeEnable = false;
                    break;
                case '3':
                    _imgObj.w = 1;
                    _imgObj.h = 1;
                    _imgObj.r = 45;
                    _shapeEnable = true;
                    break;
                case '4':
                    _imgObj.w = 1 / _angleRatio;
                    _imgObj.h = 1;
                    _imgObj.r = 0;
                    _shapeEnable = true;
                    break;
                case '5':
                    _imgObj.w = 1;
                    _imgObj.h = 1 / _angleRatio;
                    _imgObj.r = 0;
                    _shapeEnable = true;
                    break;
                case '6':
                    _imgObj.w = 1;
                    _imgObj.h = 1 / _angleRatio;
                    _imgObj.r = -35;
                    _shapeEnable = true;
                    break;

            }
        }
    }, {
        key: "getLineType",
        value: function getLineType() {
            return _brushType;
        }
    }]);
    return Brush;
}();

exports.default = Brush;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _GameConfig = __webpack_require__(2);

var _GameConfig2 = _interopRequireDefault(_GameConfig);

var _LayerManager = __webpack_require__(3);

var _LayerManager2 = _interopRequireDefault(_LayerManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _stage = void 0,
    _drawLayer = void 0,
    _this = void 0;
var _color = _GameConfig2.default.DEFAULT_COLOR;
var _size = _GameConfig2.default.DEFAULT_LINE_SIZE;
var _opacity = _GameConfig2.default.DEFAULT_OPACITY;

var Airbrush = function () {
    function Airbrush() {
        (0, _classCallCheck3.default)(this, Airbrush);
    }

    (0, _createClass3.default)(Airbrush, [{
        key: "init",
        value: function init(stage) {

            _GameConfig2.default.CURRENT_TOOL = this;
            _stage = stage;
            _drawLayer = new Konva.Layer();
            _stage.add(_drawLayer);
            _GameConfig2.default.CURRENT_LAYER = _drawLayer;
            _this = this;

            this.useTool();
        }
    }, {
        key: "useTool",
        value: function useTool() {
            var _this2 = this;

            var isDrawing = false;
            var currentLine = void 0;
            _stage.on('mousedown touchstart', function (evt) {
                // if(!GameConfig.IS_DRAWING_MODE) return;
                // Start drawing
                isDrawing = true;
                var pos = _this2.getRelativePointerPosition(_stage);
                currentLine = { points: [pos.x, pos.y]
                    // _drawLayer.add(currentLine);
                };
            });

            _stage.on('mousemove touchmove', function (evt) {
                if (!isDrawing) return;
                var pos = _this2.getRelativePointerPosition(_stage);
                // let newPoints = currentLine.points().concat([pos.x, pos.y]);
                // currentLine.points(newPoints);
                _this2.imageDraw(pos.x, pos.y);
            });

            _stage.on('mouseup touchend contentTouchend', function (evt) {
                // End drawing
                isDrawing = false;
                _LayerManager2.default.prototype.init(_drawLayer);
                _drawLayer = new Konva.Layer();
                _stage.add(_drawLayer);
                _GameConfig2.default.CURRENT_LAYER = _drawLayer;
            });
        }
    }, {
        key: "getRelativePointerPosition",
        value: function getRelativePointerPosition(node) {
            // the function will return pointer position relative to the passed node
            var transform = node.getAbsoluteTransform().copy();
            // to detect relative position we need to invert transform
            transform.invert();

            // get pointer (say mouse or touch) position
            var pos = node.getStage().getPointerPosition();

            // now we find relative point
            return transform.point(pos);
        }
    }, {
        key: "imageDraw",
        value: function imageDraw(x, y) {

            var angle = Math.random() * Math.PI * 2;
            var radius = Math.random() * this.getSize() / 2;
            var xPos = x + Math.cos(angle) * radius;
            var yPos = y + Math.sin(angle) * radius;
            var c = this.getColor();
            var r = Math.random() * 10 / 5;
            for (var i = 0; i < 3; i++) {
                var rect = new Konva.Rect({
                    x: xPos,
                    y: yPos,
                    width: r,
                    height: r,
                    fill: c,
                    perfectDrawEnabled: false,
                    listening: false
                });
                _drawLayer.add(rect);
                _drawLayer.batchDraw();
            }
        }
    }, {
        key: "destroy",
        value: function destroy() {
            _LayerManager2.default.prototype.init(_drawLayer);
            if (_stage) _stage.off('mousedown touchstart');
            if (_stage) _stage.off('mousemove touchmove');
            if (_stage) _stage.off('mouseup touchend contentTouchend');
        }

        /**
         *
         * @param color
         */

    }, {
        key: "setColor",
        value: function setColor(color) {
            _color = color;
        }
    }, {
        key: "getColor",
        value: function getColor() {
            return _color;
        }

        /**
         *
         * @param size
         */

    }, {
        key: "setSize",
        value: function setSize(size) {
            _size = size;
        }
    }, {
        key: "getSize",
        value: function getSize() {
            return _size;
        }

        /**
         *
         * @param opacity
         */

    }, {
        key: "setOpacity",
        value: function setOpacity(opacity) {
            _opacity = opacity;
        }
    }, {
        key: "getOpacity",
        value: function getOpacity() {
            return _opacity;
        }
    }]);
    return Airbrush;
}();

exports.default = Airbrush;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _GameConfig = __webpack_require__(2);

var _GameConfig2 = _interopRequireDefault(_GameConfig);

var _LayerManager = __webpack_require__(3);

var _LayerManager2 = _interopRequireDefault(_LayerManager);

var _utility = __webpack_require__(10);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _stage = void 0,
    _drawLayer = void 0,
    _this = void 0,
    _pattern = void 0,
    _clone = void 0;
var _color = _GameConfig2.default.DEFAULT_COLOR;
var _size = _GameConfig2.default.DEFAULT_LINE_SIZE * 2;
var _opacity = _GameConfig2.default.DEFAULT_OPACITY;
var _crayonImageType = 0;
var _imgSrc = ['asset/image/pattern/crayon0/pattern_0.png', 'asset/image/pattern/crayon1/pattern_1.png', 'asset/image/pattern/crayon2/pattern_2.png'];

var Crayon = function () {
    function Crayon() {
        (0, _classCallCheck3.default)(this, Crayon);
    }

    (0, _createClass3.default)(Crayon, [{
        key: "init",
        value: function init(stage) {

            _GameConfig2.default.CURRENT_TOOL = this;
            _stage = stage;
            _drawLayer = new Konva.Layer();
            _stage.add(_drawLayer);
            _GameConfig2.default.CURRENT_LAYER = _drawLayer;
            _this = this;
            this.getCrayonType();
            this.useTool();
        }
    }, {
        key: "useTool",
        value: function useTool() {
            var _this2 = this;

            var isDrawing = false;
            var currentLine = void 0;

            _stage.on('mousedown touchstart', function (evt) {
                // if(!GameConfig.IS_DRAWING_MODE) return;
                isDrawing = true;
                var pos = _this2.getRelativePointerPosition(_stage);
                currentLine = { points: [pos.x, pos.y] };
                _this2.getCrayonProp();
            });

            _stage.on('mousemove touchmove', function (evt) {
                var pos = _this2.getRelativePointerPosition(_stage);
                _GameConfig2.default.DRAW_CURSOR._move(pos.x, pos.y);
                if (!isDrawing) return;
                _this2.crayonDraw(pos.x, pos.y);
                _drawLayer.batchDraw();
            });

            _stage.on('mouseup touchend contentTouchend', function (evt) {
                _GameConfig2.default.DRAW_CURSOR._visible(false);
                isDrawing = false;
                _LayerManager2.default.prototype.init(_drawLayer);
                _drawLayer = new Konva.Layer();
                _stage.add(_drawLayer);
                _GameConfig2.default.CURRENT_LAYER = _drawLayer;
                _GameConfig2.default.DRAW_CURSOR._visible(true);
            });
        }
    }, {
        key: "getRelativePointerPosition",
        value: function getRelativePointerPosition(node) {
            var transform = node.getAbsoluteTransform().copy();
            // transform.invert();
            var pos = node.getStage().getPointerPosition();
            return transform.point(pos);
        }
    }, {
        key: "getCrayonType",
        value: function getCrayonType() {
            _pattern = new Image();
            _pattern.onload = function () {
                var img = new Konva.Image({
                    image: _pattern
                });
                _pattern = img;
                _pattern.cache();
            };
            _pattern.src = _imgSrc[this.getLineType()];
        }
    }, {
        key: "getCrayonProp",
        value: function getCrayonProp() {
            var c = _utility2.default.hexToRgb(this.getColor());
            _pattern.filters([Konva.Filters.RGBA]);
            _pattern.red(c.r);
            _pattern.green(c.g);
            _pattern.blue(c.b);

            var obj = _pattern.attrs.image;
            obj.width = this.getSize();
            obj.height = this.getSize();
        }
    }, {
        key: "crayonDraw",
        value: function crayonDraw(x, y) {

            var obj = _pattern.attrs.image;
            _clone = _pattern.clone({
                x: x - obj.width / 2,
                y: y - obj.height / 2
            });
            _clone.cache();
            _drawLayer.add(_clone);
        }
    }, {
        key: "destroy",
        value: function destroy() {
            _LayerManager2.default.prototype.init(_drawLayer);
            if (_stage) _stage.off('mousedown touchstart');
            if (_stage) _stage.off('mousemove touchmove');
            if (_stage) _stage.off('mouseup touchend contentTouchend');
        }

        /**
         *
         * @param color
         */

    }, {
        key: "setColor",
        value: function setColor(color) {
            _color = color;
        }
    }, {
        key: "getColor",
        value: function getColor() {
            return _color;
        }

        /**
         *
         * @param size
         */

    }, {
        key: "setSize",
        value: function setSize(size) {
            _size = size * 2;
        }
    }, {
        key: "getSize",
        value: function getSize() {
            return _size;
        }

        /**
         *
         * @param opacity
         */

    }, {
        key: "setOpacity",
        value: function setOpacity(opacity) {
            _opacity = opacity;
        }
    }, {
        key: "getOpacity",
        value: function getOpacity() {
            return _opacity;
        }

        /**
         *
         * @param lineType
         */

    }, {
        key: "setLineType",
        value: function setLineType(e) {
            var type = e.target.id.substr(1, e.target.name.length + 1);
            switch (type) {
                case 'cA':
                    _crayonImageType = 0;
                    break;
                case 'cB':
                    _crayonImageType = 1;
                    break;
                case 'cC':
                    _crayonImageType = 2;
                    break;
                default:
                    _crayonImageType = 0;
                    break;
            }
            this.getCrayonType();
        }
    }, {
        key: "getLineType",
        value: function getLineType() {
            return _crayonImageType;
        }
    }]);
    return Crayon;
}();

exports.default = Crayon;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _GameConfig = __webpack_require__(2);

var _GameConfig2 = _interopRequireDefault(_GameConfig);

var _LayerManager = __webpack_require__(3);

var _LayerManager2 = _interopRequireDefault(_LayerManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _stage = void 0,
    _this = void 0,
    _mode = void 0,
    _currentNum = void 0,
    _drawLayer = void 0,
    isDrawing = void 0,
    _lineCap = void 0;
var _lineArr = [];
var _color = _GameConfig2.default.DEFAULT_COLOR;
var _size = _GameConfig2.default.DEFAULT_LINE_SIZE;
var _opacity = _GameConfig2.default.DEFAULT_OPACITY;

var Eraser = function () {
    function Eraser() {
        (0, _classCallCheck3.default)(this, Eraser);
    }

    (0, _createClass3.default)(Eraser, [{
        key: "init",
        value: function init(stage, drawLayer) {

            _GameConfig2.default.CURRENT_TOOL = this;
            _stage = stage;
            _drawLayer = drawLayer;
            _this = this;
            this.useTool();
        }
    }, {
        key: "useTool",
        value: function useTool() {
            var _this2 = this;

            isDrawing = false;
            var currentLine = void 0;
            _stage.on('mousedown touchstart', function (evt) {
                isDrawing = true;
                var pos = _this2.getRelativePointerPosition(_stage);
                currentLine = new Konva.Line({
                    stroke: _this.getColor(),
                    strokeWidth: _this.getSize(),
                    points: [pos.x, pos.y],
                    lineJoin: 'round',
                    lineCap: 'round',
                    tension: _GameConfig2.default.DEFAULT_TENSION,
                    opacity: _this.getOpacity() / 100,
                    globalCompositeOperation: 'destination-out'
                });
                _drawLayer.add(currentLine);
            });

            _stage.on('mousemove touchmove', function () {
                var pos = _this2.getRelativePointerPosition(_stage);
                _GameConfig2.default.DRAW_CURSOR._move(pos.x, pos.y);
                if (!isDrawing) return;

                var newPoints = currentLine.points().concat([pos.x, pos.y]);
                currentLine.points(newPoints);
                _drawLayer.batchDraw();
            });

            _stage.on('mouseup touchend contentTouchend', function (evt) {
                _GameConfig2.default.DRAW_CURSOR._visible(false);
                isDrawing = false;
                /*LayerManager.prototype.init(_drawLayer);
                _drawLayer = new Konva.Layer();
                _stage.add(_drawLayer);
                GameConfig.CURRENT_LAYER = _drawLayer;*/
                _GameConfig2.default.DRAW_CURSOR._visible(true);
            });
        }
    }, {
        key: "getRelativePointerPosition",
        value: function getRelativePointerPosition(node) {
            var transform = node.getAbsoluteTransform().copy();
            transform.invert();
            var pos = node.getStage().getPointerPosition();
            return transform.point(pos);
        }
    }, {
        key: "destroy",
        value: function destroy() {
            // console.log("eraseEND")
            if (_stage) _stage.off('mousedown touchstart');
            if (_stage) _stage.off('mousemove touchmove');
            if (_stage) _stage.off('mouseup touchend contentTouchend');
        }

        /**
         *
         * @param color
         */

    }, {
        key: "setColor",
        value: function setColor(color) {
            _color = color;
        }
    }, {
        key: "getColor",
        value: function getColor() {
            return _color;
        }

        /**
         *
         * @param size
         */

    }, {
        key: "setSize",
        value: function setSize(size) {
            _size = size;
        }
    }, {
        key: "getSize",
        value: function getSize() {
            return _size;
        }

        /**
         *
         * @param opacity
         */

    }, {
        key: "setOpacity",
        value: function setOpacity(opacity) {
            _opacity = opacity;
        }
    }, {
        key: "getOpacity",
        value: function getOpacity() {
            return _opacity;
        }

        /**
         *
         * @param lineCap
         */

    }, {
        key: "setLineCap",
        value: function setLineCap(str) {
            _lineCap = str;
        }
    }, {
        key: "getLineCap",
        value: function getLineCap() {
            return _lineCap;
        }

        /**
         *
         * @param linType
         */

    }, {
        key: "setLineType",
        value: function setLineType(str) {}
    }, {
        key: "getLineType",
        value: function getLineType(str) {}
    }]);
    return Eraser;
}();

exports.default = Eraser;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _GameConfig = __webpack_require__(2);

var _GameConfig2 = _interopRequireDefault(_GameConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _defaultViewPort = 1;
var _minimumViewPort = 50;
var _maximumViewPort = 200;
var _currentViewPort = 100;
var _stage = void 0,
    _drawLayer = void 0,
    _this = void 0;
var _zoomScale = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2];
var _zoomScope = 1;

var Zoom = function () {
    function Zoom() {
        (0, _classCallCheck3.default)(this, Zoom);
    }

    (0, _createClass3.default)(Zoom, [{
        key: 'init',
        value: function init(stage, drawLayer) {
            _GameConfig2.default.CURRENT_TOOL = this;
            _stage = stage;
            _drawLayer = drawLayer;
            _this = this;
            this.sizeSetMouse();
        }
    }, {
        key: 'sizeSetMouse',
        value: function sizeSetMouse() {
            var _this2 = this;

            _stage.on('mousedown touchstart', function (evt) {
                evt.evt.preventDefault();
                var oldScale = _zoomScale.indexOf(_stage.scaleX());
                if (oldScale === _zoomScale.length - 1 || oldScale === 0) _zoomScope = -_zoomScope;
                var newScale = _zoomScale[oldScale + _zoomScope];
                _this2.scaleModify(newScale);
                /*_stage.scale({x: newScale, y: newScale});
                  let mousePointTo = {
                      x: _stage.getPointerPosition().x / oldScale - _stage.x() / oldScale,
                      y: _stage.getPointerPosition().y / oldScale - _stage.y() / oldScale
                  };
                  let newPos = {
                      x: -(mousePointTo.x - _stage.getPointerPosition().x / newScale) * newScale,
                      y: -(mousePointTo.y - _stage.getPointerPosition().y / newScale) * newScale
                  };
                  console.log(mousePointTo, newPos, newScale)
                  _stage.position(newPos);*/
            });
        }
    }, {
        key: 'scaleModify',
        value: function scaleModify(scale) {
            _stage.scale({ x: scale, y: scale });
            _stage.draw();
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            if (_stage) _stage.off('mousedown touchstart');
        }

        /**
         *
         * @param size
         */

    }, {
        key: 'setSize',
        value: function setSize(point) {
            /*  console.log(point)
              if(_currentViewPort >= _minimumViewPort && _currentViewPort <= _maximumViewPort)
              _currentViewPort = point;*/
            _currentViewPort = point / 100;
            this.scaleModify(this.getSize());
        }
    }, {
        key: 'getSize',
        value: function getSize() {
            return _currentViewPort;
        }
    }]);
    return Zoom;
}();

exports.default = Zoom;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _GameConfig = __webpack_require__(2);

var _GameConfig2 = _interopRequireDefault(_GameConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _stage = void 0;

var Move = function () {
    function Move() {
        (0, _classCallCheck3.default)(this, Move);
    }

    (0, _createClass3.default)(Move, [{
        key: "init",
        value: function init(stage) {
            _GameConfig2.default.CURRENT_TOOL = this;
            _GameConfig2.default.IS_DRAWING_MODE = false;
            _stage = stage;
            _stage.draggable(true);
        }
    }, {
        key: "destroy",
        value: function destroy() {
            if (_stage) _stage.draggable(false);
        }
    }]);
    return Move;
}();

exports.default = Move;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClearCanvas = function () {
    function ClearCanvas() {
        (0, _classCallCheck3.default)(this, ClearCanvas);
    }

    (0, _createClass3.default)(ClearCanvas, [{
        key: "canvasClear",
        value: function canvasClear(canvas) {
            // alert("are you sure?");
            canvas.clear();
        }
    }]);
    return ClearCanvas;
}();

exports.default = ClearCanvas;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _GameConfig = __webpack_require__(2);

var _GameConfig2 = _interopRequireDefault(_GameConfig);

var _LayerManager = __webpack_require__(3);

var _LayerManager2 = _interopRequireDefault(_LayerManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _stage = void 0,
    _drawLayer = void 0,
    _this = void 0,
    _patternImage = void 0,
    _patternGroup = void 0,
    _fillRect = void 0;
var _color = _GameConfig2.default.DEFAULT_COLOR;
var _size = _GameConfig2.default.DEFAULT_LINE_SIZE;
var _opacity = _GameConfig2.default.DEFAULT_OPACITY;
var _lineCap = 'round';
var _patternType = 'A';
var _patterUrl = 'asset/image/screenTone/screenToneType';

var Brush = function () {
    function Brush() {
        (0, _classCallCheck3.default)(this, Brush);
    }

    (0, _createClass3.default)(Brush, [{
        key: "init",
        value: function init(stage) {

            _GameConfig2.default.CURRENT_TOOL = this;
            _stage = stage;
            _drawLayer = new Konva.Layer();
            _stage.add(_drawLayer);
            _GameConfig2.default.CURRENT_LAYER = _drawLayer;
            _this = this;
            this.useTool();
        }
    }, {
        key: "useTool",
        value: function useTool() {
            var _this2 = this;

            var isDrawing = false;
            var currentLine = void 0;
            _stage.on('mousedown touchstart', function (evt) {

                var pos = _this2.getRelativePointerPosition(_stage);
                _patternImage = new Image();
                // _patternImage.src = 'asset/image/screenTone/screenToneTypeA.png';
                _patternImage.src = _this2.getLineType();
                _patternImage.onload = function () {
                    _patternGroup = new Konva.Group();
                    _drawLayer.add(_patternGroup);

                    currentLine = new Konva.Line({
                        stroke: _this.getColor(),
                        strokeWidth: _this.getSize(),
                        points: [pos.x, pos.y],
                        lineJoin: 'round',
                        lineCap: _this.getLineCap(),
                        tension: _GameConfig2.default.DEFAULT_TENSION,
                        fill: '#ffcc00',
                        opacity: _this.getOpacity() / 100
                    });

                    _fillRect = new Konva.Rect({
                        x: 0,
                        y: 0,
                        width: _GameConfig2.default.STAGE_SIZE.width,
                        height: _GameConfig2.default.STAGE_SIZE.height,
                        fillPatternImage: _patternImage,
                        globalCompositeOperation: 'source-in'
                    });

                    isDrawing = true;
                };
            });

            _stage.on('mousemove touchmove', function (evt) {
                var pos = _this2.getRelativePointerPosition(_stage);
                _GameConfig2.default.DRAW_CURSOR._move(pos.x, pos.y);
                if (!isDrawing) return;
                var newPoints = currentLine.points().concat([pos.x, pos.y]);
                currentLine.points(newPoints);

                _patternGroup.add(currentLine);
                _drawLayer.add(_fillRect);
                _drawLayer.batchDraw();
            });

            _stage.on('mouseup touchend contentTouchend', function (evt) {
                _GameConfig2.default.DRAW_CURSOR._visible(false);
                isDrawing = false;
                _LayerManager2.default.prototype.init(_drawLayer);
                _drawLayer = new Konva.Layer();
                _stage.add(_drawLayer);
                _GameConfig2.default.CURRENT_LAYER = _drawLayer;
                _GameConfig2.default.DRAW_CURSOR._visible(true);
            });
        }
    }, {
        key: "getRelativePointerPosition",
        value: function getRelativePointerPosition(node) {
            var transform = node.getAbsoluteTransform().copy();
            transform.invert();
            var pos = node.getStage().getPointerPosition();
            return transform.point(pos);
        }
    }, {
        key: "destroy",
        value: function destroy() {
            _LayerManager2.default.prototype.init(_drawLayer);
            if (_stage) _stage.off('mousedown touchstart');
            if (_stage) _stage.off('mousemove touchmove');
            if (_stage) _stage.off('mouseup touchend contentTouchend');
        }

        /**
         *
         * @param color
         */

    }, {
        key: "setColor",
        value: function setColor(color) {
            _color = color;
        }
    }, {
        key: "getColor",
        value: function getColor() {
            return _color;
        }

        /**
         *
         * @param size
         */

    }, {
        key: "setSize",
        value: function setSize(size) {
            _size = size;
        }
    }, {
        key: "getSize",
        value: function getSize() {
            return _size;
        }

        /**
         *
         * @param opacity
         */

    }, {
        key: "setOpacity",
        value: function setOpacity(opacity) {
            _opacity = opacity;
        }
    }, {
        key: "getOpacity",
        value: function getOpacity() {
            return _opacity;
        }

        /**
         *
         * @param lineCap
         */

    }, {
        key: "setLineCap",
        value: function setLineCap(str) {
            _lineCap = str;
        }
    }, {
        key: "getLineCap",
        value: function getLineCap() {
            return _lineCap;
        }

        /**
         *
         * @param linType
         */

    }, {
        key: "setLineType",
        value: function setLineType(e) {
            var type = e.target.id.substr(2, e.target.name.length + 1);
            _patternType = type;
        }
    }, {
        key: "getLineType",
        value: function getLineType() {
            var url = _patterUrl + _patternType + '.png';
            return url;
        }
    }]);
    return Brush;
}();

exports.default = Brush;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _GameConfig = __webpack_require__(2);

var _GameConfig2 = _interopRequireDefault(_GameConfig);

var _LayerManager = __webpack_require__(3);

var _LayerManager2 = _interopRequireDefault(_LayerManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _stage = void 0,
    _drawLayer = void 0,
    _this = void 0,
    _textarea = void 0,
    _textNode = void 0;
var _color = _GameConfig2.default.DEFAULT_COLOR;
var _size = _GameConfig2.default.DEFAULT_LINE_SIZE;
var _opacity = _GameConfig2.default.DEFAULT_OPACITY;
var _defaultText = '글을 입력하세요';
// const _defaultText = '글을';
var _fontFamily = ['Nanum Brush Script', 'Nanum Pen Script', 'NanumBarunGothic', 'NanumBarunGothic YetHangul', 'NanumBarunpen', 'NanumGothic', 'NanumGothic Eco', 'NanumGothicCoding', 'NanumMyeongjo', 'NanumMyeongjo Eco', 'NanumMyeongjo YetHangul', 'NanumSquare', 'NanumSquare_ac', 'NanumSquareRound'];

var TextInput = function () {
    function TextInput() {
        (0, _classCallCheck3.default)(this, TextInput);
    }

    (0, _createClass3.default)(TextInput, [{
        key: "init",
        value: function init(stage) {

            _GameConfig2.default.CURRENT_TOOL = this;
            _stage = stage;
            _drawLayer = new Konva.Layer();
            _stage.add(_drawLayer);
            _GameConfig2.default.CURRENT_LAYER = _drawLayer;
            _this = this;

            this.useTool();
        }
    }, {
        key: "useTool",
        value: function useTool() {
            var _this2 = this;

            var isDrawing = false;

            _stage.on('mousedown touchstart', function (evt) {
                isDrawing = !isDrawing;
                var pos = _this2.getRelativePointerPosition(_stage);
                var ff = _fontFamily[0];
                if (isDrawing) {
                    _textNode = new Konva.Text({
                        // text: _defaultText,
                        x: pos.x,
                        y: pos.y,
                        fontSize: _this2.getSize(),
                        fontFamily: ff,
                        fill: _this2.getColor()
                    });

                    _drawLayer.add(_textNode);

                    var stageBox = _stage.getContainer().getBoundingClientRect();
                    var areaPosition = {
                        x: pos.x + stageBox.left,
                        y: pos.y + stageBox.top
                    };

                    _textarea = document.createElement('textarea');
                    document.body.appendChild(_textarea);

                    _textarea.value = _textNode.text();
                    _textarea.style.position = 'absolute';
                    _textarea.style.top = areaPosition.y + 'px';
                    _textarea.style.left = areaPosition.x + 'px';
                    // _textarea.style.width = _textNode.width() + 'px';
                    _textarea.style.width = '30px';
                    _textarea.style.height = _textNode.height() + 'px';
                    _textarea.focus();
                    _textarea.addEventListener('input', _this2.updateValue);
                } else {
                    // _textNode.text(_textarea.value);
                    document.body.removeChild(_textarea);
                    // _drawLayer.add(_textNode);
                    // _drawLayer.draw();
                }
            });
        }
    }, {
        key: "updateValue",
        value: function updateValue() {

            // _textNode.text(_textarea.value);
            // _textarea.style.position = 'absolute';
            // _textarea.style.top = areaPosition.y + 'px';
            // _textarea.style.left = areaPosition.x + 'px';
            _textarea.style.width = _textNode.width() + 'px';
            _textarea.style.height = _textNode.height() + 'px';

            // console.log(_textarea.value);

            if (_textarea.value) {
                _textNode.text(_textarea.value);
                _drawLayer.draw();
            }
        }
    }, {
        key: "getRelativePointerPosition",
        value: function getRelativePointerPosition(node) {
            var transform = node.getAbsoluteTransform().copy();
            transform.invert();
            var pos = node.getStage().getPointerPosition();
            return transform.point(pos);
        }
    }, {
        key: "textInput",
        value: function textInput(x, y) {
            var text = new Konva.Text({
                x: x,
                y: y,
                text: '나눔스퀘어',
                fontSize: 30,
                fontFamily: '나눔고딕',
                // fontFamily: '나눔스퀘어',
                fill: this.getColor()
            });
            _drawLayer.add(text);
            _drawLayer.batchDraw();
        }
    }, {
        key: "destroy",
        value: function destroy() {
            _LayerManager2.default.prototype.init(_drawLayer);
            if (_textarea) document.body.removeChild(_textarea);
            if (_stage) _stage.off('mousedown touchstart');
            if (_stage) _stage.off('mousemove touchmove');
            if (_stage) _stage.off('mouseup touchend contentTouchend');
        }

        /**
         *
         * @param color
         */

    }, {
        key: "setColor",
        value: function setColor(color) {
            _color = color;
        }
    }, {
        key: "getColor",
        value: function getColor() {
            return _color;
        }

        /**
         *
         * @param size
         */

    }, {
        key: "setSize",
        value: function setSize(size) {
            _size = size;
        }
    }, {
        key: "getSize",
        value: function getSize() {
            return _size;
        }

        /**
         *
         * @param opacity
         */

    }, {
        key: "setOpacity",
        value: function setOpacity(opacity) {
            _opacity = opacity;
        }
    }, {
        key: "getOpacity",
        value: function getOpacity() {
            return _opacity;
        }
    }]);
    return TextInput;
}();

exports.default = TextInput;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _GameConfig = __webpack_require__(2);

var _GameConfig2 = _interopRequireDefault(_GameConfig);

var _LayerManager = __webpack_require__(3);

var _LayerManager2 = _interopRequireDefault(_LayerManager);

var _utility = __webpack_require__(10);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _stage = void 0,
    _drawLayer = void 0,
    _this = void 0;
var _color = _GameConfig2.default.DEFAULT_COLOR;
var _size = _GameConfig2.default.DEFAULT_LINE_SIZE;
var _opacity = _GameConfig2.default.DEFAULT_OPACITY;
var g_imgData = void 0,
    g_canvasWidth = void 0,
    g_targetColor = void 0;

var FloodFillBack = function () {
    function FloodFillBack() {
        (0, _classCallCheck3.default)(this, FloodFillBack);
    }

    (0, _createClass3.default)(FloodFillBack, [{
        key: "init",
        value: function init(stage) {

            _GameConfig2.default.CURRENT_TOOL = this;
            _stage = stage;
            _drawLayer = _GameConfig2.default.MAIN_LAYER;
            _this = this;
            this.useTool();
        }
    }, {
        key: "useTool",
        value: function useTool() {
            var _this2 = this;

            var isDrawing = false;
            _stage.on('mousedown touchstart', function (evt) {
                isDrawing = true;
                var pos = _this2.getRelativePointerPosition(_stage);
                var color = _utility2.default.hexToRgb(_this2.getColor());
                _this2.paintAt(_drawLayer, color, pos.x, pos.y);
            });
        }
    }, {
        key: "paintAt",
        value: function paintAt(ctx, targetColor, startX, startY) {

            g_targetColor = targetColor;
            g_canvasWidth = ctx.canvas.width;
            g_imgData = ctx.canvas.context._context.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);

            var pixelPos = (startY * g_canvasWidth + startX) * 4,
                r = g_imgData.data[pixelPos],
                g = g_imgData.data[pixelPos + 1],
                b = g_imgData.data[pixelPos + 2],
                a = g_imgData.data[pixelPos + 3];

            if (r === g_targetColor.r && g === g_targetColor.g && b === g_targetColor.b && a === g_targetColor.a) {
                // Return because trying to fill with the same color
                return null;
            }

            this.floodFill(ctx, startX, startY, r, g, b, a);

            // ctx.putImageData(g_imgData, 0, 0);
            _drawLayer.canvas.context.putImageData(g_imgData, 0, 0);
            g_imgData = null;
        }
    }, {
        key: "floodFill",
        value: function floodFill(ctx, startX, startY, startR, startG, startB, startA) {
            var canvasWidth = g_canvasWidth,
                newPos = void 0,
                x = void 0,
                y = void 0,
                pixelPos = void 0,
                reachLeft = void 0,
                reachRight = void 0,
                drawingBoundLeft = 0,
                drawingBoundTop = 0,
                drawingBoundRight = ctx.canvas.width,
                drawingBoundBottom = ctx.canvas.height,
                pixelStack = [[startX, startY]];

            while (pixelStack.length) {

                newPos = pixelStack.pop();
                x = newPos[0];
                y = newPos[1];

                // Get current pixel position
                pixelPos = (y * canvasWidth + x) * 4;

                // Go up as long as the color matches and are inside the canvas
                while (y > drawingBoundTop && this.matchStartColor(pixelPos, startR, startG, startB, startA)) {
                    y -= 1;
                    pixelPos -= canvasWidth * 4;
                }

                pixelPos += canvasWidth * 4;
                y += 1;
                reachLeft = false;
                reachRight = false;

                // Go down as long as the color matches and in inside the canvas
                while (y < drawingBoundBottom && this.matchStartColor(pixelPos, startR, startG, startB, startA)) {
                    y += 1;

                    this.colorPixel(pixelPos);

                    if (x > drawingBoundLeft) {
                        if (this.matchStartColor(pixelPos - 4, startR, startG, startB, startA)) {
                            if (!reachLeft) {
                                // Add pixel to stack
                                pixelStack.push([x - 1, y]);
                                reachLeft = true;
                            }
                        } else if (reachLeft) {
                            reachLeft = false;
                        }
                    }

                    if (x < drawingBoundRight) {
                        if (this.matchStartColor(pixelPos + 4, startR, startG, startB, startA)) {
                            if (!reachRight) {
                                // Add pixel to stack
                                pixelStack.push([x + 1, y]);
                                reachRight = true;
                            }
                        } else if (reachRight) {
                            reachRight = false;
                        }
                    }

                    pixelPos += canvasWidth * 4;
                }
            }
        }
    }, {
        key: "matchStartColor",
        value: function matchStartColor(pixelPos, startR, startG, startB, startA) {
            var arr = g_imgData.data;
            return startR === arr[pixelPos] && startG === arr[pixelPos + 1] && startB === arr[pixelPos + 2] && startA === arr[pixelPos + 3];
        }
    }, {
        key: "colorPixel",
        value: function colorPixel(pixelPos) {
            var arr = g_imgData.data;
            arr[pixelPos] = g_targetColor.r;
            arr[pixelPos + 1] = g_targetColor.g;
            arr[pixelPos + 2] = g_targetColor.b;
            arr[pixelPos + 3] = 255;
        }
    }, {
        key: "getRelativePointerPosition",
        value: function getRelativePointerPosition(node) {
            var transform = node.getAbsoluteTransform().copy();
            transform.invert();
            var pos = node.getStage().getPointerPosition();
            return transform.point(pos);
        }
    }, {
        key: "destroy",
        value: function destroy() {
            _LayerManager2.default.prototype.init(_drawLayer);
            if (_stage) _stage.off('mousedown touchstart');
        }

        /**
         *
         * @param color
         */

    }, {
        key: "setColor",
        value: function setColor(color) {
            _color = color;
        }
    }, {
        key: "getColor",
        value: function getColor() {
            return _color;
        }

        /**
         *
         * @param size
         */

    }, {
        key: "setSize",
        value: function setSize(size) {
            _size = size;
        }
    }, {
        key: "getSize",
        value: function getSize() {
            return _size;
        }

        /**
         *
         * @param opacity
         */

    }, {
        key: "setOpacity",
        value: function setOpacity(opacity) {
            _opacity = opacity;
        }
    }, {
        key: "getOpacity",
        value: function getOpacity() {
            return _opacity;
        }
    }]);
    return FloodFillBack;
}();

exports.default = FloodFillBack;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _GameConfig = __webpack_require__(2);

var _GameConfig2 = _interopRequireDefault(_GameConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _cursorPointer = void 0,
    _stage = void 0,
    _layer = void 0,
    _size = void 0;
var _strokeWidth = 2;

var Cursor = function () {
    function Cursor(stage, layer) {
        var tool = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brush';
        var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '10';
        (0, _classCallCheck3.default)(this, Cursor);

        _stage = stage;
        _layer = layer;
        _size = size;
        _stage.container().style.cursor = 'crosshair';
        // stage.container().style.cursor = 'url(images/my-cursor.png), auto';
    }

    (0, _createClass3.default)(Cursor, [{
        key: '_drawRect',
        value: function _drawRect(radius) {
            var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            _cursorPointer = new Konva.Circle({
                x: x,
                y: y,
                radius: parseInt(radius / 1.5),
                stroke: 'white',
                strokeWidth: _strokeWidth
            });
            _layer.add(_cursorPointer);
        }
    }, {
        key: '_move',
        value: function _move(x, y) {
            if (_cursorPointer) {
                if (x <= 0 || x >= _GameConfig2.default.STAGE_SIZE.width || y <= 0 || y >= _GameConfig2.default.STAGE_SIZE.height) _cursorPointer.visible(false);else {
                    _stage.container().style.cursor = 'crosshair';
                    _cursorPointer.x(x);
                    _cursorPointer.y(y);
                    _cursorPointer.visible(true);
                    _layer.draw();
                }
            }
        }
    }, {
        key: '_visible',
        value: function _visible(bool) {
            if (_cursorPointer) _cursorPointer.visible(bool);
        }
    }, {
        key: '_destroy',
        value: function _destroy() {
            if (_cursorPointer) {
                _cursorPointer.destroy();
                _layer.draw();
            }
        }
    }]);
    return Cursor;
}();

exports.default = Cursor;

/***/ })
/******/ ]);
//# sourceMappingURL=index.bundle.js.map