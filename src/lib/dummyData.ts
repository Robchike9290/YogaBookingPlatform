import { v4 } from "uuid";
import { ClassData } from "@/types";

// TODO: Move this to a "real" database
export const dummyClassData: ClassData[] = [
  {
    id: v4(),
    name: "Vinyasa II",
    instructor: "Jaden",
    startTime: "1:00 PM",
    date: "10/20/2025",
    length: 75,
    participants: new Set(["Delcine Majeed"]),
    maxParticipants: 12,
    location: "Crestview",
  },
  {
    id: v4(),
    name: "Candlelight Yin",
    instructor: "Darren",
    startTime: "8:00 PM",
    date: "10/19/2025",
    length: 60,
    participants: new Set(["Delcine Majeed", "Patan Jali"]),
    maxParticipants: 20,
    location: "Bouldin",
  },
  {
    id: v4(),
    name: "Slow Vinyasa",
    instructor: "Alyssa",
    startTime: "7:30 AM",
    date: "10/19/2025",
    length: 60,
    participants: new Set(),
    maxParticipants: 16,
    location: "Riata",
  },
  {
    id: v4(),
    name: "Hatha",
    instructor: "Alyssa",
    startTime: "7:30 AM",
    date: "10/23/2025",
    length: 60,
    participants: new Set(["Patan Jali"]),
    maxParticipants: 20,
    location: "Downtown",
  },
];
