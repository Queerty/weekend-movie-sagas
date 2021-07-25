import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import AddMovie from '../AddMovie/AddMovie';
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path="/details" exact>
        <MovieDetails />
        </Route>
        {/* Add Movie page */}
        <Route path="/AddMovie" exact>
        <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
