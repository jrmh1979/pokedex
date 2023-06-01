import { Link , useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { changeName, changeNameValue } from '../store/slices/username.slice'
import { useState } from 'react'


const Home = () => {

    const username = useSelector( state => state.username )
    const dispatch = useDispatch()
    const [ nameValue, setNameValue ] = useState( "" )
    const navigate = useNavigate ()


    const setSliceValue = () => {
        dispatch ( changeNameValue (nameValue))
        navigate ("/pokedex")
    }

    
    return (
        <div className="container-home">
            <h1>Hello trainer !</h1>
            <img className="img-home" src="/pokemon-human.jpg" alt="" />
            
            <div className="container-input">
                <label htmlFor="name">give me your name to start</label>
                <div >
                    <input className="input-field"
                    type="text" 
                    id="name" 
                    value={ nameValue }
                    onChange={ e => setNameValue(e.target.value) }
                    />
                    <button className="overlay-button"
                    onClick={ setSliceValue}
                    >Ir</button>
                </div>
            </div>
                       
        </div>
    );
};

export default Home;