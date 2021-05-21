import React from "react";
import TileComponent from "./TileComponent";
import TileDetailsCompoenent from "./TileDetailsComponent";

class TileListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listElements: [
                {id: '1', name: 'Title'},
                {id: '2', name: 'Title23'},
                {id: '3', name: 'Title35'},
                {id: '4', name:'Title545'},
            ],
            isOnSingleTilePage: 'false',
            showDetails: 'false',
            currentComponent: {name: '', id: '0'}
        }
    }

    
    render() {
        const changeTile = (name) => {
            this.setState({isOnSingleTilePage: 'true'});
            this.setState({currentComponent: {name: name}});
        }

        const goBackToList = () => {
            this.setState({isOnSingleTilePage: 'false'})
        }

        const showDetails = (tile) => {
            this.setState({showDetails: 'true'});
            this.setState({currentComponent: {name: tile.name, id: tile.id}});
        }

        const hideDetails = () => {
            this.setState({showDetails: 'false'});
        }

        const listOfTileElements = this.state.listElements.map(tileEl => <TileComponent key={tileEl.name} {...tileEl} chnageTileComp={changeTile} showTileDetails={showDetails} />)
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
          const listStyle = {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0',
              paddingLeft: '0px'
          }

          const singleTileStyle ={
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '40px'
          }

          const buttonStyle = {
              width: '180px',
              height: '30px',
              marginRight: '20px',
              backgroundColor: 'pink',
              color: 'grey',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
          }
        return (
            <div>
                {this.state.isOnSingleTilePage === 'false' ? 
                <div>
                    {this.state.showDetails === 'true' && <TileDetailsCompoenent {...this.state.currentComponent} hideTileDetails={hideDetails}/>}
                    <h2 style={titleStyle}>Category 1</h2>
                    <ul style={listStyle}>{listOfTileElements}</ul>
                </div> :
                <div style={singleTileStyle}>
                    <TileComponent  key={this.state.currentComponent.name} {...this.state.currentComponent}/>
                    <button style={buttonStyle} onClick={() => goBackToList()}>Back</button>
                </div> }
            </div>
        );
    }
}


export default TileListComponent;