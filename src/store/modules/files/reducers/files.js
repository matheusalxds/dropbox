import { FILES } from '../actions/files';

const INITIAL_STATE = {
  data: null,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FILES.LOAD.SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };

    default:
      return state;
  }
}

export const selectData = state => state.files.data;
