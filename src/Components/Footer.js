import logo from "../resources/logo_blanco.png"
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa'

function Footer() {
    return (
      <div class="w-full py-20 bg-neutral-800">
        <div className="container m-auto">

            <div className="flex justify-center flex-wrap">
                <img src={logo}></img>
                <div className="flex justify-center w-full">
                    <FaInstagram color="white" fontSize="2em" style={{margin: "0 10px"}}></FaInstagram>
                    <FaFacebookF color="white" fontSize="2em" style={{margin: "0 10px"}}></FaFacebookF>
                    <FaTiktok color="white" fontSize="2em" style={{margin: "0 10px"}}></FaTiktok>
                </div>
            </div>

            <div className="w-full flex justify-center">
                <span className="my-10 border-b border-neutral-400 w-full"></span>
            </div>

            <div className="flex justify-center">
                <p className=" text-white">Copyright 2023 Title Page - Todos los derechos reservados</p>
            </div>
        </div>
      </div>
    )
}

export default Footer;