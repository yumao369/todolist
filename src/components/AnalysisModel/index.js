import moment from "moment";
import React, { useState } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import styles from "./index.module.css";

const path = [
  "M 133 0 L 0 221 L 265 221 Z",
  "M 133 22 L 19 210 L 246 210 Z",
  "M 133 44 L 38 199 L 227 199 Z",
  "M 133 66 L 57 188 L 209 188 Z",
  "M 133 88 L 76 177 L 190 177 Z",
  "M 133 110 L 95 166 L 171 166 Z",
  "M 133 132 L 114 155 L 152 155 Z",
  // "M 133 -22 L 0 210 L 265 210 Z",
  // "M 133 0 L 19 199 L 246 199 Z",
  // "M 133 22 L 38 188 L 227 188 Z",
  // "M 133 44 L 57 177 L 209 177 Z",
  // "M 133 66 L 76 166 L 190 166 Z",
  // "M 133 88 L 95 155 L 171 155 Z",
  // "M 133 110 L 114 144 L 152 144 Z",
];

//每个path的转折点的坐标
const topY = ["144", "132", "110", "88", "66", "44", "22", "0"];
const bottomLeftX = ["133", "114", "95", "76", "57", "38", "19", "0"];
const bottomRigthX = ["133", "152", "171", "190", "209", "227", "246", "265"];
const bottomY = ["144", "155", "166", "177", "188", "199", "210", "221"];

// const today = new Date();

// //前七日
// const date = [
//   new Date(today.getTime() - 168 * 60 * 60 * 1000),
//   new Date(today.getTime() - 144 * 60 * 60 * 1000),
//   new Date(today.getTime() - 120 * 60 * 60 * 1000),
//   new Date(today.getTime() - 96 * 60 * 60 * 1000),
//   new Date(today.getTime() - 72 * 60 * 60 * 1000),
//   new Date(today.getTime() - 48 * 60 * 60 * 1000),
//   new Date(today.getTime() - 24 * 60 * 60 * 1000),
// ];

export default function AnalysisModel({ todoList, date, isSample }) {
  // console.log("todolist", todoList);
  // const [isSampleData, setIsSampleData] = useState(true);
  const [ratio, setRatio] = useState([]);
  const [specialPath, setSpecialPath] = useState();
  //坐标点
  const [visibleL3Y, setVisibleL3Y] = useState(0);
  const [visibleL2X, setVisibleL2x] = useState(0);
  const [visibleL2Y, setVisibleL2Y] = useState(0);
  const [visibleL1X, setVisibleL1X] = useState(0);
  const [visibleL1Y, setVisibleL1Y] = useState(0);
  //勤劳
  const [level3, setLevel3] = useState(0);
  //一般
  const [level2, setLevel2] = useState(0);
  //懒惰
  const [level1, setLevel1] = useState(0);
  const [levelMax, setLevelMax] = useState(0);

  const [levelPercentage, setLevelPercentage] = useState(0);
  const [text, setText] = useState("");

  useDeepCompareEffect(() => {
    // changeIsSampleData();
    changeRatio();

    // console.log("ratio", ratio);
    // console.log("level", level1, level2, level3);
    // console.log(visibleL3Y, visibleL2X, visibleL2Y, visibleL1X, visibleL1Y);
    changeLevel();
    changeLevelMax();
    changePoint();
    changePath();
    changeLevelPercentage();
    changeText();
  }, [
    // isSampleData,
    ratio,
    level3,
    level2,
    level1,
    levelMax,
    visibleL3Y,
    visibleL2X,
    visibleL2Y,
    visibleL1X,
    visibleL1Y,
    specialPath,
    levelPercentage,
    text,
  ]);

  // const changeIsSampleData = () => {
  //   if (todoList.length) {
  //     setIsSampleData(false);
  //   }
  // };

  const changeRatio = () => {
    let todoCompleted;
    let todo;
    let ratioTemp = [];
    for (let i = 0; i < 7; i++) {
      todo = todoList.filter((item) => item.date === date[i]);
      // todoCompleted = todoList.filter((item) => item.iscompleted === true);
      todoCompleted = todo.filter((item) => item.iscompleted === true);
      // console.log("todoana", todo);
      // console.log("todocana", todoCompleted);
      if (todo.length) {
        let value =
          Math.floor((todoCompleted.length / todo.length) * 100) / 100;
        ratioTemp.push(value);
      } else {
        ratioTemp.push(0);
      }
    }
    setRatio(ratioTemp);
    // setRatio([1, 1, 1, 1, 1, 1, 1]);
  };

  const changeLevel = () => {
    setLevel3(ratio.filter((val) => val >= 0.8).length);
    setLevel2(ratio.filter((val) => val >= 0.5 && val < 0.8).length);
    setLevel1(ratio.filter((val) => val < 0.5).length);
  };

  const changeLevelMax = () => {
    let levelArr = [level1, level2, level3];
    setLevelMax(Math.max(...levelArr));
  };

  const changePoint = () => {
    setVisibleL3Y(isSample ? "110" : topY[level3]);
    setVisibleL2x(isSample ? "76" : bottomLeftX[level2]);
    setVisibleL2Y(isSample ? "177" : bottomY[level2]);
    setVisibleL1X(isSample ? "171" : bottomRigthX[level1]);
    setVisibleL1Y(isSample ? "166" : bottomY[level1]);
  };

  const changePath = () => {
    setSpecialPath(
      `M 133 ${visibleL3Y} L ${visibleL2X} ${visibleL2Y} L ${visibleL1X} ${visibleL1Y} Z`
    );
  };

  const changeLevelPercentage = () => {
    setLevelPercentage(
      isSample ? 57 : parseInt((levelMax / ratio.length) * 100)
    );
  };

  const changeText = () => {
    let nums = 0;
    for (let n of ratio) {
      nums += n;
    }
    let ave = nums / ratio.length;
    if (isSample) {
      setText("一般");
    } else {
      if (ave < 0.5) {
        setText("懒惰");
      } else if (ave >= 0.5 && levelMax < 0.8) {
        setText("一般");
      } else if (ave >= 0.8) {
        setText("勤奋");
      }
    }
  };

  const renderPath = () => {
    return path.map((item, index) => {
      return <path className={styles.path} d={item} key={index} />;
    });
  };

  return (
    <div className={styles.analysisModel}>
      <h6 className={styles.head}>时间掌握度评估</h6>
      <div className={styles.svgBox}>
        <svg
          className={styles.diagram}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 266 266"
          x="0px"
          y="0px"
        >
          {renderPath()}
          <path className={styles.specialPath} d={specialPath} />
        </svg>
        <span className={[styles.span, styles.span1].join(" ")}>勤奋</span>
        <span className={[styles.span, styles.span2].join(" ")}>一般</span>
        <span className={[styles.span, styles.span3].join(" ")}>懒惰</span>
      </div>
      <p className={styles.text}>
        <span className={styles.info}>{levelPercentage}%</span>的时间你在 {text}{" "}
        中度过
        <br />
        加油，我们在山顶见
      </p>
    </div>
  );
}
