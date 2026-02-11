import { useState } from 'react';
import '../App.css'
import type { Form } from '../types/components'

export default function Form({ tasks, setTasks}: Form) {
  const [task, setTask] = useState("");
  
  return (
    <div className='section-small'>
      <h1>NEW TASK</h1>
      <textarea wrap='wrap' placeholder='TYPE A NEW TASK' value={task} className='inputText' rows={1} onChange={e => setTask(e.target.value)} />
      <br />
      <button
        className='primary'
        onClick={() => {
          if (task.trim() == '') {
            window.alert("Please, type a task")
          } else {
            setTasks([...tasks, [task, false]])
            setTask("")
          }
        }}>ADD</button>
    </div>
  )
}