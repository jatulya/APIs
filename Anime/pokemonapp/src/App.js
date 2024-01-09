import './App.css';
import {useState} from 'react'
import Axios from 'axios'

function App() {
  const [pokeName, setPokeName] = useState("");
  const [pokeChosen, setPokeChosen] = useState(false)
  const [poke, setPoke] = useState({ 
    name: "", 
    species: "", 
    imgMale: "",
    imgFemale: "",
    hp: "",
    attack: "",
    defense: "",
    type: ""
  })

  const searchPoke = () => {
    
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(res=>{
     setPoke({
        name: pokeName, 
        species: res.data.species.name, 
        imgMale: res.data.sprites.front_default,
        imgFemale: res.data.sprites.front_female,
        hp: res.data.stats[0].base_stat,
        attack: res.data.stats[1].base_stat,
        defense: res.data.stats[2].base_stat,
        type: res.data.types[0].type.names
     })
     setPokeChosen(true);
    })
    .catch(err=>console.log(err)) 
  }
  
  return (
    <div className="App">
      <div className="title-section">
        <h1>Pokemon Stats</h1>
        <input type='text' 
          onChange={(e) => {
            setPokeName(e.target.value)
          }}>         
        </input>
        <button onClick={searchPoke}>Search Pokemon</button>
      </div>
      
      <div className='Display'>
        { !pokeChosen ? (
          <h3>Enter a pokemon name to begin!</h3>
        ) : (
          <>
            <h1>{poke.name}</h1>
            <img src={poke.imgMale} />
            <h3>Species : {poke.species}</h3>
            <h3>Types</h3>
              <h4>Hp : {poke.hp}</h4>
              <h4>Attack : {poke.attack}</h4>
              <h4>Defense : {poke.defense}</h4>

          </>          
        )
        }
      </div>     
    
    </div>
  );
}

export default App;
