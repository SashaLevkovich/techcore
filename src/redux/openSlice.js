import { createSlice } from '@reduxjs/toolkit';


const openSlice = createSlice({
	name: 'open',
	initialState: {
		isOpen: false,
		isOpenModal: false,
		isOpenAdd: false
	},
	reducers: {
		setOpen(state) {
			state.isOpen = !state.isOpen;
		},
		setOpenModal(state) {
			state.isOpenModal = !state.isOpenModal;
			console.log(state.isOpenModal);
		},
		openAddModal(state) {
			state.isOpenAdd = true;
		},
		closeAddModal(state) {
			state.isOpenAdd = false;
		},
	}
});

export default openSlice.reducer;
export const { setOpen, setOpenModal, openAddModal, closeAddModal } =  openSlice.actions;

