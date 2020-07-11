const BASE_URL = "https://swapi.dev/api/";

async function callApi(endpoint) {
  const url = BASE_URL + endpoint;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
async function getAllData(endpoint) {
  const data = await callApi(`${endpoint}/?page=${1}`);
  const pages = Math.ceil((data.count - 1) / 10);
  const items = [];
  for (let i = 1; i <= pages; i++) {
    items.push(await callApi(`${endpoint}/?page=${i}`));
  }
  const people = items.reduce(function (accum, obj) {
    return [...accum, ...obj.results];
  }, []);

  return people;
}

async function getAllItems(endpoint, ids) {
  const items = [];
  for (let i = 0; i < ids.length; i++) {
    items.push(await callApi(`${endpoint}/${ids[i].replace(/\D/g, "")}`));
  }
  return items;
}
const api = {
  data: {
    getData(endpoint) {
      console.log(endpoint);
      return getAllData(endpoint);
    },
    getInfoCharacter(id) {
      return callApi(`people/${id}`);
    },
    getInfoNames(endpoint, ids) {
      return getAllItems(endpoint, ids);
    },
    getPlanetInfo(id) {
      return callApi(`planets/${id}`);
    },
  },
};

export default api;
