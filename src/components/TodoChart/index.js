import React, { useEffect, useMemo, useState } from "react";
import moment from "moment";
import styles from "./index.module.css";

export default function TodoChart({ date, todoList, isSample }) {
  const today = new Date();
  const [screenWidth, setScreenWidth] = useState(document.body.clientWidth);
  const [visiblePoint, setVisiblePoint] = useState(0);

  const todoCompleted = (() => {
    let todoCompleted;
    let todo;
    let temp = [];
    let datee = [...date];
    datee.unshift(
      moment(new Date(today.getTime() - 192 * 60 * 60 * 1000)).format(
        "yyyy-MM-DD"
      )
    );
    datee.push(moment(today).format("yyyy-MM-DD"));
    for (let i = 0; i < 9; i++) {
      todo = todoList.filter((item) => item.date === datee[i]);
      todoCompleted = todo.filter((item) => item.iscompleted === true);
      if (todoCompleted.length) {
        temp.push(todoCompleted.length);
      } else {
        temp.push(0);
      }
    }
    return temp;
  })();

  const points = [1, 2, 3, 4, 5, 6, 7];

  const hoverBox = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];

  useEffect(() => {
    monitorScreenWidth();
  });

  const monitorScreenWidth = () => {
    window.addEventListener("resize", () => {
      window.screenWidth = document.body.clientWidth;
      setScreenWidth(window.screenWidth);
    });
  };

  const xCoordParm = useMemo(() => {
    if (screenWidth < 1152) {
      return 1;
    } else if (screenWidth >= 1152 && screenWidth < 1280) {
      return 1.15;
    } else if (screenWidth >= 1280) {
      return 1.3;
    }
  }, [screenWidth]);

  const svgBoxWidth = useMemo(() => {
    return 644 * xCoordParm;
  }, [xCoordParm]);

  const viewWidth = useMemo(() => {
    return 736 * xCoordParm;
  }, [xCoordParm]);

  const visibleData = useMemo(() => {
    return isSample ? [2, 1, 8, 3, 6, 2, 3, 2, 0] : todoCompleted;
  }, [isSample]);

  const rowHeight = useMemo(() => {
    let maxRow = Math.max(...visibleData);
    //328是path的高度
    return parseInt(328 / maxRow);
  }, [visibleData]);

  const pX = useMemo(() => {
    const tempPX = [];
    for (let i = 0; i < 9; i++) {
      tempPX.push(parseInt(92 * xCoordParm * i * 100) / 100);
    }
    return tempPX;
  }, [xCoordParm]);

  const pY = useMemo(() => {
    const tempPY = [];
    for (let i = 0; i < 9; i++) {
      tempPY.push((98 + rowHeight * visibleData[i]) * -1);
    }
    return tempPY;
  }, [visibleData, rowHeight]);

  const path = useMemo(() => {
    return `M ${pX[0]} ${pY[0]}
    C ${pX[0] + 50} ${pY[0]}, ${pX[1] - 50} ${pY[1]}, ${pX[1]} ${pY[1]}
    S ${pX[1] + 50} ${pY[2]}, ${pX[2]} ${pY[2]}
    S ${pX[2] + 50} ${pY[3]}, ${pX[3]} ${pY[3]}
    S ${pX[3] + 50} ${pY[4]}, ${pX[4]} ${pY[4]}
    S ${pX[4] + 50} ${pY[5]}, ${pX[5]} ${pY[5]}
    S ${pX[5] + 50} ${pY[6]}, ${pX[6]} ${pY[6]}
    S ${pX[6] + 50} ${pY[7]}, ${pX[7]} ${pY[7]}
    S ${pX[7] + 50} ${pY[8]}, ${pX[8]} ${pY[8]}`;
  }, [pX, pY]);

  const renderPoints = () => {
    return points.map((item) => {
      if (item === visiblePoint) {
        return (
          <g key={item}>
            <circle
              className={styles.shadow}
              cx={pX[item]}
              cy={pY[item]}
              r="14"
            />
            <circle
              cx={pX[item]}
              cy={pY[item]}
              r="14"
              style={{ fill: "#ffffff" }}
            />
            <circle
              className={styles.cCircle}
              cx={pX[item]}
              cy={pY[item]}
              r="7"
            />
          </g>
        );
      }
    });
  };

  const renderDate = () => {
    return date.map((item, index) => {
      return (
        <p className={styles.exactDate} key={index}>
          {new Date(item).getDate()}/{new Date(item).getMonth() + 1}
        </p>
      );
    });
  };

  const renderHoverBox = () => {
    return hoverBox.map((item) => {
      return (
        <div
          className={styles.exactHoverBox}
          key={item.id}
          onMouseOver={() => {
            setVisiblePoint(item.id + 1);
          }}
          onMouseLeave={() => {
            setVisiblePoint(0);
          }}
        ></div>
      );
    });
  };

  return (
    <div className={styles.todoChart}>
      <div className={styles.head}>
        <p className={styles.headText}>共设置</p>
        <span className={styles.headData}>1</span>
        <p className={styles.headText}>项待办，共完成</p>
        <span className={styles.headData}>1</span>
        <p className={styles.headText}>项</p>
      </div>
      {/* 在尖括号内设置element.style */}
      <div className={styles.svgBox} style={{ width: svgBoxWidth }}>
        <svg
          className={styles.diagram}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width={viewWidth}
          viewBox={`0 -440 ${viewWidth} 440`}
          height="440"
        >
          {/* 定义渐变、模糊等 */}
          <defs>
            <linearGradient id="l1" x1="0%" y1="0%" x2="0" y2="100%">
              <stop className={styles.stop1} offset="0%" />
              <stop className={styles.stop2} offset="100%" />
            </linearGradient>
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
            </filter>
          </defs>
          {/* 渐变 */}
          <path d={path} className={styles.gradual} />
          {/* 描边 */}
          <path d={path} className={styles.border} />
          {renderPoints()}
        </svg>
      </div>
      <div className={styles.date} style={{ width: svgBoxWidth }}>
        {renderDate()}
      </div>
      <div className={styles.hoverBox} style={{ width: svgBoxWidth }}>
        {renderHoverBox()}
      </div>
    </div>
  );
}
