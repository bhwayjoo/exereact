import React from "react";
import MenuListItem from "./MenuListItem";
import "./MenuList.css";

export default function MenuList(props) {
  const Competence = ["chimie", "informatique", "Mathematique"];
  return (
    <div className="containere">
      {Competence.map((matiere) => (
        <MenuListItem matiere={matiere} setMatiere={props.setMatiere} />
      ))}
    </div>
  );
}
