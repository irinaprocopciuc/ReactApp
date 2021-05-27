import React, { useState } from "react";
import TileListComponent from "./TileListComponent";
import HeaderComponent from "./HeaderComponents";
import SearchComponent from "./SearchComponent";
import {  Route } from "react-router-dom";
import TileDetailsCompoenent from "./TileDetailsComponent";

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

const MainPage = (props) => {
    const[pageState, setPageState] = useState({ 
        headerElements: [
            {name: 'Alcoholic'},
            {name: 'Non Alcoholic'},
            {name: 'Ordinary Drink'},
            {name:'Cocktail glass'},
            {name: 'Champagne flute'}
        ],
        isOnListPage: 'true',
        type: ''
    });

    const changeType = (element) => {
        setPageState({type: element})
    } 

    const listOfHeaderElements = pageState.headerElements.map(headerEl => <HeaderComponent key={headerEl.name} {...headerEl} changeDrinkType={changeType} />)
    
        console.log(props);
    return (
        <div>
            <h1 style={titleStyle}>Cocktails</h1>
            <ul style={listStyle}>{listOfHeaderElements}</ul>
            <SearchComponent/>
            <div>
                <Route path={'/cocktails'} component={TileListComponent} />
            </div>
        </div>
    );
}


export default MainPage;