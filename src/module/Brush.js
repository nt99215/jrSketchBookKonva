import GameConfig from "../data/GameConfig";
import LayerManager from "../manager/LayerManager";

let _stage, _drawLayer, _this;
let _color = GameConfig.DEFAULT_COLOR;
let _size = GameConfig.DEFAULT_LINE_SIZE;
let _opacity = GameConfig.DEFAULT_OPACITY;
let _blur = 0;
let _img, _clone, _shapeEnable;
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
        let currentLine, blurEnable;
        _stage.on('mousedown touchstart', (evt) => {
            isDrawing = true;
            blurEnable = this.getBlur();
            let pos = this.getRelativePointerPosition(_stage);
            if(! _shapeEnable)
            {
                currentLine = new Konva.Line({
                    stroke: _this.getColor(),
                    strokeWidth: _this.getSize(),
                    points: [pos.x, pos.y],
                    lineJoin:'round',
                    lineCap:_this.getLineCap(),
                    tension:GameConfig.DEFAULT_TENSION,
                    opacity:_this.getOpacity() / 100,
                    globalCompositeOperation:'source-over',
                });
                _drawLayer.add(currentLine);
            }
            else currentLine = {points:[pos.x, pos.y]}
        });

        _stage.on('mousemove touchmove', (evt) => {
            let pos = this.getRelativePointerPosition(_stage);
            GameConfig.DRAW_CURSOR._move(pos.x, pos.y);
            if (!isDrawing) return;
            if(! _shapeEnable)
            {
                let newPoints = currentLine.points().concat([pos.x, pos.y]);
                currentLine.points(newPoints);
                if(blurEnable) this.setBlurFilter(currentLine, true);
            }
            else
            {
                let obj = _imgObj;
                _img = new Konva.Rect({
                    width:parseInt(obj.w  * this.getSize()),
                    height:parseInt(obj.h * this.getSize()),
                    rotation:obj.r,
                    fill:_this.getColor(),
                })

                _img.cache();
                this.setBlurFilter(_img, false);
                this.imageDraw(pos.x, pos.y);
            }
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

    setBlurFilter(obj, cacheEnable) {
        if(cacheEnable) obj.cache();
        obj.blurRadius(this.getBlur());
        obj.filters([Konva.Filters.Blur]);
    }

    getRelativePointerPosition(node) {
        let transform = node.getAbsoluteTransform().copy();
        transform.invert();
        let pos = node.getStage().getPointerPosition();
        return transform.point(pos);
    }


    imageDraw(x, y) {
        _clone = _img.clone({
            x:x,
            y:y,
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
     * @param opacity
     */
    setBlur(blur) { _blur = blur;}
    getBlur() { return _blur;}

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
        let type = e.target.id.substr(0, e.target.id.length);
        type = String(type);
        switch (type)
        {
            case '1' :
                this.setLineCap('round');
                _shapeEnable = false;
                break;
            case '2' :
                this.setLineCap('square');
                _shapeEnable = false;
                break;
            case '3' :
                _imgObj.w = 1;
                _imgObj.h = 1;
                _imgObj.r = 45;
                _shapeEnable = true;
                break;
            case '4' :
                _imgObj.w = 1/_angleRatio;
                _imgObj.h = 1;
                _imgObj.r = 0;
                _shapeEnable = true;
                break;
            case '5' :
                _imgObj.w = 1;
                _imgObj.h = 1/_angleRatio;
                _imgObj.r = 0;
                _shapeEnable = true;
                break;
            case '6' :
                _imgObj.w = 1;
                _imgObj.h = 1/_angleRatio;
                _imgObj.r = -35;
                _shapeEnable = true;
                break;

        }
    }
}