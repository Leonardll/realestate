import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

 export const Button = ({collapse, setcollapse}) => {
    return (
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
            {collapse ? (
                <FaBars className="fas" height={70} width={80}>
                Menu
              </FaBars>
            ) : (
                <ImCross />
                )}
    </button>
    )
}
