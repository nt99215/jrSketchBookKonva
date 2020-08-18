import GameConfig from "../data/GameConfig";

export default class LayerManager {
        init(currentLayer) {
        let _currentLayer = currentLayer;
        let img = new Konva.Image({
                image:_currentLayer.canvas._canvas,
                width:GameConfig.STAGE_SIZE.width,
                height:GameConfig.STAGE_SIZE.height
        });
        GameConfig.MAIN_LAYER.add(img);
        GameConfig.MAIN_LAYER.draw();
        // _currentLayer.destroy();
        GameConfig.MAIN_STAGE.remove(_currentLayer);
        // _currentLayer.clear();
        _currentLayer.remove();
        _currentLayer = null;
        // console.log("GameConfig.MAIN_LAYER", GameConfig.MAIN_LAYER);
    }
}