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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

class GameConfig {
    static get CURRENT_TOOL() {
        return _tool;
    }
    static set CURRENT_TOOL(obj) {
        _tool = obj;
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameConfig;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sketchBook_SketchBookKonva__ = __webpack_require__(2);

let s = new __WEBPACK_IMPORTED_MODULE_0__sketchBook_SketchBookKonva__["a" /* default */]('container');

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module_LineDraw__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__module_Brush__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_Airbrush__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__module_Crayon__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__module_Eraser__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__module_Zoom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__module_ClearCanvas__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__module_Move__ = __webpack_require__(10);










let _id, _stage, _layer, _drawLayer;
let _colorArr = ['#ff00c8', '#59ff00', '#ffa200', '#0073ff'];
let _sizeArr = [5, 7, 10, 20, 30];

let $ = function (id) {
    return document.getElementById(id);
};
let brushEl = $('brush'),

// airBrushEl = $('airBrush'),
// crayonEl = $('crayon'),
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
    zoomSlider = $('_zoom');

class SketchBookKonva {
    constructor(id, width, height, layer = 1) {
        _id = id;
        this._init();
    }

    _createImg() {
        let imageURL = 'sampleImg.jpg';
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
            width: 500,
            height: 400
        });

        this._createImg(_drawLayer);

        _drawLayer = new Konva.Layer();
        _stage.add(_drawLayer);

        // this.LineDraw = LineDraw.prototype.draw(_stage);
        // this.Brush = Brush.prototype.draw(_stage, _drawLayer);

        zoomSlider.style.display = 'none';
        $('_zoomSpan').style.display = 'none';

        colorEl.onchange = function () {
            if (__WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL) {
                __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL.setColor(this.value);
                __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL.colorChange();
            }
        };

        sizeEl.onchange = function () {
            if (__WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL) {
                __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL.setSize(this.value);
                __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL.sizeChange();
            }
        };

        opacityEl.onchange = function () {
            if (__WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL) {
                __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL.setOpacity(this.value);
                __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL.getOpacity();
            }
        };

        zoomSlider.onchange = function () {
            if (__WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL) {
                __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL.setSize(this.value);
                __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].CURRENT_TOOL.sizeChange();
            }
        };

        /**
         * TOOLS
         */

