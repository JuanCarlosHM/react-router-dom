import {Link, useNavigate} from "react-router-dom";
import Characters from "../../data/Characters";

export const CharactersScreen = () =>
{
    const navigate = useNavigate();

    const handleOnClick = () =>
    {
        navigate('/');
    }

    return(
        <section>
            <h2> Characters </h2>
                <ul>
                    {
                        Characters.results.map((value, index) =>
                        {
                            return (<li key={index}> <Link to={"" + value.id}> {value.name} </Link> </li>)
                        })
                    }
                </ul>

            <Link onClick={ handleOnClick }> goBack </Link>
        </section>
    );
}