import { Minimize2, Minus, X } from 'lucide-react'

function TrafficLight() {
  return (
  <div className='bg-transparent'>
      <div className="traffic-lights relative flex space-x-2 w-[60px] ml-1 " >
        <div className="bg-red-500 w-[13px] h-[13px] mt-2 rounded-full ml-1">  </div>
        <div className="bg-yellow-500 w-[13px] h-[13px] mt-2 rounded-full "></div>
        <div className="bg-green-500 w-[13px] h-[13px] mt-2 rounded-full "></div>
        <div className='absolute flex mt-[9px]'>
          <X size={10} color='black' strokeWidth={2} className='-ml-[2px]' />
          <Minus size={10} color='black' strokeWidth={3} className='mx-[10px]' />
          <Minimize2 size={10} color='black' strokeWidth={2} className='ml-[1px]' />
        </div>
      </div>
    </div>
  )
}
function BottomBar() {
  const dir = localStorage.getItem('currentDirectory')
  return (
    <div className='flex p-1 space-x-2'>
      <div className='flex items-center justify-center text-[#dba4a2]'>
      <svg className="mx-1 icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3363" id="mx_n_1687598905384" width="16" height="16"><path d="M170.666667 85.333333l213.333333 0 85.333333 128 384 0q52.992 0 90.496 37.504t37.504 90.496l0 469.333333q0 52.992-37.504 90.496t-90.496 37.504l-682.666667 0q-52.992 0-90.496-37.504t-37.504-90.496l0-597.333333q0-52.992 37.504-90.496t90.496-37.504zM423.68 298.666667l-82.346667-128-170.666667 0q-17.664 0-30.165333 12.501333t-12.501333 30.165333l0 597.333333q0 17.664 12.501333 30.165333t30.165333 12.501333l682.666667 0q17.664 0 30.165333-12.501333t12.501333-30.165333l0-469.333333q0-17.664-12.501333-30.165333t-30.165333-12.501333l-429.653333 0z" p-id="3364" fill="#dba4a2"></path></svg>
      <span className=''>~</span>
      <p>{dir}</p>
      </div>
    </div>
  )
}

export { TrafficLight, BottomBar }
