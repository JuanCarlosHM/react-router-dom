import Locations from "../../data/Locations";
import {useNavigate} from "react-router-dom";

export const LocationsScreen = () =>
{
    const navigate = useNavigate();

    const handleOnClick = () =>
    {
        navigate("/");
    }

    return(
        <section>
            <h2> Locations </h2>
                {
                    Locations.results.map((value, index) => {
                        return <p key={index}> { value.name } </p>
                    })
                }

                <button onClick={ handleOnClick }> goBack </button>
            </section>
    );
}