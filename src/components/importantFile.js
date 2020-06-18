import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Home from "./components/Home";
import About from "./components/About";
// import MainContent from "./components/MainContent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';




function App() {
    return (

        <>
            <header/>

            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                        <div className={"Buttonfun"}>
                            {/*statt der interne link ginge auch : https://www.google.de*/}
                            <Button onClick={() => {window.location="./About.js"} } variant="contained" color="primary" disableElevation>
                                and send
                            </Button>
                        </div>
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                </Switch>
            </Router>

            <div className={"AllTheFields"}>
                <div className={"Textfeld"}>
                    <Checkbox />
                    <TextField placeholder="write some stuff"/>
                </div>
                <div className={"Textfeld"}>
                    <Checkbox />
                    <TextField placeholder="more"/>
                </div>
                <div className={"Textfeld"}>
                    <Checkbox />
                    <TextField placeholder="i said more"/>
                </div>
            </div>

            <footer/>

        </>
    );
}

export default App;
