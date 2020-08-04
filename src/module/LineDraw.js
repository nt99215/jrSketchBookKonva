import GameConfig from "../data/GameConfig";
import LayerManager from "../manager/LayerManager";

let _stage, _drawLayer, _this, isPaint, _line;
let _color = GameConfig.DEFAULT_COLOR;
let _size = GameConfig.DEFAULT_LINE_SIZE;
let _opacity = GameConfig.DEFAULT_OPACITY;
const _dashConfigArr = [[0,0], [0, 0, 15], [0, 10]];
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
                // pointerLength: 20,
                // pointerWidth: 20,
                lineCap:'round',
                opacity:_this.getOpacity() / 100,
                stroke: _this.getColor(),
                strokeWidth: _this.getSize(),
                // dash:[_this.getSize()/10,_this.getSize()],
                // dash:[29, 20, 0.001, 20],
                dashEnabled:`true`,
                dash:_dashConfigArr[2],
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