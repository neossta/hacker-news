function Comments(props) {
    if (props.ids) {
        return <div>
            {props.ids.map(id => console.log(id))}
        </div>
    }
 
}

export default Comments;