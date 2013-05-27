/*
 * Basic class to convert colour values in various forms to a generic object
 * with some handy utility methods.
 *
 * wb@collectivecognition.com
 * http://github.com/collectivecognition/colour.js
 *
 */
(function(){
	// Some handy, dandy regular expressions for various colour processing tasks
	var regex = {
		hex: 		/^[#]?(([\da-f]{3}){1,2})$/i,
		rgb: 		/^[\s]*rgb\([\s]*([\d]+[%]?)[\s]*,[\s]*([\d]+[%]?)[\s]*,[\s]*([\d]+[%]?)[\s]*\)$/i,
		rgba: 		/^[\s]*rgba\([\s]*([\d]+[%]?)[\s]*,[\s]*([\d]+[%]?)[\s]*,[\s]*([\d]+[%]?)[\s]*,[\s]*([\d]*[.]?[\d]+)[\s]*\)$/i,
		base10: 	/^[\d]+$/,
		float: 		/^[\d]*[.]?[\d]+$/,
		percent: 	/^[\d]+%$/,
		hexDigit: 	/[\da-f]{1,2}/i
	};
	// Converts single and double hex digits, percentages and integers to integers in the range 0-255
	var parseValue = function(val){
		return Math.min(regex.base10.test(val) ? parseInt(val) : regex.percent.test(val) ? parseInt(val) / 100 * 255 : regex.float.test(val) ? parseFloat(val) : regex.hexDigit.test(val) ? parseInt(val.length == 1 ? val + val : val, 16) : NaN, 255);
	};
	// Process an array of RGBA values and return a nice object full of integers
	var parseRGBA = function(rgba){
		return {
			r: Math.floor(parseValue(rgba[0])),
			g: Math.floor(parseValue(rgba[1])),
			b: Math.floor(parseValue(rgba[2])),
			a: rgba.length == 3 ? 255 : Math.min(parseValue(rgba[3]), 1.0) // Handle RGB values as well by defaulting to A=255
		}
	};
	// Contructor
	Colour = function(colour){
		this.rgba = undefined;
		if(regex.hex.test(colour)){
			var hex = regex.hex.exec(colour)[1];
			this.rgba = parseRGBA(hex.length == 3 ? [hex[0], hex[1], hex[2]] : [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)]);
		}else if(regex.rgb.test(colour)){
			this.rgba = parseRGBA(regex.rgb.exec(colour).slice(1, 4));
		}else if(regex.rgba.test(colour)){
			this.rgba = parseRGBA(regex.rgba.exec(colour).slice(1, 5));
		}
	}
})();
// Tests
console.log((new Colour("#fff")).rgba);
console.log((new Colour("aBC123")).rgba);
console.log((new Colour("rgb(0, 10%  , 255)")).rgba);
console.log((new Colour(" rgba(1, 400%, 512, .5)")).rgba);