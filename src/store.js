import { createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";

const config = {
  key: "root",
  storage: storage, //引入的storage是存在local或session
  blacklist: ["selectDate"],
};

const store = createStore(
  persistReducer(config, rootReducer),
  compose(
    // applyMiddleware(...[thunk]), // 需要使用的中间件数组用于处理异步操作
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
); // 创建一个storage
persistStore(store);
export default store;
