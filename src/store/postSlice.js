import { createSlice } from "@reduxjs/toolkit";

const initialState=  {
   posts: [],
   loading: false,
   error: null,
}

const postSlice = createSlice({
   name: 'post',
   initialState,
   reducers: {
      createPost: (state, action) => {
         state.posts = action.payload;
         state.loading = false;
         state.error = null;
      },
      updatePost: (state) => {
         state.loading = true;
         state.error = null;
      },
      deletePosts: (state) => {
         state.posts = [];
         state.loading = false;
         state.error = null;
      },
      getPosts:(state) => {
         state.loading = true;
         state.error = null;
      }

   }
})

export default postSlice.reducer;
export const { getPosts, getPostsLoading } = postSlice.actions;  // export actions