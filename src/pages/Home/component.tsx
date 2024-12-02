import type React from "react";

import { ROUTES, RoutesKeys } from "@constants/routes";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Home Page</div>

      <button
        onClick={() => {
          navigate("/movies");
        }}
      >
        Movies Page
      </button>
    </>
  );
};

Home.displayName = ROUTES[RoutesKeys.HOME].DISPLAY_NAME;

export default Home;
