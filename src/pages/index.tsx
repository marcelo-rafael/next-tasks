import Selection from '../components/lista/Selection';

export default function Home() {
  return (
    <div className={`
      flex flex-col bg-purple-600 
      justify-center items-center h-screen
      text-white
    `}>
      <Selection value={true}  />
      <Selection value={false}  />
    </div>
  )
}
