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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

class GameConfig {

    static get MAIN_STAGE() {
        return _mainStage;
    }
    static set MAIN_STAGE(obj) {
        _mainStage = obj;
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
    /**/init(currentLayer) {
        let _currentLayer = currentLayer;
        let img = new Konva.Image({
            image: _currentLayer.canvas._canvas
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LayerManager;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sketchBook_SketchBookKonva__ = __webpack_require__(3);

let s = new __WEBPACK_IMPORTED_MODULE_0__sketchBook_SketchBookKonva__["a" /* default */]('container');

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module_LineDraw__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_Brush__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_Airbrush__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__module_Crayon__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__module_Eraser__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__module_Zoom__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__module_ClearCanvas__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__module_Move__ = __webpack_require__(12);










let _id, _stage, _layer, _mainLayer;
let _colorArr = ['#ff00c8', '#59ff00', '#ffa200', '#0073ff'];
let _sizeArr = [5, 7, 10, 20, 30];

let $ = function (id) {
    return document.getElementById(id);
};
let brushEl = $('brush'),

// airBrushEl = $('airBrush'),
crayonEl = $('crayon'),

// fillEl = $('fill'),
lineEl = $('line'),
    screenToneEl = $('screenTone'),
    eraserEl = $('eraser'),
    textEl = $('text'),
    zoomEl = $('zoom'),

// moveEl = $('move'),
clearEl = $('clear'),
    moveEl = $('move'),
    colorEl = $('_color'),
    sizeEl = $('_size'),
    opacityEl = $('_opacity'),
    zoomSlider = $('_zoom'),


//BRUSH TYPE
brushTypeEl = $('brushType'),
    circleEl = $('_circle'),
    rectEl = $('_rect'),
    diamondEl = $('_diamond'),
    columnEl = $('_column'),
    rowEl = $('_rowEl'),


//ERASER TYPE
eraserTypeEl = $('EraserType'),
    eCircleEl = $('_eCircle'),
    eRectEl = $('_eRect'),
    eDiamondEl = $('_eDiamond'),
    eColumnEl = $('_eColumn'),
    eRowEl = $('_eRow'),


//LINE TYPE
lineTypeEl = $('lineType'),
    stokeEl = $('_stroke'),
    dashEl = $('_dash'),
    dotEl = $('_dot'),


//CRAYON TYPE
crayonTypeEl = $('crayonType'),
    crayonA = $('_cA'),
    crayonB = $('_cB'),
    crayonC = $('_cC');

class SketchBookKonva {
    constructor(id, width, height, layer = 1) {
        _id = id;
        this._init();
    }

    _createImg() {
        let imageURL = 'asset/image/sampleImg.jpg';
        let layer = new Konva.Layer();
        Konva.Image.fromURL(imageURL, function (image) {
            layer.add(image);
            layer.draw();
        });

        _stage.add(layer);
    }

    _init() {

        _stage = new Konva.Stage({
            container: 'container',
            // width: window.innerWidth,
            // height: window.innerHeight
            width: 800,
            height: 550
        });

        __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].MAIN_STAGE = _stage;

        this._createImg();

        _mainLayer = new Konva.Layer();
        __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].MAIN_LAYER = _mainLayer;
        _stage.add(_mainLayer);

        // this.LineDraw = LineDraw.prototype.draw(_stage);
        // this.Brush = Brush.prototype.draw(_stage, _mainLayer);

        // eraserTypeEl.style.display = 'none';
        zoomSlider.style.display = 'none';
        lineTypeEl.style.display = 'none';
        crayonTypeEl.style.display = 'none';
        $('_zoomSpan').style.display = 'none';

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
            if (__WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL) __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL.setSize(this.value);
        };

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
        /* dashEl.onchange = function() {
             if(GameConfig.CURRENT_TOOL) GameConfig.CURRENT_TOOL.setLineType(1);
         }
         dotEl.onchange = function() {
             if(GameConfig.CURRENT_TOOL) GameConfig.CURRENT_TOOL.setLineType(2);
         }*/

        /**
         * CRAYON STYLE
         */
        crayonTypeEl.onchange = function (e) {
            if (__WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL) __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL.setLineType(e);
        };
        /* dashEl.onchange = function() {
             if(GameConfig.CURRENT_TOOL) GameConfig.CURRENT_TOOL.setLineType(1);
         }
         dotEl.onchange = function() {
             if(GameConfig.CURRENT_TOOL) GameConfig.CURRENT_TOOL.setLineType(2);
         }*/

        /**
         * TOOLS
         */

        brushEl.onclick = () => {

            __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].IS_DRAWING_MODE = true;
            __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].IS_LINE_DRAWING = false;
            this._toolsDestroy();
            __WEBPACK_IMPORTED_MODULE_1__module_Brush__["a" /* default */].prototype.init(_stage);

            colorEl.value = __WEBPACK_IMPORTED_MODULE_1__module_Brush__["a" /* default */].prototype.getColor();
            sizeEl.value = __WEBPACK_IMPORTED_MODULE_1__module_Brush__["a" /* default */].prototype.getSize();
            opacityEl.value = __WEBPACK_IMPORTED_MODULE_1__module_Brush__["a" /* default */].prototype.getOpacity();

            $('_circle').checked = true;
            colorEl.style.display = '';
            $('_colorSpan').style.display = '';
            sizeEl.style.display = '';
            $('_sizeSpan').style.display = '';
            opacityEl.style.display = '';
            $('_opacitySpan').style.display = '';
            zoomSlider.style.display = 'none';
            $('_zoomSpan').style.display = 'none';

            brushTypeEl.style.display = '';
            //eraserTypeEl.style.display = 'none';
            lineTypeEl.style.display = 'none';
            crayonTypeEl.style.display = 'none';
        };

        crayonEl.onclick = () => {

            __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].IS_DRAWING_MODE = true;
            __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].IS_LINE_DRAWING = false;
            this._toolsDestroy();
            __WEBPACK_IMPORTED_MODULE_4__module_Crayon__["a" /* default */].prototype.init(_stage);

