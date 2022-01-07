const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colors = ["#ffa400", "#3D6EF7", "#ff6bcb", "#e74c3c", "#20E3B2"];

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

const mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};

function Particle(x, y, radius, color, velocity) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.velocity = velocity;
  this.ttl = 200;
  // time to leave

  this.draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  };

  this.update = () => {
    this.draw();
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.ttl--;
  };
}
// const partcile = new Particle(100, 100, 10, "red");
let particles;
const partcilesCount = 30;
function init() {
  particles = [];
  for (let index = 0; index < partcilesCount; index++) {
    const radians = (Math.PI * 2) / partcilesCount;
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    const velocity = {
      x: Math.cos(radians * index),
      y: Math.sin(radians * index),
    };
    particles.push(new Particle(x, y, 5, randomColor(colors), velocity));
  }
}

function generateCircles() {
  setTimeout(generateCircles, 200);
  for (let index = 0; index < partcilesCount; index++) {
    const radians = (Math.PI * 2) / partcilesCount;
    const x = mouse.x;
    const y = mouse.y;
    const velocity = {
      x: Math.cos(radians * index),
      y: Math.sin(radians * index),
    };
    particles.push(new Particle(x, y, 5, randomColor(colors), velocity));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  particles.forEach((item, index) => {
    if (item.ttl === 0) {
      particles.splice(index, 1);
    }
    item.update();
  });
  // partcile.update();
}
init();
animate();
generateCircles();
// arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean):

// partcile.draw();
// console.log("partcile", partcile);
window.addEventListener("mousemove", function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
