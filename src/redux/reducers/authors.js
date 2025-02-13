import { SET_AUTHORS, ADD_AUTHOR } from "../actions/actionTypes";

const initialState = {
  authors: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHORS:
      const authors = action.payload;
      return {
        ...state,
        authors,
        loading: false
      };

    case ADD_AUTHOR:
      const newAuthor = action.payload;
      return {
        ...state,
        authors: [newAuthor, ...state.authors]
      };

    default:
      return state;
  }
};

export default reducer;
