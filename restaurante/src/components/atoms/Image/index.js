import React from "react";
import "./index.css";

const Image = (props) => {
  return (
    <img
      src={process.env.PUBLIC_URL + '/images/' + `${props.src}`}
      alt="Imagem da bebida"
    ></img>
  );
};

export default Image;
