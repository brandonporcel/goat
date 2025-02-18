"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import realmadrid from "../../assets/img/realmadrid2.png";
import barcelona from "../../assets/img/barcelona.png";
import riverplate from "../../assets/img/riverplate.png";

type Event = {
  day: number;
  title: string;
  description?: string;
};

type MonthData = {
  name: string;
  days: number;
  events: Event[];
};

const monthsData: MonthData[] = [
  {
    name: "January",
    days: 31,
    events: [
      {
        day: 2,
        title: "New Year Resolutions",
        description: "Plan for the year",
      },
      { day: 15, title: "Winter Festival", description: "City center" },
      { day: 28, title: "Quarterly Review" },
    ],
  },
  {
    name: "February",
    days: 29,
    events: [
      { day: 14, title: "Real Madrid", description: "First hat-trick" },
      { day: 20, title: "Tech Conference", description: "Virtual event" },
    ],
  },
  {
    name: "March",
    days: 31,
    events: [
      { day: 8, title: "International Women's Day" },
      {
        day: 25,
        title: "Spring Cleaning",
        description: "Office reorganization",
      },
    ],
  },
  { name: "April", days: 30, events: [] },
  { name: "May", days: 31, events: [] },
  { name: "June", days: 30, events: [] },
  { name: "July", days: 31, events: [] },
  { name: "August", days: 31, events: [] },
  { name: "September", days: 30, events: [] },
  { name: "October", days: 31, events: [] },
  { name: "November", days: 30, events: [] },
  { name: "December", days: 31, events: [] },
];

export default function Calendar() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    new Date().getMonth()
  );
  const [direction, setDirection] = useState(0);

  const handleMonthChange = (dir: number) => {
    setDirection(dir);
    setCurrentMonthIndex((prevIndex) =>
      dir > 0
        ? (prevIndex + 1) % monthsData.length
        : (prevIndex - 1 + monthsData.length) % monthsData.length
    );
  };

  const currentMonth = monthsData[currentMonthIndex];

  const calendarDays = Array.from(
    { length: currentMonth.days },
    (_, i) => i + 1
  );

  return (
    <div className="w-full max-w-5xl p-6 mx-auto mt-16 font-sans">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleMonthChange(-1)}
            className="h-8 w-8"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentMonth.name}
              initial={{ y: direction > 0 ? 20 : -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: direction > 0 ? -20 : 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-2xl font-semibold min-w-[120px]"
            >
              {currentMonth.name}
            </motion.h1>
          </AnimatePresence>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleMonthChange(1)}
            className="h-8 w-8"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <Select defaultValue="month">
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Select view" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="month">Month view</SelectItem>
              <SelectItem value="week">Week view</SelectItem>
              <SelectItem value="day">Day view</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-indigo-500 hover:bg-indigo-600">
            Add event
          </Button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentMonth.name}
          initial={{ x: direction > 0 ? 50 : -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -50 : 50, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="border rounded-lg"
        >
          <div className="grid grid-cols-7">
            {calendarDays.map((day, index) => {
              const event = currentMonth.events.find((e) => e.day === day);
              return (
                <div
                  key={index}
                  className={`group min-h-[120px] p-2 border-r border-b flex flex-col justify-between
                  ${index % 7 === 6 ? "border-r-0" : ""} 
                  ${
                    index >= Math.ceil(calendarDays.length / 7) * 7 - 7
                      ? "border-b-0"
                      : ""
                  }`}
                >
                  {day && (
                    <span className="group-hover:text-indigo-500">{day}</span>
                  )}
                  {event && (
                    <div className="mt-1 text-sm">
                      <p className="truncate">{event.title}</p>
                      {event.description && (
                        <p className="truncate text-gray-500">
                          {event.description}
                        </p>
                      )}
                    </div>
                  )}
                  <div className="flex justify-end space-x-[-16px]">
                    <Image
                      src={realmadrid}
                      alt="Real Madrid"
                      width={46}
                      height={46}
                      className="grayscale hover:grayscale-0 hover:scale-125 transition-all duration-300 hover:z-10 cursor-pointer"
                    />
                    <Image
                      src={barcelona}
                      alt="Barcelona"
                      width={46}
                      height={46}
                      className="grayscale hover:grayscale-0 hover:scale-125 transition-all duration-300 hover:z-10 cursor-pointer"
                    />
                    <Image
                      src={riverplate}
                      alt="River Plate"
                      width={46}
                      height={46}
                      className="grayscale hover:grayscale-0 hover:scale-125 transition-all duration-300 hover:z-10 cursor-pointer"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
