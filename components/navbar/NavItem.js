import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Dropdown } from "./Dropdown";

export const NavItem = ({ item, collapse, setcollapse }) => {
  const [show, setShow] = useState(false);
  let ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (show && ref.current && !ref.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("click", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("click", handler);
    };
  }, [show]);
  
  console.log(item);
  return (
    <li className={item.submenu ? "nav-item dropdown" : "nav-item"} ref={ref}>
      <Link
        key={item.id}
        href={item.href}
        passHref
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {item.submenu ? (
          <>
            <a
              onClick={() => {
                setShow((prev) => !prev);
              }}
              className="nav-link rounded dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded={show ? "true" : "false"}
              id="navbarDropdown"
              role="button"
            >
              {item.title}
            </a>
            <Dropdown
              submenuItems={item.submenuItems}
              show={show}
              setShow={setShow}
              collapse={collapse}
              setcollapse={setcollapse}
            />
          </>
        ) : (
          <a
            onClick={() => {
              setcollapse(!collapse);
            }}
            className="nav-link rounded"
          >
            {item.title}
          </a>
        )}
      </Link>
    </li>
  );
};
