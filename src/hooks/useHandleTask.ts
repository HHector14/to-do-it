import type { Task } from "../types"
import type { HandleTask } from "../types/hooks"

export default function useHandleTask({tasks, setTasks}:HandleTask){
  
  const deleteTask = (task:Task) => {
    const newTasks = tasks.filter(p => p[0] != task[0])
    setTasks(newTasks)
    localStorage.setItem("tasks", JSON.stringify(newTasks))
  }

  const changeStatusTask = (index:number) => {
    const newTasks: Task [] = tasks.map((t, i) => i === index ? [t[0], !t[1]] : t)
    setTasks(newTasks)
    localStorage.setItem("tasks", JSON.stringify(newTasks))
  }

  const deleteTasksFinished = () =>{
    const newTasks = tasks.filter(t => t[1] == false)
    setTasks(newTasks)
    localStorage.setItem("tasks", JSON.stringify(newTasks))
  }

  const getTotalTasksFinished = () =>{
    const tasksFinished = tasks.filter(t => t[1] == true)
    return tasksFinished.length
  }

  return {deleteTask, changeStatusTask,deleteTasksFinished, getTotalTasksFinished}

}