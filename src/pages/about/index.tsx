import React from 'react'
import { useLocation } from 'react-router-dom'
import request from '../../utils/request'

async function fetchData() {
  return request.get('/api/test')
}

const About = () => {
  const params = useLocation()
  console.log('路由参数', params)

  const handleClick = async () => {
    const res = await fetchData().finally(() => {
      console.log('执行final')
    })
  }

  return (
    <div>
      <h1>这是about页</h1>
      <button onClick={handleClick}>测试接口</button>
    </div>
  )
}

export default About
