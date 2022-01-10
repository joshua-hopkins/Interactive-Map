import "../styles/App.css";
import NavBar from "./Navbar";
import Body from "./Body";
import "bulma/css/bulma.min.css";
import "leaflet/dist/leaflet.css";

const App = props => {
  return (
    <div className="App">
      <NavBar />
      <Body />
    </div>
  );
};

export default App;
