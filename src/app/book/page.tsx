import MonthlyClassCalendar from "./_components/MonthlyClassCalendar";
import DailyClassCalendar from "./_components/DailyClassCalendar";

export default function Book() {
    return (
        <div className="grid grid-cols-6 grid-rows-2">
            <MonthlyClassCalendar />
            {/* TODO: Update this to not be hard-coded. */}
            <DailyClassCalendar currentDate={"10/19/2025"} />
        </div>
    )
}