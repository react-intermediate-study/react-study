import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

interface TodoSectionProps {
    todo: string;
    setTodo: (todo: string) => void;
    handleAddTodo: (todo: string) => void;
    todoList: string[];
    handleDeleteTodo: (index: number) => void;
}

const TodoSection = (
    { todo, setTodo, handleAddTodo, todoList, handleDeleteTodo }: TodoSectionProps
) => {
    return (
        <>
            <h1 className="text-2xl font-bold text-white">
                Todo List
            </h1>
            <TodoInput
                todo={todo}
                setTodo={setTodo}
                handleAddTodo={handleAddTodo}
            />
            <h2 className="text-xl text-white">
                오늘 해야할 목록의 개수 : {todoList.length}개
            </h2>
            <TodoList
                todoList={todoList}
                handleDeleteTodo={handleDeleteTodo}
            />
        </>
    );
};

export default TodoSection;