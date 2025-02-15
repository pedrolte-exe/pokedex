'use client'
import axios from "axios";
import { useEffect, useState } from "react";

// get busca
// post coloca 
// quando ter data, significa dados, normalmente APIS
// async faz que todo meu site continue a funcionar enquanto chama e busca a função
// await serve para esperar para cair na variavel

export default function Home() {

  const [pokemons, alteraPokemons] = useState([])
  const [pesquisa, alteraPesquisa] = useState("")

  const [erroPesquisa, alteraErroPesquisa] = useState(false)

  async function busca(){

    try{
      const response = await axios.get ("https://pokeapi.co/api/v2/pokemon/"+pesquisa)
 
         const data = response.data;
         alteraPokemons([data])
         alteraErroPesquisa(false)

    }catch(e){
      alteraErroPesquisa(true)
    }
  }

  async function buscaTodos(){
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/")
    console.log(response);
    const data = response.data.results;
    alteraPokemons(data)
  }

  useEffect( ()=> {
    buscaTodos();
  }, [] )

  // function buscaTodos(){ } para o projeto
  

  return (
    <div>
      <h1> Pokedex</h1>

      <p> Digite o nome de um pokemon</p>
      <input onChange={(e)=> alteraPesquisa(e.target.value) }></input>
      <br/>
      <button onClick={()=>busca()}>Pesquisar</button>
      {erroPesquisa == true && <p className="text-red-500" > Caracteres inválidos </p>}

      <hr/>

      {
        pokemons == 0 ?
          <p>Carregando pokedex</p>
          :
        pokemons.map( (i, index) =>
          <div className="flex gap-10 flex-wrap">
            <h2>{i.name}</h2> 
            <p><strong>ID:</strong>{ i.id ? i.id : index+1}</p>
            <img src= {"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/"+(  i.id ? i.id : index+1)+".gif"}/>
          </div>
        ) 
      }

    </div>
  );
}
