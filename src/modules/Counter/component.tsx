import type React from "react";

import useContainer from "./hook";

const Counter: React.FC = () => {
  const {
    counterValue,
    todoList,
    inputText,

    handleClear,
    handleDecrement,
    handleIncrement,
    handleChangeText,
    handleChangeNumber,
    handleSetCount,
    handleAddTodo,
    handleDeleteTask,
  } = useContainer();
  return (
    <div>
      <p>{counterValue}</p>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleClear}>Clear</button>
      <div>
        <input
          placeholder="I am tired"
          type="number"
          onChange={handleChangeNumber}
        />
        <button onClick={handleSetCount}>Add count</button>
      </div>
      <div>
        <input
          placeholder="Add your tasks here"
          type="text"
          onChange={handleChangeText}
          value={inputText}
        />
        {todoList.map(todo => (
          <div key={todo.id}>
            <p style={{ backgroundColor: "wheat", color: "black" }}>
              {todo.text}
            </p>
            <button onClick={handleDeleteTask(todo.id)}>Delete Todo</button>
          </div>
        ))}
      </div>
      <div>
        {/* <button onClick={handleSetText}>Delete todo</button>  */}
        <button onClick={handleAddTodo}>Add todo</button>
      </div>
    </div>
  );
};

export default Counter;
