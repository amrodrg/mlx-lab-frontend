
const reducer = (state = '', action: any) => {
  switch (action.type) {
  case 'enterModelName':
    return action.payload;
  default:
    return state;
  }

};

export default reducer;
