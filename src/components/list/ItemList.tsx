import Selection from './Selection';

interface ItemListProps {
  value: string
  completed: boolean
  toggleStatus: () => void
}

export default function ItemList(props: ItemListProps) {
  const textStyle = props.completed ? 
    'line-through text-gray-300' : 'text-gray-500'

  return (
    <li onClick={props.toggleStatus} className={`
    text-black
      flex items-center p-5 text-xl
      border-b border-gray-400 cursor-pointer
    `}>
      <Selection value={props.completed} />
      <span className={`
        font-light ml-5
        ${textStyle}
      `} >{props.value}</span>
    </li>
  )
}