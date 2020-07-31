import GameConfig from "../data/GameConfig";

const _defaultViewPort = 1;
const _minimumViewPort = 50;
const _maximumViewPort = 200;
let _currentViewPort = 100;
let _canvas, _stage, _drawLayer, _this;
export default class Zoom {

    init(stage, drawLayer) {
        GameConfig.CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = drawLayer;
        _this = this;
        // _stage.add(_drawLayer);
    }


    sizeChange(num) {

        // _canvas.zoomToPoint({ x: _canvas.width/2, y: _canvas.height/2 }, this.getSize() * 0.01);

        // let scaleBy = 1.01;
       /* let scaleBy = num;
        let oldScale = _stage.scaleX();

        // let pointer = _stage.getPointerPosition();

        let mousePointTo = {
            x: (pointer.x - _stage.x()) / oldScale,
            y: (pointer.y - _stage.y()) / oldScale,
        };

        let newScale =
            e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;

        _stage.scale({ x: newScale, y: newScale });

        let newPos = {
            x: pointer.x - mousePointTo.x * newScale,
            y: pointer.y - mousePointTo.y * newScale,
        };
        */

        // _stage.scale({ x: num/100, y: num/100 });
        _stage.scale({ x: this.getSize(), y: this.getSize() });

        // _stage.position(newPos);
        _stage.batchDraw();
    }

    sizeSetMouseWheel() {
        /*canvas.on('mouse:wheel', function(opt) {
         let delta = opt.e.deltaY;
         let zoom = canvas.getZoom();
         zoom *= 0.999 ** delta;
         if (zoom > 20) zoom = 20;
         if (zoom < 0.01) zoom = 0.01;
         canvas.setZoom(zoom);
         opt.e.preventDefault();
         opt.e.stopPropagation();
     })*/
        // _canvas.setZoom(this.getSize() * 0.01);
    }

    destroy() {

    }

    /**
     *
     * @param size
     */
    setSize(point) {
        // console.log(point)
        // if(_currentViewPort >= _minimumViewPort && _currentViewPort <= _maximumViewPort)
        // _currentViewPort = point;
        _currentViewPort = point/100;
    }
    getSize() { return _currentViewPort;}

}