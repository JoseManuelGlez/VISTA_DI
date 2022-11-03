import Card from "./Card";
import "../assets/styles/Agencia.css";
import viaje from "../assets/img/DSC01825.jpg"

function Agencia() {
  const agencia = [
    {
      titulo: "Nombre:",
      input: "text",
    },
    {
      titulo: "Apellido:",
      input: "text",
    },
    {
      titulo: "Numero:",
      input: "tel",
    },
    {
      titulo: "Estado:",
      input: "text",
    },
    {
      titulo: "Tipo de viaje:",
      input: "input",
    },
    {
      titulo: "Fecha:",
      input: "date",
    },
  ];

  return (
    <div className="cuerpo">
      <div className="agencia">
      <div className="menu">
        <p>Indice</p>
        <ul className="indice"><u>aaa</u></ul>
        <ul className="indice"><u>bbb</u></ul>
        <ul className="indice"><u>ccc</u></ul>
      </div>
      <div className="contenido">
        <h1>Soft Travel</h1>
        <p>SoftTravel una agencia de viajes terrestres, aereos y marinos seguro y eficaz!</p>
        <p>Reserva tu viaje y no te pierdas la increíble experiencia con Soft Travel!</p>
        <div className="viaje">
          <img src={viaje} alt="" />
        </div>
      </div>
      </div>
      <div className="cotizacion">
        <h1>Cotizacion</h1>
      <form>
      {agencia.map((agencia, indice) => {
        return (
          <Card
            titulo={agencia.titulo} input={agencia.input} menu={indice.titulo} clase={indice.clase}
          />
        );
      })}
      </form>
      </div>
    </div>
  );
}

export default Agencia;
