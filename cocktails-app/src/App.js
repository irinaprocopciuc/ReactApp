import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import AddCocktailForm from './AddCocktailForm';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/cocktails/add" component={AddCocktailForm}/>
          <Route path="/cocktails" component={MainPage}/>
          <Route path="/" component={MainPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
