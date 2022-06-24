import { useRouter } from "next/router";
import Script from "next/script";
import es from "../locales/es";
import en from "../locales/en";

export const AboutUs = () => {
  const { aboutUsText1, aboutUsText2, aboutUsText3, aboutUsText4 } = en;
  const { aboutUsEsText1, aboutUsEsText2, aboutUsEsText3, aboutUsEsText4 } = es;
  const router = useRouter();
  const { locale } = router;

  let regex = /\[(.*?)\]/g;

  const spannedText =
    locale === "es"
      ? aboutUsEsText1.replace(
          regex,
          `<span class="fw-bold text-span">$1</span>`
        )
      : aboutUsText1.replace(
          regex,
          `<span class="fw-bold text-span">$1</span>`
        );

  const spannedText1 =
    locale === "es"
      ? aboutUsEsText2.replace(
          regex,
          `<span class="fw-bold text-span">$1</span>`
        )
      : aboutUsText2.replace(
          regex,
          `<span class="fw-bold text-span">$1</span>`
        );
  const spannedText2 =
    locale === "es"
      ? aboutUsEsText3.replace(
          regex,
          `<span class="fw-bold text-span">$1</span>`
        )
      : aboutUsText3.replace(
          regex,
          `<span class="fw-bold text-span">$1</span>`
        );

  return (
    <>
      <Script />
      <div className="section" id="about-us">
        <div className="container">
          <div className="d-flex justify-content-center mt-4">
            <h1 className="my-4 text-capitalize">About Us</h1>
          </div>
          <div className="container pt-3">
            <p
              id="p1"
              className=" text-wrap lead"
              dangerouslySetInnerHTML={{
                __html: spannedText,
              }}
            />

            <p
              className="lead"
              dangerouslySetInnerHTML={{
                __html: spannedText1,
              }}
            />

            <p
              className="lead"
              dangerouslySetInnerHTML={{
                __html: spannedText2,
              }}
            />
            <p className="lead">
              {locale === "es" ? aboutUsEsText4 : aboutUsText4}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
