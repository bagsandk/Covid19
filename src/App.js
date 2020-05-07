import React from 'react'
import { StatusBar } from 'react-native'
import { darkindigo } from './config/color'
import Route from './route'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={darkindigo} />
      <Route />
    </>
  )
}

export default App

