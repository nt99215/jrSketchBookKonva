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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let _tool = null;
let _isDrawingMode = false;
let _isLineDrawing = false;
let _selectedColor = '';
let _selectedSize = 0;
let _drawingHistory = [];
const _historyLimit = 30;

const _defaultTension = 0.3;
const _defaultBrushSize = 10;
const _defaultLineSize = 15;
const _defaultEraserSize = 15;
const _defaultColor = '#000000';
const _defaultOpacity = 100;

let _mainStage = null;
let _mainDrawLayer = null;
let _currentLayer = null;
let _drawCursor = null;
let _stageSize = { width: 810, height: 700 };

class GameConfig {

    static get MAIN_STAGE() {
        return _mainStage;
    }
    static set MAIN_STAGE(obj) {
        _mainStage = obj;
    }

    static get STAGE_SIZE() {
        return _stageSize;
    }
    static set STAGE_SIZE(obj) {
        _stageSize = obj;
    }

    static get MAIN_LAYER() {
        return _mainDrawLayer;
    }
    static set MAIN_LAYER(obj) {
        _mainDrawLayer = obj;
    }

    static get CURRENT_LAYER() {
        return _currentLayer;
    }
    static set CURRENT_LAYER(obj) {
        _currentLayer = obj;
    }

    static get DRAW_CURSOR() {
        return _drawCursor;
    }
    static set DRAW_CURSOR(obj) {
        _drawCursor = obj;
    }

    static get CURRENT_TOOL() {
        return _tool;
    }
    static set CURRENT_TOOL(obj) {
        _tool = obj;
    }

    static get DEFAULT_TENSION() {
        return _defaultTension;
    }

    static get IS_DRAWING_MODE() {
        return _isDrawingMode;
    }
    static set IS_DRAWING_MODE(bool) {
        _isDrawingMode = bool;
    }

    static get IS_LINE_DRAWING() {
        return _isLineDrawing;
    }
    static set IS_LINE_DRAWING(bool) {
        _isLineDrawing = bool;
    }

    static get SELECTED_COLOR() {
        return _selectedColor;
    }
    static set SELECTED_COLOR(str) {
        _selectedColor = str;
    }

    static get SELECTED_SIZE() {
        return _selectedSize;
    }
    static set SELECTED_SIZE(num) {
        _selectedSize = num;
    }

    static get SELECTED_SIZE() {
        return _drawingHistory;
    }
    static set SELECTED_SIZE(obj) {
        _drawingHistory.push(obj);
    }

