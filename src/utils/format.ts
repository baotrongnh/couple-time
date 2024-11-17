import {DateValue} from "@mantine/dates"

export const formatDateToEu = (date: DateValue) => {
    return `${date?.getDate()} - ${date?.getMonth()} - ${date?.getFullYear()}`
}

export const formatDateToIso = (date: DateValue) => {
    return `${date?.getFullYear()}-${date?.getMonth()}-${date?.getDate()}`
}