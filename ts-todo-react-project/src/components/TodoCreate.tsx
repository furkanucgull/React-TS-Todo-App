import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../redux/todoSlice';

function TodoCreate() {

    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState<string>("");

    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert("Please enter a valid Todo");
            return;
        }
        const payload = {
            id: Math.floor(Math.random() * 8585),
            content: newTodo
        };
        dispatch(createTodo(payload));
        setNewTodo("");
    };

    return (
        <div className='flex justify-center   items-center flex-col'>
            <div className='flex flex-col items-end justify-end w-4/6 sm:4/6  mr-7 sm:mr-60'>

                <div className=' w-4/6 sm:4/6 pb-5 px-4 pt-4 mt-6 border rounded-xl border-black bg-slate-200'>
                    <label className="block mb-5 text-lg font-medium text-gray-900 dark:text-white ml-10 ">Enter Todo</label>
                    <input
                        value={newTodo}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} type="text" id="small-input" className="block w-full  p-2 text-gray-900 border border-gray-300 rounded-lg  text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                </div>
                <button
                    onClick={handleCreateTodo}
                    type="button" className="ml-40 text-white mt-4 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-lg px-7 py-4 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800  font-[arial] ">Add </button>
            </div>

        </div>


    );
}

export default TodoCreate;