import loader from './loader-animation.svg';
import './Loader.css';

function Loader() {
    return <div className='loaderContainer'>
    <img src={loader} alt='loading'/>
    </div>
}
export default Loader;