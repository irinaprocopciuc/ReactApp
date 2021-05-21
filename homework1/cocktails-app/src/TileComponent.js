import React from 'react';
import drink from './Images/drink.png';

const elementStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const imgStyle = {
    width: '100px',
    height: '100px',
    padding: '40px',
    border: '1px solid #cde9f7'
}
const containerStyle = {
    marginRight: '20px',
    cursor: 'pointer',
    maxWidth: '200px'
}
class TileComponent extends React.Component {
    changeTile = (name) => {
        this.props.chnageTileComp(name);
    }

    showDetails = (tile) => {
        this.props.showTileDetails(tile);
    }
    render() {
        return (
            <div style={containerStyle} >
                <img src={drink} alt="drink" style={imgStyle} onClick={() => this.changeTile(this.props.name)} />
                <h3 style={elementStyle} onClick={() => this.showDetails(this.props)}>{this.props.name}</h3>
            </div>
        )
    };
}


export default TileComponent;

