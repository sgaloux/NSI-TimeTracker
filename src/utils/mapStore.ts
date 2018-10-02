import RootStore from '../stores/RootStore';

const mapStore = (func: (root: typeof RootStore.Type) => object) => (stores: {
  store: typeof RootStore.Type;
}) => func(stores.store);

export default mapStore;
