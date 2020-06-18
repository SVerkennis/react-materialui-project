import React from "react";
import {Route, Switch} from "react-router-dom";

export default function About() {
    return <h1>About all the stuff you want</h1>;

}

/*
<>
    <h1>About all the stuff you want</h1>;
    <Switch>
        <Route exact path="/about/Dude">
            <User name="der Dude" />
        </Route>

        <Route exact path="/about/Else">
            <User name="die Elsa" />
        </Route>
    </Switch>
</>*/
