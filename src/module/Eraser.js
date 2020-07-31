import GameConfig from "../data/GameConfig";

let _stage, _this, _mode, _currentNum, _drawLayer, isDrawing;
let _lineArr = [];
let _color = GameConfig.DEFAULT_COLOR;
let _size = GameConfig.DEFAULT_LINE_SIZE;
let _opacity = GameConfig.DEFAULT_OPACITY;

export default class Eraser {


    init(stage, drawLayer) {

        GameConfig.CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = drawLayer;
        _this = this;

        // _stage.add(_drawLayer);
        this.useTool();

    }

    useTool () {
        isDrawing = false;
        let currentLine;
        _stage.on('mousedown', (evt) => {
            // Start drawing
            isDrawing = true;
            // Create new line object
            let pos = this.getRelativePointerPosition(_stage);
            currentLine = new Konva.Line({
                stroke: _this.getColor(),
                strokeWidth: _this.getSize(),
                points: [pos.x, pos.y],
                lineCap:'round',
                tension:0.5,
                opacity:_this.getOpacity() / 100,
                globalCompositeOperation:'destination-out'
            });
            _drawLayer.add(currentLine);
        });

        _stage.on('mousemove', () => {
            if (!isDrawing) {
                return;
            }

            // If drawing, add new point to the current line object
            let pos = this.getRelativePointerPosition(_stage);
            let newPoints = currentLine.points().concat([pos.x, pos.y]);
            currentLine.points(newPoints);
            _drawLayer.batchDraw();
        });

        _stage.on('mouseup', (evt) => {
            // End drawing
            isDrawing = false;
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

    destroy() {
        // console.log("eraseEND")
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

}