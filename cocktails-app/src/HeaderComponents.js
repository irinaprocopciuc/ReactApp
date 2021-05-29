import { Link } from "react-router-dom";
import './style/general.css';

const HeaderComponent = (props) => {
    const changeDrinkType = (element) => {
        props.changeDrinkType(element);
    }
    
    return <Link to={`/cocktails/${props.name}`} className="headerElStyle"><h3 onClick={() => changeDrinkType(props.name)}>{props.name}</h3></Link>;
}


export default HeaderComponent;

