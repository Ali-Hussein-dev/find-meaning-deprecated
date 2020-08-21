import React from "react";
import "./App.scss";
import "antd/dist/antd.css";
// import HomeBtn from "@spectrum-icons/workflow/Home";
import Home from "./components/Home/Home";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Flex } from "@adobe/react-spectrum";
import { Route, Switch } from "react-router-dom";
import Searching from "./components/Searching/Searching";
import LocalFooter from "./components/LocalFooter/LocalFooter";
import NotFound404 from "./components/NotFound404/NotFound404";


function App() {
  return (
    <Flex direction="column" minHeight="100vh" UNSAFE_className="view">
     
      <Flex
        direction="column"
        flexGrow="1"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/searching">
            <Searching />
          </Route>
          <Route component={NotFound404} />
        </Switch>
      </Flex>
      <LocalFooter />
    </Flex>
  );
}

export default App;
