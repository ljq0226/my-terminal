import { useDraggable } from '@neodrag/react'
import type { DragOptions } from '@neodrag/react'
import { useRef, useState } from 'react'
import { BottomBar, Row, TrafficLight } from './components'
import { key } from './utils'

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const draggableRef = useRef(null)
  const [content, setContent] = useState<JSX.Element[]>(
    [<Row
      id={0}
      key={key()}
      onkeydown={(e: React.KeyboardEvent<HTMLInputElement>) => executeCommand(e, 0)}
    />,
    ])
  // 初始化 dragable 拖拽设置
  const options: DragOptions = {
    position,
    onDrag: ({ offsetX, offsetY }) => setPosition({ x: offsetX, y: offsetY }),
    bounds: { bottom: -500, top: 32, left: -600, right: -600 },
    handle: '.window-header',
    cancel: '.traffic-lights',
  }
  useDraggable(draggableRef, options)
  // 生成内容
  const generateRow = (row: JSX.Element) => {
    setContent(s => [...s, row])
  }
  // 执行方法
  function executeCommand(event: React.KeyboardEvent<HTMLInputElement>, id: number) {
    const input = document.querySelector(`#terminal-input-${id}`) as HTMLInputElement
    const [cmd, args] = input.value.trim().split(' ')
    if (event.key === 'ArrowUp')
      alert(`ArrowUp,Command is  ${cmd} Args is ${args}`)

    else if (event.key === 'ArrowDown')
      alert(`ArrowDown,Command is  ${cmd} Args is ${args}`)

    else if (event.key === 'Tab')
      alert(`Tab,Command is  ${cmd} Args is ${args}`)

    else if (event.key === 'Enter')
      alert(`Enter,Command is  ${cmd} Args is ${args}`)
  }

  return (
    <div ref={draggableRef} className='relative w-[700px] h-[500px] flex flex-col' >
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
          {...content}
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
