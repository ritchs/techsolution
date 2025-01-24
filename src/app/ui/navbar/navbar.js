import Contactbutton from "./contactButton";

export default function Navbar() {
  const style = {
    marginLeft: "16px",
    marginRight: "16px",
    color: "#025939",
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" style={{ color: "#025939" }} href="#">
          <b>Tech</b> Solutions
        </a>

        <div className="ms-auto d-flex align-items-center">
          <a className="nav-link" href="#" style={style}>
            Empresa
          </a>
          <a className="nav-link" href="#" style={style}>
            Servicios
          </a>
          <Contactbutton></Contactbutton>
        </div>
      </div>
    </nav>
  );
}
