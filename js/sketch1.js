"use strict";

var sketch_1 = function(p) {

	var awake = false;
	var img;

	p.setup = function() {
		p.createCanvas(512, 256);

		img = p.createImage(p.width, p.height);
		img.loadPixels();
		for (var i = 0; i < img.width; i++) {
		    for (var j = 0; j < img.height; j++) {
		        img.set(i, j, p.color(0, 90, 102, 255*((i % img.width)/img.width)));
		    }
		}
		img.updatePixels();

		p.background(255);
		p.image(img, 0, 0);
	}

	p.draw = function() {
		if (awake) {
			p.background(255);
			img.loadPixels();

			if (p.mouseIsPressed) {
				img.set(p.mouseX, p.mouseY, p.color(0));
				img.set(p.mouseX+2, p.mouseY, p.color(0));
				img.set(p.mouseX-2, p.mouseY, p.color(0));
				img.set(p.mouseX+4, p.mouseY, p.color(0));
				img.set(p.mouseX-4, p.mouseY, p.color(0));
				img.set(p.mouseX+8, p.mouseY, p.color(255));
				img.set(p.mouseX-8, p.mouseY, p.color(255));
				img.set(p.pmouseX+1, p.pmouseY+1, p.color(0));
				img.set(p.pmouseX-1, p.pmouseY-1, p.color(0));
				img.set(p.pmouseX+3, p.pmouseY+1, p.color(0));
				img.set(p.pmouseX-3, p.pmouseY-1, p.color(0));
				img.set(p.pmouseX+7, p.pmouseY+1, p.color(255));
				img.set(p.pmouseX-7, p.pmouseY-1, p.color(255));
			}

			for (var i=0; i<10000; i++) {
				var rx = p.random(0,img.width-1);
				var ry = p.random(0,img.height-1);
				img.set(rx, ry, p.color(0, 90, 102, 255*((rx % img.width)/img.width)));
			}

			img.updatePixels();
			p.image(img, 0, 0);
		}
	}

	p.mousePressed = function() {
		awake = true;
	}

}

var p5_1 = new p5(sketch_1, "canvas1");