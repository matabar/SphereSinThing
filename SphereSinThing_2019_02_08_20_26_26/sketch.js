function setup() {
  createCanvas(400, 400, WEBGL);
}
var w = 25;
var a = 0;

function draw() {
  a += PI / 200
  background(0);
  rotateX(PI / 4);
  rotateZ(PI / 4);
  for (let x = -width / 4; x <= width / 4; x += w) {
    for (let z = -width / 4; z <= width / 4; z += w) {
      let off = dist(x, z, 0, 0, 0, 0) / 25;
      off = map(off, 0, 64, -PI * PI, PI * PI);
      let h = map(sin(a + off), -1, 1, -width / 2, width / 2);
      push();
      translate(x, z, 0);
      box(w - w / 6, w - w / 6, h);
      pop();
    }
  }
}