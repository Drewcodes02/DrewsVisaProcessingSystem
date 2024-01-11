import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applicantReducer } from './reducers/applicantReducer';
import visaApplicationReducer from './reducers/visaApplicationReducer';

const rootReducer = combineReducers({
  applicant: applicantReducer,
  visaApplication: visaApplicationReducer,
  // ...other reducers here
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
