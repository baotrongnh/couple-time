import CountTime from "./CountTime.tsx"
import InputTime from "./InputTime.tsx"
import {useDisclosure} from "@mantine/hooks"
import ModalConfirmDate from "../../components/Modals/ModalConfirmDate.tsx"

function Home() {
    const [opened, {open, close}] = useDisclosure(false)

    return (
        <>
            <InputTime open={open} />
            <CountTime/>
            <ModalConfirmDate opened={opened} close={close}/>
        </>
    )
}

export default Home