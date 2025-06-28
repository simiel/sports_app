import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <div className="App">
      <div className="">
        <Topbar />
        <Homepage />
      </div>
    </div>

    // <Router>
    //   <div>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/login">Dashboard</Link>
    //       </li>
    //     </ul>

    //     <hr />

    //     <Routes>
    //       <Route exact path="/">
    //         <Homepage />
    //       </Route>
    //       <Route path="/about">
    //         <Single />
    //       </Route>
    //       <Route path="/login">
    //         <Login />
    //       </Route>
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
