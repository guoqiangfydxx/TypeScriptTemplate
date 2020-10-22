import React, { useEffect, useLayoutEffect, useState } from 'react'
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

function FriendStatus() {
  return <div>
    <Divider>hooks</Divider>
    <UseTestHooks />
    <Example />
    <TestForm />
    <MyResponseiveComponent />
  </div>
}

export default FriendStatus