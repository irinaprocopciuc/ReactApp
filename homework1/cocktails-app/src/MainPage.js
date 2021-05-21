import React from "react";
import TileListComponent from "./TileListComponent";
import HeaderComponent from "./HeaderComponents";
import SearchComponent from "./SearchComponent";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerElements: [
                {name: 'Alcoholic'},
                {name: 'Non Alcoholic'},
                {name: 'Ordinary Drink'},
                {name:'Cocktail glass'},
                {name: 'Champagne flute'}
            ],
            isOnListPage: 'true'
        }
    }

    render() {
        const listOfHeaderElements = this.state.headerElements.map(headerEl => <HeaderComponent key={headerEl.name} {...headerEl} />)
        const titleStyle = {
            height: '100px',
            width: '100%',
            backgroundColor: '#cde9f7',
            margin: '0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          };
          const listStyle = {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0',
              height: '70px',
              paddingLeft: '0px'
          }
        return (
            <div>
                <h1 style={titleStyle}>Cocktails</h1>
                <ul style={listStyle}>{listOfHeaderElements}</ul>
                <SearchComponent/>
                <TileListComponent />
            </div>
        );
    }
}


export default MainPage;