import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import CityCookie from "./citycookie";
import CookieTime from "./citycookietime";
import Categories from "./Category";
import Dishes from "./dish";
import Login from "./userlogin";
import Register from "./userRegister";
function App() {
  return (
    <div className="App">
      <Register />
      <Login />
    </div>
  );
}

export default App;
