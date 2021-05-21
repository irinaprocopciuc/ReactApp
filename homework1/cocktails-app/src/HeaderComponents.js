
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
    return <h3 style={elementStyle}>{props.name}</h3>;
}


export default HeaderComponent;

