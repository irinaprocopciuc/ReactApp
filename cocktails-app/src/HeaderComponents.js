import { Link } from "react-router-dom";

const elementStyle = {
    width: '20%',
    height: '100%',
    backgroundColor: 'pink',
    margin: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #f7c8df'
}

const HeaderComponent = (props) => {
    const changeDrinkType = (element) => {
        props.changeDrinkType(element);
    }
    
    return <Link to={`/cocktails/${props.name}`} style={elementStyle}><h3 onClick={() => changeDrinkType(props.name)}>{props.name}</h3></Link>;
}


export default HeaderComponent;

