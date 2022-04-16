import Link from "next/link";
import { useState } from "react";
export const Dropdown =  ({ submenuItems,setcollapse }) => {
 
  return (
    <ul
      className="dropdown-menu  dropdown-menu-start show" 
      aria-labelledby="navbarDropdownMenuLink"
    >
      {submenuItems.map((subitem) => {
        return (
          <Link  key={subitem.id} href={subitem.href} passHref  className="dropdown-item" >
              <a
                onClick={() => {setcollapse(false)}}
                className="nav-link rounded"
              >
                {subitem.title}
              </a>
    </Link>
        );
      })}
    </ul>
  );
};
