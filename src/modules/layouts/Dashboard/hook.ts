import { useEffect } from "react";

import { dashboardActions } from "@modules/layouts/Dashboard";
import { useGetLocalDataQuery } from "@state/rootQuery";
import { useDispatch } from "react-redux";

const useContainer = () => {
  const { data } = useGetLocalDataQuery(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(dashboardActions.setMediaData(data));
    }
  }, [data, dispatch]);
};

export default useContainer;
