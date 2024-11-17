import {useContext} from "react"
import {AppContext} from "../Context/AppContext.tsx";

export const useAppContext = () => {
    const context = useContext(AppContext)

    if (!context) {
        throw new Error('AppContext cannot be null')
    }

    return context
}