import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current];

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        )

        let mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            projects.forEach((project, index) => {
                gsap.fromTo(project,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        delay: 0.3*(index +1),
                        force3D: true, // Hardware Acceleration
                        scrollTrigger: {
                            trigger: project,
                            start: "top bottom-=100",
                            toggleActions: "play none none none",
                            onEnter: () => gsap.set(project, { willChange: 'transform, opacity' }),
                            onLeaveBack: () => gsap.set(project, { willChange: 'auto' }),
                        },
                    });
            });
        });

    }, []);

    const projectStyle = "flex flex-col xl:w-1/2 w-full gap-5";
    const imageWrapperStyle = "w-full xl:h-[60vh] md:h-[50vh] h-80 relative rounded-xl overflow-hidden";
    const imageStyle = "w-full h-full object-cover rounded-xl transition-transform duration-700 hover:scale-105";

    return (
        <section id='work' ref={sectionRef} className='app-showcase'>
            <div className='w-full'>
                <div className='flex xl:flex-row flex-col gap-10 justify-between items-start w-full mt-10'>
                    
                    {/* Project 1 */}
                    <div className={projectStyle} ref={project1Ref}>
                        <div className={imageWrapperStyle + " bg-[#1c1c21]"}>
                            <img src="/public/images/project1.png" alt="Ryde" className={imageStyle} />
                        </div>
                        <div className='text-content flex flex-col gap-3 mt-2'>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                                SolSentry: Full-Stack Solana Monitoring SaaS
                            </h2>
                            <p className="text-white-50 md:text-lg">
                                A professional-grade SaaS for real-time Solana wallet tracking. Built with <b>Next.js 16</b> and <b>Appwrite</b>, it features a custom <b>Helius Webhook</b> integration for instant on-chain notifications. Includes automated transaction parsing, Stripe subscription management, and advanced idempotency logic to ensure data integrity across the blockchain-to-backend flow.
                            </p>
                            <div className="flex gap-4 mt-4">
                                <a href="https://solsentry.gonzalomartinez.tech/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="px-5 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                                    View Project
                                </a>
                                <a href="https://github.com/Scravt/sol-sentry" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="px-5 py-2.5 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-colors">
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className={projectStyle} ref={project2Ref}>
                        <div className={imageWrapperStyle + " bg-[#ffefdb]"}>
                            <img src="/public/images/project2.png" alt="Library Platform" className={imageStyle} style={{ objectFit: 'cover' }} />
                        </div>
                       <div className='text-content flex flex-col gap-3 mt-2'>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                                Ink & Soul: AI-Powered Tattoo SaaS
                            </h2>
                            <p className="text-white-50 md:text-lg">
                                A production-grade platform for tattoo studios featuring a sophisticated <b>AI Design Pipeline</b>. Using <b>Gemini 2.5 Flash</b>, it generates both concept renders and print-ready stencils. Built with <b>Next.js 16</b> and <b>Appwrite</b>, it implements complex RBAC (Admin, Artist, Guest), document-level security, and a full booking system, all backed by a <b>29-test suite</b> using Jest and Playwright.
                            </p>
                            <div className="flex gap-4 mt-4">
                                <a href="https://inkandsoul.gonzalomartinez.tech/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="px-5 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                                    View Project
                                </a>
                                <a href="https://github.com/Scravt/tatto-shop" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="px-5 py-2.5 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-colors">
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection