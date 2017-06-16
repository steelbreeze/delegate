"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var delegate_1 = require("../delegate");
var a = delegate_1.create(function (param) { return console.log(param + " Hello"); }, function (param) { return console.log(param + " World "); });
var b = delegate_1.create(function (param) { return console.log(param + " Hello world"); });
var c = delegate_1.create(a, b);
a("1");
c("3");
