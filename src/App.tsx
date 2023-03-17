import { TaskList } from './components/TaskList'
import './static/styles/App.css'

export default function App() {
  return (
    <div className="toDoList">
      <TaskList title="To Do" />
      <TaskList title="Doing" />
      <TaskList title="Done" />
    </div>
  )
}
