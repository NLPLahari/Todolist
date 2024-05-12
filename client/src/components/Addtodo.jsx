import React, { useState } from 'react';
import axios from 'axios';

export default function Addtodo() {
    const [name, setName] = useState([]);
    const [description, setDescription] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/add", {name:name, description: description})
        .then(res => {location.reload()})
        .catch(err => console.log(err))
    }

    return (
        <section onSubmit={handleSubmit} className='bg-amber-500 p-8 rounded-md w-full'>
            <form action="" className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="name" className='text-black'><b>Name</b></label>
                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className='w-full rounded-xl px-4 py-2' />
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="name" className='text-black'><b>Description</b></label>
                    <input type="text" required value={description} onChange={(e) => setDescription(e.target.value)} className='w-full rounded-xl px-4 py-2' />
                </div>
                <div className='flex justify-center md:justify-end items-center'>
                    <button type='submit' className='bg-amber-50 rounded-full text-black px-4 py-2'><b>Add Todo</b></button>
                </div>
            </form>
        </section>
    )
}
