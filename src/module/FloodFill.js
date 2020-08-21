import GameConfig from "../data/GameConfig";
import LayerManager from "../manager/LayerManager";
import Utility from "../util/utility";

let _stage, _drawLayer, _this;
let _color = GameConfig.DEFAULT_COLOR;
let _size = GameConfig.DEFAULT_LINE_SIZE;
let _opacity = GameConfig.DEFAULT_OPACITY;
let g_imgData, g_canvasWidth, g_targetColor;

export default class FloodFillBack {
    init(stage) {

        GameConfig.CURRENT_TOOL = this;
        _stage = stage;
        _drawLayer = GameConfig.MAIN_LAYER;
        _this = this;
        this.useTool();

    }

    useTool () {
        let isDrawing = false;
        _stage.on('mousedown touchstart', (evt) => {
            isDrawing = true;
            let pos = this.getRelativePointerPosition(_stage);
            let color = Utility.hexToRgb(this.getColor());
            this.paintAt(_drawLayer, color, pos.x, pos.y);

        });
    }

    paintAt(ctx, targetColor, startX, startY) {

        g_targetColor = targetColor;
        g_canvasWidth = ctx.canvas.width;
        g_imgData = ctx.canvas.context._context.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);

        let pixelPos = (startY * g_canvasWidth + startX) * 4,
            r = g_imgData.data[pixelPos],
            g = g_imgData.data[pixelPos + 1],
            b = g_imgData.data[pixelPos + 2],
            a = g_imgData.data[pixelPos + 3];

        if (r === g_targetColor.r && g === g_targetColor.g && b === g_targetColor.b && a === g_targetColor.a) {
            // Return because trying to fill with the same color
            return null;
        }

        this.floodFill(ctx, startX, startY, r, g, b, a);

        // ctx.putImageData(g_imgData, 0, 0);
        _drawLayer.canvas.context.putImageData(g_imgData,0,0);
        g_imgData = null;
    }

    floodFill(ctx, startX, startY, startR, startG, startB, startA) {
        let canvasWidth = g_canvasWidth,
            newPos,
            x,
            y,
            pixelPos,
            reachLeft,
            reachRight,
            drawingBoundLeft = 0,
            drawingBoundTop = 0,
            drawingBoundRight = ctx.canvas.width,
            drawingBoundBottom = ctx.canvas.height,
            pixelStack = [[startX, startY]];

        while (pixelStack.length) {

            newPos = pixelStack.pop();
            x = newPos[0];
            y = newPos[1];

            // Get current pixel position
            pixelPos = (y * canvasWidth + x) * 4;

            // Go up as long as the color matches and are inside the canvas
            while (y > drawingBoundTop && this.matchStartColor(pixelPos, startR, startG, startB, startA)) {
                y -= 1;
                pixelPos -= canvasWidth * 4;
            }

            pixelPos += canvasWidth * 4;
            y += 1;
            reachLeft = false;
            reachRight = false;

            // Go down as long as the color matches and in inside the canvas
            while (y < drawingBoundBottom && this.matchStartColor(pixelPos, startR, startG, startB, startA)) {
                y += 1;

                this.colorPixel(pixelPos);

                if (x > drawingBoundLeft) {
                    if (this.matchStartColor(pixelPos - 4, startR, startG, startB, startA)) {
                        if (!reachLeft) {
                            // Add pixel to stack
                            pixelStack.push([x - 1, y]);
                            reachLeft = true;
                        }
                    } else if (reachLeft) {
                        reachLeft = false;
                    }
                }

                if (x < drawingBoundRight) {
                    if (this.matchStartColor(pixelPos + 4, startR, startG, startB, startA)) {
                        if (!reachRight) {
                            // Add pixel to stack
                            pixelStack.push([x + 1, y]);
                            reachRight = true;
                        }
                    } else if (reachRight) {
                        reachRight = false;
                    }
                }

                pixelPos += canvasWidth * 4;
            }
        }


    }

    matchStartColor(pixelPos, startR, startG, startB, startA) {
        const arr = g_imgData.data;
        return (
            startR === arr[pixelPos] &&
            startG === arr[pixelPos + 1] &&
            startB === arr[pixelPos + 2] &&
            startA === arr[pixelPos + 3]
        );
    }

    colorPixel(pixelPos) {
        const arr = g_imgData.data;
        arr[pixelPos] = g_targetColor.r;
        arr[pixelPos + 1] = g_targetColor.g;
        arr[pixelPos + 2] = g_targetColor.b;
        arr[pixelPos + 3] = 255;
    }


    getRelativePointerPosition(node) {
        let transform = node.getAbsoluteTransform().copy();
        transform.invert();
        let pos = node.getStage().getPointerPosition();
        return transform.point(pos);
    }

    destroy () {
        LayerManager.prototype.init(_drawLayer);
        if(_stage)_stage.off('mousedown touchstart');
    }

    sampleDrawImage(ctx) {
        ctx.canvas.context.beginPath();
        // ctx.canvas.context.fillStyle = "#fff";
        // ctx.canvas.context.fillRect(0,0,ctx.canvas.width, ctx.canvas.height);
        ctx.canvas.context.fillStyle = "#18843c";
        ctx.canvas.context.fillRect(25,25,350,250);
        ctx.canvas.context.fillStyle = "#fff";
        ctx.canvas.context.fillRect(100,100,50,50);
        ctx.canvas.context.fillRect(175,150,15,75);
        ctx.canvas.context.fillRect(300,200,100,75);
        ctx.canvas.context.fillRect(220,75,100,50);
        ctx.canvas.context.closePath();
        ctx.canvas.context.fill();

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

    /**
     *
     * @param opacity
     */
    setOpacity(opacity) { _opacity = opacity;}
    getOpacity() { return _opacity;}
}