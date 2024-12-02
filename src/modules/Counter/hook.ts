import { useState } from "react";

import { counterActions, counterSelectors } from "@modules/Counter";
import { useGetLocalDataQuery } from "@state/rootQuery";
import { useDispatch, useSelector } from "react-redux";


const useContainer = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetLocalDataQuery(null);

  console.log("data =>", data);
  console.log("isLoading=>", isLoading);

  const [inputValue, setInputValue] = useState<number>(0);

  const [inputText, setInputText] = useState<string>("");

  const counterValue = useSelector(counterSelectors.countSelector);

  const todoList = useSelector(counterSelectors.toDoListSelector);

  const handleDecrement = () => {
    dispatch(counterActions.counterDecrement());
  };

  const handleIncrement = () => {
    dispatch(counterActions.counterIncrement());
  };

  const handleClear = () => {
    dispatch(counterActions.counterClear());
  };

  const handleChangeNumber: React.ChangeEventHandler<HTMLInputElement> = e => {
    setInputValue(Number(e.target.value));
  };

  const handleChangeText: React.ChangeEventHandler<HTMLInputElement> = e => {
    setInputText(e.target.value);
  };

  const handleSetCount = () => {
    if (!inputValue && typeof inputValue !== "number") {
      return;
    }

    dispatch(counterActions.setCounter(inputValue));
  };

  const handleAddTodo = () => {
    if (!inputText && typeof inputText !== "string") {
      return;
    }

    dispatch(counterActions.addTodo(inputText));
    setInputText("");
  };

  const handleDeleteTask = (id: string) => () => {
    console.log(id);
    dispatch(counterActions.deleteTodo({ id }));
  };

  return {
    counterValue,
    todoList,
    inputText,

    handleDecrement,
    handleIncrement,
    handleClear,
    handleChangeNumber,
    handleChangeText,
    handleSetCount,
    handleAddTodo,
    handleDeleteTask,
  };
};

export default useContainer;
