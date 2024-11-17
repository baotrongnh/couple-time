import React, {createContext, useState} from "react"
import {DateValue} from "@mantine/dates"

type AppContextType = {
    dateSelected: DateValue,
    setDateSelected: (date: DateValue) => void,
}

export const AppContext = createContext<AppContextType | null>(null)

export const AppContextProvider = ({children}: { children: React.ReactElement }) => {
    const [dateSelected, setDateSelected] = useState<DateValue | null>(null)

    return (
        <AppContext.Provider
            value={{
                dateSelected,
                setDateSelected
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

