import React from "react";
import './index.css'

const Image = props => {
  return <img src={require(`/usr/src/uploads/${props.src}`)} alt="Imagem da bebida"></img>;
};

export default Image;