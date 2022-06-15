import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from 'react'
import {RootTabParamList} from './types'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import Feather from 'react-native-vector-icons/Feather'
import AboutScreen from '../screens/AboutScreen/AboutScreen'

const BottomTab = createBottomTabNavigator<RootTabParamList>()

const TabNavigator: React.FC = (props) => {

  return (
    <BottomTab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        height: 50,
        paddingBottom: 4,
      },
      tabBarActiveTintColor: '#e54343',
    }}>
      <BottomTab.Screen name="Home" component={HomeScreen} options={{
        title: 'Home',
        tabBarIcon: ({color}) => <Feather name="home" size={20} color={color}/>,
      }}/>
      <BottomTab.Screen name="About" component={AboutScreen} options={{
        title: 'About',
        tabBarIcon: ({color}) => <Feather name="user" size={20} color={color}/>,
      }}/>
    </BottomTab.Navigator>
  )
}

export default TabNavigator
