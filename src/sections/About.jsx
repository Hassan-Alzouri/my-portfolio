import React from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = React.useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("Hassan-Alzourei@outlook.com");
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }
    return (
        <section className="c-space my-20" id="about">
            <h2 className="head-text mb-10">About Me</h2>

            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Hi, I am Hassan Mohammed Alzourei</p>
                            <p className="grid-subtext">
                                I'm a Computer Science student at Imam Abdulrahman Bin Faisal University (2021–2026).
                                I build secure, full-stack web applications with authentication, role-based access
                                control, and database-driven architectures. I have hands-on experience through
                                real production projects and an AI hackathon, and I'm now looking for a full-time
                                software engineering role where I can grow with a team.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                Full-stack development with React, Next.js, Node.js/Express, and ASP.NET (C#),
                                backed by SQL Server, MySQL, and MongoDB. I'm also growing my skills in AI and
                                machine learning, applying Python and ML models to real-world problems.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">Based in Saudi Arabia, open to opportunities</p>
                            <p className="grid-subtext">
                                Currently based in KSA and open to full-time roles on-site, hybrid, or remote
                                with a company team.
                            </p>
                            <a href="#contact" className="w-full">
                                <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">My passion for building</p>
                            <p className="grid-subtext">
                                I love turning ideas into working products — from a production management system
                                at King Fahad Medical City to an AI-driven inspection system built in a 24-hour
                                hackathon. That project placed 1st, and it's the kind of fast, hands-on problem
                                solving that keeps me hooked on code.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                        <div className="space-y-4">
                            <p className="grid-subtext text-center">Let's talk</p>
                            <button
                                onClick={handleCopy}
                                className="flex items-center justify-center gap-2 w-full bg-black-300 hover:bg-black-500 transition-colors rounded-lg py-3 px-4"
                            >
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" className="w-4 h-4" />
                                <span className="text-sm sm:text-base font-medium text-white">
                                    Hassan-Alzourei@outlook.com
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About