import Task from './Task';
import TypeFilter from './TypeFilter';

export default class TodoList {
  #all: Task[]
  #usedFilter: TypeFilter
  
  constructor(all: Task[], usedFilter = TypeFilter.NONE) {
    this.#all = all
    this.#usedFilter = usedFilter ?? TypeFilter.NONE
  }

  get items() {
    return this.applyFilterTo(this.#all)
  }

  get quantity() {
    return this.items.length
  }

  get usedFilter() {
    return this.#usedFilter
  }

  addTask(newTask: Task): TodoList {
    const all = [...this.#all]
    all.push(newTask)
    return new TodoList(all, this.usedFilter)
  }

  modifyTask(modifiedTask: Task): TodoList {
    const all = this.#all.map(task => {
      return task.id === modifiedTask.id ? modifiedTask : task
    })
    return new TodoList(all, this.usedFilter)
  }

  filterActives(): TodoList {
    if(!this.showingOnlyActive()) {
      return new TodoList(this.#all, TypeFilter.ACTIVE)
    } else {
      return this
    }
  }

  deleteCompleted(): TodoList {
    const onlyActives = this.#all.filter(task => task.active)
    return new TodoList(onlyActives, TypeFilter.NONE)
  }

  filterCompleted(): TodoList {
    if(!this.showingOnlyCompleted()) {
      return new TodoList(this.#all, TypeFilter.COMPLETED)
    } else {
      return this
    }
  }

  RemoveFilter(): TodoList {
    if(!this.showingAll()) {
      return new TodoList(this.#all, TypeFilter.NONE)
    } else {
      return this
    }
  }

  showingAll(): boolean {
    return this.#usedFilter === TypeFilter.NONE
  }

  showingOnlyActive(): boolean {
    return this.#usedFilter === TypeFilter.ACTIVE
  }

  showingOnlyCompleted(): boolean {
    return this.#usedFilter === TypeFilter.COMPLETED
  }

  private applyFilterTo(tasks: Task[]): Task[] {
    if(this.showingOnlyActive()) {
      return this.applyActiveFilters(tasks)
    } else if(this.showingOnlyCompleted()) {
      return this.applyCompletedFilters(tasks)
    } else {
      return [...tasks]
    }
  }

  private applyActiveFilters(tasks: Task[]): Task[] {
    return tasks.filter(task => task.active)
  }

  private applyCompletedFilters(tasks: Task[]): Task[] {
    return tasks.filter(task => task.completed)
  }
}