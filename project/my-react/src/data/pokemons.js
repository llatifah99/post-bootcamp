import axios from "axios";

export const getPokemons = (callback) => {
  axios
    .get("https://pokeapi.deno.dev/pokemon?limit=20")
    .then((res) => {
      console.log(res.data);
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
