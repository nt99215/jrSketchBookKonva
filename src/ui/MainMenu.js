import GameConfig from "../data/GameConfig";

const maxMenu = 10;
const menuText = [
    {kor:'브러시', eng:'brush'},
    {kor:'에어브러시', eng:'airBrush'},
    {kor:'크레용', eng:'crayon'},
    {kor:'색칠하기', eng:'fill'},
    {kor:'선긋기', eng:'line'},
    {kor:'스크린톤', eng:'screenTone'},
    {kor:'지우개', eng:'eraser'},
    {kor:'텍스트', eng:'text'},
    {kor:'확대/축소', eng:'zoom'},
    {kor:'이동', eng:'move'},
]
export default class MainMenu {
    constructor(drawCanvas, menuCanvas) {
        this.drawCanvas = drawCanvas;
        this.menuCanvas = menuCanvas;
        console.log(drawCanvas)
        console.log(menuCanvas)
        this._init();
    }

    _init() {
        let circle = new fabric.Circle({
            radius: 50,
            fill: '#3e3c39',
            originX: 'center',
            originY: 'center',
            selectable: false,
            left: 400,
            top: 300
        });

        for(let i = 0; i<maxMenu; i++)
        {
            let rect = new fabric.Rect({
                width: 80, height: 30,
                left: 20, top: 20 + (i * 37),
                fill: '#8d8782',
                selectable: false,
            });

            let str = menuText[i].eng;
            let text = new fabric.Text(str, {
                fontSize: 15,
                originX: 'center',
                originY: 'center',
                left: 60, top: 34 + (i * 37),
                selectable: false,
            });

           /* let group = new fabric.Group([ rect, text ], {
                // left: 20, top: 120 + (i * 50),
            });*/

            this.menuCanvas.add(rect);
            this.menuCanvas.add(text);
            text.on('mousedown',  this.select);
            // text.on('mouseover',  this.selectOver);
        }

        /*this.canvas.on('mouse:wheel', function(opt) {
            let delta = opt.e.deltaY;
            let zoom = this.canvas.getZoom();
            zoom *= 0.999 ** delta;
            if (zoom > 20) zoom = 20;
            if (zoom < 0.01) zoom = 0.01;
            this.canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
            opt.e.preventDefault();
            opt.e.stopPropagation();
        });*/

    }

    selectOver(e) {
        console.log("S : ", e.target.text);
        GameConfig.IS_DRAWING_MODE = false;
    }


    select(e) {
        console.log("S : ", e.target.text);
        // console.log(e.currentTarget.num)
        // GameConfig.IS_DRAWING_MODE = true;
        // this.drawCanvas.isDrawingMode = !this.drawCanvas.isDrawingMode
        console.log(this.drawCanvas)
    //
    }



    disable() {

    }

    enable() {

    }

}