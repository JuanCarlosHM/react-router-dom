import {Link, NavLink} from "react-router-dom";

export const HomeScreen = () =>
{
    return(
        <section>
            <h1> Rick and Morty app </h1>

            <nav>
                <li> <Link to="/character"> Character </Link> </li>
                <li> <Link to="/locations">locations </Link> </li>
                <li> <Link to="/episodes">episodes </Link> </li>
            </nav>
        </section>
    );
}