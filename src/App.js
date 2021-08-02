import "./App.css";
import Layout from "./layout/Layout";

import { Route, Switch, Redirect } from "react-router-dom";
import AllCards from "./pages/AllCards";
import AddCard from "./pages/AddCard";
import AddCover from "./pages/AddCover";
import { useState } from "react";
import CardDetails from "./components/CardDetails";
import NotFound from "./pages/NotFound";

function App() {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllCards />
        </Route>
        <Route path="/add-form">
        {imageIndex===0 ? <Redirect to={'/add-cover'}/> :
          <AddCard imageIndex={imageIndex}/>}
        </Route>
        <Route path="/add-cover">
          <AddCover imageIndex={imageIndex} setImageIndex={setImageIndex}/>
        </Route>
        <Route path='/cards/:id'>
          <CardDetails/>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
