import Link from "next/link";
// import {FcMenu, FcHome, FcAbout} from' react-icons/fc'
// import { BsSearch } from "react-icons/bs";
// import {Fikey} from 'react-icons/fi'
import Image from "next/image";
import {useState} from 'react'
import Logo from '../assets/images/logo.jpg'


const Navbar = () => {

    const [collapse, setcollapse] = useState(true);
    const myLoader = ({ src, width, quality }) => {
        return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
      }

    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top">
                <i>
                <Image
                priority 
                //layout="cover"
                //loader={myLoader}
                className="icon"   
                src={Logo}
                width={30}
                height={30}
                alt="..." />
                </i>
                Monec
                </a>
                <button
                onClick={() => setcollapse(!collapse)} 
                className={!collapse ? "navbar-toggler" : "navbar-toggler collapsed"} 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarResponsive" 
                aria-controls="navbarResponsive" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                    <i className="fas fa-bars ms-1">Menu</i>
                </button>
                <div className={collapse ?"collapse navbar-collapse" : " navbar-collapse collapse show"} id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <Link href="/" passHref className="nav-item"><a className="nav-link" >Home</a></Link>
                        <Link href="/search"className="nav-item"><a className="nav-link">Search</a></Link>
                        <Link href="/search?purpose=for-rent" className="nav-item"><a className="nav-link" >Rent Property</a></Link>
                        <Link href="/search?purpose=for-sale" className="nav-item"><a className="nav-link" href="#about">Buy Property</a></Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;
