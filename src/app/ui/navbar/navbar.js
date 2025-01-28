import Contactbutton from "./contactButton";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand fontNavLogo" href="#">
          <b>Tech</b> Solutions
        </a>

        <div className="ms-auto d-flex align-items-center">
          <a className="nav-link fontNavLinks" href="#">
            Empresa
          </a>
          <a className="nav-link fontNavLinks" href="#">
            Servicios
          </a>
          <Contactbutton
            name="Contacto"
            color="#2DA17D"
            text="white"
          ></Contactbutton>
        </div>
      </div>
    </nav>
  );
}
