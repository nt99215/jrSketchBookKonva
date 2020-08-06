export default class Utility {

    static newCtx(width, height) {
        let canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        return canvas.getContext("2d");
    }

    static hexToRgb(hexType) {
        let hex = hexType.replace( "#", "" );
        let value = hex.match( /[a-f\d]/gi );

        // 헥사값이 세자리일 경우, 여섯자리로.
        if ( value.length == 3 ) hex = value[0] + value[0] + value[1] + value[1] + value[2] + value[2];

        value = hex.match( /[a-f\d]{2}/gi );
        let r = parseInt( value[0], 16 );
        let g = parseInt( value[1], 16 );
        let b = parseInt( value[2], 16 );

        return {
            r, g, b, a: 255
        };
    }
}