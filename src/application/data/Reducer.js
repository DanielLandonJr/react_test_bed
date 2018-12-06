import * as Actions from './Actions';

const Reducer = (state, action) => {
  switch (action.type) {
    case Actions.STATE_UPDATE_TEST_MESSAGE:
      return {
        ...state,
        testMessage: action.payload
      };
    default:
      return state;
  }
};

export default Reducer;
