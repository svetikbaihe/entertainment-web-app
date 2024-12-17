import { dashboardActions } from "@modules/layouts/Dashboard";
import { useDispatch } from "react-redux";

const useContainer = () => {
  const dispatch = useDispatch();

  const handleClick = (id: string) => () => {
    dispatch(dashboardActions.toggleBookmark({ id }));
  };

  return { handleClick };
};

export default useContainer;
