import { createContext, useState } from "react";
import { ChildrenInterface } from "./types";

export const Context = createContext({});

export const ContextProvider = ({children}: ChildrenInterface) => {
    const [RandomColors, setRandomColors] = useState()
    const [Colors, setColors] = useState([])
    const [LoggedIn, setLoggedIn] = useState(false)
    const [User, setUser] = useState({})

    const getRandomColors = async() => {
        const data = await fetch("http://localhost:8080/api/v1/colors/random");
        const JSONData = await data.json()
        //Most likely using useState lags the operation and return undefined as data.
        const StringData = JSON.stringify(JSONData);
        sessionStorage.setItem("random", StringData)
        //Directly storing the data without useState seems to be the solution.
    }
    
    const getAllColors = async () => {
        const data = await fetch("http://localhost:8080/api/v1/colors");
        const JSONData = await data.json()
        setColors(JSONData);
    }

    function TrueOrFalse() {
        var subject = localStorage.getItem('loggedin')
        if(subject === 'true') { return true}
        else {return false}
    }

    return (
        <Context.Provider value={{getRandomColors, TrueOrFalse, RandomColors, getAllColors, LoggedIn, setLoggedIn, setColors, Colors, User, setUser}}>
            {children}
        </Context.Provider>
    )
}