        brushEl.onclick = () => {

            __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].IS_DRAWING_MODE = true;
            __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].IS_LINE_DRAWING = false;
            if (__WEBPACK_IMPORTED_MODULE_8__module_Move__["a" /* default */].prototype) __WEBPACK_IMPORTED_MODULE_8__module_Move__["a" /* default */].prototype.endHand();
            // if(LineDraw.prototype) LineDraw.prototype.endLine();
            // if(Eraser.prototype) Eraser.prototype.endPen();
            __WEBPACK_IMPORTED_MODULE_1__module_Brush__["a" /* default */].prototype.draw(_stage, _drawLayer);
            colorEl.value = __WEBPACK_IMPORTED_MODULE_1__module_Brush__["a" /* default */].prototype.getColor();
            sizeEl.value = __WEBPACK_IMPORTED_MODULE_1__module_Brush__["a" /* default */].prototype.getSize();
            opacityEl.value = __WEBPACK_IMPORTED_MODULE_1__module_Brush__["a" /* default */].prototype.getOpacity();
            colorEl.style.display = '';
            $('_colorSpan').style.display = '';
            sizeEl.style.display = '';
            $('_sizeSpan').style.display = '';
            opacityEl.style.display = '';
            $('_opacitySpan').style.display = '';
            zoomSlider.style.display = 'none';
            $('_zoomSpan').style.display = 'none';
        };

        lineEl.onclick = () => {

            __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].IS_DRAWING_MODE = false;
            __WEBPACK_IMPORTED_MODULE_2__data_GameConfig__["a" /* default */].IS_LINE_DRAWING = true;
            if (__WEBPACK_IMPORTED_MODULE_8__module_Move__["a" /* default */].prototype) __WEBPACK_IMPORTED_MODULE_8__module_Move__["a" /* default */].prototype.endHand();
            if (__WEBPACK_IMPORTED_MODULE_5__module_Eraser__["a" /* default */].prototype) __WEBPACK_IMPORTED_MODULE_5__module_Eraser__["a" /* default */].prototype.endPen();
            if (__WEBPACK_IMPORTED_MODULE_1__module_Brush__["a" /* default */].prototype) __WEBPACK_IMPORTED_MODULE_1__module_Brush__["a" /* default */].prototype.endPen();
            __WEBPACK_IMPORTED_MODULE_0__module_LineDraw__["a" /* default */].prototype.draw(_stage, _drawLayer);
            colorEl.value = __WEBPACK_IMPORTED_MODULE_0__module_LineDraw__["a" /* default */].prototype.getColor();
            sizeEl.value = __WEBPACK_IMPORTED_MODULE_0__module_LineDraw__["a" /* default */].prototype.getSize();
            opacityEl.value = __WEBPACK_IMPORTED_MODULE_0__module_LineDraw__["a" /* default */].prototype.getOpacity();
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
            if (__WEBPACK_IMPORTED_MODULE_8__module_Move__["a" /* default */].prototype) __WEBPACK_IMPORTED_MODULE_8__module_Move__["a" /* default */].prototype.endHand();
            if (__WEBPACK_IMPORTED_MODULE_0__module_LineDraw__["a" /* default */].prototype) __WEBPACK_IMPORTED_MODULE_0__module_LineDraw__["a" /* default */].prototype.endLine();
            // if(Brush.prototype) Brush.prototype.endLine();
            __WEBPACK_IMPORTED_MODULE_5__module_Eraser__["a" /* default */].prototype.draw(_stage, _drawLayer);
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
        };

        zoomEl.onclick = () => {
            __WEBPACK_IMPORTED_MODULE_6__module_Zoom__["a" /* default */].prototype.draw(_stage, _drawLayer);
            zoomSlider.value = __WEBPACK_IMPORTED_MODULE_6__module_Zoom__["a" /* default */].prototype.getSize();
            colorEl.style.display = 'none';
            $('_colorSpan').style.display = 'none';
            sizeEl.style.display = 'none';
            $('_sizeSpan').style.display = 'none';
            opacityEl.style.display = 'none';
            $('_opacitySpan').style.display = 'none';

            zoomSlider.style.display = '';
            $('_zoomSpan').style.display = '';
        };

        clearEl.onclick = () => {
            // ClearCanvas.prototype.canvasClear(_canvas);
            // _drawLayer.clear();
            _drawLayer.find('Line').destroy();
            _drawLayer.draw();
        };

        moveEl.onclick = () => {
            __WEBPACK_IMPORTED_MODULE_1__module_Brush__["a" /* default */].prototype.endPen();
            __WEBPACK_IMPORTED_MODULE_8__module_Move__["a" /* default */].prototype.move(_stage, _drawLayer);
        };
    }

    _default() {
        __WEBPACK_IMPORTED_MODULE_1__module_Brush__["a" /* default */].prototype.draw(_stage, _drawLayer);
        colorEl.value = __WEBPACK_IMPORTED_MODULE_1__module_Brush__["a" /* default */].prototype.getColor();
        sizeEl.value = __WEBPACK_IMPORTED_MODULE_1__module_Brush__["a" /* default */].prototype.getSize();
        opacityEl.value = __WEBPACK_IMPORTED_MODULE_1__module_Brush__["a" /* default */].prototype.getOpacity();
    }

    _clearCanvas(canvas) {
        let a = new __WEBPACK_IMPORTED_MODULE_7__module_ClearCanvas__["a" /* default */](canvas);
        this.hexToRgb("ffcc00");
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__ = __webpack_require__(0);


let _canvas, _stage, _layer, _this, isPaint, _line;
let _color = '#000000';
let _size = 7;
let _opacity = 100;
class LineDraw {

    draw(stage, layer) {

        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_TOOL = this;
        _stage = stage;
        _layer = layer;
        // _stage.add(layer);
        _this = this;

        _stage.on('contentMousedown', function () {
            isPaint = true;
            let pos = _stage.getPointerPosition();

            _line = new Konva.Line({
                points: [pos.x, pos.y, pos.x, pos.y],
                pointerLength: 20,
                pointerWidth: 20,
                // fill: 'black',
                opacity: _this.getOpacity() / 100,
                stroke: _this.getColor(),
                strokeWidth: _this.getSize()
            });
            layer.add(_line);
        });

        _stage.on('contentMouseup', function () {
            isPaint = false;
        });

        _stage.on('contentMousemove', function () {
            if (!__WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].IS_LINE_DRAWING) return;
            if (!isPaint) {
                return;
            }

            let pos = _stage.getPointerPosition();
            let oldPoints = _line.points();
            _line.points([oldPoints[0], oldPoints[1], pos.x, pos.y]);
            layer.draw();
        });
    }

    endLine() {
        isPaint = false;
        if (_stage) _stage.off('mousedown');
        if (_stage) _stage.off('mousemove');
        if (_stage) _stage.off('mouseup');
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

    colorChange() {
        // _canvas.freeDrawingBrush.color = this.getColor();
    }
    sizeChange() {
        // _canvas.freeDrawingBrush.width = this.getSize();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LineDraw;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__ = __webpack_require__(0);


let _canvas, _stage;
let _color = '#000000';
let _size = 10;
let _opacity = 100;
let _mode, _this;
let _lineArr = [];
let _currentNum, _drawLayer;

class Brush {

    draw(stage, drawLayer) {

        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = drawLayer;
        _this = this;

        /* let backgroundLayer = new Konva.Layer();
         let backgroundColor = new Konva.Image({
             // width: window.innerWidth,
             // height: window.innerHeight,
             width:500,
             height:400,
             fill: 'rgb(242,233,226)'
         })
         backgroundLayer.add(backgroundColor);
         stage.add(backgroundLayer);
         backgroundLayer.draw();*/

        this.usePen();
    }

    getRelativePointerPosition(node) {
        // the function will return pointer position relative to the passed node
        var transform = node.getAbsoluteTransform().copy();
        // to detect relative position we need to invert transform
        transform.invert();

        // get pointer (say mouse or touch) position
        var pos = node.getStage().getPointerPosition();

        // now we find relative point
        return transform.point(pos);
    }

    usePen() {

        let isDrawing = false;
        let currentLine;
        _stage.on('mousedown', evt => {
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
                lineCap: 'round',
                tension: 0.5,
                opacity: _this.getOpacity() / 100
            });
            _drawLayer.add(currentLine);
        });

        _stage.on('mousemove', evt => {
            // if(!GameConfig.IS_DRAWING_MODE) return;
            if (!isDrawing) {
                return;
            }

            // If drawing, add new point to the current line object
            let pos = this.getRelativePointerPosition(_stage);
            let newPoints = currentLine.points().concat([pos.x, pos.y]);
            currentLine.points(newPoints);
            _drawLayer.batchDraw();
        });

        _stage.on('mouseup', evt => {
            // End drawing
            isDrawing = false;
        });
    }

    endPen() {
        if (_stage) _stage.off('mousedown');
        if (_stage) _stage.off('mousemove');
        if (_stage) _stage.off('mouseup');
    }

    undo() {
        /*for(let i = 0; i<_lineArr.length; i++)
        {
            // _lineArr[i]
        }*/

        _lineArr[_currentNum].visible = false;
    }

    eraseOn() {}

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
        console.log(_opacity);
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

    colorChange() {
        // _canvas.freeDrawingBrush.color = this.getColor();
    }
    sizeChange() {
        // _canvas.freeDrawingBrush.width = this.getSize();
    }
    opacityeChange() {
        // _canvas.freeDrawingBrush.color = this.getOpacity();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Brush;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__ = __webpack_require__(0);


let _canvas;
let _color = '#000000';
let _size = 40;
class Airbrush {

    draw(canvas) {
        _canvas = canvas;
        _canvas.isDrawingMode = true;
        _canvas.freeDrawingBrush = new fabric.SprayBrush(_canvas);
        _canvas.freeDrawingBrush.color = this.getColor();
        _canvas.freeDrawingBrush.width = this.getSize();
        _canvas.freeDrawingBrush.density = 7;
        _canvas.freeDrawingBrush.dotWidth = 1;
        _canvas.freeDrawingBrush.dotWidthVariance = 1;
        _canvas.freeDrawingBrush.randomOpacity = false;
        _canvas.freeDrawingBrush.optimizeOverlapping = true;

        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].IS_LINE_DRAWING = false;
        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_TOOL = this;
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

    colorChange() {
        _canvas.freeDrawingBrush.color = this.getColor();
    }
    sizeChange() {
        _canvas.freeDrawingBrush.width = this.getSize();
    }
}
/* unused harmony export default */


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__ = __webpack_require__(0);


let _canvas;
let _color = '#000000';
let _size = 20;
class Crayon {

    draw(canvas) {
        _canvas = canvas;
        _canvas.isDrawingMode = true;
        _canvas.freeDrawingBrush = new fabric.SprayBrush(_canvas);
        _canvas.freeDrawingBrush.color = this.getColor();
        _canvas.freeDrawingBrush.width = this.getSize();
        _canvas.freeDrawingBrush.density = 12;
        _canvas.freeDrawingBrush.dotWidth = 2;
        _canvas.freeDrawingBrush.dotWidthVariance = 2;
        _canvas.freeDrawingBrush.randomOpacity = false;
        _canvas.freeDrawingBrush.optimizeOverlapping = true;

        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].IS_LINE_DRAWING = false;
        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_TOOL = this;
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

    colorChange() {
        _canvas.freeDrawingBrush.color = this.getColor();
    }
    sizeChange() {
        _canvas.freeDrawingBrush.width = this.getSize();
    }
}
/* unused harmony export default */


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__ = __webpack_require__(0);


let _canvas, _stage;
let _color = '#000000';
let _size = 10;
let _opacity = 100;
let _mode, _this;
let _lineArr = [];
let _currentNum, _drawLayer, isDrawing;

class Eraser {

    draw(stage, drawLayer) {

        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = drawLayer;
        _this = this;

        /* let backgroundLayer = new Konva.Layer();
         let backgroundColor = new Konva.Image({
             // width: window.innerWidth,
             // height: window.innerHeight,
             width:500,
             height:400,
             fill: 'rgb(242,233,226)'
         })
         backgroundLayer.add(backgroundColor);
         stage.add(backgroundLayer);
         backgroundLayer.draw();*/

        _stage.add(_drawLayer);
        this.usePen();
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

    usePen() {
        isDrawing = false;
        let currentLine;
        _stage.on('mousedown', evt => {
            // Start drawing
            isDrawing = true;
            // Create new line object
            let pos = this.getRelativePointerPosition(_stage);
            currentLine = new Konva.Line({
                stroke: _this.getColor(),
                strokeWidth: _this.getSize(),
                points: [pos.x, pos.y],
                lineCap: 'round',
                tension: 0.5,
                opacity: _this.getOpacity() / 100,
                globalCompositeOperation: 'destination-out'
            });
            _drawLayer.add(currentLine);
        });

        _stage.on('mousemove', evt => {
            if (!isDrawing) {
                return;
            }

            // If drawing, add new point to the current line object
            let pos = this.getRelativePointerPosition(_stage);
            let newPoints = currentLine.points().concat([pos.x, pos.y]);
            currentLine.points(newPoints);
            _drawLayer.batchDraw();
        });

        _stage.on('mouseup', evt => {
            // End drawing
            isDrawing = false;
        });
    }

    endPen() {
        // console.log("eraseEND")
        if (_stage) _stage.off('mousedown');
        if (_stage) _stage.off('mousemove');
        if (_stage) _stage.off('mouseup');
    }

    undo() {
        /*for(let i = 0; i<_lineArr.length; i++)
        {
            // _lineArr[i]
        }*/

        _lineArr[_currentNum].visible = false;
    }

    eraseOn() {
        console.log("eraser");
        _mode = 'eraser';
        // console.log("eraser", _currentNum);
        // console.log( _lineArr[_currentNum]);
        // _lineArr[_currentNum]._id.visible(false);
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

    colorChange() {
        // _canvas.freeDrawingBrush.color = this.getColor();
    }
    sizeChange() {
        // _canvas.freeDrawingBrush.width = this.getSize();
    }
    opacityeChange() {
        // _canvas.freeDrawingBrush.color = this.getOpacity();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Eraser;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__ = __webpack_require__(0);


const _defaultViewPort = 1;
const _minimumViewPort = 50;
const _maximumViewPort = 200;
let _currentViewPort = 100;
let _canvas, _stage, _drawLayer, _this;
class Zoom {

    draw(stage, drawLayer) {
        __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__["a" /* default */].CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = drawLayer;
        _this = this;
        _stage.add(_drawLayer);
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

    sizeSetMouseWheel() {}
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
/* 9 */
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_GameConfig__ = __webpack_require__(0);


let _canvas, _stage;
class Move {
    move(stage, layer) {
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

    endHand() {
        if (_stage) _stage.draggable(false);
        if (_stage) _stage.off('wheel');
    }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Move;


/***/ })
/******/ ]);
//# sourceMappingURL=index.bundle.js.map