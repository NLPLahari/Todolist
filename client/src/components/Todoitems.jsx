import React, { useState } from 'react';
import axios from 'axios';

export default function Todoitems({ id, name, description, complete }) {
    const handleComplete = (id) => {
        axios.put("http://localhost:4000/update/" + id)
            .then(res => {location.reload()})
            .catch(err => console.log(err))
    }
    
    const handleDelete = (id) => {
        axios.delete("http://localhost:4000/delete/" + id)
            .then(res => {location.reload()})
            .catch(err => console.log(err))
    }

    return (
        <li className=' w-full p-4 border-2 border-zinc-700 border-b-zinc-900'>
            <div className='flex flex-col justify-between items-center md:flex-row'>
                <div className='flex flex-col'>
                    <div className={`${!complete ? "text-zinc-900" : " line-through text-gray-500"} text-3xl text-amber-500 `}>
                        {name}
                    </div>
                    <div className={`${!complete ? "text-black" : " line-through text-gray-500"}`}>
                        {description}
                    </div>
                </div>
                <div className='flex flex-row gap-4'>
                    {!complete &&
                        <button onClick={() => handleComplete(id)} className='rounded-full bg-white font-semibold p-1 px-2 border-2 border-green-800 text-green-800 text-center'>
                            Complete
                        </button>
                    }
                    <button onClick={()=> handleDelete(id)} className='rounded-full bg-white font-semibold p-1 px-3 border-2 border-red-600 text-red-600 '>
                        Delete
                    </button>
                </div>
            </div>
        </li>
    )
}
