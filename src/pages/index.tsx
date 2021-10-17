import ItemList from '../components/lista/ItemList';
import Selection from '../components/lista/Selection';

export default function Home() {
  return (
    <div className={`
      flex flex-col bg-purple-600 
      justify-center items-center h-screen
      text-white
    `}>
      <ul>
        <ItemList value="Exemplo de item #01" completed={false} toggleStatus={() => {}} />
        <ItemList value="Exemplo de item #02" completed={true} toggleStatus={() => {}} />
      </ul>
    </div>
  )
}
