import { combineReducers,configureStore } from '@reduxjs/toolkit';
import openSlice from './openSlice';
import locationSlice from './locationSlice';
import modalSlice from './modalSlice';

const rootReducer = combineReducers({
	open: openSlice,
	location: locationSlice,
	modalDel: modalSlice
});

 export const store = configureStore({
	 reducer: rootReducer,
 })