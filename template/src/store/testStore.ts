import RootStore from './store'
import {makeAutoObservable} from 'mobx'

export default class TestStore {
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
    this.rootStore = rootStore
  }
}
