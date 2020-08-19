import GameConfig from "../data/GameConfig";
import LayerManager from "../manager/LayerManager";

let _stage, _drawLayer, _this;
let _color = GameConfig.DEFAULT_COLOR;
let _size = GameConfig.DEFAULT_LINE_SIZE;
let _opacity = GameConfig.DEFAULT_OPACITY;
const _typeConfigArr = [[0,0], [0, 0, 15], [0, 10]];
let _img, _brushType,_clone, _shapeEnable;
const _imgObj = {w:0, h:0, r:0};
const _angleRatio = 4;
let _lineCap = 'round';


export default class Brush {

    init(stage) {

        GameConfig.CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = new Konva.Layer();
        _stage.add(_drawLayer);
        GameConfig.CURRENT_LAYER = _drawLayer;
        _this = this;
        _shapeEnable = false;


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
            if(! _shapeEnable)
            {
                currentLine = new Konva.Line({
                    stroke: _this.getColor(),
                    strokeWidth: _this.getSize(),
                    points: [pos.x, pos.y],
                    globalCompositeOperation:'source-over',
                    // globalCompositeOperation:'destination-out',
                    // lineCap:'square',
                    lineCap:_this.getLineCap(),
                    tension:GameConfig.DEFAULT_TENSION,
                    // fill:'#ffcc00',
                    // fillPatternImage:'asset/image/starImg.png',
                    // fillEnabled:true,
                    opacity:_this.getOpacity() / 100
                });

                _drawLayer.add(currentLine);
            }

            else currentLine = {points:[pos.x, pos.y]}

        });

        _stage.on('mousemove touchmove', (evt) => {
            if (!isDrawing) return;

            let pos = this.getRelativePointerPosition(_stage);
            if(! _shapeEnable)
            {

                let newPoints = currentLine.points().concat([pos.x, pos.y]);
                currentLine.points(newPoints);
            }

            else
            {
                let obj = _imgObj;
                _img = new Konva.Rect({
                    // width:_this.getSize(),
                    // height:_this.getSize(),
                    width:parseInt(obj.w  * this.getSize()),
                    height:parseInt(obj.h * this.getSize()),
                    rotation:obj.r,
                    fill:_this.getColor(),
                })

                _img.cache();
                this.imageDraw(pos.x, pos.y);
            }
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
        transform.invert();
        // get pointer (say mouse or touch) position
        let pos = node.getStage().getPointerPosition();
        // now we find relative point
        return transform.point(pos);
    }


    imageDraw(x, y) {
        _clone = _img.clone({
            x:x,
            y:y,
            // width:_img.scale.x * 20,
            // height:10,
            fill:_this.getColor(),
        });

        _clone.cache();
        _drawLayer.add(_clone);
    }

    destroy () {
        LayerManager.prototype.init(_drawLayer);
        if(_stage)_stage.off('mousedown touchstart');
        if(_stage)_stage.off('mousemove touchmove');
        if(_stage)_stage.off('mouseup touchend contentTouchend');

        // console.log('brush', _drawLayer);
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
     * @param lineCap
     */
    setLineCap(str) { _lineCap = str;}
    getLineCap() { return _lineCap;}

    /**
     *
     * @param linType
     */
    setLineType(e) {
        let type = e.target.id.substr(1, e.target.name.length + 1);
        switch (type)
        {
            case 'circle' :
                this.setLineCap('round');
                _shapeEnable = false;
                break;
            case 'rect' :
                this.setLineCap('square');
                _shapeEnable = false;
                break;
            case 'diamond' :
                _imgObj.w = 1;
                _imgObj.h = 1;
                _imgObj.r = 45;
                _shapeEnable = true;
                break;
            case 'column' :
                _imgObj.w = 1/_angleRatio;
                _imgObj.h = 1;
                _imgObj.r = 0;
                _shapeEnable = true;
                break;
            case 'row' :
                _imgObj.w = 1;
                _imgObj.h = 1/_angleRatio;
                _imgObj.r = 0;
                _shapeEnable = true;
                break;
            case 'slash' :
                _imgObj.w = 1;
                _imgObj.h = 1/_angleRatio;
                _imgObj.r = -35;
                _shapeEnable = true;
                break;

        }
    }
    getLineType() { return _brushType;}


}