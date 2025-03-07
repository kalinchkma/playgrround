import { SubmitHandler, useForm } from 'react-hook-form'
import './App.css'
import { useEffect, useState } from 'react'

interface Inputs  {
  name: string
}

function App() {
  const [aptMessage, setApiMessage] = useState<string | null>(null)
  const [todos, setTodos] = useState<[]>([])
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await fetch("http://localhost:9090/create-todo", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (res.status === 200) {
        const data = await res.json();
        setApiMessage(data?.message)
        reset()
        await fetchTodo()
      }
    } catch(error) {
      console.info(error)
    }
  }

  const fetchTodo = async () => {
    try {
      const res = await fetch("http://localhost:9090", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (res.status === 200) {
        const data = await res.json()
        setTodos(data?.data)
      }
    } catch(error) {
      alert(error)
    }
  }

  useEffect(() => {
    (async () => 
      (await fetchTodo()))()
  }, [])


  return (
   <div className=' h-screen w-screen flex flex-col gap-5 items-center justify-center'>
    <h1 className='text-3xl'>Create collection</h1>
    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      {
        aptMessage &&
      <p className='py-2 text-center text-green-500 bg-green-100'>{aptMessage}</p>
      }
      <div className='flex flex-col gap-2'>
      <input className='border py-2 px-4' placeholder='Enter collection name' {...register("name", {
        required: "Collection name is required"
      })} />
      {errors.name?.message && <p className='text-red-500'>{errors.name?.message}</p>}
      </div>
      <button type='submit' className='cursor-pointer border py-2 px-4 bg-zinc-900 text-white font-bold'>Create</button>
    </form>
    {/* todo list */}
    <div className='flex flex-col items-start w-56'>
      <ul className='flex flex-col gap-3 w-full'>
        {todos?.map((d: {[key: string]: string}, idx) => (
        <li key={idx} className='w-full bg-gray-200 py-2 px-4'>{d?.name}</li>
        ))}
      </ul>
    </div>
   </div>
  )
}

export default App
