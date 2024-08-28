import React, { useState } from "react";  
import { PlusCircle, Trash2 } from "lucide-react";  

const TodoApp = () => {  
    const [todos, setTodos] = useState([]);  
    const [inputValue, setInputValue] = useState("");  
    const [selectedTodos, setSelectedTodos] = useState({});  

    const addTodo = () => {  
        if (inputValue.trim()) {  
            setTodos([...todos, { text: inputValue, completed: false }]);  
            setInputValue("");  
        }  
    };  

    const toggleTodo = (index) => {  
        const newTodos = [...todos];  
        newTodos[index].completed = !newTodos[index].completed;  
        setTodos(newTodos);  
    };  

    const toggleSelectTodo = (index) => {  
        setSelectedTodos((prev) => ({  
            ...prev,  
            [index]: !prev[index],  
        }));  
    };  

    const removeSelectedTodos = () => {  
        const newTodos = todos.filter((_, index) => !selectedTodos[index]);  
        setTodos(newTodos);  
        setSelectedTodos({});  
    };  

    const isAnySelected = Object.values(selectedTodos).some(Boolean);  

    return (  
        <div className="flex flex-col items-center  bg-gray-100">  
            <div className="bg-white shadow-md rounded-lg p-6 w-96">  
                <h1 className="text-3xl font-semibold text-center text-green-600 mb-4">Note pad</h1>  
                <div className="flex">  
                    <input  
                        type="text"  
                        value={inputValue}  
                        onChange={(e) => setInputValue(e.target.value)}  
                        className="border border-gray-300 p-2 w-full rounded-l focus:outline-none focus:ring-2 focus:ring-green-500"  
                        placeholder="Add a new task"  
                    />  
                    <button onClick={addTodo} className="bg-green-600 text-white p-2 rounded-r hover:bg-green-700 transition">  
                        <PlusCircle size={20} />  
                    </button>  
                </div>  
                <ul className="mt-4">  
                    {todos.map((todo, index) => (  
                        <li key={index} className={`flex justify-between items-center p-2 border-b ${todo.completed ? 'bg-green-100' : 'bg-white'}`}>  
                            <div className="flex items-center">  
                                <input  
                                    type="checkbox"  
                                    checked={selectedTodos[index] || false}  
                                    onChange={() => toggleSelectTodo(index)}  
                                    className="mr-2"  
                                />  
                                <span onClick={() => toggleTodo(index)} className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>  
                                    {todo.text}  
                                </span>  
                            </div>  
                        </li>  
                    ))}  
                </ul>  
                {isAnySelected && (  
                    <button onClick={removeSelectedTodos} className="mt-4 bg-red-600 text-white p-2 rounded hover:bg-red-700 transition">  
                        Remove Selected  
                    </button>  
                )}  
            </div>  
        </div>  
    );  
};  

export default TodoApp;  

