import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import AboutDesktop from "./Component/Screens/AboutDesktop";
import PrivacyDesktop from "./Component/Screens/PrivacyDesktop";
import Contact from "./Component/Contact";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={AboutDesktop} />
        <Route path="/privacy" component={PrivacyDesktop} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
