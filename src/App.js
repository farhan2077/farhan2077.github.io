import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* everything should work now */}
    </Switch>
  );
}

export default App;
