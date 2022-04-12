import Link from "next/link";
import { useState } from "react";
export const Dropdown = (submenuItems,{collapse, setcollapse }) => {
 
 return (
    <ul
      className="dropdown-menu  dropdown-menu-start show" 
      aria-labelledby="navbarDropdownMenuLink"
    >
      {submenuItems.submenuItems.map((subitem) => {
        return (
          <li key={subitem.id} href={subitem.href}>
            <Link href={subitem.href} passHref className="dropdown-item">
              <a
                onClick={() => {
                
                  setcollapse(!collapse)
                }}
                className="nav-link rounded"
              >
                {subitem.title}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
