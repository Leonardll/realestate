import Image from "next/image";
import ShitIcon3 from "../../assets/images/3.svg";
import ShitIcon4 from "../../assets/images/4.svg";
import ShitIcon5 from "../../assets/images/5.svg";

const conciergerieData = [
  {
    id: "es personal",
    title: "es personal",
    icon: ShitIcon3,
    text: [
      {
        id: "NIE",
        content: "tramitar el NIE.",
      },
      {
        id: "contrato",
        content: "asesorarme con el fin de contrato.",
      },
      {
        id: "suministros",
        content: "cambio de suministros.",
      },
      {
        id: "internet",
        content: "contratar internet o línea móvil.",
      },
      {
        id: "mediacion",
        content:
          "copia de contrato. Mediación. Mudanzas (fletes, transportes).",
      },
      {
        id: "personalShopper",
        content: "asesoramiento legal. personal shopper.",
      },
    ],
  },
  {
    id: "hogar",
    title: "es para mi hogar",
    icon: ShitIcon4,
    text: [
      {
        id: "tasación",
        content: "tasación de alquiler o venta",
      },
      {
        id: "impuestos",
        content: "impuestos",
      },
      {
        id: "arquitecto",
        content: "Arquitecto (Cédula, Certificado Energético).",
      },
      {
        id: "gestoria",
        content: "Gestoría (IVA, plusvalía…)",
      },
      {
        id: "seguros",
        content: "seguros",
      },
      {
        id: "gestiones",
        content:
          "gestiones administrativas  (reuniones de comunidad, análisis de actas).",
      },
      {
        id: "llaves",
        content: "copia de llaves.",
      },
      {
        id: "IBI",
        content: "domiciliar el IBI.",
      },
      {
        id: "notarioales",
        content: "poderes notariales.",
      },
      {
        id: "reformas",
        content: "reformas integrales (asesoramiento, presupuestos).",
      },
      {
        id: "interiores.",
        content: "diseño de interiores.",
      },
    ],
  },
  {
    id: "algomas",
    title: "Algo más",
    icon: ShitIcon5,
    text: [
      {
        id: "escribe",
        content: "escribe aquí lo que sea, lo conseguiremos!",
      },
    ],
  },
];
const Conciergerie = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="text-center">
          <h1 className=" my-4 text-capitalize">Conciergerie</h1>
        </div>
        <h3 className="text-capitalize concierge-subheading mt-3">
          ¿QUÉ NECESITAS?
        </h3>
        <p className="lead concierge-subheading-text">
          Aquí verás varias de las gestiones que realizamos, pero si no
          encuentras lo que buscas ¡no te alarmes! haremos lo posible para
          solventarlo. Somos capaces de encontrar el hogar de tus sueños y hasta
          el mejor profesor de Yoga.
        </p>
      </div>
      <div className="container">
        <div className="row text-center mt-5">
          {conciergerieData.map((item) => {
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
                  />
                </span>
                <h4 className="my-3 text-hogar2 text-uppercase">{item.title}</h4>
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Conciergerie;
