import "../styles/App.css";
import NavBar from "./Navbar";
import Body from "./Body";
import "bulma/css/bulma.min.css";
import "leaflet/dist/leaflet.css";

const App = props => {
  return (
    <div className="App">
      <div className="Body">
        <div className="NavigationBar">
          <NavBar />
        </div>
        <Body />
      </div>
    </div>
  );
};

export default App;
