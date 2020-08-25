import GameConfig from "../data/GameConfig";
import LayerManager from "../manager/LayerManager";
import Utility from "../util/utility";

let _stage, _drawLayer, _this,_pattern, _clone;
let _color = GameConfig.DEFAULT_COLOR;
let _size = GameConfig.DEFAULT_LINE_SIZE * 2;
let _opacity = GameConfig.DEFAULT_OPACITY;
let _crayonType = 0;
let _imgSrc = [
    'asset/image/pattern/crayon0/pattern_0.png',
    'asset/image/pattern/crayon1/pattern_1.png',
    'asset/image/pattern/crayon2/pattern_2.png'];


export default class Crayon {

    init(stage) {

        GameConfig.CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = new Konva.Layer();
        _stage.add(_drawLayer);
        GameConfig.CURRENT_LAYER = _drawLayer;
        _this = this;
        this.getCrayonImage();
        this.useTool();
    }


    useTool () {

        let isDrawing = false;
        let currentLine;

        _stage.on('mousedown touchstart', (evt) => {
            // if(!GameConfig.IS_DRAWING_MODE) return;
            isDrawing = true;
            let pos = this.getRelativePointerPosition(_stage);
            currentLine = {points:[pos.x, pos.y]}
            this.getSize();
            this.getColor();
        });

        _stage.on('mousemove touchmove', (evt) => {
            let pos = this.getRelativePointerPosition(_stage);
            GameConfig.DRAW_CURSOR._move(pos.x, pos.y);
            if (!isDrawing) return;
            this.imageDraw(pos.x, pos.y);
            _drawLayer.batchDraw();

        });

        _stage.on('mouseup touchend contentTouchend', (evt) => {
            GameConfig.DRAW_CURSOR._visible(false);
            isDrawing = false;
            LayerManager.prototype.init(_drawLayer);
            _drawLayer = new Konva.Layer();
            _stage.add(_drawLayer);
            GameConfig.CURRENT_LAYER = _drawLayer;
            GameConfig.DRAW_CURSOR._visible(true);
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
            x:x - obj.width/2,
            y:y - obj.height/2,
        });
        _clone.cache();
        _drawLayer.add(_clone);
    }

    destroy () {
        LayerManager.prototype.init(_drawLayer);
        if(_stage)_stage.off('mousedown touchstart');
        if(_stage)_stage.off('mousemove touchmove');
        if(_stage)_stage.off('mouseup touchend contentTouchend');
    }



    /**
     *
     * @param color
     */
    setColor(color) {_color = color;}
    getColor() {
        let c = Utility.hexToRgb(_color);
        _pattern.filters([Konva.Filters.RGBA]);
        _pattern.red(c.r);
        _pattern.green(c.g);
        _pattern.blue(c.b);
    }

    /**
     *
     * @param size
     */
    setSize(size) { _size = size * 2;}
    getSize() {
        let obj = _pattern.attrs.image;
        obj.width = _size;
        obj.height = _size;
    }

    /**
     *
     * @param opacity
     */
    setOpacity(opacity) { _opacity = opacity;}
    getOpacity() { return _opacity;}

    /**
     *
     * @param lineType
     */
    setLineType(e) {
        let type = e.target.id.substr(1, e.target.name.length + 1);
        switch (type)
        {
            case 'cA' :
                _crayonType = 0;
                break;
            case 'cB' :
                _crayonType = 1;
                break;
            case 'cC' :
                _crayonType = 2
                break;
            default :
                _crayonType = 0;
                break;
        }
        this.getCrayonImage();
    }

    getLineType() {return _crayonType;}

    getCrayonImage() {
        _pattern = new Image();
        _pattern.onload =()=> {
            let img = new Konva.Image({
                image:_pattern,
            });
            _pattern = img;
            _pattern.cache();
        }
        _pattern.src = _imgSrc[this.getLineType()];
    }




}