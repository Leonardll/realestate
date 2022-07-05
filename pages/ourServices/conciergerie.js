import Image from "next/image";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import { Contact } from "../../components/contact/Contact";

const Conciergerie = () => {
  let { t, i18n } = useTranslation("conciergerie", { useSuspense: false });

  const scrollToConciergerie = () => {
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  };

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const [showform, setshowform] = useState(false);

  useEffect(() => {
    window.addEventListener("load", scrollToConciergerie);
    return () => {
      window.removeEventListener("load", scrollToConciergerie);
    };
  });

  const showContactForm = () => {
    return <Contact />;
  };

  const contentData = t(
    "conciergerieData",
    { count: 1 },
    {
      returnObjects: true,
    }
  );

  return (
    <div className="section" onLoad={scrollToConciergerie}>
      <div className="container">
        <div className="text-center">
          <h1 className=" my-4 text-capitalize" id="conciergerie">
            {t("conciergerieHeader")}
          </h1>
        </div>
        <h3 className="text-capitalize concierge-subheading mt-3">
          {t("conciergerieTitle")}
        </h3>
        <p className="lead concierge-subheading-text">
          {t("conciergerieText")}
        </p>
      </div>
      <div className="container">
        <div className="row text-center mt-5">
          {contentData?.map((item) => {
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
                    loader={myLoader}
                  />
                </span>
                <h4 className="my-3 text-hogar2 text-uppercase">
                  {item.title}
                </h4>
                <ul>
                  {item.text.map((text) => {
                    return (
                      <li key={text.id} className="list-unstyled">
                        <p className="m-0 text-muted text-list">
                          {text.content}
                        </p>
                      </li>
                    );
                  })}
                </ul>

                {item.id === "algomas" &&
                  (!showform ? (
                    <AiOutlinePlus
                      role="button"
                      onClick={() => {
                        setshowform(!showform);
                      }}
                      className="fs-2"
                      fill="#5ab4ab"
                    />
                  ) : (
                    <AiOutlineMinus
                      role="button"
                      onClick={() => {
                        setshowform(!showform);
                      }}
                      className="fs-2"
                      fill="#5ab4ab"
                    />
                  ))}
                {item.id === "else" &&
                  (!showform ? (
                    <AiOutlinePlus
                      role="button"
                      onClick={() => {
                        setshowform(!showform);
                      }}
                      className="fs-2"
                      fill="#5ab4ab"
                    />
                  ) : (
                    <AiOutlineMinus
                      role="button"
                      onClick={() => {
                        setshowform(!showform);
                      }}
                      className="fs-2"
                      fill="#5ab4ab"
                    />
                  ))}
              </div>
            );
          })}
        </div>
        {showform && showContactForm()}
      </div>
    </div>
  );
};

export default Conciergerie;
