import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <h1>name: {props.name}</h1>
      <img src={props.image} alt="character portrait" />
      <p>{props.species}</p>
      <p>{props.gender}</p>
      <p>{props.status}</p>
    </div>
  );
}
