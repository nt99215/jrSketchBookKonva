import LineDraw from "../module/LineDraw";
import Brush from "../module/Brush";
import GameConfig from "../data/GameConfig";
import Airbrush from "../module/Airbrush";
import Crayon from "../module/Crayon";
import Eraser from "../module/Eraser";
import Zoom from "../module/Zoom";
import ClearCanvas from "../module/ClearCanvas";
import Move from "../module/Move";

let _id, _stage, _layer, _mainLayer;
let _colorArr = ['#ff00c8', '#59ff00', '#ffa200', '#0073ff'];
let _sizeArr = [5,7,10,20,30];

let $ = function(id){return document.getElementById(id)};
let brushEl = $('brush'),
    // airBrushEl = $('airBrush'),
    crayonEl = $('crayon'),
    // fillEl = $('fill'),
    lineEl = $('line'),
    screenToneEl = $('screenTone'),
    eraserEl = $('eraser'),
    textEl = $('text'),
    zoomEl= $('zoom'),
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
    dotEl = $('_dot');

export default class SketchBookKonva {
    constructor(id, width, height, layer = 1) {
        _id = id;
        this._init();
    }

    _createImg() {
        let imageURL = 'asset/image/sampleImg.jpg';
        let layer = new Konva.Layer;
        Konva.Image.fromURL(imageURL, function(image){
            layer.add(image);
            layer.draw();
        });

        _stage.add(layer)
    }

