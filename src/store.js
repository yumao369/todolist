import { createStore, compose } from "redux";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  compose(
    // applyMiddleware(...[thunk]), // 需要使用的中间件数组用于处理异步操作
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
); // 创建一个storage

export default store;
