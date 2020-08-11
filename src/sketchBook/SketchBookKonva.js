import LineDraw from "../module/LineDraw";
import Brush from "../module/Brush";
import GameConfig from "../data/GameConfig";
import Airbrush from "../module/Airbrush";
import Crayon from "../module/Crayon";
import Eraser from "../module/Eraser";
import Zoom from "../module/Zoom";
import Move from "../module/Move";
import ClearCanvas from "../module/ClearCanvas";
import ScreenTone from "../module/ScreenTone";

let _id, _stage, _mainLayer;

let $ = function(id){return document.getElementById(id)};
let toolsEl = $('tools'),
    brushEl = $('brush'),
    airBrushEl = $('airBrush'),
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
    screenToneTypeEl = $('screenToneType')

let _elementArr = [
    {el:brushEl, obj:Brush},
    {el:airBrushEl, obj:Airbrush},
    {el:crayonEl, obj:Crayon},
    {el:lineEl, obj:LineDraw},
    {el:screenToneEl, obj:ScreenTone},
    {el:eraserEl, obj:Eraser},
    {el:zoomEl, obj:Zoom},
    {el:clearEl, obj:ClearCanvas},
    {el:moveEl, obj:Move},
]

export default class SketchBookKonva {
    constructor(id, width, height, layer = 1) {
        _id = id;
        this._init();
    }

    _init() {

        _stage = new Konva.Stage({
            container: 'container',
            width:800,
            height:550
        });

        GameConfig.MAIN_STAGE = _stage;

        this._createImg();

        _mainLayer = new Konva.Layer();
        GameConfig.MAIN_LAYER = _mainLayer;
        _stage.add(_mainLayer);


        // zoomSlider.style.display = 'none';
        // lineTypeEl.style.display = 'none';
        // crayonTypeEl.style.display = 'none';

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


        /**TOOLS SELECT
         *
         */
        for(let i in _elementArr)
        {
            let eL = _elementArr[i].el;
            let o =  _elementArr[i].obj;
            eL.onclick =()=> this._elementEnable(eL.id, o);
        }

        /**
         * BRUSH STYLE
         */
        brushTypeEl.onchange = function(e) {
            if(GameConfig.CURRENT_TOOL) GameConfig.CURRENT_TOOL.setLineType(e);
        }

        /**
         * LINE STYLE
         */
        lineTypeEl.onchange = function(e) {
            if(GameConfig.CURRENT_TOOL) GameConfig.CURRENT_TOOL.setLineType(e);
        }

        /**
         * CRAYON STYLE
         */
        crayonTypeEl.onchange = function(e) {
            if(GameConfig.CURRENT_TOOL) GameConfig.CURRENT_TOOL.setLineType(e);
        }

        /**
         * CRAYON STYLE
         */
        screenToneTypeEl.onchange = function(e) {
            if(GameConfig.CURRENT_TOOL) GameConfig.CURRENT_TOOL.setLineType(e);
        }


        /*brushEl.onclick =()=> {

            Brush.prototype.init(_stage);
            this._elementEnable(brushEl, Brush);
        }

        airBrushEl.onclick =()=> {

            Brush.prototype.init(_stage);
            this._elementEnable(brushEl, Airbrush);
        }

        crayonEl.onclick =()=> {

            Crayon.prototype.init(_stage);
            this._elementEnable(brushEl, Crayon);
        }

        lineEl.onclick =()=> {

            LineDraw.prototype.init(_stage);
            this._elementEnable(brushEl, LineDraw);
        }

        eraserEl.onclick =()=> {

            Eraser.prototype.init(_stage);
            this._elementEnable(brushEl, Eraser);
        };

        moveEl.onclick = ()=> {
            Move.prototype.move(_stage);
            this._elementEnable(brushEl, Move);
        };

        zoomEl.onclick =()=> {
            // this._toolsDestroy();
            Zoom.prototype.init(_stage);
            this._elementEnable(brushEl, Zoom);
            zoomSlider.value = Zoom.prototype.getSize();

        }


        clearEl.onclick = ()=> {
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
        };
*/
        this._elementEnable();

    }


    _elementEnable(id = '', obj =  Brush) {
        // toolsEl.style.display = 'none';
        // brushTypeEl.style.display = '';

        if(id === 'zoom' || id === 'clear' || id === 'move')
        {
            GameConfig.IS_DRAWING_MODE = false;
            if(id === 'clear') this._layerClear();
            return;
        }


        GameConfig.IS_DRAWING_MODE = true;
        // GameConfig.IS_LINE_DRAWING = true;
        this._toolsDestroy();

        if(id === 'eraser') {
            GameConfig.IS_DRAWING_MODE = false;
            obj.prototype.init(_stage, _mainLayer);
            return;
        }
        else obj.prototype.init(_stage);


        colorEl.value = obj.prototype.getColor();
        sizeEl.value = obj.prototype.getSize();
        opacityEl.value = obj.prototype.getOpacity();

    }

    _layerClear() {
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
    }


    _createImg() {
        let imageURL = 'asset/image/sampleImg.jpg';
        let layer = new Konva.Layer();
        Konva.Image.fromURL(imageURL, function(image){
            layer.add(image);
            layer.draw();
        });

        _stage.add(layer)
    }


    _toolsDestroy() {
        if(GameConfig.CURRENT_TOOL) GameConfig.CURRENT_TOOL.destroy();
    }


}