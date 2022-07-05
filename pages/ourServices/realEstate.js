import Image from "next/image";
import { useEffect } from "react";
import useTranslation from "next-translate/useTranslation";

const RealEstate = () => {
  let { t, i18n, ready } = useTranslation("realEstate", { useSuspense: true });

  const contentData = t("propertyData", { count: 1 }, { returnObjects: true });
  const scrollToConciergerie = () => {
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("load", scrollToConciergerie);
    return () => window.removeEventListener("load", scrollToConciergerie);
  });

  return (
    <div className="section" onLoad={scrollToConciergerie}>
      <div className="container">
        <div className="text-center">
          <h1 className=" my-4 text-capitalize" id="property-management">
            {t("propertyHeader")}
          </h1>
        </div>
        <h3 className="text-capitalize property-subheading mt-3">
          {t("propertyTitle")}
        </h3>
        <p className="lead property-subheading-text">{t("propertyText")}</p>
      </div>
      <div className="container">
        <div className="row text-center mt-5">
          {contentData?.map((item) => {
            return (
              <div className="col-md-4" key={item.id}>
                <span className="fa-stack fa-4x">
                  <Image
                    src={item.icon}
                    alt="icon"
                    className="fw-3 svg-inline--fa  fa-house fa-stack-1x fa-inverse img-fluid"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="house"
                    role="img"
                    height={300}
                    width={300}
                    layout="responsive"
                  />
                </span>
                <h4 className="my-3 text-hogar2 text-uppercase">
                  {item.title}
                </h4>
                <ul className="list-unstyled">
                  {item.text.map((content) => {
                    return (
                      <li key={content.id}>
                        <p className="m-0 text-muted text-list">
                          {content.content}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RealEstate;
