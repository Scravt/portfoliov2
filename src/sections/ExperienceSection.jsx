import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { expCards } from '../constants'
import GlowCard from '../components/GlowCard'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {

useGSAP(() => {
  let mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    gsap.utils.toArray('.timeline-card').forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        xPercent:-100,
        duration: 1,
        force3D: true,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          onEnter: () => gsap.set(card, { willChange: 'transform, opacity' }),
          onLeaveBack: () => gsap.set(card, { willChange: 'auto' }),
          toggleActions: 'play none none none'
        }
      });
    });

    gsap.to('.timeline',{
      transformOrigin:'bottom bottom',
      ease:'power1.inOut',
      force3D: true,
      scrollTrigger:{
          trigger:'.timeline',
          start:'top center',
          end: '70%center',
          onEnter: () => gsap.set('.timeline', { willChange: 'transform' }),
          onLeaveBack: () => gsap.set('.timeline', { willChange: 'auto' }),
          onUpdate: (self)=>{
              gsap.to('.timeline',{
                  scaleY:1- self.progress,
                  force3D: true
              })
          }
      }
    })
  });
}, []);

    return (
        <section id="experience" className="w-full md:mt-40 mt-20 section-padding xl:px-0">
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader title="Professional Experience" sub="My career Overview" />
                <div className='mt-32 relative '>
                    <div className='relative z-50 xl:space-y-32 space-y-10'>
                        {expCards.map((card, index) => (
                            <div key={card.title} className='exp-card-wrapper '>
                                <div className='xl:w-2/6'>
                                    <GlowCard card={card} index={index}>
                                        <div className='flex gap-3'>
                                            <img src={card.imgPath} alt={card.title} className='h-8' />
                                            <div className='h-8  flex items-center'>
                                                {card.employer}
                                            </div>

                                        </div>
                                    </GlowCard>
                                </div>
                                <div className='xl:w-4/6'>
                                    <div className='flex items-start'>
                                        <div className='timeline-wrapper'>
                                            <div className='timeline hidden md:block'/>
                                            <div className='gradient-line w-1 h-full'/>

                                        </div>
                                        <div className='expText flex xl:gap-20 md:gap-10 gap-5 relative z-20'>
                                            <div className='timeline-logo'>
                                                <img src={card.logoPath} alt="logo" />
                                            </div>
                                            <div>
                                                <h1 className='font-semibold text-3xl'>{card.title}</h1>
                                                <p className='my-5 text-white-50'>
                                                    {card.date}

                                                </p>
                                                <p className='text-[#893cb5] italic '>
                                                    Responsibilities
                                                </p>
                                                <ul className='list-disc ms-5 flex flex-col gap-5 text-white-50'>
                                                    {card.responsibilities.map((responsability)=>(
                                                        <li key={responsability} className='text-lg'>
                                                            {responsability}
                                                        </li>
                                                    ))
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection
