import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Logo from "../../public/nicoHogar-Scelto_Tavola_disegno_1_1_.svg";
import { Button } from "./Button";
import { NavItem } from "./NavItem";
import Flag from "../../public/spain.svg";
import Flag2 from "../../public/uk.svg";
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
        href: "https://www.idealista.com/pro/unico-hogar/venta-viviendas/",
      },
      {
        id: "rent",
        title: "rent",
        href: "https://www.idealista.com/pro/unico-hogar/alquiler-viviendas/",
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

const Navbar = ({ changeLanguage }) => {
  const router = useRouter();
  const { locale } = router;

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
            ? "navbar active navbar-expand-lg navbar-light bg-transp fixed-top"
            : "navbar navbar-expand-lg navbar-light bg-white fixed-top"
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
                width={90}
                height={35}
                layout="responsive"
                alt="unico-logo"
              />
            </a>
          </Link>
          <Button collapse={collapse} setcollapse={setcollapse} />
          <div
            className={
              collapse
                ? "collapse navbar-collapse"
                : "navbar-collapse collapse show"
            }
            id="navbarResponsive"
          >
            <ul className="navbar-nav align-items-center text-capitalize ms-auto">
              <div className="d-flex">
                <Link
                  href={router.asPath}
                  locale={router.defaultLocale}
                  passHref
                >
                  <Image
                    className="p-2 img-fluid"
                    alt="flag"
                    src={Flag}
                    layout="fixed"
                    //objectFit="cover"
                    height={40}
                    width={40}
                  />
                </Link>
                <Link
                  href={router.asPath}
                  locale={router.locale === "es-ES" ? "en-US" : "es-ES"}
                  passHref
                >
                  <Image
                    className="p-2 img-fluid"
                    alt="flag"
                    src={Flag2}
                    layout="fixed"
                    height={40}
                    width={40}
                  />
                </Link>
              </div>
              {menuItems.map((item) => (
                <NavItem
                  key={item.id}
                  item={item}
                  collapse={collapse}
                  setcollapse={setcollapse}
                />
              ))}

              {/* <select
                onChange={changeLanguage}
                defaultValue={locale}
                className="text-hogar align-items-center shadow-sm text-lg bg-transparent tracking-wide"
              >
                <option className="text-hogar fw-2" value="es-ES">
                  Es
                </option>
                <option className="text-hogar fw-2" value="en-US">
                  En
                </option>
              </select> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
