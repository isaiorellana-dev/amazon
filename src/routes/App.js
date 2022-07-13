import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "@containers/Layout";
import Home from "@pages/Home.js"
import Detail from "@pages/Detail.js"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail" component={Detail} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;