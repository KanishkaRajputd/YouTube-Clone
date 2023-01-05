import {
  legacy_createStore as createStore,
  combineReducers,
} from "@reduxjs/toolkit";
import { HistoryReducer } from "../src/component/History/store/reducer";
import { SiderbarReducer } from "../src/component/Navbar/store/reducer";
import { SearchInputReducer } from "../src/component/Search/store/reducer";

const RootReducer = combineReducers({
  showSidebar: SiderbarReducer,
  searchInput: SearchInputReducer,
  history: HistoryReducer,
});

export const store = createStore(
  RootReducer
  //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
