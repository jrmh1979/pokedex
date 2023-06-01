import { Outlet, Navigate } from "react-router-dom";
import {useSelector} from "react-redux";



const ProtectedRouters = () => {

    const username = useSelector (state => state.username)

    if ( username ) {
        return <Outlet />

    }else {
        return <Navigate to ="/"/>
    }


   
};

export default ProtectedRouters;