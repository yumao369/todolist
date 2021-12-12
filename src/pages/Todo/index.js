import React, { useCallback, useRef } from "react";
import { useState } from "react/cjs/react.development";
import NewTodo from "../../components/NewTodo";
import NoTodoList from "../../components/NoTodoList";
import Status from "../../components/Status";
import Overview from "../../components/Status";
import TodoList from "../../components/TodoList";
import MyCalendar from "../../container/calendarContainer";
import MyNewTodo from "../../container/newtodoContainer";
import MyStatus from "../../container/statusContainer";
import MyTodoList from "../../container/todoListContainer";

import styles from "./index.module.css";

export default function Todo({
  text,
  selectDate,
  todoList,
  onClickNew,
  onclickNewType,
}) {
  const handleNewClick = () => {
    onClickNew();
    onclickNewType();
  };

  const renderTodoList = () => {
    const selectDateTodoList = todoList.filter((item) => {
      return item.date === selectDate;
    });
    if (selectDateTodoList.length) {
      return selectDateTodoList.map((item, index) => {
        return (
          <MyTodoList
            key={index}
            id={item.id}
            content={item.content}
            isCompleted={item.iscompleted}
            category={item.category}
            hour={item.hour}
            minute={item.minute}
          ></MyTodoList>
        );
      });
    } else {
      return <NoTodoList></NoTodoList>;
    }
  };

  const renderNewTodo = () => {
    if (text.text) {
      return <MyNewTodo></MyNewTodo>;
    }
  };

  return (
    <div className={styles.todo}>
      <div className={styles.todoLeft}>
        <div className={styles.todoHead}>
          <h2>我的待办</h2>
          <button className={styles.addTodo} onClick={handleNewClick}>
            新建待办
          </button>
        </div>
        <MyCalendar />
        <div className={styles.todoList}>{renderTodoList()}</div>
      </div>

      <div className={styles.todoRight}>
        <div className={styles.rightHead}>
          <h2>概览</h2>
        </div>
        <div className={styles.status}>
          <MyStatus></MyStatus>
        </div>
      </div>

      <div>{renderNewTodo()}</div>
    </div>
  );
}
