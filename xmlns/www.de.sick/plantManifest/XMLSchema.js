var cxml = require("cxml");
var Primitive = require('../../xml-primitives');

cxml.register('http://www.de.sick/plantManifest/XMLSchema', exports, [
	[Primitive, ['Date', 'boolean', 'number', 'string'], []]
], [
	'specimenType'
], [
	[0, 0, [[6, 0]], []],
	[0, 0, [[9, 1], [4, 1], [5, 1], [14, 1]], []],
	[0, 0, [[1, 1], [8, 1], [10, 1], [11, 1], [2, 1], [3, 1], [12, 0], [13, 1], [7, 1], [16, 1], [17, 1]], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 3, [], []],
	[0, 0, [[15, 2]], []],
	[3, 4, [], []],
	[3, 4, [], []],
	[3, 4, [], []]
], [
	['begin_bloom_date', [1], 0],
	['edible', [2], 0],
	['end_bloom_date', [1], 0],
	['latitude', [3], 0],
	['longitude', [3], 0],
	['plant', [6], 0],
	['species', [4], 0],
	['bloom_color', [7], 0],
	['commens', [14], 0],
	['common_name', [8], 0],
	['cultivar', [9], 0],
	['genus', [10], 0],
	['height', [11], 0],
	['planted_by', [15], 0],
	['specimen', [5], 0],
	['specimens', [12], 0],
	['sun_tolerance', [13], 0]
]);