import Contactbutton from "../navbar/contactButton";
function Sectiontwo() {
  return (
    <div className="container-fluid sectionTwo">
      <div className="row">
        <div className="col">
          <h1>¿POR QUÉ NOS NECESITAS?</h1> <br /> <br />
          <p>
            Con nuestra experiencia en consultoría de software, ayudamos a las
            empresas a optimizar sus procesos, modernizar su infraestructura
            tecnológica y desarrollar soluciones personalizadas. Identificamos
            problemas, mitigamos riesgos y diseñamos estrategias alineadas con
            sus objetivos. Además, aseguramos una implementación eficiente y
            transferimos el conocimiento necesario para que puedan gestionar su
            tecnología con confianza.
          </p>
          <br />
          <br />
          <Contactbutton
            name="Contactanos"
            color="white"
            text="black"
          ></Contactbutton>
        </div>
        <div className="col">
          <img src="./sectiontwo.png" className="float-end" alt="image" />
        </div>
      </div>
    </div>
  );
}

export default Sectiontwo;
