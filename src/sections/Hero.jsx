import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { words } from '../constants'
import Button from '../components/Button'
import HeroExpierience from '../components/HeroModels/HeroExpierience'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import AnimatedCounter from '../components/AnimatedCounter'

const Hero = () => {
    const isTablet = useMediaQuery(
    { maxWidth: 1024 },
    {
      ssrMatchMedia: () => ({ matches: false }), // previene errores en SSR
    }
  );

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // set on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
    
    useGSAP(() => {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
            gsap.set('.hero-text h1', { willChange: 'transform, opacity' });
            gsap.fromTo(
                '.hero-text h1',
                { y: 100, opacity: 0 },
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 1, 
                    ease: 'power2.inOut', 
                    stagger: 0.2,
                    force3D: true,
                    onComplete: () => gsap.set('.hero-text h1', { willChange: 'auto' }) 
                }
            );
        });
    }, []);
    return (
        <section id="hero" className='relative overflow-hidden'>
            <div className="absolute w-full top-0 left-0 z-10 max-w-full overflow-hidden">
                <img src="/images/bg.png" alt="" className="max-w-full" />
            </div>

            <div className='hero-layout'>
                {/* Left side hero content */}
                <header className="flex flex-col justify-center md:w-full w-full md:px-20 px-5 max-w-full">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Gonzalo, a developer based in Argentina with a passion for
              code.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="work"
            />
          </div>
        </header>
                {!isMobile && (
                  <figure>
                      <div className='hero-3d-layout'>
                          {/* Transparent overlay to block touch on mobile, allowing page scroll */}
                          <div
                              className="absolute inset-0 z-50 md:hidden"
                              style={{ touchAction: 'pan-y' }}
                          />
                          <HeroExpierience isTablet={isTablet} />
                      </div>
                  </figure>
                )}
            </div>

            {!isMobile && <AnimatedCounter />}
        </section>
    )
}

export default Hero