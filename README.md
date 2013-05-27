Colour.js
=========

Basic class to convert colour values in various forms to a generic object with some handy utility methods.

Currently handles:
- Hex strings: #fff, abc123
- RGB and RGBA values: rgba(0, 255, 0, 0.5)
- HSL and HSLA values: hsla(30, 10%, 50%, 1.0)

Instantiation:
==============
	
The **Colour** constructor creates a colour object from the specified string (hex, RGB, RGBA, HSL or HSLA):

    var colour = new Colour("#fff");
    
You can modify the HSL, RGB and alpha values after instantiation using a chainable API:

    colour.r(255).l(0.5);
    
Or retrieve values by using the same functions with no parameter:

    console.log("Hue: " + colour.h());
    
Colours can be converted to usable strings using the **stringify** method, where **hex** can be any of **hex, rgb, rgba, hsl and hsla**:

    colour.stringify("hex");
        
Tests:
======

Run tests with:

    node tests