    _init() {


        _stage = new Konva.Stage({
            container: 'container',
            // width: window.innerWidth,
            // height: window.innerHeight
            width:500,
            height:400
        });

        GameConfig.MAIN_STAGE = _stage;

        this._createImg();

        _mainLayer = new Konva.Layer();
        GameConfig.MAIN_LAYER = _mainLayer;
        _stage.add(_mainLayer);



        // this.LineDraw = LineDraw.prototype.draw(_stage);
        // this.Brush = Brush.prototype.draw(_stage, _mainLayer);

        // eraserTypeEl.style.display = 'none';
        zoomSlider.style.display = 'none';
        lineTypeEl.style.display = 'none';
        $('_zoomSpan').style.display ='none';


        colorEl.onchange = function() {
            if(GameConfig.CURRENT_TOOL) GameConfig.CURRENT_TOOL.setColor(this.value);
        }

        sizeEl.onchange = function() {
            if(GameConfig.CURRENT_TOOL) GameConfig.CURRENT_TOOL.setSize(this.value);
        }

        opacityEl.onchange = function() {
            if(GameConfig.CURRENT_TOOL)
            {
                GameConfig.CURRENT_TOOL.setOpacity(this.value);
                GameConfig.CURRENT_TOOL.getOpacity();
            }
        }

        zoomSlider.onchange = function() {
            if(GameConfig.CURRENT_TOOL) GameConfig.CURRENT_TOOL.setSize(this.value);
        }

        /**
         * LINE STYLE
         */
        brushTypeEl.onchange = function(e) {
            if(GameConfig.CURRENT_TOOL) GameConfig.CURRENT_TOOL.setLineType(e);
        }
       /* dashEl.onchange = function() {
            if(GameConfig.CURRENT_TOOL) GameConfig.CURRENT_TOOL.setLineType(1);
        }
        dotEl.onchange = function() {
            if(GameConfig.CURRENT_TOOL) GameConfig.CURRENT_TOOL.setLineType(2);
        }*/

        /**
         * LINE STYLE
         */
        stokeEl.onchange = function() {
            if(GameConfig.CURRENT_TOOL) GameConfig.CURRENT_TOOL.setLineType(0);
        }
        dashEl.onchange = function() {
            if(GameConfig.CURRENT_TOOL) GameConfig.CURRENT_TOOL.setLineType(1);
        }
        dotEl.onchange = function() {
            if(GameConfig.CURRENT_TOOL) GameConfig.CURRENT_TOOL.setLineType(2);
        }


        /**
         * TOOLS
         */

        brushEl.onclick =()=> {

            GameConfig.IS_DRAWING_MODE = true;
            GameConfig.IS_LINE_DRAWING = false;
            this._toolsDestroy();
            Brush.prototype.init(_stage);

            colorEl.value = Brush.prototype.getColor();
            sizeEl.value = Brush.prototype.getSize();
            opacityEl.value = Brush.prototype.getOpacity();

            $('_circle').checked = true;
            colorEl.style.display = '';
            $('_colorSpan').style.display = '';
            sizeEl.style.display = '';
            $('_sizeSpan').style.display = '';
            opacityEl.style.display = '';
            $('_opacitySpan').style.display = '';
            zoomSlider.style.display = 'none';
            $('_zoomSpan').style.display ='none';

            brushTypeEl.style.display = '';
            //eraserTypeEl.style.display = 'none';
            lineTypeEl.style.display = 'none';
        }

        crayonEl.onclick =()=> {

            GameConfig.IS_DRAWING_MODE = true;
            GameConfig.IS_LINE_DRAWING = false;
            this._toolsDestroy();
            Crayon.prototype.init(_stage);

            colorEl.value = Brush.prototype.getColor();
            sizeEl.value = Brush.prototype.getSize();
            opacityEl.value = Brush.prototype.getOpacity();

            colorEl.style.display = '';
            $('_colorSpan').style.display = '';
            sizeEl.style.display = '';
            $('_sizeSpan').style.display = '';
            opacityEl.style.display = '';
            $('_opacitySpan').style.display = '';
            zoomSlider.style.display = 'none';
            $('_zoomSpan').style.display ='none';
            brushTypeEl.style.display = 'none';
            //eraserTypeEl.style.display = 'none';
            lineTypeEl.style.display = 'none';
        }

        lineEl.onclick =()=> {

            GameConfig.IS_DRAWING_MODE = false;
            GameConfig.IS_LINE_DRAWING = true;
            this._toolsDestroy();
            LineDraw.prototype.init(_stage);

            colorEl.value = LineDraw.prototype.getColor();
            sizeEl.value = LineDraw.prototype.getSize();
            opacityEl.value = LineDraw.prototype.getOpacity();

            lineTypeEl.style.display = '';
            brushTypeEl.style.display = 'none';
            //eraserTypeEl.style.display = 'none';

            colorEl.style.display = '';
            $('_colorSpan').style.display = '';
            sizeEl.style.display = '';
            $('_sizeSpan').style.display = '';
            opacityEl.style.display = '';
            $('_opacitySpan').style.display = '';
            zoomSlider.style.display = 'none';
            $('_zoomSpan').style.display ='none';
        }

        eraserEl.onclick =()=> {

            GameConfig.IS_DRAWING_MODE = false;
            GameConfig.IS_LINE_DRAWING = false;
            this._toolsDestroy();
            Eraser.prototype.init(_stage, _mainLayer);

            sizeEl.value = Eraser.prototype.getSize();
            opacityEl.value = Eraser.prototype.getOpacity();

            colorEl.style.display = 'none';
            $('_colorSpan').style.display = 'none';
            sizeEl.style.display = '';
            $('_sizeSpan').style.display = '';
            opacityEl.style.display = '';
            $('_opacitySpan').style.display = '';
            zoomSlider.style.display = 'none';
            $('_zoomSpan').style.display ='none';

            //eraserTypeEl.style.display = '';
            brushTypeEl.style.display = 'none';
            lineTypeEl.style.display = 'none';
        };

        zoomEl.onclick =()=> {
            // this._toolsDestroy();
            Zoom.prototype.init(_stage);
            zoomSlider.value = Zoom.prototype.getSize();

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

        }

        clearEl.onclick = ()=> {
            // ClearCanvas.prototype.canvasClear(_canvas);
            // _mainLayer.clear();
            // this._toolsDestroy();
            // GameConfig.MAIN_LAYER.find('Line').destroy();
            // GameConfig.MAIN_LAYER.draw();
            // _stage.remove(_mainLayer);

            brushTypeEl.style.display = 'none';
            lineTypeEl.style.display = 'none';
            //eraserTypeEl.style.display = 'none';

            this._toolsDestroy();

            _stage.remove(GameConfig.MAIN_LAYER);
            // GameConfig.MAIN_LAYER.clear();
            if(GameConfig.MAIN_LAYER)
            {
                GameConfig.MAIN_LAYER.remove();
                GameConfig.MAIN_LAYER.destroy();
                GameConfig.MAIN_LAYER = null;
            }

            if(GameConfig.CURRENT_LAYER)
            {
                _stage.remove(GameConfig.CURRENT_LAYER);
                GameConfig.CURRENT_LAYER.clear();
                GameConfig.CURRENT_LAYER.remove();
                GameConfig.CURRENT_LAYER.destroy();
                GameConfig.CURRENT_LAYER = null;
            }


            _mainLayer = new Konva.Layer();
            _stage.add(_mainLayer);
            GameConfig.MAIN_LAYER = _mainLayer;
            _mainLayer.draw();
            // console.log(_mainLayer)
            // _stage.remove(_mainLayer)
            // GameConfig.MAIN_LAYER.visible(false);

            // GameConfig.MAIN_LAYER.destroy();
            // console.log("clear", _stage, GameConfig.MAIN_LAYER)
        };

        moveEl.onclick = ()=> {
            brushTypeEl.style.display = 'none';
            lineTypeEl.style.display = 'none';
            this._toolsDestroy();
            Move.prototype.move(_stage);
        };


        this._default();

    }

    _default() {
        Brush.prototype.init(_stage);
        // Crayon.prototype.init(_stage);
        colorEl.value = Brush.prototype.getColor();
        sizeEl.value = Brush.prototype.getSize();
        opacityEl.value = Brush.prototype.getOpacity();
    }



    _toolsDestroy() {
        if(GameConfig.CURRENT_TOOL) GameConfig.CURRENT_TOOL.destroy();
    }

    rgbToHex(r,g,b) {

        let rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
            const hex = x.toString(16)
            return hex.length === 1 ? '0' + hex : hex
        }).join('');

        console.log(rgbToHex)
    }

    hexToRgb(hex) {
        console.log("A")
        hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
            ,(m, r, g, b) => '#' + r + r + g + g + b + b)
            .substring(1).match(/.{2}/g)
            .map(x => parseInt(x, 16))

        console.log(hex);
    }





}