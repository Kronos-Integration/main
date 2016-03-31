/* jslint node: true, esnext: true */
"use strict";

const path = require('path');
const fs = require('fs');
const asciidoctor = require('asciidoctor.js')();
const opal = asciidoctor.Opal;

var processor = null;
var useExtensions = true;

if (useExtensions) {
	processor = asciidoctor.Asciidoctor(true);
} else {
	processor = asciidoctor.Asciidoctor();
}


const fileName = './docApp/build/kronos.adoc';

let content = fs.readFileSync(fileName, 'utf8');

// var content = "http://asciidoctor.org[*Asciidoctor*] " +
// 	"running on http://opalrb.org[_Opal_] " +
// 	"brings AsciiDoc to Node.js!";
var options = opal.hash({
	"doctype": 'inline',
	"attributes": ['showtitle'],
	"verbose": true,
	"quiet": false,
	"trace": true,
	"safe-mode": 'unsafe'
});

console.log("-------------------------");
console.log(options);
console.log("-------------------------");

var html = processor.$convert(content, options);



console.log(html);
