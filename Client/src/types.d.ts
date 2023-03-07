import { ReactNode } from "react"

export interface RandomColorsInterface {
    RandomColors?: Color,
    setRandomColors: () => void,
    id?: number,
    color1?: string,
    color2?: string,
    color3?: string
}

export interface Color {
    id?: number,
    color1?: string,
    color2?: string,
    color3?: string,
    creator?: string
}

export interface ChildrenInterface {
    children: ReactNode
}

export type getAllColors = {getAllColors: () => void}
export type setLoggedIn = {setLoggedIn: (boolean) => void}
export type LoggedIn = {LoggedIn: boolean}