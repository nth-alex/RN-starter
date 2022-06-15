import React from 'react'
import {NativeBaseProvider} from 'native-base'
import RootStore, {StoreContext} from './src/store/store'
import StackNavigator from './src/navigation/StackNavigator'

const store = new RootStore()

const App = () => {

  return (
    <StoreContext.Provider value={store}>
      <NativeBaseProvider>
        <StackNavigator/>
      </NativeBaseProvider>
    </StoreContext.Provider>
  )
}

export default App
