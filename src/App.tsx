import './App.css'
import TasksCard from './components/TasksCard'
import Form from './components/Form'
import ModalForm from './components/ModalForm'
import { useLocalStorage } from './hooks/useLocalStorage'
import type { Task } from './types'
import { useState } from 'react'
import { useMediaQuery } from './hooks/useMediaQuery'


function App() {

  const isMobile = useMediaQuery("(max-width: 800px)");
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [tasks, setTasks] = useLocalStorage<Task[]>({
    key: "tasks",
    initialValue: []
  });

  return (
    <>
      <div className='container'>
        {isOpen && <ModalForm onClose={() => setIsOpen(false)} tasks={tasks} setTaks={setTasks} />}
        {!isMobile && (
          <Form
            tasks={tasks}
            setTasks={setTasks}
          />
        )}
        <TasksCard
          tasks={tasks}
          setTasks={setTasks}
          setIsOpen={setIsOpen}
        />
      </div>
    </>
  )
}

export default App
