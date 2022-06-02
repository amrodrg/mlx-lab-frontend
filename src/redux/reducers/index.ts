// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { combineReducers } from 'redux';
import modelNameReducer from './modelNameReducer';


const reducers = combineReducers({
  modelName: modelNameReducer
});


export default reducers;
