import { Component } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";
import TopMenu from "./Components/TopMenu/TopMenu";
import License from "./pages/License/License";
import Contact from "./pages/Contact/Contact";
import Customize from "./pages/Customize/Customize";
import Support from "./Components/Support/Support";
import Complain from "./pages/Complain/Complain";
import Oder from "./pages/Oder/Oder";
import BuyBeast from "./pages/BuyBeast/BuyBeast";
import Login from "./pages/Login/Login";
import SIGNUP from "./pages/Login/SIGNUP/SIGNUP";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export class App extends Component {

  handleA = () => {

    if (window.location.pathname !== '/Login') {
      return <TopMenu />
      
    }
   
  }

  render() {
    return (
      <Router>
        <div className="App">
          {this.handleA()}
          <div className="Support"><Support/></div>
          <Switch>
            <Route path="/" exact="true">
              <Home />
            </Route>
            <Route path="/License" exact="true">
              <License />
            </Route>
            <Route path="/Footer" exact="true">
              <Footer />
            </Route>
            <Route path="/Contact" exact="true">
              <Contact />
            </Route>
            <Route path="/Complain" exact="true">
              <Complain />
            </Route>
            <Route path="/BuyBeast" exact="true">
              <BuyBeast />
            </Route>
            <Route path="/Login" exact="true">
              <Login />
            </Route>
            <Route path="/SIGNUP" exact="true">
              <SIGNUP />
            </Route>
            <Route path="/Oder" exact="true">
              <Oder />
            </Route>
            <Route path="/Customize" exact="true">
              <Customize />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
