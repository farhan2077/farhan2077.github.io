import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";

import Home from "pages/Home";

function App() {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
    // To Report Page View
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
