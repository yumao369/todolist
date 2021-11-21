import React, { useEffect, useRef, useCallback, useMemo } from "react";
import CalendarItem from "./CalendarItem";
import styles from "./index.module.css";
import { useState } from "react/cjs/react.development";

function Calendar({ today, visibleList, getDateSelected }) {
  // console.log("visibleList", visibleList);
  // const defaultSelected = () => {
  //   const newSelected = [];
  //   for (var i = 0; i < 7; i++) {
  //     i === today.getDate() % 7 ? newSelected.push(1) : newSelected.push(0);
  //   }
  //   return newSelected;
  // };

  // const [selected, setSelected] = useState(defaultSelected());

  // const onSelected = (id) => {
  //   setSelected(selected.map((item, index) => (index === id ? 1 : 0)));
  // };
  const [dateSelected, setDateSeleted] = useState(today.getDate());
  //useEffect最好设置依赖项，否则组件可能会重复喧嚷多次，可以通过console.log查看效果
  useEffect(() => {
    getDateSelected(dateSelected);
  }, [dateSelected]);

  const useFunction = (callback) => {
    const newRef = useRef();
    newRef.current = callback;

    return useCallback((...arr) => {
      newRef.current.apply(null, arr);
    }, []);
  };

  const onClick = useFunction((date) => {
    setDateSeleted(date);
  });

  console.log("calendar");

  // 这个地方不能直接用，因为getDateSelected里面有setState，会造成以下问题
  //Warning: Cannot update a component (`Todo`)
  //while rendering a different component (`Calendar`). To locate the
  //bad setState() call inside `Calendar`
  //解决方法就是把这个方法放进useEffect里面
  // getDateSelected(dateSelected);

  const renderVisibleList = useMemo(() => {
    console.log(visibleList);
    return visibleList.map((v) => {
      const isThisMonth = v.month === visibleList[dateSelected % 7].month;

      return (
        <CalendarItem
          key={v.id}
          isThisMonth={isThisMonth}
          id={v.id}
          today={today}
          selected={dateSelected === v.id}
          onClick={onClick}
        >
          {v.content}
        </CalendarItem>
      );
    });
  }, [visibleList]);

  return (
    <div className={styles.calendar}>
      <div className={styles.calendarItem}>{renderVisibleList}</div>
    </div>
  );
}

export default React.memo(Calendar);
