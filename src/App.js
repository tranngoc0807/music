import React, { useEffect, useState } from "react";
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
import Cart from "./pages/Cart/Cart";
import Use from "./pages/Use/Use";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "../src/asset/img/logoproduct/logo1.png";
export const GlobalContext = React.createContext({});
export function App() {
  let [cart, setCart] = useState([]);
  useEffect(() => {
    const curreltCart = JSON.parse(localStorage.getItem("cart"));
    if (curreltCart) {
      setCart(curreltCart);
    }
  }, []);
  return (
    <>
      <GlobalContext.Provider value={{ cart, setCart }}>
      
        <Router>
          <div className="App">
            <TopMenu />
            <div className="Support">
              <Support />
            </div>
            <Switch>
              <Route path="/Login" exact={true}>
                <Login />
              </Route>
              <Route path="/SIGNUP" exact={true}>
                <SIGNUP />
              </Route>
              <Route path="/" exact={true}>
                <Home />
              </Route>
              <Route path="/Cart" exact={true}>
                <Cart />
              </Route>
              <Route path="/License" exact={true}>
                <License />
              </Route>
              <Route path="/Footer" exact={true}>
                <Footer />
              </Route>
              <Route path="/Contact" exact={true}>
                <Contact />
              </Route>
              <Route path="/Complain" exact={true}>
                <Complain />
              </Route>
              <Route path="/BuyBeast" exact={true}>
                <BuyBeast />
              </Route>

              <Route path="/Oder" exact={true}>
                <Oder />
              </Route>
              <Route path="/Customize" exact={true}>
                <Customize />
              </Route>
              <Route path="/Use" exact={true}>
                <Use />
              </Route>
            </Switch>
          </div>
        </Router>
      </GlobalContext.Provider>
    </>
  );
}
export const useGlobalContext = () => React.useContext(GlobalContext);
export default App;
