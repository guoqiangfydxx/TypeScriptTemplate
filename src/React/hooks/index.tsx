import React, { useEffect, useLayoutEffect, useState, useRef, useCallback } from 'react'
import { Divider, Button } from 'antd'
// 使用自定义的hooks里面就只能是纯函数，如果要是有UI交互的话，以小写字母use开头的组件在React是无法被正确识别的
function ShowFiendStatus(props: { isOnline: boolean }) {
  return <div>
    {props.isOnline ? '用户在线' : '用户离线'}
  </div>
}

function UseTestHooks() {
  const [isOnline, setIsOnline] = useState(false)

  function toggleOnline() {
    setIsOnline(!isOnline)
  }

  return (<div>
    <Button onClick={toggleOnline}>切换是否在线</Button>
    <ShowFiendStatus isOnline={isOnline} />
  </div>)
}

function Example() {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   document.title = `you clicked ${count} times`
  // })

  useLayoutEffect(() => {
    document.title = `you havd clicked ${count} times`
  })

  return (
    <div>
      <p>you clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>Click me</Button>
      <Button onClick={() => setCount(prevCount => prevCount + 2)}>函数式更新</Button>
    </div>
  )
}

function TestForm() {
  const [name, setName] = useState('mary')

  useEffect(() => {
    localStorage.setItem('formData', name)
  })

  const [surname, setSurname] = useState('Popins')

  useEffect(() => {
    document.title = name + ' ' + surname
  })

  return (
    <Button onClick={() => setName('')}>change name</Button>
  )
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return width
}

function MyResponseiveComponent() {
  const width = useWindowWidth()
  return (
    <p>Window width is {width}</p>
  )
}

function usePrevious(count: number) {
  const ref = useRef<number>()
  useEffect(() => {
    ref.current = count
  })
  return ref.current
}

function Counter() {
  const [count, setCount] = useState(0)
  const prevCount = usePrevious(count)
  return <div>
    <h1>Now: {count}, before: {prevCount}</h1>
    <Button onClick={() => setCount(count + 1)}>incease count</Button>
  </div>

}

function Example1() {
  const [count, setCount] = useState(0);

  // hooks存在快照，所以其handleAlertClick一直读取的都是其那一次对应的count，每一次的处理函数和count都是不一样的
  function handleAlertClick() {
    setTimeout(() => {
      alert('You clicked on: ' + count);
    }, 3000);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={handleAlertClick}>
        Show alert
      </button>
    </div>
  );
}

function MeasureExample() {
  const [height, setHeight] = useState(0)

  const measureRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height)
    }
  }, [])

  return (
    <>
      <h1 ref={measureRef}>hello world</h1>
      <h2>the above header is {Math.round(height)}px tall</h2>
    </>
  )
}

function TimeCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      console.log('in-setinterval', count)
      setCount(c => c + 1)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return <h1>定时器中的count为：{count}</h1>
}

function FriendStatus() {
  return <div>
    <Divider>hooks</Divider>
    <UseTestHooks />
    <Example />
    <TestForm />
    <MyResponseiveComponent />
    <Counter />
    <Example1 />
    <MeasureExample />
    <TimeCounter />
  </div>
}

export default FriendStatus