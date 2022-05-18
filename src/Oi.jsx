import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Oi = () => {
  const navigate = useNavigate();
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);
  setTimeout(function () {
    if (mounted.current) {
      navigate("/oi/a");
    }
  }, 3000);

  let { slug } = useParams();
  return <h1>OI - param: {slug}</h1>;
};
