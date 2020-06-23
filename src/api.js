const BASE_URL = "https://swapi.dev/api/";

async function callApi(endpoint) {
  const url = BASE_URL + endpoint;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}
async function getAllPeople() {
  const data = await callApi(`people/?page=${1}`);
  const pages = Math.ceil((data.count - 1) / 10);
  const items = [];
  for (let i = 1; i <= pages; i++) {
    items.push(await callApi(`people/?page=${i}`));
  }
  const people = items.reduce(function (accum, obj) {
    return [...accum, ...obj.results];
  }, []);

  return people;
}
const api = {
  data: {
    getCharacters() {
      return getAllPeople();
    },
  },
};

export default api;
