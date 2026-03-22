
interface TodoListProps {
    todoList: string[];
    handleDeleteTodo: (index: number) => void;
}

const TodoList = ({ todoList, handleDeleteTodo }: TodoListProps) => {
    
    const leftTodos = todoList.slice(0, 5);
    const rightTodos = todoList.slice(5, 10);
    
    return (
        <div className="grid grid-cols-2 gap-3 w-full">
            <div className="flex flex-col gap-3">
                {leftTodos.map((todo, index) => (
                    <div key={index} className="flex justify-between items-center w-full bg-white rounded-md border-2 border-gray-300 p-2">
                        <span>{todo}</span>
                        <button className="h-9 px-2 rounded-md bg-red-500 text-white" onClick={() => handleDeleteTodo(index)}>삭제</button>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-3">
                {rightTodos.map((todo, index) => (
                    <div key={index + 5} className="flex justify-between items-center w-full bg-white rounded-md border-2 border-gray-300 p-2">
                    <span>{todo}</span>
                    <button className="h-9 px-2 rounded-md bg-red-500 text-white" onClick={() => handleDeleteTodo(index + 5)}>삭제</button>
                </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;

