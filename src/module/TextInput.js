import GameConfig from "../data/GameConfig";
import LayerManager from "../manager/LayerManager";

let _stage, _drawLayer, _this, textarea, textNode;
let _color = GameConfig.DEFAULT_COLOR;
let _size = GameConfig.DEFAULT_LINE_SIZE;
let _opacity = GameConfig.DEFAULT_OPACITY;
// const _defaultText = '글을 입력하세요';
const _defaultText = '글을';
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
            let ff = _fontFamily[1];
            if(isDrawing)
            {
                textNode = new Konva.Text({
                    text: _defaultText,
                    x: pos.x,
                    y: pos.y,
                    // fontSize: this.getSize(),
                    fontSize: 100,
                    fontFamily: ff
                });

                _drawLayer.add(textNode);

                let stageBox = _stage.getContainer().getBoundingClientRect();
                let areaPosition = {
                    x: pos.x + stageBox.left,
                    y: pos.y + stageBox.top
                };

                textarea = document.createElement('textarea');
                document.body.appendChild(textarea);

                textarea.value = textNode.text();
                textarea.style.position = 'absolute';
                textarea.style.top = areaPosition.y + 'px';
                textarea.style.left = areaPosition.x + 'px';
                textarea.style.width = textNode.width() + 'px';
                textarea.style.height = textNode.height() + 'px';
                textarea.focus();
                textarea.addEventListener('input', this.updateValue);
                // textarea.style.display = 'none'

            }
            else
            {
                // textNode.text(textarea.value);
                document.body.removeChild(textarea);
                // _drawLayer.add(textNode);
                // _drawLayer.draw();
            }


        });

    }

    updateValue() {

        // textNode.text(textarea.value);
        // textarea.style.position = 'absolute';
        // textarea.style.top = areaPosition.y + 'px';
        // textarea.style.left = areaPosition.x + 'px';
        // textarea.style.width = textNode.width() + 'px';
        // textarea.style.height = textNode.height() + 'px';


        console.log(textarea.value);

        textNode.text(textarea.value);
        _drawLayer.draw();
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

    textInput(x, y) {
        let text = new Konva.Text({
            x: x,
            y: y,
            text: '나눔스퀘어',
            fontSize: 30,
            fontFamily: '나눔고딕',
            // fontFamily: '나눔스퀘어',
            fill: this.getColor()
        });
        _drawLayer.add(text);
        _drawLayer.batchDraw();

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