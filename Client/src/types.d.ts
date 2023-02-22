export interface RandomColorsInterface {
    RandomColors: Color,
    setRandomColors: () => void
}

type Color = {
    id: number,
    color1: string,
    color2: string,
    color3: string
}