import Pizza from './Pizza'
import PizzaPic from '../assets/images/pizza.PNG';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Main() {
    return (
        <div className="App">
            <Router>
                <div className="grid"></div>
                <div className="lines"></div>
                <h1 className="title">
                    <Link to="/">
                        <span>ALEXI</span>
                        <span>ALEXI</span>
                    </Link>
                </h1>
                <nav className="nav-links">
                    <Link to="/pizza">
                        <img className="card"
                            alt="pizza"
                            src={PizzaPic}
                        />
                    </Link>
                </nav>

                <Switch>
                    <Route path="/pizza">
                        <Pizza />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}