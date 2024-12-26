import {configureStore} from '@reduxjs/toolkit';
import authSlice from "./authSlice"

const store = configureStore({
   reducer: {
      auth: authSlice,
      //TODO: Add more slice for post
   }
});

export default store;