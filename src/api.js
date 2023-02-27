import axios from "axios";

const instance = axios.create({
    baseURL: "https://hacker-news.firebaseio.com/v0/",
});


export const itemAPI = {
    async getStory(id) {
        try {
            const res = await instance.get(`item/${id}.json`);
            const storyData = res.data;
            console.log(storyData)
            return storyData;
        }
        catch (error) {
            console.log(error.name + ":" + error.message);
            window.alert("Error while getting data");
        }
    },
} 
export const newsAPI = {
    async getFreshNews() {
        debugger
        try{
            const res = await instance.get('/newstories.json');
            const freshNewsIds = res.data;
            const freshNews = Promise.all(freshNewsIds.slice(0, 100).map(itemAPI.getStory));
            console.log((await freshNews).length)
            return freshNews;
        }
        catch (error) {
            console.log(error.name + ":" + error.message);
            window.alert("Error while getting data");
        }
    }
}

