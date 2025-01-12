import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import gsap from 'gsap';

const Skills = () => {
    const sceneRef = useRef(null);
    const engine = useRef(null);
    const world = useRef(null);
    const bodies = useRef([]);

    const skillsData = [
        { label: 'HTML', x: 100, y: 50, width: 80, height: 80, color: 'bg-orange-500', icon: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png' },
        { label: 'CSS', x: 250, y: 100, width: 80, height: 80, color: 'bg-blue-500', icon: 'https://cdn-icons-png.flaticon.com/512/919/919097.png' },
        { label: 'JavaScript', x: 400, y: 75, width: 120, height: 80, color: 'bg-yellow-400', icon: 'https://cdn-icons-png.flaticon.com/512/59/59116.png' },
        { label: 'React', x: 550, y: 50, width: 100, height: 80, color: 'bg-sky-500', icon: 'https://cdn-icons-png.flaticon.com/512/1183/1183777.png' },
        { label: 'Three.js', x: 700, y: 100, width: 100, height: 80, color: 'bg-purple-500', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Threejs_icon.svg/2048px-Threejs_icon.svg.png' },
        { label: 'Code', x: 850, y: 50, width: 80, height: 80, color: 'bg-gray-700', icon: 'https://cdn-icons-png.flaticon.com/512/808/808389.png' }
    ];

    useEffect(() => {
        engine.current = Matter.Engine.create({ gravity: { x: 0, y: 1 } });
        world.current = engine.current.world;
        Matter.Engine.run(engine.current);

        const createSkillBody = (x, y, width, height, label) => {
            const body = Matter.Bodies.rectangle(x, y, width, height, {
                restitution: 0.5,
                friction: 0.3,
                frictionAir: 0.02,
                label: label,
                render: { fillStyle: 'transparent', strokeStyle: 'transparent' }
            });
            Matter.World.add(world.current, body);
            bodies.current.push(body);
            return body;
        };

        skillsData.forEach(skill => createSkillBody(skill.x, skill.y, skill.width, skill.height, skill.label));

        const ground = Matter.Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 50, window.innerWidth, 100, { isStatic: true });
        Matter.World.add(world.current, ground);

        gsap.ticker.add(() => {
            if (!sceneRef.current) return;
            bodies.current.forEach(body => {
                const skillElement = sceneRef.current.querySelector(`[data-skill="${body.label}"]`);
                if (skillElement) {
                    gsap.set(skillElement, {
                        x: body.position.x - skillElement.offsetWidth / 2,
                        y: body.position.y - skillElement.offsetHeight / 2,
                        rotation: body.angle * (180 / Math.PI),
                    });
                }
            });
        });

        const handleResize = () => {
            Matter.Body.setPosition(ground, { x: window.innerWidth / 2, y: window.innerHeight + 50 });
            Matter.Body.setVertices(ground, Matter.Vertices.create([{ x: 0, y: 0 }, { x: window.innerWidth, y: 0 }, { x: window.innerWidth, y: 100 }, { x: 0, y: 100 }]))
        }
        window.addEventListener('resize', handleResize);

        gsap.fromTo(
            bodies.current.map(body => sceneRef.current.querySelector(`[data-skill="${body.label}"]`)),
            { scale: 0, opacity: 0, y: -100 },
            {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
            }
        );

        return () => {
            gsap.ticker.remove();
            Matter.World.clear(world.current);
            Matter.Engine.clear(engine.current);
            window.removeEventListener('resize', handleResize)
        };
    }, []);

    return (
        <div className="skills-container relative w-screen h-screen overflow-hidden bg-gradient-to-b from-blue-200 to-blue-100" ref={sceneRef}>
            {skillsData.map((skill) => (
                <div
                    key={skill.label}
                    className={`skill absolute flex flex-col items-center justify-center rounded-lg shadow-md text-sm select-none ${skill.color} text-white`}
                    style={{ width: skill.width, height: skill.height }}
                    data-skill={skill.label}
                >
                    <img src={skill.icon} alt={skill.label} className="w-12 h-12 mb-1" />
                    <span>{skill.label}</span>
                </div>
            ))}
        </div>
    );
};

export default Skills;