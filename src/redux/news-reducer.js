import { newsAPI } from "../api";

const SET_NEWS_DATA = 'news/SET-USER-DATA';
const TOGGLE_IS_FETCHING = 'news/TOGGLE-IS-FETCHING'


let initailState = {
    news: [],
    isFetching: true,
};

const newsReducer = function (state = initailState, action) {
    switch (action.type) {
        case SET_NEWS_DATA:
            return {
                ...state,
                news: action.data,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state;
    }
};
export default newsReducer;

export const setIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching,
    }
};

export const setNewsData = (data) => ({ type: SET_NEWS_DATA, data });

export const getNewsData = () => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        console.log('here')
        let data = await newsAPI.getFreshNews();
        dispatch(setIsFetching(false));
        dispatch(setNewsData(data));
    }
}