import Calendar from 'react-calendar';
import React from 'react'

interface MonthlyClassCalendarProps {
    setCurrentDate: Function
}

export default function MonthlyClassCalendar({ setCurrentDate }: MonthlyClassCalendarProps) {
    const formatDateString = (date: Date): string => {
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed, so add 1
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear();
      
        return `${month}/${day}/${year}`;
    }

    const handleClickDay = (date: Date, event: React.MouseEvent<HTMLButtonElement>) => {
        const formattedDateString = formatDateString(date)
        setCurrentDate(formattedDateString)
    }

    return (
        <div className="col-start-1 col-span-3 row-start-1 row-span-1 border-blue-300 border-4 bg-blue-100 rounded-lg text-center text-blue-600 mx-8 px-8">
            {/* TODO: Style calendar. */}
            <h1 className="font-bold text-3xl">Class Schedule Date Picker</h1>
            <h2>Pick a date from the calendar to see the classes scheduled for any given day.</h2>
            <Calendar onClickDay={handleClickDay}/>
        </div>
    )
}