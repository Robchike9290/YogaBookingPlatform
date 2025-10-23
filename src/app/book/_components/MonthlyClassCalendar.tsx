import Calendar from 'react-calendar';

export default function MonthlyClassCalendar() {
    return (
        <div className="col-start-1 col-span-3 row-start-1 row-span-1 border-blue-300 border-4 bg-blue-100 rounded-lg text-center text-blue-600 mx-8 px-8">
            {/* TODO: How to get a dynamic date for a month here. */}
            <h1 className="font-bold text-3xl">*Date* classes</h1>
            {/* TODO: How to map a class list here */}
            <div>Class Schedule Date Picker</div>
            <Calendar />
        </div>
    )
}