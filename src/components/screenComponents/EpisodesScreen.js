import Episodes from "../../data/Episodes";
import {useNavigate} from "react-router-dom";

export const EpisodesScreen = () =>
{
    const navigate = useNavigate();

    const handleOnClinck =  () =>
    {
       navigate(-1);
    }

    return (
        <section>

            <h1> Episodes </h1>
            {
                Episodes.results.map((value, index) => {
                    return <p key={index}> { value.name } </p>
                })
            }

            <button onClick={ handleOnClinck }> goBack </button>
        </section>
    );
}