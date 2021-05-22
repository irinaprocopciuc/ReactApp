import React from 'react';
import drink from './Images/drink.png';

const titleStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#9d96eb',
    backgroundColor: '#faf0f5',
    paddingTop: '10px',
    paddingBottom: '10px'
  };

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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px'
}

const firstContainer = {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '30px'
}

const buttonStyle = {
    width: '180px',
    height: '30px',
    marginBottom: '20px',
    backgroundColor: 'pink',
    color: 'grey',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
}
class TileDetailsCompoenent extends React.Component {
    hideDetails = () => {
        this.props.hideTileDetails();
    }
    render() {
        return (
              <div>
                    <h2 style={titleStyle}>Details</h2>
            <div style={containerStyle} >
               <div style={firstContainer}>
                    <button onClick={() => this.hideDetails()} style={buttonStyle} >Hide details</button>
                    <img src={drink} alt="drink" style={imgStyle} onClick={() => this.changeTile(this.props.name)} />
               </div>
                <div>
                    <h4 style={elementStyle} >Title: {this.props.name}</h4>
                    <h4 style={elementStyle} >Id: {this.props.id}</h4>
                </div>
            </div>
              </div>
        )
    };
}


export default TileDetailsCompoenent;

