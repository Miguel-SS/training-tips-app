import { useState, useEffect } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { CgClose } from 'react-icons/cg'
import logo from '../resources/logo_blanco.png'

const navigation = [
    {name: 'Inicio', href: '#home_hero_section'},
    {name: 'Sobre Mi', href: '#about_me'},
    {name: 'Planes', href: '#services'},
    {name: 'Contacto', href: '#contact_me'}
]


function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [top, setTop] = useState(true);

    useEffect (()=>{
        document.addEventListener("scroll", e => {
            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 5){
              setTop(false)
            } else {
              setTop(true)
            }
        })
    },[]);

    return (
        <div>
          <header className={top ? 
            "fixed w-full flex justify-between items-center pl-2 pr-4 md:px-12 h-28 transition-all duration-500" : 
            " bg-neutral-800 fixed w-full flex justify-between items-center pl-2 pr-4 md:px-12 h-16 transition-all duration-500 shadow"}
            >
            <a href='#'>
              <img src={logo} alt="Fabian Sanchez" className={top? 'h-32 transition-all duration-500' : 'h-24 transition-all duration-500'}/>
            </a>

            <nav>
              <button className='md:hidden' onClick={()=> mobileMenuOpen ? setMobileMenuOpen(false) : setMobileMenuOpen(true)}>
                <Bars3Icon className="h-12 w-12 text-white" aria-hidden="true" />
              </button>

              <ul className='relative md:flex left-0 right-0 space-x-6 hidden'>
                {navigation.map((item)=> 
                <li>
                  <a href={item.href} className={top? 
                    'text-white text-xl hover:text-orange-400 transition-all duration-500' : 
                    'text-white hover:text-orange-400 transition-all duration-500'}
                    >{item.name}</a>
                </li>
                )}
              </ul>
            </nav>

          </header>

          <ul 
            className={mobileMenuOpen ? 
              "fixed left-0 right-0 min-h-screen space-y-4 p-4 transform translate-x-0 transition duration-500 md:hidden bg-black" : 
              "fixed left-0 right-0 min-h-screen space-y-4 p-4 transform translate-x-full transition duration-500 md:hidden bg-black"}
            >
            <button 
              className='fixed top-5 left-5'
              onClick={() => !mobileMenuOpen ? setMobileMenuOpen(true) : setMobileMenuOpen(false)}>
                <CgClose color='white' size={'2em'}/>
            </button>
            {navigation.map((item)=> 
            <li>
            <a 
              href={item.href} 
              className='text-white text-2xl focus:text-orange-400 ' 
              onClick={() => !mobileMenuOpen ? setMobileMenuOpen(true) : setMobileMenuOpen(false)}>
                {item.name}
            </a>
            </li>
            )}
          </ul>
        </div>
      )
}

export default NavBar;