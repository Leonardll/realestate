import Image from "next/image";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Contact } from "../../components/contact/Contact";
import es from "../../locales/es-ES/conciergerie.json";
import en from "../../locales/en-US/conciergerie.json";
import Icon1 from "/public/1.svg";
import Icon2 from "/public/2.svg";
import Icon3 from "/public/3.svg";

const Conciergerie = () => {
  let { locale } = useRouter();
  let t = locale === "es-ES" ? es : en;
  // const { t } = useTranslation(locale, "conciergerie");

  let myIcons = [Icon1, Icon2, Icon3];

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

  const contentData = t.conciergerieData;

  return (
    <div className="section" onLoad={scrollToConciergerie}>
      <div className="container">
        <div className="text-center">
          <h1 className=" my-4 text-capitalize" id="conciergerie">
            {t.conciergerieHeader}
          </h1>
        </div>
        <h3 className="text-capitalize concierge-subheading mt-3">
          {t.conciergerieTitle}
        </h3>
        <p className="lead concierge-subheading-text">{t.conciergerieText}</p>
      </div>
      <div className="container">
        <div className="row text-center mt-5">
          {contentData?.map((item, index) => {
            return (
              <div className="col-md-4" key={index}>
                <span className="fa-stack fa-4x">
                  <Image
                    layout="responsive"
                    src={myIcons[index]}
                    alt="icons"
                    className="svg-inline--fa fa-solid  fa-stack-1x fa-inverse img-fluid"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="house"
                    role="img"
                    objectFit="cover"
                    height={300}
                    width={300}
                    //loader={myLoader}
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

// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ["conciergerie"])),
//   },
// });
