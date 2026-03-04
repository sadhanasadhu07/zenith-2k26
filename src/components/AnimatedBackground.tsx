import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 150;

    class Particle {
      x: number;
      y: number;
      z: number;
      px: number;
      py: number;
      vx: number;
      vy: number;
      color: string;

      constructor() {
        this.reset();
        // Start at random positions
        this.z = Math.random() * canvas!.width;
      }

      reset() {
        this.x = (Math.random() - 0.5) * canvas!.width * 2;
        this.y = (Math.random() - 0.5) * canvas!.height * 2;
        this.z = canvas!.width;
        this.px = 0;
        this.py = 0;
        this.color = `rgba(245, 158, 11, ${0.2 + Math.random() * 0.5})`; // Amber shades
      }

      update() {
        this.px = this.x / (this.z / 100) + canvas!.width / 2;
        this.py = this.y / (this.z / 100) + canvas!.height / 2;

        this.z -= 4; // Speed

        if (this.z < 1 || this.px < 0 || this.px > canvas!.width || this.py < 0 || this.py > canvas!.height) {
          this.reset();
        }
      }

      draw() {
        const x = this.x / (this.z / 100) + canvas!.width / 2;
        const y = this.y / (this.z / 100) + canvas!.height / 2;

        if (this.px !== 0) {
          ctx!.beginPath();
          ctx!.strokeStyle = this.color;
          ctx!.lineWidth = 2;
          ctx!.lineCap = "round";
          ctx!.moveTo(x, y);
          ctx!.lineTo(this.px, this.py);
          ctx!.stroke();
        }
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.fillStyle = "rgba(8, 51, 68, 0.2)"; // oceanic cyan with trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", init);
    init();
    animate();

    return () => {
      window.removeEventListener("resize", init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-20 bg-cyan-950 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-40"
      />
      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}

