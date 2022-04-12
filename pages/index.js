import Image from "next/image";
import Link from "next/link";
import { baseUrl, fetchApi } from "../utils/fetchApi";
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
  return (
    <>
      <div
  
      >
        <Services />
        <Properties />
        <AboutUs />
        <Team />
        <Contact />
      </div>
    </>
  );
}
