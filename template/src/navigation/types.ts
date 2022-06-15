import {NavigatorScreenParams} from '@react-navigation/native'

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined
  Startup: undefined
};

export type RootTabParamList = {
  Home: undefined
  About: undefined
};
