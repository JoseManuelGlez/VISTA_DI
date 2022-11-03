import "../assets/styles/Agencia.css";

function Card({ titulo, input}) {
  return (
    <div>
        <br />
        <label>{titulo}</label><br />
          <input type={input} />
          <br />
          <br />
      </div>
  );

}

export default Card;
