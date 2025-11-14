import React from "react";
import Layout from "./Layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Friends from "./pages/Friends";
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/games" component={Games} />
          <Route path="/friends" component={Friends} />
          <Route path="/shop" component={Shop} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;