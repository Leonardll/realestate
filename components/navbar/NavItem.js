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
    <li ref={ref} className={item.submenu ? "nav-item dropdown" : "nav-item"}>
      <Link
        key={item.id}
        href={item.href}
        //passHref
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {item.submenu ? (
          <a className="nav-link rounded">
            {item.title}
            <span>
              <AiFillCaretDown
                style={{ width: "1em" }}
                fill="#5ab4ab"
                color="#5ab4ab"
                onClick={() => {
                  setShow(!show);
                  console.log(show);
                }}
                className=" arrow dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded={show ? "true" : "false"}
                id="navbarDropdown"
                role="button"
              />
            </span>

            {show && (
              <Dropdown
                submenuItems={item.submenuItems}
                collapse={collapse}
                setcollapse={setcollapse}
              />
            )}
          </a>
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
