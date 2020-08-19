import GameConfig from "../data/GameConfig";

let _stage;
export default class Move {

    init (stage) {
        GameConfig.CURRENT_TOOL = this;
        GameConfig.IS_DRAWING_MODE = false;
        _stage = stage;
        _stage.draggable(true);
    }

    destroy () {
        if(_stage)_stage.draggable(false);

    }

}