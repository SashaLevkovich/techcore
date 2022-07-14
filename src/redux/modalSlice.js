import { createSlice } from '@reduxjs/toolkit';


const modalSlice = createSlice({
	name: 'modalDel',
	initialState: {
		id: null,
		del: '',
		isOpen: false,
		
	},
	reducers: {
		addToLocalDel(state, action) {
			state.del = action.payload.location;
			state.id = action.payload.id;
			state.isOpen = true;
		},
		closeModal(state) {
			state.isOpen = false;
		}
	}
});

export default modalSlice.reducer;
export const { addToLocalDel, closeModal } =  modalSlice.actions;

