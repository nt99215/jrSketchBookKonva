import GameConfig from "../data/GameConfig";
import LayerManager from "../manager/LayerManager";

let _stage, _drawLayer, _this;
let _color = GameConfig.DEFAULT_COLOR;
let _size = GameConfig.DEFAULT_LINE_SIZE;
let _opacity = GameConfig.DEFAULT_OPACITY;
let _img, _pattern, clone;


export default class Crayon {

    init(stage) {

        GameConfig.CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = new Konva.Layer;
        _stage.add(_drawLayer);
        GameConfig.CURRENT_LAYER = _drawLayer;
        _this = this;

        let imageURL = 'asset/image/pattern_3.png';
        Konva.Image.fromURL(imageURL, function(img){
            // img.fillPatternImage
            // img.fill('#000000')
            _img = img;
        });

        this.useTool();
    }


    newCtx(width, height) {
        let canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        return canvas.getContext("2d");
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
            // console.log(currentLine.points)
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
            // currentLine.node.destroy();
            // console.log(currentLine)
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

        clone = _img.clone({
            x:x - 20,
            y:y - 20,
            // fillColor:'#000000',
            // fill:'#1dad46'
        });

        clone.cache();
        _drawLayer.add(clone);
        // console.log(_drawLayer.children.length)

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