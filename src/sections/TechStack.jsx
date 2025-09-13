
import TitleHeader from '../components/TitleHeader'
import { techStackImgs } from '../constants'



const TechStack = () => {
// bnuscas iconos y agregar, js next tailwind html css exprex sql posgre typescrip docker
    return (
        <div id='skills' className=' flex-center flex-col section-padding'>
            <div className='w-full h-full md:px-10 p-5'>
                <TitleHeader
                    title="My Preferred Tech Stack"
                    sub="The Skills I Bring to the Table"
                />
            </div>

            <div className='tech-grid p-20 h-full w-full'>
                {techStackImgs.map((icon) => (
                    <div
                        key={icon.name}
                        className="card-border tech-card overflow-hidden group  rounded-lg"
                    >
                        <div className='tech-card-animated-bg'>
                            <div className='tech-card-content'>
                                <div className='tech-icon-wrapper'>
                                    <img src={icon.imgPath}  alt="" />
                                         
                                </div>
                                <div className='padding-x w-full' >
                                    <p>
                                        {icon.name}
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TechStack