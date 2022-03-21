import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MovieDetailsPage from "./components/MovieDetail/MovieDetailsPage";
import PageError from "./components/PageError/PageError";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movie/:imdbID" component={MovieDetailsPage} />
            <Route exact path="*" component={PageError} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
