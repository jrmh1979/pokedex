import { createSlice } from '@reduxjs/toolkit';

export const usernameSlice = createSlice({
    name: 'username',
    initialState: "",
    reducers: {
        changeName : state => {
            return "Diego"
        },
        changeNameValue : ( state, action ) => {
            return action.payload
        }
    }
})

export const { changeName, changeNameValue } = usernameSlice.actions;

export default usernameSlice.reducer;