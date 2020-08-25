import GameConfig from "../data/GameConfig";
import LayerManager from "../manager/LayerManager";

let _stage, _this, _mode, _currentNum, _drawLayer, isDrawing, _lineCap;
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
        this.useTool();

    }

    useTool () {
        isDrawing = false;
        let currentLine;
        _stage.on('mousedown touchstart', (evt) => {
            isDrawing = true;
            let pos = this.getRelativePointerPosition(_stage);
            currentLine = new Konva.Line({
                stroke: _this.getColor(),
                strokeWidth: _this.getSize(),
                points: [pos.x, pos.y],
                lineCap:'round',
                tension:GameConfig.DEFAULT_TENSION,
                opacity:_this.getOpacity() / 100,
                globalCompositeOperation:'destination-out'
            });
            _drawLayer.add(currentLine);
        });

        _stage.on('mousemove touchmove', () => {
            let pos = this.getRelativePointerPosition(_stage);
            GameConfig.DRAW_CURSOR._move(pos.x, pos.y);
            if (!isDrawing) return;

            let newPoints = currentLine.points().concat([pos.x, pos.y]);
            currentLine.points(newPoints);
            _drawLayer.batchDraw();
        });

        _stage.on('mouseup touchend contentTouchend', (evt) => {
            GameConfig.DRAW_CURSOR._visible(false);
            isDrawing = false;
            /*LayerManager.prototype.init(_drawLayer);
            _drawLayer = new Konva.Layer();
            _stage.add(_drawLayer);
            GameConfig.CURRENT_LAYER = _drawLayer;*/
            GameConfig.DRAW_CURSOR._visible(true);
        });
    }

    getRelativePointerPosition(node) {
        let transform = node.getAbsoluteTransform().copy();
        transform.invert();
        let pos = node.getStage().getPointerPosition();
        return transform.point(pos);
    }

    destroy() {
        // console.log("eraseEND")
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
     * @param lineCap
     */
    setLineCap(str) { _lineCap = str;}
    getLineCap() { return _lineCap;}


    /**
     *
     * @param linType
     */
    setLineType(str) {}
    getLineType(str) {}

}