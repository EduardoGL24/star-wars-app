import React, { useState } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import "./styles/Cards.scss";

export const Cards = (props) => {
  console.log(props);
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
        id: getIdInfo(item.url),
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
        <div className="cards-search-bar mb-5">
          <input
            onChange={(e) => handdleChange(e.target.value)}
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <h1 className="not-found">No hay resultados</h1>
      </div>
    );
  }
  if (props.moreInfo === true) {
    return (
      <div>
        {filterDisplay.map((item, i) => (
          <div
            className="cards-image-container element-loading"
            id={item.name || item.title}
          >
            <Link to={`/${props.folder}/${item.id || getIdInfo(item.url)}`}>
              <LazyLoad
                debounce={false}
                throttle={250}
                offsetVertical={70}
                onContentVisible={() => {
                  let image = document.getElementById(item.name || item.title);
                  image.classList.remove("element-loading");
                  image.classList.add("element-loaded");
                }}
              >
                <img
                  key={i}
                  src={require(`../images/${props.folder}/${
                    item.name || item.title
                  }.jpg`)}
                  alt=""
                />
              </LazyLoad>
            </Link>
            <p>{item.name || item.title}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <div className="cards-search-bar mb-5">
          <input
            onChange={(e) => handdleChange(e.target.value)}
            className="form-control"
            type="text"
            placeholder="Buscar"
          />
        </div>
        <div className="row">
          {filterDisplay.map((item, i) => (
            <div key={i} className={`${props.classCard} py-2`}>
              <div className="card element-loading" id={i}>
                <LazyLoad
                  debounce={false}
                  throttle={250}
                  offsetVertical={70}
                  onContentVisible={() => {
                    let image = document.getElementById(i);
                    image.classList.remove("element-loading");
                    image.classList.add("element-loaded");
                  }}
                >
                  <img
                    src={require(`../images/${props.folder}/${
                      item.name || item.title
                    }.jpg`)}
                    className="card-img-top"
                    alt={item.name}
                  />
                </LazyLoad>
                <div className="card-body">
                  <h5 className="card-title">{item.name || item.title}</h5>
                  <Link
                    className="btn btn-outline-primary btn-block"
                    to={`${props.folder}/${item.id || getIdInfo(item.url)}`}
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
