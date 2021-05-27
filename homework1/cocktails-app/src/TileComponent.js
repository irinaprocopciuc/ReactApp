import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './tile.css';

const TileComponent = (props) => {
    const changeTile = (drink) => {
        props.chnageTileComp(drink);
    }

    const showDetails = (tile) => {
        props.showTileDetails(tile);
    }

    const goBackToList = () => {
        props.goBack();
    }

    const showButton = useLocation().pathname.includes('details');

    return (
        <div className="tileContainerStyle" >
            <Link to={`/cocktails/details/${props.strDrink}`}><img src={props.strDrinkThumb} alt="drink" className="imgStyle"  onClick={() => changeTile(props)} /></Link>
            <h3 className="elementStyle" onClick={() => showDetails(props)}>{props.strDrink}</h3>
            {showButton === true && <Link to={'/cocktails'} onClick={() => goBackToList()}> <button className="buttonStyle" >Back</button></Link>}
        </div>
    )
}


export default TileComponent;

