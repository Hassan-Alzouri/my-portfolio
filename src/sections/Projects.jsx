import React from 'react'
import { myProjects } from "../constants/index.js";

const projectsCount = myProjects.length;

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = React.useState(0);
    const [imageIndex, setImageIndex] = React.useState(0);

    const currentProject = myProjects[selectedProjectIndex];
    const images = currentProject.images || [];

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectsCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectsCount - 1 ? 0 : prevIndex + 1;
            }
        });
        setImageIndex(0);
    }

    const handleImageNavigation = (direction) => {
        setImageIndex((prev) => {
            if (direction === 'previous') {
                return prev === 0 ? images.length - 1 : prev - 1;
            }
            return prev === images.length - 1 ? 0 : prev + 1;
        });
    }

    return (
        <section className="c-space my-20">
            <p className="head-text">My Work</p>
            <p className="text-white-500 mt-3">
                These are my main projects. I've built more, check out my GitHub for the rest: <a href="https://github.com/Hassan-Alzouri" target="_blank" rel="noreferrer" className="text-white underline hover:text-neutral-300 transition-colors">github.com/Hassan-Alzouri</a>
            </p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    {currentProject.spotlight && (
                        <div className="absolute top-0 right-0">
                            <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                        </div>
                    )}
                    <div className="p-2 backdrop-filter backdrop-blur-3xl w-fit rounded-lg bg-white flex items-center justify-center" style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt="logo" className="w-10 h-10 object-contain rounded" />
                    </div>
                    <div className="flex flex-col gap-5 text-white-600">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-2 flex-wrap">
                            {currentProject.tags.map((tag, index) => (
                                <span key={index} className="px-3 py-1 rounded-full text-xs sm:text-sm text-white bg-white/5 border border-white/10">
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                        {currentProject.href && (
                            <a className="flex items-center gap-2 cursor-pointer text-white-600" href={currentProject.href} target="_blank" rel="noreferrer">
                                <p>{currentProject.hrefLabel || 'Check Live Site'}</p>
                                <img src={`${import.meta.env.BASE_URL}assets/arrow-up.png`} className="w-3 h-3" alt="arrow" />
                            </a>
                        )}
                    </div>
                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                            <img src={`${import.meta.env.BASE_URL}assets/left-arrow.png`} alt="left-arrow" className="w-4 h-4" />
                        </button>
                        <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                            <img src={`${import.meta.env.BASE_URL}assets/right-arrow.png`} alt="right-arrow" className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full flex flex-col items-center justify-center p-5 gap-4">
                    <img
                        src={images[imageIndex]}
                        alt={currentProject.title}
                        className="w-full h-full object-contain rounded-lg"
                    />
                    {images.length > 1 && (
                        <div className="flex justify-between items-center w-full">
                            <button className="arrow-btn" onClick={() => handleImageNavigation('previous')}>
                                <img src={`${import.meta.env.BASE_URL}assets/left-arrow.png`} alt="left-arrow" className="w-4 h-4" />
                            </button>
                            <button className="arrow-btn" onClick={() => handleImageNavigation('next')}>
                                <img src={`${import.meta.env.BASE_URL}assets/right-arrow.png`} alt="right-arrow" className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
export default Projects