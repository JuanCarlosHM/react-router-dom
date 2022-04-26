import {useNavigate} from "react-router-dom";

export const AuthScreen = ({setIsAuth}) =>
{
    const navigate = useNavigate();

    const handleOnClick = () =>
    {
        setIsAuth(true);
        navigate("/");
    }

    return(
        <section>
            <h1> Plese auth to continue </h1>
            <button onClick={ handleOnClick }> Auth </button>
        </section>
    );
}