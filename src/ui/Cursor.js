import GameConfig from "../data/GameConfig";

let _cursorPointer, _stage, _layer, _size;
const _strokeWidth = 2;
export default class Cursor {
    constructor(stage, layer, tool = 'brush', size = '10') {
        _stage = stage;
        _layer = layer;
        _size = size;
        _stage.container().style.cursor =  'crosshair';
        // stage.container().style.cursor = 'url(images/my-cursor.png), auto';

    }

    _drawRect(radius,x= 0, y= 0) {
        _cursorPointer = new Konva.Circle({
            x: x,
            y: y,
            radius: parseInt(radius / 1.5),
            stroke: 'white',
            strokeWidth: _strokeWidth,
        })
        _layer.add(_cursorPointer);
    }

    _move(x, y) {
        if(_cursorPointer)
        {
            if(x <= 0 || x >= GameConfig.STAGE_SIZE.width || y <= 0 || y >= GameConfig.STAGE_SIZE.height)
            {
                console.log(x, y)
                _cursorPointer.visible(false);
            }
            else
            {
                _stage.container().style.cursor =  'crosshair';
                _cursorPointer.x(x);
                _cursorPointer.y(y);
                _cursorPointer.visible(true);
                _layer.draw();
            }

        }

    }

    _destroy() {
        if(_cursorPointer) {
            _cursorPointer.destroy();
            _layer.draw();
        }
    }

}
