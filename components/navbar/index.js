  import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Logo from "../../assets/images/UnicoHogar-Scelto_Tavola disegno 1.png";
import { Button } from "./Button";
import { NavItem } from "./NavItem";

export const menuItems = [
  {
    id: "home",
    title: "home",
    href: "/",
    submenu: false,
    submenuItems: [],
  },
  {
    id: "services",
    title: "services",
    href: "/#services",
    submenu: true,
    submenuItems: [
      {
        id: "conciergerie",
        title: "conciergerie",
        href: "/ourServices/conciergerie",
      },
      {
        id: "property-management",
        title: "real estate",
        href: "/ourServices/realEstate",
      },
    ],
  },
  {
    id: "properties",
    title: "properties",
    href: "/#properties",
    submenu: true,
    submenuItems: [
      {
        id: "buy",
        title: "buy",
        href: "https://www.idealista.com/pro/unico-hogar/alquiler-viviendas/",
      },
      {
        id: "rent",
        title: "rent",
        href: "https://www.idealista.com/pro/unico-hogar/venta-viviendas/",
      },
    ],
  },
  {
    id: "about-us",
    title: "about us",
    href: "/#about-us",
    submenu: false,
    submenuItems: [],
  },
  {
    id: "team",
    title: "team",
    href: "/#team",
    submenu: false,
    submenuItems: [],
  },
  {
    id: "contact",
    title: "contact",
    href: "/#contact",
    submenu: false,
    submenuItems: [],
  },
];

 const Navbar = () => {
  const [active, setActive] = useState(false);
  const changeBackground = () => {
    //console.log(window.scrollY, active);
    window.scrollY >= 100 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  });

  const [collapse, setcollapse] = useState(true);

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
                width={80}
                height={25}
                layout="responsive"
                alt="..."
              />
            </a>
          </Link>
          <Button collapse={collapse} setcollapse={setcollapse} />
          <div
            className={
              collapse
                ? "collapse navbar-collapse mb-2"
                : "navbar-collapse collapse show mb-2"
            }
            id="navbarResponsive"
          >
            <ul className="navbar-nav align-items-center text-capitalize ms-auto">
              {menuItems.map((item) => (
                <NavItem
                  key={item.id}
                  item={item}
                  collapse={collapse}
                  setcollapse={setcollapse}
                />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;