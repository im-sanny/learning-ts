var Utility;
(function (Utility) {
    var useful = /** @class */ (function () {
        function useful() {
        }
        useful.prototype.modules = function (n) {
            return n * 2;
        };
        return useful;
    }());
    Utility.useful = useful;
})(Utility || (Utility = {}));
///<reference path="modules.ts"/>
var use = new Utility.useful();
console.log(use.modules(9));
