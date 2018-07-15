import { PAPER } from '../actions/paper';

const INITIAL_STATE = {
  data: null,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PAPER.LOAD.SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };

    default:
      return state;
  }
}

export const selectData = state => state.paper.data;
