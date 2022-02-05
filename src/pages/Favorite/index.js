import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { deleteFavorite } from "stores/favorite/actions";

import PokemonThumbnail from "components/PokemonThumbnail";

import "components/PokemonThumbnail/index.scss";

const Favorite = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const favorite = useSelector((state) => state.favorite);

  const handleDeleteFavorite = (data) => {
    if (
      window.confirm(
        `Apakah anda ingin menghapus pokemon ${data.name} dari favorite?`
      )
    ) {
      dispatch(deleteFavorite(data));
    }
  };

  return (
    <section className="container">
      <span className="back" onClick={() => history.goBack()}>
        Back
      </span>
      <h4
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          marginBottom: "3.125rem",
        }}
      >
        Pokemon Favorite
      </h4>
      <div className="card" style={{ cursor: "pointer" }}>
        {favorite.length > 0 ? (
          favorite.map((item) => {
            const types = item.types.map((item) => item.type.name);

            return (
              <div className="stretched-link">
                <PokemonThumbnail
                  onClick={() => handleDeleteFavorite(item)}
                  className={types[0]}
                  source={item.sprites.other.dream_world.front_default}
                  altImage={item.name}
                  pokemon={item.name}
                  types={types.join(", ")}
                />
              </div>
            );
          })
        ) : (
          <p style={{ textAlign: "center" }}>
            Belum menambahkan pokemon favorite
          </p>
        )}
      </div>
    </section>
  );
};

export default Favorite;
