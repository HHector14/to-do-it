import Task from "./Task";
import '../App.css'
import useHandleTask from "../hooks/useHandleTask";
import type { TaskCard } from "../types/components";
import { LinearProgress } from "@mui/material";
export default function TasksCard({ tasks, setTasks }: TaskCard) {
  const { getTotalTasksFinished } = useHandleTask({tasks, setTasks});
   const progress = getTotalTasksFinished() * 100 / tasks.length || 0;
  return (
    <div className='section'>
      <h1>TO DO IT</h1>
      {tasks.length == 0 ?
          <p style={{ fontSize: '20px', fontWeight: "bold" }}>NO TASKS YET</p>
          :
 <>
          <LinearProgress variant="determinate" value={progress} />
          <p className="finished-count">FINISHED {getTotalTasksFinished()}/{tasks.length}</p>

          </>


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