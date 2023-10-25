import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  modalOpen: false,
  modalName: '',
};

export const sharedSlice = createSlice({
  name: 'shared',
  initialState: initialState,
  reducers: {
    setModalOpen: (state, action) => {
      state = action.payload;
      return state;
    },
    setModalClose: (state) => {
      state = {modalName: '', modalOpen: false};
    },
  },
});
