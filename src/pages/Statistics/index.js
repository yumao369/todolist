import moment from "moment";
import React, { useEffect, useState } from "react";
import AnalysisModel from "../../components/AnalysisModel";
import Report from "../../components/Report";
import TodoChart from "../../components/TodoChart";
import styles from "./index.module.css";

const today = new Date();

const date = [
  moment(new Date(today.getTime() - 168 * 60 * 60 * 1000)).format("yyyy-MM-DD"),
  moment(new Date(today.getTime() - 144 * 60 * 60 * 1000)).format("yyyy-MM-DD"),
  moment(new Date(today.getTime() - 120 * 60 * 60 * 1000)).format("yyyy-MM-DD"),
  moment(new Date(today.getTime() - 96 * 60 * 60 * 1000)).format("yyyy-MM-DD"),
  moment(new Date(today.getTime() - 72 * 60 * 60 * 1000)).format("yyyy-MM-DD"),
  moment(new Date(today.getTime() - 48 * 60 * 60 * 1000)).format("yyyy-MM-DD"),
  moment(new Date(today.getTime() - 24 * 60 * 60 * 1000)).format("yyyy-MM-DD"),
];

export default function Statis({ todoList }) {
  const [isSample, setIsSample] = useState(true);

  useEffect(() => {
    judgeIsSample();
  });

  const judgeIsSample = () => {
    if (todoList.length) {
      setIsSample(false);
    }
  };

  return (
    <div className={styles.statis}>
      <div className={styles.head}>
        <h2 className={styles.headText}>数据统计（前七日）</h2>
      </div>
      <TodoChart></TodoChart>
      <AnalysisModel
        date={date}
        todoList={todoList}
        isSample={isSample}
      ></AnalysisModel>
      <Report date={date} todoList={todoList} isSample={isSample}></Report>
    </div>
  );
}
