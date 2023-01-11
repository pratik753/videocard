import React, { useEffect } from "react";
// import { Container } from "@material-ui/core";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import HistroyPage from "./component/pages/HistroyPage";

// import NavBar from "./components/nav_bar/NavBar";
// import Footer from "./components/nav_bar/Footer";
import Home from "./component/pages/Home";
// import Auth from "./components/Auth/Auth";
// import Admin from "./components/Admin/Admin";
// import TourDetail from "./components/Tours/TourDetail/TourDetail";
const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getTours());
  // }, []);
  return (
    <BrowserRouter>
      <div maxWidth="lg">
        {/* <NavBar /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/historyPage" exact component={HistroyPage} />
          {/* <Route path="/auth" exact component={Auth} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/tourDetail" exact component={TourDetail} /> */}
        </Switch>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
