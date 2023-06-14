function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	var size =2000
	var increment = 100
	frameRate(5)
	noStroke()
	for (let j=0; j<=size; j=j+increment) {
			for (let i=0; i<=size; i=i+2*increment) {
				fill(random(["rgb(255,255,255)","rgb(201,223,239)","rgb(140,194,233)","rgb(204,210,214)","rgb(100,105,110)"]))
				
				triangle(i,j,i+increment,j+increment/2, i, j+increment)
				
				fill(random(["rgb(255,255,255)","rgb(201,223,239)","rgb(140,194,233)","rgb(204,210,214)","rgb(100,105,110)"]))
				triangle(i,j,i+increment, j-increment/2,i+increment,j+increment/2)
				
				fill(random(["rgb(255,255,255)","rgb(201,223,239)","rgb(140,194,233)","rgb(204,210,214)","rgb(100,105,110)"]))
				triangle(i+increment, j-increment/2,i+2*increment,j,i+increment,j+increment/2)
				
				fill(random(["rgb(255,255,255)","rgb(201,223,239)","rgb(140,194,233)","rgb(204,210,214)","rgb(100,105,110)"]))
				triangle(i+increment, j-increment/2,i+2*increment,j-increment,i+2*increment,j)

			}
	}
	

	
}