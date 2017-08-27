"use strict";

var sketch_2 = function(p) {

	var awake = false;
	var img, imgLength;
	var d;

	var counterX = 0;
	var counterY = 0;
	var stepOrig = 100;
	var step = stepOrig;
	var col;

	p.setup = function() {
		p.createCanvas(512, 256);

		img = p.createImage(p.width, p.height);
		imgLength = 4 * img.width * img.height;

		col = p.randomColor();

		for (var i = 0; i < img.width; i++) {
		    for (var j = 0; j < img.height; j++) {
		        img.set(i, j, p.color(102, 90, 0, 255*((i % img.width)/img.width)));
		    }
		}

		img.updatePixels();
		p.background(255);
		p.image(img, 0, 0);
	}

	p.draw = function() {
		if (awake) {
			p.background(255);

			if (p.mouseIsPressed) {
				p.drawPlus(p.mouseX, p.mouseY);
			}

			var x = counterX;
			var y = counterY;
			counterX += step;
			if (counterX > img.width) {
				counterX = 0;
				counterY++;
				step++;
			}
			if (counterY > img.height) {
				counterX = 0;
				counterY = 0;
				step = p.random(stepOrig/2, stepOrig*2);
				col = p.randomColor();
			}
			
			p.drawPlus(x, y);

     		img.updatePixels();
			p.image(img, 0, 0);
		}
	}

	p.mousePressed = function() {
		awake = true;
	}

	p.randomColor = function() {
		var r = p.random(0, 255);
		var g = p.random(0, 255);
		var b = p.random(0, 255);
		var a = 255;
		return p.color(r, g, b, a);
	}

	p.drawPlus = function(x, y) {
		img.set(x-2, y, col);
		img.set(x-1, y, col);
		img.set(x, y, col);
		img.set(x+1, y, col);
		img.set(x+2, y, col);
		img.set(x, y-2, col);
		img.set(x, y-1, col);
		img.set(x, y, col);
		img.set(x, y+1, col);
		img.set(x, y+2, col);
	}

}

var p5_2 = new p5(sketch_2, "canvas2");