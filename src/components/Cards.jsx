import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";

export const Cards = (props) => {
  const [word, setWord] = useState("");
  const [filterDisplay, setFilterDisplay] = useState(props.items);
  const handdleChange = (e) => {
    let oldList = props.items.map((item) => {
      return {
        name: item.name.replace(/\b[a-z]/g, (c) => c.toUpperCase()),
        image: item.name,
      };
    });
    if (e !== "") {
      let newList = [];
      setWord(e);
      newList = oldList.filter((item) =>
        item.name.includes(word.replace(/\b[a-z]/g, (c) => c.toUpperCase()))
      );
      setFilterDisplay(newList);
    }
  };
  return (
    <div>
      <SearchBar
        value={word}
        handleChange={(e) => handdleChange(e.target.value)}
      />
      <div className="card-columns">
        {filterDisplay.map((item, i) => (
          <div key={i} className="card">
            <img
              src={require(`../images/${props.folder}/${item.image}.jpg`)}
              className="card-img-top"
              alt={item.name}
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <Link
                className="btn btn-outline-primary btn-block"
                to={`${props.folder}/${item.name.replace(/ /g, "")}`}
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
