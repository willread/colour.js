var assert = function(test, description){ console.log("[" + (test ? "PASS" : "FAIL") + "] " + description); };

var util = require("util"); // FIXME
require("./colour");

var colour;

colour = new Colour("#ff00aa");
assert(colour.stringify("hex") === "ff00aa", "Hex parsing");

colour = new Colour("rgb(255, 128, 0)");
assert(colour.stringify("rgb") == "rgb(255, 128, 0)", "RGB parsing");

colour = new Colour("rgba(255, 128, 0, 1.5)");
assert(colour.stringify("rgba") == "rgba(255, 128, 0, 1)", "RGBA parsing");

colour = new Colour("hsl(360, 25%, 50%)");
assert(colour.stringify("hsl") === "hsl(360, 25%, 50%)", "HSL parsing");

colour = new Colour("hsla(360, 25%, 50%, .5)");
assert(colour.stringify("hsla") === "hsla(360, 25%, 50%, 0.5)", "HSLA parsing");

colour = new Colour();
assert(colour.r(255).g(128).b(64).a(.5).stringify("rgba") == "rgba(255, 128, 64, 0.5)", "Modifying RGB values");

colour = new Colour("rgb(256, 128, 0)");
assert(colour.stringify("hsla") === "hsla(30, 100%, 100%, 1)", "Converting from RGB to HSLA");

colour = new Colour("hsl(30, 100%, 100%)");
assert(colour.stringify("rgba") === "rgba(256, 128, 0, 1)", "Converting from HSL to RGBA");