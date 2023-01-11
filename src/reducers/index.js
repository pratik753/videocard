import { combineReducers } from "redux";

import vcards from "./vcards";
import historyvideo from "./historyvideo";

export const reducers = combineReducers({ vcards, historyvideo });
