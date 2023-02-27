import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStoryData } from "../../redux/story-reducer";
import Comments from '../Comments/Comments';

function StoryPage() {
    const {id} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {dispatch(getStoryData(id))}, []);
    const story = useSelector(state => state.storyPage.story)
    return <div>
        <h2>{story.title}</h2>
        <a href={story.url}>Link</a>
        <div>{'Autor: ' + story.by}</div>
        <div>{new Date(story.time * 1000).toLocaleDateString('en-US', {
                hour: 'numeric',
                minute: 'numeric'
          })}</div>
        <Comments ids={story.kids} />
    </div>
};

export default StoryPage;