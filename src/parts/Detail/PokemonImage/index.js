import React from "react";

import "./index.scss";

export default function PokemonImage({ data }) {
  const types = data.types[0].type.name;

  return (
    <figure className={`pokemon__image ${types}`}>
      <img
        src={data.sprites?.other.dream_world.front_default}
        alt={data.name}
        className="img-contain"
      />
    </figure>
  );
}
