"use strict";

var sketch_2 = function(p) {

	var awake = false;
	var img, imgLength;
	var d;

	var counterX = 0;
	var counterY = 0;
	var stepOrig = 50;
	var step = stepOrig;
	var col;

	p.setup = function() {
		p.createCanvas(512, 256);
		d = p.pixelDensity();

		img = p.createImage(p.width, p.height);
		imgLength = 4 * (img.width * d) * (img.height * d);

		col = p.randomColor();

		img.loadPixels();
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
		//if (awake) {
			p.background(255);
			img.loadPixels();

			if (p.mouseIsPressed) {
				img.set(p.mouseX, p.mouseY, p.color(255,0,0))
			}
			var x = counterX;
			var y = counterY;
			counterX += step;
			if (counterX > img.width) {
				console.log("End columns.");
				counterX = 0;
				counterY++;
				step++;
			}
			if (counterY > img.height/4) {
				console.log("End rows.");
				counterX = 0;
				counterY = 0;
				step = stepOrig;
				col = p.randomColor();
			}

			for (var i = 0; i < d; i++) {
			  for (var j = 0; j < d; j++) {
			    // loop over
			    var idx = 4 * ((y * d + j) * img.width * d + (x * d + i));
			    img.pixels[idx] = col[0];
			    img.pixels[idx+1] = col[1];
			    img.pixels[idx+2] = col[2];
			    img.pixels[idx+3] = col[3];
			  }
			}

     		img.updatePixels();
			p.image(img, 0, 0);
		//}
	}

	p.mousePressed = function() {
		awake = true;
	}

	p.randomColor = function() {
		var r = p.random(0, 255);
		var g = p.random(0, 255);
		var b = p.random(0, 255);
		var a = 255;
		return [r, g, b, a];
	}

}

var p5_2 = new p5(sketch_2, "canvas2");