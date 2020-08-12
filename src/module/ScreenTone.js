import GameConfig from "../data/GameConfig";
import LayerManager from "../manager/LayerManager";

let _stage, _drawLayer, _this, _pattern, _clone;
let _color = GameConfig.DEFAULT_COLOR;
let _size = GameConfig.DEFAULT_LINE_SIZE;
let _opacity = GameConfig.DEFAULT_OPACITY;
let _screenToneType = 0;

export default class ScreenTone {

    init(stage) {

        GameConfig.CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = new Konva.Layer();
        _stage.add(_drawLayer);
        GameConfig.CURRENT_LAYER = _drawLayer;
        _this = this;

        this.useTool();
    }

    useTool () {

        let isDrawing = false;
        let currentLine;

        _stage.on('mousedown touchstart', (evt) => {
            // if(!GameConfig.IS_DRAWING_MODE) return;
            // Start drawing
            isDrawing = true;

            let pos = this.getRelativePointerPosition(_stage);
            currentLine = {points:[pos.x, pos.y]}
            this.getSize();
            this.getColor();
        });

        _stage.on('mousemove touchmove', (evt) => {
            if (!isDrawing) return;

            let pos = this.getRelativePointerPosition(_stage);
            this.imageDraw(pos.x, pos.y);
            _drawLayer.batchDraw();

        });

        _stage.on('mouseup touchend contentTouchend', (evt) => {
            // End drawing
            isDrawing = false;
            LayerManager.prototype.init(_drawLayer);
            _drawLayer = new Konva.Layer();
            _stage.add(_drawLayer);
            GameConfig.CURRENT_LAYER = _drawLayer;
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

        let obj = this.getCrayonImage();
        _clone = obj.clone({
            x:x,
            y:y,
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
    setColor(color) { _color = color;}
    getColor() { return _color;}

    /**
     *
     * @param size
     */
    setSize(size) { _size = size;}
    getSize() { return _size;}

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
        console.log(type)
        switch (type)
        {
            case 'sA' :
                _screenToneType = 0;
                break;
            case 'sB' :
                _screenToneType = 1;
                break;
            case 'sC' :
                _screenToneType = 2
                break;
            default :
                _screenToneType = 0;
                break;
        }
        this.getCrayonImage();
    }

    getLineType() {return _screenToneType;}

    getCrayonImage() {
        // tempBmd = new Konva.B(7,7,true,0x000000)
        _pattern = new Konva.Rect({
            x:0,
            y:0,
            width:30,
            height:30,
            fill:'#363433',

        });
        return _pattern;
    }

}