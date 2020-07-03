import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Cards = (props) => {
  console.log(props.items);
  const [word, setWord] = useState("");
  const [filterDisplay, setFilterDisplay] = useState(props.items);
  const capitalizeWord = (w) => {
    return w.replace(/\b[a-z]/g, (c) => c.toUpperCase());
  };
  const getIdInfo = (arg) => arg.replace(/\D/g, "");

  const handdleChange = (e) => {
    let oldList = props.items.map((item) => {
      return {
        name: item.name,
        title: item.title,
      };
    });
    if (e !== "") {
      let newList = [];
      let emptyList = [];
      setWord(e);
      newList = oldList.filter((item) =>
        item.name.includes(capitalizeWord(word))
      );
      if (newList.length === 0) {
        setFilterDisplay(emptyList);
      } else {
        setFilterDisplay(newList);
      }
    }
    if (e === "") return setFilterDisplay(oldList);
  };
  if (filterDisplay.length === 0) {
    return (
      <div>
        <div className="characters-search-bar mb-5">
          <input
            onChange={(e) => handdleChange(e.target.value)}
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <h1>No hay resultados, prro</h1>
      </div>
    );
  }
  return (
    <div>
      <div className="characters-search-bar mb-5">
        <input
          onChange={(e) => handdleChange(e.target.value)}
          className="form-control"
          type="text"
          placeholder="Buscar"
        />
      </div>
      <div className="card-columns">
        {filterDisplay.map((item, i) => (
          <div key={i} className="card">
            <img
              src={require(`../images/${props.folder}/${
                item.name || item.title
              }.jpg`)}
              className="card-img-top"
              alt={item.name}
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <Link
                className="btn btn-outline-primary btn-block"
                to={`${props.folder}/${getIdInfo(item.url)}`}
              >
                Ver más
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
