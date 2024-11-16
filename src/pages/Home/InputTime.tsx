import {DatePicker, DatesProvider} from "@mantine/dates"
import {useState} from "react"
import dayjs from "dayjs";

function InputTime() {
    const [value, setValue] = useState<Date | null>(null)

    console.log(`${value?.getDate()}-${value?.getMonth()}`)
    return (
        <div className='h-svh w-full flex flex-col items-center justify-center'>
            <h1 className='text-pink-600 font-semibold text-3xl mb-3'>You've met on:</h1>
            <DatesProvider
                settings={{
                    locale: 'vi',
                    firstDayOfWeek: 1,
                    weekendDays: [0, 6],
                    timezone: 'Asia/Ho_Chi_Minh'}}
            >
                <DatePicker
                    value={value}
                    onChange={setValue}
                    maxDate={dayjs().toDate()}
                    size='lg'
                    className='border border-pink-200 rounded-lg p-5 md:p-7'
                />
            </DatesProvider>
        </div>
    )
}

export default InputTime