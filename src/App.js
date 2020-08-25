import React from "react";
import "./App.scss";
import "antd/dist/antd.css";
// import HomeBtn from "@spectrum-icons/workflow/Home";
import Home from "./components/Home/Home";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import { View } from "@adobe/react-spectrum";
import { Route, Switch } from "react-router-dom";
import Searching from "./components/Searching/Searching";
import LocalFooter from "./components/LocalFooter/LocalFooter";
import NotFound404 from "./components/NotFound404/NotFound404";

function App() {
  return (
    // ------- grid container / main Adobe Grid container is buggy
    <main UNSAFE_className="view">
      <View gridArea="content" alignSelf="stretch">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/searching">
            <Searching />
          </Route>
          <Route component={NotFound404} />
        </Switch>
      </View>
      {/* -------grid area: footer */}
      <LocalFooter />
    </main>
  );
}

export default App;
