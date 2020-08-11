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

    _rgbToHex(r,g,b) {

        let rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
            const hex = x.toString(16)
            return hex.length === 1 ? '0' + hex : hex
        }).join('');

        // console.log(rgbToHex)
    }

    _hexToRgb(hex) {
        hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
            ,(m, r, g, b) => '#' + r + r + g + g + b + b)
            .substring(1).match(/.{2}/g)
            .map(x => parseInt(x, 16))

        console.log(hex);
    }

}