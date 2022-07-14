import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import es from "../locales/es-ES/common.json";
import en from "../locales/en-US/common.json";
import Script from "next/script";

export const AboutUs = ({
  aboutUsText,
  aboutUsText1,
  aboutUsText2,
  aboutUsText3,
}) => {
  let regex = /\[(.*?)\]/g;

  const spannedText = aboutUsText.replace(
    regex,
    `<span class="fw-bold text-span">$1</span>`
  );

  const spannedText1 = aboutUsText1.replace(
    regex,
    `<span class="fw-bold text-span">$1</span>`
  );

  const spannedText2 = aboutUsText2.replace(
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
            <p className="lead">{aboutUsText3}</p>
          </div>
        </div>
      </div>
    </>
  );
};
