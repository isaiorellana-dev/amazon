import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "@containers/Layout";
import Home from "@pages/Home.js"
import Detail from "@pages/Detail.js"
import Searched from "@pages/Searched";
import "@styles/global/config.scss"
import useGetProducts from "../hooks/useGetProducts";
import AppContext from "../context/AppContext";


const App = () => {
  const initialState = useGetProducts()
  return (
    <AppContext.Provider value={initialState} >
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail/:id" component={Detail} />
            <Route exact path="/search" component={Searched} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;