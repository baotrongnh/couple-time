import CountTime from "./CountTime.tsx"
import {useState} from "react";
import InputTime from "./InputTime.tsx";

function Home() {
    const [timeInput, setTimeInput] = useState<string>('')

    return (
        <InputTime />
        // <CountTime />
    )
}

export default Home