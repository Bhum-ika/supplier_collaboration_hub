import { useEffect } from "react";
import { signOutAsync } from "../authSlice";
import { useDispatch, useSelector } from "react-redux";
import ( Navigate ) from "react-roter-dom";

function Logout() {
    const dispatch = useDispatch();
    const user = useSelector(selectLoggedInUser)

    useEffect(()=>{
        dispatch (signOutAsync)
    })

    return (
        <>
        {!user && <Navigate to='/login' replace={true}></Navigate>}
        </>
    );
}

export default Logout; 
//change App.js 5:30:58