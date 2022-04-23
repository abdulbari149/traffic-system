import { createSlice } from '@reduxjs/toolkit'

const voilationSlice = createSlice({
  name: 'voilation',
  initialState: {
    voilations: [],
    modal: {
      isOpen: false,
      title: '',
      name: '',
    },
    selectedVoilationId: '',
  },
  reducers: {
    setVoilations(state, { payload }) {
      state.voilations = state.voilations.concat(payload.data)
    },
    openVoilationModal(state, { payload }) {
      state.modal.isOpen = true
      state.modal.name = payload.modalName
      state.modal.title = payload.modalTitle
    },
    closeVoilationModal(state) {
      state.modal.isOpen = false
      state.modal.name = ''
      state.modal.title = ''
    },
    setVoilationId(state, { payload }) {
      state.selectedVoilationId = payload.id
    },
  },
})

export const {
  setVoilationId,
  setVoilations,
  openVoilationModal,
  closeVoilationModal,
} = voilationSlice.actions
export default voilationSlice.reducer
