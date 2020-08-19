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

    stageUpdate() {
        /* const scale = 1 / 4;
         const url = _stage.toDataURL({ pixelRatio: scale });
         document.getElementById('preview').src = url;*/

        // let dataUrl = _drawLayer.toDataURL();
        // this.downloadURI(dataUrl, 'stage.png');
        // let json = _stage.toJSON();
        // console.log(json);

    }
}