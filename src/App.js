import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router";
import { Loading } from "./components";
import Landing from "./containers/Landing/Landing";

const Main = lazy(() => import("./containers/Main/Main"));
const Goodluck = lazy(() => import("./containers/Goodluck/Goodluck"));
const Heroes = lazy(() => import("./containers/Heroes/Heroes"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/heroes" render={(props) => <Heroes {...props} />} />
        <Route path="/goodluck" render={(props) => <Goodluck {...props} />} />
        <Route path="/create" render={(props) => <Main {...props} />} />
        <Route path="/" exact component={Landing} />
        <Route path="*" component={Landing} />
      </Switch>
    </Suspense>
  );
}

export default App;
