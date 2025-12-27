import type { Task, Tasks } from "."

export type LocalStorageTask<T> = {
  key : string
  initialValue : T
}

export type HandleTask = {
  tasks: Tasks
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

