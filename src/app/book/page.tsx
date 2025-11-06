'use client'
// TODO: Use <Suspense /> component to optimize this and other 
// client-side-rendered pages to render everything EXCEPT dynamic content.

import MonthlyClassCalendar from "./_components/MonthlyClassCalendar";
import DailyClassCalendar from "./_components/DailyClassCalendar";
import { useState, useEffect } from "react";

export default function Book() {
    const [currentDate, setCurrentDate] = useState(Date())

    useEffect(() => {
        const today = new Date();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');
        const year = today.getFullYear();
    
        setCurrentDate(`${month}/${day}/${year}`);
      }, []);

    return (
        <div className="grid grid-cols-6 grid-rows-2">
            <MonthlyClassCalendar setCurrentDate={setCurrentDate} />
            <DailyClassCalendar currentDate={currentDate} />
        </div>
    )
}