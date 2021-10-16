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
    } else if(this.applyActiveFilters(tasks)) {
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