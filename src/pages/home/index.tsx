import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      <h1>首页</h1>
      <button
        onClick={() => {
          navigate('/about', {
            state: 1111
          })
        }}
      >
        去about
      </button>
    </div>
  )
}

export default Home
