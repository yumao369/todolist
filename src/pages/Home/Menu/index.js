import React, { useState } from "react";
import styles from "./index.module.css";

export default function Menu({ id, svgId, children, selected, onClick }) {
  return (
    <div
      onClick={() => {
        onClick(id);
      }}
      className={[styles.menu, selected ? styles.menuSelected : ""].join(" ")}
    >
      {/* <img className={styles.img} src={imgURL} alt="" /> */}
      <svg className={styles.svg}>
        <use xlinkHref={svgId} />
      </svg>
      <span className={styles.content}>{children}</span>
    </div>
  );
}
