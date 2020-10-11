import React, { Component } from "react";
import ReactDom from "react-dom";
import { UsersList } from "./components/UserList/index.js";
import { UserCreate } from "./components/UserCreate/index.js";

import { BrowserRouter, Switch, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <>
        <div>
          <Switch>
            <Route path="/" component={UsersList} />
            <Route path="/create" component={UserCreate} exact={true} />
          </Switch>
        </div>
        <UserCreate />
      </>
    );
  }
}

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
