const CHECK_STATUS = 'CHECK_STATUS';

const initialState = [];

const categoriesSlice = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

const checkStatus = () => ({
  type: CHECK_STATUS,
});

export { checkStatus };
export default categoriesSlice;
