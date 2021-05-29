import React, { useState } from "react";
import TileListComponent from "./TileListComponent";
import HeaderComponent from "./HeaderComponents";
import SearchComponent from "./SearchComponent";
import {  Route } from "react-router-dom";

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

const MainPage = () => {
    const[pageState, setPageState] = useState({ 
        headerElements: [
            {name: 'Alcoholic'},
            {name: 'Non_Alcoholic'},
            {name: 'Ordinary_Drink'},
            {name:'Cocktail_glass'},
            {name: 'Champagne_flute'}
        ],
        type: '',
        linkType: ''
    });

    const changeType = (element) => {
        if (element.includes('Alcoholic')) {
            setPageState({linkType: 'a', headerElements: pageState.headerElements, type: element})
        } else if( element === 'Ordinary_Drink') {
            setPageState({linkType: 'c', headerElements: pageState.headerElements, type: element})
        } else {
            setPageState({linkType: 'g', headerElements: pageState.headerElements, type: element})
        }
    } 

    const listOfHeaderElements = pageState.headerElements?.map(headerEl => <HeaderComponent key={headerEl.name} {...headerEl} changeDrinkType={changeType} />)
    
    return (
        <div>
            <h1 style={titleStyle}>Cocktails</h1>
            <ul style={listStyle}>{listOfHeaderElements}</ul>
            <SearchComponent/>
            <div>
                <Route path={`/cocktails/${pageState.type}`} render={() => <TileListComponent {...pageState} />} />
            </div>
        </div>
    );
}


export default MainPage;