
import TitleHeader from '../components/TitleHeader'
import { techStackImgs } from '../constants'

const TechStack = () => {
    return (
        <div id='skills' className='flex-center flex-col section-padding'>
            <div className='w-full h-full md:px-10 p-5'>
                <TitleHeader
                    title="My Preferred Tech Stack"
                    sub="The Skills I Bring to the Table"
                />
            </div>

            <div className='tech-grid p-10 h-full w-full'>
                {techStackImgs.map((icon) => (
                    <div
                        key={icon.name}
                        /* Eliminamos 'group' y 'overflow-hidden' que suelen usarse para ocultar contenido */
                        className="card-border tech-card rounded-lg p-6 flex flex-col items-center justify-center"
                    >
                        {/* Eliminamos los wrappers de animación 'tech-card-animated-bg' y 'tech-card-content' */}
                        <div className='flex flex-col items-center gap-4'>
                            <img 
                                src={icon.imgPath} 
                                alt={icon.name} 
                                className='h-14 md:h-20 object-contain' 
                            />
                            <p className='text-center font-medium'>
                                {icon.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TechStack