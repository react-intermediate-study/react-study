import React, { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

// Custom Hook
function useTodos() {
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 공부하기", completed: false },
    { id: 2, text: "프로젝트 완성하기", completed: true },
  ]);
  const [inputText, setInputText] = useState("");

  const handleAdd = () => {
    if (!inputText.trim()) return;
    setTodos([...todos, { id: Date.now(), text: inputText, completed: false }]);
    setInputText("");
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    inputText,
    setInputText,
    handleAdd,
    handleToggle,
    handleDelete,
  };
}

// Presentational 컴포넌트
const TodoListUI = ({
  todos,
  inputText,
  onInputChange,
  onAdd,
  onToggle,
  onDelete,
}: any) => {
  return (
    <div className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="할 일 추가..."
          className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
          value={inputText}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onAdd()}
        />
        <button
          onClick={onAdd}
          className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors shrink-0"
        >
          <CiSquarePlus />
        </button>
      </div>

      <div className="flex flex-col">
        {todos.map((todo: any) => (
          <div
            key={todo.id}
            className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
          >
            <div
              className="flex items-center gap-3 flex-1 cursor-pointer"
              onClick={() => onToggle(todo.id)}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                readOnly
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span
                className={`text-sm ${todo.completed ? "text-gray-400 line-through" : "text-gray-700"}`}
              >
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => onDelete(todo.id)}
              className="text-gray-400 hover:text-red-500 p-1 transition-colors"
            >
              <FaRegTrashAlt />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ContainerGoodContent = () => {
  const {
    todos,
    inputText,
    setInputText,
    handleAdd,
    handleToggle,
    handleDelete,
  } = useTodos();

  return (
    <TodoListUI
      todos={todos}
      inputText={inputText}
      onInputChange={setInputText}
      onAdd={handleAdd}
      onToggle={handleToggle}
      onDelete={handleDelete}
    />
  );
};