    static get DEFAULT_BRUSH_SIZE() {
        return _defaultBrushSize;
    }
    static get DEFAULT_LINE_SIZE() {
        return _defaultLineSize;
    }
    static get DEFAULT_ERASER_SIZE() {
        return _defaultEraserSize;
    }
    static get DEFAULT_COLOR() {
        return _defaultColor;
    }
    static get DEFAULT_OPACITY() {
        return _defaultOpacity;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameConfig;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__ = __webpack_require__(0);


class LayerManager {
        init(currentLayer) {
                if (currentLayer === __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].MAIN_LAYER) return;
                let _currentLayer = currentLayer;
                let img = new Konva.Image({
                        image: _currentLayer.canvas._canvas,
                        width: __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].STAGE_SIZE.width,
                        height: __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].STAGE_SIZE.height
                });
                __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].MAIN_LAYER.add(img);
                __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].MAIN_LAYER.draw();
                // _currentLayer.destroy();
                __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].MAIN_STAGE.remove(_currentLayer);
                // _currentLayer.clear();
                _currentLayer.remove();
                _currentLayer = null;
                // console.log("GameConfig.MAIN_LAYER", GameConfig.MAIN_LAYER);
        }

        stageUpdate() {
                /* const scale = 1 / 4;
                 const url = _stage.toDataURL({ pixelRatio: scale });
                 document.getElementById('preview').src = url;*/

                // let dataUrl = _drawLayer.toDataURL();
                // this.downloadURI(dataUrl, 'stage.png');
                // let json = _stage.toJSON();
                // console.log(json);

        }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LayerManager;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Utility {

    static newCtx(width, height) {
        let canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        return canvas.getContext("2d");
    }

    static hexToRgb(hexType) {
        let hex = hexType.replace("#", "");
        let value = hex.match(/[a-f\d]/gi);

        // 헥사값이 세자리일 경우, 여섯자리로.
        if (value.length == 3) hex = value[0] + value[0] + value[1] + value[1] + value[2] + value[2];

        value = hex.match(/[a-f\d]{2}/gi);
        let r = parseInt(value[0], 16);
        let g = parseInt(value[1], 16);
        let b = parseInt(value[2], 16);

        return {
            r, g, b, a: 255
        };
    }

    _rgbToHex(r, g, b) {

        let rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('');

        // console.log(rgbToHex)
    }

    _hexToRgb(hex) {
        hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b).substring(1).match(/.{2}/g).map(x => parseInt(x, 16));

        console.log(hex);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Utility;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sketchBook_SketchBookKonva__ = __webpack_require__(4);

let s = new __WEBPACK_IMPORTED_MODULE_0__sketchBook_SketchBookKonva__["a" /* default */]('container');

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module_LineDraw__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_Brush__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_Airbrush__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__module_Crayon__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__module_Eraser__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__module_Zoom__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__module_Move__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__module_ClearCanvas__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__module_ScreenTone__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__module_TextInput__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__module_FloodFill__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ui_Cursor__ = __webpack_require__(16);














let _id, _stage, _mainLayer, _cursorLayer;

let $ = function (id) {
    return document.getElementById(id);
};
let toolsOption = $('toolsOption'),
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

let _elementArr = [{ el: brushEl, obj: __WEBPACK_IMPORTED_MODULE_1__module_Brush__["a" /* default */] }, { el: airBrushEl, obj: __WEBPACK_IMPORTED_MODULE_3__module_Airbrush__["a" /* default */] }, { el: crayonEl, obj: __WEBPACK_IMPORTED_MODULE_4__module_Crayon__["a" /* default */] }, { el: fillEl, obj: __WEBPACK_IMPORTED_MODULE_11__module_FloodFill__["a" /* default */] }, { el: lineEl, obj: __WEBPACK_IMPORTED_MODULE_0__module_LineDraw__["a" /* default */] }, { el: screenToneEl, obj: __WEBPACK_IMPORTED_MODULE_9__module_ScreenTone__["a" /* default */] }, { el: textEl, obj: __WEBPACK_IMPORTED_MODULE_10__module_TextInput__["a" /* default */] }, { el: eraserEl, obj: __WEBPACK_IMPORTED_MODULE_5__module_Eraser__["a" /* default */] }, { el: zoomEl, obj: __WEBPACK_IMPORTED_MODULE_6__module_Zoom__["a" /* default */] }, { el: moveEl, obj: __WEBPACK_IMPORTED_MODULE_7__module_Move__["a" /* default */] }, { el: clearEl, obj: __WEBPACK_IMPORTED_MODULE_8__module_ClearCanvas__["a" /* default */] }];

class SketchBookKonva {
    constructor(id, width, height, layer = 1) {
        _id = id;
        this._init();
    }

    _init() {

        _stage = new Konva.Stage({
            container: 'container',
            width: __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].STAGE_SIZE.width,
            height: __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].STAGE_SIZE.height
        });

        __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].MAIN_STAGE = _stage;

        // this._createImg();

        _mainLayer = new Konva.Layer();
        __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].MAIN_LAYER = _mainLayer;
        _stage.add(_mainLayer);

        _cursorLayer = new Konva.Layer();
        _stage.add(_cursorLayer);

        __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].DRAW_CURSOR = new __WEBPACK_IMPORTED_MODULE_12__ui_Cursor__["a" /* default */](_stage, _cursorLayer);

        colorEl.onchange = function () {
            if (__WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL) __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL.setColor(this.value);
        };

        sizeEl.onchange = function () {
            if (__WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL) __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL.setSize(this.value);
        };

        opacityEl.onchange = function () {
            if (__WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL) {
                __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL.setOpacity(this.value);
                __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL.getOpacity();
            }
        };

        zoomSlider.onchange = function () {
            if (__WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL.constructor.name === 'Zoom') __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL.setSize(this.value);
        };

        /**TOOLS SELECT
         *
         */
        for (let i in _elementArr) {
            let eL = _elementArr[i].el;
            let o = _elementArr[i].obj;
            eL.onclick = () => this._toolSelect(eL.id, o);
        }

        /**
         * BRUSH STYLE
         */
        brushTypeEl.onchange = function (e) {
            if (__WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL) __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL.setLineType(e);
        };

        /**
         * LINE STYLE
         */
        lineTypeEl.onchange = function (e) {
            if (__WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL) __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL.setLineType(e);
        };

        /**
         * CRAYON STYLE
         */
        crayonTypeEl.onchange = function (e) {
            if (__WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL) __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL.setLineType(e);
        };

        /**
         * CRAYON STYLE
         */
        screenToneTypeEl.onchange = function (e) {
            if (__WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL) __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL.setLineType(e);
        };

        this._toolSelect();
    }

    _toolSelect(id = '', obj = __WEBPACK_IMPORTED_MODULE_1__module_Brush__["a" /* default */]) {
        // toolsOption.style.display = 'none';
        // brushTypeEl.style.display = '';

        if (id === 'clear') {
            this._layerClear();
            return;
        }
        this._toolsDestroy();

        if (id === 'zoom' || id === 'move') {
            __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].IS_DRAWING_MODE = false;
            obj.prototype.init(_stage);
            return;
        }

        __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].IS_DRAWING_MODE = true;
        // this._toolsDestroy();

        if (id === 'eraser') {
            __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].IS_DRAWING_MODE = false;
            obj.prototype.init(_stage, _mainLayer);
            return;
        } else obj.prototype.init(_stage);

        colorEl.value = obj.prototype.getColor();
        sizeEl.value = obj.prototype.getSize();
        opacityEl.value = obj.prototype.getOpacity();
    }

    _layerClear() {
        _stage.remove(__WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].MAIN_LAYER);
        // GameConfig.MAIN_LAYER.clear();
        if (__WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].MAIN_LAYER) {
            __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].MAIN_LAYER.remove();
            __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].MAIN_LAYER.destroy();
            __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].MAIN_LAYER = null;
        }
        if (__WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_LAYER) {
            _stage.remove(__WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_LAYER);
            __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_LAYER.clear();
            __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_LAYER.remove();
            __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_LAYER.destroy();
            __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_LAYER = null;
        }
        _mainLayer = new Konva.Layer();
        _stage.add(_mainLayer);
        __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].MAIN_LAYER = _mainLayer;
        _mainLayer.draw();
    }

    _createImg() {
        const imageURL = 'asset/image/sampleImg.jpg';
        const layer = new Konva.Layer();
        Konva.Image.fromURL(imageURL, image => {

            layer.add(image);
            layer.draw();
        });
        _stage.add(layer);
    }

    _toolsDestroy() {
        if (__WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL) __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL.destroy();
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = SketchBookKonva;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manager_LayerManager__ = __webpack_require__(1);



let _stage, _drawLayer, _this, isPaint, _line, _dashEnabled;
let _color = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_COLOR;
let _size = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_LINE_SIZE;
let _opacity = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_OPACITY;
const _dashConfigArr = [[0], [0, 0, 30], [0, 30]];
let _lineType = _dashConfigArr[0];

class LineDraw {

    init(stage) {
        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = new Konva.Layer();
        _stage.add(_drawLayer);
        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DRAW_CURSOR._drawRect(this.getSize());
        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_LAYER = _drawLayer;
        _this = this;
        _dashEnabled = false;

        this.useTool();
    }

    useTool() {
        _stage.on('mousedown touchstart', function () {
            isPaint = true;
            let pos = _stage.getPointerPosition();
            _line = new Konva.Line({
                points: [pos.x, pos.y, pos.x, pos.y],
                // pointerLength: 20,
                // pointerWidth: 20,
                lineCap: 'round',
                opacity: _this.getOpacity() / 100,
                stroke: _this.getColor(),
                strokeWidth: _this.getSize(),
                dashEnabled: _dashEnabled,
                dash: _this.getLineType()
            });
            _drawLayer.add(_line);
        });

        _stage.on('mouseup touchend contentTouchend', () => {
            __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DRAW_CURSOR._destroy();
            let pos = _stage.getPointerPosition();
            __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DRAW_CURSOR._drawRect(this.getSize(), pos.x, pos.y);

            isPaint = false;
            __WEBPACK_IMPORTED_MODULE_1__manager_LayerManager__["a" /* default */].prototype.init(_drawLayer);
            _drawLayer = new Konva.Layer();
            _stage.add(_drawLayer);
            __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_LAYER = _drawLayer;
        });

        _stage.on('mousemove touchmove', function () {

            // if(!GameConfig.IS_LINE_DRAWING || !isPaint) return;
            if (!isPaint) return;

            let pos = _stage.getPointerPosition();
            __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DRAW_CURSOR._move(pos.x, pos.y);
            let oldPoints = _line.points();
            _line.points([oldPoints[0], oldPoints[1], pos.x, pos.y]);
            _drawLayer.draw();
        });
    }

    destroy() {
        __WEBPACK_IMPORTED_MODULE_1__manager_LayerManager__["a" /* default */].prototype.init(_drawLayer);
        isPaint = false;
        if (_stage) _stage.off('mousedown touchstart');
        if (_stage) _stage.off('mousemove touchmove');
        if (_stage) _stage.off('mouseup touchend contentTouchend');
    }

    /**
     *
     * @param color
     */
    setColor(color) {
        _color = color;
    }
    getColor() {
        return _color;
    }

    /**
     *
     * @param size
     */
    setSize(size) {
        _size = size;
        _lineType.pop();
        _lineType.push(_size * 2);
    }
    getSize() {
        return _size;
    }

    /**
     *
     * @param opacity
     */
    setOpacity(opacity) {
        _opacity = opacity;
    }
    getOpacity() {
        return _opacity;
    }

    /**
     *
     * @param lineType
     */
    setLineType(e) {
        let type = e.target.id.substr(1, e.target.name.length + 1);
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

    getLineType() {
        return _lineType;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = LineDraw;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manager_LayerManager__ = __webpack_require__(1);



let _stage, _drawLayer, _this;
let _color = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_COLOR;
let _size = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_LINE_SIZE;
let _opacity = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_OPACITY;
const _typeConfigArr = [[0, 0], [0, 0, 15], [0, 10]];
let _img, _brushType, _clone, _shapeEnable;
const _imgObj = { w: 0, h: 0, r: 0 };
const _angleRatio = 4;
let _lineCap = 'round';

class Brush {

    init(stage) {

        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = new Konva.Layer();
        _stage.add(_drawLayer);
        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DRAW_CURSOR._drawRect(this.getSize());
        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_LAYER = _drawLayer;
        _this = this;
        _shapeEnable = false;
        this.useTool();
    }

    useTool() {
        let isDrawing = false;
        let currentLine;
        _stage.on('mousedown touchstart', evt => {
            isDrawing = true;
            let pos = this.getRelativePointerPosition(_stage);
            if (!_shapeEnable) {
                currentLine = new Konva.Line({
                    stroke: _this.getColor(),
                    strokeWidth: _this.getSize(),
                    points: [pos.x, pos.y],
                    globalCompositeOperation: 'source-over',
                    lineCap: _this.getLineCap(),
                    tension: __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_TENSION,
                    opacity: _this.getOpacity() / 100
                });

                _drawLayer.add(currentLine);
            } else currentLine = { points: [pos.x, pos.y] };
        });

        _stage.on('mousemove touchmove', evt => {

            let pos = this.getRelativePointerPosition(_stage);
            __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DRAW_CURSOR._move(pos.x, pos.y);
            if (!isDrawing) return;
            if (!_shapeEnable) {
                let newPoints = currentLine.points().concat([pos.x, pos.y]);
                currentLine.points(newPoints);
            } else {
                let obj = _imgObj;
                _img = new Konva.Rect({
                    width: parseInt(obj.w * this.getSize()),
                    height: parseInt(obj.h * this.getSize()),
                    rotation: obj.r,
                    fill: _this.getColor()
                });

                _img.cache();
                this.imageDraw(pos.x, pos.y);
            }
            _drawLayer.batchDraw();
        });

        _stage.on('mouseup touchend contentTouchend', evt => {

            __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DRAW_CURSOR._destroy();
            let pos = this.getRelativePointerPosition(_stage);
            __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DRAW_CURSOR._drawRect(this.getSize(), pos.x, pos.y);
            isDrawing = false;
            __WEBPACK_IMPORTED_MODULE_1__manager_LayerManager__["a" /* default */].prototype.init(_drawLayer);
            _drawLayer = new Konva.Layer();
            _stage.add(_drawLayer);
            __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_LAYER = _drawLayer;
        });
    }

    getRelativePointerPosition(node) {
        let transform = node.getAbsoluteTransform().copy();
        transform.invert();
        let pos = node.getStage().getPointerPosition();
        return transform.point(pos);
    }

    imageDraw(x, y) {
        _clone = _img.clone({
            x: x,
            y: y,
            fill: _this.getColor()
        });

        _clone.cache();
        _drawLayer.add(_clone);
    }

    destroy() {
        __WEBPACK_IMPORTED_MODULE_1__manager_LayerManager__["a" /* default */].prototype.init(_drawLayer);
        if (_stage) _stage.off('mousedown touchstart');
        if (_stage) _stage.off('mousemove touchmove');
        if (_stage) _stage.off('mouseup touchend contentTouchend');
    }

    /**
     *
     * @param color
     */
    setColor(color) {
        _color = color;
    }
    getColor() {
        return _color;
    }

    /**
     *
     * @param size
     */
    setSize(size) {
        _size = size;
    }
    getSize() {
        return _size;
    }

    /**
     *
     * @param opacity
     */
    setOpacity(opacity) {
        _opacity = opacity;
    }
    getOpacity() {
        return _opacity;
    }

    /**
     *
     * @param lineCap
     */
    setLineCap(str) {
        _lineCap = str;
    }
    getLineCap() {
        return _lineCap;
    }

    /**
     *
     * @param linType
     */
    setLineType(e) {
        let type = e.target.id.substr(1, e.target.name.length + 1);
        switch (type) {
            case 'circle':
                this.setLineCap('round');
                _shapeEnable = false;
                break;
            case 'rect':
                this.setLineCap('square');
                _shapeEnable = false;
                break;
            case 'diamond':
                _imgObj.w = 1;
                _imgObj.h = 1;
                _imgObj.r = 45;
                _shapeEnable = true;
                break;
            case 'column':
                _imgObj.w = 1 / _angleRatio;
                _imgObj.h = 1;
                _imgObj.r = 0;
                _shapeEnable = true;
                break;
            case 'row':
                _imgObj.w = 1;
                _imgObj.h = 1 / _angleRatio;
                _imgObj.r = 0;
                _shapeEnable = true;
                break;
            case 'slash':
                _imgObj.w = 1;
                _imgObj.h = 1 / _angleRatio;
                _imgObj.r = -35;
                _shapeEnable = true;
                break;

        }
    }
    getLineType() {
        return _brushType;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Brush;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manager_LayerManager__ = __webpack_require__(1);



let _stage, _drawLayer, _this;
let _color = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_COLOR;
let _size = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_LINE_SIZE;
let _opacity = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_OPACITY;

class Airbrush {

    init(stage) {

        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = new Konva.Layer();
        _stage.add(_drawLayer);
        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_LAYER = _drawLayer;
        _this = this;

        this.useTool();
    }

    useTool() {

        let isDrawing = false;
        let currentLine;
        _stage.on('mousedown touchstart', evt => {
            // if(!GameConfig.IS_DRAWING_MODE) return;
            // Start drawing
            isDrawing = true;
            let pos = this.getRelativePointerPosition(_stage);
            currentLine = { points: [pos.x, pos.y]
                // _drawLayer.add(currentLine);
            };
        });

        _stage.on('mousemove touchmove', evt => {
            // if(!GameConfig.IS_DRAWING_MODE) return;
            if (!isDrawing) {
                return;
            }

            // If drawing, add new point to the current line object
            let pos = this.getRelativePointerPosition(_stage);
            // let newPoints = currentLine.points().concat([pos.x, pos.y]);
            // currentLine.points(newPoints);
            this.imageDraw(pos.x, pos.y);
        });

        _stage.on('mouseup touchend contentTouchend', evt => {
            // End drawing
            isDrawing = false;
            __WEBPACK_IMPORTED_MODULE_1__manager_LayerManager__["a" /* default */].prototype.init(_drawLayer);
            _drawLayer = new Konva.Layer();
            _stage.add(_drawLayer);
            __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_LAYER = _drawLayer;
        });
    }

    getRelativePointerPosition(node) {
        // the function will return pointer position relative to the passed node
        let transform = node.getAbsoluteTransform().copy();
        // to detect relative position we need to invert transform
        transform.invert();

        // get pointer (say mouse or touch) position
        let pos = node.getStage().getPointerPosition();

        // now we find relative point
        return transform.point(pos);
    }

    imageDraw(x, y) {

        let angle = Math.random() * Math.PI * 2;
        let radius = Math.random() * this.getSize() / 2;
        let xPos = x + Math.cos(angle) * radius;
        let yPos = y + Math.sin(angle) * radius;
        let c = this.getColor();
        let r = Math.random() * 10 / 5;
        for (let i = 0; i < 3; i++) {
            let rect = new Konva.Rect({
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

    destroy() {
        __WEBPACK_IMPORTED_MODULE_1__manager_LayerManager__["a" /* default */].prototype.init(_drawLayer);
        if (_stage) _stage.off('mousedown touchstart');
        if (_stage) _stage.off('mousemove touchmove');
        if (_stage) _stage.off('mouseup touchend contentTouchend');
    }

    /**
     *
     * @param color
     */
    setColor(color) {
        _color = color;
    }
    getColor() {
        return _color;
    }

    /**
     *
     * @param size
     */
    setSize(size) {
        _size = size;
    }
    getSize() {
        return _size;
    }

    /**
     *
     * @param opacity
     */
    setOpacity(opacity) {
        _opacity = opacity;
    }
    getOpacity() {
        return _opacity;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Airbrush;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manager_LayerManager__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_utility__ = __webpack_require__(2);




let _stage, _drawLayer, _this, _pattern, _clone;
let _color = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_COLOR;
let _size = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_LINE_SIZE * 2;
let _opacity = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_OPACITY;
let _crayonType = 0;
let _imgSrc = ['asset/image/pattern/crayon0/pattern_0.png', 'asset/image/pattern/crayon1/pattern_1.png', 'asset/image/pattern/crayon2/pattern_2.png'];

class Crayon {

    init(stage) {

        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = new Konva.Layer();
        _stage.add(_drawLayer);
        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_LAYER = _drawLayer;
        _this = this;
        this.getCrayonImage();
        this.useTool();
    }

    useTool() {

        let isDrawing = false;
        let currentLine;

        _stage.on('mousedown touchstart', evt => {
            // if(!GameConfig.IS_DRAWING_MODE) return;
            isDrawing = true;
            let pos = this.getRelativePointerPosition(_stage);
            currentLine = { points: [pos.x, pos.y] };
            this.getSize();
            this.getColor();
        });

        _stage.on('mousemove touchmove', evt => {
            if (!isDrawing) return;

            let pos = this.getRelativePointerPosition(_stage);
            this.imageDraw(pos.x, pos.y);
            _drawLayer.batchDraw();
        });

        _stage.on('mouseup touchend contentTouchend', evt => {
            // End drawing
            isDrawing = false;
            __WEBPACK_IMPORTED_MODULE_1__manager_LayerManager__["a" /* default */].prototype.init(_drawLayer);
            _drawLayer = new Konva.Layer();
            _stage.add(_drawLayer);
            __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_LAYER = _drawLayer;
        });
    }

    getRelativePointerPosition(node) {
        let transform = node.getAbsoluteTransform().copy();
        // transform.invert();
        let pos = node.getStage().getPointerPosition();
        return transform.point(pos);
    }

    imageDraw(x, y) {

        let obj = _pattern.attrs.image;
        _clone = _pattern.clone({
            x: x - obj.width / 2,
            y: y - obj.height / 2
        });
        _clone.cache();
        _drawLayer.add(_clone);
    }

    destroy() {
        __WEBPACK_IMPORTED_MODULE_1__manager_LayerManager__["a" /* default */].prototype.init(_drawLayer);
        if (_stage) _stage.off('mousedown touchstart');
        if (_stage) _stage.off('mousemove touchmove');
        if (_stage) _stage.off('mouseup touchend contentTouchend');
    }

    /**
     *
     * @param color
     */
    setColor(color) {
        _color = color;
    }
    getColor() {
        let c = __WEBPACK_IMPORTED_MODULE_2__util_utility__["a" /* default */].hexToRgb(_color);
        _pattern.filters([Konva.Filters.RGBA]);
        _pattern.red(c.r);
        _pattern.green(c.g);
        _pattern.blue(c.b);
    }

    /**
     *
     * @param size
     */
    setSize(size) {
        _size = size * 2;
    }
    getSize() {
        let obj = _pattern.attrs.image;
        obj.width = _size;
        obj.height = _size;
    }

    /**
     *
     * @param opacity
     */
    setOpacity(opacity) {
        _opacity = opacity;
    }
    getOpacity() {
        return _opacity;
    }

    /**
     *
     * @param lineType
     */
    setLineType(e) {
        let type = e.target.id.substr(1, e.target.name.length + 1);
        switch (type) {
            case 'cA':
                _crayonType = 0;
                break;
            case 'cB':
                _crayonType = 1;
                break;
            case 'cC':
                _crayonType = 2;
                break;
            default:
                _crayonType = 0;
                break;
        }
        this.getCrayonImage();
    }

    getLineType() {
        return _crayonType;
    }

    getCrayonImage() {
        _pattern = new Image();
        _pattern.onload = () => {
            let img = new Konva.Image({
                image: _pattern
            });
            _pattern = img;
            _pattern.cache();
        };
        _pattern.src = _imgSrc[this.getLineType()];
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Crayon;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manager_LayerManager__ = __webpack_require__(1);



let _stage, _this, _mode, _currentNum, _drawLayer, isDrawing, _lineCap;
let _lineArr = [];
let _color = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_COLOR;
let _size = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_LINE_SIZE;
let _opacity = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_OPACITY;

class Eraser {

    init(stage, drawLayer) {

        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = drawLayer;
        _this = this;

        // _stage.add(_drawLayer);
        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DRAW_CURSOR._drawRect(this.getSize());
        this.useTool();
    }

    useTool() {
        isDrawing = false;
        let currentLine;
        _stage.on('mousedown touchstart', evt => {
            // Start drawing
            isDrawing = true;
            // Create new line object
            let pos = this.getRelativePointerPosition(_stage);
            currentLine = new Konva.Line({
                stroke: _this.getColor(),
                strokeWidth: _this.getSize(),
                points: [pos.x, pos.y],
                lineCap: 'round',
                tension: __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_TENSION,
                opacity: _this.getOpacity() / 100,
                globalCompositeOperation: 'destination-out'
            });
            _drawLayer.add(currentLine);
        });

        _stage.on('mousemove touchmove', () => {
            let pos = this.getRelativePointerPosition(_stage);
            __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DRAW_CURSOR._move(pos.x, pos.y);
            if (!isDrawing) {
                return;
            }

            let newPoints = currentLine.points().concat([pos.x, pos.y]);
            currentLine.points(newPoints);
            _drawLayer.batchDraw();
        });

        _stage.on('mouseup touchend contentTouchend', evt => {
            __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DRAW_CURSOR._destroy();
            let pos = this.getRelativePointerPosition(_stage);
            __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DRAW_CURSOR._drawRect(this.getSize(), pos.x, pos.y);
            isDrawing = false;
            /*LayerManager.prototype.init(_drawLayer);
            _drawLayer = new Konva.Layer();
            _stage.add(_drawLayer);
            GameConfig.CURRENT_LAYER = _drawLayer;*/
        });
    }

    getRelativePointerPosition(node) {
        let transform = node.getAbsoluteTransform().copy();
        transform.invert();
        let pos = node.getStage().getPointerPosition();
        return transform.point(pos);
    }

    destroy() {
        // console.log("eraseEND")
        if (_stage) _stage.off('mousedown touchstart');
        if (_stage) _stage.off('mousemove touchmove');
        if (_stage) _stage.off('mouseup touchend contentTouchend');
    }

    /**
     *
     * @param color
     */
    setColor(color) {
        _color = color;
    }
    getColor() {
        return _color;
    }

    /**
     *
     * @param size
     */
    setSize(size) {
        _size = size;
    }
    getSize() {
        return _size;
    }

    /**
     *
     * @param opacity
     */
    setOpacity(opacity) {
        _opacity = opacity;
    }
    getOpacity() {
        return _opacity;
    }

    /**
     *
     * @param lineCap
     */
    setLineCap(str) {
        _lineCap = str;
    }
    getLineCap() {
        return _lineCap;
    }

    /**
     *
     * @param linType
     */
    setLineType(str) {}
    getLineType(str) {}

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Eraser;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__ = __webpack_require__(0);


const _defaultViewPort = 1;
const _minimumViewPort = 50;
const _maximumViewPort = 200;
let _currentViewPort = 100;
let _stage, _drawLayer, _this;
const _zoomScale = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2];
let _zoomScope = 1;

class Zoom {

    init(stage, drawLayer) {
        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = drawLayer;
        _this = this;
        this.sizeSetMouse();
    }

    sizeSetMouse() {
        _stage.on('mousedown touchstart', evt => {
            evt.evt.preventDefault();
            let oldScale = _zoomScale.indexOf(_stage.scaleX());
            if (oldScale === _zoomScale.length - 1 || oldScale === 0) _zoomScope = -_zoomScope;
            let newScale = _zoomScale[oldScale + _zoomScope];
            this.scaleModify(newScale);
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

    scaleModify(scale) {
        _stage.scale({ x: scale, y: scale });
        _stage.draw();
    }

    destroy() {
        if (_stage) _stage.off('mousedown touchstart');
    }

    /**
     *
     * @param size
     */
    setSize(point) {
        /*  console.log(point)
          if(_currentViewPort >= _minimumViewPort && _currentViewPort <= _maximumViewPort)
          _currentViewPort = point;*/
        _currentViewPort = point / 100;
        this.scaleModify(this.getSize());
    }
    getSize() {
        return _currentViewPort;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Zoom;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__ = __webpack_require__(0);


let _stage;
class Move {

    init(stage) {
        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_TOOL = this;
        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].IS_DRAWING_MODE = false;
        _stage = stage;
        _stage.draggable(true);
    }

    destroy() {
        if (_stage) _stage.draggable(false);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Move;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ClearCanvas {
    canvasClear(canvas) {
        // alert("are you sure?");
        canvas.clear();
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = ClearCanvas;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manager_LayerManager__ = __webpack_require__(1);



let _stage, _drawLayer, _this, _patternImage, _patternGroup, _fillRect;
let _color = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_COLOR;
let _size = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_LINE_SIZE;
let _opacity = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_OPACITY;
let _lineCap = 'round';
let _patternType = 'A';
const _patterUrl = 'asset/image/screenTone/screenToneType';

class Brush {

    init(stage) {

        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = new Konva.Layer();
        _stage.add(_drawLayer);
        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DRAW_CURSOR._drawRect(this.getSize());
        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_LAYER = _drawLayer;
        _this = this;
        this.useTool();
    }

    useTool() {

        let isDrawing = false;
        let currentLine;
        _stage.on('mousedown touchstart', evt => {

            let pos = this.getRelativePointerPosition(_stage);
            _patternImage = new Image();
            // _patternImage.src = 'asset/image/screenTone/screenToneTypeA.png';
            _patternImage.src = this.getLineType();
            _patternImage.onload = () => {
                _patternGroup = new Konva.Group();
                _drawLayer.add(_patternGroup);

                currentLine = new Konva.Line({
                    stroke: _this.getColor(),
                    strokeWidth: _this.getSize(),
                    points: [pos.x, pos.y],
                    lineCap: _this.getLineCap(),
                    tension: __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_TENSION,
                    fill: '#ffcc00',
                    opacity: _this.getOpacity() / 100
                });

                _fillRect = new Konva.Rect({
                    x: 0,
                    y: 0,
                    width: 800,
                    height: 550,
                    fillPatternImage: _patternImage,
                    globalCompositeOperation: 'source-in'
                });

                isDrawing = true;
            };
        });

        _stage.on('mousemove touchmove', evt => {
            let pos = this.getRelativePointerPosition(_stage);
            __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DRAW_CURSOR._move(pos.x, pos.y);
            if (!isDrawing) return;
            let newPoints = currentLine.points().concat([pos.x, pos.y]);
            currentLine.points(newPoints);

            _patternGroup.add(currentLine);
            _drawLayer.add(_fillRect);
            _drawLayer.batchDraw();
        });

        _stage.on('mouseup touchend contentTouchend', evt => {
            __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DRAW_CURSOR._destroy();
            let pos = this.getRelativePointerPosition(_stage);
            __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DRAW_CURSOR._drawRect(this.getSize(), pos.x, pos.y);
            isDrawing = false;
            __WEBPACK_IMPORTED_MODULE_1__manager_LayerManager__["a" /* default */].prototype.init(_drawLayer);
            _drawLayer = new Konva.Layer();
            _stage.add(_drawLayer);
            __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_LAYER = _drawLayer;
        });
    }

    getRelativePointerPosition(node) {
        let transform = node.getAbsoluteTransform().copy();
        transform.invert();
        let pos = node.getStage().getPointerPosition();
        return transform.point(pos);
    }

    destroy() {
        __WEBPACK_IMPORTED_MODULE_1__manager_LayerManager__["a" /* default */].prototype.init(_drawLayer);
        if (_stage) _stage.off('mousedown touchstart');
        if (_stage) _stage.off('mousemove touchmove');
        if (_stage) _stage.off('mouseup touchend contentTouchend');
    }

    /**
     *
     * @param color
     */
    setColor(color) {
        _color = color;
    }
    getColor() {
        return _color;
    }

    /**
     *
     * @param size
     */
    setSize(size) {
        _size = size;
    }
    getSize() {
        return _size;
    }

    /**
     *
     * @param opacity
     */
    setOpacity(opacity) {
        _opacity = opacity;
    }
    getOpacity() {
        return _opacity;
    }

    /**
     *
     * @param lineCap
     */
    setLineCap(str) {
        _lineCap = str;
    }
    getLineCap() {
        return _lineCap;
    }

    /**
     *
     * @param linType
     */
    setLineType(e) {
        let type = e.target.id.substr(2, e.target.name.length + 1);
        _patternType = type;
    }
    getLineType() {
        let url = _patterUrl + _patternType + '.png';
        return url;
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Brush;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manager_LayerManager__ = __webpack_require__(1);



let _stage, _drawLayer, _this, _textarea, _textNode;
let _color = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_COLOR;
let _size = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_LINE_SIZE;
let _opacity = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_OPACITY;
const _defaultText = '글을 입력하세요';
// const _defaultText = '글을';
const _fontFamily = ['Nanum Brush Script', 'Nanum Pen Script', 'NanumBarunGothic', 'NanumBarunGothic YetHangul', 'NanumBarunpen', 'NanumGothic', 'NanumGothic Eco', 'NanumGothicCoding', 'NanumMyeongjo', 'NanumMyeongjo Eco', 'NanumMyeongjo YetHangul', 'NanumSquare', 'NanumSquare_ac', 'NanumSquareRound'];

class TextInput {
    init(stage) {

        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = new Konva.Layer();
        _stage.add(_drawLayer);
        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_LAYER = _drawLayer;
        _this = this;

        this.useTool();
    }

    useTool() {

        let isDrawing = false;

        _stage.on('mousedown touchstart', evt => {
            isDrawing = !isDrawing;
            let pos = this.getRelativePointerPosition(_stage);
            let ff = _fontFamily[0];
            if (isDrawing) {
                _textNode = new Konva.Text({
                    // text: _defaultText,
                    x: pos.x,
                    y: pos.y,
                    fontSize: this.getSize(),
                    fontFamily: ff,
                    fill: this.getColor()
                });

                _drawLayer.add(_textNode);

                let stageBox = _stage.getContainer().getBoundingClientRect();
                let areaPosition = {
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
                _textarea.addEventListener('input', this.updateValue);
            } else {
                // _textNode.text(_textarea.value);
                document.body.removeChild(_textarea);
                // _drawLayer.add(_textNode);
                // _drawLayer.draw();
            }
        });
    }

    updateValue() {

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

    getRelativePointerPosition(node) {
        let transform = node.getAbsoluteTransform().copy();
        transform.invert();
        let pos = node.getStage().getPointerPosition();
        return transform.point(pos);
    }

    textInput(x, y) {
        let text = new Konva.Text({
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

    destroy() {
        __WEBPACK_IMPORTED_MODULE_1__manager_LayerManager__["a" /* default */].prototype.init(_drawLayer);
        if (_textarea) document.body.removeChild(_textarea);
        if (_stage) _stage.off('mousedown touchstart');
        if (_stage) _stage.off('mousemove touchmove');
        if (_stage) _stage.off('mouseup touchend contentTouchend');
    }

    /**
     *
     * @param color
     */
    setColor(color) {
        _color = color;
    }
    getColor() {
        return _color;
    }

    /**
     *
     * @param size
     */
    setSize(size) {
        _size = size;
    }
    getSize() {
        return _size;
    }

    /**
     *
     * @param opacity
     */
    setOpacity(opacity) {
        _opacity = opacity;
    }
    getOpacity() {
        return _opacity;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = TextInput;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manager_LayerManager__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_utility__ = __webpack_require__(2);




let _stage, _drawLayer, _this;
let _color = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_COLOR;
let _size = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_LINE_SIZE;
let _opacity = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_OPACITY;
let g_imgData, g_canvasWidth, g_targetColor;

class FloodFillBack {
    init(stage) {

        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].MAIN_LAYER;
        _this = this;
        this.useTool();
    }

    useTool() {
        let isDrawing = false;
        _stage.on('mousedown touchstart', evt => {
            isDrawing = true;
            let pos = this.getRelativePointerPosition(_stage);
            let color = __WEBPACK_IMPORTED_MODULE_2__util_utility__["a" /* default */].hexToRgb(this.getColor());
            this.paintAt(_drawLayer, color, pos.x, pos.y);
        });
    }

    paintAt(ctx, targetColor, startX, startY) {

        g_targetColor = targetColor;
        g_canvasWidth = ctx.canvas.width;
        g_imgData = ctx.canvas.context._context.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);

        let pixelPos = (startY * g_canvasWidth + startX) * 4,
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

    floodFill(ctx, startX, startY, startR, startG, startB, startA) {
        let canvasWidth = g_canvasWidth,
            newPos,
            x,
            y,
            pixelPos,
            reachLeft,
            reachRight,
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

    matchStartColor(pixelPos, startR, startG, startB, startA) {
        const arr = g_imgData.data;
        return startR === arr[pixelPos] && startG === arr[pixelPos + 1] && startB === arr[pixelPos + 2] && startA === arr[pixelPos + 3];
    }

    colorPixel(pixelPos) {
        const arr = g_imgData.data;
        arr[pixelPos] = g_targetColor.r;
        arr[pixelPos + 1] = g_targetColor.g;
        arr[pixelPos + 2] = g_targetColor.b;
        arr[pixelPos + 3] = 255;
    }

    getRelativePointerPosition(node) {
        let transform = node.getAbsoluteTransform().copy();
        transform.invert();
        let pos = node.getStage().getPointerPosition();
        return transform.point(pos);
    }

    destroy() {
        __WEBPACK_IMPORTED_MODULE_1__manager_LayerManager__["a" /* default */].prototype.init(_drawLayer);
        if (_stage) _stage.off('mousedown touchstart');
    }

    /**
     *
     * @param color
     */
    setColor(color) {
        _color = color;
    }
    getColor() {
        return _color;
    }

    /**
     *
     * @param size
     */
    setSize(size) {
        _size = size;
    }
    getSize() {
        return _size;
    }

    /**
     *
     * @param opacity
     */
    setOpacity(opacity) {
        _opacity = opacity;
    }
    getOpacity() {
        return _opacity;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FloodFillBack;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__ = __webpack_require__(0);


let _cursorPointer, _stage, _layer, _size;
const _strokeWidth = 2;
class Cursor {
    constructor(stage, layer, tool = 'brush', size = '10') {
        _stage = stage;
        _layer = layer;
        _size = size;
        _stage.container().style.cursor = 'crosshair';
        // stage.container().style.cursor = 'url(images/my-cursor.png), auto';
    }

    _drawRect(radius, x = 0, y = 0) {
        _cursorPointer = new Konva.Circle({
            x: x,
            y: y,
            radius: parseInt(radius / 1.5),
            stroke: 'white',
            strokeWidth: _strokeWidth
        });
        _layer.add(_cursorPointer);
    }

    _move(x, y) {
        if (_cursorPointer) {
            if (x <= 0 || x >= __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].STAGE_SIZE.width || y <= 0 || y >= __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].STAGE_SIZE.height) {
                console.log(x, y);
                _cursorPointer.visible(false);
            } else {
                _stage.container().style.cursor = 'crosshair';
                _cursorPointer.x(x);
                _cursorPointer.y(y);
                _cursorPointer.visible(true);
                _layer.draw();
            }
        }
    }

    _destroy() {
        if (_cursorPointer) {
            _cursorPointer.destroy();
            _layer.draw();
        }
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Cursor;


/***/ })
/******/ ]);
//# sourceMappingURL=index.bundle.js.map