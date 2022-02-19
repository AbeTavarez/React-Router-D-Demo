import "./styles.css";
import { Redirect, Route } from "react-router-dom";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import blogData from "./blogsData";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";

import { Switch } from "react-router-dom";

function App() {
  const [blogs, setBlogs] = useState(blogData);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        {isLoggedIn ? (
          <Route path="/profile" component={Profile} />
        ) : (
          <Redirect to="/" />
        )}
        <Route path="/post/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
