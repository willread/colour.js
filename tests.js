var assert = function(test, description){console.log("[" + (test ? "PASS" : "FAIL") + "] " + description);}

require("./colour");

assert((new Colour("#fff")).rgba.r === 255, "Shortened hex colour with preceding hash");
assert((new Colour("aBC123")).rgba.r === 171, "Mixed-case hex colour with no hash");
assert((new Colour("rgb(0, 10%  , 255)")).rgba.g === 25, "RGB with percent value and inline whitespace");