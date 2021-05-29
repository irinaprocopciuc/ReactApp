import React, { useState } from "react";
import TileListComponent from "./TileListComponent";
import HeaderComponent from "./HeaderComponents";
import SearchComponent from "./SearchComponent";
import {  Link, Route } from "react-router-dom";
import './list.css';
import './general.css';

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
            <div className="generailTitleStyle">
                <h1>Cocktails</h1>
                <Link to="/cocktails/add"><button className="buttonStyle">Add coktail</button></Link>
            </div>
            <ul className="headerListStyle">{listOfHeaderElements}</ul>
            <SearchComponent/>
            <div>
                <Route path={`/cocktails/${pageState.type}`} render={() => <TileListComponent {...pageState} />} />
            </div>
        </div>
    );
}


export default MainPage;