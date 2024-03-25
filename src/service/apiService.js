import axios from "axios";

async function getDataToHomePage(page) {
  const pageNumber = page ? page : 1;
  const api_key = "0a95b08139be9578a467a7da55a5748f";
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
  const api_key = "0a95b08139be9578a467a7da55a5748f";
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
  const api_key = "0a95b08139be9578a467a7da55a5748f";
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
  const api_key = "0a95b08139be9578a467a7da55a5748f";
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
  const api_key = "0a95b08139be9578a467a7da55a5748f";
  const url = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${api_key}`;
  let data = await axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.error(err));
  let dataFiltered = data.results.filter((e) => e.type == "Trailer");
  return dataFiltered[0].key
}

export {
  getDataToHomePage,
  getDataToSeriesPage,
  getDataToMoviePage,
  getDataByID,
  getTrailerByID,
};
