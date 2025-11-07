import React, { useEffect, useRef } from 'react';

// Lightweight Matrix/code rain canvas overlay
const MatrixCode = ({ opacity = 0.15, speed = 40, fontSize = 14 }) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = canvas.clientWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.clientHeight * window.devicePixelRatio);
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const characters = '01<>[]{}/*+-=!%$#@&ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    let cols = Math.floor(canvas.clientWidth / fontSize);
    let drops = new Array(cols).fill(1);

    ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;

    // Resize handler
    const handleResize = () => {
      width = canvas.width = canvas.clientWidth * window.devicePixelRatio;
      height = canvas.height = canvas.clientHeight * window.devicePixelRatio;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      cols = Math.floor(canvas.clientWidth / fontSize);
      drops = new Array(cols).fill(1);
      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
    };

    let last = 0;
    const interval = 1000 / speed; // frames per second like control

    const draw = (ts) => {
      if (!last) last = ts;
      const delta = ts - last;
      if (delta < interval) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }
      last = ts;

      ctx.fillStyle = 'rgba(9, 12, 18, 0.10)';
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      // glowing green matrix color
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.clientHeight);
      gradient.addColorStop(0, 'rgba(34,197,94,0.8)');
      gradient.addColorStop(1, 'rgba(16,185,129,0.5)');
      ctx.fillStyle = gradient;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(text, x, y);

        if (y > canvas.clientHeight && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(canvas);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, [fontSize, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 block opacity-100"
      style={{ opacity }}
      aria-hidden
    />
  );
};

export default MatrixCode;
