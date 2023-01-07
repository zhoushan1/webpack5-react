import React from 'react'
import request from './utils/request'
import './app.less'

// function fetchData() {
//   return request.get('/api/test')
// }

function App() {
  const handleClick = async () => {
    // const res = await fetchData()
    // console.log(1111,res)
    // fetchData().then((res:any) => {
    //   console.log(2222,res)
    // }).then(res => {
    //   console.log(333, res)
    // }).finally(res => {
    //   console.log(666,res)
    // })
  }

  return (
    <div>
      <h1>hello</h1>
      <div className="button-wrap">
        <div>啦啦啦1</div>
        <button onClick={handleClick}>测试接口</button>
      </div>
    </div>
  )
}

export default App
