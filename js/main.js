"use strict";

var img;
//var loc = x + (y * img.width);

function setup() {
	createCanvas(640, 480);

	img = createImage(width, height);
	img.loadPixels();
	for (var i = 0; i < img.width; i++) {
	    for (var j = 0; j < img.height; j++) {
	        img.set(i, j, color(0, 90, 102, 255*((i % img.width)/img.width)));
	    }
	}
	img.updatePixels();
}

function draw() {
	background(255);
	image(img, 0, 0);
}