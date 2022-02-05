import React from "react";
import Label from "../Label";

import "./index.scss";

export default function Description({ data }) {
  const types = data.types?.map((item) => item.type.name.split()).join(", ");

  const abilities = data.abilities
    ?.map((item) => item.ability.name.split())
    .join(", ");

  return (
    <div className="pokemon__label">
      <div className="pokemon__label--content">
        <div className="left__content">
          <Label title="Height" value={data.height} />
          <Label title="Weight" value={data.weight} />
          <Label title="Types" value={types} />
        </div>
        <div className="right__content">
          <Label title="Abilities" value={abilities} />
          <Label title="Experience" value={data.base_experience} />
        </div>
      </div>
    </div>
  );
}
