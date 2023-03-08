import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/main");
  }, []);
  return <div>!</div>;
};
export default NotFoundPage;
