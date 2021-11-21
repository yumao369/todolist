import React, { useEffect, useState } from "react";

import styles from "./index.module.css";
import clock from "../../assets/svg/icon-clock.svg";

export default function NewTodo({ getNew }) {
  const [timingClicked, setTimingClicked] = useState(false);
  const [classMouseOn, setClassMouseOn] = useState(false);
  //组件内部用于控制该组件是否显示的量
  const [exist, setExist] = useState(true);
  const [listData, setListData] = useState({});
  const [textValue, setTextValue] = useState("");

  console.log("newtodo");

  useEffect(() => {
    getNew({ exist, listData });
  }, [exist, listData]);

  const handleTimingClick = () => {
    setTimingClicked(!timingClicked);
  };

  const handleMouseEnter = () => {
    setClassMouseOn(true);
  };

  const handleMouseLeave = () => {
    setClassMouseOn(false);
  };

  const handleCancel = () => {
    setExist(false);
  };

  const handleSave = () => {
    if (textValue !== "") {
      setListData({ content: textValue });
      setExist(false);
    }
  };

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const renderTiming = () => {
    if (timingClicked) {
      return (
        <div className={styles.setTiming}>
          <input className={styles.time}></input>
          <p>时</p>
          <input className={styles.time}></input>
          <p>分</p>
        </div>
      );
    }
  };

  const renderClass = () => {
    if (classMouseOn) {
      return (
        <div className={styles.class}>
          <div className={[styles.listClass]}>
            <div className={styles.baseListClass}></div>
          </div>
          <div className={[styles.listClass, styles.redBorder].join(" ")}>
            <div
              className={[styles.baseListClass, styles.redClass].join(" ")}
            ></div>
          </div>
          <div className={[styles.listClass, styles.blueBorder].join(" ")}>
            <div
              className={[styles.baseListClass, styles.blueClass].join(" ")}
            ></div>
          </div>
          <div className={[styles.listClass, styles.emeraldBorder].join(" ")}>
            <div
              className={[styles.baseListClass, styles.emeraldClass].join(" ")}
            ></div>
          </div>
        </div>
      );
    }
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
                onClick={handleCancel}
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
            <div className={styles.listClass}>
              <div className={styles.baseListClass}></div>
            </div>
            <p>选择分类</p>
            <div>{renderClass()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
