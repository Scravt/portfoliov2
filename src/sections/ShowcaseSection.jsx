import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];


        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
            )

        projects.forEach((project, index) => {
            gsap.fromTo(project,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.3*(index +1),
                    scrollTrigger: {
                        trigger: project,
                        start: "top bottom-=100",
                        markers: true,
                        toggleActions: "play none none none"
                    },
                });

        });



    }, []);

    return (
        <section id='work' ref={sectionRef} className='app-showcase '>
            <div className='w-full'>
                <div className='showcaselayout'>
                    <div className='first-project-wrapper' ref={project1Ref}>
                        <div className='image-wrapper'>
                            <img src="/public/images/project1.png" alt="Ryde" />
                        </div>
                        <div className='text-content'>
                            <h2>
                                On-demand Rides Made Simple whith Powerful, User-Friendly App called Ryde
                            </h2>
                            <p>
                                An app built with React Native, Redux, Node.js, Express, for  fast user Friendly experience.
                            </p>
                        </div>
                    </div>
                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project' ref={project2Ref}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src="/public/images/project2.png" alt="library" />
                            </div>
                            <h2>Library Platform</h2>
                        </div>
                        <div className='project' ref={project3Ref}>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src="/public/images/project3.png" alt="YC Directory" />
                            </div>
                            <h2>YC Directory</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection