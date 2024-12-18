import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { MediaItem } from "@type/app";

import jsonData from "../../data.json";

export const localApiSlice = createApi({
  reducerPath: "localApi",
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    getLocalData: builder.query({
      queryFn: () => ({ data: jsonData as MediaItem[] }),
    }),
  }),
});

export const { useGetLocalDataQuery } = localApiSlice;
