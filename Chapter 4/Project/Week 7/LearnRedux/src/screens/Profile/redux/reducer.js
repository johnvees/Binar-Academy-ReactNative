const initialState = {
  name: 'Yohanes Velly',
  age: 21,
  kriteria: {
    height: '178cm',
    weight: '65kg',
  },
};

export const profileReducer = (state = initialState, action) => {
  console.log(action, 'profile');

  switch (action.type) {
    case 'SET_NAMA':
      return {
        ...state,
        name: action.nama,
      };

    case 'SET_AGE':
      return {
        ...state,
        age: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
