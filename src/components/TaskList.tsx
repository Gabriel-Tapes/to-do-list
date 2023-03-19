import { useState } from 'react'
import './styles/TaskList.css'
import { Task } from './Task'

interface TaskListProps {
  title: string
}

export const TaskList = ({ title }: TaskListProps) => {
  const [tasks, setTasks] = useState<string[]>([])
  const [isOver, setIsOver] = useState<boolean>(false)

  return (
    <div className="taskList">
      <h2>{title}</h2>
      <ul
        className={isOver ? 'draggingOver' : ''}
        onDragOver={e => {
          e.preventDefault()
          setIsOver(true)
        }}
        onDragLeave={e => {
          e.preventDefault()
          setIsOver(false)
        }}
        onDrop={e => {
          e.preventDefault()
          setTasks([...tasks, e.dataTransfer.getData('task')])
          setIsOver(false)
        }}
      >
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
