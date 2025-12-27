import type React from "react"



export type Task = [string, boolean]
export type SetTask = React.Dispatch<React.SetStateAction<Task[]>>

export type Tasks = Task[]
export type SetTasks = React.Dispatch<React.SetStateAction<Tasks>>





