import GameConfig from "../data/GameConfig";

let _canvas, _stage;
export default class Move {
    move (stage) {
        GameConfig.IS_DRAWING_MODE = false;
        _stage = stage;
        _stage.draggable(true);

        let scaleBy = 1.3;
        _stage.on('wheel', (evt) => {
            evt.evt.preventDefault();
            let oldScale = _stage.scaleX();

            let mousePointTo = {
                x: _stage.getPointerPosition().x / oldScale - _stage.x() / oldScale,
                y: _stage.getPointerPosition().y / oldScale - _stage.y() / oldScale
            };

            let newScale = evt.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
            _stage.scale({x: newScale, y: newScale});

            let newPos = {
                x: -(mousePointTo.x - _stage.getPointerPosition().x / newScale) * newScale,
                y: -(mousePointTo.y - _stage.getPointerPosition().y / newScale) * newScale
            };
            _stage.position(newPos);
            _stage.batchDraw();
        });
    }

    destroy () {
        if(_stage) _stage.draggable(false);
        if(_stage) _stage.off('wheel');
    }

}