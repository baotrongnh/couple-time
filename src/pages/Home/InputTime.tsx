import {DatePicker, DatesProvider, DateValue} from "@mantine/dates"
import dayjs from "dayjs"
import {useAppContext} from "../../hooks/contextHook.tsx"

function InputTime({open}: { open: () => void }) {
    const {dateSelected, setDateSelected} = useAppContext()

    const handlePickDate = (value: DateValue) => {
        open()
        setDateSelected(value)
    }

    return (
        <div className='h-svh w-full flex flex-col items-center justify-center'>
            <h1 className='text-pink-600 font-semibold text-3xl mb-3'>You've met on:</h1>
            <DatesProvider
                settings={{
                    locale: 'vi',
                    firstDayOfWeek: 1,
                    weekendDays: [0, 6],
                    timezone: 'Asia/Ho_Chi_Minh'
                }}
            >
                <DatePicker
                    value={dateSelected}
                    onChange={handlePickDate}
                    maxDate={dayjs().toDate()}
                    size='lg'
                    className='border border-pink-200 rounded-lg p-5 md:p-7'
                />
            </DatesProvider>
        </div>
    )
}

export default InputTime