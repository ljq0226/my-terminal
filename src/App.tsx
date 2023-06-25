import { BottomBar, TrafficLight } from './components'

function App() {
  return (
    <div className='relative w-[700px] h-[500px] flex flex-col' >
    <div className='absolute w-full top-2 window-header'>
      <TrafficLight />
    </div>
    <div
      className="flex flex-col p-4 pr-[5px] h-full text-white bg-[#1C1C1E]/95 rounded-lg"
      style={{ fontFamily: 'Menlo, monospace', fontSize: '14px' }}
    >
      <div className="h-6 rounded-lg"></div>
      <div className="flex flex-col flex-1 w-full mb-2 overflow-y-scroll scrollbar">
        <div>Welcome to Terminal,type `help` to get started,have fun!</div>
        <div
          className='flex-1 w-full'
        >
        </div>
      </div>
    </div>
    <div className='absolute bottom-0 w-full '>
      <BottomBar/>
    </div>
  </div>
  )
}

export default App
