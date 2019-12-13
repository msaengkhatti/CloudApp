import {createStore, combineReducers} from 'redux';
import imagesReducer from '../reducers/countReducer';

const rootReducer = combineReducers({images: imagesReducer});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
