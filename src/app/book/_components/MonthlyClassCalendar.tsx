import Calendar from 'react-calendar';

export default function MonthlyClassCalendar() {
    return (
        <div className="col-start-1 col-span-3 row-start-1 row-span-1 border-blue-300 border-4 bg-blue-100 rounded-lg text-center text-blue-600 mx-8 px-8">
            {/* TODO: How to get a dynamic date for a month here. */}
            <h1 className="font-bold text-3xl">Class Schedule Date Picker</h1>
            <h2>Pick a date from the calendar to see the classes scheduled for any given day.</h2>
            <Calendar />
        </div>
    )
}