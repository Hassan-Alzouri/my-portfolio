import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { Float, useGLTF, useTexture } from '@react-three/drei';

const HackerRoom = ({ ...props }) => {
    const { scene } = useGLTF('models/hacker-room.glb');
    const texture = useTexture('textures/cube.png');

    const cubeRef = useRef();
    const [hovered, setHovered] = useState(false);

    useGSAP(() => {
        if (!cubeRef.current) return; // 👈 safety check
        gsap
            .timeline({
                repeat: -1,
                repeatDelay: 0.5,
            })
            .to(cubeRef.current.rotation, {
                y: hovered ? '+=2' : `+=${Math.PI * 2}`,
                x: hovered ? '+=2' : `-=${Math.PI * 2}`,
                duration: 2.5,
                stagger: {
                    each: 0.15,
                },
            });
    }, [hovered]);


    return (
        <Float floatIntensity={2}>
            <group dispose={null} {...props}>

                {/* Full room model */}
                <primitive object={scene} />

                {/* Spinning cube — using built-in box geometry */}
                <mesh
                    ref={cubeRef}
                    castShadow
                    receiveShadow
                    position={[0, 1, 0]}
                    onPointerEnter={() => setHovered(true)}
                    onPointerLeave={() => setHovered(false)}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshMatcapMaterial matcap={texture} toneMapped={false} />
                </mesh>

            </group>
        </Float>
    );
};

useGLTF.preload('models/hacker-room.glb');

export default HackerRoom;