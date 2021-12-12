import React from "react";
import styles from "./index.module.css";

export default function Report({ date, todoList, isSample }) {
  const renderBox = () => {
    let todoCompleted;
    let todo;
    let total = 0;
    let totalCompleted = 0;
    const todoNumber = [];
    const todoCompletedNumber = [];
    for (let i = 0; i < 7; i++) {
      todo = todoList.filter((item) => item.date === date[i]);
      todoCompleted = todo.filter((item) => item.iscompleted === true);
      todoNumber.push(todo.length);
      todoCompletedNumber.push(todoCompleted.length);
    }
    todoNumber.forEach((ele) => (total += ele));
    todoCompletedNumber.forEach((ele) => (totalCompleted += ele));

    const info = [
      {
        text: "昨日完成待办",
        data: isSample ? 2 : parseInt(todoCompletedNumber[6]),
        unit: "项",
      },
      {
        text: "昨日完成率",
        data: isSample
          ? 50
          : todoNumber[6]
          ? parseInt((todoCompletedNumber[6] / todoNumber[6]) * 100)
          : 0,
        unit: "%",
      },
      {
        text: "本周期完成待办",
        data: isSample ? 23 : parseInt(totalCompleted),
        unit: "项",
      },
      {
        text: "本周期完成率",
        data: isSample
          ? 82
          : total
          ? parseInt((totalCompleted / total) * 100)
          : 0,
        unit: "%",
      },
    ];
    return info.map((item, index) => {
      return (
        <div className={styles.infoBox} key={index}>
          <div className={styles.info}>
            <span className={styles.data}>{item.data}</span>
            <span className={styles.unit}>{item.unit}</span>
          </div>
          <p className={styles.text}>{item.text}</p>
        </div>
      );
    });
  };

  return <div className={styles.report}>{renderBox()}</div>;
}
