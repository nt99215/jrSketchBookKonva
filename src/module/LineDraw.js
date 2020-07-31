import GameConfig from "../data/GameConfig";
import LayerManager from "../manager/LayerManager";

let _stage, _drawLayer, _this, isPaint, _line;
let _color = GameConfig.DEFAULT_COLOR;
let _size = GameConfig.DEFAULT_LINE_SIZE;
let _opacity = GameConfig.DEFAULT_OPACITY;
export default class LineDraw {

    init(stage) {
        GameConfig.CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = new Konva.Layer;
        _stage.add(_drawLayer);
        GameConfig.CURRENT_LAYER = _drawLayer;
        _this = this;

        this.useTool();
    }

    useTool() {
        _stage.on('contentMousedown', function () {
            isPaint = true;
            let pos = _stage.getPointerPosition();

            _line = new Konva.Line({
                points: [pos.x, pos.y, pos.x, pos.y],
                pointerLength: 20,
                pointerWidth: 20,
                // fill: 'black',
                opacity:_this.getOpacity() / 100,
                stroke: _this.getColor(),
                strokeWidth: _this.getSize(),
            });
            _drawLayer.add(_line);
        });

        _stage.on('contentMouseup', function () {
            isPaint = false;

        });

        _stage.on('contentMousemove', function () {
            if(!GameConfig.IS_LINE_DRAWING) return;
            if (!isPaint) {
                return;
            }

            let pos = _stage.getPointerPosition();
            let oldPoints = _line.points();
            _line.points([oldPoints[0], oldPoints[1], pos.x, pos.y])
            _drawLayer.draw();
        });
    }


    destroy () {
        LayerManager.prototype.init(_drawLayer);
        isPaint = false;
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