import GameConfig from "../data/GameConfig";
import LayerManager from "../manager/LayerManager";

let _stage, _drawLayer, _this, _textarea, _textNode;
let _color = GameConfig.DEFAULT_COLOR;
let _size = GameConfig.DEFAULT_LINE_SIZE;
let _opacity = GameConfig.DEFAULT_OPACITY;
const _defaultText = '글을 입력하세요';
const _fontFamily = [
    'Nanum Brush Script',
    'Nanum Pen Script',
    'NanumBarunGothic',
    'NanumBarunGothic YetHangul',
    'NanumBarunpen',
    'NanumGothic',
    'NanumGothic Eco',
    'NanumGothicCoding',
    'NanumMyeongjo',
    'NanumMyeongjo Eco',
    'NanumMyeongjo YetHangul',
    'NanumSquare',
    'NanumSquare_ac',
    'NanumSquareRound',
]

export default class TextInput {
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

        _stage.on('mousedown touchstart', (evt) => {
            isDrawing = !isDrawing;
            let pos = this.getRelativePointerPosition(_stage);
            let ff = _fontFamily[0];
            if(isDrawing)
            {
                _textNode = new Konva.Text({
                    // text: _defaultText,
                    x: pos.x,
                    y: pos.y,
                    fontSize: this.getSize(),
                    fontFamily: ff,
                    fill: this.getColor()
                });

                _drawLayer.add(_textNode);

                let stageBox = _stage.getContainer().getBoundingClientRect();
                let areaPosition = {
                    x: pos.x + stageBox.left,
                    y: pos.y + stageBox.top
                };

                _textarea = document.createElement('textarea');
                document.body.appendChild(_textarea);

                _textarea.value = _textNode.text();
                _textarea.style.position = 'absolute';
                _textarea.style.top = areaPosition.y + 'px';
                _textarea.style.left = areaPosition.x + 'px';
                // _textarea.style.width = _textNode.width() + 'px';
                _textarea.style.width = '30px';
                _textarea.style.height = _textNode.height() + 'px';
                _textarea.focus();
                _textarea.addEventListener('input', this.updateValue);

            }
            else
            {
                // _textNode.text(_textarea.value);
                document.body.removeChild(_textarea);
                // _drawLayer.add(_textNode);
                // _drawLayer.draw();
            }


        });

    }

    updateValue() {

        // _textNode.text(_textarea.value);
        // _textarea.style.position = 'absolute';
        // _textarea.style.top = areaPosition.y + 'px';
        // _textarea.style.left = areaPosition.x + 'px';
        _textarea.style.width = _textNode.width() + 'px';
        _textarea.style.height = _textNode.height() + 'px';

        if(_textarea.value)
        {
            _textNode.text(_textarea.value);
            _drawLayer.draw();
        }
    }

    getRelativePointerPosition(node) {
        let transform = node.getAbsoluteTransform().copy();
        transform.invert();
        let pos = node.getStage().getPointerPosition();
        return transform.point(pos);
    }

    destroy () {
        LayerManager.prototype.init(_drawLayer);
        if(_textarea) document.body.removeChild(_textarea);
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