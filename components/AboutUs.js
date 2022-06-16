import { useRouter } from "next/router";
import Script from "next/script";
import es from "../locales/es";
import en from "../locales/en";

export const AboutUs = () => {
  const strSpToSpan = [
    "los concierges inmobiliarios",
    "Te acompañaremos y asesoraremos",
    "te despreocupes de los “tengo que…”",
  ];
  const strEnToSpan = [
    "the real estate concierges",
    "here to guide and advise you",
    "forget about the “I have to’s”",
  ];
  const { aboutUsText1, aboutUsText2, aboutUsText3, aboutUsText4 } = en;
  const router = useRouter();
  const { locale } = router;
  let regex = { t1: /the real estate concierges/i };

  let split = aboutUsText1.split(RegExp(/(\bthe real estate concierges\b)/));
  console.log(aboutUsText1.match(regex.t1));
  {
    /* <Script
    id="fw-bold"
    dangerouslySetInnerHTML={{
      __html: `<span className="fw-bold text-span">${strEnToSpan[0]}</span>`,
    }}
  /> */
  }
  return (
    <div className="section" id="about-us">
      <div className="container">
        <div className="d-flex justify-content-center mt-4">
          <h1 className="my-4 text-capitalize">About Us</h1>
        </div>
        <div className="container pt-3">
          <p className=" text-wrap lead">
            {locale === "es" ? es.aboutUsText1 : aboutUsText1}
          </p>

          <p
            className="lead"
            id="fw-bold"
            //dangerouslySetInnerHTML={{ __html: aboutUsText1 }}
          >
            {
              locale === "es" ? es.aboutUsText2 : aboutUsText2
              // .replace(
              //     regex.t1,
              //     `<span className="fw-bold text-span">${strEnToSpan[0]}</span>`
              //   )
            }
          </p>

          <p className="lead">
            {locale === "es" ? es.aboutUsText3 : aboutUsText3}
            {/* Contamos con más de 10 años de experiencia en el sector y queremos
              ofrecerte un servicio integral inmobiliario. Queremos hacer{" "}
              <span className=" fw-bold text-span"> tu vida más liviana </span>{" "}
              y que{" "} */}
            {/* <span className=" fw-bold text-span">
              te despreocupes de los “tengo que…”
            </span>
            . Podemos asesorarte con reformas, diseño de interiores, decoración,
            gestión de alquileres y valoración de inversiones, entre otros
            servicios. */}
          </p>
          <p className="lead">
            {locale === "es" ? es.aboutUsText4 : aboutUsText4}
          </p>
        </div>
      </div>
    </div>
  );
};
