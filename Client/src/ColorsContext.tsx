import { createContext, useState } from "react";
import { ChildrenInterface, Colors, Color } from "./types";

export const Context = createContext({});

export const ContextProvider = ({children}: ChildrenInterface) => {
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

    const UpdateUser = () => {
        var StorageUser = localStorage.getItem('user')
        var formattedUser = JSON.parse(StorageUser!)
        setUser(formattedUser)
    }

    return (
        <Context.Provider value={{setColorsByCreator, UpdateUser, ColorsByCreator, getColorsByCreator, ColorById, getColorById, TrueOrFalse, /* RandomColors, */ getAllColors, LoggedIn, setLoggedIn, setColors, Colors, User, setUser}}>
            {children}
        </Context.Provider>
    )
}