            colorEl.value = __WEBPACK_IMPORTED_MODULE_1__module_Brush__["a" /* default */].prototype.getColor();
            sizeEl.value = __WEBPACK_IMPORTED_MODULE_1__module_Brush__["a" /* default */].prototype.getSize();
            opacityEl.value = __WEBPACK_IMPORTED_MODULE_1__module_Brush__["a" /* default */].prototype.getOpacity();

            crayonTypeEl.style.display = '';
            colorEl.style.display = '';
            $('_colorSpan').style.display = '';
            sizeEl.style.display = '';
            $('_sizeSpan').style.display = '';
            opacityEl.style.display = 'none';
            $('_opacitySpan').style.display = 'none';
            zoomSlider.style.display = 'none';
            $('_zoomSpan').style.display = 'none';
            brushTypeEl.style.display = 'none';
            //eraserTypeEl.style.display = 'none';
            lineTypeEl.style.display = 'none';
        };

        lineEl.onclick = () => {

            __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].IS_DRAWING_MODE = false;
            __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].IS_LINE_DRAWING = true;
            this._toolsDestroy();
            __WEBPACK_IMPORTED_MODULE_0__module_LineDraw__["a" /* default */].prototype.init(_stage);

            colorEl.value = __WEBPACK_IMPORTED_MODULE_0__module_LineDraw__["a" /* default */].prototype.getColor();
            sizeEl.value = __WEBPACK_IMPORTED_MODULE_0__module_LineDraw__["a" /* default */].prototype.getSize();
            opacityEl.value = __WEBPACK_IMPORTED_MODULE_0__module_LineDraw__["a" /* default */].prototype.getOpacity();

            lineTypeEl.style.display = '';
            brushTypeEl.style.display = 'none';
            crayonTypeEl.style.display = 'none';
            //eraserTypeEl.style.display = 'none';

            colorEl.style.display = '';
            $('_colorSpan').style.display = '';
            sizeEl.style.display = '';
            $('_sizeSpan').style.display = '';
            opacityEl.style.display = '';
            $('_opacitySpan').style.display = '';
            zoomSlider.style.display = 'none';
            $('_zoomSpan').style.display = 'none';
        };

        eraserEl.onclick = () => {

            __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].IS_DRAWING_MODE = false;
            __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].IS_LINE_DRAWING = false;
            this._toolsDestroy();
            __WEBPACK_IMPORTED_MODULE_5__module_Eraser__["a" /* default */].prototype.init(_stage, _mainLayer);

            sizeEl.value = __WEBPACK_IMPORTED_MODULE_5__module_Eraser__["a" /* default */].prototype.getSize();
            opacityEl.value = __WEBPACK_IMPORTED_MODULE_5__module_Eraser__["a" /* default */].prototype.getOpacity();

            colorEl.style.display = 'none';
            $('_colorSpan').style.display = 'none';
            sizeEl.style.display = '';
            $('_sizeSpan').style.display = '';
            opacityEl.style.display = '';
            $('_opacitySpan').style.display = '';
            zoomSlider.style.display = 'none';
            $('_zoomSpan').style.display = 'none';

            //eraserTypeEl.style.display = '';
            brushTypeEl.style.display = 'none';
            lineTypeEl.style.display = 'none';
            crayonTypeEl.style.display = 'none';
        };

        zoomEl.onclick = () => {
            // this._toolsDestroy();
            __WEBPACK_IMPORTED_MODULE_6__module_Zoom__["a" /* default */].prototype.init(_stage);
            zoomSlider.value = __WEBPACK_IMPORTED_MODULE_6__module_Zoom__["a" /* default */].prototype.getSize();

            colorEl.style.display = 'none';
            $('_colorSpan').style.display = 'none';
            sizeEl.style.display = 'none';
            $('_sizeSpan').style.display = 'none';
            opacityEl.style.display = 'none';
            $('_opacitySpan').style.display = 'none';

            zoomSlider.style.display = '';
            $('_zoomSpan').style.display = '';

            brushTypeEl.style.display = 'none';
            //eraserTypeEl.style.display = 'none';
            lineTypeEl.style.display = 'none';
            crayonTypeEl.style.display = 'none';
        };

        clearEl.onclick = () => {
            // ClearCanvas.prototype.canvasClear(_canvas);
            // _mainLayer.clear();
            // this._toolsDestroy();
            // GameConfig.MAIN_LAYER.find('Line').destroy();
            // GameConfig.MAIN_LAYER.draw();
            // _stage.remove(_mainLayer);

            brushTypeEl.style.display = 'none';
            lineTypeEl.style.display = 'none';
            crayonTypeEl.style.display = 'none';
            //eraserTypeEl.style.display = 'none';
            colorEl.style.display = 'none';
            $('_colorSpan').style.display = 'none';
            sizeEl.style.display = 'none';
            $('_sizeSpan').style.display = 'none';
            opacityEl.style.display = 'none';
            $('_opacitySpan').style.display = 'none';

            this._toolsDestroy();

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
            // console.log(_mainLayer)
            // _stage.remove(_mainLayer)
            // GameConfig.MAIN_LAYER.visible(false);

            // GameConfig.MAIN_LAYER.destroy();
            // console.log("clear", _stage, GameConfig.MAIN_LAYER)
        };

        moveEl.onclick = () => {
            brushTypeEl.style.display = 'none';
            lineTypeEl.style.display = 'none';
            crayonTypeEl.style.display = 'none';
            this._toolsDestroy();
            __WEBPACK_IMPORTED_MODULE_8__module_Move__["a" /* default */].prototype.move(_stage);
        };

        this._default();
    }

    _default() {
        // Brush.prototype.init(_stage);
        // colorEl.value = Brush.prototype.getColor();
        // sizeEl.value = Brush.prototype.getSize();
        // opacityEl.value = Brush.prototype.getOpacity();

        __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].IS_DRAWING_MODE = true;
        __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].IS_LINE_DRAWING = false;
        __WEBPACK_IMPORTED_MODULE_4__module_Crayon__["a" /* default */].prototype.init(_stage);

        colorEl.value = __WEBPACK_IMPORTED_MODULE_1__module_Brush__["a" /* default */].prototype.getColor();
        sizeEl.value = __WEBPACK_IMPORTED_MODULE_1__module_Brush__["a" /* default */].prototype.getSize();
        opacityEl.value = __WEBPACK_IMPORTED_MODULE_1__module_Brush__["a" /* default */].prototype.getOpacity();

        colorEl.style.display = '';
        $('_colorSpan').style.display = '';
        sizeEl.style.display = '';
        $('_sizeSpan').style.display = '';
        opacityEl.style.display = 'none';
        $('_opacitySpan').style.display = 'none';
        zoomSlider.style.display = 'none';
        $('_zoomSpan').style.display = 'none';
        brushTypeEl.style.display = 'none';
        //eraserTypeEl.style.display = 'none';
        lineTypeEl.style.display = 'none';
        crayonTypeEl.style.display = '';
    }

    _toolsDestroy() {
        if (__WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL) __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL.destroy();
    }

    rgbToHex(r, g, b) {

        let rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('');

        console.log(rgbToHex);
    }

    hexToRgb(hex) {
        console.log("A");
        hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (m, r, g, b) => '#' + r + r + g + g + b + b).substring(1).match(/.{2}/g).map(x => parseInt(x, 16));

        console.log(hex);
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = SketchBookKonva;


