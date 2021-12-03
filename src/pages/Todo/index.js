import React, { useCallback, useRef } from "react";
import { useState } from "react/cjs/react.development";
import NewTodo from "../../components/NewTodo";
import NoTodoList from "../../components/NoTodoList";
import TodoList from "../../components/TodoList";
import MyCalendar from "../../container/calendarContainer";
import MyNewTodo from "../../container/newtodoContainer";
import MyTodoList from "../../container/todoListContainer";

import styles from "./index.module.css";

//这个组件应该以日期作为状态，日期变更则更新全组件

//问题1：父组件的任何一个子组件参数改变都会导致整个重新渲染，使得为发生改变的组件也重新喧嚷
//解决方法：用usememo和usecallback，前者返回缓存的变量，后者返回缓存的函数
//更好的方法：用redux将todo变成无状态组件，这样子组件的更新就不会影响到父组件

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
            isCompleted={item.isComplete}
            category={item.category}
            hour={item.hour}
            minute={item.minute}
          ></MyTodoList>
        );
      });
    } else {
      return <NoTodoList></NoTodoList>;
    }
    // if (todoList.length) {
    //   return todoList
    //     .filter((item) => {
    //       return item.date === selectDate;
    //     })
    //     .map((item, index) => {
    //       return (
    //         <MyTodoList
    //           key={index}
    //           id={item.id}
    //           content={item.content}
    //           isCompleted={item.isComplete}
    //           category={item.category}
    //           deadline={item.deadline}
    //         ></MyTodoList>
    //       );
    //     });
    // } else {
    //   console.log("NOTODO");
    //   return <NoTodoList></NoTodoList>;
    // }
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
        <div className={styles.todoList}>
          {/* <NoTodoList /> */}
          {renderTodoList()}
        </div>
      </div>

      <div className={styles.todoRight}>
        <div className={styles.rightHead}>
          <h2>概览</h2>
        </div>
        <div className={styles.status}></div>
      </div>

      <div>
        {/* <NewTodo></NewTodo> */}
        {renderNewTodo()}
      </div>
    </div>
  );
}
