colour.js
=========

Basic class to convert colour values in various forms to a generic object with some handy utility methods.

Currently handles:
- hex strings: #fff, abc123
- RGB and RGBA values: rgba(0, 255, 0, 0.5)

Support for named colours and HSL values planned, as well as utility methods to manipulate colors.

Example:
========

    console.log((new Color("rgb(0, 10%  , 255)")).rgba);
    **{r: 0, g: 25, b: 255, a: 255}**
