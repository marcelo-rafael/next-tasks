import Task from '../model/Task';
import TodoList from '../model/TodoList';
import TypeFilter from '../model/TypeFilter';

const initialTasks: Task[] = [
  Task.createActive(1, 'Estudar Next'),
  Task.createCompleted(2, 'Limpar carro'),
  Task.createActive(3, 'Comprar livro do mês')
]

export default new TodoList(initialTasks, TypeFilter.NONE)