 import Image from 'next/image'
 import ShitIcon from '../../assets/images/1.svg'
 import ShitIcon2 from '../../assets/images/2.svg'
 import ShitIcon3 from '../../assets/images/3.svg'
 import { useEffect,useState } from 'react'

const propertyData = [
    {
        id: "VENDER",
        title: "VENDER MI PISO",
        icon: ShitIcon,
        text: [
          {
            id: "tasacion",
            content: "Tasación gratuita y valoración de mercado.",
          },
          {
            id: "Fotografías",
            content: "Fotografías y comercialización.",
          },
          {
            id: "rentabilidad",
            content: "Cálculo de rentabilidad.",
          },
          {
            id: "fiscal",
            content: "Asesoramiento fiscal.",
          },

        ],
      },
    {
        id: "ALQUILAR",
        title: "ALQUILAR MI PISO",
        icon: ShitIcon2,
        text: [
          {
            id: "ideal",
            content: "Buscamos tu inquilino ideal.",
          },
          {
            id: "contrato",
            content: "asesorarme con el fin de contrato.",
          },
          {
            id: "legal.",
            content: "Asesoramiento legal.",
          },
          {
            id: "alquileres",
            content: "Gestión de alquileres.",
          },

        ],
      },
    {
        id: "PERSONALSHOPPER",
        title: "PERSONAL SHOPPER",
        icon: ShitIcon3,
        text: [
          {
            id: "pisoideal",
            content: "Te acompañamos en la búsqueda de tu piso ideal en todo el mercado de Barcelona",
          },
          {
            id: " diseñodeinteriores",
            content: "Te asesoraremos en obras, reformas o diseño de interiores para que quede de ensueño",
          },

        ],
      },
]
const RealEstate = () => {
 
  const scrollToConciergerie = () => {
    window.scrollTo({
      top: 1200,
      behavior: "smooth",
    });
  };
  const [showform, setshowform] = useState(false);
  useEffect(() => {
    window.addEventListener("load", scrollToConciergerie);
    return () => window.removeEventListener("load", scrollToConciergerie);
  });
  // const scrollToProperty = () => {
  //   window.scrollTo({
  //     top: 1200,
  //     behavior: "smooth",
  //   });
  // }

  // useEffect(() => {
  //   window.addEventListener("load", scrollToProperty);
  //   return () => window.removeEventListener("load", scrollToProperty);
  // });
    return (
        <div className="section" onLoad={scrollToConciergerie}>
        <div className="container">
        <div className="text-center">
        <h1 className=" my-4 text-capitalize" id='property-management'>Real Estate</h1>
        </div>
        <h3 className="text-capitalize property-subheading mt-3">¿QUÉ BUSCAS?</h3>
        <p className="lead property-subheading-text">Estas son las gestiones más comunes en las que te podemos ayudar, pero recuerda, nosotros como conserje inmobiliarios te ofrecemos un servicio mucho más amplio del que tenemos aquí detallado. Si no ves reﬂejado lo que necesitas, ¡no dudes en contactarnos!</p>    
        </div>
        <div className="container">
            <div className="row text-center mt-5">
                {
                    propertyData.map((item) => {
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