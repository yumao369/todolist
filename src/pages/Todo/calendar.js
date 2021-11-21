import * as moment from "moment";

export function calendar(date) {
  const formatDate = moment(date).format("yyyy-MM-DD");
  // console.log(date);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  function daysInMonth(year) {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      daysInMonth[1] = 29;
    }
    return daysInMonth;
  }

  function targetDay(year, month) {
    return new Date(year, month, 1).getDay();
  }

  function start(year, month) {
    let start = 0;
    if (month === 0) {
      start = daysInMonth(year - 1)[11] - targetDay(year, month) + 1;
    } else {
      start = daysInMonth(year)[month - 1] - targetDay(year, month) + 1;
    }
    return start;
  }

  function preMonth(visibleList, year, month) {
    let target = targetDay(year, month);
    if (target > 0) {
      let startAdd = start(year, month);
      for (let i = 0; i < target; i++) {
        let obj = {
          type: "pre",
          content: startAdd,
        };
        // 如果当前月份是1月，则上个月是12月
        if (month === 0) {
          obj.month = 11;
        } else {
          obj.month = month - 1;
        }
        startAdd++;
        visibleList.push(obj);
      }
    }
  }

  function thisMonth(visibleList, year, month) {
    let daysInThisMonth = daysInMonth(year);
    for (let i = 0; i < daysInThisMonth[month]; i++) {
      let obj = {
        type: "normal",
        content: i + 1,
        month: month,
      };
      visibleList.push(obj);
    }
  }

  function nextMonth(visibleList, year, month) {
    // 判断下一个月需要展示多少天
    if (visibleList.length > 35) {
      var nextNum = 42 - visibleList.length;
    } else {
      nextNum = 35 - visibleList.length;
    }
    for (let i = 0; i < nextNum; i++) {
      let obj = {
        type: "next",
        content: i + 1,
      };
      // 如果当前为12月，则次月为1月
      if (month === 11) {
        obj.month = 0;
      } else {
        obj.month = month + 1;
      }
      visibleList.push(obj);
    }
  }

  function addYearandId(visibleList, year, i) {
    // 如果month属性的值是11，且type属性为pre，则年份减1，month为1时同理
    if (visibleList[i].month === 11 && visibleList[i].type === "pre") {
      visibleList[i].year = year - 1;
      visibleList[i].id = i;
      visibleList[i].group = Math.floor(i / 7);
    } else if (visibleList[i].month === 0 && visibleList[i].type === "next") {
      visibleList[i].year = year + 1;
      visibleList[i].id = i;
      visibleList[i].group = Math.floor(i / 7);
    } else {
      visibleList[i].year = year;
      visibleList[i].id = i;
      visibleList[i].group = Math.floor(i / 7);
    }
  }

  function formatVisibleList(visibleList) {
    visibleList.map((v) => {
      let date = moment(new Date(v.year, v.month, v.content)).format(
        "yyyy-MM-DD"
      );
      v.date = date;
      return v;
    });
  }

  function visibleCalendar(year, month) {
    let visibleList = [];
    preMonth(visibleList, year, month);
    thisMonth(visibleList, year, month);
    nextMonth(visibleList, year, month);
    for (let i = 0; i < visibleList.length; i++) {
      addYearandId(visibleList, year, i);
    }
    formatVisibleList(visibleList);
    return visibleList;
  }

  // console.log(formatDate);
  const visibleList = visibleCalendar(year, month);
  // console.log(visibleList);
  const group = visibleList.filter((v) => {
    // console.log(v.date === formatDate);
    return v.date === formatDate;
  })[0].group;
  // console.log(group);
  const finalV = visibleList.filter((v) => v.group === group);
  // console.log(finalV);
  return finalV;
}
