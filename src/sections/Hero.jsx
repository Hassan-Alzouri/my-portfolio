import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera } from '@react-three/drei'
import HackerRoom from "../components/HackerRoom.jsx";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="#home">
            <div className="w-full mx-auto flex flex-col lg:flex-row items-center lg:items-center flex-1 c-space gap-10 relative z-10">

                {/* LEFT: name, role, socials, CV */}
                <div className="flex flex-col justify-center gap-6 lg:w-1/2 text-center lg:text-left">
                    <p className="flex items-center gap-2 justify-center lg:justify-start text-base sm:text-lg font-semibold text-neutral-300 tracking-wide uppercase font-generalsans">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                        Hassan Alzourei
                    </p>

                    <h1 className="text-4xl sm:text-5xl xl:text-6xl font-generalsans font-bold text-gray_gradient !leading-tight">
                        Full-Stack Software Engineer
                    </h1>

                    <p className="text-neutral-400 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
                        I build secure, scalable web and AI-driven applications.
                        Currently seeking full-time software engineering roles.
                    </p>

                    {/* Social icons */}
                    <div className="flex gap-4 justify-center lg:justify-start">
                        <a href="https://github.com/Hassan-Alzouri" target="_blank" rel="noopener noreferrer"
                           className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .32.19.694.8.576C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/hassan-alzourei-2001b1324/" target="_blank" rel="noopener noreferrer"
                           className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <a href="mailto:Hassan-Alzourei@outlook.com"
                           className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                                <path d="M1.5 4.5h21a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5h-21A1.5 1.5 0 010 18V6a1.5 1.5 0 011.5-1.5zm.5 2.2V17h20V6.7l-9.4 6.6a1 1 0 01-1.15 0L2 6.7z"/>
                            </svg>
                        </a>
                    </div>

                    {/* CV download */}
                    <div className="flex justify-center lg:justify-start">
                        <a href="/assets/cv.pdf" download className="w-fit">
                            <Button name="Download CV" containerClass="w-fit" />
                        </a>
                    </div>
                </div>

                {/* RIGHT: 3D model, contained */}
                <div className="w-full lg:w-1/2 h-[380px] sm:h-[450px] lg:h-[550px] relative">
                    <Canvas className="w-full h-full">
                        <Suspense fallback={<CanvasLoader />}>
                            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                            <HeroCamera isMobile={isMobile}>
                                <HackerRoom
                                    position={sizes.deskPosition}
                                    rotation={[0, -Math.PI, 0]}
                                    scale={sizes.deskScale}
                                />
                            </HeroCamera>

                            <group>
                                {/*<ReactLogo position={sizes.reactLogoPosition} />*/}
                                <Cube position={sizes.cubePosition} />
                            </group>

                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </section>
    )
}
export default Hero