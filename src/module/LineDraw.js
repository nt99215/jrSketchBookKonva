import GameConfig from "../data/GameConfig";
import LayerManager from "../manager/LayerManager";

let _stage, _drawLayer, _this, isPaint, _line, _dashEnabled;
let _color = GameConfig.DEFAULT_COLOR;
let _size = GameConfig.DEFAULT_LINE_SIZE;
let _opacity = GameConfig.DEFAULT_OPACITY;
const _dashConfigArr = [[0], [0, 0, 30], [0, 30]];
let _lineType = _dashConfigArr[0];

export default class LineDraw {

    init(stage) {
        GameConfig.CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = new Konva.Layer();
        _stage.add(_drawLayer);
        GameConfig.DRAW_CURSOR._drawRect(this.getSize());
        GameConfig.CURRENT_LAYER = _drawLayer;
        _this = this;
        _dashEnabled = false;

        this.useTool();
    }

    useTool() {
        _stage.on('mousedown touchstart', function () {
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
                dashEnabled: _dashEnabled,
                dash:_this.getLineType()
            });
            _drawLayer.add(_line);
        });

        _stage.on('mouseup touchend contentTouchend', ()=> {
            GameConfig.DRAW_CURSOR._destroy();
            let pos = _stage.getPointerPosition();
            GameConfig.DRAW_CURSOR._drawRect(this.getSize(), pos.x, pos.y);

            isPaint = false;
            LayerManager.prototype.init(_drawLayer);
            _drawLayer = new Konva.Layer();
            _stage.add(_drawLayer);
            GameConfig.CURRENT_LAYER = _drawLayer;
        });

        _stage.on('mousemove touchmove', function () {

            // if(!GameConfig.IS_LINE_DRAWING || !isPaint) return;
            if(!isPaint) return;

            let pos = _stage.getPointerPosition();
            GameConfig.DRAW_CURSOR._move(pos.x, pos.y);
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
    setSize(size) {
        _size = size;
        _lineType.pop();
        _lineType.push(_size * 2);
    }
    getSize() {return _size;}

    /**
     *
     * @param opacity
     */
    setOpacity(opacity) { _opacity = opacity;}
    getOpacity() { return _opacity;}

    /**
     *
     * @param lineType
     */
    setLineType(e) {
        let type = e.target.id.substr(1, e.target.name.length + 1);
        switch (type)
        {
            case 'stroke' :
                _lineType = [0];
                break;
            case 'dot' :
                _lineType = [0, this.getSize() * 2];
                break;
            case 'dash' :
                _lineType = [0, 0, this.getSize() * 2];
                break;
            default :
                _lineType = [0];
                break;
        }
        _dashEnabled = type !== 'stroke';
    }

    getLineType() {return _lineType;}

}