import './App.css'
import Addtodo from './components/Addtodo'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
      <div className=' w-full bg-zinc-800 min-h-screen'>
        <div className=' container mx-auto flex flex-col p-16 justify-center items-center max-w-5xl' >
          <h1 className=' text-white text-5xl pb-8'><b>My Todos</b></h1>
          <Addtodo />
          <TodoList />
        </div>
      </div>

    </>
  )
}

export default App
