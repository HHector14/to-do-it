import type React from "react"
import type { SetTasks, Task, Tasks } from "."

export type Form = {
  task : string
  setTask : React.Dispatch<React.SetStateAction<string>>
  tasks : Tasks
  setTasks : SetTasks
}

export type TaskComponent = {
  index : number
  item : Task
  tasks : Tasks
  setTasks : SetTasks
}

export type TaskCard = {
  tasks : Tasks
  setTasks : SetTasks
}