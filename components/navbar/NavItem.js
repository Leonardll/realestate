import Link from "next/link";
import { useState, useEffect, useRef, Fragment } from "react";
import { Dropdown } from "./Dropdown";
import { AiFillCaretDown } from "react-icons/ai";
import React from "react";

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

  return (
    <li  ref={ref} className={item.submenu ? "nav-item dropdown" : "nav-item"}>
      <Link
        key={item.id}
        href={item.href}
        passHref
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
          <a className="nav-link rounded"
           onClick={() => {
             setTimeout(() => {
               
               setcollapse(!collapse)
              }, 1500); 
            }}
          >
            {item.title}
      {item.submenu && (
    <span>
      <AiFillCaretDown
        style={{ width: "1em" }}
        fill="#5ab4ab"
        color="#5ab4ab"
        onClick={() => {
          setShow(!show)
          
          console.log(show);
        }}
        className=" arrow dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown"
        aria-expanded={show ? "true" : "false"}
        id="navbarDropdown"
        role="button"
      />
    </span>
)  
    }
    </a>
      </Link>
      {
    show && (
      <Dropdown
        submenuItems={item.submenuItems}
        collapse={collapse}
        setcollapse={setcollapse}
        show={show}
        setShow={setShow}
      />
    )
}
    </li>
  );
};



   