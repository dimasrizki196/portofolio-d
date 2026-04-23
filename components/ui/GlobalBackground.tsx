"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function GlobalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  const particles = useRef<any[]>([]);
  const trail = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNetwork();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.25;
        this.vy = (Math.random() - 0.5) * 0.25;
        this.size = Math.random() * 1.8 + 0.8;
      }
      update(w: number, h: number) {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }
    }

    const initNetwork = () => {
      particles.current = [];
      const count = Math.floor((canvas.width * canvas.height) / 18000);
      for (let i = 0; i < count; i++) {
        particles.current.push(new Particle(canvas.width, canvas.height));
      }
    };

    // --- PERBAIKAN: Listener Global di Window ---
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      const y = "touches" in e ? e.touches[0].clientY : e.clientY;

      // Tambahkan beberapa partikel sekaligus untuk efek trail yang lebih tebal
      trail.current.push({ x, y, life: 1.0 });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = resolvedTheme === "dark";
      const color = isDark ? "59, 130, 246" : "37, 99, 235";

      // 1. DRAW CURSOR TRAIL (Dibuat lebih tebal dan awet)
      trail.current = trail.current.filter((p) => p.life > 0);
      trail.current.forEach((p) => {
        p.life -= 0.04; // Lebih lambat memudar (ekor lebih panjang)
        // Opasitas lebih tinggi (0.5) agar jelas kelihatan
        ctx.fillStyle = `rgba(${color}, ${p.life * (isDark ? 0.5 : 0.4)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2); // Ukuran lebih besar (2.5)
        ctx.fill();
      });

      // 2. DRAW NETWORK
      const maxDist = 130;
      particles.current.forEach((p1, i) => {
        p1.update(canvas.width, canvas.height);
        ctx.fillStyle = isDark
          ? "rgba(59, 130, 246, 0.5)"
          : "rgba(37, 99, 235, 0.4)";
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.current.length; j++) {
          const p2 = particles.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          if (Math.abs(dx) < maxDist && Math.abs(dy) < maxDist) {
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < maxDist) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(${color}, ${(1 - dist / maxDist) * 0.25})`;
              ctx.lineWidth = 0.8;
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    // Kita tempel di window agar tidak terhalang Navbar/Hero
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        background: "transparent",
        zIndex: 0,
      }}
    />
  );
}
