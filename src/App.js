import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to="/oi/deu um oi =D"
      >
        <h1>Manda um oi</h1>
      </Link>
    </div>
  );
}

export default App;
