import React from "react";
import { useState, useEffect } from "react";
import { Route, useHistory, useLocation } from "react-router";

import Menu from "./Menu";
import Todo from "../Todo";
import Statis from "../Statistics";

import styles from "./index.module.css";
import logo from "../../assets/png/logo.png";
import clock from "../../assets/svg/icon-clock.svg";
import statistics from "../../assets/svg/icon-statistics.svg";
import setting from "../../assets/svg/icon-setting.svg";
import myTodo from "../../container/todoContainer";
import MyStatis from "../../container/statisContainer";
import Setting from "../Setting";
import MySetting from "../../container/settingContainer";

const menuData = [
  { svgId: "#icon-clock", menuName: "待办事项", path: "/home" },
  { svgId: "#icon-statistics", menuName: "统计", path: "/home/statis" },
  { svgId: "#icon-setting", menuName: "设置", path: "/home/setting" },
];

const skinColors = {
  blue: [
    "#eff6ff",
    "#dbeafe",
    "#bfdbfe",
    "#93c5fd",
    "#60a5fa",
    "#3b82f6",
    "#2563eb",
    "#1d4ed8",
    "#1e40af",
    "#1e3a8a",
    "rgba(43, 149, 252, 0.15)",
  ],
  emerald: [
    "#ECFDF5",
    "#D1FAE5",
    "#A7F3D0",
    "#6EE7B7",
    "#34D399",
    "#10B981",
    "#059669",
    "#047857",
    "#065F46",
    "#064E3B",
    "rgba(20, 184, 166, 0.15)",
  ],
  red: [
    "#FFF1F2",
    "#FFE4E6",
    "#FECDD3",
    "#FDA4AF",
    "#FB7185",
    "#F43F5E",
    "#E11D48",
    "#BE123C",
    "#9F1239",
    "#881337",
    "rgba(244, 63, 94, 0.15)",
  ],
  orange: [
    "#fff0e5",
    "#ffe1cc",
    "#ffd1b3",
    "#ffc299",
    "#ffb380",
    "#ffa366",
    "#ff944d",
    "#ff8533",
    "#ff761a",
    "#ff6700",
    "rgba(255, 179, 92, 0.15)",
  ],
};

export default function Home({ skinType }) {
  let history = useHistory();
  let location = useLocation();

  const [menuSelected, setMenuSelected] = useState(location.pathname);

  useEffect(() => {
    changeSkin(skinType);
  });

  const changeSkin = (skinType) => {
    for (let i = 1; i <= 10; i++) {
      document.styleSheets[0].cssRules[0].style.setProperty(
        "--Theme-" + i,
        skinColors[skinType][i - 1]
      );
    }
    document.styleSheets[0].cssRules[0].style.setProperty(
      "--Theme-A2",
      skinColors[skinType][10]
    );
  };

  const onClick = (path) => {
    setMenuSelected(path);
    //hook中不能这样使用this,js的特性决定
    // this.props.history.push(path);
    history.push(path);
  };

  const renderMenu = () => {
    return menuData.map((item, index) => {
      return (
        <Menu
          key={item.svgId}
          id={index}
          path={item.path}
          svgId={item.svgId}
          selected={menuSelected === item.path}
          onClick={onClick}
        >
          {item.menuName}
        </Menu>
      );
    });
  };

  return (
    <div className={styles.home}>
      {/**左边导航栏 */}
      <div className={styles.nav}>
        {/**logo */}
        <div className={styles.logoBox}>
          <img className={styles.logo} src={logo} alt="" />
        </div>
        {/**user */}
        <div className={styles.userBox}>
          <div className={styles.user}>U</div>
          <p className={styles.userName}>User Name</p>
        </div>
        {/**button */}
        {/* <Menu imgURL={clock}>待办事项</Menu>
        <Menu imgURL={statistics}>统计</Menu> */}
        <>{renderMenu()}</>
      </div>
      {/* 右边主题内容 */}
      <div className={styles.content}>
        {/* 此处不能再包裹一层router，否则会出现url改变，页面不改变的情况 */}
        {/* https://segmentfault.com/q/1010000009790180 */}
        {/* <Router history={history}> */}
        <Route exact path="/home" component={myTodo}></Route>
        <Route path="/home/statis" component={MyStatis}></Route>
        {/* <Route path="/home/setting" component={Setting}></Route> */}
        <Route path="/home/setting" component={MySetting}></Route>
        {/* </Router> */}
      </div>
    </div>
  );
}
