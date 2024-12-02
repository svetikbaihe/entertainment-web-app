import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

import jsonData from "../../data.json";

export const localApiSlice = createApi({
  reducerPath: "localApi",
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    getLocalData: builder.query({
      queryFn: () => ({ data: jsonData }),
    }),
  }),
});

export const { useGetLocalDataQuery } = localApiSlice;
