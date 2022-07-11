import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Services } from "../components/Services";
import { Contact } from "../components/contact/Contact";
import { AboutUs } from "../components/AboutUs";
import { Team } from "../components/Team";
import Properties from "../components/property";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
const myLoader2 = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <>
      <div>
        <Services />
        <Properties />
        <AboutUs t={t("common")} />
        <Team />
        <Contact />
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "common",
      "conciergerie",
      "realEstate",
    ])),
  },
});
