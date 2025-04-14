// assignment5/store.js
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);
console.log('Assignment5 component rendered');
export default store;
