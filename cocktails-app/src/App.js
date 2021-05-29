import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" component={MainPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
