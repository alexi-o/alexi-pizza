import Pizza from './Pizza'
// import PizzaPic from '../assets/images/pizza.PNG';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function Main() {
    return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
            <Route path="/" exact component={Pizza} />
            <Route path="/about" exact component={Pizza} />
            <Route path="/crypto" exact component={Pizza} />
            <Route path="/contact" exact component={Pizza} />
        </Switch>
      </Router>
    </div>
    );
}