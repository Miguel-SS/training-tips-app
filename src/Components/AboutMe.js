import portrait from '../resources/fabian_portrait_v1.jpg'

function AboutMe() {
    return (
      <div id='about_me' className="w-full py-10 md:py-32">
        <div className="container m-auto">
          <h1 className='text-6xl font-semibold pb-5 text-neutral-800'>Sobre Mí</h1>
          <div className='w-full flex justify-center mb-10'>
            <span className='w-24 h-1 bg-orange-400'></span>
          </div>
          <div className='flex flex-row flex-wrap content-center'>
              {/*<img src={portrait} className='lg:w-1/3 pb-10 lg:pb-0 sm:w-8/12 mx-auto px-5 rounded-full'></img>*/}
              {/*<div 
              className='lg:w-1/3 lg:mb-0 sm:w-8/12 sm:mx-auto mx-5 mb-10 rounded-full bg-cover w-full '
              style={{backgroundPosition: "top center", backgroundImage: "url('"+portrait+"')", height: '500px'}}
              ></div>*/}
              <div className='lg:w-1/3 w-full px-5 sm:px-0'>
                <div 
                className='lg:mb-0 sm:mx-auto mb-10 rounded-full bg-cover sm:h-96 sm:w-96 w-full py-72 sm:py-0'
                style={{backgroundPosition: "top center", backgroundImage: "url('"+portrait+"')"}}
                ></div>
              </div>
              
              <p className='lg:w-2/3 px-5 lg:px-28 text-2xl self-center text-neutral-800 sm:w-full'>
                Soy Promotor de la Salud Física con experiencia en entrenamiento de acondicionamiento 
                físico y fuerza. Mi objetivo es enseñar y transmitir la pasión por el movimiento humano 
                mediante un proceso guiado y personalizado. Trabajaremos juntos para alcanzar los 
                objetivos y resultados deseados. 
              </p>

          </div>

        </div>
      </div>
    )
}

export default AboutMe;
