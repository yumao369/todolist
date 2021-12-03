import React, { useEffect, useState } from "react";

import styles from "./index.module.css";
import clock from "../../assets/svg/icon-clock.svg";

const category = [
  { border: "orangeBorder", inner: "orangeClass" },
  { border: "redBorder", inner: "redClass" },
  { border: "blueBorder", inner: "blueClass" },
  { border: "emeraldBorder", inner: "emeraldClass" },
];

// let defaultCategory = { border: "orangeBorder", inner: "orangeClass" };
// let defaultDeadline = null;

export default function NewTodo({
  listId,
  id,
  todoList,
  newTodoType,
  selectDate,
  onClickCancel,
  onClickSave,
  onClickaddTodo,
  onClickeditTodo,
  onClickAddId,
}) {
  const [timingClicked, setTimingClicked] = useState(false);
  const [classMouseOn, setClassMouseOn] = useState(false);

  const [defaultContent, setDefaultContent] = useState("");
  const [defaultCategory, setDefaultCategory] = useState(category[0]);
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  useEffect(() => {
    if (!newTodoType) {
      setDefaultCategory(todoList.find((item) => item.id === id).category);
      setDefaultContent(todoList.find((item) => item.id === id).content);
      setHours(todoList.find((item) => item.id === id).hour);
      setMinutes(todoList.find((item) => item.id === id).minute);
    }
  }, [id, newTodoType, todoList]);

  const handleTimingClick = () => {
    setTimingClicked(!timingClicked);
  };

  const handleMouseEnter = () => {
    setClassMouseOn(true);
  };

  const handleMouseLeave = () => {
    setClassMouseOn(false);
  };

  const handleSave = () => {
    if (newTodoType) {
      onClickSave();
      onClickaddTodo(
        listId,
        selectDate,
        defaultContent,
        false,
        defaultCategory,
        hours,
        minutes
      );
      onClickAddId();
    } else {
      onClickSave();
      onClickeditTodo(id, defaultContent, defaultCategory, hours, minutes);
    }
  };

  const handleTextChange = (e) => {
    setDefaultContent(e.target.value);
  };

  const handleHoursChange = (e) => {
    setHours(e.target.value);
  };

  const handleMinutesChange = (e) => {
    setMinutes(e.target.value);
  };

  const handleClassItemClick = (index) => {
    setDefaultCategory(category[index]);
  };

  const renderTiming = () => {
    if (timingClicked) {
      return (
        <div className={styles.setTiming}>
          <input
            className={styles.time}
            defaultValue={hours}
            onChange={handleHoursChange}
          ></input>
          <p>时</p>
          <input
            className={styles.time}
            defaultValue={minutes}
            onChange={handleMinutesChange}
          ></input>
          <p>分</p>
        </div>
      );
    }
  };

  const renderClass = () => {
    if (classMouseOn) {
      return <div className={styles.class}>{renderClassItem()}</div>;
    }
  };

  const renderClassItem = () => {
    return category.map((item, index) => {
      return (
        <div
          key={index}
          className={[styles.listClass, styles[item["border"]]].join(" ")}
          onClick={() => handleClassItemClick(index)}
        >
          <div
            className={[styles.baseListClass, styles[item["inner"]]].join(" ")}
          ></div>
        </div>
      );
    });
  };

  return (
    <div>
      <div className={styles.mask}></div>
      <div className={styles.addNewWin}>
        <div className={styles.top}>
          <div className={styles.head}>
            <h2>新建待办</h2>
            <div className={styles.btns}>
              <button
                className={[styles.btn, styles.cancel].join(" ")}
                onClick={onClickCancel}
              >
                取消
              </button>
              <button
                className={[styles.btn, styles.save].join(" ")}
                onClick={handleSave}
              >
                确定
              </button>
            </div>
          </div>
          <textarea
            className={styles.content}
            placeholder="想做点什么？"
            onChange={handleTextChange}
            defaultValue={defaultContent}
          ></textarea>
        </div>
        <div className={styles.bottom}>
          <div
            className={[
              styles.timing,
              timingClicked ? styles.timingClicked : "",
            ].join(" ")}
            onClick={handleTimingClick}
          >
            <svg className={styles.svgTiming}>
              <use xlinkHref="#icon-clock" />
            </svg>
            <div>设置定时</div>
          </div>

          <div>{renderTiming()}</div>

          <div
            className={styles.setClass}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* <div className={styles.listClass}>
              <div className={styles.baseListClass}></div>
            </div> */}
            <div
              className={[
                styles.listClass,
                styles[defaultCategory["border"]],
              ].join(" ")}
            >
              <div
                className={[
                  styles.baseListClass,
                  styles[defaultCategory["inner"]],
                ].join(" ")}
              ></div>
            </div>
            <p>选择分类</p>
            <div>{renderClass()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
