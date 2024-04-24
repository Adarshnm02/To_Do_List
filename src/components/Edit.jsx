import React, { useState } from "react";

export function Edit({editTodo, task}) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue('');
  };
  return (

    <form className="font-primary flex justify-center  w-full " onSubmit={handleSubmit}>
      <input
        type="text"
        className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-1 mt-1 rounded placeholder:text-gray-300"
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)} value={value}
      />
      <button className="bg-gray-600 h-14 border-none px-4  hover:bg-gray-500 transition-colors text-white cursor-pointer rounded ml-3">
        Update Task
      </button>
    </form>
  );
}
