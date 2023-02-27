import { applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import newsReducer from "./news-reducer";
import storyReducer from "./story-reducer";


const reducers = combineReducers({
    newsPage: newsReducer,
    storyPage: storyReducer,
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))