 import Image from 'next/image'
 import ShitIcon from '../../assets/images/1.svg'
 import ShitIcon2 from '../../assets/images/2.svg'
 import ShitIcon3 from '../../assets/images/3.svg'
 import { useEffect,useState } from 'react'
 import { useRouter } from "next/router";
 import es from "../../locales/es";
 import en from "../../locales/en";


const RealEstate = () => {
 
  const scrollToConciergerie = () => {
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  };
  const [showform, setshowform] = useState(false);

  const router = useRouter();
  const contentData = router.locale === "es" ? es.propertyData : en.propertyData;
  useEffect(() => {
    window.addEventListener("load", scrollToConciergerie);
    return () => window.removeEventListener("load", scrollToConciergerie);
  });

    return (
        <div className="section" onLoad={scrollToConciergerie}>
        <div className="container">
        <div className="text-center">
        <h1 className=" my-4 text-capitalize" id='property-management'>{router.locale === "es" ? es.propertyHeader : en.propertyHeader}</h1>
        </div>
        <h3 className="text-capitalize property-subheading mt-3">{router.locale === "es" ? es.propertyTitle : en.propertyTitle}</h3>
        <p className="lead property-subheading-text">{router.locale === "es" ? es.propertyText : en.propertyText}</p>    
        </div>
        <div className="container">
            <div className="row text-center mt-5">
                {
                    contentData.map((item) => {
                        return (
                            <div className="col-md-4" key={item.id}>
                            <span className="fa-stack fa-4x">
                                <Image src={item.icon} alt='' className="fw-3 svg-inline--fa  fa-house fa-stack-1x fa-inverse" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="house" role="img" />
                            </span>
                            <h4 className="my-3 text-hogar2 text-uppercase">{item.title}</h4>
                            <ul className='list-unstyled'>
                                {
                                item.text.map((content)=> {
                                    return (
                                <li key={content.id}>
                                    <p className="m-0 text-muted text-list">{content.content}</p>
                                </li>
                                    )
                                })
                                }
                            </ul>
                        </div>
                        )
                    })
                }
          

            </div>
        </div>
    </div>
)
    
}

export default RealEstate;