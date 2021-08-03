import React, { useContext } from 'react'
import {MyContext} from "../../contexts/MyContext"
import Login from "../Login"
import Register from "../Register"

export default function SubHome() {

    const {rootState, logoutUser} = useContext(MyContext);
    const {isAuth, theUser, showLogin} = rootState;
    
    if(isAuth){
        return (
            <div>
                <h1> WELCOME  {theUser.name}</h1>¸
                <div className="user_div">
                    <button onClick={logoutUser}> Log</button>
                </div>
            </div>
        )
    }
    else if(showLogin){
        return <Login/>;
    }
    else {
        return <Register/>;
    }
    }
