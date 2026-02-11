import type React from "react"
import type { SetTasks, Task, Tasks } from "."

export type Form = {
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
  setIsOpen : React.Dispatch<React.SetStateAction<boolean>>
}