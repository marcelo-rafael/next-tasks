import { useState } from 'react'
import List from '../components/list/List'
import Content from '../components/template/Content'
import Header from '../components/template/Header'
import initialTasks from '../data/mocks'

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks)

  return (
    <div className={`
      flex flex-col bg-gray-300 h-screen
    `}>
      <Header>
      </Header>

      <Content>
        <List tasks={tasks} changed={(newTasks) => {
          setTasks(newTasks)
        }} />
      </Content>
    </div>
  )
}
