import localFont from "next/font/local";
import {Roboto} from "next/font/google";

export const roboto = Roboto({
    weight: ["400","700"],
    style: ["normal"],
    subsets: ["latin"]
})

export const pathwayGothic = localFont({
    src: "./fonts/PathwayGothicOne-Regular.ttf"
})