import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav>
      <Link style={{ margin: "20px" }} to="/">
        home
      </Link>
      <Link style={{ margin: "20px" }} to="/oi/deuboa">
        oi
      </Link>
      <Link style={{ margin: "20px" }} to="/oi/a">
        tchau
      </Link>
    </nav>
  );
};
