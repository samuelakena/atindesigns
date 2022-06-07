import {
  HOUSEDESIGN_LIST_FAIL,
  HOUSEDESIGN_LIST_REQUEST,
  HOUSEDESIGN_LIST_SUCCESS,
} from '../constants/housedesignConstant';

export const housedesignListReducer = (state = { designs: [] }, action) => {
  switch (action.type) {
    case HOUSEDESIGN_LIST_REQUEST:
      return { loading: true, designs: [] };
    case HOUSEDESIGN_LIST_SUCCESS:
      return { loading: false, designs: action.payload };
    case HOUSEDESIGN_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
