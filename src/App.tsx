import { TaskList } from './components/TaskList'
import './App.css'

export default function App() {
  return (
    <div className="toDoList">
      <TaskList title="To Do" />
      <TaskList title="Doing" />
      <TaskList title="Done" />
    </div>
  )
}
