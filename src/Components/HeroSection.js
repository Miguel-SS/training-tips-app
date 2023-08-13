import './HeroSection.css'

function HeroSection() {


    return (
        <div id='home_hero_section' className="hero-section-bg py-28">
          <div className='container mx-auto h-full flex items-center'>
            <div className='w-full p-5'>
              <h1 className='text-white text-7xl font-semibold mb-10 w-full'>Training Tips Club</h1>
              <a 
                className='bg-orange-400 hover:bg-orange-600 text-white text-lg font-bold py-3 px-10 rounded focus:outline-none focus:shadow-outline'
                href='http://wa.me/+50687495597' 
                target='_blank'
              >
                ¡Únete!
              </a>
            </div>
            

          </div>
        </div>
      )
}

export default HeroSection;