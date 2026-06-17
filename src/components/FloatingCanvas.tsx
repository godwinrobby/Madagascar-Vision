import { useEffect, useRef } from 'react';

export function FloatingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle/Mesh Node interfaces
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }

    interface FloatingShape {
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotSpeed: number;
      vx: number;
      vy: number;
      color: string;
      type: 'cube' | 'tetrahedron' | 'ring';
    }

    const nodes: Node[] = [];
    const shapes: FloatingShape[] = [];

    // Colors aligned with dynamic Eco & Rainbow palette
    const colors = [
      'rgba(16, 185, 129, 0.18)',  // Eco Emerald
      'rgba(6, 182, 212, 0.15)',   // Teal Mint
      'rgba(59, 130, 246, 0.13)',  // Electric Blue
      'rgba(139, 92, 246, 0.13)',  // Soft Violet
      'rgba(244, 63, 94, 0.13)',   // Rose/Pink
      'rgba(245, 158, 11, 0.14)',  // Amber Gold
    ];

    // Seed background particles
    const nodeCount = Math.min(40, Math.floor((width * height) / 40000));
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Seed floating 3D wireframe approximations
    const shapeCount = 6;
    const shapeTypes: ('cube' | 'tetrahedron' | 'ring')[] = ['cube', 'tetrahedron', 'ring'];
    for (let i = 0; i < shapeCount; i++) {
      shapes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 40 + 30,
        rotation: Math.random() * Math.PI,
        rotSpeed: (Math.random() - 0.5) * 0.005,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        color: colors[Math.floor(Math.random() * colors.length)].replace('0.1', '0.25'), // slightly brighter wireframes
        type: shapeTypes[i % shapeTypes.length],
      });
    }

    function drawCube(ctx: CanvasRenderingContext2D, s: FloatingShape) {
      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.rotate(s.rotation);
      ctx.strokeStyle = s.color;
      ctx.lineWidth = 1.5;

      const size = s.size;
      const offset = size * 0.4;

      // Draw standard isometric projection approximation
      // Front face
      ctx.beginPath();
      ctx.rect(-size / 2, -size / 2, size, size);
      ctx.stroke();

      // Back face
      ctx.beginPath();
      ctx.rect(-size / 2 + offset, -size / 2 - offset, size, size);
      ctx.strokeStyle = s.color.replace('0.25', '0.1'); // fade the back wireframe
      ctx.stroke();

      // Connecting edges
      ctx.strokeStyle = s.color;
      const corners = [
        [-size / 2, -size / 2],
        [size / 2, -size / 2],
        [size / 2, size / 2],
        [-size / 2, size / 2],
      ];
      corners.forEach(([cx, cy]) => {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + offset, cy - offset);
        ctx.stroke();
      });

      ctx.restore();
    }

    function drawTetrahedron(ctx: CanvasRenderingContext2D, s: FloatingShape) {
      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.rotate(s.rotation);
      ctx.strokeStyle = s.color;
      ctx.lineWidth = 1.5;

      const r = s.size * 0.6;
      // Coordinates of a tetrahedron approximation
      const c1 = [0, -r];
      const c2 = [-r * 0.86, r * 0.5];
      const c3 = [r * 0.86, r * 0.5];
      const center = [0, r * 0.1]; // central elevated point in 3D projection

      // Outer triangle
      ctx.beginPath();
      ctx.moveTo(c1[0], c1[1]);
      ctx.lineTo(c2[0], c2[1]);
      ctx.lineTo(c3[0], c3[1]);
      ctx.closePath();
      ctx.stroke();

      // Inner connecting ribs to mock 3D geometry
      [c1, c2, c3].forEach(([cx, cy]) => {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(center[0], center[1]);
        ctx.stroke();
      });

      ctx.restore();
    }

    function drawRing(ctx: CanvasRenderingContext2D, s: FloatingShape) {
      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.rotate(s.rotation);
      ctx.strokeStyle = s.color;
      ctx.lineWidth = 1.5;

      // Draw a sleek nested technical ring (looks like a quantum gyroscope)
      ctx.beginPath();
      ctx.ellipse(0, 0, s.size * 0.6, s.size * 0.25, 0, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(0, 0, s.size * 0.4, s.size * 0.15, Math.PI / 3, 0, Math.PI * 2);
      ctx.strokeStyle = s.color.replace('0.25', '0.15');
      ctx.stroke();

      ctx.restore();
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle digital network nodes in background
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        // Wrap boundaries
        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        if (n.y > height) n.y = 0;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();

        // Star connections
        for (let j = i + 1; j < nodes.length; j++) {
          const o = nodes[j];
          const dist = Math.hypot(n.x - o.x, n.y - o.y);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(o.x, o.y);
            ctx.stroke();
          }
        }
      }

      // 2. Render and update premium corporate 3D floating shapes
      shapes.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.rotation += s.rotSpeed;

        // Bounce back soft bounds
        if (s.x < -s.size) s.x = width + s.size;
        if (s.x > width + s.size) s.x = -s.size;
        if (s.y < -s.size) s.y = height + s.size;
        if (s.y > height + s.size) s.y = -s.size;

        if (s.type === 'cube') {
          drawCube(ctx, s);
        } else if (s.type === 'tetrahedron') {
          drawTetrahedron(ctx, s);
        } else if (s.type === 'ring') {
          drawRing(ctx, s);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      id="floating-canvas-element"
    />
  );
}
