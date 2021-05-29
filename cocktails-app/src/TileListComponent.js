import axios from "axios";
import React, { useEffect, useState } from "react";
import TileComponent from "./TileComponent";
import TileDetailsCompoenent from "./TileDetailsComponent";
import "./style/list.css";

const TileListComponent = (props) => {
  const [listState, setListState] = useState({
    listOfDrinks: [],
    isOnSingleTilePage: "false",
    showDetails: "false",
    currentComponent: { idDrink: "0", strDrink: "", strDrinkThumb: "" },
    reloadData: false
  });

  useEffect(() => {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${props.linkType}=${props.type}`
      )
      .then((res) => {
        setListState({
          listOfDrinks: res.data.drinks,
          isOnSingleTilePage: "false",
          showDetails: "false",
        });
      });
  }, [listState.reloadData, props.type]);

  const changeTile = (drink) => {
    setListState({
      listOfDrinks: listState.listOfDrinks,
      isOnSingleTilePage: "true",
      showDetails: "false",
      currentComponent: {
        idDrink: drink.idDrink,
        strDrink: drink.strDrink,
        strDrinkThumb: drink.strDrinkThumb,
      },
    });
  };

  const goBackToList = () => {
    setListState({ isOnSingleTilePage: "false", reloadData: true });
  };

  const showDetails = (drink) => {
    setListState({
      listOfDrinks: listState.listOfDrinks,
      isOnSingleTilePage: "false",
      showDetails: "true",
      currentComponent: {
        strDrink: drink.strDrink,
        idDrink: drink.idDrink,
        strDrinkThumb: drink.strDrinkThumb,
      },
    });
  };

  const hideDetails = () => {
    setListState({
      isOnSingleTilePage: "false",
      showDetails: "false",
      listOfDrinks: listState.listOfDrinks,
    });
  };

  const listOfTileElements = listState.listOfDrinks?.map((tileEl) => (
    <TileComponent
      key={tileEl.strDrink}
      {...tileEl}
      {...props}
      chnageTileComp={changeTile}
      showTileDetails={showDetails}
    />
  ));


  return (
    <div>
      {listState.isOnSingleTilePage === "false" ? (
        <div>
          {listState.showDetails === "true" && (
            <TileDetailsCompoenent
              {...listState.currentComponent}
              hideTileDetails={hideDetails}
            />
          )}
          <h2 className="titleStyle">{props.type}</h2>
          <ul className="listStyle">{listOfTileElements}</ul>
        </div>
      ) : (
        <div className="singleTileStyle">
          <div>
             <TileComponent
                key={listState.currentComponent.strDrink}
                {...listState.currentComponent}
                {...props}
                goBack={goBackToList}
              />
          </div>
        </div>
      )}
    </div>
  );
};

export default TileListComponent;
