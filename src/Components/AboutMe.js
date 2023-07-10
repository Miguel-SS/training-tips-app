import portrait from '../resources/fabian_portrait_fixed.jpg'

function AboutMe() {
    return (
      <div class="w-full py-32">
        <div className="container m-auto">
          <h1 className='text-6xl font-semibold pb-5 text-neutral-800'>About</h1>
          <div className='w-full flex justify-center mb-10'>
            <span className='w-24 h-1 bg-orange-400'></span>
          </div>
          <div className='flex flex-row flex-wrap content-center'>
              <img src={portrait} className='lg:w-1/3 pb-20 lg:pb-0'></img>
              <p className='lg:w-2/3 px-5 lg:px-28 text-2xl self-center text-neutral-800'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit 
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
              occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.
              </p>

          </div>

        </div>
      </div>
    )
}

export default AboutMe;
