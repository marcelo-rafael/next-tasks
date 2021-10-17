import TodoList from '../../model/TodoList';
import Buttonlist from './ButtonList';
import FooterList from './FooterList';
import ItemList from './ItemList';

interface ListProps {
  tasks: TodoList
  changed: (tasks: TodoList) => void
}

export default function List(props: ListProps) {
  const { tasks } = props

  function renderTasks() {
    return tasks.items.map(task => {
      return (
        <ItemList
          key={task.id}
          value={task.description}
          completed={task.completed}
          toggleStatus={() => {
            const modifiedTask = task.toggleStatus()
            const newList = tasks.modifyTask(modifiedTask)
            props.changed(newList)
          }}
        />
      )
    })
  }

  return (
    <div className={`
      flex w-3/5 items-start relative
    `}>
      <ul className={`
        absolute -top-14
        w-full list-none
        bg-white shadow-lg
        rounded-lg
      `}>
        {renderTasks()}
        <FooterList
          tasks={props.tasks}
          changed={props.changed} />
      </ul>
    </div>
  )
}