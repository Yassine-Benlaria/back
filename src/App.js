import HomeCilent from "./client/home";
import Login from "./Auth/login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Programme from "./client/components/programme";
import Search from "./client/components/search";

function App() {
  return (
    <div>
      {/* For now this Login will be disabled until linked with the database */}
      {/* <Login /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={HomeCilent} />
          <Route exact path="/programme" component={Programme} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </BrowserRouter>
      {/* if user loged in we call HomeClient Component else HomeAdmin*/}
      {/* <HomeCilent /> */}
    </div>
  );
}

export default App;
