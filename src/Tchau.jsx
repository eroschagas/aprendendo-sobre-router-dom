import { useLocation } from "react-router-dom";

export const Tchau = () => {
  const location = useLocation();

  return (
    <div>
      <h1>Tchau</h1>
      <p>location: {location.pathname}</p>
    </div>
  );
};
