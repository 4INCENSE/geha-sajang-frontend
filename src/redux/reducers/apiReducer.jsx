const initialState = {
  data: [],
  loading: false,
  error: false,
  errorMessage: null
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: action.payload
      };
    case 'SUCCESS':
      return {
        ...state,
        data: action.payload
      };
    case 'ERROR':
      return {
        ...state,
        errorMessage: action.payload,
        error: true
      };
    default:
      return state;
  }
};

export { apiReducer };
