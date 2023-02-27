import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getNewsData } from '../../redux/news-reducer';
import Loader from '../Loader/Loader';
import { Story } from '../Story/Story';
import { UpdateButton } from '../UpdateButton/UpdateButton';

function NewsPage() {
  const dispatch = useDispatch();
  const news = useSelector(state => state.newsPage.news);
  const isFetching = useSelector(state => state.newsPage.isFetching);
  useEffect(() => {dispatch(getNewsData())}, [])
  useEffect(() => {
    const intervalId = setInterval(() => {dispatch(getNewsData())}, 60000)
    return () => clearInterval(intervalId)}, [])
  if(isFetching) {
    return <Loader />
  }
  return <div className="news-area">
  <UpdateButton updateFunction={() => dispatch(getNewsData())} />
  {news.map(item => <Story key={item.id} title={item.title} rating={item.score} 
  id={item.id} autor={item.by} time={item.time}/>)}
 </div>
};
export default NewsPage;