import { useState } from 'react'
import List from '../components/list/List'
import initialTasks from '../data/mocks'

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks)

  return (
    <div className={`
      flex flex-col bg-gray-300 
      justify-center items-center h-screen
    `}>
        <List tasks={tasks} changed={(newTasks) => {
          setTasks(newTasks)
        }} />
    </div>
  )
}
