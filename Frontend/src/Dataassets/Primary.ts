import { createSlice, configureStore } from '@reduxjs/toolkit'

const existSlice = createSlice({
  name: "auth",
  initialState: {existuser : "", logged : false},
  reducers : {
    login(state:any) {
        state.logged = true;
    }
  }
})

export const existData = existSlice.actions

export const store = configureStore({
  reducer: existSlice.reducer,
})
