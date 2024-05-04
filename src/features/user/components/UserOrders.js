import React, { usestate } from "react";
import { useSelector , useDispatch } from "react-redux";
import {  } from '../components/userSlice';
import { fetchLoggedInUserOrders } from "../UserAPI";

export default function UserOrders(){
    const dispatch = useDispatch();
    const user = useSelector(selectLoggedInUser);
    const orders = useSelector(selectUserOrders);


    useEffect(() => {
        dispatch(fetchLoggedInUserOrdersAsync{user.id})
    },[])
    return(
        <div>
            {orders.map(order=><div>

                {/* cart.js se yhn copy paste hoga template 4:48:00 to 4:53:00 then 4:54:00 to 5:26:00*/}

            </div>)}
        </div>
        
    );
}

