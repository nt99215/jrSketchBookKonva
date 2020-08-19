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
import TextInput from "../module/TextInput";

let _id, _stage, _mainLayer;

let $ = function(id){return document.getElementById(id)};
let toolsOption = $('toolsOption'),
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
    {el:textEl, obj:TextInput},
    {el:eraserEl, obj:Eraser},
    {el:zoomEl, obj:Zoom},
    {el:moveEl, obj:Move},
    {el:clearEl, obj:ClearCanvas},
]

export default class SketchBookKonva {
    constructor(id, width, height, layer = 1) {
        _id = id;
        this._init();
    }

    _init() {

        _stage = new Konva.Stage({
            container: 'container',
            width:GameConfig.STAGE_SIZE.width,
            height:GameConfig.STAGE_SIZE.height
        });

        GameConfig.MAIN_STAGE = _stage;

        this._createImg();

        _mainLayer = new Konva.Layer();
        GameConfig.MAIN_LAYER = _mainLayer;
        _stage.add(_mainLayer);

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
            if(GameConfig.CURRENT_TOOL.constructor.name === 'Zoom')
                GameConfig.CURRENT_TOOL.setSize(this.value);
        }


        /**TOOLS SELECT
         *
         */
        for(let i in _elementArr)
        {
            let eL = _elementArr[i].el;
            let o =  _elementArr[i].obj;
            eL.onclick =()=> this._toolSelect(eL.id, o);
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

        this._toolSelect();

    }


    _toolSelect(id = '', obj =  Brush) {
        // toolsOption.style.display = 'none';
        // brushTypeEl.style.display = '';

        this._toolsDestroy();

        // if(id === 'zoom' || id === 'clear' || id === 'move')
        if(id === 'zoom' || id === 'move' || id === 'clear')
        {
            GameConfig.IS_DRAWING_MODE = false;
            obj.prototype.init(_stage);
            if(id === 'clear') this._layerClear();
            return;
        }


        GameConfig.IS_DRAWING_MODE = true;
        // this._toolsDestroy();

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
        const imageURL = 'asset/image/sampleImg.jpg';
        const layer = new Konva.Layer();
        Konva.Image.fromURL(imageURL, (image)=>{

            layer.add(image);
            layer.draw();
        });
        _stage.add(layer);

    }


    _toolsDestroy() {
        if(GameConfig.CURRENT_TOOL) GameConfig.CURRENT_TOOL.destroy();
    }


}