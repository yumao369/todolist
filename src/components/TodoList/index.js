import React, { useState } from "react";

import styles from "./index.module.css";
import complete from "../../assets/svg/icon-complete.svg";
import modify from "../../assets/svg/icon-modify.svg";
import dele from "../../assets/svg/icon-delete.svg";
import clock from "../../assets/svg/icon-clock.svg";

export default function TodoList({
  id,
  content,
  isComplete,
  category,
  hour,
  minute,
  onClickEdit,
  onclickEditNew,
  onclickEditId,
}) {
  console.log("category", category);
  const [isChecked, setIsChecked] = useState(false);
  const [mouseOn, setMouseOn] = useState(false);

  const checkListItem = () => {
    setIsChecked(!isChecked);
  };

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

  const renderListR = () => {
    if (mouseOn && !isChecked) {
      return (
        <div className={styles.listItemRight}>
          <svg className={styles.svgModify} onClick={handleEditClick}>
            <use xlinkHref="#icon-modify" />
          </svg>
          <svg className={styles.svgDele}>
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
        isChecked ? styles.listItemChecked : "",
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
          className={[styles.isChecked, isChecked ? styles.checked : ""].join(
            " "
          )}
          onClick={checkListItem}
        >
          <div
            className={[styles.bg, isChecked ? styles.bgChecked : ""].join(" ")}
          ></div>
          <svg className={styles.svgCheck}>
            <use xlinkHref="#icon-complete" />
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
