import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export interface InitialState {
  count: number;
  todoList: Todo[];
}

export interface Todo {
  id: string;
  text: string;
}

export const initialState: InitialState = {
  count: 0,
  todoList: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    counterDecrement: state => {
      state.count -= 1;
    },
    counterIncrement: state => {
      state.count += 1;
    },
    counterClear: state => {
      state.count = 0;
    },
    setCounter: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    deleteTodo: (state, action: PayloadAction<Pick<Todo, "id">>) => {
      state.todoList = state.todoList.filter(
        todo => todo.id !== action.payload.id
      );
    },
    addTodo: (state, action: PayloadAction<string>) => {
      state.todoList.push({ id: uuid(), text: action.payload });
    },
  },
});

export const reducerName = counterSlice.name;

export const reducer = counterSlice.reducer;

export const actions = {
  ...counterSlice.actions,
};
