import MonthlyClassCalendar from "@/_components/MonthlyClassCalendar";
import { CalendarProps } from "@/types";

export default function BookingCalendar({
  setCurrentDate,
  title,
}: CalendarProps) {
  return (
    <div className="col-span-5 col-start-1 row-span-1 row-start-2 m-4 rounded-lg border-4 border-blue-300 bg-blue-100 text-blue-600">
      <MonthlyClassCalendar title={title} />
    </div>
  );
}
