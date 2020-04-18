import React, { useState } from "react";
import './index.css'

const ShoppingCart = (props) => {
  const [hidden, setHidden] = useState(true);

  const toggleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <div className="table-cardapio">
      <div className="header" onClick={() => toggleHidden()}>
        Carrinho -
        <span role="img" aria-label="money">
          💰
        </span>
        R$ {props.total}
        <span>{hidden ? "🡣" : "🡡"}</span>
      </div>
      <table cellSpacing="0" className={hidden ? "hidden" : ""}>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Preço</th>
            <th>Status</th>
            <th>Cancelar</th>
          </tr>
        </thead>
        <tbody>{props.children()}</tbody>
      </table>
    </div>
  );
};

export default ShoppingCart;
