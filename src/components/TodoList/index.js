import React, { useState } from "react";

import styles from "./index.module.css";
import check from "../../assets/svg/icon-check.svg";
import modify from "../../assets/svg/icon-modify.svg";
import dele from "../../assets/svg/icon-delete.svg";
import clock from "../../assets/svg/icon-clock.svg";

export default function TodoList({
  id,
  content,
  isCompleted,
  category,
  hour,
  minute,
  onClickEdit,
  onclickEditNew,
  onclickEditId,
  onClickDeleteTodo,
  onClickComplete,
}) {
  const [mouseOn, setMouseOn] = useState(false);

  const handleMouseEnter = () => {
    setMouseOn(true);
  };

  const handleMouseLeave = () => {
    setMouseOn(false);
  };

  const handleEditClick = () => {
    onClickEdit();
    onclickEditNew();
    onclickEditId(id);
  };

  const handleDeleteClick = () => {
    onClickDeleteTodo(id);
  };

  const renderListR = () => {
    if (mouseOn && !isCompleted) {
      return (
        <div className={styles.listItemRight}>
          <svg className={styles.svgModify} onClick={handleEditClick}>
            <use xlinkHref="#icon-modify" />
          </svg>
          <svg className={styles.svgDele} onClick={handleDeleteClick}>
            <use xlinkHref="#icon-delete" />
          </svg>
        </div>
      );
    } else {
      return (
        <div className={[styles.listItemRight, styles.noListR].join(" ")}></div>
      );
    }
  };

  const renderClock = () => {
    if (hour) {
      return (
        <div className={styles.clock}>
          <svg className={styles.svgClock}>
            <use xlinkHref="#icon-clock" />
          </svg>
          <div className={styles.clockContent}>
            {hour}:{minute}
          </div>
        </div>
      );
    }
  };

  return (
    <div
      className={[
        styles.listItem,
        isCompleted ? styles.listItemChecked : "",
      ].join(" ")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/**待办事项类别 */}
      <div
        className={[styles.listItemClass, styles[category["inner"]]].join(" ")}
      ></div>
      {/**待办事项左边部分 */}
      <div className={styles.listItemLeft}>
        {/**是否完成按钮 */}
        <div
          className={[styles.isChecked, isCompleted ? styles.checked : ""].join(
            " "
          )}
          onClick={() => onClickComplete(id)}
        >
          <div
            className={[styles.bg, isCompleted ? styles.bgChecked : ""].join(
              " "
            )}
          ></div>
          <svg className={styles.svgCheck}>
            <use xlinkHref="#icon-check" />
          </svg>
        </div>
        {/**待办事项内容 */}
        <div className={styles.listContent}>
          <div className={styles.content}>{content}</div>
          {renderClock()}
        </div>
      </div>
      <>{renderListR()}</>
    </div>
  );
}
