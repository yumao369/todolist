import React from "react";
import { useState } from "react";
import { Route, useHistory, useLocation } from "react-router";

import Menu from "./Menu";
import Todo from "../Todo";
import Statis from "../Statistics";

import styles from "./index.module.css";
import logo from "../../assets/png/logo.png";
import clock from "../../assets/svg/icon-clock.svg";
import statistics from "../../assets/svg/icon-statistics.svg";
import myTodo from "../../container/todoContainer";

const menuData = [
  { svgId: "#icon-clock", menuName: "待办事项", path: "/home" },
  { svgId: "#icon-statistics", menuName: "统计", path: "/home/statis" },
];

export default function Home() {
  let history = useHistory();
  let location = useLocation();

  const [menuSelected, setMenuSelected] = useState(location.pathname);

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
        <Route path="/home/statis" component={Statis}></Route>
        {/* </Router> */}
      </div>
    </div>
  );
}
