import React, { useState } from "react";

export function Form({createTodo}) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(value);
    setValue('');
  };
  return (

    <form className="mb-4 font-primary flex justify-center  w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        className="outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300"
        placeholder="What task do you have today?"
        onChange={(e) => setValue(e.target.value)} value={value}
      />
      <button className="bg-gray-600 h-14 border-none px-6  hover:bg-gray-500 transition-colors text-white cursor-pointer rounded ml-3">
        Add Task
      </button>
    </form>
  );
}
