import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {AppTheme} from '../utils/theme'
import {RootStackParamList} from './types'
import StartupScreen from '../screens/StartupScreen/StartupScreen'
import TabNavigator from './TabNavigator'
import {navigationRef} from './utils'

const Stack = createNativeStackNavigator<RootStackParamList>()

const StackNavigator: React.FC = () => {

  return (
    <NavigationContainer theme={AppTheme} ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Startup" component={StartupScreen}/>
        <Stack.Screen name="Root" component={TabNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
