import React, { Component } from "react";
import "../css/App.css";

import MenuAdmin from "./Menu/MenuAdmin";
import StorageAdmin from "./Storage/StorageAdmin";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FormRegisterAdmin from "./Form/FormRegisterAdmin";
import Login from "./Login/Login";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
      
          <Route exact path="/">
          <MenuAdmin />
            <StorageAdmin />
          </Route>
          <Route exact path="/Form">
          <MenuAdmin />
            <FormRegisterAdmin />
          </Route>
          {/* <Login /> */}
        </Router>
      </div>
    );
  }
}

export default App;
