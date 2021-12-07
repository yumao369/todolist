import React from "react";
import TodoChart from "../../components/TodoChart";
import styles from "./index.module.css";

export default function Statis() {
  return (
    <div className={styles.statis}>
      <div className={styles.head}>
        <h2 className={styles.headText}>数据统计（前七日）</h2>
      </div>
      <TodoChart></TodoChart>
    </div>
  );
}
