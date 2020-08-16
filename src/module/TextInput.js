import GameConfig from "../data/GameConfig";
import LayerManager from "../manager/LayerManager";

let _stage, _drawLayer, _this, _text;
let _color = GameConfig.DEFAULT_COLOR;
let _size = GameConfig.DEFAULT_LINE_SIZE;
let _opacity = GameConfig.DEFAULT_OPACITY;
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
        let textNode;
        let textarea;

        _stage.on('mousedown touchstart', (evt) => {
            isDrawing = !isDrawing;
            let pos = this.getRelativePointerPosition(_stage);
            let ff = _fontFamily[1];
            if(isDrawing)
            {
                textNode = new Konva.Text({
                    text: '글을 입력하세요',
                    x: pos.x,
                    y: pos.y,
                    fontFamily: ff,
                    fontSize: this.getSize()
                });

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
                textarea.style.width = textNode.width();
                textarea.focus();

            }
            else
            {
                textNode.text(textarea.value);
                document.body.removeChild(textarea);
                _drawLayer.add(textNode);
                _drawLayer.draw();
            }


        });

    }

    sample() {
        // let text_overlay = new Konva.Layer();
        // stage.add(text_overlay);

        let textNode = new Konva.Text({
            text: 'Some text here',
            x: 20,
            y: 50,
            fontSize: 20
        });

        _drawLayer.add(textNode);
        _drawLayer.draw();

        textNode.on('dblclick', () => {
            // create textarea over canvas with absolute position

            // first we need to find its position
            let textPosition = textNode.getAbsolutePosition();
            // let stageBox = stage.getContainer().getBoundingClientRect();
            let stageBox = _stage.getContainer().getBoundingClientRect();
            console.log(stageBox);

            let areaPosition = {
                x: textPosition.x + stageBox.left,
                y: textPosition.y + stageBox.top
            };

            // create textarea and style it
            let textarea = document.createElement('textarea');
            document.body.appendChild(textarea);

            textarea.value = textNode.text();
            textarea.style.position = 'absolute';
            textarea.style.top = areaPosition.y + 'px';
            textarea.style.left = areaPosition.x + 'px';
            textarea.style.width = textNode.width();
            console.log(textNode.width(), typeof textNode.width())

            textarea.focus();

            textarea.addEventListener('keydown', function (e) {
                // hide on enter
                console.log(e.keyCode)
                if (e.keyCode === 27) {
                    textNode.text(textarea.value);
                    _drawLayer.draw();
                    document.body.removeChild(textarea);
                }
            });
        })

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