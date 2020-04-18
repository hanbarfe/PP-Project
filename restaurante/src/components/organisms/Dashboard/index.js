import React from "react";
import './index.css'

const Dashboard = props => {
  return (
    <div className="table-cardapio">
      <div className="header">Cardápio</div>
      <table cellSpacing="0">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Preço</th>
            <th>Pedir</th>
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
};

export default Dashboard;
