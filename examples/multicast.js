"use strict";
exports.__esModule = true;
var delegate_1 = require("../lib/delegate");
var a = delegate_1.create(function (param) { return console.log(param + " Hello"); }, function (param) { return console.log(param + " World "); });
var b = delegate_1.create(function (param) { return console.log(param + " Hello world"); });
var c = delegate_1.create(a, b);
a("a");
b("b");
c("c");
