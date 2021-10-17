import { useState } from 'react'

import Form from '../components/form/Form'
import List from '../components/list/List'
import Content from '../components/template/Content'
import Header from '../components/template/Header'
import initialTasks from '../data/mocks'
import Task from '../model/Task'
import TodoList from '../model/TodoList'

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks)

  function newTaskCreated(newTask: Task) {
    setTasks(tasks.addTask(newTask))
  }

  function changed(newTasks: TodoList) {
    setTasks(newTasks)
  }

  return (
    <div className={`
      flex flex-col bg-gray-300 h-screen
    `}>
      <Header>
        <Form newTaskCreated={newTaskCreated} />
      </Header>

      <Content>
        <List tasks={tasks} changed={changed} />
      </Content>
    </div>
  )
}
