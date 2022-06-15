import React, {useEffect} from 'react'
import {View, Text} from 'react-native'
import {Box, Center, Spinner} from 'native-base'
import {navigateAndSimpleReset} from '../../navigation/utils'

const StartupScreen: React.FC = () => {

  const init = async () => {
    await new Promise(resolve => setTimeout(() => resolve(1), 2000))
    navigateAndSimpleReset('Root')
  }

  useEffect(() => {
    init()
  })

  return (
    <Center h="100%">
      <Spinner color="cyan.500" size="lg"/>
    </Center>
  )
}

export default StartupScreen
