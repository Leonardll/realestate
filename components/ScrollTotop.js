import { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";

const  ScrollToTop =  ()  =>  {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        console.log(window.scrollY)
        window.scrollY >= 300 ?
        setIsVisible(true) :

        setIsVisible(false)
        console.log(window.scrollY)      
    };
    
    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility,{passive: true});
        return () => window.removeEventListener('scroll', toggleVisibility);
        

    });
    return (
         <div className="fixed-bottom mx-1 bottom-2 end-2">
             
            <button 
            type="button" 
            onClick={ () => scrollToTop()} 
            className={isVisible ? " scrolltop  opacity-75 btn btn-dark btn-floating btn-lg": " scrolltop  opacity-0 btn btn-dark btn-floating btn-lg"}
            > 
            <BiArrowFromBottom />
            </button>
        </div>
    )
}

export default ScrollToTop;