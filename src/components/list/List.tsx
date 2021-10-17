import TodoList from '../../model/TodoList';
import Buttonlist from './ButtonList';
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
      flex w-3/5
    `}>
      <ul className={`
        w-full list-none
        bg-white shadow-lg
        rounded-lg
      `}>
        {renderTasks()}
        <li className={`p-5`}>
          <Buttonlist
            selected={false}
            onClick={() => {}}
          >
            Todas
          </Buttonlist>
        </li>
      </ul>
    </div>
  )
}