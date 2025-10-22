import React, { useState } from 'react'
import { Head, Form, router, Link } from '@inertiajs/react'
import { X } from 'lucide-react'

export default function Index({ todos }) {
    const toggleComplete = (todo) => {
        router.put(`/todos/${todo.id}`, {
            completed_at: todo.completed_at ? null : new Date().toISOString(),
        });
    };
    const total = todos.length
    const completed = todos.filter(todo => todo.completed_at).length
    const pending = total - completed 

    return (
        <div className="p-4">
            <Head title='TodoMVC' />
            <Form action="/todos" method="post" className="mb-4">
                <input
                    type="text"
                    name="task"
                    className="p-3 w-full border-2 rounded"
                />
            </Form>

            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex items-center gap-2 p-3 border-2 rounded">
                        <input 
                            type="checkbox" 
                            checked={!!todo.completed_at}
                            onChange={() => toggleComplete(todo)}
                            className="w-6 h-6"
                        />
                        <span 
                            className={`flex-1 ${todo.completed_at ? 'line-through' : ''}`}
                        >
                            {todo.task}
                        </span>
                        <Link href={`/todos/${todo.id}`} method="delete">
                            <button className='bg-orange-600 rounded text-white items-center flex'>
                                <X />
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="w-full border-2 p-3 rounded mt-4">
                <p>Completed: {completed} | Pending: {pending} | Total: {total} </p>
            </div>
        </div>
    );
}