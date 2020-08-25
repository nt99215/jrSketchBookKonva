let _stage;
export default class ConvertJson {

    convertJson(){
         let width = window.innerWidth;
         let height = window.innerHeight;

         let stage = new Konva.Stage({
             container: 'container',
             width: width,
             height: height,
         });
         let layer = new Konva.Layer();

         let hexagon = new Konva.RegularPolygon({
             x: width / 2,
             y: height / 2,
             sides: 6,
             radius: 70,
             fill: 'red',
             stroke: 'black',
             strokeWidth: 4,
         });

         layer.add(hexagon);
         stage.add(layer);
        let json = _stage.toJSON();

    }

    downloadURI(uri, name) {
        let link = document.createElement('a');
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        // delete link;
    }
}