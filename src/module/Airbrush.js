import GameConfig from "../data/GameConfig";
import LayerManager from "../manager/LayerManager";

let _stage, _drawLayer, _this;
let _color = GameConfig.DEFAULT_COLOR;
let _size = GameConfig.DEFAULT_LINE_SIZE;
let _opacity = GameConfig.DEFAULT_OPACITY;


export default class Airbrush {

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
            // _drawLayer.add(currentLine);
        });

        _stage.on('mousemove touchmove', (evt) => {
            // if(!GameConfig.IS_DRAWING_MODE) return;
            if (!isDrawing) {
                return;
            }

            // If drawing, add new point to the current line object
            let pos = this.getRelativePointerPosition(_stage);
            // let newPoints = currentLine.points().concat([pos.x, pos.y]);
            // currentLine.points(newPoints);
            this.imageDraw(pos.x, pos.y);

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

        let angle = Math.random() * Math.PI * 2;
        let radius = Math.random() * this.getSize() / 2;
        let xPos = x + Math.cos(angle) * radius;
        let yPos = y + Math.sin(angle) * radius;
        let c = this.getColor();
        let r = (Math.random() * 10)/5;
        for(let  i = 0; i<3; i++)
        {
            let rect = new Konva.Rect({
                x:xPos,
                y:yPos,
                width:r,
                height:r,
                fill: c,
                perfectDrawEnabled:false,
                listening:false
            });
            _drawLayer.add(rect);
            _drawLayer.batchDraw();
        }

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


}