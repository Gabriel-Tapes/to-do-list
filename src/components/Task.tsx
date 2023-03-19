import './styles/Task.css'

interface TaskProps {
  index: number
  task: string
  handleRemove: (index: number) => void
}

export const Task = ({ index, task, handleRemove }: TaskProps) => {
  return (
    <li
      className="task"
      draggable
      onDragStart={e => {
        e.dataTransfer.setData('task', task)
        e.dataTransfer.dropEffect = 'move'
      }}
      onDragEnd={() => {
        handleRemove(index)
      }}
    >
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
