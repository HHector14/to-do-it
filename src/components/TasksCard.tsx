import Task from "./Task";
import '../App.css'
import useHandleTask from "../hooks/useHandleTask";
import type { TaskCard } from "../types/components";

export default function TasksCard({ tasks, setTasks }: TaskCard) {
  const { getTotalTasksFinished } = useHandleTask({tasks, setTasks});
  return (
    <div className='section'>
      <h1>TO DO IT</h1>
      {tasks.length == 0 ?
          <p style={{ fontSize: '20px', fontWeight: "bold" }}>NO TASKS YET</p>
          :
          <p style={{textAlign:"right", marginRight: '20px', fontWeight: '700', color: '#bebabaff'}}>FINISHED {getTotalTasksFinished()}/{tasks.length}</p>

      }
      {tasks.map((item, index) => (
        <Task
          key={index}
          index={index}
          item={item}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </div>
  )
}