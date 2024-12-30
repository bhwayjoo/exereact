import React from "react";
import "./MenuListItem.css";

export default function MenuListItem(props) {
  return (
    <button
      className="container"
      onClick={() => {
        props.setMatiere(props.matiere);
      }}
    >
      {props.matiere}
    </button>
  );
}
