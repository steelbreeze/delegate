"use strict";
exports.__esModule = true;
var delegate_1 = require("../lib/node/delegate");
var a = delegate_1.create(function (param) { console.log(param + " Hello"); }, function (param) { console.log(param + " World "); });
var b = delegate_1.create(function (param) { console.log(param + " Hello world"); });
var c = delegate_1.create(a, b);
a("a");
b("b");
for (var _i = 0, _a = c("c"); _i < _a.length; _i++) {
    var result = _a[_i];
    console.log(result);
}
