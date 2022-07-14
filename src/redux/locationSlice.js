import { createSlice } from '@reduxjs/toolkit';
import { locationsData } from '../LocationsData';

const locationSlice = createSlice({
	name: 'location',
	initialState: {
		value: locationsData,
	},
	reducers: {
		addLocation(state, action) {
			state.value.push(action.payload)
		},
		delLocation(state, action) {
			state.value = state.value.filter(loc => loc.id !== action.payload.id)
		}
		
	}
});

export default locationSlice.reducer;
export const { addLocation, delLocation } =  locationSlice.actions;

