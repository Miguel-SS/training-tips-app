import { PiBarbellDuotone } from 'react-icons/pi'
import { AiOutlineUsergroupAdd, AiOutlineUser } from 'react-icons/ai'
import { RiRunLine } from 'react-icons/ri'
import { GiBiceps } from 'react-icons/gi'
import { MdPersonOutline } from 'react-icons/md'

function Services() {
    return (
      <div id="services" className="w-full py-20 bg-neutral-50">
        <div className="container m-auto">
            <div className="w-full">
                <h1 className='text-6xl font-semibold pb-5 text-neutral-800'>Planes</h1>
                <div className='w-full flex justify-center mb-10'>
                    <span className='w-24 h-1 bg-orange-400'></span>
                </div>
            </div>
            <div className="w-full flex flex-wrap">
                <div className="w-full lg:w-1/2 p-5">
                    <div className="flex flex-col justify-center items-center shadow-md p-10 rounded-md bg-white lg:h-96 xl:h-72 text-neutral-800">
                        <PiBarbellDuotone size={50} style={{display : 'inline'}}/>
                        <h3 className='font-semibold text-2xl'>Rutina Personalizada</h3>
                        <p className='my-3'>
                            Rutinas personalizadas de 4 semanas diseñadas en aplicación móvil para tener un seguimiento 
                            y una visualización de los distintos ejercicios, así como también las evaluaciones para ver 
                            el progreso. Se brinda asesoramiento y retroalimentación de los entrenamientos. 
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 p-5">
                    <div className="flex flex-col justify-center items-center shadow-md p-10 rounded-md bg-white lg:h-96 xl:h-72 text-neutral-800">
                        <AiOutlineUser size={50} style={{display : 'inline'}}/>
                        <h3 className='font-semibold text-2xl'>Entrenamiento Personalizado</h3>
                        <p className='my-3'>
                            Entrenamiento de 45 a 60 minutos guiado en el cual se impartirá una serie de ejercicios 
                            para trabajar las distintas cualidades físicas y poder alcanzar las metas propuestas. 
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 p-5">
                    <div className="flex flex-col justify-center items-center shadow-md p-10 rounded-md bg-white lg:h-96 xl:h-72 text-neutral-800">
                        <AiOutlineUsergroupAdd size={50} style={{display : 'inline'}}/>
                        <h3 className='font-semibold text-2xl'>Entrenamiento Semipersonalizado</h3>
                        <p className='my-3'>
                            Entrenamiento de 45 a 60 minutos guiado en el cual se impartirá una serie de ejercicios 
                            para trabajar las distintas cualidades físicas para poder alcanzar las metas propuestas. 
                            Cantidad de personas por grupo 2 a 3 como máximo.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 p-5">
                    <div className="flex flex-col justify-center items-center shadow-md p-10 rounded-md bg-white lg:h-96 xl:h-72 text-neutral-800">
                        <RiRunLine size={50} style={{display : 'inline'}}/>
                        <h3 className='font-semibold text-2xl'>Evaluaciones Físicas</h3>
                        <p className='my-3'>
                            Se evalúan las distintas cualidades físicas para iniciar un plan de entrenamiento más 
                            especializado de acuerdo con las necesidades de cada persona.
                        </p>
                    </div>
                </div>
                
                
                <div className="w-full"></div>
            </div>
        </div>
        
      </div>
    )
}

export default Services;
