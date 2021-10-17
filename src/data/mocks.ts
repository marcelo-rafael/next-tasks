import Task from '../model/Task';
import TodoList from '../model/TodoList';
import TypeFilter from '../model/TypeFilter';

const initialTasks: Task[] = [
  Task.createActive(1, 'Estudar React.js'),
  Task.createCompleted(2, 'Estudar Next'),
  Task.createActive(3, 'Fazer projetos pessoais'),
  Task.createActive(4, 'Enviar currículos'),
  Task.createActive(5, 'Conseguir emprego dos sonhos'),
  Task.createActive(6, 'Mudar de vida')
]

export default new TodoList(initialTasks, TypeFilter.NONE)