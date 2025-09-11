"use client";
import React, { useState } from "react";

const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

interface CalendarProps {
  resourceId?: string;
  resourceName?: string;
  onDateSelect?: (date: { day: number; month: number; year: number; resourceId?: string }) => void;
}

export default function Calendar({ resourceId, resourceName, onDateSelect }: CalendarProps) {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [selected, setSelected] = useState<{ day: number; month: number; year: number } | null>(null);

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const handlePrev = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNext = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const handleSelect = (day: number) => {
    const selectedDate = { day, month, year };
    setSelected(selectedDate);
    if (onDateSelect) {
      onDateSelect({ ...selectedDate, resourceId });
    }
  };

  // Build calendar grid
  const buttons = [];
  for (let i = 0; i < firstDay; i++) {
    buttons.push(<div key={"empty-" + i}></div>);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const isSelected = selected && selected.day === d && selected.month === month && selected.year === year;
    buttons.push(
      <button
        key={d}
        className={`h-12 w-full rounded-full text-base font-medium leading-normal ${isSelected ? "bg-[#ec8013] text-white" : "hover:bg-stone-100 text-[#181411]"}`}
        onClick={() => handleSelect(d)}
      >
        {d}
      </button>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col gap-1 p-4 bg-white rounded-lg shadow-md">
      {resourceName && (
        <div className="text-center mb-2">
          <h4 className="text-sm font-semibold text-[#181411]">{resourceName}</h4>
          <p className="text-xs text-[#897561]">Availability</p>
        </div>
      )}
      <div className="flex items-center justify-between p-2">
        <button className="text-[#181411] hover:text-[#ec8013] transition-colors rounded-full p-2" onClick={handlePrev}>
          {/* Left Arrow SVG */}
          <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
            <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
          </svg>
        </button>
        <p className="text-[#181411] text-lg sm:text-xl font-bold leading-tight text-center">
          {today.toLocaleString("default", { month: "long" })} {year}
        </p>
        <button className="text-[#181411] hover:text-[#ec8013] transition-colors rounded-full p-2" onClick={handleNext}>
          {/* Right Arrow SVG */}
          <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {daysOfWeek.map((d, i) => (
          <p key={i} className="text-center text-[#897561] text-sm font-bold leading-normal tracking-[0.015em] py-2">{d}</p>
        ))}
        {buttons}
      </div>
    </div>
  );
}
