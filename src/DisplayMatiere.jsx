import React from "react";
import "./DispayMatiere.css";

export default function DisplayMatiere(props) {
  return (
    <div className="container">
      <p>Matiere est {props.matiere} </p>
    </div>
  );
}
