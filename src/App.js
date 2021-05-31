import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { useStateValues } from "./context-api/StateProvider";

function App() {
  //retriving from data layer & destructuring
  const [{ user }, dispatch] = useStateValues();

  // <> </> <- this is called as fagment div(empty div).
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            {/* header */}
            <Header />
            <div className="app_body">
              {/* side bar */}
              <Sidebar />

              {/* react router -> changes the chat screen{body)} */}
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>

                {/*   / <- forward "/"" = home page    */}
                <Route path="/">
                  <Login />
                </Route>
              </Switch>
              {/* routing swith ends */}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
