import store from './app/store';
import * as actions from './app/actionCreator';

const unsubscribe = store.subscribe(() => {
  console.log('Store changed!', store.getState());
});

store.dispatch(actions.bugAdded('bug1'));
store.dispatch(actions.bugAdded('bug2'));
unsubscribe()
store.dispatch(actions.bugAdded('bug3'));
store.dispatch(actions.bugRemoved(1));
store.dispatch(actions.bugResolved(2));
console.log(store.getState());
