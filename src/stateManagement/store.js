import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './slices/imageSlice';
import todoReducer from './slices/todo'
import cartVisibilitySlice from './slices/cartVisibilitySlice';
import cartReducer from './slices/cartSlice';
import storeReducer from './slices/storeSlice';
import hoverReducer from './slices/navbarHoverSlice'

const store = configureStore({
  reducer: {
    image: imageReducer,
    todo:todoReducer,
    visibility:cartVisibilitySlice,
    allCart: cartReducer,
    stores:storeReducer,
    hover:hoverReducer
  },
});

export default store;
