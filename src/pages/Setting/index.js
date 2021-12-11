import React, { useEffect } from "react";
import styles from "./index.module.css";

import check from "../../assets/svg/icon-check.svg";

const skinList = [
  { text: "蓝色", color: "blue" },
  { text: "绿色", color: "emerald" },
  { text: "红色", color: "red" },
  { text: "橘色", color: "orange" },
];

// const skinColors = {
//   blue: [
//     "#eff6ff",
//     "#dbeafe",
//     "#bfdbfe",
//     "#93c5fd",
//     "#60a5fa",
//     "#3b82f6",
//     "#2563eb",
//     "#1d4ed8",
//     "#1e40af",
//     "#1e3a8a",
//     "rgba(43, 149, 252, 0.15)",
//   ],
//   emerald: [
//     "#ECFDF5",
//     "#D1FAE5",
//     "#A7F3D0",
//     "#6EE7B7",
//     "#34D399",
//     "#10B981",
//     "#059669",
//     "#047857",
//     "#065F46",
//     "#064E3B",
//     "rgba(20, 184, 166, 0.15)",
//   ],
//   red: [
//     "#FFF1F2",
//     "#FFE4E6",
//     "#FECDD3",
//     "#FDA4AF",
//     "#FB7185",
//     "#F43F5E",
//     "#E11D48",
//     "#BE123C",
//     "#9F1239",
//     "#881337",
//     "rgba(244, 63, 94, 0.15)",
//   ],
//   orange: [
//     "#fff0e5",
//     "#ffe1cc",
//     "#ffd1b3",
//     "#ffc299",
//     "#ffb380",
//     "#ffa366",
//     "#ff944d",
//     "#ff8533",
//     "#ff761a",
//     "#ff6700",
//     "rgba(255, 179, 92, 0.15)",
//   ],
// };

export default function Setting({ skinType, onClickChangeSkin }) {
  // useEffect(() => {
  //   changeSkin(skinType);
  // });

  // const changeSkin = (skinType) => {
  //   for (let i = 1; i <= 10; i++) {
  //     document.styleSheets[0].cssRules[0].style.setProperty(
  //       "--Theme-" + i,
  //       skinColors[skinType][i - 1]
  //     );
  //   }
  //   document.styleSheets[0].cssRules[0].style.setProperty(
  //     "--Theme-A2",
  //     skinColors[skinType][10]
  //   );
  // };

  const renderSkinList = () => {
    return skinList.map((item) => {
      return (
        <div className={styles.skinList} key={item.color}>
          <div
            className={[styles.skinInfo, styles[item.color]].join(" ")}
            onClick={() => {
              onClickChangeSkin(item.color);
            }}
          >
            {item.text}
          </div>
          {skinType === item.color ? (
            <svg className={styles.svgCheck}>
              <use xlinkHref="#icon-check" />
            </svg>
          ) : (
            ""
          )}
        </div>
      );
    });
  };

  return (
    <div className={styles.setting}>
      <div className={styles.head}>
        <h2 className={styles.headText}>设置</h2>
      </div>
      <div className={styles.settingBox}>
        <div className={styles.list}>
          <span className={styles.name}>主题皮肤</span>
          <div className={styles.skin}>{renderSkinList()}</div>
        </div>
      </div>
    </div>
  );
}
