import Image from "next/image";
import ShitIcon3 from "../../assets/images/3.svg";
import ShitIcon4 from "../../assets/images/4.svg";
import ShitIcon5 from "../../assets/images/5.svg";
import { AiOutlinePlus , AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Contact } from "../../components/contact/Contact";
import es from "../../locales/es";
import en from "../../locales/en";

const Conciergerie = () => {
  
  
  const scrollToConciergerie = () => {
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  };

  const [showform, setshowform] = useState(false);

  useEffect(() => {
    window.addEventListener("load", scrollToConciergerie);
    return () => {
      window.removeEventListener("load", scrollToConciergerie);
      
    }
  });
  
  const showContactForm = () => {
    
    return(
      <Contact />
    )
    
  }

  const router = useRouter();
  const contentData = router.locale === "es" ? es.conciergerieData : en.conciergerieData;


  return (
    <div className="section" onLoad={scrollToConciergerie}>
      <div className="container">
        <div className="text-center">
          <h1 className=" my-4 text-capitalize" id="conciergerie">
            {router.locale === "es" ? es.conciergerieHeader : en.conciergerieHeader}
          </h1>
        </div>
        <h3 className="text-capitalize concierge-subheading mt-3">
          {router.locale === "es" ? es.conciergerieTitle : en.conciergerieTitle}
        </h3>
        <p className="lead concierge-subheading-text">
         {router.locale === "es" ? es.conciergerieText : en.conciergerieText}
        </p>
      </div>
      <div className="container">
        <div className="row text-center mt-5">
          {contentData.map((item) => {
            return (
              <div className="col-md-4" key={item.id}>
                <span className="fa-stack fa-4x">
                  <Image
                    layout="fill"
                    src={item.icon}
                    alt=""
                    className="svg-inline--fa fa-solid  fa-stack-1x fa-inverse"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="house"
                    role="img"
                  />
                </span>
                <h4 className="my-3 text-hogar2 text-uppercase">
                  {item.title}
                </h4>
                <ul>
                  {item.text.map((text) => {
                    return (
                      <li key={text.id} className="list-unstyled"
                      
                      >
                        <p className="m-0 text-muted text-list">
                          {text.content}
                        </p>
                      </li>
                    );
                  })}
                </ul>

                {item.id === "algomas" && (
                  
                    !showform ?
                    <AiOutlinePlus
                    role="button"
                    onClick={() => {
                      setshowform(!showform)}}
                      className="fs-2"
                      fill="#5ab4ab"
                    />
                    :
                    <AiOutlineMinus 
                    role="button"
                    onClick={() => {
                      setshowform(!showform)}}
                      className="fs-2"
                      fill="#5ab4ab"
                       />
                  
                )}
              </div>
            );
          })}
        </div>
      {showform && showContactForm()
      
}
      </div>
    </div>
  );
};

export default Conciergerie;
