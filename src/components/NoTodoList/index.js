import React from "react";

import styles from "./index.module.css";
import todo from "../../assets/svg/icon-todo.svg";

function NoTodoList() {
  console.log("notodo");
  return (
    <div className={styles.noTodoList}>
      <svg className={styles.svg}>
        <use xlinkHref="#icon-todo" />
      </svg>
      <span className={styles.describe}>
        当前暂无待办，点击<span className={styles.special}>右上角按钮</span>
        添加
      </span>
    </div>
  );
}

//防止其他组件的更新导致此组件多次渲染
export default React.memo(NoTodoList);
