import React, { useEffect, useRef } from "react";

const Snowfall: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const snowflakes: {
      x: number;
      y: number;
      r: number;
      d: number;
      speed: number;
      sway: number;
    }[] = [];
    const maxFlakes = 200; // Increased count for denser snow

    for (let i = 0; i < maxFlakes; i++) {
      snowflakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 3 + 1, // radius
        d: Math.random() * maxFlakes, // density
        speed: Math.random() * 1 + 0.5,
        sway: Math.random() * 0.05, // sway factor
      });
    }

    let animationFrameId: number;
    let angle = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Use a gradient or soft white for snow
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
      ctx.beginPath();

      for (let i = 0; i < maxFlakes; i++) {
        const p = snowflakes[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      }

      ctx.fill();
      update();
      animationFrameId = requestAnimationFrame(draw);
    };

    const update = () => {
      angle += 0.01;
      for (let i = 0; i < maxFlakes; i++) {
        const p = snowflakes[i];

        // Add swaying motion (sine wave)
        p.x += Math.sin(angle + p.d) + p.sway;
        p.y += Math.cos(angle + p.d) + 1 + p.speed;

        // Reset flakes when they exit screen
        if (p.x > width + 5 || p.x < -5 || p.y > height) {
          if (i % 3 > 0) {
            // 66.67% of the flakes
            snowflakes[i] = {
              x: Math.random() * width,
              y: -10,
              r: p.r,
              d: p.d,
              speed: p.speed,
              sway: p.sway,
            };
          } else {
            // Enter from sides occasionally
            if (Math.sin(angle) > 0) {
              snowflakes[i] = {
                x: -5,
                y: Math.random() * height,
                r: p.r,
                d: p.d,
                speed: p.speed,
                sway: p.sway,
              };
            } else {
              snowflakes[i] = {
                x: width + 5,
                y: Math.random() * height,
                r: p.r,
                d: p.d,
                speed: p.speed,
                sway: p.sway,
              };
            }
          }
        }
      }
    };

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default Snowfall;
