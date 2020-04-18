import React from "react";
import Text from "../../atoms/Text/index";
import Button from "../../atoms/Button/index";
import Image from "../../atoms/Image/index";

const Card = (props) => {
  return (
    <tr>
      <td>
        <Image src={props.photo}></Image>
      </td>
      <td>
        <Text content={props.name}></Text>
      </td>
      <td>
        <Text content={props.type}></Text>
      </td>
      <td>
        <Text content={props.value}></Text>
      </td>
      <td>
        <Text content={props.status}></Text>
      </td>
      <td>
        <Button content={props.funcao}>{props.children}</Button>
      </td>
    </tr>
  );
};

export default Card;
