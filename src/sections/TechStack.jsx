import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../constants'


const TechStack = () => {
  return (
    <div id='skills' className='flex-center section-padding'>
        <div className='w-full h-full md:px-10 section-padding'>
            <TitleHeader
            title="My Preferred Tech Stack"
            sub='The Skills I Bring to the Table'
            />
        </div>
        <div className='tech-grid'>
            {techStackIcons.map((icon) =>{
                <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-lg'>
                    {icon.name}
                    <div className='tech-card-animated-bg'>
                        <div className='tech-card-content'>
                            <div className='tech-icon-wrapper'>

                            </div>                  
                        </div>
                    </div>
                </div>
            }
        )}
        </div>
    </div>
  )
}

export default TechStack