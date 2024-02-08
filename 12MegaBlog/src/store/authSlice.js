import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: false,
  userData: null
}

const authSlice = createSlice({
  name: 'BlogApp',
  initialState,
  reducer: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },

    logout: (state) => {
      state.staus = false;
      state.userData= null;
    }
  }
})

export const{login, logout} = authSlice.actions;

export default authSlice.reducer;