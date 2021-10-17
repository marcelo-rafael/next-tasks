import Task from '../model/Task'
import initialTasks from '../data/mocks'

export default function Home() {
  let tasks = initialTasks
  tasks = tasks.filterActives()
  tasks = tasks.filterCompleted()
  // tasks = tasks.RemoveFilter()
  tasks = tasks.deleteCompleted()

  tasks = tasks.addTask(Task.createCompleted(6, 'Lavar os pratos!!!'))
  tasks = tasks.addTask(Task.createActive(7, 'Cuida das crianças!!!'))
  tasks = tasks.deleteCompleted()

  tasks = tasks.modifyTask(tasks.items[1].toggleStatus())
  tasks = tasks.modifyTask(tasks.items[2].toggleStatus())

  function renderTasks() {
    return tasks.items.map(task => {
      return (
        <div key={task.id}>
          <span>{task.id} | </span>
          <span>{task.description} | </span>
          <span>{task.completed ? 'Concluída' : 'Ativa'}</span>
        </div>
      )
    })
  }

  return (
    <div className={`
      flex flex-col bg-purple-600 
      justify-center items-center h-screen
      text-white
    `}>
    {renderTasks()}
    </div>
  )
}
