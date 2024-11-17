import {Button, Modal} from "@mantine/core"
import {useAppContext} from "../../hooks/contextHook.tsx";
import {formatDateToEu} from "../../utils/format.ts";

function ModalConfirmDate({opened, close}: { opened: boolean, close: () => void }) {
    const {dateSelected} = useAppContext()

    const handleConfirm = () => {
        close()
    }

    return (
        <Modal
            opened={opened}
            onClose={close}
            title="Confirm?"
            centered
            overlayProps={{blur: 3, backgroundOpacity: 0.3}}
        >
            <h1 className='text-center opacity-85'>You've met on: </h1>
            <p className='text-center text-3xl font-semibold text-pink-600'>{formatDateToEu(dateSelected)}</p>

            <div className='flex justify-end gap-2 mt-7'>
                <Button onClick={close} variant='outline'>Cancel</Button>
                <Button onClick={handleConfirm}>Confirm</Button>
            </div>
        </Modal>
    )
}

export default ModalConfirmDate