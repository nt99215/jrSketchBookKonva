import GameConfig from "../data/GameConfig";

const _defaultViewPort = 1;
const _minimumViewPort = 50;
const _maximumViewPort = 200;
let _currentViewPort = 100;
let _stage, _drawLayer, _this;
const _zoomScale = [0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2];
let _zoomScope = 1;

export default class Zoom {

    init(stage, drawLayer) {
        GameConfig.CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = drawLayer;
        _this = this;
        this.sizeSetMouse();
    }


    sizeSetButton() {
        // _stage.scale({ x: num/100, y: num/100 });
        _stage.scale({ x: this.getSize(), y: this.getSize() });
        _stage.batchDraw();
    }

    sizeSetMouse() {
        _stage.on('mousedown touchstart', (evt) => {
            evt.evt.preventDefault();
            let oldScale = _zoomScale.indexOf(_stage.scaleX());
            if(oldScale === _zoomScale.length - 1 || oldScale === 0) _zoomScope = -_zoomScope;
            let newScale = _zoomScale[oldScale + _zoomScope];
            _stage.scale({x: newScale, y: newScale});

          /*  let mousePointTo = {
                x: _stage.getPointerPosition().x / oldScale - _stage.x() / oldScale,
                y: _stage.getPointerPosition().y / oldScale - _stage.y() / oldScale
            };
            let newPos = {
                x: -(mousePointTo.x - _stage.getPointerPosition().x / newScale) * newScale,
                y: -(mousePointTo.y - _stage.getPointerPosition().y / newScale) * newScale
            };
            console.log(mousePointTo, newPos, newScale)
            _stage.position(newPos);*/
            _stage.batchDraw();
        });
    }

    destroy() {
        if(_stage) _stage.off('mousedown touchstart');

    }

    /**
     *
     * @param size
     */
    setSize(point) {
      /*  console.log(point)
        if(_currentViewPort >= _minimumViewPort && _currentViewPort <= _maximumViewPort)
        _currentViewPort = point;*/
        _currentViewPort = point/100;
        this.sizeSetButton(this.getSize());
    }
    getSize() { return _currentViewPort;}

}