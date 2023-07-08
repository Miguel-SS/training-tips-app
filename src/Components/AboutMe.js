import portrait from '../resources/fabian_portrait_fixed.jpg'

function AboutMe() {
    return (
      <div class="w-full p-32">
        <div className="container m-auto">
          <h1 className='text-6xl pb-16'>About</h1>
          <div className='gap-8 columns-2'>
            <img src={portrait} ></img>
            <div className=''>

            </div>
          </div>         
        </div>
      </div>
    )
}

export default AboutMe;
