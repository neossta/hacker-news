import './UpdateButton.css';
import updImg from './update.png';

export const UpdateButton = (props) => {
    return <div> 
        <button className='updateButton' onClick={props.updateFunction}>
            <img src={updImg} alt='' className='updImg'/> Update</button>
    </div>
};