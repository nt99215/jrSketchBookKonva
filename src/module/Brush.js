import GameConfig from "../data/GameConfig";
import LayerManager from "../manager/LayerManager";

let _stage, _drawLayer, _this;
let _color = GameConfig.DEFAULT_COLOR;
let _size = GameConfig.DEFAULT_LINE_SIZE;
let _opacity = GameConfig.DEFAULT_OPACITY;


export default class Brush {

    init(stage) {

        GameConfig.CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = new Konva.Layer;
        _stage.add(_drawLayer);
        GameConfig.CURRENT_LAYER = _drawLayer;
        _this = this;

        this.useTool();

    }


    useTool () {

        let isDrawing = false;
        let currentLine;
        _stage.on('touchstart', (evt) => {
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
                lineCap:'round',
                tension:GameConfig.DEFAULT_TENSION,
                dash:[2,2,2],
                dashEnabled:true,
                fill:'#ffcc00',
                fillPatternImage:'asset/image/starImg.png',
                fillEnabled:true,
                opacity:_this.getOpacity() / 100
            });
            _drawLayer.add(currentLine);
        });

        _stage.on('touchmove', (evt) => {
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

        _stage.on('touchend', (evt) => {
            // End drawing
            isDrawing = false;
            // currentLine.node.destroy();
            console.log(currentLine)
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

    destroy () {
        LayerManager.prototype.init(_drawLayer);
        if(_stage)_stage.off('mousedown');
        if(_stage)_stage.off('mousemove');
        if(_stage)_stage.off('mouseup');

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

    pattern() {
        // get fill pattern image
        let shape
        let fillPatternImage = shape.fillPatternImage();

// set fill pattern image
        let imageObj = new Image();
        imageObj.onload = function() {
            shape.fillPatternImage(imageObj);
        };
        imageObj.src = 'path/to/image/jpg';
    }

}