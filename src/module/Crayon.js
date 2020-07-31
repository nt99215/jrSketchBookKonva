import GameConfig from "../data/GameConfig";

let _canvas;
let _color = '#000000';
let _size = 20;
export default class Crayon {

    draw(canvas) {
        _canvas = canvas;
        _canvas.isDrawingMode = true;
        _canvas.freeDrawingBrush = new fabric.SprayBrush(_canvas);
        _canvas.freeDrawingBrush.color = this.getColor();
        _canvas.freeDrawingBrush.width = this.getSize();
        _canvas.freeDrawingBrush.density = 12;
        _canvas.freeDrawingBrush.dotWidth = 2;
        _canvas.freeDrawingBrush.dotWidthVariance = 2;
        _canvas.freeDrawingBrush.randomOpacity = false;
        _canvas.freeDrawingBrush.optimizeOverlapping = true;

        GameConfig.IS_LINE_DRAWING = false;
        GameConfig.CURRENT_TOOL = this;
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


    colorChange() {
        _canvas.freeDrawingBrush.color = this.getColor();
    }
    sizeChange() {
        _canvas.freeDrawingBrush.width = this.getSize();
    }
}