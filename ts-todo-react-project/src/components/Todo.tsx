import React from 'react';
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";

function Todo() {
    return (
        <div className='flex flex-row items-center justify-center mt-12'>

            <div className=' w-6/12 flex flex-row justify-between items-center'>
                <div className='  '>
                    First Todo....
                </div>
                <div className='icons flex flex-row gap-4'>
                    <IoIosRemoveCircleOutline size={25} className='cursor-pointer' />
                    <MdOutlineModeEdit size={25} className='cursor-pointer' />
                </div>

            </div>

        </div>
    );
}

export default Todo;