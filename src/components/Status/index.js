import React from "react";
import { useState } from "react/cjs/react.development";
import styles from "./index.module.css";

export default function Status({ selectDate, todoList }) {
  const todayTodo = todoList.filter((item) => item.date === selectDate);
  const CompletedTodayTodo = todayTodo.filter(
    (item) => item.iscompleted === true
  );
  const todayTodoLength = todayTodo.length;
  const CompletedTodayTodoLength = CompletedTodayTodo.length;
  const completedPercentage =
    (CompletedTodayTodoLength / todayTodoLength).toFixed(2) * 100 || 0;
  const CompletedTodoPercentage = parseInt(completedPercentage * 3.14) + " 314";

  const renderText = () => {
    return todayTodoLength ? (
      <p>
        今日共<span className={styles.textInfo}>{todayTodoLength}</span>
        项待办，已完成
        <span className={styles.textInfo}>{CompletedTodayTodoLength}</span>项
      </p>
    ) : (
      <p>今日暂无待办</p>
    );
  };

  return (
    <div className={styles.status}>
      <div className={styles.overview}>
        <svg
          className={styles.svgOverview}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="200px"
          height="200px"
        >
          <circle
            className={styles.percent}
            id="today"
            cx="100"
            cy="100"
            r="50"
            fill="none"
            strokeWidth="100"
            strokeDasharray={CompletedTodoPercentage}
          ></circle>
        </svg>
      </div>
      <div className={styles.text}>{renderText()}</div>
    </div>
  );
}
