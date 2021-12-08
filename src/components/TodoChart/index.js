import React, { useEffect, useState } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import styles from "./index.module.css";

export default function TodoChart() {
  const [xCoordParm, setXCoordParm] = useState(1);
  const [screenWidth, setScreenWidth] = useState(document.body.clientWidth);
  const [svgBoxWidth, setSvgBoxWidth] = useState(0);
  const [viewWidth, setViewWidth] = useState(736);
  const [rowHeight, setRowHeight] = useState(328);
  const [visibleData, setVisibleData] = useState([2, 1, 4, 3, 6, 2, 3, 2, 0]);
  const [pX, setPX] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [pY, setPY] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [path, setPath] = useState("");
  const [visiblePoint, setVisiblePoint] = useState(0);

  const points = [1, 2, 3, 4, 5, 6, 7];

  const today = new Date();

  //前七日
  const date = [
    new Date(today.getTime() - 168 * 60 * 60 * 1000),
    new Date(today.getTime() - 144 * 60 * 60 * 1000),
    new Date(today.getTime() - 120 * 60 * 60 * 1000),
    new Date(today.getTime() - 96 * 60 * 60 * 1000),
    new Date(today.getTime() - 72 * 60 * 60 * 1000),
    new Date(today.getTime() - 48 * 60 * 60 * 1000),
    new Date(today.getTime() - 24 * 60 * 60 * 1000),
  ];

  //
  const hoverBox = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];

  useDeepCompareEffect(() => {
    // sethoverBox();
    // console.log("hoverBox", hoverBox);
    monitorScreenWidth();
    changeXCoordParm();
    changeSvgBoxWidth();
    changeViewWidth();
    changePath();
    changeRowHeight();
    changeVisibleData();
    changePXAndPY();
    // console.log("ROWHEIGHT", rowHeight);
    // console.log("visibleData", visibleData);
    // console.log("PX", pX);
    // console.log("PY", pY);
    // console.log("path", path);
  }, [
    xCoordParm,
    screenWidth,
    svgBoxWidth,
    viewWidth,
    rowHeight,
    visibleData,
    pX,
    pY,
    path,
  ]);

  // const sethoverBox = () => {
  //   for (let i = 0; i < 7; i++) {
  //     hoverBox[i] = {};
  //     hoverBox[i].id = i;
  //   }
  // };

  //监听视口宽度
  const monitorScreenWidth = () => {
    // console.log("setScreenWidth");
    window.addEventListener("resize", () => {
      window.screenWidth = document.body.clientWidth;
      setScreenWidth(window.screenWidth);
    });
  };

  // 侦听视口宽度，到达断点时改变svg折线图的x坐标参数/及其附属盒子的宽度
  const changeXCoordParm = () => {
    // console.log("setXCoordParm");
    if (screenWidth < 1152) {
      setXCoordParm(1);
    } else if (screenWidth >= 1152 && screenWidth < 1280) {
      setXCoordParm(1.15);
    } else if (screenWidth >= 1280) {
      setXCoordParm(1.3);
    }
  };

  //svgbox随窗口大小改变而改变
  const changeSvgBoxWidth = () => {
    // console.log("setSvgBoxWidth");
    setSvgBoxWidth(644 * xCoordParm);
  };

  const changeViewWidth = () => {
    // console.log("setViewWidth");
    setViewWidth(736 * xCoordParm);
  };

  const changePath = () => {
    setPath(`M ${pX[0]} ${pY[0]}
    C ${pX[0] + 50} ${pY[0]}, ${pX[1] - 50} ${pY[1]}, ${pX[1]} ${pY[1]}
    S ${pX[1] + 50} ${pY[2]}, ${pX[2]} ${pY[2]}
    S ${pX[2] + 50} ${pY[3]}, ${pX[3]} ${pY[3]}
    S ${pX[3] + 50} ${pY[4]}, ${pX[4]} ${pY[4]}
    S ${pX[4] + 50} ${pY[5]}, ${pX[5]} ${pY[5]}
    S ${pX[5] + 50} ${pY[6]}, ${pX[6]} ${pY[6]}
    S ${pX[6] + 50} ${pY[7]}, ${pX[7]} ${pY[7]}
    S ${pX[7] + 50} ${pY[8]}, ${pX[8]} ${pY[8]}`);
  };

  const changeRowHeight = () => {
    // console.log("setRowHeight visibledata");
    let maxRow = Math.max(...visibleData);
    //328是path的高度
    setRowHeight(parseInt(328 / maxRow));
  };

  const changeVisibleData = () => {
    // !this.isSampleMode ? this.todoNumberCompleted : [2, 1, 4, 3, 6, 2, 3, 2, 0];
    //设置对象不能这样，因为react检查时是对地址的检查，虽然内容一样，但是引用地址不一样，这样会导致每次set的值不一样，导致重新渲染，useeffect，而重新渲染，set的值不一样，又会重新set，导致无限循环
    // console.log("setVisibleData");
    setVisibleData([2, 1, 8, 3, 6, 2, 3, 2, 0]);
  };

  const changePXAndPY = () => {
    const tempPX = pX;
    // console.log("tempPX", tempPX);
    const tempPY = pY;
    for (let i = 0; i < 9; i++) {
      tempPX.splice(i, 1, parseInt(92 * xCoordParm * i * 100) / 100);
      tempPY.splice(i, 1, (98 + rowHeight * visibleData[i]) * -1);
    }
    setPX(tempPX);
    setPY(tempPY);
  };

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
          {item.getDate()}/{item.getMonth() + 1}
        </p>
      );
    });
  };

  const renderHoverBox = () => {
    // console.log("hoverBox", hoverBox, hoverBox[0]);
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
          // @mouseover="setVisible(li.id)"
          // @mouseleave="clearVisible()"
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
