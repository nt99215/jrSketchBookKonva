import GameConfig from "../data/GameConfig";
import LayerManager from "../manager/LayerManager";


let _stage, _drawLayer, _this, _patternImage, _patternGroup, _fillRect;
let _color = GameConfig.DEFAULT_COLOR;
let _size = GameConfig.DEFAULT_LINE_SIZE;
let _opacity = GameConfig.DEFAULT_OPACITY;
let _lineCap = 'round';
let _patternType = 'A';
const _patterUrl = 'asset/image/screenTone/screenToneType';

export default class Layer {

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
        for (let i = 0; i < 10; i++) {
            const shape = new Konva.Circle({
                x: Math.random() * _stage.width(),
                y: Math.random() * _stage.height(),
                radius: Math.random() * 30 + 5,
                fill: Konva.Util.getRandomColor(),
                draggable: true,
                // each shape MUSH have uniq name
                // so we can easily update the preview clone by name
                name: 'shape-' + i,
            });
            _drawLayer.add(shape);
        }

        _drawLayer.draw();

        function updatePreview() {
            const scale = 1 / 4;
            // use pixelRatio to generate smaller preview
            const url = _stage.toDataURL({ pixelRatio: scale });
            document.getElementById('preview').src = url;
        }

        // update preview only on dragend for performance
        _stage.on('dragend', updatePreview);

        // add new shapes on double click or double tap
        _stage.on('dblclick dbltap', () => {
            const shape = new Konva.Circle({
                x: _stage.getPointerPosition().x,
                y: _stage.getPointerPosition().y,
                radius: Math.random() * 30 + 5,
                fill: Konva.Util.getRandomColor(),
                draggable: true,
                // each shape MUSH have uniq name
                // so we can easily update the preview clone by name
                name: 'shape-' + _drawLayer.children.length,
            });
            _drawLayer.add(shape);
            _drawLayer.draw();

            updatePreview();
        });

        // show initial preview
        updatePreview();

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