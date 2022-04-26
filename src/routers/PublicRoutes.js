import {Navigate, Route, Routes} from "react-router-dom";
import {AuthScreen} from "../components/screenComponents/AuthScreen";

export const PublicRoutes = ({setIsAuth}) => {
    return (

        <Routes>
            <Route path="/" element={<AuthScreen setIsAuth={setIsAuth}/>}/>

            <Route
                path="*"
                element={<Navigate to="/" replace/>}
            />
        </Routes>
    );
}