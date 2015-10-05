/* jslint node: true, esnext: true */
"use strict";

const mergeTrees = require('broccoli-merge-trees');
const funnel = require('broccoli-funnel');
const path = require("path");

const node_modules = path.join(__dirname, 'node_modules');


var docFiles = funnel(node_modules, {
	include: ['kronos-*/doc/*.adoc', 'stream-*/doc/*.adoc'],
	destDir: 'build'
});

//console.log(docFiles);

module.exports = mergeTrees([docFiles]);
