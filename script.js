const wheel = document.getElementById("wheel");
const ctx = wheel.getContext("2d");
const spinBtn = document.getElementById("spin");
const result = document.getElementById("result");
let isSpinning = false;
let angle = 0;

const segments = ["₹100", "₹200", "₹300", "₹400", "₹500"];
const colors = ["#fbc02d", "#4caf50", "#fbc02d", "#4caf50", "#fbc02d"];

function drawWheel() {
  const arc = Math.PI * 2 / segments.length;
  for (let i = 0; i < segments.length; i++) {
    ctx.beginPath();
    ctx.fillStyle = colors[i];
    ctx.moveTo(150, 150);
    ctx.arc(150, 150, 150, arc * i, arc * (i + 1));
    ctx.lineTo(150, 150);
    ctx.fill();
  }
}
drawWheel();

spinBtn.addEventListener("click", () => {
  if (isSpinning) return;
  isSpinning = true;
  const spinAngle = Math.floor(3000 + Math.random() * 3000);
  let current = 0;

  const spin = setInterval(() => {
    angle += 10;
    wheel.style.transform = `rotate(${angle}deg)`;
    current += 10;
    if (current >= spinAngle) {
      clearInterval(spin);
      result.style.display = "block";
      isSpinning = false;
    }
  }, 10);
});

document.getElementById("activationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for activating your ₹500 SIP! We’ll contact you shortly.");
  this.reset();
});