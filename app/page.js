'use client'
import axios from "axios";
import { useState } from "react";

// get busca
// post coloca 
// quando ter data, significa dados, normalmente APIS
// async faz que todo meu site continue a funcionar enquanto chama e busca a função
// await serve para esperar para cair na variavel

export default function Home() {

  const [pokemons, alteraPokemons] = useState([])
  const [pesquisa, alteraPesquisa] = useState("")

  async function busca(){
     const response = await axios.get ("https://pokeapi.co/api/v2/pokemon/lugia")
     const data = response.data;
     console.log(data);
  }

  // function buscaTodos(){ } para o projeto
  


  return (
    <div>
      <h1> Pokedex</h1>

      <p> Digite o nome de um pokemon</p>
      <input></input>
      <br/>
      <button onClick={()=>busca()}>Pesquisar</button>

      <hr/>

      <h2>Nome</h2>
      <p><strong>ID:</strong>??</p>
      <img src=""/>
    </div>
  );
}
