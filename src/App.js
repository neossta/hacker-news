import React, {useEffect} from 'react'
import './App.css';
import { Story } from './components/Story/Story';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsPage from './components/NewsPage/NewsPage';
import StoryPage from './components/StoryPage/StoryPage';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <div className="header-title">Hacker News</div>
      </header>
      <div className='content'>
      <Routes>
        <Route path='/' element={<NewsPage />} exact={true} />
        <Route path='/news/:id' element={<StoryPage/>} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>) 
}
export default App;