import { TaskList } from './components/TaskList'
import './static/styles/App.css'

export default function App() {
  return (
    <div className="toDoList">
      <TaskList title="To Do" id="toDo" />
      <TaskList title="Doing" id="doing" />
      <TaskList title="Done" id="done" />
    </div>
  )
}
