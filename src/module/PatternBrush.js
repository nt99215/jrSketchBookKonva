import GameConfig from "../data/GameConfig";
import LayerManager from "../manager/LayerManager";

let _canvas, _stage;
let _color = '#000000';
let _size = 10;
let _opacity = 100;
let _mode, _this;
let _lineArr = [];
let _currentNum, _drawLayer;

export default class PatternBrush {


    draw(stage, drawLayer) {

        GameConfig.CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = drawLayer;
        _this = this;

        this.usePen();

    }

    getRelativePointerPosition(node) {
        var transform = node.getAbsoluteTransform().copy();
        transform.invert();
        var pos = node.getStage().getPointerPosition();
        return transform.point(pos);
    }

    usePen () {

        let isDrawing = false;
        let currentLine;
        _stage.on('mousedown', (evt) => {
            // if(!GameConfig.IS_DRAWING_MODE) return;
            isDrawing = true;
            let pos = this.getRelativePointerPosition(_stage);
            currentLine = new Konva.Line({
                stroke: _this.getColor(),
                strokeWidth: _this.getSize(),
                points: [pos.x, pos.y],
                // globalCompositeOperation:'source-over',
                // globalCompositeOperation:'destination-out',
            });
            _drawLayer.add(currentLine);
        });

        _stage.on('mousemove', (evt) => {
            // if(!GameConfig.IS_DRAWING_MODE) return;
            if (!isDrawing) return;
            let pos = this.getRelativePointerPosition(_stage);
            let newPoints = currentLine.points().concat([pos.x, pos.y]);
            currentLine.points(newPoints);
            _drawLayer.batchDraw();
        });

        _stage.on('mouseup', (evt) => {
            isDrawing = false;
        });
    }

    destroy () {
        LayerManager.prototype.init(_drawLayer);
        if(_stage)_stage.off('mousedown');
        if(_stage)_stage.off('mousemove');
        if(_stage)_stage.off('mouseup');
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


    colorChange() {
        // _canvas.freeDrawingBrush.color = this.getColor();
    }
    sizeChange() {
        // _canvas.freeDrawingBrush.width = this.getSize();
    }
    opacityeChange() {
        // _canvas.freeDrawingBrush.color = this.getOpacity();
    }
}