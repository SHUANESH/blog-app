import React, { useContext } from "react";
import TopBar from "../TopBar/TopBar";
import Home from "../../pages/Home/Home";
import Single from "../../pages/Single/Single";
import Write from "../../pages/Write/Write";
import Settings from "../../pages/Settings/Settings";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import {Switch, Route} from "react-router-dom";
import {Context, ContextProvider} from "../../context/Context"

const Routing = () => {
  const {user} = useContext(Context);
  return (
    <>
      <ContextProvider>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
      </ContextProvider>
    </>
  );
};

export default Routing;
