import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
  const params = useLocation()
  console.log('路由参数', params)

  return (
    <div>
      <h1>这是about页</h1>
    </div>
  )
}

export default About
