import { createContext, useState } from "react";
import { ChildrenInterface, Colors, Color } from "./types";

export const Context = createContext({});

export const ContextProvider = ({children}: ChildrenInterface) => {
/*     const [RandomColors, setRandomColors] = useState() */
/*     const getRandomColors = async() => {
        const data = await fetch("http://localhost:8080/api/v1/colors/random");
        const JSONData = await data.json()
        //Most likely using useState lags the operation and return undefined as data.
        const StringData = JSON.stringify(JSONData);
        sessionStorage.setItem("random", StringData)
        //Directly storing the data without useState seems to be the solution.
    } */
    const [ColorById, setColorById] = useState<Color>({})
    const [ColorsByCreator, setColorsByCreator] = useState<Color[]>([])
    const [Colors, setColors] = useState<Color[]>([])
    const [LoggedIn, setLoggedIn] = useState(false)
    const [User, setUser] = useState({})

    
    const getAllColors = async () => {
        const data = await fetch("http://localhost:8080/api/v1/colors");
        const JSONData = await data.json()
        setColors(JSONData);
    }

    const getColorById = (id:number) => {
        if(Colors.length === 0) {
             fetchColorById(id + 1)
            } else {
            setColorById(Colors[id])
        }
}

    const fetchColorById = async(id:number) => {
        const data = await fetch(`http://localhost:8080/api/v1/colors/${id}`)
        const JSONData = await data.json()
        setColorById(JSONData)
    }

    const getColorsByCreator = () => {
        const test = Colors.length ===0
         if(!test) {
            setColorsByCreator(Colors.slice(0, 4))
         }
    }
    
/*     const test = (name:string) => {
        setColorsByCreator(Colors.filter(element => element.creator === name))
    } */

    const fetchColorsByCreator = async(name:string) => {
        const data = await fetch(`http://localhost:8080/api/v1/colors/creator/${name}`)
        const JSONData = await data.json();
        setColorsByCreator(JSONData);
    }

    function TrueOrFalse() {
        var subject = localStorage.getItem('loggedin')
        if(subject === 'true') { return true}
        else {return false}
    }

    return (
        <Context.Provider value={{setColorsByCreator, ColorsByCreator, getColorsByCreator, ColorById, getColorById, TrueOrFalse, /* RandomColors, */ getAllColors, LoggedIn, setLoggedIn, setColors, Colors, User, setUser}}>
            {children}
        </Context.Provider>
    )
}