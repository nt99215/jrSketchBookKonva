import GameConfig from "../data/GameConfig";
import LayerManager from "../manager/LayerManager";

let _stage, _drawLayer, _this, _textarea, _textNode;
let _color = GameConfig.DEFAULT_COLOR;
let _size = GameConfig.DEFAULT_LINE_SIZE;
let _opacity = GameConfig.DEFAULT_OPACITY;
const _defaultText = '글을 입력하세요';
// const _defaultText = '글을';
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

export default class TextInput_ING {
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
                    text: _defaultText,
                    x: pos.x,
                    y: pos.y,
                    fontSize: this.getSize(),
                    fontFamily: ff,
                    fill: this.getColor(),
                    width: 200,
                });

                _drawLayer.add(_textNode);
                return

                let tr = new Konva.Transformer({
                    node: _textNode,
                    enabledAnchors: ['middle-left', 'middle-right'],
                    // set minimum width of text
                    boundBoxFunc: function (oldBox, newBox) {
                        newBox.width = Math.max(30, newBox.width);
                        return newBox;
                    },
                });

                _textNode.on('transform', function () {
                    _textNode.setAttrs({
                        width: _textNode.width() * _textNode.scaleX(),
                        scaleX: 1,
                    });
                });

                _textNode.on('dblclick', () => {
                    // hide text node and transformer:
                    _textNode.hide();
                    tr.hide();
                    _drawLayer.draw();

                    // create textarea over canvas with absolute position
                    // first we need to find position for textarea
                    // how to find it?

                    // at first lets find position of text node relative to the stage:
                    let textPosition = _textNode.absolutePosition();

                    // then lets find position of stage container on the page:
                    let stageBox = stage.container().getBoundingClientRect();

                    // so position of textarea will be the sum of positions above:
                    let areaPosition = {
                        x: stageBox.left + textPosition.x,
                        y: stageBox.top + textPosition.y,
                    };

                    // create textarea and style it
                    _textarea = document.createElement('textarea');
                    document.body.appendChild(_textarea);

                    // apply many styles to match text on canvas as close as possible
                    // remember that text rendering on canvas and on the textarea can be different
                    // and sometimes it is hard to make it 100% the same. But we will try...
                    _textarea.value = _textNode.text();
                    _textarea.style.position = 'absolute';
                    _textarea.style.top = areaPosition.y + 'px';
                    _textarea.style.left = areaPosition.x + 'px';
                    _textarea.style.width = _textNode.width() - _textNode.padding() * 2 + 'px';
                    _textarea.style.height = _textNode.height() - _textNode.padding() * 2 + 5 + 'px';
                    _textarea.style.fontSize = _textNode.fontSize() + 'px';
                    _textarea.style.border = 'none';
                    _textarea.style.padding = '0px';
                    _textarea.style.margin = '0px';
                    _textarea.style.overflow = 'hidden';
                    _textarea.style.background = 'none';
                    _textarea.style.outline = 'none';
                    _textarea.style.resize = 'none';
                    _textarea.style.lineHeight = _textNode.lineHeight();
                    _textarea.style.fontFamily = _textNode.fontFamily();
                    _textarea.style.transformOrigin = 'left top';
                    _textarea.style.textAlign = _textNode.align();
                    _textarea.style.color = _textNode.fill();

                    let px = 0;
                    // also we need to slightly move textarea on firefox
                    // because it jumps a bit
                    let isFirefox =
                        navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
                    if (isFirefox) {
                        px += 2 + Math.round(_textNode.fontSize() / 20);
                    }
                    // transform += 'translateY(-' + px + 'px)';

                    _textarea.style.transform = transform;

                    // reset height
                    _textarea.style.height = 'auto';
                    // after browsers resized it we can set actual value
                    _textarea.style.height = _textarea.scrollHeight + 3 + 'px';

                    _textarea.focus();

                    function removeTextarea() {
                        _textarea.parentNode.removeChild(_textarea);
                        window.removeEventListener('click', handleOutsideClick);
                        _textNode.show();
                        tr.show();
                        tr.forceUpdate();
                        _drawLayer.draw();
                    }

                    function setTextareaWidth(newWidth) {
                        if (!newWidth) {
                            // set width for placeholder
                            newWidth = _textNode.placeholder.length * _textNode.fontSize();
                        }
                        // some extra fixes on different browsers
                        let isSafari = /^((?!chrome|android).)*safari/i.test(
                            navigator.userAgent
                        );
                        let isFirefox =
                            navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
                        if (isSafari || isFirefox) {
                            newWidth = Math.ceil(newWidth);
                        }

                        let isEdge =
                            document.documentMode || /Edge/.test(navigator.userAgent);
                        if (isEdge) {
                            newWidth += 1;
                        }
                        _textarea.style.width = newWidth + 'px';
                    }

                    _textarea.addEventListener('keydown', function (e) {
                        // hide on enter
                        // but don't hide on shift + enter
                        if (e.keyCode === 13 && !e.shiftKey) {
                            _textNode.text(_textarea.value);
                            removeTextarea();
                        }
                        // on esc do not set value back to node
                        if (e.keyCode === 27) {
                            removeTextarea();
                        }
                    });

                    _textarea.addEventListener('keydown', function (e) {
                        let scale = _textNode.getAbsoluteScale().x;
                        setTextareaWidth(_textNode.width() * scale);
                        _textarea.style.height = 'auto';
                        _textarea.style.height =
                            _textarea.scrollHeight + _textNode.fontSize() + 'px';
                    });

                    function handleOutsideClick(e) {
                        if (e.target !== _textarea) {
                            _textNode.text(_textarea.value);
                            removeTextarea();
                        }
                    }
                    setTimeout(() => {
                        window.addEventListener('click', handleOutsideClick);
                    });
                });

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

        // console.log(_textarea.value);

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