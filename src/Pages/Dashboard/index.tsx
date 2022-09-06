import React from 'react'; 
import { useSelector } from "react-redux";
import { IUsers } from "../../Interfaces/initialState";

const Dashbaord = () => {

    const state = useSelector((state: IUsers) => state);
    return (  <div>
        Dashboard
        {JSON.stringify(state.userData)}
    </div>);
}
 

export default Dashbaord;