import React from "react";
import CalendarItem from "./CalendarItem";
import styles from "./index.module.css";
import { useState } from "react/cjs/react.development";
import { calendar } from "./calendar";

export default function Calendar({ selectDate, onSelectDate }) {
  const selectDateGMT = new Date(selectDate);
  console.log("selectDate", selectDate);
  const visibleList = calendar(selectDateGMT);
  // console.log(visibleList);

  const onClick = (date) => {
    onSelectDate(date);
  };

  const renderVisibleList = () => {
    return visibleList.map((v) => {
      const isThisMonth = v.month === selectDateGMT.getMonth();
      // console.log("vid", v.id);

      return (
        <CalendarItem
          key={v.id}
          isThisMonth={isThisMonth}
          id={v.id}
          date={v.date}
          selected={selectDate === v.date}
          onClick={onClick}
        >
          {v.content}
        </CalendarItem>
      );
    });
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarItem}>{renderVisibleList()}</div>
    </div>
  );
}
