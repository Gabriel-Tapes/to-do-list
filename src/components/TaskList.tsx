import { useState } from 'react'
import './styles/TaskList.css'

interface TaskListProps {
  title: string
}

export const TaskList = ({ title }: TaskListProps) => {
  const [tasks, setTasks] = useState<string[]>([])
  return (
    <div className="taskList">
      <h2>{title}</h2>
      <ul>
        {tasks.map((task, index) => (
          <Task
            index={index}
            key={index}
            task={task}
            handleRemove={(index: number) => {
              setTasks(tasks.filter((_, taskIndex) => taskIndex !== index))
            }}
          />
        ))}
      </ul>
      <button
        className="add"
        onClick={() => {
          const newTask = prompt('Write the task name')

          newTask && setTasks([...tasks, newTask])
        }}
      >
        Add Task
      </button>
    </div>
  )
}

interface TaskProps {
  index: number
  task: string
  handleRemove: (index: number) => void
}
const Task = ({ index, task, handleRemove }: TaskProps) => {
  return (
    <li className="task" draggable>
      <p>{task}</p>
      <button
        onClick={() => {
          handleRemove(index)
        }}
      >
        x
      </button>
    </li>
  )
}
