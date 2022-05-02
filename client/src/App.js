import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from "./components/user/register/register";
import Login from "./components/user/login/login";
import Profile from "./components/user/profile/profile";

import ActivateEmail from "./components/user/register/activateEmail";

import ForgetPassword from "./components/user/login/forgetPass";
import ResetPassword from "./components/user/login/resetPass";
import Navbar from "./components/nav/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route path="/user/login" component={Login} />

          <Route path="/user/register" component={Register} />
          <Route
            path="/user/activate/:activationToken"
            component={ActivateEmail}
          />

          <Route exact path="/user/forgetPassword" component={ForgetPassword} />
          <Route
            path="/user/forgetPassword/:access_token"
            component={ResetPassword}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
