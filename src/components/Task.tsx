import { useState } from "react";
import useHandleTask from "../hooks/useHandleTask";

export default function Task({ index,item, tasks, setTasks }) {
  const [completed, setCompleted] = useState(item[1]);
  const {deleteTask, changeStatusTask} = useHandleTask(tasks, setTasks);

  return (
    <>
      <div className="task">
        <p className={`${completed ? "task-completed" : ""}`}>
          {completed ? '' : '- '}
          {item[0].toUpperCase()}</p>
        <button className={completed ? "warning" : "tercary"}
          onClick={() => changeStatusTask(setCompleted, index)} >
          {completed ? 'UNDO' : 'DONE'}
        </button>
        <button className="delete" onClick={() => deleteTask(item)} >DELETE</button>
      </div>
    </>
  )

}