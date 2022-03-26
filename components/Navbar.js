import Link from "next/link";
// import {FcMenu, FcHome, FcAbout} from' react-icons/fc'
// import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Image from "next/image";
import { useState, useEffect } from "react";
import Logo from "../assets/images/UnicoHogarTrs.png";

// const menuItems = [
//   {
//     id:"home",
//    title:"home",
//    href:"/",
//    submenu: false,},
//   {
//    id:"services",
//    title:"services",
//    href:"/#services",
//    submenu:true,
//    submenuItems: [
//      {
//       id:"conciergerie",
//       title:"conciergerie",
//       href:"/ourServices/conciergerie"
//     },
//     {
//       id:"property management",
//       title:"property management",
//       href:"/ourServices/conciergerie"
//     }
//    ]},
//   {id:"properties",
//    title:"properties",
//    href:"/",
//    submenu:,},
//   {id:,
//    title:,
//    href:,
//    submenu:,},
//   {id:,
//    title:,
//    href:,
//    submenu:,},
//   {id:,
//    title:,
//    href:,
//    submenu:,},
// ]
const Navbar = () => {
  const [collapse, setcollapse] = useState(true);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const [active, setActive] = useState(false);
  const myLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
  };
  const changeBackground = () => {
    //console.log(window.scrollY, active);
    window.scrollY >= 100 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  });

  return (
    <div className="container-fluid">
      <nav
        className={
          !active
            ? "navbar active navbar-expand-md navbar-light bg-transp fixed-top"
            : "navbar navbar-expand-md navbar-light bg-white fixed-top"
        }
        id="mainNav"
      >
        <div className="container-fluid">
          <Link href="/" passHref>
            <a className="navbar-brand display-1">
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
          >
            {collapse ? (
              <FaBars className="fas" height={70} width={80}>
                Menu
              </FaBars>
            ) : (
              <ImCross />
            )}
          </button>
          <div
            className={
              collapse
                ? "collapse navbar-collapse mb-2"
                : "navbar-collapse collapse show mb-2"
            }
            id="navbarResponsive"
          >
            <ul className="navbar-nav align-items-center text-capitalize ms-auto">
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
                  onClick={() => {
                    setcollapse(!collapse);
                  }}
                  className="nav-link rounded"
                >
                  Home
                </a>
              </Link>
              <li className="nav-item dropdown">

              <Link
                href="/#services"
                passHref
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                //className="nav-item"
                >
                <a
                  onClick={() => {
                    setShow1(!show1), show === true ? setShow(false) : null
                  }}
                  className="nav-link rounded dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="navbarDropdown"
                  role="button"
                  >
                  Services
                </a>
              </Link>
              <ul
                  className={
                    !show1
                      ? "dropdown-menu service"
                      : "dropdown-menu service dropdown-menu-start show"
                  }
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link
                    href={'/ourServices/conciergerie'}
                    passHref
                    className="dropdown-item"
                  >
                    <a
                      onClick={() => {
                        setShow1(!show1) ,setcollapse(!collapse)
                      }}
                      className="nav-link rounded"
                    >
                      Conciergerie
                    </a>
                  </Link>
                  <Link
                    href={'/ourServices/property-management'}
                    passHref
                    className="dropdown-item"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <a
                      onClick={() => {
                        setShow1(!show1) , setcollapse(!collapse)
                      }}
                      className="nav-link rounded"
                    >
                      Property Management
                    </a>
                  </Link>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  href="/#properties"
                  passHref
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <a
                    onClick={() => { setShow(!show), show1 === true ? setShow1(false) : null}}
                    className="nav-link rounded dropdown-toggle  dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    id="navbarDropdown"
                    role="button"
                  >
                    Properties
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
                    href="https://www.idealista.com/pro/unico-hogar/alquiler-viviendas/"
                    passHref
                    className="dropdown-item"
                  >
                    <a
                      onClick={() => {
                        setShow(!show) ,setcollapse(!collapse)
                      }}
                      className="nav-link rounded"
                    >
                      Rent Property
                    </a>
                  </Link>
                  <Link
                    href="https://www.idealista.com/pro/unico-hogar/venta-viviendas/"
                    passHref
                    className="dropdown-item"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <a
                      onClick={() => {
                        setShow(!show) , setcollapse(!collapse)
                      }}
                      className="nav-link rounded"
                    >
                      Buy Property
                    </a>
                  </Link>
                </ul>
              </li>
              <Link
                href="/#about-us"
                passHref
                className="nav-item"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <a
                  onClick={() => {
                    setcollapse(!collapse);
                  }}
                  className="nav-link rounded"
                >
                 About Us
                </a>
              </Link>
              <Link 
              href="/#team" 
              passHref 
              className="nav-item">
                <a
                  onClick={() => {
                    setcollapse(!collapse);
                  }}
                  className="nav-link rounded"
                >
                  Team
                </a>
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
                  onClick={() => {
                    setcollapse(!collapse);
                  }}
                  className="nav-link rounded"
                >
                  Contact
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
