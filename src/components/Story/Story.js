import { NavLink } from "react-router-dom";
import './Story.css';

export function Story(props) { 
    debugger
    return <div className="item-container">
        <div className="title-container">
            <NavLink to={"/news/" + props.id}> <h2 className="article-title">{props.title}</h2></NavLink>
            </div>
            <div className="info-container">
            <span className="Rating">{props.rating ?
             props.rating + (+props.rating === 1 ? ' point' : ' points') 
             : null}
            </span>
            <span>{"by " + props.autor}</span>
            <span>
                {new Date(props.time * 1000).toLocaleDateString('en-US', {
                hour: 'numeric',
                minute: 'numeric'
          })}
            </span>
            </div>
    </div>
};

