import Link from "next/link";
// import {FcMenu, FcHome, FcAbout} from' react-icons/fc'
// import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im"
import Image from "next/image";
import { useState, useEffect } from "react";
import Logo from "../assets/images/UnicoHogarTrs.png";

const Navbar = () => {
  const [collapse, setcollapse] = useState(true);
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false)
  const myLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
  };
  const changeBackground = () => {
    //console.log(window.scrollY, active);
      window.scrollY >= 100 ? setActive(true)  : setActive(false)
    }
  useEffect(() => {
    
        window.addEventListener('scroll',changeBackground)
        return () => window.removeEventListener("scroll", changeBackground);
      })
  
     
  return (
    <div className="container-fluid">
      <nav
        className={!active ? "navbar active navbar-expand-md navbar-light bg-transp fixed-top" : "navbar navbar-expand-md navbar-light bg-white fixed-top"}
        id="mainNav"
      >
        <div className="container-fluid">
          <Link href="/" passHref>
          <a className="navbar-brand fs-1" >
            <Image
              priority
              //loader={myLoader}
              className="d-inline-block align-text-top me-1 img-fluid"
              src={Logo}
              width={70}
              height={25}
              layout="responsive"
              alt="..."
              />
          </a>
            </Link>
          <button
            onClick={() => setcollapse(!collapse)}
            className={
              !collapse ? "navbar-toggler" : "navbar-toggler collapsed"
            }
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >{ collapse ?
            <FaBars className="fas" height={70} width={80}>Menu</FaBars> :
            <ImCross />
            }
          </button>
          <div
            
            className={
              collapse
                ? "collapse navbar-collapse"
                : " navbar-collapse collapse show"
            }
            id="navbarResponsive"
          >
            <ul className="navbar-nav align-items-center text-uppercase ms-auto">
              <Link
                href="/"
                passHref
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-item"
              >
                <a 
                onClick={ () => { setcollapse(!collapse) } }
                className="nav-link rounded">Home</a>
              </Link>
              <Link
                href="/#services"
                passHref
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-item"
              >
                <a 
                onClick={ () => { setcollapse(!collapse) } }
                className="nav-link rounded">Services</a>
              </Link>
              <Link 
              href="/search" 
              className="nav-item">
                <a 
                onClick={ () => { setcollapse(!collapse) } }
                className="nav-link rounded">Search</a>
              </Link>
              <li className="nav-item dropdown">
                <Link
                  href="/#property"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <a
                   
                    onClick={() => setShow(!show)}
                    className="nav-link rounded dropdown-toggle  dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    id="navbarDropdow"
                    role="button"
                  >
                    Property
                  </a>
                </Link>
                <ul
                  className={
                    !show
                      ? "dropdown-menu"
                      : "dropdown-menu dropdown-menu-start show"
                  }
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link
                    
                    href="/search?operationType=rent"
                    className="dropdown-item"
                  >
                    <a 
                    onClick={ () => { setcollapse(!collapse) } }
                    className="nav-link rounded">Rent Property</a>
                  </Link>
                  <Link
                  
                    href="/search?operationType=sale"
                    className="dropdown-item"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <a 
                    onClick={ () => { setcollapse(!collapse) } }
                    className="nav-link rounded">Buy Property</a>
                  </Link>
                </ul>
              </li>
              <Link
              
              href="/#team"
              passHref
              className="nav-item"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
                <a 
                onClick={ () => { setcollapse(!collapse) } }
                className="nav-link rounded">Team</a>
              </Link>
              <Link 
             
              href="/#contact" 
              passHref
              className="nav-item"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
                <a 
                onClick={ () => { setcollapse(!collapse) } }
                className="nav-link rounded">Contact</a>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
