import React from 'react';
import './style/tile.css';
import './style/list.css';

const TileDetailsCompoenent = (props) => {
    const hideDetails = () => {
        props.hideTileDetails();
    }

    return (
        <div>
            <h2 className="titleStyle">Details</h2>
            <div className="containerStyle" >
            <div className="firstContainer">
                    <button onClick={() => hideDetails()} className="buttonStyle" >Hide details</button>
                    <img src={props.strDrinkThumb} alt={props.strDrink} className="imgStyle" onClick={() => this.changeTile(props)} />
            </div>
                <div>
                    <h4 className="elementStyle" >Title: {props.strDrink}</h4>
                    <h4 className="elementStyle" >Id: {props.idDrink}</h4>
                </div>
            </div>
        </div>
    )
}


export default TileDetailsCompoenent;

