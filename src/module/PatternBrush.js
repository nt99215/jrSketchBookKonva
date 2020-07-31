import GameConfig from "../data/GameConfig";

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

       /* let backgroundLayer = new Konva.Layer();
        let backgroundColor = new Konva.Image({
            // width: window.innerWidth,
            // height: window.innerHeight,
            width:500,
            height:400,
            fill: 'rgb(242,233,226)'
        })
        backgroundLayer.add(backgroundColor);
        stage.add(backgroundLayer);
        backgroundLayer.draw();*/

        this.usePen();

    }

    getRelativePointerPosition(node) {
        // the function will return pointer position relative to the passed node
        var transform = node.getAbsoluteTransform().copy();
        // to detect relative position we need to invert transform
        transform.invert();

        // get pointer (say mouse or touch) position
        var pos = node.getStage().getPointerPosition();

        // now we find relative point
        return transform.point(pos);
    }

    usePen () {

        let isDrawing = false;
        let currentLine;
        _stage.on('mousedown', (evt) => {
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
            });
            _drawLayer.add(currentLine);
        });

        _stage.on('mousemove', (evt) => {
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

        _stage.on('mouseup', (evt) => {
            // End drawing
            isDrawing = false;
        });
    }

    endPen () {
        if(_stage)_stage.off('mousedown');
        if(_stage)_stage.off('mousemove');
        if(_stage)_stage.off('mouseup');
    }


    undo() {
        /*for(let i = 0; i<_lineArr.length; i++)
        {
            // _lineArr[i]
        }*/

        _lineArr[_currentNum].visible = false;
    }

    eraseOn() {

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