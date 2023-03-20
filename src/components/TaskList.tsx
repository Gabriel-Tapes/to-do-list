import { useEffect, useState } from 'react'
import { Task } from './Task'
import './styles/TaskList.css'

interface TaskListProps {
  title: string
  id: string
}

export const TaskList = ({ title, id }: TaskListProps) => {
  const [tasks, setTasks] = useState<string[]>([])
  const [isOver, setIsOver] = useState<boolean>(false)

  useEffect(() => {
    const storageTasks = localStorage.getItem(id)
    if (storageTasks && tasks.length < JSON.parse(storageTasks).length)
      setTasks(JSON.parse(storageTasks))
    else if (storageTasks && tasks.length > JSON.parse(storageTasks).length)
      localStorage.setItem(id, JSON.stringify(tasks))
  }, [localStorage.getItem(id), tasks])

  return (
    <div className="taskList" id={id}>
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
              setTasks(tasks => {
                const allTasks = tasks.filter(
                  (_, taskIndex) => taskIndex !== index
                )

                localStorage.setItem(id, JSON.stringify(allTasks))
                return allTasks
              })
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
