import React from 'react'
import Covfefe from 'react-covfefe'

const App = () => (
  <div style={{padding: 60}}>
    <h2>Hello America</h2>
    <br/>
    <code>
      {`
        <Covfefe>I have an important press conference today</Covfefe>
      `}
    </code>
    <br/>
    <Covfefe>I have an important press conference today</Covfefe>
  </div>
)

export default App
