import { NavBar } from './components/NavBar';
import { BrowserRouter, Switch, Route } from  'react-router-dom';
import ItemsListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './App.css'

function App() {
  return (
        <BrowserRouter>
         <NavBar />
          <Switch>
            <Route exact path="/">
                <ItemsListContainer/>
            </Route>
            <Route exact path="/item/:id">
              <ItemDetailContainer />
            </Route>
          </Switch>
        </BrowserRouter>
  );
}

export default App;
