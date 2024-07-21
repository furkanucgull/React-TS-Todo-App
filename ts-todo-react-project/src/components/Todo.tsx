import React from 'react';
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById } from '../redux/todoSlice';

interface TodoProps {
    todoProps: TodoType;
}

function Todo({ todoProps }: TodoProps) {
    const { id, content } = todoProps;
    const dispatch = useDispatch();

    return (
        <div className='flex flex-row items-center justify-center mt-12'>

            <div className=' w-6/12 flex flex-row justify-between items-center p-5 border border-gray-400 rounded-xl'>
                <div className='  '>
                    {content}
                </div>
                <div className='icons flex flex-row gap-4'>
                    <IoIosRemoveCircleOutline
                        onClick={() => dispatch(removeTodoById(id))}
                        size={25} className='cursor-pointer' />

                </div>

            </div>

        </div>
    );
}

export default Todo;