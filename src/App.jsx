import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'

const App = () => {
  return (
    <>
      {/* mounted sidebar component in app component */}
      <Sidebar/>
      <Main/>
    </>
  )
}

export default App