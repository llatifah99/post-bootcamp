import React, { useState, useEffect } from "react";
import { getPokemons } from "../data/pokemons";

const Card = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemons((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((pokemon) => {
    const regex = new RegExp(searchTerm, "gi");
    return pokemon.name.match(regex);
  });

  return (
    <div className="py-6 flex flex-col items-center">
      <input
        type="text"
        placeholder="find pokemon"
        value={searchTerm}
        onChange={handleChange}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
      />
      {loading ? (
        <div className="text-center text-gray-600 font-semibold flex justify-center items-center h-screen">
          Loading...
        </div>
      ) : (
        <div className="p-1 flex flex-wrap items-center justify-center">
          {filteredData.length === 0 ? (
            <div className="text-center text-gray-600 font-semibold flex justify-center items-center h-screen">
              Pokemon not found
            </div>
          ) : (
            filteredData.map((pokemon) => (
              <div
                key={pokemon.id}
                className="flex-shrink-0 m-6 relative overflow-hidden bg-amber-300 rounded-lg max-w-xs shadow-lg group"
              >
                <div className="relative pt-10 px-10 flex items-center justify-center">
                  <img
                    className="relative w-40"
                    src={pokemon.imageUrl}
                    alt={pokemon.name}
                  />
                </div>
                <div className="relative text-black px-6 pb-6 mt-6">
                  <span className="block  font-semibold  text-3xl pb-3">
                    {pokemon.name}
                  </span>
                  <div
                    className={
                      pokemon.types.length === 1
                        ? "flex justify-end"
                        : "flex justify-between"
                    }
                  >
                    {pokemon.types.map((type, index) => (
                      <span
                        key={index}
                        className="block bg-white rounded-full text-slate-800 text-xs font-bold px-6 py-4 leading-none flex items-center"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-6 text-lg pb-6 text-center text-slate-800">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-0 left-0 right-0 bg-white p-6 rounded-b-lg">
                    {pokemon.description}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
