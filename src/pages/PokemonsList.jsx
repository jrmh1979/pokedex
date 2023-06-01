import { useState, useEffect } from 'react'
import axios from 'axios'
import Pokemon from '../components/Pokemon'
import { changeName, changeNameValue } from '../store/slices/username.slice'
import { useSelector, useDispatch } from 'react-redux'


const PokemonsList = () => {

    const [ pokemonsList, setPokemonsList ] = useState([])
    const username = useSelector( state => state.username )

    useEffect(() => {
        getData()
    }, [])


    const getData = async () => {
        try{
            const resp = await axios.get("https://pokeapi.co/api/v2/pokemon")
            setPokemonsList(resp.data.results)

        } catch(error){
            console.error(error)
        }
    }

    const [locationsResults, setLocationResults] = useState([]);
    const getLocationsFiltered = (searchValue) => {
    axios
      .get(`https://pokeapi.co/api/v2/ability/${searchValue}/`)
      .then((resp) => {
        console.log(resp.data);
        setLocationResults(resp.data.results);
      });
  };

    return (
        <div className="view">

<input
        type="text"
        onChange={(e) => getLocationsFiltered(e.target.value)}
      />
      <select
        name="locations"
        id="locations"
        onChange={(e) => setIdLocation(e.target.value)}
      >
        {locationsResults.map((location) => (
          <option value={location.id}> {location.name} </option>
        ))}
      </select>


            <div className="continer-caption">
            <h1 className="text">Pokedex</h1>
            </div>
            
            <div className="continer-caption"> 
            <h3 className="text">Welcome { username }, here you find your favorite pokemon </h3>
            </div>
            
            
            <div className="container">
                {
                    pokemonsList.map( pokemon => (
                        <Pokemon 
                        key={ pokemon.name }
                        url={ pokemon.url }
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default PokemonsList;