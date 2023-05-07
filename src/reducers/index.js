import changeTheNumber from "./upDown";

///multiple  reducers ko rkhne ke kam ata h redux
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeTheNumber
});

export default rootReducer;
