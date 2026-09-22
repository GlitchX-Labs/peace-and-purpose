"use client";

import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { ControlIcon } from "@/components/icons/ControlIcon";
import { addRipple } from "@/lib/ripple";

const weekdayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function pad(n) {
  return n < 10 ? "0" + n : "" + n;
}

function startOfToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

export const SlotPickerDialog = forwardRef(function SlotPickerDialog({ onConfirm }, ref) {
  const dialogRef = useRef(null);
  const today = startOfToday();

  const [view, setView] = useState({ year: today.getFullYear(), month: today.getMonth() });
  const [selectedDate, setSelectedDate] = useState(null);
  const [time, setTime] = useState({ hour: 1, min: 30, ampm: "AM" });

  useImperativeHandle(ref, () => ({
    open() {
      setSelectedDate(null);
      setTime({ hour: 1, min: 30, ampm: "AM" });
      setView({ year: today.getFullYear(), month: today.getMonth() });
      dialogRef.current?.showModal();
    },
  }));

  const changeMonth = (delta) => {
    setView((v) => {
      let month = v.month + delta;
      let year = v.year;
      if (month < 0) {
        month = 11;
        year--;
      } else if (month > 11) {
        month = 0;
        year++;
      }
      return { year, month };
    });
  };

  const cells = [];
  const firstDay = new Date(view.year, view.month, 1);
  const startOffset = firstDay.getDay();
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();
  const prevMonthDays = new Date(view.year, view.month, 0).getDate();

  for (let i = 0; i < 42; i++) {
    let dayNum, cellDate, otherMonth = false;
    if (i < startOffset) {
      dayNum = prevMonthDays - startOffset + i + 1;
      cellDate = new Date(view.year, view.month - 1, dayNum);
      otherMonth = true;
    } else if (i >= startOffset + daysInMonth) {
      dayNum = i - startOffset - daysInMonth + 1;
      cellDate = new Date(view.year, view.month + 1, dayNum);
      otherMonth = true;
    } else {
      dayNum = i - startOffset + 1;
      cellDate = new Date(view.year, view.month, dayNum);
    }
    cellDate.setHours(0, 0, 0, 0);
    cells.push({ dayNum, cellDate, otherMonth });
  }

  const adjustHour = (delta) =>
    setTime((t) => {
      let hour = t.hour + delta;
      if (hour > 12) hour = 1;
      if (hour < 1) hour = 12;
      return { ...t, hour };
    });

  const adjustMin = (delta) =>
    setTime((t) => ({ ...t, min: (t.min + delta + 60) % 60 }));

  const handleOk = () => {
    if (!selectedDate) return;
    const dateLabel = `${weekdayNames[selectedDate.getDay()]}, ${selectedDate.getDate()} ${monthNames[selectedDate.getMonth()].slice(0, 3)} ${selectedDate.getFullYear()}`;
    const label = `${dateLabel} · ${time.hour}:${pad(time.min)} ${time.ampm}`;
    onConfirm(label);
    dialogRef.current?.close();
  };

  return (
    <dialog id="slot-dialog" ref={dialogRef}>
      <div className="picker-inner">
        <div className="picker-cal">
          <div className="cal-header">
            <button
              type="button"
              className="cal-nav-btn animated-control-icon"
              aria-label="Previous month"
              onClick={() => changeMonth(-1)}
            >
              <ControlIcon name="arrowLeft" />
            </button>
            <span className="cal-title">{monthNames[view.month]} {view.year}</span>
            <button
              type="button"
              className="cal-nav-btn animated-control-icon"
              aria-label="Next month"
              onClick={() => changeMonth(1)}
            >
              <ControlIcon name="arrowRight" />
            </button>
          </div>
          <div className="cal-grid">
            {weekdayNames.map((w) => (
              <div className="cal-weekday" key={w}>{w}</div>
            ))}
            {cells.map(({ dayNum, cellDate, otherMonth }, i) => {
              const isToday = cellDate.getTime() === today.getTime();
              const isSelected = selectedDate && cellDate.getTime() === selectedDate.getTime();
              const disabled = cellDate < today;
              return (
                <button
                  key={i}
                  type="button"
                  className={[
                    "cal-day",
                    otherMonth && "other-month",
                    isToday && "today",
                    isSelected && "selected",
                  ].filter(Boolean).join(" ")}
                  disabled={disabled}
                  onClick={() => setSelectedDate(cellDate)}
                >
                  {dayNum}
                </button>
              );
            })}
          </div>
        </div>
        <div className="picker-time">
          <h3 style={{ textAlign: "center", fontSize: "1.05rem", marginBottom: 4 }}>Time</h3>
          <div className="time-cols">
            <div className="time-col">
              <button type="button" className="time-spin-btn animated-control-icon" aria-label="Increase hour" onClick={() => adjustHour(1)}>
                <ControlIcon name="arrow-up" />
              </button>
              <span className="time-value">{time.hour}</span>
              <span className="time-unit-label">hour</span>
              <button type="button" className="time-spin-btn animated-control-icon" aria-label="Decrease hour" onClick={() => adjustHour(-1)}>
                <ControlIcon name="chevronDown" />
              </button>
            </div>
            <div className="time-col">
              <button type="button" className="time-spin-btn animated-control-icon" aria-label="Increase minutes" onClick={() => adjustMin(5)}>
                <ControlIcon name="arrow-up" />
              </button>
              <span className="time-value">{pad(time.min)}</span>
              <span className="time-unit-label">min</span>
              <button type="button" className="time-spin-btn animated-control-icon" aria-label="Decrease minutes" onClick={() => adjustMin(-5)}>
                <ControlIcon name="chevronDown" />
              </button>
            </div>
          </div>
          <div className="ampm-toggle">
            {["AM", "PM"].map((option) => (
              <button
                key={option}
                type="button"
                className={`ampm-btn${time.ampm === option ? " active" : ""}`}
                onClick={() => setTime((t) => ({ ...t, ampm: option }))}
              >
                {option}
              </button>
            ))}
          </div>
          <p className="time-preview">{time.hour}:{pad(time.min)} {time.ampm}</p>
        </div>
        <div className="picker-actions">
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => dialogRef.current?.close()}
            onMouseDown={addRipple}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-primary"
            disabled={!selectedDate}
            onClick={handleOk}
            onMouseDown={addRipple}
          >
            OK
          </button>
        </div>
      </div>
    </dialog>
  );
});