/***/ }),
/* 4 */
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

        _stage.on('mouseup touchend contentTouchend', function () {
            isPaint = false;
            __WEBPACK_IMPORTED_MODULE_1__manager_LayerManager__["a" /* default */].prototype.init(_drawLayer);
            _drawLayer = new Konva.Layer();
            _stage.add(_drawLayer);
            __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_LAYER = _drawLayer;
        });

        _stage.on('mousemove touchmove', function () {

            if (!__WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].IS_LINE_DRAWING || !isPaint) return;

            let pos = _stage.getPointerPosition();
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
/* 5 */
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
        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_LAYER = _drawLayer;
        _this = this;
        _shapeEnable = false;

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
            if (!_shapeEnable) {
                currentLine = new Konva.Line({
                    stroke: _this.getColor(),
                    strokeWidth: _this.getSize(),
                    points: [pos.x, pos.y],
                    globalCompositeOperation: 'source-over',
                    // globalCompositeOperation:'destination-out',
                    // lineCap:'square',
                    lineCap: _this.getLineCap(),
                    tension: __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_TENSION,
                    // fill:'#ffcc00',
                    // fillPatternImage:'asset/image/starImg.png',
                    // fillEnabled:true,
                    opacity: _this.getOpacity() / 100
                });

                _drawLayer.add(currentLine);
            } else currentLine = { points: [pos.x, pos.y] };
        });

        _stage.on('mousemove touchmove', evt => {
            if (!isDrawing) return;

            let pos = this.getRelativePointerPosition(_stage);
            if (!_shapeEnable) {

                let newPoints = currentLine.points().concat([pos.x, pos.y]);
                currentLine.points(newPoints);
            } else {
                let obj = _imgObj;
                _img = new Konva.Rect({
                    // width:_this.getSize(),
                    // height:_this.getSize(),
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
        _clone = _img.clone({
            x: x,
            y: y,
            // width:_img.scale.x * 20,
            // height:10,
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

        // console.log('brush', _drawLayer);
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
        console.log(type);
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
/* 6 */
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
            // Create new line object
            let pos = this.getRelativePointerPosition(_stage);
            currentLine = new Konva.Line({
                stroke: _this.getColor(),
                strokeWidth: _this.getSize(),
                points: [pos.x, pos.y],
                // globalCompositeOperation:'source-over',
                // globalCompositeOperation:'destination-out',
                // lineCap:'square',
                lineCap: 'round',
                tension: __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].DEFAULT_TENSION,
                // fill:'#ffcc00',
                // fillPatternImage:'asset/image/starImg.png',
                // fillEnabled:true,
                opacity: _this.getOpacity() / 100
            });

            _drawLayer.add(currentLine);
        });

        _stage.on('mousemove touchmove', evt => {
            // if(!GameConfig.IS_DRAWING_MODE) return;
            if (!isDrawing) {
                return;
            }

            // If drawing, add new point to the current line object
            let pos = this.getRelativePointerPosition(_stage);
            let newPoints = currentLine.points().concat([pos.x, pos.y]);
            currentLine.points(newPoints);
            this.imageDraw(pos.x, pos.y);
            _drawLayer.batchDraw();
        });

        _stage.on('mouseup touchend contentTouchend', evt => {
            // End drawing
            isDrawing = false;
            // currentLine.node.destroy();
            // console.log(currentLine)
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

        let xPos = 0;
        let currentLine = new Konva.RegularPolygon({
            // x: stage.width() / 2,
            // y: stage.height() / 2,
            x: x,
            y: y,
            sides: 3,
            radius: 10,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 20,
            lineJoin: 'bevel'
        });
        _drawLayer.add(currentLine);
        _drawLayer.batchDraw();
    }
    destroy() {
        __WEBPACK_IMPORTED_MODULE_1__manager_LayerManager__["a" /* default */].prototype.init(_drawLayer);
        if (_stage) _stage.off('mousedown touchstart');
        if (_stage) _stage.off('mousemove touchmove');
        if (_stage) _stage.off('mouseup touchend contentTouchend');

        // console.log('brush', _drawLayer);
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

    pattern() {
        // get fill pattern image
        let shape;
        let fillPatternImage = shape.fillPatternImage();

        // set fill pattern image
        let imageObj = new Image();
        imageObj.onload = function () {
            shape.fillPatternImage(imageObj);
        };
        imageObj.src = 'path/to/image/jpg';
    }

}
/* unused harmony export default */


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manager_LayerManager__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_utility__ = __webpack_require__(8);




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
            // Start drawing
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
        // the function will return pointer position relative to the passed node
        let transform = node.getAbsoluteTransform().copy();
        // to detect relative position we need to invert transform
        // transform.invert();

        // get pointer (say mouse or touch) position
        let pos = node.getStage().getPointerPosition();

        // now we find relative point
        return transform.point(pos);
    }

    imageDraw(x, y) {

        const obj = _pattern.attrs.image;
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
        const c = __WEBPACK_IMPORTED_MODULE_2__util_utility__["a" /* default */].hexToRgb(_color);
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
            let img = new Konva.Image({ image: _pattern });
            _pattern = img;
            _pattern.cache();
        };
        _pattern.src = _imgSrc[this.getLineType()];
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Crayon;


/***/ }),
/* 8 */
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Utility;


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__ = __webpack_require__(0);


let _stage, _this, _mode, _currentNum, _drawLayer, isDrawing;
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
            if (!isDrawing) {
                return;
            }

            // If drawing, add new point to the current line object
            let pos = this.getRelativePointerPosition(_stage);
            let newPoints = currentLine.points().concat([pos.x, pos.y]);
            currentLine.points(newPoints);
            _drawLayer.batchDraw();
        });

        _stage.on('mouseup touchend contentTouchend', evt => {
            // End drawing
            isDrawing = false;
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
let _canvas, _stage, _drawLayer, _this;
class Zoom {

    init(stage, drawLayer) {
        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = drawLayer;
        _this = this;
        // _stage.add(_drawLayer);
    }

    sizeChange(num) {

        // _canvas.zoomToPoint({ x: _canvas.width/2, y: _canvas.height/2 }, this.getSize() * 0.01);

        // let scaleBy = 1.01;
        /* let scaleBy = num;
         let oldScale = _stage.scaleX();
           // let pointer = _stage.getPointerPosition();
           let mousePointTo = {
             x: (pointer.x - _stage.x()) / oldScale,
             y: (pointer.y - _stage.y()) / oldScale,
         };
           let newScale =
             e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
           _stage.scale({ x: newScale, y: newScale });
           let newPos = {
             x: pointer.x - mousePointTo.x * newScale,
             y: pointer.y - mousePointTo.y * newScale,
         };
         */

        // _stage.scale({ x: num/100, y: num/100 });
        _stage.scale({ x: this.getSize(), y: this.getSize() });

        // _stage.position(newPos);
        _stage.batchDraw();
    }

    sizeSetMouseWheel() {
        /*canvas.on('mouse:wheel', function(opt) {
         let delta = opt.e.deltaY;
         let zoom = canvas.getZoom();
         zoom *= 0.999 ** delta;
         if (zoom > 20) zoom = 20;
         if (zoom < 0.01) zoom = 0.01;
         canvas.setZoom(zoom);
         opt.e.preventDefault();
         opt.e.stopPropagation();
        })*/
        // _canvas.setZoom(this.getSize() * 0.01);
    }

    destroy() {}

    /**
     *
     * @param size
     */
    setSize(point) {
        // console.log(point)
        // if(_currentViewPort >= _minimumViewPort && _currentViewPort <= _maximumViewPort)
        // _currentViewPort = point;
        _currentViewPort = point / 100;
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
class ClearCanvas {
    canvasClear(canvas) {
        // alert("are you sure?");
        canvas.clear();
    }

}
/* unused harmony export default */


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__ = __webpack_require__(0);


let _canvas, _stage;
class Move {
    move(stage) {
        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].IS_DRAWING_MODE = false;
        _stage = stage;
        _stage.draggable(true);

        let scaleBy = 1.3;
        _stage.on('wheel', evt => {
            evt.evt.preventDefault();
            let oldScale = _stage.scaleX();

            let mousePointTo = {
                x: _stage.getPointerPosition().x / oldScale - _stage.x() / oldScale,
                y: _stage.getPointerPosition().y / oldScale - _stage.y() / oldScale
            };

            let newScale = evt.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
            _stage.scale({ x: newScale, y: newScale });

            let newPos = {
                x: -(mousePointTo.x - _stage.getPointerPosition().x / newScale) * newScale,
                y: -(mousePointTo.y - _stage.getPointerPosition().y / newScale) * newScale
            };
            _stage.position(newPos);
            _stage.batchDraw();
        });
    }

    destroy() {
        if (_stage) _stage.draggable(false);
        if (_stage) _stage.off('wheel');
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Move;


/***/ })
/******/ ]);
//# sourceMappingURL=index.bundle.js.map