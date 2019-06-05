import React, { useRef } from 'react'
// RxJS v6+
import { timer, interval, fromEvent } from 'rxjs'
import { switchMap } from 'rxjs/operators'

// 立即发出值， 然后每1秒发出值
const source = timer(0, 10000)
// 当 source 发出值时切换到新的内部 observable，发出新的内部 observable 所发出的值
const example = source.pipe(switchMap(() => interval(1000)))
// 输出: 0,1,2,3,4,5,6,7,8,9...0,1,2,3,4,5,6,7,8
const subscribe = example.subscribe(val => {
  console.log(val)
})

const SwitchMap = () => {
  return (
    <div>
      switchMap 
    </div>
  )
}
export default SwitchMap
