import GameConfig from "../data/GameConfig";
import LayerManager from "../manager/LayerManager";

let _stage, _drawLayer, _this;
let _color = GameConfig.DEFAULT_COLOR;
let _size = GameConfig.DEFAULT_LINE_SIZE;
let _opacity = GameConfig.DEFAULT_OPACITY;
let _img, _clone, _shapeEnable;
let _patternImage, _patternGroup, _fillRect;
let _lineCap = 'round';
let _patternType = 'A';
const _patterUrl = 'asset/image/screenTone/screenToneType';



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
                    lineCap:_this.getLineCap(),
                    tension:GameConfig.DEFAULT_TENSION,
                    fill:'#ffcc00',
                    opacity:_this.getOpacity() / 100
                });

                _fillRect = new Konva.Rect({
                    x:0,
                    y:0,
                    width:800,
                    height:550,
                    fillPatternImage: _patternImage,
                    globalCompositeOperation: 'source-in'
                });

                isDrawing = true;
            };

        });

        _stage.on('mousemove touchmove', (evt) => {
            if (!isDrawing) return;

            let pos = this.getRelativePointerPosition(_stage);
            let newPoints = currentLine.points().concat([pos.x, pos.y]);
            currentLine.points(newPoints);

            _patternGroup.add(currentLine);
            _drawLayer.add(_fillRect);
            _drawLayer.batchDraw();
        });

        _stage.on('mouseup touchend contentTouchend', (evt) => {
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
        let type = e.target.id.substr(2, e.target.name.length + 1);
        _patternType = type;
    }
    getLineType() {
        let url = _patterUrl + _patternType + '.png';
        return url;
    }


}