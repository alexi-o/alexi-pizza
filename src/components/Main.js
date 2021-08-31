import Pizza from './Pizza';
import Navbar from './Navbar';
import About from './About';
import Crypto from './Crypto';
import MessageBoard from './MessageBoard';
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
            <Route path="/about" exact component={About} />
            <Route path="/crypto" exact component={Crypto} />
            <Route path="/message-board" exact component={MessageBoard} />
        </Switch>
      </Router>
    </div>
    );
}