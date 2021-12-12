import React from "react";
import styles from "./index.module.css";
import logo from "../../assets/png/logo.png";
import logoText from "../../assets/png/logoText.png";

export default function About() {
  return (
    <div className={styles.about}>
      <img className={styles.logo} src={logo} alt="" />
      <img className={styles.logoText} src={logoText} alt="" />
      <span class="version">Version 0.1.0</span>
      <div className={styles.infoBox}>
        <img className={styles.infoLogoText} src={logoText} alt="" />
        <p className={styles.info}>
          是我的react hooks WebApp尝试，十分简单但是遍布惊喜。
        </p>
      </div>
      <div className={styles.footer}>
        <ul>
          <h4>目前存在的问题</h4>
          <li>变量命名不规范</li>
          <li>某些地方代码层次不清晰</li>
          <li>组件重复渲染</li>
        </ul>
        <ul>
          <h4>暂未完成的功能</h4>
          <li>账号登录</li>
          <li>可自定义的分类功能</li>
        </ul>
        <ul>
          <h4>未来可能添加的功能（特性）</h4>
          <li>云同步</li>
          <li>深色模式</li>
          <li>中英文切换</li>
        </ul>
      </div>
    </div>
  );
}
