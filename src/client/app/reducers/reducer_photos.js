import { GET_PHOTOS } from '../actions/index';

const INITIAL_STATE = { all: ["hello", "world"], post: "how are you "};


export default function (state = INITIAL_STATE, action){
  switch(action.type){
  case GET_PHOTOS:
    return { all: 'test' };
  default:
    return state;
  }
}
