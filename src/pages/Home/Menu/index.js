import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

export default function Menu({ id, svgId, path, children, selected, onClick }) {
  return (
    <div
      onClick={() => {
        onClick(path);
      }}
      className={[styles.menu, selected ? styles.menuSelected : ""].join(" ")}
    >
      <svg className={styles.svg}>
        <use xlinkHref={svgId} />
      </svg>
      <span className={styles.content}>{children}</span>
    </div>
  );
}

Menu.propTypes = {
  id: PropTypes.number,
  svgId: PropTypes.string,
  path: PropTypes.string,
  children: PropTypes.string,
  selected: PropTypes.bool,
  onclick: PropTypes.func,
};
