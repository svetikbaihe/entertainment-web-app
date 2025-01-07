import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface User {
  email: string;
  password: string;
}

export interface InitialState {
  users: User[];
  isSuccessful: boolean;
}

export const initialState: InitialState = {
  users: [
    {
      email: "user@mail.com",
      password: "Aa!1asdf",
    },
  ],
  isSuccessful: false,
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    addUser: (state: InitialState, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    setIsSuccessful: (state: InitialState, action: PayloadAction<boolean>) => {
      state.isSuccessful = action.payload;
    },
    clearSuccessfulState: (state: InitialState) => {
      state.isSuccessful = initialState["isSuccessful"];
    },
  },
});

export const reducerName = signUpSlice.name;

export const reducer = signUpSlice.reducer;

export const actions = {
  ...signUpSlice.actions,
};
