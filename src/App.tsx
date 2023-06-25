import { useDraggable } from '@neodrag/react'
import type { DragOptions } from '@neodrag/react'
import { useRef, useState } from 'react'
import { BottomBar, CommandNotFound, Help, Row, TrafficLight } from './components'
import { key } from './utils'
import { FolderSystem } from './mock'

interface CommandList {
  [key: string]:
  { (): void } | { (arg: string): void }
}
function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [changeCount, setChangeCount] = useState<number>(0)
  const [currentId, setCurrentId] = useState<number>(0)
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [folderSysteam, setFolderSysteam] = useState(new Map(Object.entries(FolderSystem)))
  const [currentFolderId, setCurrentFolderId] = useState(0)
  const [currentDirectory, setCurrentDirectory] = useState<string>('')

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
  const cat = () => {

  }
  const cd = () => {

  }
  const clear = () => {

  }
  const ls = () => {

  }
  // help 命令
  const help = () => {
    generateRow(<Help key={key()} />)
  }

  const mkdir = () => {

  }
  const touch = () => {

  }

  const commandList: CommandList = {
    cat,
    cd,
    clear,
    ls,
    help,
    mkdir,
    touch,
  }

  // 执行方法
  function executeCommand(event: React.KeyboardEvent<HTMLInputElement>, id: number) {
    const input = document.querySelector(`#terminal-input-${id}`) as HTMLInputElement
    const [cmd, args] = input.value.trim().split(' ')
    if (event.key === 'ArrowUp') {
    }
    else if (event.key === 'ArrowDown') {
    }
    else if (event.key === 'Tab') {
    }
    else if (event.key === 'Enter') {
      // 将新输入 command 加入 commandHistory 中
      const newArr = commandHistory
      newArr.push(input.value.trim())
      setCommandHistory(newArr)
      // 如果输入 command 符合就执行
      if (cmd && Object.keys(commandList).includes(cmd))
        commandList[cmd](args)
      else if (cmd !== '')
        generateRow(<CommandNotFound key={key()} command={input.value.trim()} />)
      // 每次无论 command 符不符合，都需要生成一行新的 Row,并且 curentId++
      setCurrentId(id => id + 1)
      setTimeout(() => {
        generateRow(
        <Row
          key={key()}
          id={commandHistory.length}
          onkeydown={(e: React.KeyboardEvent<HTMLInputElement>) => executeCommand(e, commandHistory.length)}
        />,
        )
      }, 100)
    }
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
