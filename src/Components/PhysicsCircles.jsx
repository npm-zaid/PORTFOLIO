import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import gsap from 'gsap';

const PhysicsCircles = () => {
    const sceneRef = useRef(null);
    const engine = useRef(null);
    const world = useRef(null);
    const balls = useRef([]);

    useEffect(() => {
        const Engine = Matter.Engine;
        const World = Matter.World;
        const Bodies = Matter.Bodies;

        engine.current = Engine.create();
        world.current = engine.current.world;
        engine.current.gravity.y = 1;

        const createBall = (x, radius) => {
            const body = Bodies.circle(x, 0, radius, {
                restitution: 0.7,
                friction: 0.1,
                frictionAir: 0.02,
                render: { fillStyle: 'black' }
            });
            World.add(world.current, body);
            return body;
        };

        const containerWidth = () => sceneRef.current?.offsetWidth || 0;
        const containerHeight = () => sceneRef.current?.offsetHeight || 0;

        const numBalls = 10;
        const ballRadius = 20;

        // Ensure container has dimensions before creating balls
        if (containerWidth() === 0 || containerHeight() === 0) {
            return; // Exit early if container has no dimensions
        }

        for (let i = 0; i < numBalls; i++) {
            const x = Math.random() * (containerWidth() - ballRadius * 2) + ballRadius;
            const ballBody = createBall(x, ballRadius);
            balls.current.push(ballBody);
        }

        const ground = Bodies.rectangle(containerWidth() / 2, containerHeight() + 50, containerWidth(), 100, { isStatic: true });
        World.add(world.current, ground);

        Engine.run(engine.current);

        gsap.ticker.add(() => {
            if (!sceneRef.current) return;
            Engine.update(engine.current);
            balls.current.forEach(body => {
                const ballElement = sceneRef.current.querySelector(`[data-ball="${body.id}"]`);
                if (ballElement) {
                    gsap.set(ballElement, {
                        x: body.position.x - ballRadius,
                        y: body.position.y - ballRadius,
                        rotation: body.angle * (180 / Math.PI),
                    });
                }
            });
        });

        const handleResize = () => {
            if (!sceneRef.current) return;
            const newWidth = containerWidth();
            const newHeight = containerHeight();

            Matter.Body.setPosition(ground, { x: newWidth / 2, y: newHeight + 50 });
            Matter.Body.setVertices(ground, Matter.Vertices.create([{ x: 0, y: 0 }, { x: newWidth, y: 0 }, { x: newWidth, y: 100 }, { x: 0, y: 100 }]));

            // Reset simulation (more robust on resize)
            World.clear(world.current);
            balls.current = []; // Clear the balls array
            for (let i = 0; i < numBalls; i++) {
                const x = Math.random() * (newWidth - ballRadius * 2) + ballRadius;
                const ballBody = createBall(x, ballRadius);
                balls.current.push(ballBody);
            }
            World.add(world.current, ground); // Re-add the ground
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);

        return () => {
            gsap.ticker.remove();
            World.clear(world.current);
            Engine.clear(engine.current);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('load', handleResize);
        };
    }, []);

    return (
        <div className="w-full h-screen bg-gray-100 relative overflow-hidden" ref={sceneRef}>
            {balls.current.map(ball => (
                <div
                    key={ball.id}
                    data-ball={ball.id}
                    className="absolute rounded-full bg-black"
                    style={{
                        width: ball.circleRadius * 2,
                        height: ball.circleRadius * 2,
                        left: ball.position?.x - ball.circleRadius,
                        top: ball.position?.y - ball.circleRadius,
                    }}
                />
            ))}
        </div>
    );
};

export default PhysicsCircles;