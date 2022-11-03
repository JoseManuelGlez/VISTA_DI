import "../assets/styles/Header.css";
import logo from "../assets/img/logo.jpg"

function Header() {
  return (
  <header>
    <div className="header">
      <div className="divIcono">
        <div className="logo">
          <img src={logo} alt="logo" />
          </div>
        <label className="label">TTG</label>
      </div>
      <div className="barra">
        <label className="barraLbl">Reportar</label>
        <label className="barraLbl">Explorar</label>
        <label className="barraLbl">Comentario</label>
        <label className="barraLbl">Soporte</label>
        <label className="barraLbl">Ayuda</label>
      </div>
    </div>
    </header>
  );
}

export default Header;
