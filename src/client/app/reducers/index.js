import { combineReducers } from 'redux';
import PhotoReducer from './reducer_photos';

const rootReducer = combineReducers({
  posts: PhotoReducer
});

export default rootReducer;



// import reactView from './reactView'
// import users from './users'
// import { combineReducers } from 'redux'
// import { routerReducer as routing } from 'react-router-redux'
//
// const rootReducer = combineReducers({
//     reactView,
//     routing,
//     users
// })
//
// export default rootReducer
