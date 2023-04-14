import { createSlice } from "@reduxjs/toolkit";

interface UserData {
    id: string
    name: string
  }

const initialState = {
     
     data:  [] as UserData[],
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
     
        addData: (state, action ) => {
            state.data.push(action.payload);
        },

        deleteDataID: (state, action ) => {
            
            const { id } = action.payload; 
            console.log(id);
            
            state.data = state.data.filter(item => item.id !== id)


        },


        deleteAllData: (state ) => {
            state.data = [] as UserData[];
        },


    }
});

export const { addData, deleteAllData, deleteDataID} = counterSlice.actions;

export default counterSlice.reducer;

