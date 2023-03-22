import { ReactNode } from "react"

export interface RandomColorsInterface {
    RandomColors?: Color,
    setRandomColors: () => void,
    id?: number,
    color1?: string,
    color2?: string,
    color3?: string
}

export interface Colors {
    Colors: Color[]
}

export type Color = {
    id?: number,
    color1?: string,
    color2?: string,
    color3?: string,
    creator?: string
}

export interface ChildrenInterface {
    children: ReactNode
}

export interface UserInterface {
    User: UserType
}

export type UserType = {
    id: Number,
    email: String,
    password: String,
    username: String,
    role: String
}

export type setUser = {setUser: (r:UserType) => void}
export type getAllColors = {getAllColors: () => void}
export type setLoggedIn = {setLoggedIn: (boolean) => void}
export type LoggedIn = {LoggedIn: boolean}
export type TrueOrFalse = {TrueOrFalse: () => void}
export type getColorById = {getColorById: (id:number) => void}
export type ColorById = {ColorById: Color}
export type setColorById = {setColorById: (Color) => void}
export type getColorsByCreator = {getColorsByCreator: () => void}
export type ColorsByCreator = {ColorsByCreator: Color[]}
export type UpdateUser = {UpdateUser: () => void}