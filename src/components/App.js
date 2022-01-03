import "../styles/App.css";
import "bulma/css/bulma.min.css";
import NavBar from "./Navbar";
import Body from "./Body";

const App = props => {
  return (
    <div className="App">
      <NavBar />
      <Body />
    </div>
  );
};

export default App;
