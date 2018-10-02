import { types } from 'mobx-state-tree';

const RootStore = types
  .model('RootStore', {
    applicationTitle: 'NSI - Time Tracker'
  })
  .actions(self => ({
    changeTitle(newTitle: string) {
      self.applicationTitle = newTitle;
    }
  }));

export default RootStore;
