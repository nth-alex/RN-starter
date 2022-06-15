import {CommonActions, createNavigationContainerRef} from '@react-navigation/native'
import {RootStackParamList} from './types'

export const navigationRef = createNavigationContainerRef<RootStackParamList>()

export function navigate(name: keyof RootStackParamList, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  }
}

export function navigateAndSimpleReset(name: keyof RootStackParamList, index = 0) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{name}],
      }),
    )
  }
}
