import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getSinglePokemon } from "stores/pokemon/actions";
import { addFavorite } from "stores/favorite/actions";

import Spinner from "components/Spinner";
import Description from "parts/Detail/Description";
import PokemonImage from "parts/Detail/PokemonImage";
import Stats from "parts/Detail/Stats";

import "./index.scss";

export default function Detail() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { name } = useParams();

  const [loading, setLoading] = useState(false);
  const [detailPokemon, setDetailPokemon] = useState({});

  const favorite = useSelector((state) => state.favorite);
  const cekFavorite = favorite
    .map((item) => item.id)
    .find((itemId) => itemId === detailPokemon.id);

  useEffect(() => {
    setLoading(true);
    dispatch(getSinglePokemon(name))
      .then((res) => {
        setDetailPokemon(res.value.data);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading || !detailPokemon.name) {
    return (
      <div className="loading__spinners">
        <Spinner />
      </div>
    );
  }

  const handleFavorite = () => {
    dispatch(addFavorite(detailPokemon));
    alert(`Pokemon ${detailPokemon.name} berhasil ditambahkan`);
  };

  return (
    <section className={`pokemon`}>
      <div className="container">
        <span className="back" onClick={() => history.goBack()}>
          Back
        </span>
        <h3 className="pokemon__name">
          {detailPokemon.name}{" "}
          <span className="pokemon__number">#{detailPokemon.id}</span>
        </h3>

        <div className="pokemon__profile">
          <div className="left__column">
            <PokemonImage data={detailPokemon} />
          </div>
          <div className="right__column">
            <Description data={detailPokemon} />
            <Stats data={detailPokemon} />
            <button
              onClick={handleFavorite}
              className={`btn-favorite ${cekFavorite && "disabled"}`}
              disabled={cekFavorite}
            >
              Add to favorite
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
