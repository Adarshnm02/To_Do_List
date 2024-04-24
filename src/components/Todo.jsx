import React from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { BsFillTrash3Fill } from 'react-icons/bs'

function Todo({task,deleteTodo, editTodo}) {
  return (
    <div className='flex justify-between items-center  bg-gray-600 text-white py-3 px-5 rounded-md mb-1 cursor-pointer' >
        <p className='font-primary'>{task.task}</p>
        <div className='flex items-center gap-x-5'>
            <AiFillEdit className={'text-x1'} onClick={() => editTodo(task.id)} />
            <BsFillTrash3Fill className={'text-x1'} onClick={() => deleteTodo(task.id)}/>
        </div>
      
    </div>
  )
}

export default Todo