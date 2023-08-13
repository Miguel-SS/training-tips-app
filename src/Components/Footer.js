import logo from "../resources/logo_blanco.png"
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa'

function Footer() {
    return (
      <div className="w-full py-20 bg-neutral-800">
        <div className="container m-auto">

            <div className="flex justify-center flex-wrap">
                <img src={logo}></img>
                <div className="flex justify-center w-full">
                    <a href="https://www.instagram.com/fabiansanchez.fs/" target="_blank" className="text-white hover:text-orange-400 focus:text-orange-400 transition duration-400">
                        <FaInstagram fontSize="2em" style={{margin: "0 10px"}}></FaInstagram>
                    </a>
                    <a href="https://www.facebook.com/fabian.sanchez.75839/" target="_blank" className="text-white hover:text-orange-400 focus:text-orange-400 transition duration-400">
                        <FaFacebookF fontSize="2em" style={{margin: "0 10px"}}></FaFacebookF>
                    </a>
                </div>
            </div>

            <div className="w-full flex justify-center">
                <span className="my-10 border-b border-neutral-400 w-full"></span>
            </div>

            <div className="flex justify-center">
                <p className="px-3 text-white">Copyright 2023 © Training Tips - Todos los derechos reservados</p>
            </div>
        </div>
      </div>
    )
}

export default Footer;