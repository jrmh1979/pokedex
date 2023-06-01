import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Pokemon = ({ url }) => {

    const [ data, setData ] = useState({})
    
    useEffect(() => {
        getPokemonDetail()
    }, [])

    const getPokemonDetail = async () => {
        try{
            const resp = await axios.get( url )
            setData(resp.data)

        }catch(error){
            console.error( error )
        }
    }

    return (
        <Link to={`/pokemons/${data.id}`}>
            <div className={`pokemon-card`}>
                <div className="card-divison">
                    <div className="card-central">
                        <img src={data.sprites?.front_default} alt="" />
                    </div>
                </div>
                <section className="card-information">
                    <h1>{data.name}</h1>
                </section>
            </div>
        </Link>
    );
};

export default Pokemon;