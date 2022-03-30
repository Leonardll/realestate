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
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("click", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [show]);

  console.log(item);
  return (
    <li 
    ref={ref}
    className={item.submenu ? "nav-item dropdown" : "nav-item"}  >
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
                setShow(!show)
                console.log(show)
              
              }}
              className="nav-link rounded dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded={show ? "true" : "false"}
              id="navbarDropdown"
              role="button"
              
              
            >
              {item.title}
            </a>
          {  
           show &&
             <Dropdown
              submenuItems={item.submenuItems}
              collapse={collapse}
              setcollapse={setcollapse}
            
            />
            
          }

              
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
