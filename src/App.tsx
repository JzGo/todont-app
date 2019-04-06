import React, { useState } from 'react';
import ToDontsList from './ToDontsList'

const toDontsList: Array<Object> = [
  { title: 'oversleep', description: 'sleeping too much' },
  { title: 'overstudy', description: 'study too much'}
]

function App() {

  const [ toDonts, setToDonts] = useState(toDontsList)
  console.log(toDonts)
  return(
    [
      <h1>To Don't</h1>,
      <h3>Remember that thing you're not supposed to do.</h3>,
      <ToDontsList toDonts={toDonts} />
    ]
  )
}

export default App;
