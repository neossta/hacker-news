import { itemAPI, newsAPI } from "../api";

const SET_STORY_DATA = 'SET-STORY-DATA';


let initailState = {
    story: [],
};

const storyReducer = function (state = initailState, action) {
    switch (action.type) {
        case SET_STORY_DATA:
            return {
                ...state,
                story: action.data,
            }
        default:
            return state;
    }
};
export default storyReducer;

export const setStoryData = (data) => ({ type: SET_STORY_DATA, data });

export const getStoryData = (id) => {
    return async (dispatch) => {
        let data = await itemAPI.getStory(id);
        dispatch(setStoryData(data));
    }
};