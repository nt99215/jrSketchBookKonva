let _tool = null;
let _isDrawingMode = false;
let _isLineDrawing = false;
let _selectedColor = '';
let _selectedSize = 0;
let _drawingHistory = [];
const _historyLimit = 30;

const _defaultTension = 0.3;
const _defaultBrushSize = 10;
const _defaultLineSize = 5;
const _defaultEraserSize = 15;
const _defaultColor = '#000000';
const _defaultOpacity = 100;

let _mainStage = null;
let _mainDrawLayer = null;
let _currentLayer = null;

export default class GameConfig {

    static get MAIN_STAGE() { return _mainStage};
    static set MAIN_STAGE(obj) { _mainStage = obj};

    static get MAIN_LAYER() { return _mainDrawLayer};
    static set MAIN_LAYER(obj) { _mainDrawLayer = obj};

    static get CURRENT_LAYER() { return _currentLayer};
    static set CURRENT_LAYER(obj) { _currentLayer = obj};

    static get CURRENT_TOOL() { return _tool};
    static set CURRENT_TOOL(obj) { _tool = obj};

    static get DEFAULT_TENSION() { return _defaultTension};

    static get IS_DRAWING_MODE() { return _isDrawingMode};
    static set IS_DRAWING_MODE(bool) { _isDrawingMode = bool};

    static get IS_LINE_DRAWING() { return _isLineDrawing};
    static set IS_LINE_DRAWING(bool) { _isLineDrawing = bool};

    static get SELECTED_COLOR() { return _selectedColor};
    static set SELECTED_COLOR(str) { _selectedColor = str};

    static get SELECTED_SIZE() { return _selectedSize};
    static set SELECTED_SIZE(num) { _selectedSize = num}

    static get SELECTED_SIZE() { return _drawingHistory};
    static set SELECTED_SIZE(obj) { _drawingHistory.push(obj)};

    static get DEFAULT_BRUSH_SIZE() { return _defaultBrushSize};
    static get DEFAULT_LINE_SIZE() { return _defaultLineSize};
    static get DEFAULT_ERASER_SIZE() { return _defaultEraserSize};
    static get DEFAULT_COLOR() { return _defaultColor};
    static get DEFAULT_OPACITY() { return _defaultOpacity};

}