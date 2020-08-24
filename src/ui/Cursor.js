let _cursorPointer, _stage, _layer, _size;
export default class Cursor {
    constructor(stage, layer, tool = 'brush', size = '10') {
        _stage = stage;
        _layer = layer;
        _size = size;
        _stage.container().style.cursor =  'crosshair';

    }

    _drawRect(radius,x= 0, y= 0) {
        _cursorPointer = new Konva.Circle({
            x: x,
            y: y,
            radius: parseInt(radius / 1.5),
            stroke: 'white',
            strokeWidth:2,
            cursor: {
                mouseenter: 'pointer',
                onmousemove: 'pointer',
                onmousedown: 'pointer',
            }
        })
        _layer.add(_cursorPointer);
    }

    _move(x, y) {
        if(_cursorPointer)
        {
            _stage.container().style.cursor =  'crosshair';
            _cursorPointer.x(x);
            _cursorPointer.y(y);
            _layer.draw();
        }
    }

    _destroy() {
        if(_cursorPointer) {
            _cursorPointer.destroy();
            _layer.draw();
        }
    }

}
