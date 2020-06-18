import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Home from "./components/Home";
import About from "./components/About";
// import MainContent from "./components/MainContent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    // <div className="App">

    <>
    <header>HEADER</header>

        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                    <div className={"Buttonfun"}>
                        <Button onClick={() => {window.location="https://www.google.de"} } variant="contained" color="primary" disableElevation>
                             Crazy stuff
                        </Button>
                    </div>
                </Route>

                <Route exact path="/about">
                 <About />
                </Route>
            </Switch>
        </Router>



    <footer>FOOTER</footer>
    </>


   // </div>

  );
}

export default App;
