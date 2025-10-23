interface DailyClassCalendarProps {
    // TODO: Update to proper date type
    currentDate: string
}

// TODO: Move this to a "real" database
const dummyClassData = [
  {
    name: "Vinyasa II",
    instructor: "Jaden",
    startTime: "1:00 PM",
    date: "10/20/2025",
    length: 75
  },
  {
    name: "Candlelight Yin",
    instructor: "Darren",
    startTime: "8:00 PM",
    date: "10/19/2025",
    length: 60
  },
  {
    name: "Slow Vinyasa",
    instructor: "Alyssa",
    startTime: "7:30 AM",
    date: "10/19/2025",
    length: 60
  } 
]

export default function DailyClassCalendar(props: DailyClassCalendarProps) {
    return (
        <div className="col-start-4 col-span-3 row-start-1 row-span-2 border-blue-300 border-4 bg-blue-100 rounded-lg text-center text-blue-600 mx-8 px-8">
            {/* TODO: How to get a dynamic date for a month here. */}
            <h1 className="font-bold text-3xl">*Date* classes (daily)</h1>
            {/* TODO: How to map a class list here */}
            <div>{dummyClassData.map((classData) => {
                if (props.currentDate === classData.date) {
                    return (
                        <div>
                            <h3>{classData.name}</h3>
                            <h4>Instructor: {classData.instructor}</h4>
                            <div>Start time: {classData.startTime}</div>
                            <div>Length: {classData.length} minutes</div>
                        </div>
                    )
                }
            })}</div>
        </div>
    )
}