/* global describe, it */
var assert = require("assert"),
	delegate = require("../lib/node/delegate");

var i = 0;
var d1 = delegate.create(function(j) { i += j; }, function(j) { i += j; });
var d2 = delegate.create(function(j) { i += j; }, function(j) { i += j; });
var d3 = delegate.create(d1, d2);

describe("test/multicast.js", function () {
	it("multicast delegates call all delegates", function () {
		assert.equal(0, i);

		d1(1);

		assert.equal(2, i);

		d2(2);

		assert.equal(6, i);

		d3(3);

		assert.equal(18, i);
	});
});