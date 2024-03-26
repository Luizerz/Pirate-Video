import axios from "axios";

const api_key = import.meta.env.VITE_API_KEY;

async function getDataToHomePage(page) {
  const pageNumber = page ? page : 1;
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=${pageNumber}`;
  let data = await axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
  return data;
}
async function getDataToMoviePage(page) {
  const pageNumber = page ? page : 1;

  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}&page=${pageNumber}`;
  let data = await axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
  return data;
}

async function getDataToSeriesPage(page) {
  const pageNumber = page ? page : 1;

  const url = `https://api.themoviedb.org/3/trending/tv/day?api_key=${api_key}&page=${pageNumber}`;
  let data = await axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
  return data;
}

async function getDataByID(id, type) {
  const itemID = id ? id : 3000;
  const itemType = type ? type : "movie";

  const url = `https://api.themoviedb.org/3/${itemType}/${itemID}?api_key=${api_key}`;
  let data = await axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
  return data;
}

async function getTrailerByID(id, type) {
  const url = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${api_key}`;
  console.log(url);
  let data = await axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
    
  let dataFiltered = data.results.filter((e) => e.type == "Trailer");
  return dataFiltered  ? data.results.pop().key : dataFiltered[0].key
 
}

export {
  getDataToHomePage,
  getDataToSeriesPage,
  getDataToMoviePage,
  getDataByID,
  getTrailerByID,
};
