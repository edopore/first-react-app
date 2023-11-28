import React from "react";
import "../styles/testimonio.css";

function Testimonio(props) {
  console.log(props);
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../images/${props.image}.jpg`)}
        alt={`Foto de ${props.nombre}`}
        width="194"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-pais-testimonio">
          <span className="negrita">{props.nombre}</span> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <span className="negrita">{props.empresa}</span>
        </p>
        <p className="parrafo-testimonio">"{props.descripcion}"</p>
      </div>
    </div>
  );
}

export default Testimonio;
