import {createStore, combineReducers} from 'redux';
import imagesReducer from '../reducers/reducers';

const rootReducer = combineReducers({imagesStore: imagesReducer});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
