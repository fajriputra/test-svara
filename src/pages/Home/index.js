import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllPokemon, getSinglePokemon } from "stores/pokemon/actions";
import axios from "helpers/axios";

import Spinner from "components/Spinner";
import PokemonThumbnail from "components/PokemonThumbnail";
import Input from "components/Input";
import Select from "components/Select";

import "./index.scss";

const dataSort = ["Ascending", "Descending"];

export default function Home() {
  const dispatch = useDispatch();

  const [limit] = useState(20);
  const [loading, setLoading] = useState(false);
  const [sortType, setSortType] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSort = (e) => {
    const sorting = e.target.value;

    const sorted = filteredData.sort((a, b) => {
      if (sorting === "Ascending") {
        return a.name > b.name ? 1 : -1;
      } else if (sorting === "Descending") {
        return a.name < b.name ? 1 : -1;
      }
    });
    setSortType(sorting);
    setFilteredData(sorted);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const code = e.keyCode || e.which;

    if (code === 13 && value !== "") {
      dispatch(getSinglePokemon(value))
        .then((res) => {
          setFilteredData([res.value.data]);
        })
        .catch(() => {
          setFilteredData([]);
        });
    }
  };

  const getPokemon = async () => {
    setLoading(true);

    const res = await dispatch(getAllPokemon(filteredData.length, limit));

    const containerData = [];

    for (const item of res.value.data.results) {
      const res = await axios.get(item.url);

      containerData.push(res.data);
    }

    setFilteredData([...filteredData, ...containerData]);

    setLoading(false);
  };

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      getPokemon();
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <section className="container">
      <div className="filter__wrapper">
        <Input onKeyPress={handleSearch} placeholder="Search pokemon here..." />

        <Select
          defaultOption="Sorted by"
          value={sortType}
          onChange={handleSort}
          options={dataSort.map((item) => ({
            value: item,
            label: item,
          }))}
        />
      </div>

      <Link to="/favorite" className="favorite">
        View favorite
      </Link>

      <div className="card">
        {filteredData.length > 0 &&
          filteredData.map((item) => {
            const types = item.types.map((itemType) => itemType.type.name);

            return (
              <Link
                to={`/detail/${item.name}`}
                className="stretched-link"
                key={item.id}
              >
                <PokemonThumbnail
                  className={types[0]}
                  source={item.sprites.other.dream_world.front_default}
                  altImage={item.name}
                  pokemon={item.name}
                  types={types.join(", ")}
                />
              </Link>
            );
          })}
      </div>
      {!loading && !filteredData.length ? (
        <p className="card view-screen text-unavailable">
          Pokemon is not available
        </p>
      ) : null}
      {loading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Spinner />
        </div>
      )}
    </section>
  );
}
