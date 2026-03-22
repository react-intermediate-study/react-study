import { useState } from "react";
import TodoSection from "./TodoSection";

const TodoContainer = () => {
    const [todo, setTodo] = useState<string>("");
    const [todoList, setTodoList] = useState<string[]>([]);

    function handleAddTodo(todo: string) {
        if (todo.trim() === "") return;
        if (todoList.length >= 10) return;
        setTodoList([...todoList, todo]);
        setTodo("");
    }

    function handleDeleteTodo(index: number) {
        setTodoList(todoList.filter((_, i) => i !== index));
    }
    
    return (
        <>
            <TodoSection
                todo={todo}
                setTodo={setTodo}
                handleAddTodo={handleAddTodo}
                todoList={todoList}
                handleDeleteTodo={handleDeleteTodo}
            />
        </>
    );
};

export default TodoContainer;
