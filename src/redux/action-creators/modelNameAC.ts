
export const enterModelName = (name: string) => {
  return (dispatch: any) => {
    dispatch({
      type: 'enterModelName',
      payload: name
    });
  };
};
