import {Route, Routes} from "react-router-dom";
import {HomeScreen} from "../components/screenComponents/HomeScreen";
import {CharactersScreen} from "../components/screenComponents/CharactersScreen";
import {CharacterScreen} from "../components/screenComponents/CharacterScreen";
import {LocationsScreen} from "../components/screenComponents/LocationsScreen";
import {EpisodesScreen} from "../components/screenComponents/EpisodesScreen";

export const PrivateRoutes = () =>
{
    return(
        <Routes>
            <Route path="/" element={<HomeScreen/>} />
            <Route path="/character" element={<CharactersScreen/>}/>
            <Route path="/character/:id" element={<CharacterScreen/>}/>
            <Route path="/locations" element={<LocationsScreen/>}/>
            <Route path="/episodes" element={<EpisodesScreen/>}/>
        </Routes>
    );
}