import React, { useState, useEffect } from "react";
import axios from "axios";

function PokemonInfo(props) {
  const { pokemonName } = props;
  const [pokemonData, setPokemonData] = useState("");

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`;
        const response = await axios.get(url);
        setPokemonData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("ポケモンの情報を取得できませんでした。", error);
      }
    };
    //↓↓これを入れpokemonNameが書き換えられる度に、fetchPokemonData();を実行しポケモンデータを取得する
    fetchPokemonData();
  }, [pokemonName]);

  //↓↓これを入れないとpokemonDataがない状態で下の名前: {pokemonData.name}等を表示しようとするのでエラーが出る。
  if (!pokemonData) {
    console.log(pokemonData);
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>ポケモンの図鑑:</h2>
      <p>名前: {pokemonData.name}</p>
      <p>高さ: {pokemonData.height}</p>
      <p>重さ: {pokemonData.weight}</p>
      <img src={pokemonData.sprites.front_default} alt="ポケモン" />
    </div>
  );
}

export default PokemonInfo;
