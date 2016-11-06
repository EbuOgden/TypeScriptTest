"use strict";
function sayHi(str) {
    console.log(str);
}
exports.sayHi = sayHi; /* easy way */
var privateFunctions;
(function (privateFunctions) {
    var func = (function () {
        function func() {
        }
        func.prototype.sayHiFromModule = function (num) {
            return num * num;
        };
        return func;
    }());
    privateFunctions.func = func;
})(privateFunctions || (privateFunctions = {}));
