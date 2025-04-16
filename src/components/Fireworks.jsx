import React, { useEffect, useRef } from "react";
import "./Fireworks.css";

const Fireworks = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    const colors = [
      "#ff0000", "#ffa500", "#ffff00", "#00ff00",
      "#00ffff", "#0000ff", "#ff00ff", "#ffffff",
      "#ff69b4", "#8a2be2", "#00fa9a"
    ];

    function createFirework(x, y) {
      for (let i = 0; i < 100; i++) {
        particles.push({
          x,
          y,
          radius: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          angle: Math.random() * 2 * Math.PI,
          speed: Math.random() * 5 + 2,
          opacity: 1,
        });
      }
    }

    function updateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.opacity -= 0.01;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        if (p.opacity <= 0) {
          particles.splice(i, 1);
        }
      }
      ctx.globalAlpha = 1; // Reset transparansi untuk elemen berikutnya
    }

    function animate() {
      updateParticles();
      requestAnimationFrame(animate);
    }

    animate();

    const interval = setInterval(() => {
      createFirework(
        Math.random() * canvas.width,
        Math.random() * canvas.height / 2
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} className="fireworks-canvas"></canvas>;
};

export default Fireworks;
