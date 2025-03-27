'use client';

import { useEffect, useRef } from 'react';

class Star {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;

    constructor(x?: number, y?: number, canvasWidth?: number, canvasHeight?: number) {
        this.x = x || (canvasWidth ? Math.random() * canvasWidth : 0);
        this.y = y || (canvasHeight ? Math.random() * canvasHeight : 0);
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.radius = Math.random() * 2 + 1;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
    }

    update(canvas: HTMLCanvasElement, mouseX: number | null, mouseY: number | null) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Move stars away if mouse is near
        if (mouseX !== null && mouseY !== null) {
            let dx = this.x - mouseX;
            let dy = this.y - mouseY;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                this.x += dx / 10;
                this.y += dy / 10;
            }
        }
    }
}

export default function ConstellationBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const starsRef = useRef<Star[]>([]);
    const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
    const animationFrameRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const maxDistance = 150;

        // Set canvas size
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Create initial stars
        const createStars = (count: number) => {
            starsRef.current = [];
            for (let i = 0; i < count; i++) {
                starsRef.current.push(new Star(undefined, undefined, canvas.width, canvas.height));
            }
        };

        // Draw lines between stars
        const drawLines = () => {
            const stars = starsRef.current;
            for (let i = 0; i < stars.length; i++) {
                for (let j = i + 1; j < stars.length; j++) {
                    let dx = stars[i].x - stars[j].x;
                    let dy = stars[i].y - stars[j].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        ctx.beginPath();
                        ctx.moveTo(stars[i].x, stars[i].y);
                        ctx.lineTo(stars[j].x, stars[j].y);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            starsRef.current.forEach(star => {
                star.update(canvas, mouseRef.current.x, mouseRef.current.y);
                star.draw(ctx);
            });

            drawLines();
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        // Event listeners
        const handleResize = () => {
            setCanvasSize();
        };

        const handleClick = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            starsRef.current.push(new Star(x, y));
        };

        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current.x = event.clientX - rect.left;
            mouseRef.current.y = event.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouseRef.current.x = null;
            mouseRef.current.y = null;
        };

        // Initialize
        setCanvasSize();
        createStars(15);
        animate();

        // Add event listeners
        window.addEventListener('resize', handleResize);
        canvas.addEventListener('click', handleClick);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('click', handleClick);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full"
            style={{ 
                zIndex: 0,
                pointerEvents: 'all'
            }}
        />
    );
} 