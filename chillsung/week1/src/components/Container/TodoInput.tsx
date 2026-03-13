

interface TodoInputProps {
    todo: string;
    setTodo: (todo: string) => void;
    handleAddTodo: (todo: string) => void;
}

const TodoInput = ({ todo, setTodo, handleAddTodo }: TodoInputProps) => {
    return (
        <div className="flex justify-center items-center gap-3 w-full">
            <input 
                type="text" 
                placeholder="Todo를 입력하세요" 
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="w-full h-12 bg-white rounded-md border-2 border-gray-300 p-2"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleAddTodo(todo);
                    }
                }}
            />
            <button 
                className="w-20 h-12 rounded-md bg-green-400 text-green-800 font-bold"
                onClick={() => handleAddTodo(todo)}
            >
                추가
            </button>
        </div>
    );
};

export default TodoInput;