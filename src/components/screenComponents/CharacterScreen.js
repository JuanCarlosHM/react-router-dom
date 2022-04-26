import Characters from "../../data/Characters";
import {useNavigate, useParams} from "react-router-dom";

export const CharacterScreen = () =>
{
    const { id }= useParams();
    const navigate = useNavigate();


    const value = Characters.results.filter(character => character.id == id);

    const handleOnClick = () =>
    {
        navigate(-2);
    }

    return(
       <>
           <div>
               <img src={ value[0].image } alt="Character"/>
               <ul>
                   <li> <strong> { value[0].name }</strong></li>
                   <li> Gender:  </li>
                   <li> { value[0].gender } </li>
                   <li> Last known location: </li>
                   <li> { value[0].location.name } </li>
               </ul>
           </div>

           <button onClick={handleOnClick}> Return </button>
       </>
    );
}