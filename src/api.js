const BASE_URL = 'https://swapi.dev/api/';

async function callApi(endpoint) {
    const url = BASE_URL + endpoint;
    const response = await fetch(url);
    const data = await response.json();
  
    return data;
  }

const api = {
    data: {
        people(page){
            return callApi(`people/?page=${page}`);
        }
    }
}

export default api;