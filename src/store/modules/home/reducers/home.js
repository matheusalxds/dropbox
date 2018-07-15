import { HOME } from '../actions/home';

const INITIAL_STATE = {
  data: null,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HOME.LOAD.SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };

    default:
      return state;
  }
}

export const selectData = state => state.home.data;
