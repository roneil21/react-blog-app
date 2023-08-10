import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBlog from "./components/CreateBlog";
import BlogContent from "./components/BlogContent";


const App = () => {
  return (
    <>
      {/* //I'm Using React Router v5 */}
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <CreateBlog />
              </Route>
              <Route path="/blogs/:id">
                <BlogContent />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
      
    </>
  );
};

export default App;
