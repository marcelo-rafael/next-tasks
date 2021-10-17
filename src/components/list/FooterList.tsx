import TodoList from '../../model/TodoList'
import Buttonlist from './ButtonList'

interface FooterListProps {
  tasks: TodoList
  changed: (tasks: TodoList) => void
}

export default function FooterList(props: FooterListProps) {
  const { tasks, changed } = props

  function renderQuantityOfItems() {
    return (
      <>
        <span className={`text-gray-300 hidden lg:inline`}>
          {tasks.quantity}
          {tasks.quantity === 0
            ? ' Nenhuma tarefa encontrada'
            : tasks.quantity === 1
              ? ' Tarefa encontrada'
              : ' Tarefas encontradas'}
        </span>
        <span className={`flex-1 hidden lg:inline`}></span>
      </>
    )
  }

  function renderFilterButtons() {
    return (
      <>
        <Buttonlist
        selected={tasks.showingAll()}
          onClick={() => changed(tasks.RemoveFilter())}
          className="hidden md:inline"
            >
              Todas
        </Buttonlist>
        <Buttonlist
        selected={tasks.showingOnlyActive()}
          onClick={() => changed(tasks.filterActives())}
          className="mx-4"
            >
              Ativas
        </Buttonlist>
        <Buttonlist
        selected={tasks.showingOnlyCompleted()}
          onClick={() => changed(tasks.filterCompleted())}
            >
              Concluídas
        </Buttonlist>
      </>
    )
  }

  function renderDeleteCompleted() {
    return (
      <>
        <span className="flex-grow"></span>
        <Buttonlist
          onClick={() => changed(tasks.deleteCompleted())}
          >
            Excluir <span className="hidden md:inline">concluídas</span>
        </Buttonlist>
      </>
    )
  }

  return (
    <li className={`flex p-5`}>
      {renderQuantityOfItems()}
      {renderFilterButtons()}
      {renderDeleteCompleted()}
    </li>
  )
}