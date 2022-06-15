import {makeAutoObservable} from 'mobx'
import {createContext, useContext} from 'react'
import TestStore from './testStore'

export default class RootStore {
  testStore: TestStore

  constructor() {
    makeAutoObservable(this)
    this.testStore = new TestStore(this)
  }
}

export const StoreContext = createContext({} as RootStore)
export const useStore = () => useContext(StoreContext)
