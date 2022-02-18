import Link from "next/link";
// import {FcMenu, FcHome, FcAbout} from' react-icons/fc'
// import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import Logo from "../assets/images/logo1.svg";

const Navbar = () => {
  const [collapse, setcollapse] = useState(true);
  const [show, setShow] = useState(false);
  const myLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className="container-fluid">
      <nav
        className="navbar navbar-expand-md navbar-light bg-light fixed-top"
        id="mainNav"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#page-top">
            <Image
              fill="dark"
              priority
              //loader={myLoader}
              className="d-inline-block align-text-top me-1 img-fluid"
              src={Logo}
              width={90}
              height={40}
              layout="responsive"
              alt="..."
            />
          </a>
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
            <FaBars className="fas ms-1" height={70} width={80}>Menu</FaBars>
          </button>
          <div
            className={
              collapse
                ? "collapse navbar-collapse mt-5"
                : " navbar-collapse collapse show mt-1"
            }
            id="navbarResponsive"
          >
            <ul className="navbar-nav text-uppercase ms-auto mt-1 py-4 py-lg-0">
              <Link
                href="/"
                passHref
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-item"
              >
                <a className="nav-link">Home</a>
              </Link>
              <Link
                href="/#scrollspyHeading1"
                passHref
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-item"
              >
                <a className="nav-link">Services</a>
              </Link>
              <Link href="/search" className="nav-item">
                <a className="nav-link">Search</a>
              </Link>
              <li className="nav-item dropdown">
                <Link
                  href="/#scrollspyHeading2"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <a
                    onClick={() => setShow(!show)}
                    className="nav-link dropdown-toggle dropdown-toggle-split"
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
                    href="/search?purpose=for-rent"
                    className="dropdown-item"
                  >
                    <a className="nav-link">Rent Property</a>
                  </Link>
                  <Link
                    href="/search?purpose=for-sale"
                    className="dropdown-item"
                  >
                    <a className="nav-link">Buy Property</a>
                  </Link>
                </ul>
              </li>
              <Link href="/team" className="nav-item">
                <a className="nav-link">Team</a>
              </Link>
              <Link href="/contact" className="nav-item">
                <a className="nav-link">Contact</a>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
