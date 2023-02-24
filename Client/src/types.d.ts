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
    color3?: string
}

export interface ChildrenInterface {
    children: ReactNode
}

export type getRandomColors = {getRandomColors: () => void}
export type RandomColors = {RandomColors: Color}
export type getAllColors = {getAllColors: () => void}