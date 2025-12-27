import useHandleTask from "../hooks/useHandleTask";
import type { TaskComponent } from "../types/components";

export default function Task({ index,item, tasks, setTasks }: TaskComponent) {
  const completed = item[1];
  const {deleteTask, changeStatusTask} = useHandleTask({tasks, setTasks});

  return (
    <>
      <div className="task">
        <p className={`${completed ? "task-completed" : ""}`}>
          {completed ? '' : '- '}
          {item[0].toUpperCase()}</p>
        <button className={completed ? "warning" : "tercary"}
          onClick={() => changeStatusTask(index)} >
          {completed ? 'UNDO' : 'DONE'}
        </button>
        <button className="delete" onClick={() => deleteTask(item)} >DELETE</button>
      </div>
    </>
  )

}