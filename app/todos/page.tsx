import React from 'react'
import { prisma } from '../db'
import Link from 'next/link'

const Page = async () => {

    const todos = await prisma.todo.findMany()

    return (
        <div className='p-6 gap-6 flex flex-col'>
            <Link className='bg-blue-600 text-center text-white py-2 rounded-lg' href="/"> Ekle </Link>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}> {todo.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Page