import Link from "next/link";
export const Dropdown = (submenuItems, show, setShow) => {
  return (
    <ul
      className="dropdown-menu  dropdown-menu-start"
      aria-labelledby="navbarDropdownMenuLink"
    >
      {submenuItems.submenuItems.map((subitem) => {
        return (
          <li key={subitem.id}>
            <Link href={subitem.href} passHref className="dropdown-item">
              <a
                onClick={() => {
                  setShow(!show), setcollapse(!collapse);
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
