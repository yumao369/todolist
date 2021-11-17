import React from "react";
import { useState } from "react";
import { Route } from "react-router";

import Menu from "./Menu";

import styles from "./index.module.css";
import logo from "../../assets/png/logo.png";
import clock from "../../assets/svg/icon-clock.svg";
import statistics from "../../assets/svg/icon-statistics.svg";

const menuData = [
  { svgId: "#icon-clock", menuName: "待办事项" },
  { svgId: "#icon-statistics", menuName: "统计" },
];

export default function Home() {
  const [menuSelected, setMenuSelected] = useState([1, 0]);

  const onselected = (menuIndex) => {
    setMenuSelected(
      menuSelected.map((item, index) => (index === menuIndex ? 1 : 0))
    );
    console.log(menuSelected);
  };

  const renderMenu = () => {
    return menuData.map((item, index) => {
      return (
        <Menu
          key={item.svgId}
          id={index}
          svgId={item.svgId}
          selected={menuSelected[index]}
          onClick={onselected}
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
      {/* <div className={styles.content}>
        <Route path="/home/todo" component={ToDo}></Route>
      </div> */}
    </div>
  );
}
