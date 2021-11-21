import React from "react";
import { useState } from "react/cjs/react.development";
import styles from "./index.module.css";

const week = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

function CalendarItem({ children, id, isThisMonth, selected, onClick }) {
  console.log("calendaritem");
  return (
    <div
      className={[
        styles.calendarItem,
        isThisMonth ? "" : styles.notThisMonth,
      ].join(" ")}
      onClick={() => onClick(id)}
    >
      <span className={styles.week}>{week[id]}</span>
      <div className={[styles.date, selected ? styles.selected : ""].join(" ")}>
        {children}
      </div>
    </div>
  );
}

export default React.memo(CalendarItem);
